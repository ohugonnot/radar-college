// Source éditable — quiz maths-3. Régénéré automatiquement dans index.html via build.sh.
window.ALL_QUIZZES['maths-3'] = {
  SEARCH_SITES: 'site:maths-et-tiques.fr OR site:fr.khanacademy.org OR site:lumni.fr',
  YT_SUFFIX: 'Yvan Monka brevet',
  SUMMER_TOPIC: 'maths',
  SUBJECT: {
    id: 'maths-3',
    name: 'Mathématiques',
    short: 'Maths',
    level: 'Fin de 3ème (brevet)',
    mark: '∑',
    tagline: 'Évaluation brevet',
  },
  DOMAINS: {
    arithmetique: { id:'arithmetique', name:'Arithmétique (PGCD, fractions irréductibles)', short:'Arithmétique', coef:2, color:'#0f5e6b', icon:'N',  search:'pgcd arithmetique 3eme brevet' },
    puissances:   { id:'puissances',   name:'Puissances & écriture scientifique',           short:'Puissances',   coef:2, color:'#6d28d9', icon:'xⁿ', search:'puissances ecriture scientifique 3eme' },
    remarquables: { id:'remarquables', name:'Identités remarquables',                        short:'Remarquables', coef:3, color:'#be123c', icon:'²',  search:'identites remarquables 3eme' },
    equations:    { id:'equations',    name:'Équations & inéquations',                        short:'Équations',    coef:4, color:'#b8323d', icon:'=',  search:'equations inequations 3eme' },
    fonctions:    { id:'fonctions',    name:'Fonctions linéaires & affines',                  short:'Fonctions',    coef:4, color:'#c2410c', icon:'f',  search:'fonctions lineaires affines 3eme' },
    pythagore:    { id:'pythagore',    name:'Pythagore (direct + réciproque)',                short:'Pythagore',    coef:3, color:'#a01b34', icon:'△',  search:'theoreme pythagore reciproque 3eme' },
    thales:       { id:'thales',       name:'Thalès (direct + réciproque)',                   short:'Thalès',       coef:3, color:'#7a2ca8', icon:'//', search:'theoreme thales reciproque 3eme' },
    trigo:        { id:'trigo',        name:'Trigonométrie (sin, cos, tan)',                  short:'Trigo',        coef:3, color:'#1d4ed8', icon:'θ',  search:'trigonometrie sinus cosinus tangente 3eme' },
    geomespace:   { id:'geomespace',   name:'Géométrie dans l\'espace (volumes, sections)',   short:'Espace',       coef:2, color:'#166a39', icon:'▢',  search:'geometrie espace volumes sections 3eme' },
    stats:        { id:'stats',        name:'Statistiques & probabilités',                    short:'Stats',        coef:2, color:'#c4307a', icon:'p',  search:'statistiques probabilites mediane 3eme' },
  },
  RESOURCES: [
    { label:'Maths et Tiques 3ème',  author:'Yvan Monka (gratuit)', url:'https://www.maths-et-tiques.fr/index.php/cours-en-ligne/cours-troisieme' },
    { label:'Khan Academy 3ème',     author:'Cours + exos',          url:'https://fr.khanacademy.org/math/cycle-4-3eme-v2' },
    { label:'Lumni — Maths 3ème',    author:'France TV éducation',   url:'https://www.lumni.fr/college/troisieme/mathematiques' },
    { label:'Annales brevet gratuites', author:'Sujets + corrigés', url:'https://www.brevetdescolleges.fr/annales/' },
  ],
  POOL: {
    arithmetique: [
      { key:'ari-1', q:'Le PGCD de 48 et 36 est :', options:['6','12','24','144'], correct:1, hint:'Algorithme d\'Euclide : 48=36×1+12, 36=12×3+0 → PGCD=12.' },
      { key:'ari-2', q:<>La fraction <F n="48" d="36"/> simplifiée à l\'irréductible vaut :</>, options:[<F n="4" d="3"/>, <F n="3" d="2"/>, <F n="2" d="3"/>, <F n="3" d="4"/>], correct:0, hint:'PGCD(48,36)=12 → 48/36 = 4/3 (irréductible).' },
      { key:'ari-3', q:'Deux nombres sont premiers entre eux si leur PGCD vaut :', options:['0','1','le plus petit','le plus grand'], correct:1, hint:'Premiers entre eux ⇔ PGCD = 1.' },
      { key:'ari-4', q:'Combien de parts identiques maximum peut-on faire avec 48 gâteaux et 36 bonbons ?', options:['6','12','84','144'], correct:1, hint:'PGCD(48,36) = 12 parts.' },
      { key:'ari-5', q:<>La fraction <F n="15" d="25"/> est-elle irréductible ?</>, options:['Oui','Non (PGCD=5 → 3/5)','Non (PGCD=3)','On ne peut pas savoir'], correct:1, hint:'15/25 = 3/5 après simplification par 5.' },
    ],
    puissances: [
      { key:'pui-1', q:<>Simplifie : <M>2<sup>5</sup> × 2<sup>3</sup> =</M></>, options:[<>2<sup>8</sup></>, <>2<sup>15</sup></>, <>4<sup>8</sup></>, <>2<sup>2</sup></>], correct:0, hint:'aⁿ × aᵐ = aⁿ⁺ᵐ' },
      { key:'pui-2', q:<>Calcule : <M>10<sup>−4</sup> × 10<sup>6</sup> =</M></>, options:[<>10<sup>2</sup></>, <>10<sup>10</sup></>, <>10<sup>−24</sup></>, <>10<sup>−2</sup></>], correct:0, hint:'−4 + 6 = 2' },
      { key:'pui-3', q:'Écris en notation scientifique : 0,000 032', options:[<>3,2 × 10<sup>−5</sup></>, <>32 × 10<sup>−6</sup></>, <>3,2 × 10<sup>5</sup></>, <>0,32 × 10<sup>−4</sup></>], correct:0, hint:'Un seul chiffre non nul avant la virgule : 3,2 × 10⁻⁵' },
      { key:'pui-4', q:<>Simplifie : <M>(3<sup>2</sup>)<sup>4</sup> =</M></>, options:[<>3<sup>6</sup></>, <>3<sup>8</sup></>, <>9<sup>4</sup></>, <>12<sup>2</sup></>], correct:1, hint:'Puissance de puissance : on multiplie les exposants → 3⁸' },
      { key:'pui-5', q:<>Calcule : <M>(2 × 10<sup>3</sup>) × (4 × 10<sup>5</sup>) =</M></>, options:[<>8 × 10<sup>8</sup></>, <>6 × 10<sup>8</sup></>, <>8 × 10<sup>15</sup></>, <>2 × 10<sup>8</sup></>], correct:0, hint:'2×4 = 8 et 10³ × 10⁵ = 10⁸' },
    ],
    remarquables: [
      { key:'rem-1', q:<>Développe : <M>(x + 5)<sup>2</sup> =</M></>, options:[<><M>x<sup>2</sup> + 25</M></>, <><M>x<sup>2</sup> + 10x + 25</M></>, <><M>x<sup>2</sup> − 10x + 25</M></>, <><M>2x + 10</M></>], correct:1, hint:'(a+b)² = a² + 2ab + b²' },
      { key:'rem-2', q:<>Développe : <M>(2x − 3)<sup>2</sup> =</M></>, options:[<><M>4x<sup>2</sup> − 9</M></>, <><M>4x<sup>2</sup> + 9</M></>, <><M>4x<sup>2</sup> − 12x + 9</M></>, <><M>2x<sup>2</sup> − 6x + 9</M></>], correct:2, hint:'(a−b)² = a² − 2ab + b² = 4x² − 12x + 9' },
      { key:'rem-3', q:<>Développe : <M>(x + 4)(x − 4) =</M></>, options:[<><M>x<sup>2</sup> − 16</M></>, <><M>x<sup>2</sup> + 16</M></>, <><M>x<sup>2</sup> − 8x + 16</M></>, <><M>2x</M></>], correct:0, hint:'(a+b)(a−b) = a² − b² = x² − 16' },
      { key:'rem-4', q:<>Factorise : <M>x<sup>2</sup> − 49 =</M></>, options:[<><M>(x − 7)(x + 7)</M></>, <><M>(x − 7)<sup>2</sup></M></>, <><M>(x + 7)<sup>2</sup></M></>, <><M>x(x − 49)</M></>], correct:0, hint:'a² − b² = (a−b)(a+b). 49 = 7²' },
      { key:'rem-5', q:<>Factorise : <M>x<sup>2</sup> + 6x + 9 =</M></>, options:[<><M>(x + 3)<sup>2</sup></M></>, <><M>(x − 3)<sup>2</sup></M></>, <><M>(x + 3)(x + 9)</M></>, <><M>(x + 6)(x + 9)</M></>], correct:0, hint:'Forme a²+2ab+b² avec a=x, b=3 → (x+3)²' },
    ],
    equations: [
      { key:'equ-1', q:<>Résous : <M>4x − 7 = 2x + 5</M></>, options:['x = 6','x = −6','x = 3','x = 12'], correct:0, hint:'4x − 2x = 5 + 7 → 2x = 12 → x = 6' },
      { key:'equ-2', q:<>Résous l\'équation produit : <M>(x − 3)(x + 5) = 0</M></>, options:['x = 3 seulement','x = 3 ou x = −5','x = −3 ou x = 5','x = 15'], correct:1, hint:'Un produit nul ⇔ un des facteurs est nul.' },
      { key:'equ-3', q:<>Résous : <M>x<sup>2</sup> = 16</M></>, options:['x = 4','x = 4 ou x = −4','x = 8','x = 2'], correct:1, hint:'x² = 16 a deux solutions : 4 et −4.' },
      { key:'equ-4', q:<>Résous l\'inéquation : <M>3x − 5 ≤ 7</M></>, options:['x ≤ 4','x ≥ 4','x ≤ 2/3','x ≥ 12'], correct:0, hint:'3x ≤ 12 → x ≤ 4' },
      { key:'equ-5', q:'Dans une inéquation, que se passe-t-il quand on multiplie ou divise par un nombre négatif ?', options:['Rien ne change','Le sens de l\'inégalité change','L\'inégalité disparaît','Il faut mettre au carré'], correct:1, hint:'Multiplier par négatif INVERSE le sens de l\'inégalité.' },
      { key:'equ-6', q:<>Résous le système : <M>x + y = 10</M> et <M>x − y = 4</M></>, options:['x=7, y=3','x=3, y=7','x=5, y=5','x=6, y=4'], correct:0, hint:'Ajouter les 2 équations → 2x=14 → x=7, puis y=3.' },
    ],
    fonctions: [
      { key:'fon-1', q:'Une fonction linéaire a pour forme :', options:['f(x) = ax + b','f(x) = ax','f(x) = x + b','f(x) = a/x'], correct:1, hint:'Linéaire : f(x) = ax. Affine : f(x) = ax + b.' },
      { key:'fon-2', q:'Si f(x) = 3x et f(5) = ?', options:['15','8','5/3','3'], correct:0, hint:'f(5) = 3 × 5 = 15' },
      { key:'fon-3', q:'La représentation graphique d\'une fonction linéaire est :', options:['Une courbe','Une droite passant par l\'origine','Une droite quelconque','Un cercle'], correct:1, hint:'Linéaire f(x)=ax → droite passant par (0,0).' },
      { key:'fon-4', q:'La représentation graphique d\'une fonction affine f(x) = ax + b est :', options:['Une droite d\'ordonnée à l\'origine b','Toujours passant par l\'origine','Une parabole','Une hyperbole'], correct:0, hint:'Affine : droite, passe par (0, b).' },
      { key:'fon-5', q:'Pour f(x) = 2x − 3, quelle est l\'image de 4 ?', options:['5','8','11','−4'], correct:0, hint:'f(4) = 2×4 − 3 = 5' },
      { key:'fon-6', q:'Pour f(x) = 2x − 3, quel antécédent a l\'image 7 ?', options:['x = 2','x = 5','x = 11','x = 3,5'], correct:1, hint:'2x − 3 = 7 → x = 5' },
    ],
    pythagore: [
      { key:'pyt-1', q:'Un triangle ABC a AB = 6, BC = 8, AC = 10. Est-il rectangle ?', options:['Oui, rectangle en B (réciproque de Pythagore)','Non','Oui, rectangle en A','Oui, rectangle en C'], correct:0, hint:'AB² + BC² = 36 + 64 = 100 = AC² → rectangle en B (angle opposé à l\'hypoténuse AC).' },
      { key:'pyt-1b', q:'ABC rectangle en A avec AB = 9 cm, AC = 12 cm. Calcule BC.', options:['15 cm','21 cm','3 cm','√225 ≈ 14 cm'], correct:0, hint:'BC² = 81 + 144 = 225 → BC = 15 cm (triplet 9-12-15)' },
      { key:'pyt-2', q:'L\'hypoténuse d\'un triangle rectangle mesure 13 cm et un côté 12 cm. L\'autre côté mesure :', options:['5 cm','1 cm','√313 cm','7 cm'], correct:0, hint:'c² = 169 − 144 = 25 → c = 5 (triplet 5-12-13)' },
      { key:'pyt-3', q:'Un triangle 5, 12, 13 est :', options:['Rectangle','Isocèle','Équilatéral','Quelconque'], correct:0, hint:'5² + 12² = 25 + 144 = 169 = 13²' },
      { key:'pyt-4', q:'Si AB² + AC² ≠ BC² et BC est le plus grand côté, alors le triangle ABC est :', options:['Rectangle en A','Non rectangle','Rectangle en B','Isocèle'], correct:1, hint:'Contraposée de Pythagore : si l\'égalité n\'est pas vérifiée, le triangle n\'est pas rectangle.' },
    ],
    thales: [
      { key:'tha-1', q:<>Dans la configuration de Thalès, si <M>(MN) // (BC)</M> avec AM = 3, AB = 9 et AN = 4, alors AC vaut :</>, options:['12','7','1,33','36'], correct:0, hint:'AM/AB = AN/AC → 3/9 = 4/AC → AC = 12' },
      { key:'tha-2', q:'La RÉCIPROQUE du théorème de Thalès permet :', options:['De calculer des longueurs','De démontrer que deux droites sont parallèles','De calculer un angle','D\'affirmer qu\'un triangle est rectangle'], correct:1, hint:'Si les rapports sont égaux ET les points alignés dans le même ordre → parallèles.' },
      { key:'tha-3', q:<>Dans ABC, M ∈ [AB] et N ∈ [AC]. Si AM/AB = AN/AC (et points alignés dans le même ordre), alors :</>, options:['(MN) // (BC) par réciproque de Thalès','MN = BC','(MN) ⊥ (BC)','Le triangle est isocèle'], correct:0, hint:'C\'est la réciproque de Thalès.' },
      { key:'tha-4', q:<>Dans une configuration de Thalès, si AM = 2, AN = 3, MB = 4, NC = 5, les droites (MN) et (BC) sont-elles parallèles ?</>, options:['Oui','Non (2/6 ≠ 3/8)','On ne peut pas savoir','Seulement si A est au milieu'], correct:1, hint:'AM/AB = 2/6 = 1/3 ≠ AN/AC = 3/8 → pas parallèles (réciproque).' },
      { key:'tha-5', q:<>Dans une config Thalès, <M>(MN) // (BC)</M>, AM = 3, AB = 9, MN = 2. BC vaut :</>, options:['6','5','4','2,5'], correct:0, hint:'AM/AB = MN/BC → 3/9 = 2/BC → BC = 6' },
    ],
    trigo: [
      { key:'tri-1', q:'Dans un triangle rectangle, le sinus d\'un angle aigu est :', options:[<F n="opposé" d="hypoténuse"/>, <F n="adjacent" d="hypoténuse"/>, <F n="opposé" d="adjacent"/>, <F n="adjacent" d="opposé"/>], correct:0, hint:'SOH CAH TOA : Sin = Opposé/Hyp.' },
      { key:'tri-2', q:'Le tangent d\'un angle aigu dans un triangle rectangle est :', options:[<F n="opposé" d="hypoténuse"/>, <F n="opposé" d="adjacent"/>, <F n="adjacent" d="opposé"/>, <F n="hypoténuse" d="adjacent"/>], correct:1, hint:'TOA : Tan = Opposé / Adjacent.' },
      { key:'tri-3', q:<>Dans un triangle ABC rectangle en A avec AB = 3 et AC = 4, tan(<span style={{textDecoration:'overline'}}>ABC</span>) vaut :</>, options:[<F n="3" d="4"/>, <F n="4" d="3"/>, <F n="3" d="5"/>, <F n="4" d="5"/>], correct:1, hint:'tan(B) = opposé/adjacent = AC/AB = 4/3' },
      { key:'tri-4', q:<>Si sin(α) = 0,5 dans un triangle rectangle, α =</>, options:['30°','45°','60°','90°'], correct:0, hint:'sin(30°) = 0,5' },
      { key:'tri-5', q:'Dans un triangle rectangle, on connaît l\'hypoténuse (10 cm) et un angle aigu (30°). Le côté opposé à 30° mesure :', options:['5 cm','8,66 cm','10 cm','20 cm'], correct:0, hint:'opposé = hyp × sin(30°) = 10 × 0,5 = 5 cm' },
    ],
    geomespace: [
      { key:'esp-1', q:'Le volume d\'une sphère de rayon r est :', options:[<>4πr<sup>2</sup></>, <><F n="4" d="3"/>πr<sup>3</sup></>, <>πr<sup>2</sup>h</>, <>2πr</>], correct:1, hint:'V_sphère = (4/3)πr³' },
      { key:'esp-2', q:'Le volume d\'un cône de base B et hauteur h :', options:['B × h', 'B × h / 3', '2B × h', 'π × B'], correct:1, hint:'V_cône = (B × h) / 3 — comme la pyramide.' },
      { key:'esp-3', q:<>Agrandissement d\'un solide au coefficient k : les volumes sont multipliés par :</>, options:['k','k²','k³','k/3'], correct:2, hint:'Longueurs ×k, aires ×k², volumes ×k³' },
      { key:'esp-4', q:'La section d\'un cube par un plan parallèle à une face est :', options:['Un triangle','Un rectangle','Un carré identique à la face','Un cercle'], correct:2, hint:'Parallèle à une face → carré de même taille.' },
      { key:'esp-5', q:<>Un cylindre a pour rayon 5 cm et hauteur 10 cm. Son volume vaut (π ≈ 3,14) :</>, options:['~157 cm³','~250 cm³','~785 cm³','~1570 cm³'], correct:2, hint:'V = π × r² × h = 3,14 × 25 × 10 = 785 cm³' },
    ],
    stats: [
      { key:'sta-1', q:'La médiane de : 3, 5, 7, 9, 11, 13, 15 est :', options:['7','9','10','15'], correct:1, hint:'Série triée, médiane = valeur centrale = 9 (4ᵉ sur 7).' },
      { key:'sta-2', q:'L\'étendue d\'une série statistique est :', options:['La moyenne','Max − Min','La médiane','La variance'], correct:1, hint:'Étendue = différence entre la plus grande et la plus petite valeur.' },
      { key:'sta-3', q:'On lance deux dés et on fait la somme. La probabilité d\'obtenir 7 est :', options:[<F n="1" d="6"/>, <F n="1" d="36"/>, <F n="1" d="12"/>, <F n="5" d="36"/>], correct:0, hint:'6 issues favorables (1+6, 2+5, 3+4, 4+3, 5+2, 6+1) sur 36 total = 1/6.' },
      { key:'sta-4', q:'Le 1er quartile Q1 d\'une série statistique est :', options:['La moyenne','La valeur telle qu\'au moins 25% des données soient inférieures ou égales','La valeur la plus fréquente','Le maximum'], correct:1, hint:'Q1 = position 25% du classement.' },
      { key:'sta-5', q:'Dans un arbre de probabilités, pour trouver la probabilité d\'une branche complète, on :', options:['Additionne les probabilités','Multiplie les probabilités','Prend le max','Prend la moyenne'], correct:1, hint:'Probabilités du chemin = produit des probabilités sur les branches.' },
    ],
  },
  PICK: {
    arithmetique: 2, puissances: 3, remarquables: 3, equations: 4, fonctions: 4,
    pythagore: 3, thales: 3, trigo: 3, geomespace: 3, stats: 2,
  },
  PLANS: {
    arithmetique: {
      'non-acquis': ['Mémoriser l\'algorithme d\'Euclide pour le PGCD', 'Savoir simplifier une fraction en utilisant le PGCD', 'Reconnaître des nombres premiers entre eux (PGCD = 1)'],
      'fragile':    ['Utiliser le PGCD dans des problèmes concrets (partage, regroupement)']
    },
    puissances: {
      'non-acquis': ['Règles : aⁿ × aᵐ = aⁿ⁺ᵐ, (aⁿ)ᵐ = aⁿᵐ', 'Écriture scientifique : un seul chiffre non nul avant la virgule', 'S\'entraîner sur puissances négatives'],
      'fragile':    ['Opérations avec notation scientifique']
    },
    remarquables: {
      'non-acquis': ['PRIORITÉ BREVET : mémoriser les 3 identités (a+b)², (a−b)², (a+b)(a−b)', 'Développer : 20 exercices', 'Factoriser : reconnaître la forme'],
      'fragile':    ['Applications aux équations (factoriser pour résoudre)']
    },
    equations: {
      'non-acquis': ['Méthode d\'isolation de x étape par étape', 'Équation produit nul : (A)(B) = 0 ⇔ A=0 ou B=0', 'Inéquations : attention au signe quand on multiplie par négatif'],
      'fragile':    ['Systèmes de 2 équations (substitution ou combinaison)', 'Mise en équation de problèmes concrets']
    },
    fonctions: {
      'non-acquis': ['PRIORITÉ BREVET : différencier linéaire (f(x)=ax) et affine (f(x)=ax+b)', 'Image, antécédent : savoir les calculer', 'Représentation graphique : droite passant par (0, b)'],
      'fragile':    ['Déterminer une fonction à partir de 2 points', 'Lire des informations sur un graphique']
    },
    pythagore: {
      'non-acquis': ['Théorème direct : calculer une longueur', 'Réciproque : démontrer qu\'un triangle est rectangle', 'Triplets à connaître : 3-4-5, 5-12-13, 6-8-10, 8-15-17'],
      'fragile':    ['Contraposée : démontrer qu\'un triangle n\'est PAS rectangle']
    },
    thales: {
      'non-acquis': ['Direct : 3 rapports égaux AM/AB = AN/AC = MN/BC', 'Réciproque : si rapports égaux ET alignement même ordre → parallèles', 'Attention à l\'ordre des points'],
      'fragile':    ['Configuration "papillon" (points de part et d\'autre)']
    },
    trigo: {
      'non-acquis': ['SOHCAHTOA : Sin=O/H, Cos=A/H, Tan=O/A', 'Savoir CHOISIR la bonne formule selon ce qu\'on cherche', 'Calculatrice : cos, sin, tan et leurs inverses (cos⁻¹…)'],
      'fragile':    ['Calculer un angle à partir d\'un rapport', 'Distinguer les 3 formules sur un même schéma']
    },
    geomespace: {
      'non-acquis': ['V pyramide = V cône = (B × h) / 3', 'V sphère = (4/3)πr³, V cylindre = πr²h', 'Agrandissement : k (longueurs), k² (aires), k³ (volumes)'],
      'fragile':    ['Sections de solides par un plan (cube, cylindre, cône)']
    },
    stats: {
      'non-acquis': ['Moyenne, médiane, étendue : savoir les calculer', 'Probabilité = cas favorables / cas possibles', 'Arbre de probabilités : on MULTIPLIE le long d\'une branche'],
      'fragile':    ['Quartiles Q1 et Q3, diagrammes en boîte']
    },
  },
};
