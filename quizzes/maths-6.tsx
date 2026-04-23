// Source éditable — quiz maths-6. Régénéré automatiquement dans index.html via build.sh.
window.ALL_QUIZZES['maths-6'] = {
  SEARCH_SITES: 'site:maths-et-tiques.fr OR site:fr.khanacademy.org OR site:lumni.fr',
  YT_SUFFIX: 'Yvan Monka',
  SUMMER_TOPIC: 'maths',
  SUBJECT: { id:'maths-6', name:'Mathématiques', short:'Maths', level:'Fin de 6ème', mark:'∑', tagline:'Évaluation diagnostique' },
  DOMAINS: {
    numeration: { id:'numeration', name:'Nombres entiers & décimaux',   short:'Nombres',   coef:3, color:'#0f5e6b', icon:'N',  search:'nombres entiers decimaux 6eme' },
    operations: { id:'operations', name:'Opérations (+, −, ×, ÷)',      short:'Opérations',coef:4, color:'#0d7a6f', icon:'+',  search:'operations calcul 6eme' },
    fractions:  { id:'fractions',  name:'Fractions (intro, partage)',   short:'Fractions', coef:3, color:'#7c3aed', icon:'⅓',  search:'fractions 6eme' },
    proportion: { id:'proportion', name:'Proportionnalité',             short:'Proportion',coef:2, color:'#b97a0e', icon:'%',  search:'proportionnalite regle trois 6eme' },
    angles:     { id:'angles',     name:'Angles (mesure, types)',       short:'Angles',    coef:2, color:'#c2410c', icon:'∠',  search:'angles 6eme' },
    geometrie:  { id:'geometrie',  name:'Figures géométriques',         short:'Géométrie', coef:3, color:'#a01b34', icon:'△',  search:'triangles quadrilateres 6eme' },
    aires:      { id:'aires',      name:'Périmètres & aires',           short:'Aires',     coef:3, color:'#166a39', icon:'□',  search:'perimetre aire 6eme' },
    symetrie:   { id:'symetrie',   name:'Symétrie axiale',              short:'Symétrie',  coef:2, color:'#1e7a8a', icon:'↔',  search:'symetrie axiale 6eme' },
    unites:     { id:'unites',     name:'Unités & conversions',         short:'Unités',    coef:2, color:'#c4307a', icon:'u',  search:'conversions unites 6eme' },
  },
  RESOURCES: [
    { label:'Maths et Tiques 6ème',  author:'Yvan Monka (gratuit)', url:'https://www.maths-et-tiques.fr/index.php/cours-en-ligne/cours-sixieme' },
    { label:'Khan Academy 6ème',     author:'Cours + exos',          url:'https://fr.khanacademy.org/math/cycle-3-6eme-v1' },
    { label:'Lumni — Maths 6ème',    author:'France TV éducation',   url:'https://www.lumni.fr/college/sixieme/mathematiques' },
    { label:'Sésamath',              author:'Manuel + exos',         url:'https://manuel.sesamath.net/' },
  ],
  POOL: {
    numeration: [
      { key:'num-1', q:<>Que vaut le chiffre 5 dans le nombre <M>4 572</M> ?</>, options:['5 unités','5 dizaines','5 centaines','5 milliers'], correct:2, hint:'Position : 5 est en position des centaines (3ᵉ depuis la droite).' },
      { key:'num-2', q:<>Quel nombre est le plus grand ?</>, options:['12,5','12,45','12,05','12,4'], correct:0, hint:'On compare : 12,5 &gt; 12,45 &gt; 12,4 &gt; 12,05. Attention : 12,5 ≠ 12,05 !' },
      { key:'num-3', q:<>Le nombre <M>3,14</M> se lit :</>, options:['Trois virgule quatorze','Trois et quatorze','Trois unités, 1 dixième et 4 centièmes','Les deux dernières réponses sont correctes'], correct:3, hint:'3,14 = 3 + 1/10 + 4/100.' },
      { key:'num-4', q:<>Range du plus petit au plus grand : 7,2 ; 7,02 ; 7,20 ; 7,002</>, options:['7,002 < 7,02 < 7,2 = 7,20','7,002 < 7,02 = 7,2 < 7,20','7,02 < 7,002 < 7,20 < 7,2','7,2 < 7,20 < 7,02 < 7,002'], correct:0, hint:'7,2 et 7,20 sont égaux. 7,002 est le plus petit.' },
      { key:'num-5', q:<>Quel est le plus grand : 0,9 ou 0,09 ?</>, options:['0,9','0,09','Ils sont égaux','On ne peut pas comparer'], correct:0, hint:'0,9 = 9/10 ; 0,09 = 9/100. 0,9 est 10 fois plus grand !' },
      { key:'num-6', q:<>Combien vaut <M>4 × 1000 + 5 × 100 + 3</M> ?</>, options:['453','4503','4530','4000503'], correct:1, hint:'4 milliers + 5 centaines + 3 unités = 4 503.' }
    ],
    operations: [
      { key:'ope-1', q:<>Calcule : <M>45 + 7 × 3 =</M></>, options:['156','66','45','24'], correct:1, hint:'Priorité : × avant + → 7×3=21, puis 45+21=66.' },
      { key:'ope-2', q:<>Calcule : <M>(12 + 8) × 5 =</M></>, options:['52','100','60','40'], correct:1, hint:'Parenthèses d\'abord : 20 × 5 = 100.' },
      { key:'ope-3', q:<>Division euclidienne de 53 par 7 : quotient et reste</>, options:['q=7 r=4','q=7 r=5','q=8 r=3','q=6 r=11'], correct:0, hint:'7 × 7 = 49, reste 53 − 49 = 4. Donc q=7, r=4.' },
      { key:'ope-4', q:<>Calcule : <M>2,5 × 4 =</M></>, options:['6','10','8','25'], correct:1, hint:'2,5 × 4 = 10' },
      { key:'ope-5', q:<>Calcule : <M>15 − 4 × 2 =</M></>, options:['22','7','11','−8'], correct:1, hint:'Priorité : 4×2=8, puis 15−8=7.' },
      { key:'ope-6', q:<>Calcule : <M>8 + 2 × 5</M></>, options:['50','18','10','40'], correct:1, hint:'Piège ! Priorité à × : 2×5 = 10 puis 8+10 = 18 (pas 50 !).' },
      { key:'ope-7', q:<>Calcule : <M>100 − 30 − 20</M></>, options:['50','150','70','90'], correct:0, hint:'On lit de gauche à droite : 100−30=70, puis 70−20=50.' }
    ],
    fractions: [
      { key:'fra-1', q:<>Que représente <F n="3" d="4"/> d\'une tarte ?</>, options:['3 parts sur 4 parts égales','3 tartes','4 parts sur 3','3 quarts de part'], correct:0, hint:'3/4 = 3 parts sur un total de 4 parts égales.' },
      { key:'fra-2', q:<>Quelle fraction est égale à <F n="1" d="2"/> ?</>, options:[<F n="2" d="3"/>, <F n="3" d="6"/>, <F n="2" d="5"/>, <F n="1" d="3"/>], correct:1, hint:'3/6 = 1/2 (divise par 3 en haut et en bas).' },
      { key:'fra-3', q:<>Calcule : <F n="1" d="2"/> de 24 =</>, options:['2','12','24','48'], correct:1, hint:'1/2 × 24 = 12' },
      { key:'fra-4', q:<>Parmi ces fractions, laquelle est plus grande que 1 ?</>, options:[<F n="3" d="4"/>, <F n="5" d="5"/>, <F n="7" d="5"/>, <F n="1" d="3"/>], correct:2, hint:'7/5 = 1,4 > 1. 5/5 = 1 exactement.' },
      { key:'fra-5', q:'Qui mange le plus : Léa qui prend 1/2 de la tarte, ou Tom qui prend 2/3 ?', options:['Léa','Tom','C\'est pareil','On ne peut pas savoir'], correct:1, hint:'1/2 = 3/6 ; 2/3 = 4/6. Tom mange plus.' },
      { key:'fra-6', q:<>Combien vaut <F n="3" d="4"/> de 100 ?</>, options:['25','50','75','150'], correct:2, hint:'3/4 × 100 = 75. Astuce : 1/4 de 100 = 25, donc 3/4 = 75.' }
    ],
    proportion: [
      { key:'pro-1', q:'Si 3 stylos coûtent 4,50 €, combien coûtent 6 stylos ?', options:['7,50 €','9 €','10 €','4,50 €'], correct:1, hint:'6 = 3 × 2, donc prix × 2 = 9 €.' },
      { key:'pro-2', q:'Pour faire une recette pour 4 personnes il faut 200 g de farine. Pour 8 personnes ?', options:['100 g','400 g','250 g','1600 g'], correct:1, hint:'8 = 4 × 2 → farine × 2 = 400 g.' },
      { key:'pro-3', q:'10 % de 80 vaut :', options:['0,8','8','80','800'], correct:1, hint:'10 % = 10/100 = 1/10. 80/10 = 8.' },
      { key:'pro-4', q:'Un piéton fait 5 km en 1 h. En 30 min, il fera :', options:['1 km','2,5 km','10 km','5 km'], correct:1, hint:'30 min = moitié d\'heure → 5/2 = 2,5 km.' },
      { key:'pro-5', q:'Un gâteau pour 6 personnes demande 300 g de farine. Pour 2 personnes ?', options:['100 g','150 g','200 g','50 g'], correct:0, hint:'6 → 300 g, donc 1 → 50 g, donc 2 → 100 g.' },
      { key:'pro-6', q:'25 % de 200, c\'est :', options:['25','50','75','100'], correct:1, hint:'25 % = 1/4. 200/4 = 50.' }
    ],
    angles: [
      { key:'ang-1', q:'Un angle droit mesure :', options:['45°','90°','180°','360°'], correct:1, hint:'Angle droit = 90°, quart de tour.' },
      { key:'ang-2', q:'Un angle aigu est :', options:['Plus petit que 90°','Égal à 90°','Plus grand que 90° mais plus petit que 180°','Égal à 180°'], correct:0, hint:'Aigu : < 90°. Obtus : entre 90° et 180°. Plat : 180°.' },
      { key:'ang-3', q:'Un angle plat mesure :', options:['90°','180°','360°','45°'], correct:1, hint:'Plat = demi-tour = 180°.' },
      { key:'ang-4', q:'La somme des angles d\'un triangle vaut :', options:['90°','180°','270°','360°'], correct:1, hint:'Dans TOUT triangle, la somme des 3 angles = 180°.' },
      { key:'ang-5', q:'Un triangle a 2 angles de 45°. Le 3e angle :', options:['45°','60°','90°','180°'], correct:2, hint:'Somme = 180° → 180 − 45 − 45 = 90°. C\'est un triangle rectangle isocèle.' },
      { key:'ang-6', q:'Deux angles complémentaires ont pour somme :', options:['90°','100°','180°','360°'], correct:0, hint:'Complémentaires = somme 90°. Supplémentaires = somme 180°.' }
    ],
    geometrie: [
      { key:'geo-1', q:'Un triangle équilatéral a :', options:['3 côtés égaux','2 côtés égaux','1 angle droit','Aucun côté égal'], correct:0, hint:'Équilatéral : 3 côtés de même longueur ET 3 angles de 60°.' },
      { key:'geo-2', q:'Un carré a :', options:['4 côtés égaux mais pas d\'angles droits','4 angles droits mais pas de côtés égaux','4 côtés égaux et 4 angles droits','3 côtés'], correct:2, hint:'Carré = losange + rectangle : 4 côtés égaux + 4 angles droits.' },
      { key:'geo-3', q:'Un rectangle a :', options:['4 côtés égaux','4 angles droits','3 côtés','Des côtés courbes'], correct:1, hint:'Rectangle : 4 angles droits (côtés opposés égaux mais pas nécessairement tous les 4).' },
      { key:'geo-4', q:'Le cercle est défini par :', options:['Son centre et son rayon','Sa base','Ses sommets','Sa hauteur'], correct:0, hint:'Cercle = ensemble des points à distance r (rayon) du centre.' },
      { key:'geo-5', q:'Un losange a toujours :', options:['4 angles droits','4 côtés égaux','Des diagonales égales','Des côtés opposés perpendiculaires'], correct:1, hint:'Losange = 4 côtés égaux. Les angles peuvent ne pas être droits (sinon ce serait un carré).' },
      { key:'geo-6', q:'Le diamètre d\'un cercle est :', options:['La moitié du rayon','Le double du rayon','Le triple du rayon','Égal au rayon'], correct:1, hint:'Diamètre = 2 × rayon.' }
    ],
    aires: [
      { key:'air-1', q:'Le périmètre d\'un carré de côté 5 cm vaut :', options:['10 cm','20 cm','25 cm','5 cm²'], correct:1, hint:'P = 4 × côté = 4 × 5 = 20 cm.' },
      { key:'air-2', q:'L\'aire d\'un rectangle de longueur 8 cm et largeur 3 cm :', options:['11 cm²','24 cm²','22 cm²','5 cm²'], correct:1, hint:'A = L × l = 8 × 3 = 24 cm².' },
      { key:'air-3', q:'L\'aire d\'un carré de côté 6 cm :', options:['12 cm²','24 cm²','36 cm²','6 cm²'], correct:2, hint:'A = côté × côté = 6 × 6 = 36 cm².' },
      { key:'air-4', q:'L\'aire se mesure en :', options:['cm','cm²','cm³','L'], correct:1, hint:'Aire = unité au carré. Volume = unité au cube.' },
      { key:'air-5', q:'Le périmètre d\'un rectangle 5×3 cm :', options:['8 cm','15 cm','16 cm','30 cm'], correct:2, hint:'P = 2(L+l) = 2(5+3) = 16 cm.' },
      { key:'air-6', q:'Un carré a un côté de 10 cm. Son aire :', options:['40 cm²','100 cm','100 cm²','1000 cm²'], correct:2, hint:'A = c² = 10² = 100. Attention à l\'unité : cm², pas cm !' }
    ],
    symetrie: [
      { key:'sym-1', q:'Un rectangle a combien d\'axes de symétrie ?', options:['0','1','2','4'], correct:2, hint:'Rectangle : 2 axes (les 2 médianes des côtés).' },
      { key:'sym-2', q:'Un carré a combien d\'axes de symétrie ?', options:['1','2','4','8'], correct:2, hint:'Carré : 4 axes (2 médianes + 2 diagonales).' },
      { key:'sym-3', q:'Dans une symétrie axiale, une figure et son image sont :', options:['Identiques de même sens','Identiques mais inversées (comme dans un miroir)','Différentes','Plus petites'], correct:1, hint:'Symétrie axiale = effet miroir.' },
      { key:'sym-4', q:'Un triangle équilatéral a :', options:['0 axe','1 axe','3 axes','6 axes'], correct:2, hint:'Chaque hauteur d\'un équilatéral est aussi un axe de symétrie.' },
      { key:'sym-5', q:'Par symétrie axiale, les longueurs sont :', options:['Divisées par 2','Conservées','Doublées','Mises au carré'], correct:1, hint:'Une symétrie conserve toujours les longueurs et les angles.' }
    ],
    unites: [
      { key:'uni-1', q:'1 m =', options:['10 cm','100 cm','1000 cm','100 mm'], correct:1, hint:'1 m = 100 cm = 1000 mm.' },
      { key:'uni-2', q:'1 kg =', options:['100 g','1000 g','10 g','1 t'], correct:1, hint:'1 kg = 1000 g.' },
      { key:'uni-3', q:'1 L =', options:['10 mL','100 mL','1000 mL','1 dL'], correct:2, hint:'1 L = 100 cL = 1000 mL.' },
      { key:'uni-4', q:'Convertis : 2 h 30 min =', options:['230 min','150 min','2,3 h','250 min'], correct:1, hint:'2 h = 120 min, +30 min = 150 min. Attention : 2,3 h = 2h18min ≠ 2h30.' },
      { key:'uni-5', q:<>Convertis : <M>3 kg =</M></>, options:['30 g','300 g','3 000 g','30 000 g'], correct:2, hint:'1 kg = 1000 g → 3 kg = 3 000 g.' },
      { key:'uni-6', q:<>Convertis : <M>1h15 =</M></>, options:['75 min','115 min','1,15 h','175 min'], correct:0, hint:'1h = 60 min, +15 min = 75 min. Attention : 1,15 h = 1h09 ≠ 1h15 !' }
    ],
  },
  PICK: {
    numeration: 4, operations: 4, fractions: 3, proportion: 3, angles: 3,
    geometrie: 4, aires: 3, symetrie: 3, unites: 3,
  },
  PLANS: {
    numeration: {
      'non-acquis': ['Revoir le tableau de numération (unités/dizaines/centaines/…/dixièmes/centièmes)', 'Lire et écrire les nombres décimaux en lettres', 'Comparer 2 décimaux : aligner les virgules'],
      'fragile':    ['Exercices de rangement et encadrement de décimaux']
    },
    operations: {
      'non-acquis': ['Apprendre par cœur les priorités : × et ÷ avant + et −, parenthèses en premier', 'Technique de la division posée', 'Tables de multiplication par cœur'],
      'fragile':    ['Calculs avec parenthèses imbriquées', 'Estimation : ordre de grandeur d\'un résultat']
    },
    fractions: {
      'non-acquis': ['Comprendre : fraction = partage en parts égales', 'Fractions équivalentes (multiplier en haut et en bas par le même nombre)', 'Prendre une fraction d\'un nombre (1/2 de 30 = 15)'],
      'fragile':    ['Comparer des fractions simples']
    },
    proportion: {
      'non-acquis': ['Règle de trois (produit en croix)', 'Pourcentages simples : 10 %, 25 %, 50 %', 'Situations concrètes : prix, recettes, distance'],
      'fragile':    ['Échelle et conversions de proportionnalité']
    },
    angles: {
      'non-acquis': ['Mémoriser : aigu (<90°), droit (=90°), obtus (>90°), plat (=180°)', 'Utiliser un rapporteur', 'Somme des angles d\'un triangle = 180°'],
      'fragile':    ['Construire un angle de mesure donnée']
    },
    geometrie: {
      'non-acquis': ['Propriétés des triangles (équilatéral, isocèle, rectangle)', 'Propriétés des quadrilatères (carré, rectangle, losange)', 'Notions de cercle (centre, rayon, diamètre)'],
      'fragile':    ['Reconnaître les figures à partir de leurs propriétés']
    },
    aires: {
      'non-acquis': ['Formules : P_carré=4a, P_rectangle=2(L+l), A_carré=a², A_rectangle=L×l', 'Attention aux unités : aire en cm², m²…', 'Différence périmètre (contour) vs aire (surface)'],
      'fragile':    ['Calculer aire et périmètre de figures composées']
    },
    symetrie: {
      'non-acquis': ['Construire le symétrique d\'un point, d\'une figure', 'Reconnaître les axes de symétrie des figures usuelles', 'Propriétés conservées : longueurs, angles'],
      'fragile':    ['Compléter une figure par symétrie']
    },
    unites: {
      'non-acquis': ['Tableau des longueurs (km, hm, dam, m, dm, cm, mm)', 'Masses (kg, g, mg) et contenances (L, dL, cL, mL)', 'Attention aux heures : 1h30 = 1h30min = 90 min, pas 130'],
      'fragile':    ['Conversions complexes et chaînes de conversions']
    },
  },
};
