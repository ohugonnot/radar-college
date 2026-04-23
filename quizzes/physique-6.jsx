// Source éditable — quiz physique-6. Régénéré automatiquement dans index.html via build.sh.
window.ALL_QUIZZES['physique-6'] = {
  SEARCH_SITES: 'site:fr.khanacademy.org OR site:lumni.fr OR site:maxicours.com',
  YT_SUFFIX: 'cycle 3 sciences',
  SUMMER_TOPIC: 'sciences',
  SUBJECT: { id:'physique-6', name:'Sciences (Physique-Techno)', short:'Sciences', level:'Fin de 6ème', mark:'⚛', tagline:'Évaluation diagnostique' },
  DOMAINS: {
    etats:      { id:'etats',      name:'États de la matière',              short:'États',      coef:3, color:'#0f5e6b', icon:'△',  search:'etats matiere solide liquide gazeux 6eme' },
    melanges:   { id:'melanges',   name:'Mélanges & dissolutions',          short:'Mélanges',   coef:3, color:'#0d7a6f', icon:'≈',  search:'melanges solutions dissolution 6eme' },
    temperature:{ id:'temperature',name:'Température & changements d\'état', short:'Température',coef:2, color:'#c2410c', icon:'°',  search:'temperature changement etat 6eme' },
    lumiere:    { id:'lumiere',    name:'Sources & lumière',                 short:'Lumière',    coef:2, color:'#ca8a04', icon:'☀',  search:'lumiere source propagation 6eme' },
    son:        { id:'son',        name:'Sources sonores & propagation',     short:'Son',        coef:2, color:'#7c3aed', icon:'♪',  search:'son sources vibration 6eme' },
    electricite:{ id:'electricite',name:'Circuits électriques simples',      short:'Circuits',   coef:3, color:'#b45309', icon:'⚡', search:'circuit electrique simple 6eme' },
    astronomie: { id:'astronomie', name:'Terre, Lune, Soleil',               short:'Astronomie', coef:2, color:'#1d4ed8', icon:'○',  search:'terre lune soleil 6eme' },
    environnement:{id:'environnement',name:'Environnement & matériaux',      short:'Environ.',   coef:2, color:'#166a39', icon:'☘',  search:'environnement materiaux 6eme' },
  },
  RESOURCES: [
    { label:'Khan Academy Cycle 3',  author:'Cours + exos',        url:'https://fr.khanacademy.org/science' },
    { label:'Lumni — Sciences 6ème', author:'France TV éducation', url:'https://www.lumni.fr/college/sixieme/physique-chimie' },
    { label:'PhET Simulations',      author:'Université Colorado', url:'https://phet.colorado.edu/fr/' },
    { label:'Fondation La main à la pâte', author:'Sciences cycle 3', url:'https://fondation-lamap.org/' },
  ],
  POOL: {
    etats: [
      { key:'eta-1', q:'Les trois états de la matière sont :', options:['Chaud, froid, tiède','Solide, liquide, gazeux','Plein, vide, mélangé','Dur, mou, cassant'], correct:1, hint:'Solide (forme propre), liquide (épouse le récipient), gaz (occupe tout).' },
      { key:'eta-2', q:'L\'eau à 20 °C est :', options:['Solide','Liquide','Gazeuse','Les trois à la fois'], correct:1, hint:'Eau liquide entre 0 °C et 100 °C (à pression normale).' },
      { key:'eta-3', q:'La glace est :', options:['De l\'eau à l\'état solide','De la vapeur','Un autre liquide','De l\'air congelé'], correct:0, hint:'Glace = eau solide (en-dessous de 0 °C).' },
      { key:'eta-4', q:'Un gaz a une forme :', options:['Fixe','Propre à lui','Qui occupe tout l\'espace disponible','Liquide'], correct:2, hint:'Un gaz se répand et occupe tout le volume du contenant.' },
      { key:'eta-5', q:<>De l\'eau dans un verre à l\'air libre. Au bout d\'une semaine :</>, options:['Rien ne change','Elle gèle','Une partie s\'évapore','Elle se transforme en lait'], correct:2, hint:'Évaporation lente, même en-dessous de 100 °C.' },
      { key:'eta-6', q:<>Le brouillard est composé :</>, options:['De vapeur d\'eau invisible','De minuscules gouttelettes d\'eau en suspension','De glace','De fumée'], correct:1, hint:'Comme les nuages : gouttelettes d\'eau liquide visibles.' }
    ],
    melanges: [
      { key:'mel-1', q:'Un mélange homogène est :', options:['On voit plusieurs constituants','On ne distingue pas les constituants à l\'œil nu','Toujours coloré','Impossible à obtenir'], correct:1, hint:'Homogène = un seul aspect (ex. eau salée). Hétérogène = plusieurs (ex. eau + huile).' },
      { key:'mel-2', q:'Quand on dissout du sel dans l\'eau, la masse totale :', options:['Augmente','Diminue','Reste la même (conservation)','Disparaît'], correct:2, hint:'La matière ne disparaît pas : conservation de la masse.' },
      { key:'mel-3', q:'L\'eau et l\'huile forment un mélange :', options:['Homogène','Hétérogène','Pur','Solide'], correct:1, hint:'L\'huile ne se mélange pas à l\'eau : deux couches distinctes = hétérogène.' },
      { key:'mel-4', q:'Pour séparer le sable de l\'eau, on peut utiliser :', options:['Filtration','Dissolution','Chauffage uniquement','Aucune méthode'], correct:0, hint:'Filtre : laisse passer l\'eau et retient le sable.' },
      { key:'mel-5', q:<>Comment séparer le sel de l\'eau salée ?</>, options:['Par filtration','Par évaporation de l\'eau','Par aimantation','On ne peut pas'], correct:1, hint:'L\'eau s\'évapore, le sel reste. Filtration ne marche pas car sel dissous.' },
      { key:'mel-6', q:<>Le lait est un mélange :</>, options:['Homogène (à l\'œil nu)','Hétérogène','Pur','Solide'], correct:0, hint:'Homogène à l\'œil nu mais hétérogène au microscope (émulsion).' }
    ],
    temperature: [
      { key:'tem-1', q:'La glace fond à :', options:['0 °C','100 °C','20 °C','−10 °C'], correct:0, hint:'Fusion de la glace à 0 °C (pression normale).' },
      { key:'tem-2', q:'L\'eau bout à :', options:['50 °C','100 °C','200 °C','0 °C'], correct:1, hint:'Vaporisation de l\'eau à 100 °C (pression atmosphérique normale).' },
      { key:'tem-3', q:'Le passage de l\'état liquide à solide s\'appelle :', options:['Fusion','Solidification','Vaporisation','Condensation'], correct:1, hint:'Liquide → solide = solidification (inverse : fusion).' },
      { key:'tem-4', q:'L\'instrument pour mesurer la température :', options:['La balance','Le thermomètre','Le chronomètre','La règle'], correct:1, hint:'Thermomètre (°C).' },
      { key:'tem-5', q:<>Par une nuit d\'hiver, un thermomètre indique −5 °C. Cette température est :</>, options:['Supérieure à 0 °C','Inférieure à 0 °C (froid)','Égale à 0 °C','Non mesurable'], correct:1, hint:'−5 < 0, donc en dessous de 0 : il peut geler.' }
    ],
    lumiere: [
      { key:'lum-1', q:'Une source primaire de lumière :', options:['Produit sa propre lumière','Reflète seulement la lumière','Est toujours bleue','Est invisible'], correct:0, hint:'Soleil, lampe = sources primaires. Lune, miroir = sources secondaires (diffusent).' },
      { key:'lum-2', q:'Parmi ces objets, lequel est une source SECONDAIRE de lumière ?', options:['Le Soleil','Une ampoule allumée','La Lune','Une bougie'], correct:2, hint:'La Lune reflète la lumière du Soleil, elle ne la produit pas.' },
      { key:'lum-3', q:'La lumière se propage dans un milieu transparent :', options:['En zigzag','En ligne droite','En cercles','En spirales'], correct:1, hint:'Propagation rectiligne dans un milieu homogène et transparent.' },
      { key:'lum-4', q:<>Un miroir est une source :</>, options:['Primaire','Secondaire (il diffuse la lumière)','Invisible','Active'], correct:1, hint:'Le miroir ne produit pas sa lumière, il la renvoie.' }
    ],
    son: [
      { key:'son-1', q:'Un son est produit par :', options:['La lumière','Une vibration','La chaleur','L\'odeur'], correct:1, hint:'Tout son provient d\'une vibration (corde, haut-parleur…).' },
      { key:'son-2', q:'Dans le vide, le son :', options:['Se propage mieux','Ne se propage pas','Devient lumière','Va très vite'], correct:1, hint:'Le son a besoin de matière pour se propager. Dans le vide : rien n\'entend.' },
      { key:'son-3', q:'La vitesse du son dans l\'air est environ :', options:['300 000 km/s','340 m/s','3 m/s','1 km/h'], correct:1, hint:'Son : ~340 m/s. Bien plus lent que la lumière (300 000 km/s).' },
      { key:'son-4', q:'L\'écho est dû à :', options:['La réflexion du son sur une surface','La lumière','Le vent','La chaleur'], correct:0, hint:'Le son se réfléchit sur les obstacles (mur, falaise) → on entend le même son avec un décalage.' },
      { key:'son-5', q:<>Dans l\'espace (vide), un astronaute peut-il entendre un autre astronaute parler ?</>, options:['Oui directement','Non, le son ne se propage pas dans le vide','Oui mais faiblement','Seulement près de la Terre'], correct:1, hint:'Pas d\'air = pas de vibrations = pas de son. Ils communiquent par radio.' }
    ],
    electricite: [
      { key:'ele-1', q:'Pour qu\'une lampe s\'allume, il faut :', options:['Un circuit ouvert','Un circuit fermé avec une pile','Un fil coupé','Rien du tout'], correct:1, hint:'Circuit fermé = boucle complète avec générateur.' },
      { key:'ele-2', q:'Un interrupteur ouvert :', options:['Ferme le circuit','Interrompt le courant (circuit ouvert)','Fait briller la lampe','Double la tension'], correct:1, hint:'Interrupteur ouvert = circuit ouvert = courant interrompu.' },
      { key:'ele-3', q:'Les éléments de base d\'un circuit simple :', options:['Pile, fils, récepteur','Eau, air, feu','Moteur, volant','Livre, stylo'], correct:0, hint:'Générateur (pile) + fils conducteurs + récepteurs (lampe, moteur).' },
      { key:'ele-4', q:'Un court-circuit :', options:['Est sans danger','Peut endommager la pile et chauffer les fils','Augmente toujours la lumière','Est nécessaire'], correct:1, hint:'Court-circuit = fort courant = surchauffe, danger.' },
      { key:'ele-5', q:<>Pour tester si un objet conduit l\'électricité, on :</>, options:['Le chauffe','L\'intègre à un circuit : si la lampe s\'allume, c\'est conducteur','Le pèse','Le regarde'], correct:1, hint:'Intégrer dans le circuit entre 2 fils : si courant passe = conducteur.' }
    ],
    astronomie: [
      { key:'ast-1', q:'La Terre tourne autour :', options:['De la Lune','Du Soleil','D\'Uranus','D\'elle-même uniquement'], correct:1, hint:'Révolution Terre autour du Soleil en 1 an. Rotation sur elle-même en 24 h.' },
      { key:'ast-2', q:'Une année, c\'est le temps pour que la Terre :', options:['Tourne une fois sur elle-même','Fasse un tour autour du Soleil','Change de saison','Fasse le tour de la Lune'], correct:1, hint:'1 an = 1 tour complet autour du Soleil.' },
      { key:'ast-3', q:'Les saisons sont dues :', options:['À la distance Terre-Soleil','À l\'inclinaison de l\'axe de rotation de la Terre','À la Lune','Au vent'], correct:1, hint:'L\'axe terrestre est incliné de 23°. C\'est pour ça qu\'on a des saisons différentes en hémisphère N et S.' },
      { key:'ast-4', q:'La Lune tourne autour de :', options:['Du Soleil directement','De la Terre','De Mars','Rien'], correct:1, hint:'La Lune est un satellite naturel de la Terre (révolution en ~27 jours).' },
      { key:'ast-5', q:<>La Terre fait un tour sur elle-même en :</>, options:['1 heure','24 heures','1 an','1 mois'], correct:1, hint:'Rotation Terre = 24 h (jour/nuit).' }
    ],
    environnement: [
      { key:'env-1', q:'Un matériau recyclable est :', options:['Jeté dans n\'importe quelle poubelle','Transformé pour être réutilisé','Enfoui dans le sol','Brûlé'], correct:1, hint:'Recyclage = retransformation du matériau pour un nouvel usage.' },
      { key:'env-2', q:'L\'eau potable provient :', options:['De la pluie uniquement','Des rivières, nappes souterraines ou autres, après traitement','De l\'air','Des glaciers uniquement'], correct:1, hint:'Eau potable = eau traitée (filtrée, désinfectée) à partir de sources naturelles.' },
      { key:'env-3', q:'Le plastique met environ combien de temps à se dégrader dans la nature ?', options:['Quelques jours','Quelques mois','Plusieurs centaines d\'années','Quelques semaines'], correct:2, hint:'Une bouteille plastique : 400-1000 ans. D\'où l\'importance du recyclage.' },
      { key:'env-4', q:<>Pour économiser l\'eau :</>, options:['Laisser couler l\'eau','Prendre des douches courtes plutôt que des bains','Oublier de fermer le robinet','Arroser plus'], correct:1, hint:'Douche 5 min ≈ 60 L · bain ≈ 200 L. Gain évident.' }
    ],
  },
  PICK: {
    etats: 4, melanges: 4, temperature: 4, lumiere: 3, son: 4,
    electricite: 4, astronomie: 4, environnement: 3,
  },
  PLANS: {
    etats: {
      'non-acquis': ['Solide, liquide, gaz : caractériser chacun (forme, volume)', 'Savoir donner des exemples (glace, eau, vapeur)', 'Masse conservée dans les changements d\'état'],
      'fragile':    ['Reconnaître un état d\'après une description']
    },
    melanges: {
      'non-acquis': ['Différencier homogène (1 constituant apparent) et hétérogène', 'Dissolution vs filtration vs décantation', 'Conservation de la masse lors d\'une dissolution'],
      'fragile':    ['Choisir une méthode de séparation selon le mélange']
    },
    temperature: {
      'non-acquis': ['Fusion/solidification de l\'eau à 0 °C', 'Vaporisation/liquéfaction à 100 °C', 'Lire un thermomètre'],
      'fragile':    ['Noms des 6 changements d\'état']
    },
    lumiere: {
      'non-acquis': ['Sources primaires vs secondaires', 'Propagation rectiligne', 'Citer des sources variées'],
      'fragile':    ['Expliquer l\'ombre']
    },
    son: {
      'non-acquis': ['Son = vibration', 'Ne se propage pas dans le vide', 'Vitesse ≈ 340 m/s dans l\'air'],
      'fragile':    ['Comparer vitesse du son et de la lumière']
    },
    electricite: {
      'non-acquis': ['Circuit fermé = courant passe', 'Rôle de la pile, des fils, du récepteur', 'Danger du court-circuit'],
      'fragile':    ['Schéma normalisé d\'un circuit']
    },
    astronomie: {
      'non-acquis': ['Mouvement de la Terre : rotation (24h) + révolution (1 an)', 'Saisons dues à l\'inclinaison', 'Alternance jour/nuit'],
      'fragile':    ['Phases de la Lune']
    },
    environnement: {
      'non-acquis': ['Recyclage et tri des déchets', 'Traitement de l\'eau potable', 'Éco-gestes au quotidien'],
      'fragile':    ['Durée de vie des déchets dans la nature']
    },
  },
};
