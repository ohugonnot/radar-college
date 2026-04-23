// Source éditable — quiz svt-5. Régénéré automatiquement dans index.html via build.sh.
window.ALL_QUIZZES['svt-5'] = {
  SEARCH_SITES: 'site:fr.khanacademy.org OR site:lumni.fr OR site:planet-vie.ens.fr',
  YT_SUFFIX: 'svt 5eme college',
  SUMMER_TOPIC: 'SVT',
  SUBJECT: { id:'svt-5', name:'Sciences de la Vie et de la Terre', short:'SVT', level:'Fin de 5ème', mark:'🌿', tagline:'Évaluation diagnostique' },
  DOMAINS: {
    respiration: { id:'respiration', name:'Respiration humaine',           short:'Respiration',coef:3, color:'#b91c1c', icon:'O₂',search:'respiration humaine poumons 5eme' },
    circulation: { id:'circulation', name:'Circulation sanguine',          short:'Circulation',coef:3, color:'#a01b34', icon:'♥', search:'circulation sanguine coeur 5eme' },
    digestion:   { id:'digestion',   name:'Digestion & nutrition',         short:'Digestion',  coef:3, color:'#c2410c', icon:'☰', search:'digestion nutrition 5eme' },
    effortMuscle:{ id:'effortMuscle',name:'Activité physique & muscles',   short:'Effort',     coef:2, color:'#ca8a04', icon:'↯', search:'effort physique muscles 5eme' },
    microOrg:    { id:'microOrg',    name:'Microorganismes',               short:'Microbes',   coef:2, color:'#7c3aed', icon:'μ', search:'microorganismes bacteries 5eme' },
    plantesNutri:{ id:'plantesNutri',name:'Nutrition des végétaux',        short:'Plantes',    coef:2, color:'#15803d', icon:'✿', search:'nutrition vegetale photosynthese 5eme' },
    erosion:     { id:'erosion',     name:'Géologie : érosion & paysages', short:'Érosion',    coef:3, color:'#7c2d12', icon:'⚒', search:'erosion paysages roches 5eme' },
    climat:      { id:'climat',      name:'Météo & climat',                short:'Climat',     coef:2, color:'#0891b2', icon:'☁', search:'meteo climat 5eme' },
  },
  RESOURCES: [
    { label:'Lumni — SVT 5ème',      author:'France TV éducation',    url:'https://www.lumni.fr/college/cinquieme/svt' },
    { label:'Khan Academy — Biologie',author:'Cours + exos',           url:'https://fr.khanacademy.org/science/ms-biology' },
    { label:'Planet-Vie',            author:'ENS — ressources SVT',   url:'https://planet-vie.ens.fr/' },
    { label:'SVT à l\'école',        author:'YouTube',                url:'https://www.youtube.com/results?search_query=svt+5eme+cours' },
  ],
  POOL: {
    respiration: [
      { key:'res-1', q:'Les poumons contiennent :', options:['Des alvéoles (où se font les échanges gazeux)','Uniquement du sang','Des os','De l\'eau'], correct:0, hint:'Alvéoles = petites cavités très nombreuses, très vascularisées, site des échanges O₂/CO₂.' },
      { key:'res-2', q:'Lors de l\'inspiration :', options:['Les poumons se contractent','Le diaphragme descend, l\'air entre dans les poumons','On expulse le CO₂','Rien ne se passe'], correct:1, hint:'Diaphragme s\'abaisse + côtes s\'écartent → volume augmente → air aspiré.' },
      { key:'res-3', q:'L\'air expiré contient :', options:['Plus d\'O₂ que l\'air inspiré','Plus de CO₂ et moins d\'O₂ que l\'air inspiré','Aucun gaz','Seulement de l\'eau'], correct:1, hint:'Les cellules consomment O₂ et produisent CO₂ → air expiré plus riche en CO₂.' },
      { key:'res-4', q:'Le tabac :', options:['Est bon pour les poumons','Détruit les alvéoles et provoque cancers/BPCO','N\'a aucun effet','Augmente la capacité pulmonaire'], correct:1, hint:'Tabac : cause de cancers du poumon, bronchites chroniques, maladies cardiovasculaires.' },
      { key:'res-5', q:<>On respire mieux à la mer parce que :</>, options:['L\'air est plus pur','Il y a plus de dioxygène (~21 %, comme partout)','Il fait chaud','Il n\'y a pas de vent'], correct:1, hint:'Attention piège : la proportion de O₂ est la même partout. C\'est souvent la qualité de l\'air qui diffère.' }
    ],
    circulation: [
      { key:'cir-1', q:'Le cœur est :', options:['Un muscle','Un os','Une glande','Un organe sans fonction'], correct:0, hint:'Cœur = muscle creux qui pompe le sang dans tout le corps.' },
      { key:'cir-2', q:'Les artères transportent :', options:['Le sang du cœur vers les organes','Le sang des organes vers le cœur','Uniquement de l\'air','Du glucose'], correct:0, hint:'Artères : AWAY (du cœur vers les tissus). Veines : vers le cœur.' },
      { key:'cir-3', q:'La fréquence cardiaque au repos est environ :', options:['15 battements/min','70 battements/min','500 battements/min','10 battements/heure'], correct:1, hint:'Adulte au repos : 60-100 bpm. Sportif entraîné : plus bas. Enfant : plus élevé.' },
      { key:'cir-4', q:'Le sang apporte aux cellules :', options:['Seulement de l\'eau','O₂ et nutriments ; emporte CO₂ et déchets','Des vitamines uniquement','Rien'], correct:1, hint:'Rôle double du sang : apport et élimination.' },
      { key:'cir-5', q:<>Un adulte a environ :</>, options:['1 L de sang','5 L de sang','20 L de sang','50 L de sang'], correct:1, hint:'≈ 5 L de sang chez un adulte moyen.' }
    ],
    digestion: [
      { key:'dig-1', q:'La digestion consiste à :', options:['Respirer','Transformer les aliments en nutriments absorbables','Brûler les calories','Se reproduire'], correct:1, hint:'Digestion : transformations mécaniques + chimiques → nutriments.' },
      { key:'dig-2', q:'L\'absorption des nutriments a lieu principalement :', options:['Dans la bouche','Dans l\'estomac','Dans l\'intestin grêle','Dans le foie'], correct:2, hint:'Intestin grêle : grande surface (villosités), passage des nutriments dans le sang.' },
      { key:'dig-3', q:'Une alimentation équilibrée comporte :', options:['Que du sucre','Des glucides, protéines, lipides, fibres, vitamines, eau','Uniquement de la viande','Uniquement des fruits'], correct:1, hint:'Variété : produits céréaliers, fruits/légumes, protéines, produits laitiers, matières grasses.' },
      { key:'dig-4', q:'Les protéines servent à :', options:['Rien','Construire et réparer les cellules et tissus (muscles…)','Donner de la couleur','Hydrater'], correct:1, hint:'Protéines = matériaux de construction du corps.' },
      { key:'dig-5', q:<>Les fibres alimentaires :</>, options:['Sont digérées par l\'estomac','Transitent et aident au bon fonctionnement du système digestif','Sont toxiques','Sont des vitamines'], correct:1, hint:'Non digérées mais utiles au transit intestinal.' }
    ],
    effortMuscle: [
      { key:'eff-1', q:'Pendant un effort, les muscles consomment plus :', options:['D\'eau','De dioxygène et de glucose','De vitamines D','De sel'], correct:1, hint:'Effort → respiration cellulaire accrue → besoin de plus de O₂ et de glucose.' },
      { key:'eff-2', q:'Pendant un effort, la fréquence cardiaque :', options:['Diminue','Augmente','Reste constante','Devient nulle'], correct:1, hint:'Fréquence cardiaque et respiratoire augmentent pour fournir plus d\'O₂ et glucose aux muscles.' },
      { key:'eff-3', q:'L\'échauffement avant le sport :', options:['Est inutile','Prépare les muscles et limite les blessures','Augmente la fatigue','Sert à manger'], correct:1, hint:'Échauffement augmente la température musculaire et prépare l\'organisme.' },
      { key:'eff-4', q:<>Pourquoi on transpire quand on court ?</>, options:['Pour se rafraîchir (évaporation refroidit la peau)','Par réflexe nerveux','Pour se laver','Pas de raison précise'], correct:0, hint:'Thermorégulation : l\'évaporation de la sueur évacue la chaleur.' }
    ],
    microOrg: [
      { key:'mic-1', q:'Les microorganismes :', options:['Sont tous dangereux','Sont souvent utiles (yaourt, pain, flore intestinale) mais peuvent aussi être pathogènes','N\'existent pas','Sont visibles à l\'œil nu'], correct:1, hint:'Flore intestinale, levures (pain), bactéries lactiques (yaourt)… mais aussi virus et bactéries pathogènes.' },
      { key:'mic-2', q:'Les microbes pathogènes entrent dans le corps par :', options:['La peau uniquement','Bouche, nez, blessures, contacts…','Les cheveux','Les os'], correct:1, hint:'Voies d\'entrée : respiratoires, digestives, cutanées, sexuelles.' },
      { key:'mic-3', q:'Le yaourt est fabriqué par :', options:['Des virus','Des bactéries lactiques','Des champignons','Rien'], correct:1, hint:'Fermentation lactique : les bactéries transforment le lactose en acide lactique → yaourt.' },
      { key:'mic-4', q:<>Se laver les mains avant de manger permet de :</>, options:['Les embellir','Réduire les risques d\'infection en éliminant les microbes','Les rafraîchir','Rien de précis'], correct:1, hint:'Hygiène = prévention la plus efficace contre beaucoup de maladies.' }
    ],
    plantesNutri: [
      { key:'pla-1', q:'Les plantes prennent leurs nutriments minéraux :', options:['Dans le sol via les racines (sels minéraux + eau)','Dans l\'air','Uniquement dans les feuilles','Dans le soleil directement'], correct:0, hint:'Racines absorbent eau + sels minéraux du sol.' },
      { key:'pla-2', q:'La photosynthèse se fait :', options:['Dans les racines','Dans les feuilles (chlorophylle), à la lumière','Dans les fleurs uniquement','La nuit'], correct:1, hint:'Feuilles + chlorophylle + lumière : H₂O + CO₂ → matière organique + O₂.' },
      { key:'pla-3', q:'La chlorophylle est :', options:['Un gaz','Un pigment vert qui capte la lumière','Un minéral','Un animal'], correct:1, hint:'La chlorophylle (verte) capte l\'énergie lumineuse nécessaire à la photosynthèse.' },
      { key:'pla-4', q:'Pendant la photosynthèse, la plante :', options:['Consomme du CO₂ et rejette de l\'O₂','Consomme de l\'O₂ et rejette du CO₂','Ne fait rien','Mange des insectes'], correct:0, hint:'C\'est l\'INVERSE de la respiration (qui a lieu 24h/24, dont la photosynthèse uniquement le jour).' },
      { key:'pla-5', q:<>Sans lumière pendant plusieurs jours, une plante :</>, options:['Pousse plus vite','Ne peut plus faire de photosynthèse → s\'affaiblit','N\'a pas besoin de lumière','Devient rouge'], correct:1, hint:'Photosynthèse = source d\'énergie. Privée de lumière, la plante puise dans ses réserves.' }
    ],
    erosion: [
      { key:'ero-1', q:'L\'érosion, c\'est :', options:['L\'usure des roches par l\'eau, le vent, le gel…','La formation des volcans','Un séisme','La naissance d\'une plante'], correct:0, hint:'Agents d\'érosion : eau, vent, gel, glaciers, vivants.' },
      { key:'ero-2', q:'Les sédiments sont :', options:['Des morceaux de roches arrachés puis transportés','Des animaux','Uniquement du sable','Des plantes'], correct:0, hint:'Sédiments : particules issues de l\'érosion, transportées par l\'eau/vent, déposées ailleurs.' },
      { key:'ero-3', q:'Une roche sédimentaire :', options:['Est issue de la consolidation de sédiments','N\'existe pas','Est du magma','N\'a aucune origine'], correct:0, hint:'Ex. grès (sable), calcaire (coquilles), argile… formées par compaction de sédiments.' },
      { key:'ero-4', q:'Le paysage change au fil :', options:['Des siècles/millénaires (érosion lente)','Des secondes','Jamais','Des heures uniquement'], correct:0, hint:'Érosion : processus lents (sauf cas extrême comme une crue ou un glissement).' },
      { key:'ero-5', q:<>Les Alpes vont continuer à :</>, options:['Pousser (collision de plaques)','Disparaître','Rester pareilles','Devenir un océan'], correct:0, hint:'Collision plaque africaine / eurasienne en cours → les Alpes montent encore.' }
    ],
    climat: [
      { key:'cli-1', q:'Le climat d\'une région :', options:['Change tous les jours','Est la météo moyenne sur plusieurs années','Est identique partout','Dépend de la ville'], correct:1, hint:'Météo = court terme (jours). Climat = moyennes à long terme (années/décennies).' },
      { key:'cli-2', q:'Le changement climatique actuel est :', options:['Dû à des causes naturelles seulement','Accéléré par les activités humaines (CO₂, méthane…)','Impossible','Sans conséquence'], correct:1, hint:'GES (gaz à effet de serre) émis par combustions fossiles, élevage, déforestation.' },
      { key:'cli-3', q:'Les énergies fossiles émettent en brûlant :', options:['De l\'oxygène','Du CO₂ (principal GES)','Rien','De l\'azote pur'], correct:1, hint:'Combustion : CₓHy + O₂ → CO₂ + H₂O. Le CO₂ s\'accumule dans l\'atmosphère.' },
      { key:'cli-4', q:'Pour limiter le réchauffement climatique :', options:['Augmenter la consommation d\'énergies fossiles','Réduire les GES (transport, énergie, alimentation)','Rien ne peut être fait','Planter moins d\'arbres'], correct:1, hint:'Solutions : énergies renouvelables, sobriété, reforestation, moins de viande.' },
      { key:'cli-5', q:<>Un été à 28 °C en France : météo ou climat ?</>, options:['Météo (observation court terme)','Climat (moyenne long terme)','Les deux','Rien'], correct:0, hint:'1 été = météo. 30 ans de moyennes = climat.' }
    ],
  },
  PICK: {
    respiration: 4, circulation: 4, digestion: 4, effortMuscle: 3, microOrg: 3,
    plantesNutri: 4, erosion: 4, climat: 4,
  },
  PLANS: {
    respiration: {
      'non-acquis': ['Rôle des alvéoles pulmonaires dans les échanges gazeux', 'Mécanique respiratoire : rôle du diaphragme', 'Tabac : connaître les risques'],
      'fragile':    ['Calculer le débit respiratoire']
    },
    circulation: {
      'non-acquis': ['Cœur = pompe musculaire', 'Artères (cœur → organes) vs veines (organes → cœur)', 'Rôle du sang : transport O₂, nutriments, CO₂, déchets'],
      'fragile':    ['Double circulation (pulmonaire + générale)']
    },
    digestion: {
      'non-acquis': ['Transformations mécaniques + chimiques (enzymes)', 'Absorption dans l\'intestin grêle', 'Alimentation équilibrée (variée, proportionnée)'],
      'fragile':    ['Rôles des glucides, lipides, protéines']
    },
    effortMuscle: {
      'non-acquis': ['Effort → augmentation FC et FR pour plus d\'O₂/glucose', 'Échauffement indispensable', 'Hygiène de vie sportive'],
      'fragile':    ['Récupération post-effort']
    },
    microOrg: {
      'non-acquis': ['Microbes : utiles (flore, fermentation) ou pathogènes', 'Voies d\'entrée : respiratoire, digestive, cutanée', 'Hygiène pour limiter la transmission'],
      'fragile':    ['Antibiotiques vs vaccins']
    },
    plantesNutri: {
      'non-acquis': ['Racines absorbent eau et sels minéraux', 'Photosynthèse dans les feuilles : CO₂ + H₂O → matière organique + O₂', 'Rôle de la chlorophylle et de la lumière'],
      'fragile':    ['Plantes respirent aussi (24h/24)']
    },
    erosion: {
      'non-acquis': ['Érosion = usure des roches par l\'eau, vent, gel', 'Sédiments → roches sédimentaires', 'Temps géologique long'],
      'fragile':    ['Cycle des roches et notion de paysage']
    },
    climat: {
      'non-acquis': ['Différencier météo (court terme) et climat (long terme)', 'Changement climatique : origine anthropique (GES)', 'Conséquences : fonte glaces, montée eaux, sécheresses'],
      'fragile':    ['Éco-gestes pour réduire son empreinte']
    },
  },
};
