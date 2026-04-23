// Source éditable — quiz svt-3. Régénéré automatiquement dans index.html via build.sh.
window.ALL_QUIZZES['svt-3'] = {
  SEARCH_SITES: 'site:fr.khanacademy.org OR site:lumni.fr OR site:planet-vie.ens.fr',
  YT_SUFFIX: 'svt 3eme brevet',
  SUMMER_TOPIC: 'SVT',
  SUBJECT: { id:'svt-3', name:'Sciences de la Vie et de la Terre', short:'SVT', level:'Fin de 3ème (brevet)', mark:'🌿', tagline:'Évaluation brevet' },
  DOMAINS: {
    genetique:   { id:'genetique',   name:'Génétique & ADN',               short:'Génétique',   coef:4, color:'#be185d', icon:'⛃', search:'genetique adn chromosomes genes 3eme' },
    cellule:     { id:'cellule',     name:'Cellule, division (mitose)',    short:'Cellule',    coef:3, color:'#7c3aed', icon:'◉', search:'cellule mitose division 3eme' },
    reproduction:{ id:'reproduction',name:'Reproduction approfondie',      short:'Reproduction',coef:3, color:'#db2777', icon:'♂♀',search:'reproduction meiose fecondation 3eme' },
    immunite:    { id:'immunite',    name:'Système immunitaire',           short:'Immunité',   coef:4, color:'#a01b34', icon:'✚', search:'systeme immunitaire defenses 3eme' },
    nerveux:     { id:'nerveux',     name:'Système nerveux',               short:'Nerveux',    coef:2, color:'#0891b2', icon:'⚡', search:'systeme nerveux neurones 3eme' },
    evolution:   { id:'evolution',   name:'Évolution du vivant',           short:'Évolution',  coef:3, color:'#166a39', icon:'♾', search:'evolution selection naturelle 3eme' },
    risques:     { id:'risques',     name:'Risques naturels (séismes, volcans)', short:'Risques',coef:3, color:'#7c2d12', icon:'⚠', search:'risques seismes volcans 3eme' },
    climat:      { id:'climat',      name:'Climat & biodiversité',         short:'Climat',     coef:3, color:'#059669', icon:'☘', search:'changement climatique biodiversite 3eme' },
    geologie:    { id:'geologie',    name:'Géologie (plaques, roches)',    short:'Géologie',   coef:2, color:'#92400e', icon:'⛰', search:'tectonique plaques roches 3eme' },
  },
  RESOURCES: [
    { label:'Lumni — SVT 3ème',        author:'France TV éducation',   url:'https://www.lumni.fr/college/troisieme/svt' },
    { label:'Khan Academy — Biologie', author:'Cours + exos',          url:'https://fr.khanacademy.org/science/ms-biology' },
    { label:'Planet-Vie',              author:'ENS — ressources SVT',  url:'https://planet-vie.ens.fr/' },
    { label:'Annales brevet SVT',      author:'Sujets + corrigés',     url:'https://www.brevetdescolleges.fr/annales/' },
  ],
  POOL: {
    genetique: [
      { key:'gen-1', q:'L\'information génétique est contenue dans :', options:['Le cytoplasme','L\'ADN du noyau','Les mitochondries uniquement','La membrane'], correct:1, hint:'ADN = molécule support de l\'information génétique, dans le noyau de chaque cellule.' },
      { key:'gen-2', q:'Un chromosome :', options:['Est fait d\'ADN condensé','Est dans le cytoplasme','N\'existe pas','Est un virus'], correct:0, hint:'Chromosomes = ADN très condensé, visible pendant la division cellulaire.' },
      { key:'gen-3', q:'Chez l\'humain, combien de chromosomes dans une cellule (sauf gamètes) ?', options:['23','46 (23 paires)','92','2'], correct:1, hint:'46 chromosomes = 23 paires. 1 paire = 1 chromosome du père + 1 de la mère.' },
      { key:'gen-4', q:'Un gène :', options:['Est une cellule','Est une portion d\'ADN portant l\'info d\'un caractère','Est un muscle','Est un aliment'], correct:1, hint:'Gène = séquence d\'ADN → protéine → caractère.' },
      { key:'gen-5', q:'Les allèles sont :', options:['Les différentes versions d\'un même gène','Des chromosomes','Des cellules','Des virus'], correct:0, hint:'Allèle = variante d\'un gène (ex. groupe sanguin A/B/O).' },
      { key:'gen-6', q:'Les jumeaux vrais (monozygotes) ont :', options:['Tous le même ADN','Des ADN différents','N\'existent pas','Sont seulement frères/sœurs'], correct:0, hint:'Issus du même zygote (un ovule fécondé qui s\'est divisé) → même ADN.' },
      { key:'gen-7', q:<>Les jumeaux faux-frères (dizygotes) ont :</>, options:['Le même ADN','Des ADN différents (comme 2 frères normaux)','Pas d\'ADN','Le même prénom'], correct:1, hint:'Dizygotes : 2 œufs différents fécondés → génome différent.' },
      { key:'gen-8', q:<>L\'ADN est présent :</>, options:['Seulement dans le sang','Dans toutes les cellules avec un noyau','Dans le cerveau uniquement','Dans les os seulement'], correct:1, hint:'Chaque cellule nucléée contient la même copie d\'ADN.' }
    ],
    cellule: [
      { key:'cel-1', q:'La mitose produit :', options:['2 cellules filles identiques à la cellule mère','4 gamètes','Une cellule plus grande','Rien'], correct:0, hint:'Mitose : cellule à 2n chromosomes → 2 cellules identiques à 2n chromosomes.' },
      { key:'cel-2', q:'La méiose produit :', options:['Des cellules somatiques','Des gamètes (à n chromosomes)','Rien','Des virus'], correct:1, hint:'Méiose : cellule 2n → 4 gamètes à n chromosomes (moitié moins).' },
      { key:'cel-3', q:'Avant la mitose, l\'ADN :', options:['Disparaît','Se duplique (chaque chromosome devient à 2 chromatides)','Se détruit','Diminue de moitié'], correct:1, hint:'Réplication de l\'ADN : phase S du cycle cellulaire.' },
      { key:'cel-4', q:'La mitose est importante pour :', options:['Se reproduire sexuellement','Grandir et réparer les tissus','Mourir','Vieillir uniquement'], correct:1, hint:'Mitose = croissance, cicatrisation, renouvellement des tissus.' },
      { key:'cel-5', q:<>Après une mitose, chaque cellule-fille contient :</>, options:['La moitié des chromosomes','Le même nombre de chromosomes que la mère','Le double','Aucun'], correct:1, hint:'Mitose : 46 → 46+46 (deux cellules identiques).' }
    ],
    reproduction: [
      { key:'rep-1', q:'Les cellules reproductrices humaines sont :', options:['Les globules','Les spermatozoïdes et les ovules','Les neurones','Les hématies'], correct:1, hint:'Gamètes ♂ (sperm) et ♀ (ovules). Chacun à n chromosomes (23).' },
      { key:'rep-2', q:'La fécondation est :', options:['La naissance','L\'union d\'un spermatozoïde et d\'un ovule → cellule-œuf à 2n chromosomes','La puberté','L\'ovulation'], correct:1, hint:'Fécondation → zygote qui va se multiplier par mitose pour former l\'embryon.' },
      { key:'rep-3', q:'Le sexe biologique humain est déterminé par :', options:['La paire XX (♀) ou XY (♂)','L\'environnement','La nourriture','Les autosomes'], correct:0, hint:'XX = femelle, XY = mâle. Le chromosome Y (du père) détermine le sexe mâle.' },
      { key:'rep-4', q:'Les hormones sexuelles mâles/femelles sont :', options:['Insuline et glucagon','Testostérone (♂) et œstrogènes/progestérone (♀)','Adrénaline','Thyroxine'], correct:1, hint:'Testostérone produite par les testicules ; œstrogènes/progestérone par les ovaires.' },
      { key:'rep-5', q:<>Les gamètes humains contiennent :</>, options:['46 chromosomes','23 chromosomes','92 chromosomes','Aucun'], correct:1, hint:'Gamètes = moitié du nombre de chromosomes. Fusion ovule+spermatozoïde → 46.' }
    ],
    immunite: [
      { key:'imm-1', q:'Les globules blancs sont :', options:['Des cellules immunitaires','Des globules rouges blanchis','Des neurones','Des plaquettes'], correct:0, hint:'Leucocytes : défenseurs de l\'organisme (lymphocytes, phagocytes…).' },
      { key:'imm-2', q:'La phagocytose est :', options:['Digestion d\'un microbe par un globule blanc','Reproduction des bactéries','Un virus','Rien'], correct:0, hint:'Phagocyte englobe puis digère l\'agent pathogène.' },
      { key:'imm-3', q:'Les anticorps sont produits par :', options:['Les lymphocytes B','Le foie uniquement','Les bactéries','Les plantes'], correct:0, hint:'Lymphocytes B → anticorps spécifiques d\'un antigène.' },
      { key:'imm-4', q:'Un vaccin apporte :', options:['Un agent pathogène tué ou inactivé ou fragments','Des médicaments anti-bactériens','Un remède','Des vitamines'], correct:0, hint:'Vaccin : le système immunitaire apprend à reconnaître sans subir la maladie.' },
      { key:'imm-5', q:'Le VIH attaque :', options:['Les os','Les lymphocytes T → immunodépression (SIDA)','Les poumons uniquement','Les yeux'], correct:1, hint:'VIH détruit les lymphocytes T4 → le système immunitaire s\'affaiblit → SIDA.' },
      { key:'imm-6', q:'Les antibiotiques agissent contre :', options:['Les virus','Les bactéries uniquement','Les champignons','Tous les microbes'], correct:1, hint:'Antibiotiques ≠ antiviraux. Contre les bactéries uniquement.' },
      { key:'imm-7', q:<>Un vaccin ne fait pas effet immédiat : il faut :</>, options:['Quelques minutes','Quelques jours (temps d\'activer la mémoire immunitaire)','Un an','10 ans'], correct:1, hint:'Les lymphocytes mémoire se forment en quelques jours/semaines.' }
    ],
    nerveux: [
      { key:'ner-1', q:'Le neurone est :', options:['Une cellule du système nerveux','Un muscle','Un os','Un virus'], correct:0, hint:'Neurone : cellule qui transmet des signaux électriques (nerveux).' },
      { key:'ner-2', q:'Le cerveau reçoit les informations via :', options:['Les nerfs et la moelle épinière','La peau uniquement','Les os','Le sang uniquement'], correct:0, hint:'Récepteurs sensoriels → nerfs → moelle épinière → cerveau.' },
      { key:'ner-3', q:'Un réflexe est :', options:['Volontaire','Une réponse automatique et rapide (moelle épinière)','Pas possible','Long à déclencher'], correct:1, hint:'Réflexe : pas passé par le cerveau, réponse immédiate. Ex. retirer main du feu.' },
      { key:'ner-4', q:<>Le réflexe « on retire la main du feu » passe par :</>, options:['Le cerveau uniquement','La moelle épinière (circuit réflexe court)','L\'estomac','La peau seule'], correct:1, hint:'Réflexe médullaire : plus court et plus rapide que via le cerveau.' }
    ],
    evolution: [
      { key:'evo-1', q:'La théorie de l\'évolution (Darwin) explique :', options:['La diversité des espèces par sélection naturelle','Que les espèces ne changent pas','La disparition du Soleil','Les volcans'], correct:0, hint:'Variations + sélection naturelle → adaptation des espèces au fil des générations.' },
      { key:'evo-2', q:'Les fossiles :', options:['Sont des inventions','Sont des preuves de l\'évolution (espèces disparues)','N\'existent pas','Sont des jouets'], correct:1, hint:'Fossiles montrent que les espèces ont changé au cours des temps géologiques.' },
      { key:'evo-3', q:'Deux espèces proches ont :', options:['Un ancêtre commun récent','Rien à voir','Obligatoirement la même taille','Le même nom'], correct:0, hint:'Proximité évolutive → ancêtre commun plus proche. Arbre phylogénétique.' },
      { key:'evo-4', q:'L\'être humain et le chimpanzé partagent :', options:['~30 % d\'ADN','~98-99 % d\'ADN','0 %','100 %'], correct:1, hint:'Humain-chimpanzé : ~98-99 % d\'ADN identique. Notre plus proche cousin vivant.' },
      { key:'evo-5', q:<>L\'évolution agit :</>, options:['En une génération','Sur des millions d\'années par sélection naturelle','Par la volonté des animaux','Par magie'], correct:1, hint:'Temps géologique : millions-milliards d\'années.' }
    ],
    risques: [
      { key:'ris-1', q:'Un risque = :', options:['Aléa × vulnérabilité','Aléa seul','Vulnérabilité seule','La météo'], correct:0, hint:'Risque = probabilité × conséquences. Agir sur l\'un ou l\'autre pour réduire le risque.' },
      { key:'ris-2', q:'Un séisme dégage de l\'énergie sous forme :', options:['D\'ondes sismiques','De chaleur uniquement','De vent','De pluie'], correct:0, hint:'Ondes P (compression, rapides), S (cisaillement), L (surface).' },
      { key:'ris-3', q:'Une éruption explosive est dangereuse à cause :', options:['De la lave fluide uniquement','Des nuées ardentes, bombes, cendres','De la pluie','De la neige'], correct:1, hint:'Nuées ardentes à > 500 °C, 100 km/h. Volcans type Vésuve, Montagne Pelée.' },
      { key:'ris-4', q:'Pour réduire le risque sismique :', options:['Rien à faire','Normes parasismiques, plans d\'évacuation, surveillance','Interdire toute construction','Rester dehors tout le temps'], correct:1, hint:'Construire parasismique + préparation aux alertes + éducation.' },
      { key:'ris-5', q:<>En cas de séisme, il faut :</>, options:['Sortir vite','Se mettre sous une table solide ou un linteau, loin des vitres','Prendre un ascenseur','Courir dehors'], correct:1, hint:'Consignes internationales : se protéger la tête, rester à l\'abri.' }
    ],
    climat: [
      { key:'cli-1', q:'Les principaux gaz à effet de serre :', options:['O₂, N₂','CO₂, CH₄, H₂O (vapeur), N₂O','Argon','Hélium'], correct:1, hint:'GES : dioxyde de carbone, méthane, vapeur d\'eau, protoxyde d\'azote.' },
      { key:'cli-2', q:'Les activités humaines qui accroissent le CO₂ :', options:['Photosynthèse','Combustion des énergies fossiles, déforestation, élevage','Respiration des animaux','Marées'], correct:1, hint:'Pétrole, charbon, gaz → CO₂. Élevage → CH₄. Déforestation → moins de puits de carbone.' },
      { key:'cli-3', q:'Conséquences du réchauffement climatique :', options:['Rien','Fonte des glaces, montée des mers, événements extrêmes, perte biodiversité','Augmentation du soleil','Plus d\'oxygène'], correct:1, hint:'Impacts multiples : écosystèmes, littoraux, agriculture, santé.' },
      { key:'cli-4', q:'La biodiversité diminue actuellement à cause :', options:['D\'un cycle naturel lent','Des activités humaines (habitat détruit, pollution, climat, espèces invasives)','D\'aucune cause','Des volcans'], correct:1, hint:'6ᵉ extinction de masse en cours, très rapide, causée par l\'humain.' },
      { key:'cli-5', q:<>Si les glaciers fondent :</>, options:['Le niveau des mers baisse','Le niveau des mers monte','Rien ne change','Il fait plus froid'], correct:1, hint:'Eau libérée + dilatation thermique → montée des océans.' }
    ],
    geologie: [
      { key:'geo-1', q:'Les plaques tectoniques se déplacent :', options:['De quelques km/h','De quelques cm/an','Pas du tout','De km/seconde'], correct:1, hint:'Quelques cm/an, comme la pousse des ongles.' },
      { key:'geo-2', q:'Aux zones de subduction, une plaque océanique :', options:['Remonte','Plonge sous une autre plaque (souvent continentale)','Disparait','Se dilate'], correct:1, hint:'Subduction : plaque océanique (dense) plonge dans le manteau → séismes, volcans.' },
      { key:'geo-3', q:'Les trois grands types de roches :', options:['Roches A, B, C','Magmatiques, sédimentaires, métamorphiques','Toutes uniques','Uniquement sable'], correct:1, hint:'Magmatiques (refroidissement magma), sédimentaires (dépôts), métamorphiques (transformation sous pression/chaleur).' },
      { key:'geo-4', q:<>La houille (charbon) est une roche :</>, options:['Magmatique','Sédimentaire (d\'origine végétale)','Métamorphique','Artificielle'], correct:1, hint:'Formée à partir de végétaux fossilisés il y a des millions d\'années.' }
    ],
  },
  PICK: {
    genetique: 4, cellule: 4, reproduction: 4, immunite: 4, nerveux: 2,
    evolution: 3, risques: 3, climat: 3, geologie: 3,
  },
  PLANS: {
    genetique: {
      'non-acquis': ['ADN → chromosomes → gènes → protéines', '46 chromosomes humains (23 paires)', 'Allèles : versions d\'un gène'],
      'fragile':    ['Exercice : lire un caryotype']
    },
    cellule: {
      'non-acquis': ['Mitose : 1 cellule → 2 cellules identiques', 'Méiose : 1 cellule → 4 gamètes à n chromosomes', 'Réplication avant division'],
      'fragile':    ['Étapes détaillées du cycle cellulaire']
    },
    reproduction: {
      'non-acquis': ['Fécondation = ovule (n) + spermatozoïde (n) → zygote (2n)', 'Chromosomes sexuels XX/XY', 'Hormones : testostérone, œstrogènes, progestérone'],
      'fragile':    ['Développement embryonnaire']
    },
    immunite: {
      'non-acquis': ['PRIORITÉ BREVET : phagocytose + anticorps (lymphocytes B)', 'Vaccination = mémoire immunitaire sans maladie', 'VIH attaque les lymphocytes T → SIDA'],
      'fragile':    ['Antibiotiques = contre bactéries, pas contre virus']
    },
    nerveux: {
      'non-acquis': ['Neurone = cellule spécialisée du système nerveux', 'Cerveau + moelle épinière + nerfs', 'Réflexe vs action volontaire'],
      'fragile':    ['Sécrétions neuro-hormonales']
    },
    evolution: {
      'non-acquis': ['Sélection naturelle (Darwin)', 'Fossiles = témoins de l\'évolution', 'Ancêtre commun et parenté'],
      'fragile':    ['Arbre phylogénétique : savoir le lire']
    },
    risques: {
      'non-acquis': ['Aléa × vulnérabilité = risque', 'Séismes : ondes, foyer, épicentre', 'Volcans : effusif vs explosif'],
      'fragile':    ['Mesures de prévention concrètes']
    },
    climat: {
      'non-acquis': ['GES principaux : CO₂, CH₄, vapeur d\'eau, N₂O', 'Causes humaines : fossiles, déforestation, élevage', 'Conséquences : fonte, biodiversité, santé'],
      'fragile':    ['Solutions individuelles et collectives']
    },
    geologie: {
      'non-acquis': ['Plaques tectoniques : déplacement de quelques cm/an', 'Dorsales (divergence) vs subduction (convergence)', '3 types de roches : magmatiques, sédimentaires, métamorphiques'],
      'fragile':    ['Reconnaître un type de roche']
    },
  },
};
