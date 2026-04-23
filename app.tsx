/// <reference path="./types.ts" />
// ============================================================
// app.tsx — Logique commune de tous les quiz (partie React).
// Monté dynamiquement par index.html via window.mountQuizApp(key, {reportAt}).
// Tout le module est wrappé dans une IIFE pour éviter les collisions de noms
// avec le routeur vanilla JS d'index.html (ALL_BADGES, slugName, showToast, etc.).
// Les types (AnalyzeResult, QuizKey, etc.) sont globaux via types.ts.
// ============================================================

(function appJsxModule() {
const { useState, useEffect, useMemo, useRef } = React;

// Applique les préférences globales dès le chargement (cohérence avec la landing)
(function initGlobalPrefs() {
  try {
    if (localStorage.getItem('quiz-theme') === 'dark')  document.documentElement.classList.add('dark');
    if (localStorage.getItem('quiz-dyslexia') === '1')  document.documentElement.classList.add('dyslexia');
  } catch {}
})();

// Toast réutilisable
function showToast(msg: string, icon?: string): void {
  try {
    document.querySelectorAll('.toast').forEach(n => n.remove());
    const t = document.createElement('div');
    t.className = 'toast';
    t.textContent = (icon || '✓') + ' ' + msg;
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 4000);
  } catch {}
}

// Sync au chargement : récupère les attempts depuis le serveur (cross-device).
// Pas de setTimeout arbitraire : on attend simplement DOMContentLoaded pour
// laisser le premier paint se faire, puis on lance la sync asynchrone.
// La dédup via `syncInFlight` (voir plus bas) évite les doubles requêtes
// si index.html et app.tsx tentent la sync en parallèle.
(function initSyncFromServer() {
  if (location.protocol === 'file:') return;
  const run = async () => {
    try {
      const raw = localStorage.getItem('quiz-active-student');
      const active = raw ? JSON.parse(raw) : null;
      if (!active?.name) return;
      const merged = await syncFromServer(active.name);
      if (merged > 0) {
        showToast(`Synchronisé · ${merged} nouveau${merged>1?'x':''} test${merged>1?'s':''} récupéré${merged>1?'s':''}`, '☁️');
      }
    } catch {}
  };
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    queueMicrotask(run);
  } else {
    document.addEventListener('DOMContentLoaded', run, { once: true });
  }
})();

// Enregistre le service worker (PWA) — uniquement en HTTP(S), pas en file://
if ('serviceWorker' in navigator && location.protocol !== 'file:') {
  window.addEventListener('load', () => { navigator.serviceWorker.register('sw.js').catch(() => {}); });
}

// SPA : chaque quiz est chargé dynamiquement depuis window.ALL_QUIZZES via mountQuizApp(key).
// Les bindings sont des `let` pour permettre le swap de contexte entre deux quiz sans réexécuter le module.
let CFG, SUBJECT, DOMAINS, POOL, PICK, PLANS, RESOURCES, SEARCH_SITES, YT_SUFFIX, SUMMER_TOPIC;
function setActiveQuiz(key) {
  const src = (window.ALL_QUIZZES && window.ALL_QUIZZES[key]) || window.QUIZ_CONFIG;
  if (!src) throw new Error(`Quiz config introuvable pour key=${key}`);
  CFG = src;
  window.QUIZ_CONFIG = CFG; // compat lecture externe
  SUBJECT = CFG.SUBJECT;
  DOMAINS = CFG.DOMAINS;
  POOL    = CFG.POOL;
  PICK    = CFG.PICK;
  PLANS   = CFG.PLANS;
  RESOURCES    = CFG.RESOURCES || [];
  SEARCH_SITES = CFG.SEARCH_SITES || 'site:fr.khanacademy.org OR site:lumni.fr';
  YT_SUFFIX    = CFG.YT_SUFFIX || 'college';
  SUMMER_TOPIC = CFG.SUMMER_TOPIC || SUBJECT.short.toLowerCase();
}
// Pas de bootstrap au chargement : setActiveQuiz sera appelé par mountQuizApp(key) depuis le routeur.

// Les helpers F (fraction) et M (math) sont définis par chaque shell,
// avant la construction de QUIZ_CONFIG. Pas besoin ici — les React elements
// dans POOL sont déjà construits.

function searchCourseUrl(domainId) {
  const q = (DOMAINS[domainId]?.search || '') + ' cours';
  return 'https://duckduckgo.com/?q=' + encodeURIComponent(q + ' ' + SEARCH_SITES);
}
function youtubeSearchUrl(domainId) {
  const q = (DOMAINS[domainId]?.search || '') + ' ' + YT_SUFFIX;
  return 'https://www.youtube.com/results?search_query=' + encodeURIComponent(q);
}

// ============================================================
// FICHES MÉMO par ID de chapitre (partagées entre niveaux quand l'ID est identique)
// ============================================================
const MEMO_BANK = {
  // Maths
  relatifs: ['Règle des signes : + × + = + ; − × − = + ; + × − = −', 'Opposé de n : même valeur, signe contraire', 'Soustraire c\'est ajouter l\'opposé : a − b = a + (−b)'],
  fractions: ['a/b + c/d : dénominateur commun (plus petit multiple)', 'a/b × c/d = (a×c)/(b×d)', 'Diviser = multiplier par l\'inverse : a/b ÷ c/d = a/b × d/c', 'Simplifier : diviser haut et bas par un même nombre (PGCD)'],
  puissances: ['aⁿ = a × a × … × a (n fois)', 'aⁿ × aᵐ = aⁿ⁺ᵐ ; aⁿ / aᵐ = aⁿ⁻ᵐ ; (aⁿ)ᵐ = aⁿᵐ', 'a⁻ⁿ = 1/aⁿ ; a⁰ = 1', 'Écriture scientifique : un seul chiffre non nul avant la virgule × 10ⁿ'],
  litteral: ['Distributivité : k(a+b) = ka + kb', 'Réduction : regroupe les termes avec la même lettre', 'Résoudre : isoler x étape par étape, vérifier en remplaçant x'],
  pythagore: ['ABC rectangle en A : BC² = AB² + AC² (BC = hypoténuse)', 'Réciproque : si AB² + AC² = BC², alors ABC est rectangle en A', 'Triplets à connaître : 3-4-5, 5-12-13, 6-8-10, 8-15-17'],
  thales: ['Config Thalès : (MN) // (BC) → AM/AB = AN/AC = MN/BC', 'Réciproque : si rapports égaux ET points alignés dans le même ordre → parallèles', 'Attention à l\'ordre des points dans les rapports'],
  trigo: ['SOH CAH TOA : Sin = O/H, Cos = A/H, Tan = O/A', 'L\'hypoténuse est toujours le côté opposé à l\'angle droit', 'Sur la calculette : cos⁻¹ (acos) pour obtenir un angle depuis un rapport'],
  grandeurs: ['V cube = a³ · V pavé = L × l × h · V cylindre = π r² h · V pyramide/cône = B × h / 3', 'v = d / t (distance ÷ temps)', '1 L = 1 dm³ = 1000 cm³ ; attention : 1h30 = 1,5h'],
  proportion: ['Produit en croix : si a/b = c/d alors a×d = b×c', 'x % de N = x/100 × N', 'Réduction de 20 % = multiplier par 0,80 ; augmentation de 20 % = ×1,20'],
  probas: ['P(A) = cas favorables / cas possibles (entre 0 et 1)', 'Moyenne = somme / nombre de valeurs', 'Médiane = valeur centrale d\'une série triée'],
  transfo: ['Symétrie centrale : O milieu de [AA\'] — conserve longueurs et angles', 'Symétrie axiale : l\'axe est la médiatrice de [AA\']', 'Translation : même direction, même sens, même longueur'],
  // Maths 3ème
  arithmetique: ['PGCD par algorithme d\'Euclide : pgcd(a,b) = pgcd(b, a mod b)', 'Fraction irréductible : simplifier par le PGCD', 'Premiers entre eux ⇔ PGCD = 1'],
  remarquables: ['(a + b)² = a² + 2ab + b²', '(a − b)² = a² − 2ab + b²', '(a + b)(a − b) = a² − b²'],
  equations: ['Isoler x des deux côtés, faire passer les x à gauche, les nombres à droite', 'Équation produit nul : (A)(B) = 0 ⇔ A = 0 OU B = 0', 'Inéquation : multiplier/diviser par négatif INVERSE le sens'],
  fonctions: ['Fonction linéaire : f(x) = ax (droite par l\'origine)', 'Fonction affine : f(x) = ax + b (droite, ordonnée à l\'origine b)', 'Image de x : f(x). Antécédent de y : résoudre f(x) = y'],
  geomespace: ['V sphère = (4/3) π r³', 'V cône = V pyramide = (B × h) / 3', 'Agrandissement k : longueurs ×k, aires ×k², volumes ×k³'],
  stats: ['Médiane : valeur du milieu (série triée)', 'Étendue = max − min', 'Fréquence = effectif / total (souvent en %)'],
  // Maths 6ème
  numeration: ['Positions : unités / dizaines / centaines / milliers · puis dixièmes / centièmes / millièmes après la virgule', 'Pour comparer : aligner les virgules et compléter par des 0 si besoin', '12,5 = 12,50 (on peut ajouter des zéros à droite de la partie décimale)'],
  operations: ['Priorités : parenthèses, puis × et ÷, puis + et −', 'Division euclidienne : a = b × q + r avec 0 ≤ r < b'],
  angles: ['Aigu < 90° ; Droit = 90° ; Obtus entre 90° et 180° ; Plat = 180°', 'Somme des angles d\'un triangle = 180°', 'Rapporteur : aligner le 0 sur un côté'],
  geometrie: ['Équilatéral : 3 côtés égaux + 3 angles de 60°', 'Isocèle : 2 côtés égaux + 2 angles égaux à la base', 'Carré : 4 côtés égaux + 4 angles droits'],
  aires: ['P_rectangle = 2(L + l) ; A_rectangle = L × l', 'A_carré = côté × côté ; A_triangle = (base × hauteur) / 2', 'A_disque = π r² ; P_cercle = 2π r'],
  symetrie: ['Axe de symétrie : l\'image et la figure coïncident quand on plie', 'Rectangle : 2 axes ; Carré : 4 axes ; Cercle : infinité'],
  unites: ['km · hm · dam · m · dm · cm · mm (×10 à chaque pas)', '1 kg = 1000 g · 1 L = 100 cL = 1000 mL', '1h30 = 1,5 h (pas 1,3 !)'],
  // Maths 5ème
  triangles: ['Somme des angles = 180°', 'Inégalité triangulaire : le plus grand côté < somme des 2 autres', 'Isocèle : 2 côtés + 2 angles à la base égaux'],
  parallelog: ['2 paires de côtés parallèles + opposés égaux', 'Diagonales se coupent en leur milieu', 'Losange : 4 côtés égaux. Rectangle : 4 angles droits. Carré : les deux'],
  volumes: ['V prisme droit = B × h (B = aire de la base)', 'V cylindre = π r² h', '1 L = 1 dm³ = 1000 cm³'],

  // Physique-Chimie
  electricite: ['Série : un seul chemin, intensité identique partout', 'Dérivation : plusieurs branches, tensions égales', 'Ampèremètre en série · Voltmètre en dérivation'],
  loiOhm: ['U = R × I (U en V, R en Ω, I en A)', 'I = U / R · R = U / I'],
  optique: ['Lumière = ligne droite dans un milieu transparent homogène', 'c ≈ 300 000 km/s = 3 × 10⁸ m/s', 'Source primaire (émet) vs secondaire (diffuse)'],
  couleurs: ['Additive (lumières RVB) : R+V = jaune, R+V+B = blanc', 'Soustractive (peinture CMJ) : cyan-magenta-jaune', 'Objet rouge en lumière verte → paraît noir'],
  matiere: ['ρ = m / V (g/cm³ ou kg/m³) · eau = 1 g/cm³', 'ρ_obj < ρ_eau → flotte', 'Conservation de la masse aux changements d\'état'],
  atomes: ['Atome = noyau (protons + neutrons) + électrons', 'Ion = atome ayant gagné ou perdu des électrons', 'Molécules usuelles : H₂O, CO₂, O₂, N₂'],
  chimie: ['Réactifs → Produits (conservation des atomes, de la masse)', 'Test O₂ : bûchette incandescente qui se rallume', 'Test CO₂ : eau de chaux qui se trouble'],
  ph: ['pH < 7 acide · pH = 7 neutre · pH > 7 basique', 'Diluer un acide → pH se rapproche de 7'],
  mouvement: ['v = d / t · conversions : km/h → m/s (diviser par 3,6)', 'Choisir un référentiel avant de parler de mouvement'],
  poids: ['P = m × g · sur Terre g ≈ 10 N/kg', 'Masse (kg) invariable · Poids (N) change selon l\'astre'],
  forces: ['Force = vecteur (point d\'application, direction, sens, valeur)', 'Unité : newton (N)', 'Principe d\'action-réaction : F_A→B = −F_B→A'],
  cinematique: ['v = d / t ; d = v × t', 'Uniforme : vitesse constante · accéléré : vitesse augmente'],
  energie: ['Conservation : l\'énergie se transforme, la somme est constante', 'E en joules (J), P en watts (W), 1 kWh = 3,6 × 10⁶ J', 'E_cinétique = ½ m v²'],
  ions: ['Ion+ : perte d\'électron (cation) · Ion− : gain (anion)', 'Acide = excès d\'ions H⁺ · Base = excès d\'ions OH⁻'],
  astronomie: ['Année-lumière = distance (≈ 9,5 × 10¹² km)', 'Les 8 planètes : Mercure, Vénus, Terre, Mars, Jupiter, Saturne, Uranus, Neptune'],
  signaux: ['Son : vibration, besoin d\'un milieu matériel (~340 m/s dans l\'air)', 'Lumière : même dans le vide (~3 × 10⁸ m/s)', 'Fréquence en Hz ; audible humain ≈ 20 Hz–20 kHz'],
  eau: ['3 états : solide (glace) · liquide · gazeux (vapeur invisible)', 'Fusion à 0 °C · vaporisation à 100 °C (à pression normale)', 'Pendant un changement d\'état : température constante'],
  air: ['~78 % N₂ + ~21 % O₂ + traces (CO₂, argon…)', 'L\'air a une masse (~1,2 g/L au niveau de la mer)', 'Pression s\'exerce dans toutes les directions'],
  masseVol: ['ρ = m / V', 'Flotte si ρ_obj < ρ_liquide'],
  lumiereOmbre: ['Propagation rectiligne', 'Ombre = zone où la lumière est bloquée', 'On voit si la lumière d\'un objet entre dans l\'œil'],
  etats: ['Solide : forme propre · Liquide : épouse · Gaz : tout l\'espace', '6 changements d\'état : fusion, solidification, vaporisation, liquéfaction, sublimation, condensation'],
  melanges: ['Homogène : un seul aspect · Hétérogène : plusieurs', 'Méthodes : filtration (solide+liquide), décantation, évaporation'],
  temperature: ['Glace fond à 0 °C · eau bout à 100 °C', 'Thermomètre = instrument de mesure (°C)'],
  lumiere: ['Source primaire : produit sa lumière. Secondaire : la reflète'],
  son: ['Son = vibration, transporté par l\'air (pas dans le vide)', '340 m/s environ dans l\'air'],
  environnement: ['Tri / recyclage / économie d\'énergie', 'Plastique : 400-1000 ans dans la nature'],

  // SVT
  reproduction: ['Testicules → spermatozoïdes + testostérone', 'Ovaires → ovules + œstrogènes/progestérone', 'Puberté = maturité sexuelle (caractères secondaires)'],
  cycle: ['Cycle menstruel ~28 jours, ovulation vers J14', 'Fécondation dans une trompe → cellule-œuf (zygote)', 'Grossesse ≈ 9 mois (40 SA)'],
  contraception: ['Préservatif = seule protection contre les IST ET grossesse', 'Pilule = bloque l\'ovulation', 'IST : VIH, chlamydia, hépatite B, HPV, syphilis'],
  plaques: ['Lithosphère = ~12 plaques en mouvement (quelques cm/an)', 'Dorsales : plaques s\'écartent · Subduction : une plonge'],
  seismes: ['Foyer (profondeur) · Épicentre (surface)', 'Richter (magnitude = énergie) · Mercalli (intensité ressentie)', 'Ondes P rapides, puis S, puis ondes de surface'],
  volcans: ['Effusif = lave fluide qui coule (Hawaï)', 'Explosif = lave visqueuse + nuées ardentes (Vésuve)', 'Magma dans la chambre → sortie par la cheminée'],
  reproVeg: ['Fleur = étamines (♂, pollen) + pistil (♀, ovules)', 'Pollinisation : vent, insectes', 'Ovule fécondé → graine · pistil → fruit'],
  biodiversite: ['Biodiversité = espèces + gènes + écosystèmes', 'Évolution par sélection naturelle (Darwin)', 'Ancêtre commun entre espèces proches'],
  nutrition: ['Respiration : O₂ entre, CO₂ sort (dans les alvéoles)', 'Cœur = pompe · artères partent, veines arrivent', 'Digestion : aliments → nutriments (absorbés dans intestin grêle)'],
  genetique: ['ADN → chromosomes → gènes → protéines', '46 chromosomes humains (23 paires) — sexe XX ♀ / XY ♂', 'Allèles : versions d\'un même gène'],
  cellule: ['Mitose : 1 cellule → 2 identiques (croissance, réparation)', 'Méiose : 1 cellule → 4 gamètes à n chromosomes (repro)'],
  immunite: ['Globules blancs défendent · Phagocytose = englober + digérer', 'Anticorps produits par lymphocytes B', 'Vaccin = entraîner les défenses sans la maladie'],
  nerveux: ['Neurone = cellule nerveuse · nerfs + moelle + cerveau', 'Réflexe : réponse automatique sans passer par le cerveau'],
  evolution: ['Sélection naturelle → adaptation au fil des générations', 'Fossiles = preuves d\'espèces disparues', 'Ancêtre commun entre espèces'],
  risques: ['Risque = aléa × vulnérabilité', 'Prévention : normes, alerte, plans d\'évacuation'],
  climat: ['Météo = court terme · climat = long terme', 'GES : CO₂, CH₄, H₂O vapeur, N₂O', 'Réchauffement : activités humaines (énergies fossiles)'],
  geologie: ['Plaques tectoniques : cm/an', '3 types de roches : magmatiques, sédimentaires, métamorphiques'],
  vivant: ['Vivant : naît, grandit, se reproduit, meurt · constitué de cellules', 'Plantes ET animaux sont vivants'],
  classification: ['Classe par caractères communs', 'Vertébrés : poissons, amphibiens, reptiles, oiseaux, mammifères'],
  peuplements: ['Saisons : migration, hibernation, chute des feuilles', 'Milieu = conditions + êtres vivants'],
  respiration: ['Poumons → alvéoles : O₂ entre, CO₂ sort', 'Inspiration : diaphragme descend'],
  circulation: ['Artères : cœur → organes · Veines : retour au cœur', 'Fréquence cardiaque adulte ~70 bpm au repos'],
  digestion: ['Transformations mécaniques + chimiques', 'Absorption des nutriments dans l\'intestin grêle'],
  effortMuscle: ['Effort → plus de O₂ + glucose → FC et FR augmentent', 'Échauffement avant, récupération après'],
  microOrg: ['Utiles : flore intestinale, yaourt, pain', 'Pathogènes : bactéries, virus (hygiène pour limiter)'],
  plantesNutri: ['Racines : eau + sels minéraux', 'Photosynthèse (feuilles + chlorophylle + lumière) : CO₂ + H₂O → matière + O₂'],
  erosion: ['Eau, vent, gel usent les roches', 'Sédiments → roches sédimentaires (calcaire, grès)'],
  hygiene: ['Alimentation variée · sommeil · activité · hygiène corporelle'],
  sol: ['Sol = minéral + matière organique + êtres vivants', 'Vers de terre : brassage et aération'],
  alimentation: ['Plantes = autotrophes (photosynthèse à partir d\'eau + CO₂ + lumière)', 'Herbivore / Carnivore / Omnivore', 'Chaîne alimentaire : la flèche signifie "est mangé par"'],
};

// ============================================================
// STORAGE
// ============================================================
// SPA : STORAGE_KEY dépend du quiz actif → getter lazy (SUBJECT est défini par setActiveQuiz).
const storageKey = () => 'quiz-' + SUBJECT.id + '-history-v1';

function slugName(s: string | null | undefined): string {
  return (s || '').trim().toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/\s+/g,' ');
}
function loadHistory(): Record<string, Profile> {
  try { const raw = localStorage.getItem(storageKey()); return raw ? JSON.parse(raw) : {}; } catch { return {}; }
}
// Écriture localStorage résiliente : si QuotaExceeded, on purge les tentatives
// les plus anciennes et on retente (max 3 coupes) pour ne pas perdre le dernier
// attempt en silence. Renvoie true si la sauvegarde a réussi, false sinon.
function safeSetItem(key: string, value: string): boolean {
  try { localStorage.setItem(key, value); return true; } catch (e) {
    const ee = e || {};
    const name = ee.name || ee.code;
    const isQuota = name === 'QuotaExceededError' || name === 22 || name === 'NS_ERROR_DOM_QUOTA_REACHED';
    if (!isQuota) return false;
    // Essaie de réduire : parse JSON, coupe attempts à 20, puis 10, puis 5.
    const sizes = [20, 10, 5];
    for (const max of sizes) {
      try {
        const data = JSON.parse(value);
        for (const slug of Object.keys(data || {})) {
          const arr = data[slug]?.attempts;
          if (Array.isArray(arr) && arr.length > max) data[slug].attempts = arr.slice(-max);
        }
        const trimmed = JSON.stringify(data);
        localStorage.setItem(key, trimmed);
        showToast('Stockage presque plein · anciens tests compactés', '⚠️');
        return true;
      } catch {}
    }
    showToast('Espace de stockage plein — le dernier test n\'a pas pu être enregistré localement.', '⚠️');
    return false;
  }
}
function saveHistoryFor(name, klass, attempt) {
  const key = slugName(name);
  if (!key) return;
  let hist;
  try { hist = loadHistory(); } catch { hist = {}; }
  if (!hist[key]) hist[key] = { name, klass, attempts: [] };
  hist[key].name = name;
  if (klass) hist[key].klass = klass;
  hist[key].attempts.push(attempt);
  if (hist[key].attempts.length > 50) hist[key].attempts = hist[key].attempts.slice(-50);
  safeSetItem(storageKey(), JSON.stringify(hist));
}
function getProfile(name: string): Profile | null {
  if (!name) return null;
  const hist = loadHistory();
  return hist[slugName(name)] || null;
}

// ============================================================
// BUILD QUIZ
// ============================================================
function shuffle<T>(arr: T[]): T[] {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
// Tracker des erreurs par question-key pour biaiser les tirages suivants.
const wrongTrackerKey = () => 'quiz-' + SUBJECT.id + '-wrong-tracker-v1';
function getWrongTracker() {
  try { return JSON.parse(localStorage.getItem(wrongTrackerKey())) || {}; } catch { return {}; }
}
function recordWrongAnswers(questions: Question[], answers: AnswersMap): void {
  try {
    const tracker = getWrongTracker();
    questions.forEach(q => {
      const a = answers[q.key];
      const wrong = a === undefined || a === null || a !== q.correct;
      if (!tracker[q.key]) tracker[q.key] = { wrong: 0, seen: 0 };
      tracker[q.key].seen += 1;
      if (wrong) tracker[q.key].wrong += 1;
    });
    localStorage.setItem(wrongTrackerKey(), JSON.stringify(tracker));
  } catch {}
}

// Tire aléatoirement dans un tableau avec pondération : les questions
// souvent ratées par l'élève ont + de chances d'être tirées.
function weightedSampleWithoutReplacement<T>(items: T[], count: number, weightFn: (x: T) => number): T[] {
  const pool = items.slice();
  const out = [];
  while (out.length < count && pool.length > 0) {
    const weights = pool.map(weightFn);
    const total = weights.reduce((s,w) => s + w, 0);
    if (total <= 0) { out.push(pool.splice(Math.floor(Math.random()*pool.length), 1)[0]); continue; }
    let r = Math.random() * total;
    let idx = 0;
    for (; idx < pool.length; idx++) { r -= weights[idx]; if (r <= 0) break; }
    idx = Math.min(idx, pool.length - 1);
    out.push(pool.splice(idx, 1)[0]);
  }
  return out;
}

function buildQuiz(forceKeys?: string[]): Question[] {
  const questions: Question[] = [];
  const pushQuestion = (src: SourceQuestion, did: string) => {
    const order = shuffle(src.options.map((_, i) => i)); // ordre shuffle stocké
    const options = order.map(i => src.options[i]);
    const correct = order.indexOf(src.correct);
    questions.push({ key: src.key, domain: did, q: src.q, options, correct, hint: src.hint, order });
  };

  if (Array.isArray(forceKeys) && forceKeys.length) {
    const byKey = {};
    Object.keys(POOL).forEach(did => (POOL[did] || []).forEach(q => byKey[q.key] = { ...q, domain: did }));
    forceKeys.forEach(k => { const src = byKey[k]; if (src) pushQuestion(src, src.domain); });
    return questions.map((q, i) => ({ ...q, num: i + 1 }));
  }

  const tracker = getWrongTracker();
  Object.keys(DOMAINS).forEach(did => {
    const pool: SourceQuestion[] = POOL[did] || [];
    const picks = weightedSampleWithoutReplacement(
      pool, PICK[did] || 3,
      (q) => {
        const t = tracker[q.key];
        if (!t || t.seen === 0) return 1;
        const rate = t.wrong / t.seen;
        return 1 + rate * 2;
      }
    );
    picks.forEach(src => pushQuestion(src, did));
  });
  return questions.map((q, i) => ({ ...q, num: i + 1 }));
}

// ============================================================
// ANALYSE
// ============================================================
// Barème style brevet : bonne réponse = +1 pt, non répondue = 0 pt, mauvaise réponse = -0.5 pt.
// → incite à passer plutôt que répondre au hasard (voir message sur HomeScreen).
const WRONG_PENALTY = 0.5;

function analyze(questions: Question[], answers: AnswersMap): AnalyzeResult {
  const byDomain: Record<string, DomainAnalysis> = {};
  Object.keys(DOMAINS).forEach(d => { byDomain[d] = { correct:0, total:0, errors:[], skipped:0, wrong:0, wrongWeighted:0, pct:0, level:'non-acquis' }; });
  let correct = 0, total = 0, skipped = 0, wrong = 0, weighted = 0, weightedMax = 0, wrongWeighted = 0;
  questions.forEach(q => {
    const ans = answers[q.key];
    const d = byDomain[q.domain];
    d.total++; total++;
    const coef = DOMAINS[q.domain].coef;
    weightedMax += coef;
    if (ans === undefined || ans === null) {
      d.skipped++; skipped++; d.errors.push({ q, type:'skipped' });
    } else if (ans === q.correct) {
      d.correct++; correct++; weighted += coef;
    } else {
      d.wrong++; wrong++;
      d.wrongWeighted += coef;
      wrongWeighted += coef;
      d.errors.push({ q, type:'wrong', given: ans });
    }
  });
  Object.keys(byDomain).forEach(id => {
    const b = byDomain[id];
    b.pct = b.total > 0 ? (b.correct / b.total) * 100 : 0;
    if (b.pct >= 75) b.level = 'acquis';
    else if (b.pct >= 40) b.level = 'fragile';
    else b.level = 'non-acquis';
  });
  // Barème : (correct - 0.5 * wrong) / total * 20, clampé à 0.
  const noteSur20 = total > 0 ? Math.max(0, (correct - WRONG_PENALTY * wrong) / total) * 20 : 0;
  const noteWeighted = weightedMax > 0 ? Math.max(0, (weighted - WRONG_PENALTY * wrongWeighted) / weightedMax) * 20 : 0;
  const penaltyPoints = total > 0 ? (WRONG_PENALTY * wrong / total) * 20 : 0;
  const lacunes = Object.keys(byDomain)
    .filter(id => byDomain[id].level !== 'acquis')
    .map(id => ({ id, ...byDomain[id], priority: (byDomain[id].level === 'non-acquis' ? 2 : 1) * DOMAINS[id].coef }))
    .sort((a,b) => b.priority - a.priority);
  const forces = Object.keys(byDomain).filter(id => byDomain[id].level === 'acquis');
  let appreciation, levelLabel, levelColor;
  if (noteWeighted >= 16)      { appreciation = 'Niveau solide sur presque tous les chapitres. Excellent travail.'; levelLabel='Très bien'; levelColor='var(--success)'; }
  else if (noteWeighted >= 13) { appreciation = 'Bon niveau général, quelques points à consolider.'; levelLabel='Bien'; levelColor='var(--leaf)'; }
  else if (noteWeighted >= 10) { appreciation = 'Moyenne acquise, mais des lacunes à combler sérieusement.'; levelLabel='Assez bien'; levelColor='var(--ochre)'; }
  else if (noteWeighted >= 7)  { appreciation = 'Bases fragiles. Un travail régulier est nécessaire.'; levelLabel='Insuffisant'; levelColor='#d97706'; }
  else                         { appreciation = 'Niveau préoccupant. Une remise à niveau structurée est vivement recommandée.'; levelLabel='Très insuffisant'; levelColor='var(--danger)'; }
  return { total, correct, wrong, skipped, penaltyPoints, noteSur20, noteWeighted, byDomain, forces, lacunes, appreciation, levelLabel, levelColor };
}
function planOf(domainId: string, level: LevelLabel): string[] { return PLANS?.[domainId]?.[level] || []; }
function getFinalAdvice(r: AnalyzeResult): string {
  const n = r.noteWeighted;
  if (n >= 17) return 'Continue comme ça — maintenir le rythme sera la meilleure stratégie.';
  if (n >= 14) return 'Un été bien utilisé sur les points fragiles te mettra en très bonne position.';
  if (n >= 11) return 'Ne passe pas au niveau suivant sans avoir consolidé les chapitres prioritaires.';
  if (n >= 8)  return 'La situation demande une reprise sérieuse des bases dès maintenant.';
  return 'Un accompagnement structuré est vivement conseillé pour ne pas accumuler du retard.';
}
function getFinalDetail(r: AnalyzeResult): string {
  const n = r.noteWeighted, lac = r.lacunes.length;
  if (n >= 17) return `Excellent travail sur l'ensemble du programme. Pour maintenir ce niveau, quelques exercices réguliers suffiront.`;
  if (n >= 14) return `Le socle est là. ${lac>0?`Il reste ${lac} chapitre${lac>1?'s':''} à consolider`:'Tout est solide'}. 30-45 min de ${SUMMER_TOPIC} par jour sur 2-3 semaines de vacances suffiront.`;
  if (n >= 11) return `Les bases existent mais sont inégales. Cible les ${Math.min(lac,3)} priorités identifiées avant de passer à autre chose.`;
  if (n >= 8)  return `Plusieurs chapitres doivent être repris à la base, pas juste révisés. Envisage un stage de remise à niveau ou des cours particuliers.`;
  return `Un soutien régulier (école, cours particuliers, famille, plateforme) est essentiel pour reconstruire progressivement.`;
}
function getSummerTime(r: AnalyzeResult): string {
  const n = r.noteWeighted;
  if (n >= 17) return '20-30 min, 2 fois par semaine';
  if (n >= 14) return '30-45 min par jour, 3 semaines';
  if (n >= 11) return '45 min à 1h par jour, tout l\'été';
  if (n >= 8)  return '1h par jour + stage de révision';
  return '1h30 par jour + accompagnement régulier';
}
// fetch avec timeout (AbortController). Toute erreur/timeout remonte au caller
// qui décide d'afficher un toast (sauvegarde) ou de silencer (sync en tâche de fond).
async function fetchWithTimeout(url: string, opts: RequestInit = {}, timeoutMs = 6000): Promise<Response> {
  const ctl = new AbortController();
  const t = setTimeout(() => ctl.abort(), timeoutMs);
  try {
    return await fetch(url, { ...opts, signal: ctl.signal });
  } finally { clearTimeout(t); }
}
async function saveAttemptToServer(student: StudentInfo, attempt: Attempt): Promise<void> {
  if (location.protocol === 'file:') return;
  try {
    const resp = await fetchWithTimeout('save.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        slug: slugName(student.name),
        name: student.name,
        klass: student.klass || '',
        quizId: SUBJECT.id,
        attempt,
      }),
      keepalive: true,
    }, 6000);
    if (!resp.ok) throw new Error('http_' + resp.status);
  } catch (err) {
    // Sauvegarde locale ok (déjà faite), mais sync serveur KO : on prévient l'utilisateur
    // et on stocke l'attempt dans une file pour retry à la prochaine sync.
    try {
      const qk = 'quiz-pending-sync-v1';
      const raw = localStorage.getItem(qk);
      const pending = raw ? JSON.parse(raw) : [];
      pending.push({ quizId: SUBJECT.id, slug: slugName(student.name), name: student.name, klass: student.klass || '', attempt });
      // Limiter la file à 50 éléments (évite explosion si serveur durablement down).
      if (pending.length > 50) pending.splice(0, pending.length - 50);
      safeSetItem(qk, JSON.stringify(pending));
    } catch {}
    showToast('Sauvegarde en ligne indisponible — test enregistré localement, nouvelle tentative plus tard.', '⚠️');
  }
}

// Dédup : un seul fetch load.php en vol à la fois pour un même slug.
const _syncInFlight: Record<string, Promise<number>> = {};

// Tente de renvoyer les attempts en attente (file de retry). Idempotent côté
// serveur grâce à la date ISO. Appelé après une sync réussie.
async function flushPendingSync(): Promise<void> {
  if (location.protocol === 'file:') return;
  let pending: any[] = [];
  try { pending = JSON.parse(localStorage.getItem('quiz-pending-sync-v1') || '[]'); } catch {}
  if (!Array.isArray(pending) || pending.length === 0) return;
  const remaining: any[] = [];
  for (const p of pending) {
    try {
      const resp = await fetchWithTimeout('save.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(p),
      }, 6000);
      if (!resp.ok) remaining.push(p);
    } catch { remaining.push(p); }
  }
  try {
    if (remaining.length) localStorage.setItem('quiz-pending-sync-v1', JSON.stringify(remaining));
    else localStorage.removeItem('quiz-pending-sync-v1');
  } catch {}
}

// Synchronise les attempts serveur dans le localStorage au démarrage.
// Merge par date ISO (idempotent). Silent fail en file://.
async function syncFromServer(studentName) {
  if (location.protocol === 'file:') return 0;
  const slug = slugName(studentName);
  if (!slug) return 0;
  if (_syncInFlight[slug]) return _syncInFlight[slug];
  const p = (async () => {
  try {
    const resp = await fetchWithTimeout('load.php?slug=' + encodeURIComponent(slug), { cache: 'no-store' }, 6000);
    if (!resp.ok) return 0;
    const data = await resp.json();
    if (!data || data.empty || !data.quizzes) return 0;
    let merged = 0;
    Object.keys(data.quizzes).forEach(qid => {
      const key = 'quiz-' + qid + '-history-v1';
      let hist = {};
      try { hist = JSON.parse(localStorage.getItem(key)) || {}; } catch {}
      if (!hist[slug]) hist[slug] = { name: data.name, klass: data.klass || '', attempts: [] };
      const localDates = new Set(hist[slug].attempts.map(a => a.date));
      (data.quizzes[qid].attempts || []).forEach(a => {
        if (!localDates.has(a.date)) { hist[slug].attempts.push(a); merged++; }
      });
      hist[slug].attempts.sort((a,b) => +new Date(a.date) - +new Date(b.date));
      if (data.name) hist[slug].name = data.name;
      if (data.klass) hist[slug].klass = data.klass;
      safeSetItem(key, JSON.stringify(hist));
    });
    // Profite d'une sync réussie pour renvoyer les attempts en attente.
    flushPendingSync();
    return merged;
  } catch { return 0; }
  })();
  _syncInFlight[slug] = p;
  try { return await p; } finally { delete _syncInFlight[slug]; }
}

// ============================================================
// UI COMPOSANTS COMMUNS
// ============================================================
function SubjectMark({ size = 40 }: SubjectMarkProps) {
  return (
    <div className="flex items-center justify-center font-display font-bold"
      style={{ width:size, height:size, borderRadius:Math.round(size*0.22), background:'var(--ink)', color:'var(--paper)', fontSize:size*0.55, lineHeight:1 }}>
      {SUBJECT.mark}
    </div>
  );
}
function Chip({ children, color, className='' }: ChipProps) {
  return (
    <span className={`chip ${className}`} style={color ? { background:`${color}14`, color, borderColor:`${color}55` } : undefined}>
      {color && <span className="dotmark" />}
      {children}
    </span>
  );
}
function CompetenceRadar({ byDomain, previousDomains }: CompetenceRadarProps) {
  const ids = Object.keys(byDomain);
  const n = ids.length;
  // ViewBox plus large que haut pour donner de l'air aux labels gauche/droite
  const W = 600, H = 440;
  const cx = W / 2, cy = H / 2;
  const R = 130; // rayon réduit pour laisser de la place aux labels
  const levels = [25, 50, 75, 100];

  const angleFor = (i) => (-Math.PI / 2) + (i * 2 * Math.PI) / n;
  const pt = (i, pct) => {
    const a = angleFor(i);
    const r = R * (pct / 100);
    return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
  };
  const polygonFor = (getPct) => ids.map((id, i) => {
    const [x, y] = pt(i, getPct(id));
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(' ');

  const currentPoly = polygonFor(id => byDomain[id].pct);
  const prevPoly    = previousDomains ? polygonFor(id => previousDomains[id]?.pct ?? 0) : null;

  return (
    <div className="p-4 sm:p-6 rounded-xl" style={{border:'1px solid var(--line)', background:'rgba(255,255,255,0.55)'}}>
      <div className="flex items-baseline justify-between flex-wrap gap-3 mb-3">
        <div>
          <div className="font-display font-semibold text-xl">Profil de compétences</div>
          <div className="font-mono text-[11px] uppercase tracking-[0.18em]" style={{color:'var(--muted)'}}>
            % de réussite par chapitre
          </div>
        </div>
        {prevPoly && (
          <div className="flex items-center gap-3 font-mono text-[11px]" style={{color:'var(--muted)'}}>
            <span className="flex items-center gap-1.5"><span style={{width:10, height:10, background:'var(--accent)', opacity:0.35, borderRadius:2, border:'1.5px solid var(--accent)'}}></span>Actuel</span>
            <span className="flex items-center gap-1.5"><span style={{width:10, height:0, borderTop:'2px dashed var(--muted)'}}></span>Précédent</span>
          </div>
        )}
      </div>

      <svg viewBox={`0 0 ${W} ${H}`} width="100%" height="auto" style={{maxWidth:640, display:'block', margin:'0 auto'}}>
        {/* Grille concentrique */}
        {levels.map(lv => {
          const poly = ids.map((_, i) => {
            const [x, y] = pt(i, lv);
            return `${x.toFixed(1)},${y.toFixed(1)}`;
          }).join(' ');
          return (
            <g key={lv}>
              <polygon points={poly} fill="none" stroke="var(--line)" strokeWidth={lv === 100 ? 1.4 : 1} strokeDasharray={lv === 100 ? '0' : '2 4'} />
              <text x={cx + 4} y={cy - (R * lv / 100) + 4} fontSize="10" fill="var(--muted)" fontFamily="JetBrains Mono, monospace">{lv}</text>
            </g>
          );
        })}
        {/* Axes */}
        {ids.map((id, i) => {
          const [x, y] = pt(i, 100);
          return <line key={'ax'+id} x1={cx} y1={cy} x2={x} y2={y} stroke="var(--line)" strokeWidth="1" />;
        })}
        {/* Précédent (en dessous, contour pointillé) */}
        {prevPoly && (
          <polygon points={prevPoly} fill="none" stroke="var(--muted)" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.75" />
        )}
        {/* Actuel */}
        <polygon points={currentPoly} fill="var(--accent)" fillOpacity="0.22" stroke="var(--accent)" strokeWidth="2" strokeLinejoin="round" />
        {/* Points + libellés */}
        {ids.map((id, i) => {
          const dom = DOMAINS[id];
          const pct = byDomain[id].pct;
          const [px, py] = pt(i, pct);
          const [lx, ly] = pt(i, 135);  // labels plus loin pour plus d'espace
          const anchor = Math.abs(lx - cx) < 12 ? 'middle' : (lx > cx ? 'start' : 'end');
          const label = dom.short || dom.name;
          return (
            <g key={id}>
              <circle cx={px} cy={py} r="4" fill="var(--accent)" stroke="var(--paper)" strokeWidth="1.5" />
              <text x={lx} y={ly} fontSize="13" textAnchor={anchor} fill={dom.color} fontFamily="Figtree, sans-serif" fontWeight="700" dominantBaseline="middle">
                {dom.icon} {label}
              </text>
              <text x={lx} y={ly + 15} fontSize="11" textAnchor={anchor} fill="var(--muted)" fontFamily="JetBrains Mono, monospace" dominantBaseline="middle">
                {Math.round(pct)}%
              </text>
            </g>
          );
        })}
      </svg>

      <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-center" style={{color:'var(--muted)'}}>
        Plus la surface est grande et régulière, plus le niveau est homogène.
      </div>
    </div>
  );
}

function ProgressCurve({ attempts }: ProgressCurveProps) {
  const W = 640, H = 220, padL = 40, padR = 16, padT = 18, padB = 34;
  const iw = W - padL - padR, ih = H - padT - padB;
  const n = attempts.length;
  const xs = (i) => padL + (n === 1 ? iw/2 : (i / (n - 1)) * iw);
  const ys = (v) => padT + ih - (v / 20) * ih;
  const pts = attempts.map((a, i) => ({ x: xs(i), y: ys(a.note), a, i }));
  const path = pts.map((p, i) => (i === 0 ? 'M' : 'L') + p.x.toFixed(1) + ',' + p.y.toFixed(1)).join(' ');
  const area = path + ` L${pts[pts.length-1].x.toFixed(1)},${(padT+ih).toFixed(1)} L${pts[0].x.toFixed(1)},${(padT+ih).toFixed(1)} Z`;
  const last = attempts[attempts.length - 1];
  const prev = attempts.length >= 2 ? attempts[attempts.length - 2] : null;
  const delta = prev ? last.note - prev.note : 0;
  const fmtDate = (iso) => new Date(iso).toLocaleDateString('fr-FR', { day:'2-digit', month:'2-digit' });
  return (
    <div className="p-5 md:p-6 rounded-xl" style={{border:'1px solid var(--line)', background:'rgba(255,255,255,0.55)'}}>
      <div className="flex items-baseline justify-between flex-wrap gap-3 mb-4">
        <div>
          <div className="font-display font-semibold text-2xl" style={{color:'var(--accent)'}}>{last.note.toFixed(1)} / 20</div>
          <div className="font-mono text-[11px] uppercase tracking-[0.18em]" style={{color:'var(--muted)'}}>test actuel · {fmtDate(last.date)}</div>
        </div>
        {prev && (
          <div className="text-right">
            <div className="font-display font-semibold text-lg" style={{color: delta >= 0 ? 'var(--success)' : 'var(--danger)'}}>
              {delta >= 0 ? '+' : ''}{delta.toFixed(1)} pt
            </div>
            <div className="font-mono text-[11px] uppercase tracking-[0.18em]" style={{color:'var(--muted)'}}>vs test précédent ({prev.note.toFixed(1)})</div>
          </div>
        )}
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" height="auto" style={{maxWidth:'100%', display:'block'}}>
        {[0,5,10,15,20].map(v => (
          <g key={v}>
            <line x1={padL} x2={W-padR} y1={ys(v)} y2={ys(v)} stroke="var(--line)" strokeDasharray={v===10?'0':'2 4'} strokeWidth="1" />
            <text x={padL-8} y={ys(v)+4} fontSize="11" textAnchor="end" fill="var(--muted)" fontFamily="JetBrains Mono, monospace">{v}</text>
          </g>
        ))}
        <path d={area} fill="var(--accent)" opacity="0.08" />
        <path d={path} fill="none" stroke="var(--accent)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        {pts.map(p => {
          const isLast = p.i === pts.length - 1;
          return (
            <g key={p.i}>
              <circle cx={p.x} cy={p.y} r={isLast?7:4.5} fill={isLast?'var(--accent)':'var(--paper)'} stroke="var(--accent)" strokeWidth="2" />
              {isLast && <circle cx={p.x} cy={p.y} r="12" fill="none" stroke="var(--accent)" strokeWidth="1.2" opacity="0.4" />}
              <text x={p.x} y={p.y-(isLast?14:10)} fontSize={isLast?13:11} textAnchor="middle" fill="var(--ink)" fontFamily="Fraunces, serif" fontWeight={isLast?700:500}>{p.a.note.toFixed(1)}</text>
              <text x={p.x} y={H-padB+18} fontSize="10" textAnchor="middle" fill="var(--muted)" fontFamily="JetBrains Mono, monospace">{fmtDate(p.a.date)}</text>
            </g>
          );
        })}
      </svg>
      <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em]" style={{color:'var(--muted)'}}>
        Historique conservé localement sur cet appareil uniquement.
      </div>
    </div>
  );
}

// ============================================================
// HOME
// ============================================================
function getActiveStudent() {
  try { return JSON.parse(localStorage.getItem('quiz-active-student')); } catch { return null; }
}

function MemoSection() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);
  const domainsWithMemo = Object.keys(DOMAINS).filter(id => MEMO_BANK[id]);
  if (domainsWithMemo.length === 0) return null;
  return (
    <div className="mb-10 fade-up" style={{animationDelay:'0.17s'}}>
      <button onClick={() => setOpen(v => !v)} className="w-full flex items-center justify-between gap-3" style={{padding:'14px 16px', background:'rgba(255,255,255,0.6)', border:'1.5px solid var(--line)', borderRadius:12, cursor:'pointer', textAlign:'left'}}>
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] mb-1" style={{color:'var(--accent)'}}>📒 Fiches mémo</div>
          <div className="font-display font-semibold text-lg leading-tight">Les formules et définitions à savoir</div>
        </div>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{transform: open ? 'rotate(180deg)' : '', transition:'transform .2s', color:'var(--ink-soft)', flexShrink:0}}>
          <path d="M5 7l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      {open && (
        <div className="mt-3 space-y-2">
          {domainsWithMemo.map(id => {
            const dom = DOMAINS[id];
            const isOpen = active === id;
            return (
              <div key={id} style={{border:'1px solid var(--line)', borderRadius:10, background:'rgba(255,255,255,0.55)', overflow:'hidden'}}>
                <button onClick={() => setActive(isOpen ? null : id)} className="w-full flex items-center gap-3" style={{padding:'12px 14px', textAlign:'left', cursor:'pointer', background:'transparent', border:0}}>
                  <span style={{width:36, height:36, display:'inline-flex', alignItems:'center', justifyContent:'center', borderRadius:8, background:`${dom.color}1a`, color:dom.color, fontFamily:'Fraunces, serif', fontWeight:700, fontSize:16, flexShrink:0}}>{dom.icon}</span>
                  <span className="flex-1 font-display font-semibold text-[15px] leading-tight">{dom.name}</span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{transform: isOpen ? 'rotate(180deg)' : '', transition:'transform .2s', color:'var(--muted)'}}>
                    <path d="M4 5.5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </button>
                {isOpen && (
                  <ul className="fade-up" style={{padding:'0 14px 14px 60px', margin:0, listStyle:'none', fontSize:15, lineHeight:1.55, color:'var(--ink-soft)'}}>
                    {MEMO_BANK[id].map((line, i) => (
                      <li key={i} style={{display:'flex', gap:10, marginBottom:6}}>
                        <span style={{color:dom.color, flexShrink:0, fontWeight:700}}>·</span>
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ============================================================
// GAMIFICATION — badges calculés depuis l'historique global
// ============================================================
function allAttemptsForStudent(slug) {
  const out = [];
  const levels = [6,5,4,3];
  const subjects = ['maths','physique','svt'];
  levels.forEach(lvl => {
    subjects.forEach(sk => {
      try {
        const raw = localStorage.getItem('quiz-' + sk + '-' + lvl + '-history-v1');
        if (!raw) return;
        const hist = JSON.parse(raw);
        const p = hist[slug];
        if (!p?.attempts?.length) return;
        p.attempts.forEach(a => out.push({ subjectKey: sk, level: lvl, ...a }));
      } catch {}
    });
  });
  return out.sort((a,b) => +new Date(a.date) - +new Date(b.date));
}

function computeStreakDays(attempts) {
  if (!attempts.length) return 0;
  const dayStrings: string[] = attempts.map(a => a.date.slice(0, 10));
  const days = [...new Set(dayStrings)].sort();
  if (days.length === 0) return 0;
  // La streak "active" = jours consécutifs finissant aujourd'hui ou hier
  const today = new Date().toISOString().slice(0,10);
  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0,10);
  const last = days[days.length - 1];
  if (last !== today && last !== yesterday) return 0;
  let streak = 1;
  for (let i = days.length - 2; i >= 0; i--) {
    const diff = (+new Date(days[i+1]) - +new Date(days[i])) / 86400000;
    if (Math.round(diff) === 1) streak++;
    else break;
  }
  return streak;
}

const ALL_BADGES = [
  { id: 'first',    emoji:'🎯', title:'Premier pas',     desc:'Ton tout premier test',                test: a => a.length >= 1 },
  { id: 'good',     emoji:'🏆', title:'Excellent',       desc:'Décroche une note ≥ 16/20',           test: a => a.some(x => x.note >= 16) },
  { id: 'perfect',  emoji:'💎', title:'Perfection',       desc:'Obtiens 20/20 sur un test',           test: a => a.some(x => x.note >= 19.95) },
  { id: 'streak2',  emoji:'🔥', title:'En série',         desc:'Teste-toi 2 jours différents',        test: a => computeStreakDays(a) >= 2 },
  { id: 'streak5',  emoji:'⚡', title:'En feu',          desc:'5 jours différents de suite',         test: a => computeStreakDays(a) >= 5 },
  { id: 'five',     emoji:'📚', title:'Assidu',           desc:'5 tests au total',                    test: a => a.length >= 5 },
  { id: 'ten',      emoji:'🌟', title:'Expert',           desc:'10 tests au total',                   test: a => a.length >= 10 },
  { id: 'triple',   emoji:'🎨', title:'Polyvalent',       desc:'Teste les 3 matières',                test: a => new Set(a.map(x => x.subjectKey)).size >= 3 },
  { id: 'levels',   emoji:'🎓', title:'Cartographe',      desc:'Un test à chaque niveau (6e→3e)',     test: a => new Set(a.map(x => x.level)).size >= 4 },
  { id: 'progress', emoji:'🚀', title:'Progression',       desc:'+3 points sur un même quiz',          test: a => {
      const byQ: Record<string, number[]> = {};
      a.forEach(x => { const k = x.subjectKey+'-'+x.level; if(!byQ[k]) byQ[k]=[]; byQ[k].push(x.note); });
      return Object.values(byQ).some(notes => notes.length >= 2 && (Math.max(...notes) - notes[0]) >= 3);
    }
  },
];

function computeBadges(attempts) {
  return ALL_BADGES.map(b => ({ ...b, unlocked: b.test(attempts) }));
}

function isNewRecordFor(subjectKey, level, studentSlug, note) {
  try {
    const raw = localStorage.getItem('quiz-' + subjectKey + '-' + level + '-history-v1');
    if (!raw) return false;
    const hist = JSON.parse(raw);
    const p = hist[studentSlug];
    if (!p?.attempts?.length || p.attempts.length < 2) return false;
    // La dernière attempt (celle qu'on vient de pousser) bat toutes les autres
    const last = p.attempts[p.attempts.length - 1];
    const others = p.attempts.slice(0, -1);
    if (Math.abs(last.note - note) > 0.01) return false; // safety check
    return others.every(a => last.note > a.note);
  } catch { return false; }
}

function HomeScreen({ onStart }: HomeScreenProps) {
  const activeStudent = useMemo(() => getActiveStudent(), []);
  const defaultLevel = SUBJECT.level.replace('Fin de ', '').replace(' (brevet)', '');
  // Pré-remplir la classe depuis le profil stocké si déjà renseignée (ex: "4ème B"),
  // sinon utiliser le niveau du quiz en valeur par défaut (ex: "4ème").
  const initialKlass = useMemo(() => {
    if (activeStudent?.name) {
      const p = getProfile(activeStudent.name);
      if (p?.klass) return p.klass;
    }
    return defaultLevel;
  }, []);
  const [name, setName] = useState(activeStudent?.name || '');
  const [klass, setKlass] = useState(initialKlass);
  const [mode, setMode] = useState(initialMode);
  const canStart = name.trim().length >= 2;
  const profile = useMemo(() => getProfile(name), [name]);
  useEffect(() => { if (profile && profile.klass && !klass) setKlass(profile.klass); }, [profile]);
  const lastAttempt = profile?.attempts?.[profile.attempts.length - 1];

  const nDomains = Object.keys(DOMAINS).length;
  const pickValues: number[] = Object.values(PICK);
  const nTotal = pickValues.reduce((a,b) => a+b, 0);

  return (
    <div className="layer min-h-screen flex flex-col px-5 pt-8 pb-16 md:pt-16">
      <div className="max-w-3xl mx-auto w-full">

        <div className="flex items-center justify-between mb-10 md:mb-14 fade-up">
          <div className="flex items-center gap-3">
            <SubjectMark size={44} />
            <div className="leading-tight">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em]" style={{color:'var(--muted)'}}>{SUBJECT.tagline}</div>
              <div className="font-display text-lg font-semibold">{SUBJECT.name} — {SUBJECT.level}</div>
            </div>
          </div>
          <a href="index.html" className="font-mono text-[11px] tracking-wider flex items-center gap-1.5 hover:underline" style={{color:'var(--muted)'}}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M8 2L4 6l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Tous les tests
          </a>
        </div>

        <div className="mb-10 fade-up" style={{animationDelay:'0.05s'}}>
          <div className="font-mono text-xs uppercase tracking-[0.28em] mb-4" style={{color:'var(--accent)'}}>— {SUBJECT.level}</div>
          <h1 className="font-display font-light text-[44px] sm:text-6xl md:text-7xl leading-[0.95] mb-5 tracking-tight">
            {SUBJECT.introTitle?.[0] || 'Où en es-tu'}<br/>
            <em className="font-semibold italic" style={{color:'var(--accent)'}}>{SUBJECT.introTitle?.[1] || 'vraiment'}</em>{' '}{SUBJECT.introTitle?.[2] || `en ${SUBJECT.short.toLowerCase()} ?`}
          </h1>
          <p className="text-lg md:text-xl leading-relaxed max-w-2xl" style={{color:'var(--ink-soft)'}}>
            {SUBJECT.introDesc || `${nTotal} questions pour faire le point sur les grands chapitres de ${SUBJECT.short.toLowerCase()}, obtenir une note sur 20 et un plan de révision ciblé.`}
          </p>
        </div>

        <div className="mb-8 fade-up" style={{animationDelay:'0.1s'}}>
          <div className="frame p-5 sm:p-7">
            <span className="frame-label">Identification</span>
            <div className="space-y-6 pt-1">
              <div>
                <label className="block font-mono text-[11px] uppercase tracking-[0.18em] mb-1.5" style={{color:'var(--muted)'}}>Prénom et nom</label>
                <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Ex : Alice Dupont" autoCapitalize="words" autoComplete="name" className="input-paper" />
              </div>
              <div>
                <label className="block font-mono text-[11px] uppercase tracking-[0.18em] mb-1.5" style={{color:'var(--muted)'}}>Classe (optionnel)</label>
                <input type="text" value={klass} onChange={e => setKlass(e.target.value)} placeholder={`Ex : ${SUBJECT.level.replace('Fin de ','')} B`} className="input-paper" style={{fontSize:'1.2rem'}} />
              </div>
            </div>
          </div>

          {profile && profile.attempts.length > 0 && (
            <div className="mt-4 p-4 pop-in" style={{border:'1.5px dashed var(--accent)', borderRadius:10, background:'rgba(184,50,61,0.05)'}}>
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] mb-1" style={{color:'var(--accent)'}}>Profil retrouvé</div>
              <div className="text-[15px]" style={{color:'var(--ink-soft)'}}>
                Bon retour, <strong style={{color:'var(--ink)'}}>{profile.name}</strong>. Tu as déjà passé <strong>{profile.attempts.length} test{profile.attempts.length>1?'s':''}</strong>
                {lastAttempt && <> — dernière note : <strong style={{color:'var(--accent)'}}>{lastAttempt.note.toFixed(1)} / 20</strong></>}.
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-10 fade-up" style={{animationDelay:'0.15s'}}>
          {[
            { n: String(nTotal), l:'questions' },
            { n:'~25', l:'minutes'  },
            { n: String(nDomains), l:'chapitres' },
          ].map((it,i) => (
            <div key={i} className="text-center py-5 px-3" style={{borderRadius:10, background:'rgba(255,255,255,0.5)', border:'1px solid var(--line)'}}>
              <div className="font-display text-3xl md:text-4xl font-semibold" style={{letterSpacing:'-0.03em'}}>{it.n}</div>
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] mt-1" style={{color:'var(--muted)'}}>{it.l}</div>
            </div>
          ))}
        </div>

        <MemoSection />

        <div className="mb-10 fade-up" style={{animationDelay:'0.2s'}}>
          <div className="font-mono text-[11px] uppercase tracking-[0.24em] mb-4" style={{color:'var(--accent)'}}>Consignes</div>
          <ul className="space-y-3 text-[17px]" style={{color:'var(--ink-soft)'}}>
            {[
              'Une seule bonne réponse par question. Barème : +1 pt si correct, 0 pt si tu passes, −0,5 pt si tu te trompes → mieux vaut passer que deviner au hasard.',
              'À chaque nouveau passage, les questions et l\'ordre des réponses changent : impossible de tricher par cœur.',
              'Tu peux revenir en arrière à tout moment : la barre du haut montre où tu en es.',
              'À la fin : rapport détaillé chapitre par chapitre + plan de révisions + liens vers des cours gratuits.',
            ].map((t,i) => (
              <li key={i} className="flex gap-4">
                <span className="font-mono text-sm mt-1 flex-shrink-0" style={{color:'var(--accent)', minWidth:24}}>{String(i+1).padStart(2,'0')}</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-6 fade-up" style={{animationDelay:'0.22s'}}>
          <div className="font-mono text-[11px] uppercase tracking-[0.24em] mb-3" style={{color:'var(--accent)'}}>Mode</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button onClick={() => setMode('training')}
              style={{
                padding:'14px 16px', textAlign:'left', cursor:'pointer', borderRadius:12,
                background: mode==='training' ? 'rgba(15,94,107,0.1)' : 'rgba(255,255,255,0.5)',
                border: mode==='training' ? '2px solid var(--sea)' : '2px solid var(--line)',
              }}>
              <div className="font-display font-semibold text-lg flex items-center gap-2"><span>💡</span> Entraînement</div>
              <div className="text-sm" style={{color:'var(--ink-soft)'}}>Avec indices et méthode visibles. Pour apprendre.</div>
            </button>
            <button onClick={() => setMode('exam')}
              style={{
                padding:'14px 16px', textAlign:'left', cursor:'pointer', borderRadius:12,
                background: mode==='exam' ? 'rgba(184,50,61,0.1)' : 'rgba(255,255,255,0.5)',
                border: mode==='exam' ? '2px solid var(--accent)' : '2px solid var(--line)',
              }}>
              <div className="font-display font-semibold text-lg flex items-center gap-2"><span>📝</span> Interrogation</div>
              <div className="text-sm" style={{color:'var(--ink-soft)'}}>Sans aide. Comme un devoir sur table.</div>
            </button>
          </div>
        </div>

        <div className="fade-up" style={{animationDelay:'0.25s'}}>
          <button onClick={() => canStart && onStart({ name: name.trim(), klass: klass.trim() }, mode)} disabled={!canStart} className="btn-primary w-full sm:w-auto">
            <span>{mode === 'training' ? 'Commencer l\'entraînement' : 'Commencer l\'interrogation'}</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 10h12m0 0l-5-5m5 5l-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          {!canStart && <p className="mt-3 text-sm" style={{color:'var(--muted)'}}>Renseigne ton prénom pour commencer.</p>}
        </div>

      </div>
    </div>
  );
}

// ============================================================
// QUIZ
// ============================================================
function QuizScreen({ student, quiz, onFinish, mode }: QuizScreenProps) {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState(initialAnswers);
  const [timings, setTimings] = useState(initialTimings);
  const [showConfirm, setShowConfirm] = useState(false);
  // hintLevel : 0 = caché, 1 = méthode du chapitre (MEMO_BANK), 2 = astuce spécifique (q.hint)
  const [hintLevel, setHintLevel] = useState(0);
  const [hintsUsed, setHintsUsed] = useState(initialHints);
  const [remaining, setRemaining] = useState(initialRemaining);
  const quizStartedAt = useRef(Date.now());
  const questionStartedAt = useRef(Date.now());

  // Timer pour mode brevet (interro + niveau 3ème uniquement, 30 min)
  const isBrevetTimed = mode === 'exam' && /3(?:ème)?/i.test(SUBJECT.level);
  const toastFlags = useRef({ five: false, one: false, zero: false });
  useEffect(() => {
    if (!isBrevetTimed) return;
    const endAt = quizStartedAt.current + 30 * 60 * 1000;
    const tick = () => {
      const r = Math.max(0, endAt - Date.now());
      setRemaining(r);
      // Avertissements : 5 min, 1 min, fin du temps
      if (r > 0 && r <= 5 * 60 * 1000 && !toastFlags.current.five) { toastFlags.current.five = true; showToast('Plus que 5 minutes.', '⏰'); }
      if (r > 0 && r <= 60 * 1000 && !toastFlags.current.one)     { toastFlags.current.one = true; showToast('1 minute restante !', '⏰'); }
      if (r === 0 && !toastFlags.current.zero)                    { toastFlags.current.zero = true; showToast('Temps écoulé — tu peux finir ce que tu as commencé.', '🏁'); }
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [isBrevetTimed]);

  useEffect(() => { setHintLevel(0); }, [current]);

  const q = quiz[current];
  const selected = answers[q.key];
  const domain = DOMAINS[q.domain];

  useEffect(() => { questionStartedAt.current = Date.now(); }, [current]);

  const select = (idx) => {
    setAnswers(prev => ({ ...prev, [q.key]: idx }));
    const ms = Date.now() - questionStartedAt.current;
    setTimings(prev => ({ ...prev, [q.key]: (prev[q.key] ?? 0) + ms }));
    questionStartedAt.current = Date.now();
  };
  const finish = (ans) => onFinish(ans, timings, Date.now() - quizStartedAt.current, hintsUsed, mode);
  const next   = () => { if (current < quiz.length - 1) setCurrent(current + 1); else setShowConfirm(true); };
  const prev   = () => { if (current > 0) setCurrent(current - 1); };
  const skip   = () => { if (selected === undefined) select(null); next(); };

  // Handler clavier attaché UNE seule fois au montage, mais qui lit toujours
  // les dernières valeurs de current/q/showConfirm via une ref mutable.
  // Évite de dé/re-abonner un listener à chaque question (30×2 add/remove)
  // et supprime tout risque de closure stale.
  const kbdStateRef = useRef({ next, prev, select, q, showConfirm });
  kbdStateRef.current = { next, prev, select, q, showConfirm };
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const st = kbdStateRef.current;
      if (st.showConfirm) return;
      if (e.key === 'ArrowRight' || e.key === 'Enter') st.next();
      else if (e.key === 'ArrowLeft') st.prev();
      else {
        const map: Record<string, number> = {'1':0,'2':1,'3':2,'4':3,'a':0,'b':1,'c':2,'d':3,'A':0,'B':1,'C':2,'D':3};
        if (map[e.key] !== undefined && map[e.key] < st.q.options.length) st.select(map[e.key]);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  useEffect(() => { window.scrollTo({ top:0, behavior:'smooth' }); }, [current]);

  if (showConfirm) {
    return <ConfirmScreen quiz={quiz} answers={answers} onValidate={() => finish(answers)} onCancel={() => setShowConfirm(false)} onGoBack={(i) => { setShowConfirm(false); setCurrent(i); }} />;
  }

  const progress = ((current + 1) / quiz.length) * 100;

  return (
    <div className="layer min-h-screen flex flex-col">
      <div className="sticky top-0 z-10 border-b" style={{borderColor:'var(--line)', background:'rgba(250,245,235,0.92)', backdropFilter:'blur(10px)', WebkitBackdropFilter:'blur(10px)'}}>
        <div className="max-w-3xl mx-auto px-5 py-3.5">
          <div className="flex items-center justify-between mb-3 gap-3">
            <div className="flex items-center gap-3 min-w-0">
              <SubjectMark size={34} />
              <div className="leading-tight min-w-0">
                <div className="font-display font-semibold text-[15px] truncate">{student.name}</div>
                <div className="font-mono text-[11px] truncate" style={{color:'var(--muted)'}}>{student.klass || SUBJECT.level}</div>
              </div>
            </div>
            <div className="font-mono text-sm flex items-center gap-3">
              {isBrevetTimed && remaining !== null && (
                <span style={{
                  fontWeight: 700,
                  color: remaining < 5 * 60 * 1000 ? 'var(--accent)' : (remaining < 10 * 60 * 1000 ? 'var(--ochre)' : 'var(--ink)'),
                  fontSize: '1rem',
                  padding: '4px 10px',
                  borderRadius: 6,
                  background: remaining === 0 ? 'rgba(184,50,61,0.12)' : 'transparent',
                }}>
                  {remaining === 0 ? 'Temps écoulé' : Math.floor(remaining / 60000) + ':' + String(Math.floor((remaining % 60000) / 1000)).padStart(2, '0')}
                </span>
              )}
              <span className="flex items-baseline gap-1">
                <span className="font-bold" style={{color:'var(--ink)', fontSize:'1.1rem'}}>{String(current+1).padStart(2,'0')}</span>
                <span style={{color:'var(--muted)'}}>/{quiz.length}</span>
              </span>
            </div>
          </div>

          <div className="dots">
            {quiz.map((qq, i) => {
              const a = answers[qq.key];
              const answered = a !== undefined && a !== null;
              const skipped = a === null;
              const cls = ['dot'];
              if (i === current) cls.push('current');
              else if (skipped) cls.push('skipped');
              else if (answered) cls.push('answered');
              return <button key={qq.key} className={cls.join(' ')} onClick={() => setCurrent(i)} aria-label={`Question ${i+1}`}>{i+1}</button>;
            })}
          </div>

          <div className="h-[3px] rounded-full overflow-hidden mt-1" style={{background:'var(--paper-warm)'}}>
            <div className="h-full shimmer" style={{width:`${progress}%`, transition:'width .4s ease-out'}} />
          </div>
        </div>
      </div>

      <div className="flex-1 px-5 py-8 md:py-14" key={q.key}>
        <div className="max-w-3xl mx-auto w-full">
          <div className="mb-5 slide-in flex items-center gap-2 flex-wrap">
            <Chip color={domain.color}>
              <span className="font-mono" style={{letterSpacing:0}}>{domain.icon}</span>
              <span>{domain.name}</span>
            </Chip>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em]" style={{color:'var(--muted)'}}>coef {domain.coef}</span>
            {mode === 'training' && (
              <button
                onClick={() => {
                  setHintLevel(lv => (lv + 1) % 3);
                  setHintsUsed(prev => ({...prev, [q.key]: Math.max(prev[q.key]||0, 1)}));
                }}
                className="chip"
                style={{marginLeft:'auto', background:'rgba(199,138,29,0.1)', color:'var(--ochre)', borderColor:'rgba(199,138,29,0.4)', cursor:'pointer'}}
                title="Aide progressive : méthode puis astuce"
              >
                💡 {hintLevel === 0 ? 'Méthode' : hintLevel === 1 ? 'Plus d\'aide' : 'Masquer'}
              </button>
            )}
          </div>

          {mode === 'training' && hintLevel >= 1 && MEMO_BANK[q.domain] && (
            <div className="mb-4 slide-in" style={{padding:'14px 16px', background:'rgba(199,138,29,0.08)', border:'1.5px dashed var(--ochre)', borderRadius:10, fontSize:15, lineHeight:1.55, color:'var(--ink-soft)'}}>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em]" style={{color:'var(--ochre)', fontWeight:700}}>💡 Méthode — {domain.name}</span>
              <ul style={{margin:'6px 0 0 0', padding:0, listStyle:'none'}}>
                {MEMO_BANK[q.domain].map((line, i) => (
                  <li key={i} style={{display:'flex', gap:10, marginTop:4}}>
                    <span style={{color:'var(--ochre)', fontWeight:700, flexShrink:0}}>·</span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {mode === 'training' && hintLevel >= 2 && q.hint && (
            <div className="mb-6 slide-in" style={{padding:'14px 16px', background:'rgba(184,50,61,0.06)', border:'1.5px dashed var(--accent)', borderRadius:10, fontSize:15, lineHeight:1.55, color:'var(--ink-soft)'}}>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em]" style={{color:'var(--accent)', fontWeight:700}}>🎯 Astuce détaillée (spoiler)</span>
              <div style={{marginTop:4}}>{q.hint}</div>
              <div style={{marginTop:6, fontSize:12, fontStyle:'italic', color:'var(--muted)'}}>
                Si tu as lu ça, essaie de refaire la question sans l'astuce au prochain test — c'est en s'entraînant qu'on apprend !
              </div>
            </div>
          )}

          <div className="mb-8 md:mb-10 slide-in" style={{animationDelay:'.05s'}}>
            <div className="flex gap-4 md:gap-6 items-start">
              <div className="font-display font-light text-5xl md:text-6xl leading-none flex-shrink-0" style={{color:'var(--accent)', letterSpacing:'-0.04em'}}>{String(current+1).padStart(2,'0')}</div>
              <div className="flex-1 pt-1">
                <div className="text-[21px] sm:text-[23px] md:text-[26px] leading-snug" style={{color:'var(--ink)', fontWeight:600, letterSpacing:'-0.005em'}}>{q.q}</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {q.options.map((opt, i) => {
              const isSelected = selected === i;
              const letter = ['A','B','C','D'][i];
              return (
                <button key={i} type="button" onClick={() => select(i)} className={`option slide-in ${isSelected?'selected':''}`} style={{ animationDelay:`${0.08+i*0.04}s` }}>
                  <span className="letter-wrap relative">
                    <span className="letter">{letter}</span>
                    <span className="letter-hint">{i+1}</span>
                  </span>
                  <span className="flex-1 text-lg sm:text-xl" style={{lineHeight:1.25, fontWeight:600}}>{opt}</span>
                  {isSelected && (
                    <svg className="pop-in flex-shrink-0" width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <path d="M4 11l5 5 9-10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-[auto_auto_1fr] gap-2 sm:gap-3 items-center">
            <button onClick={prev} disabled={current===0} className="btn-secondary disabled:opacity-40">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 2L4 8l6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <span className="hidden sm:inline">Préc.</span>
            </button>
            <button onClick={skip} className="btn-secondary" style={{borderColor:'var(--line)', color:'var(--muted)'}}>Passer</button>
            <button onClick={next} className="btn-primary w-full">
              {current === quiz.length - 1 ? 'Terminer' : 'Suivant'}
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 9h12m0 0l-5-5m5 5l-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>

          {current === Math.floor(quiz.length/2) && (
            <div className="mt-8 text-center fade-up">
              <div className="font-display italic text-lg" style={{color:'var(--ochre)'}}>« À mi-chemin. Souffle un bon coup. »</div>
            </div>
          )}

          <div className="mt-10 text-center font-mono text-[11px] hidden md:block" style={{color:'var(--muted)'}}>
            Raccourcis — <kbd>1</kbd> <kbd>2</kbd> <kbd>3</kbd> <kbd>4</kbd> choisir · <kbd>←</kbd> <kbd>→</kbd> naviguer · <kbd>Entrée</kbd> valider.
          </div>
        </div>
      </div>
    </div>
  );
}

function ConfirmScreen({ quiz, answers, onValidate, onCancel, onGoBack }: ConfirmScreenProps) {
  const skipped = [];
  quiz.forEach((qq, i) => { const a = answers[qq.key]; if (a === undefined || a === null) skipped.push(i); });
  const answeredCount = quiz.length - skipped.length;
  return (
    <div className="layer min-h-screen flex items-center px-5 py-14">
      <div className="max-w-2xl mx-auto w-full fade-up">
        <div className="font-mono text-xs uppercase tracking-[0.3em] mb-4" style={{color:'var(--accent)'}}>— Vérification</div>
        <h2 className="font-display font-light text-[38px] md:text-5xl mb-6 leading-[1.05]">
          Tu as répondu à<br/>
          <em className="font-semibold italic" style={{color:'var(--accent)'}}>{answeredCount} questions sur {quiz.length}</em>
        </h2>
        {skipped.length > 0 ? (
          <div className="mb-8 p-5 border-l-4" style={{borderColor:'var(--ochre)', background:'rgba(199,138,29,0.08)', borderRadius:'0 8px 8px 0'}}>
            <div className="font-display font-semibold mb-2 text-lg">Questions non répondues :</div>
            <div className="flex flex-wrap gap-2">
              {skipped.map(i => (
                <button key={i} onClick={() => onGoBack(i)} className="px-3 py-2 font-mono text-sm border-2" style={{borderColor:'var(--ochre)', color:'var(--ink)', background:'rgba(255,255,255,.4)', borderRadius:8, minWidth:48}}>Q{i+1}</button>
              ))}
            </div>
            <div className="mt-3 text-sm" style={{color:'var(--ink-soft)'}}>Tape sur un numéro pour y retourner, ou valide : les questions passées rapportent 0 pt (ni gain ni pénalité).</div>
          </div>
        ) : (
          <div className="mb-8 p-5 border-l-4" style={{borderColor:'var(--success)', background:'rgba(22,106,57,0.08)', borderRadius:'0 8px 8px 0'}}>
            <div className="font-display font-semibold text-lg">Toutes les questions ont une réponse.</div>
          </div>
        )}
        <div className="flex flex-col sm:flex-row gap-3">
          <button onClick={onCancel} className="btn-secondary">← Reprendre</button>
          <button onClick={onValidate} className="btn-primary flex-1">Valider & voir mon rapport</button>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// REPORT
// ============================================================
function ReportScreen({ student, quiz, answers, timings, totalMs, hintsUsed, mode, onRestart, onRetryWrong, historyMode }: ReportScreenProps) {
  const result = useMemo(() => analyze(quiz, answers), [quiz, answers]);
  const [openDomain, setOpenDomain] = useState(initialOpenDomain);
  const [profile, setProfile] = useState(() => getProfile(student.name) || initialProfile());
  const [celebration, setCelebration] = useState(initialCelebration);

  useEffect(() => {
    if (historyMode) {
      // Mode relecture : pas de sauvegarde, pas de célébration
      return;
    }
    // Badges AVANT le nouveau test (pour savoir lesquels sont nouveaux)
    const slugNameFn = (s) => (s||'').trim().toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/\s+/g,' ');
    const slug = slugNameFn(student.name);
    const beforeAttempts = allAttemptsForStudent(slug);
    const beforeUnlocked = new Set(computeBadges(beforeAttempts).filter(b => b.unlocked).map(b => b.id));

    const attempt = {
      date: new Date().toISOString(),
      mode: mode || 'training',
      note: +result.noteWeighted.toFixed(2),
      noteRaw: +result.noteSur20.toFixed(2),
      correct: result.correct, total: result.total,
      totalMs: totalMs || 0,
      domains: Object.fromEntries(Object.entries(result.byDomain).map(([k,v]) => [k, { level:v.level, pct:Math.round(v.pct) }])),
      // Détail question par question pour relecture et analyse ultérieure (exploitable par IA)
      log: quiz.map((q, i) => ({
        pos: i + 1,
        key: q.key,
        domain: q.domain,
        given: answers[q.key] === undefined ? null : answers[q.key],
        correct: q.correct,
        ok: answers[q.key] === q.correct,
        ms: timings?.[q.key] ?? null,
        hinted: !!hintsUsed?.[q.key],
        order: q.order || null, // ordre du shuffle pour relecture exacte
      })),
    };
    saveHistoryFor(student.name, student.klass, attempt);
    recordWrongAnswers(quiz, answers);
    setProfile(getProfile(student.name));
    saveAttemptToServer(student, attempt);

    // Badges APRÈS + record
    const afterAttempts = allAttemptsForStudent(slug);
    const afterBadges = computeBadges(afterAttempts);
    const newBadges = afterBadges.filter(b => b.unlocked && !beforeUnlocked.has(b.id));
    const [sk, lvl] = SUBJECT.id.split('-');
    const newRecord = isNewRecordFor(sk, +lvl, slug, attempt.note);
    const streak = computeStreakDays(afterAttempts);

    if (newBadges.length > 0 || newRecord || attempt.note >= 19.95) {
      setCelebration({ newBadges, newRecord, perfect: attempt.note >= 19.95, streak });
    } else if (streak >= 2 && beforeAttempts.length === 0) {
      // Première fois, encouragement doux
      setCelebration({ newBadges: [], newRecord: false, perfect: false, streak: 0 });
    }
  }, []);

  const attempts = profile?.attempts || [];
  const showCurve = attempts.length >= 2;
  const note20 = result.noteWeighted.toFixed(1);
  const noteColor = result.levelColor;

  const gaugeR = 88, circ = 2 * Math.PI * gaugeR;
  const progress = (result.noteWeighted / 20) * circ;

  const levelLabelMap = {'acquis':'Acquis','fragile':'En cours','non-acquis':'Non acquis'};
  const levelColorMap = {'acquis':'var(--success)','fragile':'var(--ochre)','non-acquis':'var(--danger)'};

  return (
    <div className="layer min-h-screen px-5 py-8 md:py-12">
      <div className="max-w-5xl mx-auto">

        <div className="mb-10 fade-up">
          <div className="flex items-start justify-between gap-4 flex-wrap mb-8">
            <div className="flex items-center gap-3">
              <SubjectMark size={44} />
              <div className="leading-tight">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em]" style={{color:'var(--muted)'}}>{historyMode ? 'Bilan conservé' : 'Rapport d\'évaluation'}</div>
                <div className="font-display text-lg font-semibold">{SUBJECT.name} — {SUBJECT.level}</div>
              </div>
            </div>
            <div className="flex gap-2 no-print flex-wrap">
              <a href="index.html" className="btn-secondary" style={{textDecoration:'none'}}>Accueil</a>
              <button onClick={() => window.print()} className="btn-secondary">Imprimer</button>
              {(() => {
                const wrongKeys = quiz.filter(q => answers[q.key] !== q.correct).map(q => q.key);
                if (wrongKeys.length === 0) return null;
                return (
                  <button onClick={() => onRetryWrong(wrongKeys)} className="btn-secondary" style={{borderColor:'var(--ochre)', color:'var(--ochre)'}}>
                    Refaire mes erreurs ({wrongKeys.length})
                  </button>
                );
              })()}
              <button onClick={onRestart} className="btn-secondary" style={{borderColor:'var(--accent)', color:'var(--accent)'}}>Nouveau test</button>
            </div>
          </div>

          {/* Bandeau mode relecture */}
          {historyMode && (
            <div className="no-print" style={{background:'rgba(15,94,107,0.08)', border:'1.5px solid var(--sea)', borderRadius:12, padding:'12px 16px', marginBottom:16, display:'flex', gap:10, alignItems:'center'}}>
              <span style={{fontSize:20}}>📖</span>
              <span style={{flex:1, fontSize:15}}>
                Tu consultes ton <strong>dernier bilan</strong> — aucune modification ne sera enregistrée.
              </span>
            </div>
          )}

          {/* Célébration (nouveaux badges, record, note parfaite) */}
          {celebration && (celebration.newBadges.length > 0 || celebration.newRecord || celebration.perfect) && (
            <div className="celebration no-print pop-in" style={{
              border:'2px solid var(--accent)',
              background:'linear-gradient(135deg, rgba(184,50,61,0.08), rgba(199,138,29,0.1), rgba(22,106,57,0.08))',
              borderRadius:14, padding:'18px 20px', marginBottom:18, position:'relative', overflow:'hidden',
            }}>
              <div className="confetti-layer" aria-hidden="true" style={{position:'absolute', inset:0, pointerEvents:'none', overflow:'hidden'}}>
                {Array.from({length:22}).map((_,i) => {
                  const colors = ['#b8323d','#c78a1d','#2f6e3a','#0f5e6b','#7c3aed'];
                  const c = colors[i%colors.length];
                  const left = (i * 4.3 + 2) % 100;
                  const delay = (i % 8) * 0.12;
                  const dur = 2.2 + (i%5)*0.3;
                  const size = 6 + (i%4)*2;
                  return <span key={i} style={{position:'absolute', top:-10, left:`${left}%`, width:size, height:size*1.4, background:c, borderRadius:1, animation:`confetti-fall ${dur}s ease-in ${delay}s 1 both`, transform:`rotate(${i*27}deg)`}} />;
                })}
              </div>
              <div style={{position:'relative'}}>
                <div className="font-mono" style={{fontSize:'10px', letterSpacing:'0.28em', textTransform:'uppercase', color:'var(--accent)', marginBottom:6, fontWeight:700}}>
                  {celebration.perfect ? '✨ Note parfaite !' : (celebration.newRecord ? '🚀 Nouveau record !' : '🎉 Bravo !')}
                </div>
                <div className="font-display" style={{fontSize:'22px', fontWeight:700, lineHeight:1.2, marginBottom: celebration.newBadges.length ? 10 : 0}}>
                  {celebration.perfect ? '20/20, sans-faute total.' :
                   celebration.newRecord ? `Ta meilleure note sur ce quiz.` :
                   celebration.newBadges.length === 1 ? 'Un nouveau badge débloqué.' : `${celebration.newBadges.length} nouveaux badges débloqués.`}
                </div>
                {celebration.newBadges.length > 0 && (
                  <div style={{display:'flex', flexWrap:'wrap', gap:10, marginTop:8}}>
                    {celebration.newBadges.map(b => (
                      <span key={b.id} className="pop-in" style={{display:'inline-flex', alignItems:'center', gap:8, padding:'8px 14px', background:'rgba(255,255,255,0.85)', border:'1.5px solid var(--accent)', borderRadius:999, fontWeight:600, fontSize:14}}>
                        <span style={{fontSize:20, lineHeight:1}}>{b.emoji}</span>
                        <span>{b.title}</span>
                      </span>
                    ))}
                  </div>
                )}
                {celebration.streak >= 2 && !celebration.newBadges.find(b => b.id.startsWith('streak')) && (
                  <div className="font-mono" style={{fontSize:12, marginTop:8, color:'var(--ochre)'}}>
                    🔥 {celebration.streak} jours de suite — continue comme ça.
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="font-mono text-xs uppercase tracking-[0.3em] mb-3" style={{color:'var(--accent)'}}>— Élève</div>
          <h1 className="font-display font-light text-5xl md:text-6xl mb-2 leading-[0.95]">{student.name}</h1>
          <div className="font-display text-lg md:text-xl" style={{color:'var(--muted)'}}>
            {student.klass && <>{student.klass} · </>}{new Date().toLocaleDateString('fr-FR', { day:'numeric', month:'long', year:'numeric' })}
          </div>
        </div>

        <div className="mb-12 grid md:grid-cols-[auto_1fr] gap-8 items-center border-t-2 border-b-2 py-10 fade-up" style={{borderColor:'var(--ink)', animationDelay:'.1s'}}>
          <div className="flex justify-center md:justify-start">
            <div className="relative" style={{ width:220, height:220 }}>
              <svg width="220" height="220" viewBox="0 0 220 220">
                <circle cx="110" cy="110" r={gaugeR} fill="none" stroke="var(--line)" strokeWidth="10"/>
                <circle cx="110" cy="110" r={gaugeR} fill="none" stroke={noteColor} strokeWidth="10" strokeLinecap="round" strokeDasharray={circ} strokeDashoffset={circ - progress} className="gauge-ring" style={{ transition:'stroke-dashoffset 1.6s cubic-bezier(.4,0,.2,1)' }} />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="font-display font-light leading-none" style={{color: noteColor, fontSize:'4.5rem', letterSpacing:'-0.04em'}}>{note20}</div>
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] mt-1" style={{color:'var(--muted)'}}>sur 20 · pondéré</div>
              </div>
            </div>
          </div>
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] mb-3" style={{color:'var(--muted)'}}>Appréciation générale</div>
            <div className="font-display font-semibold text-3xl md:text-4xl mb-4" style={{color: noteColor}}>{result.levelLabel}</div>
            <p className="text-lg leading-relaxed" style={{color:'var(--ink-soft)'}}>{result.appreciation}</p>
            <div className="mt-6 grid grid-cols-3 gap-3">
              <div><div className="font-display text-3xl font-semibold" style={{color:'var(--success)'}}>{result.correct}</div><div className="font-mono text-[10px] uppercase tracking-[0.18em]" style={{color:'var(--muted)'}}>bonnes</div></div>
              <div>
                <div className="font-display text-3xl font-semibold" style={{color:'var(--danger)'}}>{result.wrong}</div>
                <div className="font-mono text-[10px] uppercase tracking-[0.18em]" style={{color:'var(--muted)'}}>fausses</div>
                {result.wrong > 0 && <div className="font-mono text-[10px] mt-0.5" style={{color:'var(--danger)'}}>−{result.penaltyPoints.toFixed(1)} pt</div>}
              </div>
              <div><div className="font-display text-3xl font-semibold" style={{color:'var(--muted)'}}>{result.skipped}</div><div className="font-mono text-[10px] uppercase tracking-[0.18em]" style={{color:'var(--muted)'}}>passées</div></div>
            </div>
            <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em]" style={{color:'var(--muted)'}}>Barème : +1 pt correct · 0 pt passé · −0,5 pt faux</div>
          </div>
        </div>

        <div className="mb-12 grid sm:grid-cols-2 gap-4 fade-up" style={{animationDelay:'.15s'}}>
          <div className="p-5 rounded-xl" style={{border:'1px solid var(--line)'}}>
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] mb-1" style={{color:'var(--muted)'}}>Note brute</div>
            <div className="font-display text-3xl font-semibold">{result.noteSur20.toFixed(1)} / 20</div>
            <div className="text-sm mt-1" style={{color:'var(--ink-soft)'}}>Toutes les questions comptent pareil (barème +1 / 0 / −0,5).</div>
          </div>
          <div className="p-5 rounded-xl" style={{border:'2px solid var(--accent)', background:'rgba(184,50,61,0.05)'}}>
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] mb-1" style={{color:'var(--accent)'}}>Note pondérée — plus fiable</div>
            <div className="font-display text-3xl font-semibold" style={{color:'var(--accent)'}}>{result.noteWeighted.toFixed(1)} / 20</div>
            <div className="text-sm mt-1" style={{color:'var(--ink-soft)'}}>Les chapitres les plus importants pèsent plus (même barème +1 / 0 / −0,5).</div>
          </div>
        </div>

        {showCurve && (
          <div className="mb-12 fade-up" style={{animationDelay:'.17s'}}>
            <div className="font-mono text-[11px] uppercase tracking-[0.28em] mb-3" style={{color:'var(--accent)'}}>— Progression</div>
            <h2 className="font-display font-light text-3xl md:text-4xl mb-6 leading-tight">Tes {attempts.length} derniers tests</h2>
            <ProgressCurve attempts={attempts} />
          </div>
        )}

        <div className="mb-12 fade-up" style={{animationDelay:'.18s'}}>
          <div className="font-mono text-[11px] uppercase tracking-[0.28em] mb-3" style={{color:'var(--accent)'}}>— Rose des compétences</div>
          <h2 className="font-display font-light text-3xl md:text-4xl mb-6 leading-tight">Ton profil <em className="font-semibold italic" style={{color:'var(--accent)'}}>d'un coup d'œil</em></h2>
          <CompetenceRadar
            byDomain={result.byDomain}
            previousDomains={attempts.length >= 2 ? attempts[attempts.length - 2].domains : null}
          />
        </div>

        <div className="mb-14 fade-up" style={{animationDelay:'.2s'}}>
          <div className="font-mono text-[11px] uppercase tracking-[0.28em] mb-3" style={{color:'var(--accent)'}}>— Diagnostic par chapitre</div>
          <h2 className="font-display font-light text-3xl md:text-4xl mb-8 leading-tight">Où en es-tu, chapitre par chapitre ?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-3">
            {Object.entries(result.byDomain).map(([id, data]) => {
              const dom = DOMAINS[id];
              const isOpen = openDomain === id;
              return (
                <div key={id} className="domain-card" data-level={data.level}>
                  <button onClick={() => setOpenDomain(isOpen ? null : id)} className="w-full text-left flex items-start gap-3" aria-expanded={isOpen}>
                    <div className="flex-shrink-0 flex items-center justify-center font-display font-semibold text-xl" style={{width:44, height:44, borderRadius:10, background:`${dom.color}1a`, color:dom.color}}>{dom.icon}</div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <div className="font-display font-semibold text-[17px] leading-tight">{dom.name}</div>
                        <span className="chip" style={{background:`${levelColorMap[data.level]}18`, color:levelColorMap[data.level], borderColor:`${levelColorMap[data.level]}55`}}>
                          <span className="dotmark" />{levelLabelMap[data.level]}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 mt-2">
                        <div className="flex-1 h-2 rounded-full overflow-hidden" style={{background:'rgba(11,26,46,0.08)'}}>
                          <div className="h-full" style={{ width:`${data.pct}%`, background: levelColorMap[data.level], transition:'width 1s ease' }} />
                        </div>
                        <span className="font-mono text-xs" style={{color:'var(--muted)'}}>{data.correct}/{data.total}</span>
                      </div>
                      <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em]" style={{color:'var(--muted)'}}>coef {dom.coef}/4</div>
                    </div>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{transform:isOpen?'rotate(180deg)':'', transition:'transform .2s', marginTop:6}}>
                      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </button>
                  {isOpen && (
                    <div className="mt-4 pt-4 border-t" style={{borderColor:'var(--line)'}}>
                      {data.errors.length > 0 ? (
                        <div className="space-y-3">
                          <div className="font-mono text-[10px] uppercase tracking-[0.18em]" style={{color:'var(--muted)'}}>Détail</div>
                          {data.errors.map((err, i) => {
                            const qq = err.q;
                            const goodLetter = ['A','B','C','D'][qq.correct];
                            return (
                              <div key={i} className="p-3 rounded-lg" style={{background:'rgba(255,255,255,.55)'}}>
                                <div className="font-display text-[15px] mb-2">{qq.q}</div>
                                <div className="font-mono text-[11px]" style={{color:'var(--muted)'}}>
                                  {err.type === 'skipped' ? (<>Non répondue · Bonne réponse : <strong style={{color:'var(--success)'}}>{goodLetter}</strong></>) : (<>Réponse : <strong style={{color:'var(--danger)'}}>{['A','B','C','D'][err.given]}</strong> · Attendu : <strong style={{color:'var(--success)'}}>{goodLetter}</strong></>)}
                                </div>
                                <div className="mt-2 text-sm italic" style={{color:'var(--ink-soft)'}}>→ {qq.hint}</div>
                              </div>
                            );
                          })}
                        </div>
                      ) : (
                        <div className="text-sm italic" style={{color:'var(--success)'}}>✓ Parfait : aucune erreur sur ce chapitre.</div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {result.forces.length > 0 && (
          <div className="mb-14 fade-up" style={{animationDelay:'.25s'}}>
            <div className="font-mono text-[11px] uppercase tracking-[0.28em] mb-3" style={{color:'var(--success)'}}>— Points forts</div>
            <h2 className="font-display font-light text-3xl md:text-4xl mb-6 leading-tight">Ce qui est <em className="font-semibold italic" style={{color:'var(--success)'}}>bien maîtrisé</em></h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {result.forces.map(id => (
                <div key={id} className="p-4 rounded-lg" style={{borderLeft:'4px solid var(--success)', background:'rgba(22,106,57,0.06)'}}>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-display font-semibold text-lg" style={{color:DOMAINS[id].color}}>{DOMAINS[id].icon}</span>
                    <div className="font-display font-semibold text-[17px] leading-tight">{DOMAINS[id].name}</div>
                  </div>
                  <div className="font-mono text-[11px] mt-1" style={{color:'var(--muted)'}}>{result.byDomain[id].correct}/{result.byDomain[id].total} réussies</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {result.lacunes.length > 0 && (
          <div className="mb-14 fade-up" style={{animationDelay:'.3s'}}>
            <div className="font-mono text-[11px] uppercase tracking-[0.28em] mb-3" style={{color:'var(--accent)'}}>— Plan de travail</div>
            <h2 className="font-display font-light text-3xl md:text-4xl mb-2 leading-tight">À travailler en <em className="font-semibold italic" style={{color:'var(--accent)'}}>priorité</em></h2>
            <p className="mb-8 text-lg" style={{color:'var(--ink-soft)'}}>Classés par urgence : niveau de maîtrise × importance.</p>
            <div className="space-y-6">
              {result.lacunes.map((lac, i) => {
                const dom = DOMAINS[lac.id];
                const plan = planOf(lac.id, lac.level);
                return (
                  <div key={lac.id} className="flex gap-4 md:gap-6">
                    <div className="flex-shrink-0 w-12 md:w-14 text-center">
                      <div className="font-display font-light text-4xl md:text-5xl" style={{color:'var(--accent)', letterSpacing:'-0.04em'}}>{String(i+1).padStart(2,'0')}</div>
                    </div>
                    <div className="flex-1 border-l-2 pl-4 md:pl-6 pb-4" style={{borderColor:'var(--line)'}}>
                      <div className="mb-3 flex items-center gap-3 flex-wrap">
                        <span className="font-display font-semibold text-lg" style={{color:dom.color}}>{dom.icon}</span>
                        <div className="font-display font-semibold text-xl md:text-2xl">{dom.name}</div>
                        <span className="chip" style={{background:`${lac.level==='non-acquis'?'var(--danger)':'var(--ochre)'}18`, color: lac.level==='non-acquis'?'var(--danger)':'var(--ochre)', borderColor:'transparent'}}>
                          <span className="dotmark" />{lac.level === 'non-acquis' ? 'Urgent' : 'À consolider'}
                        </span>
                      </div>
                      <div className="text-sm mb-4 font-mono" style={{color:'var(--muted)'}}>Score {lac.correct}/{lac.total} ({Math.round(lac.pct)}%) · Coefficient {dom.coef}/4</div>
                      {plan.length > 0 && (
                        <ul className="space-y-2.5">
                          {plan.map((action, j) => (
                            <li key={j} className="flex gap-3 text-[16px]"><span className="font-mono text-sm mt-1 flex-shrink-0" style={{color:'var(--accent)'}}>□</span><span style={{color:'var(--ink-soft)'}}>{action}</span></li>
                          ))}
                        </ul>
                      )}
                      <div className="mt-4 flex flex-wrap gap-2 no-print">
                        <a href={searchCourseUrl(lac.id)} target="_blank" rel="noopener noreferrer" className="chip" style={{background:'rgba(184,50,61,0.08)', color:'var(--accent)', borderColor:'rgba(184,50,61,0.35)', textDecoration:'none'}}><span className="dotmark" />Cours écrits</a>
                        <a href={youtubeSearchUrl(lac.id)} target="_blank" rel="noopener noreferrer" className="chip" style={{background:'rgba(184,50,61,0.08)', color:'var(--accent)', borderColor:'rgba(184,50,61,0.35)', textDecoration:'none'}}><span className="dotmark" />Vidéos</a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        <div className="mb-12 fade-up no-print" style={{animationDelay:'.33s'}}>
          <div className="font-mono text-[11px] uppercase tracking-[0.28em] mb-3" style={{color:'var(--accent)'}}>— Ressources pour bosser</div>
          <h2 className="font-display font-light text-3xl md:text-4xl mb-3 leading-tight">Où trouver des cours <em className="font-semibold italic" style={{color:'var(--accent)'}}>gratuits</em></h2>
          <p className="mb-6 text-[17px]" style={{color:'var(--ink-soft)'}}>Ces sites couvrent le programme officiel. Choisis celui avec lequel tu accroches le mieux.</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {RESOURCES.map(r => (
              <a key={r.url} href={r.url} target="_blank" rel="noopener noreferrer" className="p-4 rounded-lg flex items-center justify-between gap-3" style={{border:'1.5px solid var(--line)', background:'rgba(255,255,255,0.6)', textDecoration:'none', color:'var(--ink)'}}>
                <div>
                  <div className="font-display font-semibold text-lg">{r.label}</div>
                  <div className="font-mono text-[11px] mt-0.5" style={{color:'var(--muted)'}}>{r.author}</div>
                </div>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{color:'var(--accent)', flexShrink:0}}>
                  <path d="M5 13L13 5m0 0H6m7 0v7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div className="p-7 md:p-10 rounded-xl fade-up" style={{border:'2px solid var(--ink)', background:'rgba(255,255,255,0.55)', animationDelay:'.35s'}}>
          <div className="font-mono text-[11px] uppercase tracking-[0.28em] mb-3" style={{color:'var(--accent)'}}>— Recommandation finale</div>
          <h3 className="font-display font-light text-2xl md:text-3xl mb-4 leading-snug">{getFinalAdvice(result)}</h3>
          <p className="text-base md:text-lg leading-relaxed" style={{color:'var(--ink-soft)'}}>{getFinalDetail(result)}</p>
          <div className="mt-6 pt-6 border-t" style={{borderColor:'var(--line)'}}>
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] mb-2" style={{color:'var(--muted)'}}>Temps de travail conseillé</div>
            <div className="font-display text-2xl font-semibold">{getSummerTime(result)}</div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t text-center fade-up no-print" style={{borderColor:'var(--line)', animationDelay:'.4s'}}>
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] mb-2" style={{color:'var(--muted)'}}>Évaluation générée le {new Date().toLocaleDateString('fr-FR')}</div>
          <div className="font-display italic text-lg" style={{color:'var(--muted)'}}>« Le niveau s'entretient. Un test tous les 2-3 mois permet de suivre ta progression. »</div>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// APP
// ============================================================
// Reconstitue un quiz + answers à partir d'un attempt stocké (mode relecture)
// Si le log contient `order` (depuis v2), la reconstruction est EXACTE :
//   mêmes options dans le même ordre que lors du test, et `given` directement utilisable.
// Pour les anciens attempts sans `order`, on fallback sur l'ordre POOL et on approxime `given`.
function rebuildFromAttempt(attempt) {
  const byKey = {};
  Object.keys(POOL).forEach(did => (POOL[did] || []).forEach(q => byKey[q.key] = { ...q, domain: did }));
  const quizArr = [];
  const ans = {};
  (attempt.log || []).forEach((entry) => {
    const src = byKey[entry.key];
    if (!src) return;
    let options, correctIdx;
    if (Array.isArray(entry.order) && entry.order.length === src.options.length) {
      options = entry.order.map(i => src.options[i]);
      correctIdx = entry.order.indexOf(src.correct);
    } else {
      options = src.options;
      correctIdx = src.correct;
    }
    quizArr.push({
      key: src.key, domain: src.domain, q: src.q,
      options, correct: correctIdx, hint: src.hint,
    });
    if (entry.given === null || entry.given === undefined) {
      ans[src.key] = null;
    } else if (Array.isArray(entry.order)) {
      // given déjà l'index dans les options shuffled → utilisable tel quel
      ans[src.key] = entry.given;
    } else {
      // Ancien format : approximation (bonne réponse si ok, sinon autre)
      ans[src.key] = entry.ok ? correctIdx : ((correctIdx + 1) % options.length);
    }
  });
  return { quiz: quizArr.map((q, i) => ({ ...q, num: i + 1 })), answers: ans };
}

// Initial state factories : Babel Standalone TSX ne supporte pas `useState<T>(v)` ni
// `v as T` inline dans un appel. Passer un initializer typé `(): T => ...` contourne
// les deux problèmes et laisse TS inférer correctement le type du state.
const initialPhase = (): QuizPhase => 'home';
const initialStudent = (): StudentInfo | null => null;
const initialMode = (): Mode => 'training';
const initialAnswers = (): AnswersMap => ({});
const initialTimings = (): TimingsMap => ({});
const initialHints = (): HintsMap => ({});
const initialOpenDomain = (): string | null => null;
const initialProfile = (): Profile | null => null;
const initialCelebration = (): Celebration | null => null;
const initialRemaining = (): number | null => null;

function App() {
  const [screen, setScreen]           = useState(initialPhase);
  const [historyMode, setHistoryMode] = useState(false);
  const [student, setStudent]         = useState(initialStudent);
  const [mode, setMode]               = useState(initialMode);
  const [quiz, setQuiz]               = useState(buildQuiz);
  const [answers, setAnswers]         = useState(initialAnswers);
  const [timings, setTimings]         = useState(initialTimings);
  const [hintsUsed, setHintsUsed]     = useState(initialHints);
  const [totalMs, setTotalMs]         = useState(0);

  // Nettoyage : coupe la sous-route /report/<ISO> du hash pour revenir à #/Neme/subject.
  // Utilise setHashSilently (exposé par le routeur wizard) pour éviter un re-render.
  const resetUrl = () => {
    try {
      const hash = window.location.hash || '';
      const cleaned = hash.replace(/\/report\/.+$/, '');
      if (cleaned !== hash && typeof window.setHashSilently === 'function') window.setHashSilently(cleaned);
    } catch {}
  };

  // Au montage : deep-link vers un rapport précis (via initialReportAt injecté par mountQuizApp, ou ?view=report legacy)
  useEffect(() => {
    let reportAt = initialReportAt || null;
    if (!reportAt) {
      const params = new URLSearchParams(window.location.search);
      if (params.get('view') === 'report') reportAt = params.get('at') || '__latest__';
    }
    if (!reportAt) return;
    const active = getActiveStudent();
    if (!active) return;
    const profile = getProfile(active.name);
    if (!profile?.attempts?.length) return;
    const target = (reportAt !== '__latest__')
      ? (profile.attempts.find(a => a.date === reportAt) || profile.attempts[profile.attempts.length - 1])
      : profile.attempts[profile.attempts.length - 1];
    if (!target?.log) return;
    const rebuilt = rebuildFromAttempt(target);
    if (rebuilt.quiz.length === 0) return;
    setStudent({ name: active.name, klass: profile.klass || '' });
    setQuiz(rebuilt.quiz);
    setAnswers(rebuilt.answers);
    setMode(target.mode || 'training');
    setHistoryMode(true);
    setScreen('report');
  }, []);

  const handleStart = (info, chosenMode) => {
    setStudent(info);
    setMode(chosenMode || 'training');
    setQuiz(buildQuiz());
    setAnswers({}); setTimings({}); setHintsUsed({}); setTotalMs(0);
    setHistoryMode(false);
    setScreen('quiz');
    window.scrollTo(0, 0);
  };

  const handleFinish = (ans, tms, totalMilli, hints, finalMode) => {
    setAnswers(ans);
    setTimings(tms || {});
    setHintsUsed(hints || {});
    setTotalMs(totalMilli || 0);
    if (finalMode) setMode(finalMode);
    setHistoryMode(false);
    setScreen('report');
    window.scrollTo(0, 0);
  };

  const handleRestart = () => {
    if (!confirm('Faire un nouveau test ?')) return;
    setHistoryMode(false);
    setAnswers({}); setTimings({}); setHintsUsed({}); setTotalMs(0);
    setQuiz(buildQuiz());
    setScreen('home');
    resetUrl();
    window.scrollTo(0, 0);
  };

  const handleRetryWrong = (wrongKeys) => {
    const retryQuiz = buildQuiz(wrongKeys);
    if (retryQuiz.length === 0) return;
    setQuiz(retryQuiz);
    setAnswers({}); setTimings({}); setHintsUsed({}); setTotalMs(0);
    setHistoryMode(false);
    setScreen('quiz');
    resetUrl();
    window.scrollTo(0, 0);
  };

  if (screen === 'home')   return <HomeScreen onStart={handleStart} />;
  if (screen === 'quiz')   return <QuizScreen student={student} quiz={quiz} onFinish={handleFinish} mode={mode} />;
  if (screen === 'report') return <ReportScreen student={student} quiz={quiz} answers={answers} timings={timings} totalMs={totalMs} hintsUsed={hintsUsed} mode={mode} onRestart={handleRestart} onRetryWrong={handleRetryWrong} historyMode={historyMode} />;
  return null;
}
// Montage dynamique — l'index.html appelle mountQuizApp(key, {reportAt}) quand la route change.
let quizRoot = null;
let initialReportAt = null;
window.mountQuizApp = function(key, options) {
  setActiveQuiz(key);
  initialReportAt = (options && options.reportAt) || null;
  const el = document.getElementById('root');
  if (!el) return;
  el.style.display = '';
  if (!quizRoot) quizRoot = ReactDOM.createRoot(el);
  // La React-key inclut reportAt → remount forcé aussi quand on passe de quiz nu à quiz avec deep-link report (même quiz).
  const rkey = initialReportAt ? `${key}#${initialReportAt}` : key;
  quizRoot.render(<App key={rkey} />);
};
window.unmountQuizApp = function() {
  if (!quizRoot) return;
  quizRoot.unmount();
  quizRoot = null;
  const el = document.getElementById('root');
  if (el) { el.style.display = 'none'; el.innerHTML = ''; }
};
// Vidange la queue si le routeur a demandé un mount avant que app.jsx soit compilé par Babel.
if (window.__pendingQuizMount) {
  const p = window.__pendingQuizMount;
  window.__pendingQuizMount = null;
  window.mountQuizApp(p.key, p.options);
}

})(); // fin IIFE appJsxModule
