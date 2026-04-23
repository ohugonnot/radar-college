// Source éditable — quiz physique-3. Régénéré automatiquement dans index.html via build.sh.
window.ALL_QUIZZES['physique-3'] = {
  SEARCH_SITES: 'site:fr.khanacademy.org OR site:lumni.fr OR site:maxicours.com',
  YT_SUFFIX: 'physique chimie brevet college',
  SUMMER_TOPIC: 'physique-chimie',
  SUBJECT: { id:'physique-3', name:'Physique-Chimie', short:'Physique', level:'Fin de 3ème (brevet)', mark:'⚛', tagline:'Évaluation brevet' },
  DOMAINS: {
    forces:    { id:'forces',    name:'Forces & interactions',                  short:'Forces',    coef:3, color:'#b45309', icon:'F', search:'forces interactions 3eme' },
    poids:     { id:'poids',     name:'Poids & masse (P = m × g)',              short:'Poids',     coef:3, color:'#166a39', icon:'g', search:'poids masse gravite 3eme' },
    cinematique:{ id:'cinematique',name:'Mouvement, vitesse & accélération',    short:'Mouvement', coef:3, color:'#1d4ed8', icon:'→', search:'mouvement vitesse 3eme' },
    energie:   { id:'energie',   name:'Énergie (formes, conservation)',         short:'Énergie',   coef:4, color:'#c2410c', icon:'E', search:'energie formes conservation 3eme' },
    electricite:{ id:'electricite',name:'Puissance & énergie électrique',       short:'Électricité',coef:4, color:'#ca8a04', icon:'⚡',search:'puissance energie electrique 3eme' },
    chimie:    { id:'chimie',    name:'Transformations chimiques (équations)',   short:'Chimie',   coef:4, color:'#a01b34', icon:'⇌', search:'transformation chimique equation bilan 3eme' },
    ions:      { id:'ions',      name:'Ions & pH',                               short:'Ions/pH',  coef:3, color:'#059669', icon:'⊕', search:'ions pH acide base 3eme' },
    astronomie:{ id:'astronomie',name:'Univers, système solaire',               short:'Univers',   coef:2, color:'#7c3aed', icon:'○', search:'systeme solaire univers annee lumiere 3eme' },
    signaux:   { id:'signaux',   name:'Signaux sonores & lumineux',              short:'Signaux',  coef:2, color:'#db2777', icon:'♪', search:'signal son lumiere frequence 3eme' },
  },
  RESOURCES: [
    { label:'Khan Academy Physique 3ème',author:'Cours + exos',       url:'https://fr.khanacademy.org/science/college-physique-chimie-3eme-v2' },
    { label:'Lumni — Physique 3ème',     author:'France TV éducation',url:'https://www.lumni.fr/college/troisieme/physique-chimie' },
    { label:'PhET Simulations',          author:'Université Colorado',url:'https://phet.colorado.edu/fr/' },
    { label:'Annales brevet Physique',   author:'Sujets + corrigés',  url:'https://www.brevetdescolleges.fr/annales/' },
  ],
  POOL: {
    forces: [
      { key:'for-1', q:'Une force se représente par :', options:['Un point','Un vecteur (flèche)','Un cercle','Une courbe'], correct:1, hint:'Une force a 4 caractéristiques : point d\'application, direction, sens, intensité. → Vecteur.' },
      { key:'for-2', q:'L\'unité d\'une force est :', options:['Le kilogramme','Le newton (N)','Le joule','Le watt'], correct:1, hint:'Force → newton (N). 1 N = 1 kg·m/s².' },
      { key:'for-3', q:'Deux objets qui ne se touchent pas peuvent-ils exercer une force l\'un sur l\'autre ?', options:['Non','Oui (ex. gravitation, aimantation)','Seulement s\'ils sont chauds','Seulement dans l\'eau'], correct:1, hint:'Les interactions à distance (gravité, électrique, magnétique) sont classiques en physique.' },
      { key:'for-4', q:'Le principe des actions réciproques (3ᵉ loi de Newton) dit :', options:['A tire sur B, donc B reste immobile','Si A exerce une force sur B, B exerce la même force sur A en sens opposé','Les forces s\'annulent toujours','Il n\'y a pas de réaction'], correct:1, hint:'Action-réaction : F_A→B = − F_B→A, mêmes valeur et direction, sens opposés.' },
      { key:'for-5', q:'Un livre posé sur une table est soumis à :', options:['Aucune force','Son poids uniquement','Son poids et la réaction de la table','Seulement la table'], correct:2, hint:'2 forces qui s\'annulent → livre en équilibre.' },
      { key:'for-6', q:'Le poids d\'un objet agit :', options:['Verticalement vers le bas','Vers le centre de la Terre','Horizontalement','Il n\'y a pas de direction'], correct:0, hint:'Poids = verticale vers le bas (approximation locale).' }
    ],
    poids: [
      { key:'poi-1', q:<>Relation entre poids et masse :</>, options:[<><M>P = m + g</M></>, <><M>P = m × g</M></>, <><M>P = m / g</M></>, <><M>m = P × g</M></>], correct:1, hint:'P (N) = m (kg) × g (N/kg).' },
      { key:'poi-2', q:'Sur Terre, g vaut environ :', options:['1 N/kg','10 N/kg','100 N/kg','0'], correct:1, hint:'g ≈ 9,8 N/kg, arrondi à 10 au brevet.' },
      { key:'poi-3', q:'Une masse de 5 kg a un poids sur Terre d\'environ :', options:['5 N','50 N','500 N','0,5 N'], correct:1, hint:'P = 5 × 10 = 50 N.' },
      { key:'poi-4', q:'Si on emmène un objet sur la Lune, sa MASSE :', options:['Augmente','Diminue','Reste la même','Disparaît'], correct:2, hint:'Masse = quantité de matière, constante. Poids change (g_Lune ≈ 1,6 N/kg).' },
      { key:'poi-5', q:'Sur la Lune, le poids d\'un objet de 6 kg est environ :', options:['60 N','10 N','6 N','0 N'], correct:1, hint:'P = 6 × 1,6 ≈ 10 N.' },
    ],
    cinematique: [
      { key:'cin-1', q:<>Formule de la vitesse moyenne :</>, options:[<><M>v = d × t</M></>, <><M>v = d / t</M></>, <><M>v = t / d</M></>, 'Aucune'], correct:1, hint:'v = distance / temps. m/s ou km/h.' },
      { key:'cin-2', q:'Convertis 72 km/h en m/s :', options:['20 m/s','7,2 m/s','200 m/s','36 m/s'], correct:0, hint:'72 / 3,6 = 20 m/s.' },
      { key:'cin-3', q:'Un mouvement accéléré signifie :', options:['La vitesse diminue','La vitesse augmente','La vitesse est constante','Il n\'y a pas de vitesse'], correct:1, hint:'Accéléré = v augmente. Décéléré (ralenti) = v diminue. Uniforme = v constante.' },
      { key:'cin-4', q:'Relation entre distance, vitesse et temps :', options:[<><M>d = v × t</M></>, <><M>d = v / t</M></>, <><M>d = t / v</M></>, 'Aucune'], correct:0, hint:'d = v × t, avec unités cohérentes.' },
    ],
    energie: [
      { key:'ene-1', q:'L\'énergie se conserve :', options:['Elle peut disparaître','Elle se transforme mais la quantité totale se conserve','Elle augmente avec le temps','Elle dépend du lieu'], correct:1, hint:'Principe de conservation de l\'énergie : elle change de forme mais la somme totale reste constante.' },
      { key:'ene-2', q:'L\'unité de l\'énergie est :', options:['Le watt','Le joule (J)','Le newton','Le kelvin'], correct:1, hint:'Énergie : joule (J). Puissance : watt (W). 1 W = 1 J/s.' },
      { key:'ene-3', q:'L\'énergie cinétique dépend :', options:['De la masse uniquement','De la vitesse uniquement','De la masse et de la vitesse','De la taille'], correct:2, hint:'E_c = ½ × m × v². Dépend de la masse ET du carré de la vitesse.' },
      { key:'ene-4', q:'Parmi ces sources, lesquelles sont renouvelables ?', options:['Pétrole, charbon, gaz','Solaire, éolien, hydraulique, biomasse','Uranium','Aucune'], correct:1, hint:'Renouvelables : soleil, vent, eau, biomasse, géothermie. Fossiles et nucléaire = non renouvelables.' },
      { key:'ene-5', q:'Une éolienne convertit :', options:['Lumière en électricité','Énergie cinétique du vent en électricité','Chaleur en lumière','Nucléaire en chimique'], correct:1, hint:'Vent → rotation des pales (cinétique) → alternateur → électricité.' },
      { key:'ene-6', q:'Un vélo qui roule puis freine jusqu\'à l\'arrêt : son énergie cinétique :', options:['Disparaît','Se transforme en chaleur (frottements freins)','Devient électrique','Est stockée'], correct:1, hint:'Conservation de l\'énergie : le mouvement devient chaleur dans les freins.' },
      { key:'ene-7', q:'1 kWh =', options:['1000 W','3 600 000 J','60 W','3600 s'], correct:1, hint:'1 kWh = 1000 W × 3600 s = 3,6 × 10⁶ J.' }
    ],
    electricite: [
      { key:'elec-1', q:<>Relation puissance-tension-intensité :</>, options:[<><M>P = U + I</M></>, <><M>P = U × I</M></>, <><M>P = U / I</M></>, <><M>P = U<sup>2</sup></M></>], correct:1, hint:'P (W) = U (V) × I (A).' },
      { key:'elec-2', q:<>Énergie consommée : E = P × t. Un appareil de 2000 W pendant 3 h consomme :</>, options:['6 kWh','60 kWh','600 kWh','0,6 kWh'], correct:0, hint:'E = 2 kW × 3 h = 6 kWh.' },
      { key:'elec-3', q:'Unité d\'énergie électrique pour la facture EDF :', options:['Joule','Kilowatt-heure (kWh)','Watt','Volt'], correct:1, hint:'kWh = 1000 W pendant 1 h = 3,6 × 10⁶ J.' },
      { key:'elec-4', q:'La tension du secteur en France est :', options:['12 V','230 V','1000 V','9 V'], correct:1, hint:'Secteur France : 230 V, 50 Hz.' },
      { key:'elec-5', q:'Le rôle d\'un disjoncteur est :', options:['Faire briller une lampe','Couper le circuit en cas de surintensité','Augmenter la tension','Ne sert à rien'], correct:1, hint:'Disjoncteur = sécurité contre les surintensités (court-circuit, surcharge).' },
      { key:'elec-6', q:'Un appareil de 100 W sous 220 V absorbe un courant de :', options:['~0,45 A','~22 000 A','~220 A','~2,2 A'], correct:0, hint:'I = P/U = 100/220 ≈ 0,45 A.' }
    ],
    chimie: [
      { key:'chim-1', q:'Dans une transformation chimique :', options:['Les atomes apparaissent/disparaissent','Les atomes se conservent (même nombre avant et après)','La masse augmente','On obtient toujours de l\'eau'], correct:1, hint:'Conservation : des atomes et de la masse (loi de Lavoisier).' },
      { key:'chim-2', q:<>Équation de la combustion du méthane : <M>CH<sub>4</sub> + 2 O<sub>2</sub> → CO<sub>2</sub> + 2 H<sub>2</sub>O</M>. Les réactifs sont :</>, options:['CH₄ et CO₂','CH₄ et O₂','CO₂ et H₂O','H₂O seul'], correct:1, hint:'Réactifs à gauche de la flèche, produits à droite.' },
      { key:'chim-3', q:'Test du dioxygène :', options:['Eau de chaux qui se trouble','Bûchette incandescente qui se rallume','Sulfate de cuivre bleu','Papier pH'], correct:1, hint:'O₂ : ravive la flamme d\'une bûchette.' },
      { key:'chim-4', q:'Test du dioxyde de carbone :', options:['Eau de chaux qui se trouble','Bûchette qui se rallume','Flamme qui détone','Papier pH rouge'], correct:0, hint:'CO₂ : trouble l\'eau de chaux (formation de CaCO₃).' },
      { key:'chim-5', q:<>Équation équilibrée de <M>H<sub>2</sub> + ? O<sub>2</sub> → H<sub>2</sub>O</M> :</>, options:[<><M>2 H<sub>2</sub> + O<sub>2</sub> → 2 H<sub>2</sub>O</M></>, <><M>H<sub>2</sub> + O<sub>2</sub> → H<sub>2</sub>O</M></>, <><M>H<sub>2</sub> + 2 O<sub>2</sub> → 2 H<sub>2</sub>O</M></>, <><M>H<sub>2</sub> + O<sub>2</sub> → 2 H<sub>2</sub>O</M></>], correct:0, hint:'Équilibrer pour avoir même nombre d\'atomes H et O des deux côtés.' },
      { key:'chim-6', q:<>Dans <M>2H<sub>2</sub> + O<sub>2</sub> → 2H<sub>2</sub>O</M>, combien d\'atomes d\'H à gauche et à droite ?</>, options:['2 et 2','4 et 4','2 et 4','4 et 2'], correct:1, hint:'À gauche : 2×2=4 H. À droite : 2×2=4 H. Équation bien équilibrée.' }
    ],
    ions: [
      { key:'ion-1', q:'Un ion positif (cation) est :', options:['Un atome ayant gagné des électrons','Un atome ayant perdu des électrons','Une molécule','Un neutron'], correct:1, hint:'Cation = perte d\'électron(s) → charge positive. Anion = gain → charge négative.' },
      { key:'ion-2', q:'L\'ion H⁺ est responsable :', options:['Du caractère basique','Du caractère acide','De la couleur bleue','De la conductivité du métal'], correct:1, hint:'Acide = excès d\'ions H⁺. Base = excès d\'ions OH⁻.' },
      { key:'ion-3', q:'Une solution est basique si pH :', options:['< 7','= 7','> 7','= 0'], correct:2, hint:'pH > 7 : basique. pH = 7 : neutre. pH < 7 : acide.' },
      { key:'ion-4', q:'La formule de l\'ion chlorure :', options:['Cl','Cl⁺','Cl⁻','Cl₂'], correct:2, hint:'Chlorure = ion Cl⁻ (gain d\'un électron).' },
      { key:'ion-5', q:'Les solutions acides ou basiques concentrées :', options:['Sont sans danger','Sont dangereuses (port de lunettes + blouse)','Sont inodores','Sont toujours colorées'], correct:1, hint:'Précautions : lunettes, blouse, gants, sous hotte si nécessaire.' },
    ],
    astronomie: [
      { key:'ast-1', q:'Une année-lumière est :', options:['Une unité de temps','Une unité de distance','Une unité de vitesse','Une unité de masse'], correct:1, hint:'Distance parcourue par la lumière en 1 an ≈ 9,46 × 10¹² km.' },
      { key:'ast-2', q:'Ordre croissant des planètes depuis le Soleil :', options:['Mercure, Vénus, Terre, Mars, Jupiter, Saturne, Uranus, Neptune','Terre, Vénus, Mars, Jupiter…','Soleil, Lune, Terre…','Mercure, Mars, Terre, Vénus…'], correct:0, hint:'Mercure le plus proche, Neptune le plus éloigné.' },
      { key:'ast-3', q:'L\'étoile la plus proche de la Terre est :', options:['La Lune','Alpha Centauri','Le Soleil','Sirius'], correct:2, hint:'Le Soleil EST une étoile, la plus proche de nous (8 min-lumière).' },
      { key:'ast-4', q:'L\'Univers :', options:['Est en expansion','Est statique','A toujours eu sa taille actuelle','Ne contient que la Voie lactée'], correct:0, hint:'Les galaxies s\'éloignent les unes des autres depuis le Big Bang.' },
    ],
    signaux: [
      { key:'sig-1', q:'La fréquence d\'un signal se mesure en :', options:['Décibels (dB)','Hertz (Hz)','Mètres (m)','Joules (J)'], correct:1, hint:'Fréquence (nombre de vibrations par seconde) : en Hz.' },
      { key:'sig-2', q:'Les ultrasons sont des sons :', options:['Plus graves que l\'audible','Plus aigus que l\'audible (> 20 kHz)','De la lumière','Invisibles'], correct:1, hint:'Audible humain ≈ 20 Hz - 20 kHz. Ultrasons > 20 kHz. Infrasons < 20 Hz.' },
      { key:'sig-3', q:'Le son et la lumière se propagent :', options:['À la même vitesse','Beaucoup plus vite pour le son','Beaucoup plus vite pour la lumière','Ni l\'un ni l\'autre'], correct:2, hint:'Lumière : ~300 000 km/s. Son dans l\'air : ~340 m/s. Rapport ≈ 1 million.' },
    ],
  },
  PICK: {
    forces: 3, poids: 3, cinematique: 3, energie: 4, electricite: 4,
    chimie: 4, ions: 3, astronomie: 3, signaux: 3,
  },
  PLANS: {
    forces: {
      'non-acquis': ['Force = vecteur (4 caractéristiques : direction, sens, valeur, point d\'application)', 'Unité : newton (N)', 'Principe d\'action-réaction'],
      'fragile':    ['Représenter une force par un vecteur à l\'échelle']
    },
    poids: {
      'non-acquis': ['P = m × g, avec g ≈ 10 N/kg sur Terre', 'DISTINGUER masse (kg, invariable) et poids (N, dépend de g)', 'Calculs Terre/Lune'],
      'fragile':    ['Représenter le poids par un vecteur vertical descendant']
    },
    cinematique: {
      'non-acquis': ['v = d/t et conversions km/h ↔ m/s (×3,6 ou /3,6)', 'Mouvement uniforme / accéléré / ralenti', 'Notion de référentiel'],
      'fragile':    ['Relation d = v × t pour calculer une distance']
    },
    energie: {
      'non-acquis': ['Conservation de l\'énergie : elle se transforme, la somme totale est constante', 'Formes : cinétique (m et v), chimique, thermique, électrique, lumineuse', 'Unités : joule et watt'],
      'fragile':    ['Chaîne énergétique (ex. barrage hydroélectrique)']
    },
    electricite: {
      'non-acquis': ['P = U × I et E = P × t', 'Unités : kWh pour l\'énergie domestique', 'Sécurité : disjoncteur, prise de terre, 230 V'],
      'fragile':    ['Rendement d\'une conversion énergétique']
    },
    chimie: {
      'non-acquis': ['PRIORITÉ BREVET : équilibrer une équation-bilan', 'Réactifs → Produits avec flèche', 'Tests de gaz à connaître par cœur (O₂, CO₂, H₂, eau)'],
      'fragile':    ['Masse avant = masse après (Lavoisier)']
    },
    ions: {
      'non-acquis': ['Ion = atome ayant perdu ou gagné des électrons', 'pH : acide < 7, neutre = 7, basique > 7', 'Ion H⁺ (acidité) et OH⁻ (basicité)'],
      'fragile':    ['Dilution d\'un acide : le pH augmente vers 7']
    },
    astronomie: {
      'non-acquis': ['Les 8 planètes du système solaire dans l\'ordre', 'Année-lumière = distance', 'Le Soleil est une étoile'],
      'fragile':    ['Ordres de grandeur : distance Terre-Lune, Terre-Soleil']
    },
    signaux: {
      'non-acquis': ['Fréquence en Hz, audible 20 Hz - 20 kHz', 'Son : milieu matériel obligatoire. Lumière : même dans le vide', 'Période T = 1/f'],
      'fragile':    ['Dangers de l\'exposition prolongée au bruit']
    },
  },
};
