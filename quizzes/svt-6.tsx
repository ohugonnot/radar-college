// Source éditable — quiz svt-6. Régénéré automatiquement dans index.html via build.sh.
window.ALL_QUIZZES['svt-6'] = {
  SEARCH_SITES: 'site:fr.khanacademy.org OR site:lumni.fr OR site:planet-vie.ens.fr',
  YT_SUFFIX: 'svt 6eme college',
  SUMMER_TOPIC: 'SVT',
  SUBJECT: { id:'svt-6', name:'Sciences de la Vie et de la Terre', short:'SVT', level:'Fin de 6ème', mark:'🌿', tagline:'Évaluation diagnostique' },
  DOMAINS: {
    vivant:      { id:'vivant',      name:'Caractéristiques du vivant',       short:'Vivant',     coef:3, color:'#15803d', icon:'✦', search:'caracteristiques du vivant 6eme' },
    classification:{id:'classification',name:'Classification des êtres vivants', short:'Classif.', coef:3, color:'#166a39', icon:'≡', search:'classification des etres vivants 6eme' },
    peuplements: { id:'peuplements', name:'Peuplement des milieux',           short:'Peuplement', coef:2, color:'#059669', icon:'☘', search:'peuplement milieux saisons 6eme' },
    respiration: { id:'respiration', name:'Respiration des êtres vivants',    short:'Respiration',coef:2, color:'#b91c1c', icon:'O₂',search:'respiration etres vivants 6eme' },
    alimentation:{ id:'alimentation',name:'Besoins alimentaires',             short:'Alimentation',coef:3, color:'#be185d', icon:'♥', search:'alimentation besoins 6eme' },
    reproduction:{ id:'reproduction',name:'Reproduction & cycle de vie',      short:'Reproduction',coef:2, color:'#7c3aed', icon:'○', search:'reproduction animaux plantes 6eme' },
    sol:         { id:'sol',         name:'Sol & biodiversité',               short:'Sol',        coef:2, color:'#7c2d12', icon:'⨯', search:'sol biodiversite 6eme' },
    hygiene:     { id:'hygiene',     name:'Hygiène & santé',                  short:'Santé',      coef:2, color:'#c2410c', icon:'☘', search:'hygiene sante 6eme' },
  },
  RESOURCES: [
    { label:'Lumni — SVT 6ème',      author:'France TV éducation',    url:'https://www.lumni.fr/college/sixieme/svt' },
    { label:'Khan Academy — Biologie',author:'Cours + exos',           url:'https://fr.khanacademy.org/science/ms-biology' },
    { label:'La main à la pâte',     author:'Fondation sciences cycle 3', url:'https://fondation-lamap.org/' },
    { label:'SVT à l\'école',        author:'YouTube (cours de collège)', url:'https://www.youtube.com/results?search_query=svt+6eme+cours' },
  ],
  POOL: {
    vivant: [
      { key:'viv-1', q:'Un être vivant :', options:['Ne bouge jamais','Naît, grandit, se reproduit, meurt','Est forcément un animal','Est toujours visible'], correct:1, hint:'Cycle commun : naissance → croissance → reproduction → mort.' },
      { key:'viv-2', q:'Une plante est-elle un être vivant ?', options:['Non, elle ne bouge pas','Oui, elle naît, grandit, se reproduit et meurt','Non, elle ne mange pas','Seulement les fleurs'], correct:1, hint:'Les plantes sont vivantes : elles se développent, respirent, se reproduisent.' },
      { key:'viv-3', q:'Un rocher est-il vivant ?', options:['Oui','Non (il ne se reproduit pas, ne respire pas, n\'a pas de cellules)','Parfois','On ne sait pas'], correct:1, hint:'Le rocher fait partie du minéral (non vivant).' },
      { key:'viv-4', q:'Tous les êtres vivants sont constitués de :', options:['Roches','Cellules','Plastique','Eau uniquement'], correct:1, hint:'Cellule = unité de base du vivant (animale, végétale, bactérienne).' },
      { key:'viv-5b', q:'Un virus est-il vivant ?', options:['Oui comme une bactérie','Non : il ne peut pas se reproduire sans une cellule hôte','Oui mais seulement à l\'extérieur','Oui uniquement dans l\'air'], correct:1, hint:'Les virus ne sont pas des cellules et ne se reproduisent que dans un hôte. Leur statut est débattu.' },
      { key:'viv-6', q:'Parmi ces choses, laquelle est vivante ?', options:['Le soleil','Un champignon','Un cristal','Un volcan'], correct:1, hint:'Les champignons sont vivants (4e règne : Fungi).' }
    ],
    classification: [
      { key:'cla-1', q:'On classe les êtres vivants selon :', options:['Leur couleur','Leurs caractères communs','Leur taille','Leur nom'], correct:1, hint:'Classification basée sur les caractères partagés (et leur origine évolutive).' },
      { key:'cla-2', q:'Un mammifère :', options:['Pond des œufs','Allaite ses petits et a des poils','Respire dans l\'eau','A des plumes'], correct:1, hint:'Mammifères : allaitent, ont des poils, respirent avec des poumons.' },
      { key:'cla-3', q:'Les oiseaux ont :', options:['Des plumes, un bec, pondent des œufs','De la fourrure','Des écailles','Des branchies'], correct:0, hint:'Plumes + bec + œufs = caractéristiques des oiseaux.' },
      { key:'cla-4', q:'Les insectes ont :', options:['2 pattes','4 pattes','6 pattes','8 pattes'], correct:2, hint:'Insectes : 6 pattes + 3 parties (tête, thorax, abdomen) + souvent des ailes.' },
      { key:'cla-5', q:'Les poissons respirent avec des :', options:['Poumons','Branchies','Pores','Trachées'], correct:1, hint:'Branchies : extraient O₂ dissous dans l\'eau.' },
      { key:'cla-7', q:'Une baleine est :', options:['Un poisson','Un mammifère (respire par des poumons, allaite)','Un amphibien','Un reptile'], correct:1, hint:'Vit dans l\'eau mais c\'est un mammifère : elle respire à la surface avec ses poumons.' },
      { key:'cla-8', q:'La chauve-souris est :', options:['Un oiseau','Un mammifère volant','Un insecte','Un reptile'], correct:1, hint:'Seul mammifère qui vole vraiment. Allaite ses petits, pas de plumes.' }
    ],
    peuplements: [
      { key:'peu-1', q:'En hiver, beaucoup d\'arbres :', options:['Perdent leurs feuilles','Produisent des fleurs','Meurent','Rapetissent'], correct:0, hint:'Les caduques (chêne, hêtre, érable) perdent leurs feuilles en hiver.' },
      { key:'peu-2', q:'Certains animaux passent l\'hiver en :', options:['Hibernation (ralentissant leur activité)','Nageant','Chantant','Volant'], correct:0, hint:'Hibernation : marmotte, ours, loir… Métabolisme très ralenti.' },
      { key:'peu-3', q:'La migration, c\'est :', options:['Rester au même endroit','Se déplacer de région selon les saisons','Se reproduire','Hiberner'], correct:1, hint:'Oiseaux migrateurs : hirondelles, cigognes… vont vers le Sud l\'hiver.' },
      { key:'peu-4', q:'Un milieu de vie :', options:['Est toujours sec','Contient des conditions (T°, humidité, lumière) et des êtres vivants','Est vide','N\'existe pas'], correct:1, hint:'Milieu = conditions physiques + communauté d\'êtres vivants qui y vivent.' },
      { key:'peu-5', q:'Les coccinelles passent l\'hiver :', options:['Cachées, en ralentissant leur activité','En migrant','En pondant','En mourant toutes'], correct:0, hint:'Elles hivernent regroupées sous l\'écorce ou dans la litière — pas une vraie hibernation mais diapause.' },
      { key:'peu-6', q:'Dans un étang en hiver :', options:['Il n\'y a plus de vie','La vie ralentit sous la glace','Tout meurt','Les poissons deviennent des œufs'], correct:1, hint:'Sous la glace, la température reste autour de 4 °C. Poissons et plantes ralentissent mais survivent.' }
    ],
    respiration: [
      { key:'res-1', q:'Respirer, c\'est :', options:['Manger','Prendre du dioxygène (O₂) et rejeter du dioxyde de carbone (CO₂)','Faire pousser les feuilles','Boire'], correct:1, hint:'Respiration : absorber O₂ et rejeter CO₂. Vrai pour tous les êtres vivants.' },
      { key:'res-2', q:'Les plantes respirent-elles ?', options:['Non','Oui, elles prennent O₂ et rejettent CO₂ (comme nous)','Non, elles ne font que de la photosynthèse','Seulement la nuit'], correct:1, hint:'Les plantes respirent ET font la photosynthèse. Elles respirent 24h/24.' },
      { key:'res-3', q:'Les poissons respirent :', options:['L\'air au-dessus de l\'eau','Le dioxygène dissous dans l\'eau, via leurs branchies','Rien','Du sel'], correct:1, hint:'Branchies extraient l\'O₂ présent dans l\'eau.' },
      { key:'res-4', q:'Les insectes respirent par :', options:['Des poumons','Des trachées (petits tubes dans le corps)','Des branchies','La peau'], correct:1, hint:'Insectes : trachées ouvertes par des stigmates sur l\'abdomen.' },
      { key:'res-5', q:'Les plantes respirent-elles plus le jour ou la nuit ?', options:['Le jour uniquement','La nuit uniquement','24h/24','Elles ne respirent jamais'], correct:2, hint:'Respiration en continu. Ce qui varie : la photosynthèse (jour seulement).' },
      { key:'res-6', q:'Pourquoi un poisson meurt hors de l\'eau ?', options:['Il a trop chaud','Ses branchies se dessèchent et ne peuvent plus extraire l\'O₂','Il n\'y a pas de nourriture','La lumière le gêne'], correct:1, hint:'Les branchies doivent rester humides pour fonctionner. Hors de l\'eau, elles collent et s\'assèchent.' }
    ],
    alimentation: [
      { key:'ali-1', q:'Les plantes se nourrissent :', options:['En mangeant d\'autres plantes','En fabriquant leur matière organique grâce à la lumière (photosynthèse)','Comme les animaux','Uniquement de sol'], correct:1, hint:'Photosynthèse : H₂O + CO₂ + lumière → matière organique + O₂. Autotrophes.' },
      { key:'ali-2', q:'Un animal herbivore mange :', options:['De la viande','Des végétaux','Des insectes','Des pierres'], correct:1, hint:'Herbivore : végétaux. Carnivore : viande. Omnivore : les deux.' },
      { key:'ali-3', q:'Dans une chaîne alimentaire, la flèche signifie :', options:['Est mangé par','Mange','Fuit','Va à côté de'], correct:0, hint:'Herbe → lapin → renard : le sens indique la nutrition.' },
      { key:'ali-4', q:'Les producteurs primaires sont :', options:['Les carnivores','Les plantes vertes (et autres photosynthétiques)','Les décomposeurs','Les bactéries uniquement'], correct:1, hint:'Producteurs primaires fabriquent la matière organique à partir du minéral (photosynthèse).' },
      { key:'ali-5', q:'Dans la chaîne : herbe → lapin → renard, le lapin est :', options:['Producteur','Consommateur primaire (herbivore)','Consommateur secondaire','Décomposeur'], correct:1, hint:'Consommateur primaire = mange le producteur (plante).' },
      { key:'ali-6', q:'Qui décompose les feuilles mortes dans le sol ?', options:['Personne','Des bactéries et champignons (décomposeurs)','Les vers de terre seulement','Le soleil'], correct:1, hint:'Décomposeurs : bactéries, champignons, vers, insectes → recyclent la matière organique.' }
    ],
    reproduction: [
      { key:'rep-1', q:'La reproduction sexuée nécessite :', options:['Un seul individu','Deux individus (mâle et femelle) qui produisent des cellules reproductrices','Trois individus','Aucun'], correct:1, hint:'Sexuée : gamètes mâle + gamète femelle → nouvel individu.' },
      { key:'rep-2', q:'Un œuf contient :', options:['Rien','Un embryon qui se développe','De l\'eau uniquement','Un adulte miniature'], correct:1, hint:'L\'embryon utilise les réserves de l\'œuf (vitellus, blanc) pour grandir.' },
      { key:'rep-3', q:'Chez les plantes à fleurs, la fleur sert à :', options:['Sentir bon uniquement','Se reproduire','Faire des feuilles','Rien'], correct:1, hint:'Fleur = organe reproducteur : étamines (♂) + pistil (♀).' },
      { key:'rep-4', q:'La grenouille pond :', options:['Des petits vivants','Des œufs dans l\'eau','Des graines','Des cellules'], correct:1, hint:'Ovipare : les grenouilles pondent dans l\'eau, les têtards y naissent.' },
      { key:'rep-5', q:'Une bouture :', options:['Une graine','Un morceau de tige qui fait une nouvelle plante','Une fleur coupée','Un fruit pourri'], correct:1, hint:'Bouture = multiplication asexuée. La nouvelle plante est identique à la mère.' }
    ],
    sol: [
      { key:'sol-1', q:'Le sol est formé :', options:['Uniquement de roches','De matière minérale (roches) + matière organique (débris) + êtres vivants','Que de sable','Que d\'eau'], correct:1, hint:'Sol = minéral + matière organique + biodiversité (vers, bactéries, champignons).' },
      { key:'sol-2', q:'Les vers de terre :', options:['Sont nuisibles','Aèrent le sol et le fertilisent','Mangent les racines','Tuent les plantes'], correct:1, hint:'Les vers brassent la terre, améliorent l\'aération et produisent un humus fertile.' },
      { key:'sol-3', q:'La biodiversité du sol :', options:['Est faible','Est très riche (des millions d\'organismes/m²)','N\'existe pas','Se limite aux plantes'], correct:1, hint:'1 m² de sol forestier = millions de microbes, milliers d\'insectes, vers…' },
      { key:'sol-4', q:'Un sol est vivant : vrai ou faux ?', options:['Faux, c\'est juste de la terre','Vrai : il abrite des millions d\'organismes/m²','Faux, seuls les vers y vivent','Vrai, uniquement au printemps'], correct:1, hint:'1 g de sol contient des milliards de microorganismes.' },
      { key:'sol-5', q:'Les vers de terre sont-ils utiles au jardin ?', options:['Oui, ils aèrent le sol et fertilisent','Non, ils mangent les racines','Non, ils n\'ont aucun rôle','Oui, mais seulement les gros'], correct:0, hint:'Travail en profondeur + humus → amis des jardiniers.' }
    ],
    hygiene: [
      { key:'hyg-1', q:'Pour rester en bonne santé :', options:['Ne jamais se laver','Alimentation variée, activité physique, sommeil, hygiène','Ne pas dormir','Rester immobile'], correct:1, hint:'Règles d\'hygiène de vie à connaître dès la 6ème.' },
      { key:'hyg-2', q:'Un microbe peut être :', options:['Toujours dangereux','Parfois utile (digestion) ou pathogène','Toujours bénéfique','Sans effet'], correct:1, hint:'Microbes : bactéries, virus, champignons. Certains sont indispensables (flore intestinale), d\'autres rendent malade.' },
      { key:'hyg-3', q:'Se laver les mains permet :', options:['D\'enlever la couleur','De limiter la transmission des microbes','D\'augmenter la force','Rien'], correct:1, hint:'Hygiène de base pour bloquer la propagation des infections.' },
      { key:'hyg-4', q:'Les antibiotiques sont efficaces contre :', options:['Les virus (grippe, rhume)','Les bactéries','La fatigue','Les allergies'], correct:1, hint:'Antibiotiques = anti-BACTÉRIENS. INUTILES contre les virus (grippe, covid, rhume).' },
      { key:'hyg-5', q:'Dormir 10 heures par nuit à l\'adolescence, c\'est :', options:['Trop','Pas assez','À peu près recommandé','Dangereux'], correct:2, hint:'Besoin ado : 8-10 h. Le sommeil aide mémoire, croissance, humeur.' }
    ],
  },
  PICK: {
    vivant: 4, classification: 5, peuplements: 4, respiration: 4, alimentation: 4,
    reproduction: 3, sol: 3, hygiene: 3,
  },
  PLANS: {
    vivant: {
      'non-acquis': ['Caractéristiques communes : cellules, naissance, croissance, reproduction, mort', 'Distinguer vivant / minéral', 'Savoir donner des exemples variés'],
      'fragile':    ['Cellule animale vs végétale (paroi, chloroplastes)']
    },
    classification: {
      'non-acquis': ['Classer selon les caractères communs', 'Grands groupes : mammifères, oiseaux, poissons, reptiles, amphibiens, insectes', 'Arbre généalogique et parenté'],
      'fragile':    ['Distinguer insectes et arachnides (6 vs 8 pattes)']
    },
    peuplements: {
      'non-acquis': ['Saisons → changements dans le peuplement', 'Stratégies : migration, hibernation, perte des feuilles', 'Notion de milieu de vie'],
      'fragile':    ['Effet des activités humaines sur le peuplement']
    },
    respiration: {
      'non-acquis': ['Tous les vivants respirent (y compris les plantes)', 'Respiration : O₂ entre, CO₂ sort', 'Modes : poumons, branchies, trachées (insectes)'],
      'fragile':    ['Différencier respiration et photosynthèse']
    },
    alimentation: {
      'non-acquis': ['Plantes = autotrophes (photosynthèse), animaux = hétérotrophes', 'Régimes : herbivore, carnivore, omnivore', 'Chaîne alimentaire : sens de la flèche'],
      'fragile':    ['Réseau trophique, producteurs/consommateurs']
    },
    reproduction: {
      'non-acquis': ['Sexuée : gamètes ♂ + ♀', 'Œuf = support du développement', 'Rôle de la fleur chez les plantes'],
      'fragile':    ['Reproduction asexuée chez certaines plantes (bouture)']
    },
    sol: {
      'non-acquis': ['Composition du sol : minéral + organique + vivants', 'Rôle clé des vers de terre', 'Biodiversité cachée'],
      'fragile':    ['Cycle de la matière dans le sol']
    },
    hygiene: {
      'non-acquis': ['Alimentation variée, sommeil, activité physique', 'Hygiène : se laver, brosser les dents', 'Microbes : pathogènes vs utiles'],
      'fragile':    ['Vaccination et prévention']
    },
  },
};
