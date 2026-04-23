// Source éditable — quiz maths-5. Régénéré automatiquement dans index.html via build.sh.
window.ALL_QUIZZES['maths-5'] = {
  SEARCH_SITES: 'site:maths-et-tiques.fr OR site:fr.khanacademy.org OR site:lumni.fr',
  YT_SUFFIX: 'Yvan Monka',
  SUMMER_TOPIC: 'maths',
  SUBJECT: { id:'maths-5', name:'Mathématiques', short:'Maths', level:'Fin de 5ème', mark:'∑', tagline:'Évaluation diagnostique' },
  DOMAINS: {
    relatifs:   { id:'relatifs',   name:'Nombres relatifs (intro)',          short:'Relatifs',   coef:3, color:'#0f5e6b', icon:'±',  search:'nombres relatifs 5eme' },
    fractions:  { id:'fractions',  name:'Fractions (opérations)',            short:'Fractions',  coef:4, color:'#0d7a6f', icon:'⅔',  search:'fractions 5eme' },
    proportion: { id:'proportion', name:'Proportionnalité & pourcentages',   short:'Proportion', coef:3, color:'#b97a0e', icon:'%',  search:'proportionnalite pourcentage 5eme' },
    litteral:   { id:'litteral',   name:'Calcul littéral (intro)',           short:'Littéral',   coef:3, color:'#b8323d', icon:'k', search:'calcul litteral 5eme' },
    triangles:  { id:'triangles',  name:'Triangles (angles, inégalité)',     short:'Triangles',  coef:3, color:'#a01b34', icon:'△',  search:'triangles inegalite triangulaire 5eme' },
    parallelog: { id:'parallelog', name:'Parallélogrammes',                  short:'Parallélog.',coef:2, color:'#7c3aed', icon:'▱', search:'parallelogramme 5eme' },
    aires:      { id:'aires',      name:'Aires & périmètres (disque)',       short:'Aires',      coef:2, color:'#c2410c', icon:'○',  search:'aire perimetre disque 5eme' },
    volumes:    { id:'volumes',    name:'Volumes (prismes, cylindres)',      short:'Volumes',    coef:2, color:'#166a39', icon:'V',  search:'volume prisme cylindre 5eme' },
    symetrie:   { id:'symetrie',   name:'Symétrie centrale',                 short:'Symétrie',   coef:2, color:'#1e7a8a', icon:'⊙',  search:'symetrie centrale 5eme' },
    stats:      { id:'stats',      name:'Statistiques & diagrammes',         short:'Stats',      coef:2, color:'#c4307a', icon:'▥',  search:'statistiques moyenne 5eme' },
  },
  RESOURCES: [
    { label:'Maths et Tiques 5ème',  author:'Yvan Monka (gratuit)', url:'https://www.maths-et-tiques.fr/index.php/cours-en-ligne/cours-cinquieme' },
    { label:'Khan Academy 5ème',     author:'Cours + exos',          url:'https://fr.khanacademy.org/math/cycle-4-5eme-v2' },
    { label:'Lumni — Maths 5ème',    author:'France TV éducation',   url:'https://www.lumni.fr/college/cinquieme/mathematiques' },
    { label:'Sésamath',              author:'Manuel + exos',         url:'https://manuel.sesamath.net/' },
  ],
  POOL: {
    relatifs: [
      { key:'rel-1', q:<>Calcule : <M>(+5) + (−3) =</M></>, options:['+8','−8','+2','−2'], correct:2, hint:'+5 − 3 = +2' },
      { key:'rel-2', q:<>Calcule : <M>(−4) + (−7) =</M></>, options:['−11','−3','+11','+3'], correct:0, hint:'Deux négatifs additionnés → on garde le signe − et on additionne les valeurs : −11.' },
      { key:'rel-3', q:<>Quelle est la température si on baisse de 8 °C à partir de +3 °C ?</>, options:['+11 °C','−5 °C','−11 °C','+5 °C'], correct:1, hint:'+3 − 8 = −5 °C' },
      { key:'rel-4', q:<>L\'opposé de <M>−7</M> est :</>, options:['−7','+7','0','1/7'], correct:1, hint:'Opposé = même nombre de signe contraire : +7.' },
      { key:'rel-5', q:<>Calcule : <M>(−12) + (+5) =</M></>, options:['−7','+7','−17','+17'], correct:0, hint:'Signes opposés → soustraire les valeurs, garder le signe du plus grand.' },
      { key:'rel-6', q:<>Calcule : <M>(−3) − (−5) =</M></>, options:['+2','−2','−8','+8'], correct:0, hint:'Soustraire un négatif = additionner le positif : −3 + 5 = 2.' }
    ],
    fractions: [
      { key:'fra-1', q:<>Calcule : <F n="1" d="2"/> + <F n="1" d="3"/> =</>, options:[<F n="2" d="5"/>, <F n="5" d="6"/>, <F n="1" d="5"/>, <F n="2" d="6"/>], correct:1, hint:'Dénominateur commun 6 : 3/6 + 2/6 = 5/6.' },
      { key:'fra-2', q:<>Calcule (en simplifiant) : <F n="2" d="5"/> × <F n="3" d="4"/> =</>, options:[<F n="5" d="9"/>, <F n="3" d="10"/>, <F n="6" d="9"/>, <F n="3" d="20"/>], correct:1, hint:'(2×3)/(5×4) = 6/20 = 3/10 (simplification par 2).' },
      { key:'fra-3', q:<>Simplifie à l'irréductible : <F n="12" d="18"/> =</>, options:[<F n="3" d="2"/>, <F n="2" d="3"/>, <F n="5" d="6"/>, <F n="3" d="4"/>], correct:1, hint:'PGCD(12,18)=6 → 12/18 = 2/3 (irréductible).' },
      { key:'fra-4', q:<>Calcule : <F n="5" d="6"/> − <F n="1" d="3"/> =</>, options:[<F n="4" d="3"/>, <F n="1" d="2"/>, <F n="4" d="6"/>, <F n="1" d="3"/>], correct:1, hint:'1/3 = 2/6. 5/6 − 2/6 = 3/6 = 1/2.' },
      { key:'fra-5', q:<>Calcule : <F n="1" d="4"/> + <F n="2" d="3"/> =</>, options:[<F n="3" d="7"/>, <F n="11" d="12"/>, <F n="1" d="12"/>, <F n="2" d="7"/>], correct:1, hint:'Dénominateur commun 12 : 3/12 + 8/12 = 11/12.' },
      { key:'fra-6', q:<>Calcule : <F n="3" d="5"/> × <F n="5" d="6"/> =</>, options:[<F n="1" d="2"/>, <F n="8" d="11"/>, <F n="5" d="8"/>, <F n="15" d="30"/>], correct:0, hint:'(3×5)/(5×6) = 15/30 = 1/2.' }
    ],
    proportion: [
      { key:'pro-1', q:'15 % de 200 :', options:['30','15','150','3000'], correct:0, hint:'15/100 × 200 = 30' },
      { key:'pro-2', q:'Un article à 60 € subit une réduction de 25 %. Prix final :', options:['45 €','50 €','35 €','75 €'], correct:0, hint:'60 × 0,75 = 45 €' },
      { key:'pro-3', q:'Sur une carte à l\'échelle 1/20 000, 5 cm représentent :', options:['100 m','1 km','10 km','500 m'], correct:1, hint:'5 × 20 000 = 100 000 cm = 1 km.' },
      { key:'pro-4', q:'Un train fait 240 km en 2 h. Sa vitesse moyenne :', options:['12 km/h','120 km/h','480 km/h','24 km/h'], correct:1, hint:'240 / 2 = 120 km/h.' },
      { key:'pro-5', q:'Un tee-shirt coûte 20 €, il est soldé à −40 %. Prix final :', options:['8 €','12 €','16 €','18 €'], correct:1, hint:'20 × 0,6 = 12 €.' },
      { key:'pro-6', q:'7 kg de pommes coûtent 14 €. Prix au kg :', options:['2 €','3 €','7 €','0,5 €'], correct:0, hint:'14 / 7 = 2 €/kg.' }
    ],
    litteral: [
      { key:'lit-1', q:<>Pour <M>x = 4</M>, que vaut <M>A = 3x + 5</M> ?</>, options:['12','17','15','19'], correct:1, hint:'A = 3×4 + 5 = 12 + 5 = 17.' },
      { key:'lit-2', q:<>Réduis : <M>2x + 5 + 3x − 2 =</M></>, options:['5x + 3','5x + 7','6x + 3','8x'], correct:0, hint:'(2x+3x) + (5−2) = 5x + 3.' },
      { key:'lit-3', q:<>Développe : <M>3(x + 4) =</M></>, options:[<>3x + 4</>, <>3x + 12</>, <>x + 12</>, <>3x × 4</>], correct:1, hint:'3×x + 3×4 = 3x + 12.' },
      { key:'lit-4', q:<>Le nombre 5 est-il solution de <M>2x + 1 = 11</M> ?</>, options:['Oui','Non','On ne peut pas savoir','Seulement si x est entier'], correct:0, hint:'2×5 + 1 = 11 ✓ → oui, c\'est la solution.' },
      { key:'lit-5', q:<>Pour <M>a = 3</M>, calcule <M>2a + 5</M> :</>, options:['8','11','15','23'], correct:1, hint:'2×3 + 5 = 11.' },
      { key:'lit-6', q:<>Développe : <M>2(x − 3) =</M></>, options:['2x − 3','2x − 6','x − 6','2x + 6'], correct:1, hint:'Distributivité : 2×x + 2×(−3) = 2x − 6.' }
    ],
    triangles: [
      { key:'tri-1', q:'La somme des angles d\'un triangle vaut :', options:['90°','180°','360°','Varie selon le triangle'], correct:1, hint:'Dans TOUT triangle, somme des 3 angles = 180°.' },
      { key:'tri-2', q:'Un triangle a pour angles 70° et 80°. Le 3ᵉ angle vaut :', options:['30°','50°','150°','Impossible à calculer'], correct:0, hint:'180 − (70 + 80) = 30°.' },
      { key:'tri-3', q:'Peut-on construire un triangle avec les côtés 3 cm, 4 cm et 10 cm ?', options:['Oui','Non (inégalité triangulaire : 3+4 < 10)','Oui, mais seulement rectangle','Parfois'], correct:1, hint:'Inégalité triangulaire : le plus grand côté doit être < somme des deux autres. Ici 3+4=7 < 10 → IMPOSSIBLE.' },
      { key:'tri-4', q:'Un triangle isocèle a :', options:['3 côtés égaux','2 côtés égaux ET 2 angles égaux','1 angle droit','Aucun côté égal'], correct:1, hint:'Isocèle : 2 côtés égaux (et les 2 angles à la base sont égaux).' },
      { key:'tri-5', q:'Dans un triangle équilatéral, chaque angle mesure :', options:['30°','45°','60°','90°'], correct:2, hint:'3 angles égaux de somme 180° → 60° chacun.' },
      { key:'tri-6', q:'Un triangle rectangle isocèle a pour angles :', options:['90°-45°-45°','90°-60°-30°','60°-60°-60°','90°-80°-10°'], correct:0, hint:'Rectangle (90°) + 2 angles égaux → 45° + 45°.' }
    ],
    parallelog: [
      { key:'par-1', q:'Dans un parallélogramme, les diagonales :', options:['Sont perpendiculaires','Se coupent en leur milieu','Sont égales','Sont parallèles'], correct:1, hint:'Propriété clé : les diagonales se coupent en leur milieu.' },
      { key:'par-2', q:'Un parallélogramme a :', options:['1 paire de côtés parallèles','2 paires de côtés parallèles','Des angles droits obligatoirement','4 côtés égaux obligatoirement'], correct:1, hint:'Définition : 2 paires de côtés parallèles (et égaux deux à deux).' },
      { key:'par-3', q:'Un losange est un parallélogramme qui a :', options:['4 angles droits','4 côtés égaux','1 angle droit','Aucune propriété particulière'], correct:1, hint:'Losange = parallélogramme à 4 côtés égaux.' },
      { key:'par-4', q:'Un rectangle est un parallélogramme qui a :', options:['4 angles droits','4 côtés égaux','Des diagonales perpendiculaires','1 seul angle droit'], correct:0, hint:'Rectangle = parallélogramme à 4 angles droits.' },
      { key:'par-5', q:'Un losange dont les diagonales sont égales est :', options:['Un carré','Un rectangle','Un trapèze','Rien de particulier'], correct:0, hint:'Losange (côtés égaux) + diagonales égales = carré.' },
      { key:'par-6', q:'Les côtés opposés d\'un parallélogramme sont :', options:['Égaux','Perpendiculaires','De longueurs différentes','Inclinés à 45°'], correct:0, hint:'Propriété fondamentale : côtés opposés parallèles ET égaux.' }
    ],
    aires: [
      { key:'air-1', q:<>Aire d\'un disque de rayon 4 cm (π ≈ 3,14) :</>, options:['~12,56 cm²','~50,24 cm²','~25,12 cm²','~8 cm²'], correct:1, hint:'A = π × r² = 3,14 × 16 ≈ 50,24 cm².' },
      { key:'air-2', q:<>Périmètre d\'un cercle de rayon 5 cm (π ≈ 3,14) :</>, options:['~15,7 cm','~31,4 cm','~78,5 cm','~10 cm'], correct:1, hint:'P = 2π × r = 2 × 3,14 × 5 ≈ 31,4 cm.' },
      { key:'air-3', q:'L\'aire d\'un triangle de base 8 cm et hauteur 5 cm :', options:['40 cm²','20 cm²','13 cm²','26 cm²'], correct:1, hint:'A_triangle = (base × hauteur) / 2 = 40/2 = 20 cm².' },
      { key:'air-4', q:'L\'aire d\'un parallélogramme est :', options:['base + hauteur','base × hauteur','(base × hauteur)/2','4 × côté'], correct:1, hint:'A = base × hauteur (perpendiculaire à la base).' },
      { key:'air-5', q:<>Périmètre d\'un carré de côté 7 cm :</>, options:['14 cm','21 cm','28 cm','49 cm'], correct:2, hint:'P = 4 × 7 = 28 cm.' },
      { key:'air-6', q:<>Aire d\'un rectangle 6 cm × 9 cm :</>, options:['15 cm²','30 cm²','54 cm²','72 cm²'], correct:2, hint:'A = L × l = 6 × 9 = 54 cm².' }
    ],
    volumes: [
      { key:'vol-1', q:'Le volume d\'un prisme droit se calcule par :', options:['Aire de base × hauteur','Périmètre × hauteur','(B × h) / 3','Aire × aire'], correct:0, hint:'V_prisme = B × h (B = aire de la base).' },
      { key:'vol-2', q:'Le volume d\'un cylindre de rayon r et hauteur h :', options:['2π r h','π r² h','π r² + h','r × h'], correct:1, hint:'V_cylindre = π × r² × h.' },
      { key:'vol-3', q:'Convertis : 1 L =', options:['1 cm³','100 cm³','1 dm³','1 m³'], correct:2, hint:'1 L = 1 dm³ = 1000 cm³.' },
      { key:'vol-4', q:'Volume d\'un cube d\'arête 5 cm :', options:['25 cm³','125 cm³','15 cm³','100 cm³'], correct:1, hint:'V = a³ = 5³ = 125 cm³.' },
      { key:'vol-5', q:'Volume d\'un pavé droit 4×5×6 cm :', options:['15 cm³','60 cm³','120 cm³','240 cm³'], correct:2, hint:'V = L×l×h = 4×5×6 = 120 cm³.' },
      { key:'vol-6', q:<>2,5 L =</>, options:['25 mL','250 mL','2 500 mL','25 000 mL'], correct:2, hint:'1 L = 1000 mL → 2,5 L = 2500 mL.' }
    ],
    symetrie: [
      { key:'sym-1', q:'Dans une symétrie centrale de centre O, le symétrique d\'un point A est :', options:['Sur la droite (OA)','À la même distance de O que A, mais de l\'autre côté','Confondu avec A','Au-dessus de A'], correct:1, hint:'Symétrie centrale : O est le milieu de [AA\'].' },
      { key:'sym-2', q:'Le symétrique d\'un segment par symétrie centrale est :', options:['Plus court','Un segment de même longueur','Un cercle','Un triangle'], correct:1, hint:'Une symétrie conserve les longueurs et les angles.' },
      { key:'sym-3', q:'Le centre de symétrie d\'un parallélogramme est :', options:['Un sommet','Le point d\'intersection des diagonales','Le milieu d\'un côté','Il n\'y en a pas'], correct:1, hint:'Les diagonales se coupent en leur milieu = centre de symétrie.' },
      { key:'sym-4', q:'Par symétrie centrale, une droite a pour image :', options:['Un point','Une droite parallèle','Un cercle','Un angle'], correct:1, hint:'Image d\'une droite par symétrie centrale = droite parallèle.' },
      { key:'sym-5', q:'Le centre d\'une symétrie est noté :', options:['A','O (le centre)','B','C'], correct:1, hint:'On nomme souvent le centre O (\'origine\').' }
    ],
    stats: [
      { key:'sta-1', q:'La moyenne de 5, 8, 10, 13 est :', options:['9','10','36','8'], correct:0, hint:'(5+8+10+13)/4 = 36/4 = 9.' },
      { key:'sta-2', q:'Dans un diagramme en barres, la hauteur d\'une barre indique :', options:['La fréquence ou l\'effectif d\'une valeur','L\'âge','La couleur','Rien de précis'], correct:0, hint:'Diagramme en barres = visualisation des effectifs.' },
      { key:'sta-3', q:'La fréquence d\'une valeur est :', options:['L\'effectif','Effectif / Effectif total','Max − Min','La moyenne'], correct:1, hint:'Fréquence = effectif de la valeur / effectif total. Souvent exprimée en %.' },
      { key:'sta-4', q:'La moyenne de 10, 12, 14, 16, 18 est :', options:['12','14','16','70'], correct:1, hint:'(10+12+14+16+18)/5 = 70/5 = 14.' },
      { key:'sta-5', q:'L\'étendue de 4, 7, 9, 12, 15 est :', options:['4','11','15','12'], correct:1, hint:'Max − Min = 15 − 4 = 11.' }
    ],
  },
  PICK: {
    relatifs: 3, fractions: 4, proportion: 3, litteral: 3, triangles: 3,
    parallelog: 3, aires: 3, volumes: 3, symetrie: 3, stats: 2,
  },
  PLANS: {
    relatifs: {
      'non-acquis': ['Règle des signes pour l\'addition : distinguer +/+, −/−, +/−', 'Utiliser la droite graduée pour visualiser', 'Opposé d\'un nombre : même valeur, signe contraire'],
      'fragile':    ['Calculs avec suite d\'additions/soustractions']
    },
    fractions: {
      'non-acquis': ['Dénominateur commun pour l\'addition (multiples)', 'Multiplication : numérateurs × numérateurs, dénominateurs × dénominateurs', 'Simplification avec un diviseur commun'],
      'fragile':    ['Enchaîner simplification et calcul']
    },
    proportion: {
      'non-acquis': ['Règle de trois (produit en croix)', 'Pourcentages : calcul direct (x % de N)', 'Vitesse : v = d/t'],
      'fragile':    ['Augmentation/diminution en pourcentage']
    },
    litteral: {
      'non-acquis': ['Calculer la valeur d\'une expression pour une valeur donnée', 'Réduire une somme avec lettres', 'Distributivité : k(a+b) = ka + kb'],
      'fragile':    ['Tester si un nombre est solution d\'une équation']
    },
    triangles: {
      'non-acquis': ['Somme des angles = 180°', 'Inégalité triangulaire : plus grand côté < somme des 2 autres', 'Types : isocèle, équilatéral, rectangle, isocèle rectangle'],
      'fragile':    ['Construction de triangles avec contraintes']
    },
    parallelog: {
      'non-acquis': ['2 paires de côtés parallèles = définition', 'Diagonales se coupent en leur milieu', 'Cas particuliers : rectangle, losange, carré'],
      'fragile':    ['Démontrer qu\'un quadrilatère est un parallélogramme']
    },
    aires: {
      'non-acquis': ['Aire du disque : π r², périmètre : 2πr', 'Aire du triangle : base × hauteur / 2', 'Aire du parallélogramme : base × hauteur'],
      'fragile':    ['Figures composées : décomposer en formes simples']
    },
    volumes: {
      'non-acquis': ['V prisme droit = B × h', 'V cylindre = π r² h', 'Conversions : 1 L = 1 dm³ = 1000 cm³'],
      'fragile':    ['Problèmes concrets de contenance']
    },
    symetrie: {
      'non-acquis': ['Symétrie centrale : O milieu de [AA\']', 'Conservation : longueurs, angles, aires', 'Centres de symétrie des figures usuelles'],
      'fragile':    ['Distinguer symétrie centrale et axiale']
    },
    stats: {
      'non-acquis': ['Moyenne = somme / nombre de valeurs', 'Effectif et fréquence', 'Lire un diagramme en bâtons et un diagramme circulaire'],
      'fragile':    ['Calcul de moyenne pondérée']
    },
  },
};
