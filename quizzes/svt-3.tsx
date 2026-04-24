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
      { key:'gen3-1', q:'L\'information génétique est contenue dans :', options:['Le cytoplasme','L\'ADN du noyau','Les mitochondries uniquement','La membrane cellulaire'], correct:1, hint:'ADN = molécule support de l\'information génétique, dans le noyau de chaque cellule.' },
      { key:'gen3-2', q:'Un chromosome est :', options:['De l\'ADN condensé','Dans le cytoplasme uniquement','Un virus','Une protéine'], correct:0, hint:'Chromosomes = ADN très condensé, visible pendant la division cellulaire.' },
      { key:'gen3-3', q:'Chez l\'humain, une cellule somatique contient :', options:['23 chromosomes','46 chromosomes (23 paires)','92 chromosomes','2 chromosomes'], correct:1, hint:'46 chromosomes = 23 paires. 1 paire = 1 chromosome du père + 1 de la mère.' },
      { key:'gen3-4', q:'Un gène est :', options:['Une cellule entière','Une portion d\'ADN portant l\'information d\'un caractère','Un muscle','Un aliment'], correct:1, hint:'Gène = séquence d\'ADN codant pour une protéine → caractère.' },
      { key:'gen3-5', q:'Les allèles sont :', options:['Les différentes versions d\'un même gène','Des chromosomes entiers','Des cellules spécialisées','Des virus'], correct:0, hint:'Allèle = variante d\'un gène (ex. groupe sanguin A/B/O). Deux allèles par individu diploïde.' },
      { key:'gen3-6', q:'Le phénotype d\'un individu est :', options:['Son génotype uniquement','L\'ensemble de ses caractères observables','Uniquement sa couleur de peau','La séquence de son ADN'], correct:1, hint:'Phénotype = expression du génotype en interaction avec l\'environnement.' },
      { key:'gen3-7', q:'Une mutation est :', options:['Un caractère acquis par l\'environnement','Une modification de la séquence d\'ADN','Une cellule cancéreuse forcément','Un antibiotique'], correct:1, hint:'Mutation = changement de la séquence d\'ADN (peut être sans effet, bénéfique ou délétère).' },
      { key:'gen3-8', q:'Le génotype est :', options:['Ce que l\'on voit à l\'œil nu','L\'ensemble des allèles portés par un individu','Son poids et sa taille','Uniquement les chromosomes sexuels'], correct:1, hint:'Génotype = composition allélique. Il peut ne pas s\'exprimer pleinement (allèle récessif).' },
      { key:'gen3-9', q:'L\'ADN est présent :', options:['Seulement dans le sang','Dans toutes les cellules possédant un noyau','Dans le cerveau uniquement','Dans les os seulement'], correct:1, hint:'Chaque cellule nucléée contient la même copie d\'ADN (issue de la première division du zygote).' },
      { key:'gen3-10', q:'Les jumeaux vrais (monozygotes) ont :', options:['Le même ADN (issus du même zygote)','Des ADN différents','N\'existent pas','Le même phénotype forcément'], correct:0, hint:'Issus du même zygote (un ovule fécondé divisé en deux) → même ADN, même génotype.' },
      { key:'gen3-11', q:'Combien de paires de chromosomes dans le caryotype humain ?', options:['23 paires','46 paires','92 paires','1 paire'], correct:0, hint:'23 paires = 46 chromosomes au total. La 23ᵉ paire est la paire de chromosomes sexuels (XX ou XY).' },
      { key:'gen3-12', q:'Une mutation génétique est :', options:['Une maladie contagieuse','Une modification de la séquence d\'ADN','Un défaut de mitose uniquement','La fusion de deux gènes'], correct:1, hint:'Mutation = modification (spontanée ou induite) de la séquence de l\'ADN. Elle peut être neutre, favorable ou défavorable — c\'est la matière première de l\'évolution.' },
      { key:'gen3-13', q:'La molécule d\'ADN est portée par :', options:['La membrane cellulaire','Les mitochondries uniquement','Les chromosomes (dans le noyau)','Le cytoplasme'], correct:2, hint:'Chez les eucaryotes, l\'ADN est organisé en chromosomes, eux-mêmes situés dans le noyau de la cellule (avec un peu d\'ADN mitochondrial hérité de la mère).' },
    ],
    cellule: [
      { key:'cel3-1', q:'La mitose produit :', options:['2 cellules filles identiques à la cellule mère','4 gamètes haploïdes','Une cellule plus grande','Rien'], correct:0, hint:'Mitose : cellule à 2n chromosomes → 2 cellules identiques à 2n chromosomes.' },
      { key:'cel3-2', q:'La méiose produit :', options:['Des cellules somatiques identiques','Des gamètes (à n chromosomes)','Des cellules de même taille exactement','Des virus'], correct:1, hint:'Méiose : cellule 2n → 4 gamètes à n chromosomes (moitié moins).' },
      { key:'cel3-3', q:'Avant la mitose, l\'ADN :', options:['Disparaît complètement','Se duplique (chaque chromosome devient à 2 chromatides)','Se détruit à moitié','Diminue de moitié'], correct:1, hint:'Réplication de l\'ADN : phase S du cycle cellulaire. Chaque chromosome dupliqué = 2 chromatides sœurs.' },
      { key:'cel3-4', q:'La mitose est importante pour :', options:['Se reproduire sexuellement','Grandir et réparer les tissus (renouvellement cellulaire)','Mourir','Vieillir uniquement'], correct:1, hint:'Mitose = croissance, cicatrisation, renouvellement des tissus (globules rouges, peau, intestin…).' },
      { key:'cel3-5', q:'La méiose se distingue de la mitose car elle :', options:['Produit 2 cellules identiques','Divise le nombre de chromosomes de moitié et génère une diversité génétique','Ne modifie pas l\'ADN','Produit des cellules identiques au parent'], correct:1, hint:'Méiose : 2 divisions successives → 4 cellules haploïdes (n). Avec brassage génétique à chaque fois.' },
      { key:'cel3-6', q:'Le nombre haploïde (n) chez l\'humain est :', options:['46','23','92','1'], correct:1, hint:'n = 23 (gamètes). 2n = 46 (cellules somatiques). Après fécondation : 23 + 23 = 46.' },
      { key:'cel3-7', q:'Les cellules cancéreuses se caractérisent par :', options:['Une croissance parfaitement contrôlée','Une prolifération anarchique non régulée','Moins de mitoses que les cellules normales','Un ADN parfaitement intact'], correct:1, hint:'Cancer : dérèglement des mécanismes de contrôle du cycle cellulaire → mitoses incontrôlées.' },
      { key:'cel3-8', q:'La réplication de l\'ADN garantit :', options:['Des mutations fréquentes','Que chaque cellule fille reçoit une copie complète du génome','La division par méiose','La mort cellulaire programmée'], correct:1, hint:'Réplication semi-conservative : chaque brin sert de matrice pour produire un nouveau brin complémentaire.' },
      { key:'cel3-9', q:'Les chromosomes sont visibles au microscope :', options:['En permanence dans toutes les cellules','Seulement pendant la division cellulaire (condensation)','Jamais','Uniquement dans les gamètes'], correct:1, hint:'Hors de la division, l\'ADN est décondensé (chromatine). Il se condense en chromosomes visibles lors de la mitose/méiose.' },
      { key:'cel3-10', q:'Après une mitose, chaque cellule-fille contient :', options:['La moitié des chromosomes','Le même nombre de chromosomes que la cellule mère','Le double des chromosomes','Aucun chromosome'], correct:1, hint:'Mitose : 2n → 2n + 2n. Les deux cellules filles sont génétiquement identiques à la mère.' },
      { key:'cel3-11', q:'L\'apoptose est :', options:['Une division cellulaire incontrôlée','La mort programmée d\'une cellule, mécanisme normal de l\'organisme','La fusion de deux cellules','Une phase du cycle cellulaire sans ADN'], correct:1, hint:'Apoptose = "suicide cellulaire" programmé. Essentiel au développement et à l\'élimination des cellules endommagées.' },
      { key:'cel3-12', q:'Un point de contrôle du cycle cellulaire permet de :', options:['Accélérer toujours la division','Vérifier que les conditions sont correctes avant de passer à l\'étape suivante','Déclencher une mutation','Doubler les chromosomes sans contrôle'], correct:1, hint:'Points de contrôle (G1, G2, métaphase) : si l\'ADN est endommagé ou la réplication incomplète, la division est bloquée.' },
    ],
    reproduction: [
      { key:'rep3-1', q:'Les cellules reproductrices humaines sont :', options:['Les globules rouges','Les spermatozoïdes et les ovules (gamètes)','Les neurones','Les hématies'], correct:1, hint:'Gamètes ♂ (spermatozoïdes) et ♀ (ovules). Chacun contient n = 23 chromosomes.' },
      { key:'rep3-2', q:'La fécondation est :', options:['La naissance','L\'union d\'un spermatozoïde et d\'un ovule → cellule-œuf (zygote) à 2n','La puberté','L\'ovulation'], correct:1, hint:'Fécondation → zygote (2n = 46) qui va se multiplier par mitose pour former l\'embryon.' },
      { key:'rep3-3', q:'Le sexe biologique humain est déterminé par :', options:['Les chromosomes sexuels XX (♀) ou XY (♂)','L\'environnement dans la petite enfance','La nourriture de la mère','Les autosomes uniquement'], correct:0, hint:'XX = sexe féminin, XY = sexe masculin. Le chromosome Y (apporté par le spermatozoïde du père) détermine le sexe mâle.' },
      { key:'rep3-4', q:'Les gamètes humains contiennent :', options:['46 chromosomes','23 chromosomes (n)','92 chromosomes','Aucun chromosome'], correct:1, hint:'Gamètes haploïdes (n = 23). Fusion ovule + spermatozoïde → zygote diploïde (2n = 46).' },
      { key:'rep3-5', q:'L\'ovule fécondé (zygote) se développe en embryon par :', options:['Méiose répétée','Mitoses successives','Division aléatoire','Sans aucune division'], correct:1, hint:'Après fécondation, le zygote se divise par mitoses successives : 2 → 4 → 8 → … cellules.' },
      { key:'rep3-6', q:'La méiose assure la diversité génétique grâce à :', options:['L\'absence de mutation','Des brassages chromosomiques (inter- et intra-chromosomiques)','La réplication identique','L\'absence de crossing-over'], correct:1, hint:'Brassages méiotiques : assortiment aléatoire des chromosomes + crossing-over → diversité des gamètes.' },
      { key:'rep3-7', q:'Chez la femme, l\'ovulation a lieu :', options:['Chaque jour','Environ au 14ᵉ jour d\'un cycle de 28 jours','À la ménopause uniquement','Jamais après 20 ans'], correct:1, hint:'L\'ovulation est déclenchée par un pic de LH. Elle marque le milieu du cycle.' },
      { key:'rep3-8', q:'Le placenta sert à :', options:['Protéger mécaniquement l\'utérus','Assurer les échanges entre la mère et le fœtus (nutriments, O₂, déchets)','Produire des gamètes','Déclencher l\'ovulation'], correct:1, hint:'Placenta : interface mère-fœtus. Pas de mélange direct des sangs mais passage par diffusion.' },
      { key:'rep3-9', q:'Les hormones sexuelles mâles/femelles sont :', options:['Insuline et glucagon','Testostérone (♂) et œstrogènes/progestérone (♀)','Adrénaline','Thyroxine'], correct:1, hint:'Testostérone produite par les testicules ; œstrogènes/progestérone par les ovaires.' },
      { key:'rep3-10', q:'La contraception hormonale (pilule) agit en :', options:['Tuant les spermatozoïdes','Bloquant l\'ovulation par des hormones de synthèse','Protégeant des IST','Stoppant le cycle définitivement'], correct:1, hint:'Pilule = hormones (œstrogènes + progestatifs synthétiques) → inhibition de l\'axe hypothalamo-hypophysaire → pas d\'ovulation.' },
      { key:'rep3-11', q:'Le nombre de chromosomes dans un spermatozoïde humain est :', options:['46','23','92','44'], correct:1, hint:'Les gamètes sont haploïdes (n = 23). Fécondation : 23 + 23 = 46 → diploïde.' },
      { key:'rep3-12', q:'La fécondation in vitro (FIV) consiste à :', options:['Féconder un ovule en dehors du corps puis le réimplanter dans l\'utérus','Féconder directement dans les trompes par une injection','Provoquer une ovulation multiple sans fécondation','Remplacer les gamètes par des cellules souches'], correct:0, hint:'FIV : ovule fécondé en laboratoire → embryon réimplanté dans l\'utérus. Solution à certaines infertilités.' },
    ],
    immunite: [
      { key:'imm3-1', q:'Les globules blancs sont :', options:['Des cellules immunitaires (leucocytes)','Des globules rouges blanchis','Des neurones','Des plaquettes'], correct:0, hint:'Leucocytes : défenseurs de l\'organisme (lymphocytes, phagocytes…).' },
      { key:'imm3-2', q:'La phagocytose est :', options:['La digestion d\'un microbe par un phagocyte (globule blanc)','La reproduction des bactéries','Une maladie virale','Rien de biologique'], correct:0, hint:'Phagocyte englobe puis digère l\'agent pathogène. 1ère ligne de défense.' },
      { key:'imm3-3', q:'Les anticorps sont produits par :', options:['Les lymphocytes B','Le foie uniquement','Les bactéries','Les plantes'], correct:0, hint:'Lymphocytes B → plasmocytes → anticorps spécifiques d\'un antigène.' },
      { key:'imm3-4', q:'Un vaccin apporte :', options:['Un agent pathogène tué/inactivé ou des fragments antigéniques','Des médicaments anti-bactériens','Un remède immédiat à la maladie','Des vitamines'], correct:0, hint:'Vaccin : le système immunitaire apprend à reconnaître un pathogène sans subir la maladie.' },
      { key:'imm3-5', q:'Le VIH attaque :', options:['Les os','Les lymphocytes T4 → immunodépression (SIDA)','Les poumons uniquement','Les yeux'], correct:1, hint:'VIH détruit les lymphocytes T4 → le système immunitaire s\'effondre → SIDA (infections opportunistes).' },
      { key:'imm3-6', q:'Les antibiotiques agissent contre :', options:['Les virus uniquement','Les bactéries uniquement','Les champignons','Tous les microbes sans distinction'], correct:1, hint:'Antibiotiques ≠ antiviraux. Contre les bactéries uniquement. Usage abusif → résistances.' },
      { key:'imm3-7', q:'Un vaccin ne fait pas effet immédiatement car :', options:['Il est trop lent à digérer','Le système immunitaire a besoin de quelques jours/semaines pour former des lymphocytes mémoire','Il n\'est jamais vraiment efficace','Il doit être digéré d\'abord'], correct:1, hint:'Les lymphocytes mémoire se forment en quelques jours/semaines. Lors d\'une 2ᵉ rencontre, réponse rapide.' },
      { key:'imm3-8', q:'Une allergie est :', options:['Une infection bactérienne','Une réaction immunitaire excessive contre un antigène inoffensif (allergène)','Un manque d\'anticorps','Une carence vitaminique'], correct:1, hint:'Allergie : réponse immune disproportionnée contre un allergène (pollen, arachides, acariens…).' },
      { key:'imm3-9', q:'La mémoire immunitaire explique :', options:['Que l\'on soit malade deux fois identiquement','Pourquoi une 2ᵉ infection par le même pathogène est combattue plus vite','L\'absence de réponse au vaccin','L\'immunodépression du VIH'], correct:1, hint:'Lymphocytes mémoire : reconnaissent rapidement l\'antigène lors d\'une 2ᵉ rencontre → réponse plus rapide et intense.' },
      { key:'imm3-10', q:'La réponse immunitaire adaptative (spécifique) repose sur :', options:['Les phagocytes uniquement','Les lymphocytes B (anticorps) et T (cellulaire), spécifiques à l\'antigène','Les globules rouges','La peau'], correct:1, hint:'Immunité adaptative : lymphocytes B → anticorps ; lymphocytes T → destruction directe des cellules infectées.' },
      { key:'imm3-11', q:'Les barrières naturelles de l\'organisme contre les microbes sont :', options:['Les os et les muscles','La peau (intacte) et les muqueuses (mucus, cils)','Les globules rouges','Les reins'], correct:1, hint:'1ère ligne de défense non spécifique : peau (barrière physique), muqueuses (mucus, cils, enzymes), acidité gastrique.' },
      { key:'imm3-12', q:'Une transfusion sanguine est possible uniquement si :', options:['Le donneur est plus grand que le receveur','Les groupes sanguins ABO (et Rhésus) sont compatibles','Le receveur a moins de 30 ans','Les deux individus ont le même ADN'], correct:1, hint:'Les antigènes de surface des globules rouges définissent le groupe sanguin. Incompatibilité → agglutination fatale.' },
    ],
    nerveux: [
      { key:'ner3-1', q:'Le neurone est :', options:['Une cellule du système nerveux qui transmet des signaux électriques','Un muscle involontaire','Un os','Un virus'], correct:0, hint:'Neurone : cellule qui transmet des signaux électriques (influx nerveux).' },
      { key:'ner3-2', q:'Le système nerveux central comprend :', options:['Uniquement le cerveau','L\'encéphale (cerveau + cervelet + tronc cérébral) et la moelle épinière','Les nerfs uniquement','Les muscles'], correct:1, hint:'SNC = encéphale + moelle épinière. SNP = nerfs qui relient le SNC aux organes.' },
      { key:'ner3-3', q:'Un réflexe est :', options:['Une action volontaire décidée par le cerveau','Une réponse automatique et rapide passant par la moelle épinière','Toujours lente à déclencher','Impossible en cas de douleur'], correct:1, hint:'Réflexe : pas passé par le cerveau, réponse immédiate. Ex. retirer main du feu.' },
      { key:'ner3-4', q:'Les drogues et l\'alcool agissent sur le système nerveux en :', options:['L\'améliorant à long terme','Perturbant la transmission des signaux nerveux (dépression, excitation)','Sans aucun effet mesurable','Renforçant définitivement les réflexes'], correct:1, hint:'Psychotropes modifient les neurotransmetteurs. À long terme : dépendance, lésions cérébrales.' },
      { key:'ner3-5', q:'La synapse est :', options:['Un os du crâne','La zone de communication entre deux neurones','Un muscle réflexe','Un organe sensoriel'], correct:1, hint:'Synapse : jonction entre deux neurones. Le signal chimique (neurotransmetteur) passe d\'un neurone à l\'autre.' },
      { key:'ner3-6', q:'Les organes des sens envoient l\'information au cerveau via :', options:['Le sang uniquement','Les nerfs sensitifs vers la moelle ou directement le cerveau','Les muscles','Les os'], correct:1, hint:'Voie afférente : récepteurs sensoriels → nerfs sensitifs → SNC → traitement de l\'information.' },
    ],
    evolution: [
      { key:'evo3-1', q:'La théorie de l\'évolution (Darwin) explique :', options:['La diversité des espèces par sélection naturelle','Que les espèces ne changent jamais','La disparition du Soleil','Les éruptions volcaniques'], correct:0, hint:'Variations + sélection naturelle → adaptation des espèces au fil des générations.' },
      { key:'evo3-2', q:'Les fossiles :', options:['Sont des inventions modernes','Sont des preuves de l\'évolution (espèces disparues ou intermédiaires)','N\'existent pas vraiment','Sont des jouets pédagogiques'], correct:1, hint:'Fossiles montrent que les espèces ont changé au cours des temps géologiques.' },
      { key:'evo3-3', q:'L\'être humain et le chimpanzé partagent :', options:['~30 % d\'ADN commun','~98-99 % d\'ADN commun','0 % d\'ADN commun','100 % d\'ADN commun'], correct:1, hint:'Humain-chimpanzé : ~98-99 % d\'ADN identique. Notre plus proche cousin vivant.' },
      { key:'evo3-4', q:'L\'évolution agit :', options:['En une seule génération','Sur de très longues durées par sélection naturelle (millions d\'années)','Par la volonté des animaux','Par des transformations instantanées'], correct:1, hint:'Temps géologique : millions-milliards d\'années. Les changements sont graduels (souvent).' },
      { key:'evo3-5', q:'La sélection naturelle favorise :', options:['Les plus grands uniquement','Les individus dont les variations les rendent plus aptes à se reproduire dans leur milieu','Tous les individus également','Les individus les plus anciens'], correct:1, hint:'Individus avec variations avantageuses → plus de descendants → caractères transmis à la génération suivante.' },
      { key:'evo3-6', q:'La résistance des bactéries aux antibiotiques est un exemple :', options:['De lamarckisme (transformation volontaire)','D\'évolution par sélection naturelle (survie des résistantes)','D\'une invention humaine','D\'une mutation impossible'], correct:1, hint:'Les bactéries résistantes survivent au traitement et se reproduisent → sélection de la résistance.' },
      { key:'evo3-7', q:'Un arbre phylogénétique représente :', options:['Les saisons','Les liens de parenté entre espèces et leur ancêtre commun','La météo','La géologie'], correct:1, hint:'Phylogénie : organisation des espèces selon leur degré de parenté et leur ancêtre commun.' },
      { key:'evo3-8', q:'Deux espèces proches ont :', options:['Un ancêtre commun récent','Rien à voir l\'une avec l\'autre','Obligatoirement la même taille','Le même nom scientifique'], correct:0, hint:'Proximité évolutive → ancêtre commun plus proche. Se lit sur un arbre phylogénétique.' },
      { key:'evo3-9', q:'Les organes vestigiaux (ex. coccyx humain) sont :', options:['Des organes parfaitement fonctionnels','Des vestiges d\'organes fonctionnels chez les ancêtres, preuve de l\'évolution','Des mutations récentes','Des organes propres à chaque individu'], correct:1, hint:'Coccyx = vestige de la queue de nos ancêtres. Ces organes réduits prouvent la parenté évolutive.' },
    ],
    risques: [
      { key:'ris3-1', q:'Un risque = :', options:['Aléa × vulnérabilité','Aléa seul','Vulnérabilité seule','La météo'], correct:0, hint:'Risque = probabilité × conséquences. Agir sur l\'un ou l\'autre pour réduire le risque.' },
      { key:'ris3-2', q:'Un séisme dégage de l\'énergie sous forme :', options:['D\'ondes sismiques','De chaleur uniquement','De vent','De pluie'], correct:0, hint:'Ondes P (compression, rapides), S (cisaillement), L (surface, les plus destructrices en surface).' },
      { key:'ris3-3', q:'Une éruption explosive est dangereuse à cause :', options:['De la lave fluide uniquement','Des nuées ardentes, bombes et cendres','De la pluie','De la neige'], correct:1, hint:'Nuées ardentes à > 500 °C, 100 km/h. Volcans type Vésuve, Montagne Pelée.' },
      { key:'ris3-4', q:'Pour réduire le risque sismique :', options:['Rien à faire','Normes parasismiques, plans d\'évacuation, surveillance sismologique','Interdire toute construction','Rester dehors tout le temps'], correct:1, hint:'Construire parasismique + préparation aux alertes + éducation = réduire la vulnérabilité.' },
      { key:'ris3-5', q:'En cas de séisme, il faut :', options:['Sortir vite en courant dehors','Se mettre sous une table solide ou un linteau, loin des vitres','Prendre un ascenseur','Courir dans la rue immédiatement'], correct:1, hint:'Consignes : se protéger la tête, rester à l\'abri, ne pas prendre les escaliers pendant les secousses.' },
      { key:'ris3-6', q:'La magnitude 7 sur l\'échelle de Richter est :', options:['Inoffensive','Un séisme majeur libérant une énergie immense','Une simple vibration imperceptible','Une mesure météo'], correct:1, hint:'Chaque degré = 32× plus d\'énergie. Magnitude 7 = séisme majeur (ex. Haïti 2010).' },
      { key:'ris3-7', q:'Un volcan de point chaud :', options:['Est aux limites de plaques','Est au-dessus d\'un panache mantellique sous la plaque','Est toujours explosif','Ne produit jamais de lave'], correct:1, hint:'Points chauds (ex. Hawaï, La Réunion) : panache de magma fixe, la plaque défile dessus → chapelet d\'îles.' },
      { key:'ris3-8', q:'L\'épicentre d\'un séisme est :', options:['Le point de rupture en profondeur (foyer)','Le point en surface directement au-dessus du foyer','La faille en surface','La chambre magmatique'], correct:1, hint:'Foyer (hypocentre) = point de rupture en profondeur. Épicentre = projection en surface. Les dégâts y sont maximaux.' },
      { key:'ris3-9', q:'La surveillance sismologique et volcanique sert à :', options:['Empêcher les éruptions et les séismes','Prévoir les risques et déclencher des alertes pour évacuer les populations','Provoquer des éruptions contrôlées','Mesurer la température des volcans uniquement'], correct:1, hint:'On ne peut pas empêcher ces phénomènes naturels, mais la surveillance permet de réduire la vulnérabilité humaine.' },
    ],
    climat: [
      { key:'cli3-1', q:'Les principaux gaz à effet de serre :', options:['O₂, N₂','CO₂, CH₄, vapeur d\'eau (H₂O), N₂O','Argon uniquement','Hélium'], correct:1, hint:'GES : dioxyde de carbone, méthane, vapeur d\'eau, protoxyde d\'azote.' },
      { key:'cli3-2', q:'Les activités humaines qui accroissent le CO₂ :', options:['La photosynthèse des forêts','Combustion des énergies fossiles, déforestation, élevage','La respiration des animaux','Les marées'], correct:1, hint:'Pétrole, charbon, gaz → CO₂. Élevage → CH₄. Déforestation → moins de puits de carbone.' },
      { key:'cli3-3', q:'Conséquences du réchauffement climatique :', options:['Rien de notable','Fonte des glaces, montée des mers, événements extrêmes, perte de biodiversité','Augmentation du rayonnement solaire','Plus d\'oxygène dans l\'air'], correct:1, hint:'Impacts multiples : écosystèmes, littoraux, agriculture, santé.' },
      { key:'cli3-4', q:'La biodiversité diminue actuellement à cause :', options:['D\'un cycle naturel lent et inévitable','Des activités humaines (habitat détruit, pollution, climat, espèces invasives)','D\'aucune cause connue','Des volcans uniquement'], correct:1, hint:'6ᵉ extinction de masse en cours, très rapide, causée principalement par l\'humain.' },
      { key:'cli3-5', q:'Si les glaciers continentaux fondent :', options:['Le niveau des mers baisse','Le niveau des mers monte','Rien ne change dans les océans','Il fait plus froid globalement'], correct:1, hint:'Eau libérée par la fonte des glaces terrestres + dilatation thermique de l\'eau → montée du niveau des océans.' },
      { key:'cli3-6', q:'L\'effet de serre est un phénomène :', options:['Uniquement néfaste','Naturel et indispensable (la Terre serait à -18 °C sans lui), amplifié par l\'humain','Qui n\'existe pas','Causé uniquement par le soleil'], correct:1, hint:'Effet de serre naturel → Terre habitable. Le problème = son amplification par les GES anthropiques.' },
      { key:'cli3-7', q:'La déforestation impacte le climat car :', options:['Les forêts réchauffent la planète','Les forêts absorbent du CO₂ ; les détruire réduit cette absorption et libère du carbone stocké','Les forêts produisent du méthane','Les forêts n\'ont aucun rôle climatique'], correct:1, hint:'Forêts tropicales = puits de carbone majeurs. Déforestation : double effet (émission + suppression du puits).' },
      { key:'cli3-8', q:'Pour réduire ses émissions de CO₂ personnellement :', options:['Aucune action individuelle n\'est possible','Moins de transports fossiles, alimentation moins carnée, sobriété énergétique','Manger plus de viande','Utiliser plus de plastique'], correct:1, hint:'Empreinte carbone individuelle : transports (avion, voiture), alimentation (viande), logement (chauffage).' },
      { key:'cli3-9', q:'L\'acidification des océans est due à :', options:['Une augmentation du sel dans l\'eau','L\'absorption de CO₂ atmosphérique par les océans → acide carbonique','Une diminution du plancton','La fonte des glaces polaires'], correct:1, hint:'CO₂ + H₂O → H₂CO₃ (acide carbonique) → baisse du pH océanique → dissolution des coquilles de coraux et mollusques.' },
    ],
    geologie: [
      { key:'geo3-1', q:'Les plaques tectoniques se déplacent :', options:['De quelques km/h','De quelques cm par an','Pas du tout','De km/seconde'], correct:1, hint:'Quelques cm/an, comme la pousse des ongles. Sur des millions d\'années = des milliers de km.' },
      { key:'geo3-2', q:'Aux zones de subduction, une plaque océanique :', options:['Remonte','Plonge sous une autre plaque (souvent continentale)','Disparaît par évaporation','Se dilate'], correct:1, hint:'Subduction : plaque océanique (dense) plonge dans le manteau → séismes profonds, volcans.' },
      { key:'geo3-3', q:'Les trois grands types de roches :', options:['Roches A, B, C','Magmatiques, sédimentaires, métamorphiques','Toutes uniques','Uniquement le sable'], correct:1, hint:'Magmatiques (refroidissement magma), sédimentaires (dépôts), métamorphiques (transformation sous pression/chaleur).' },
      { key:'geo3-4', q:'La houille (charbon) est une roche :', options:['Magmatique','Sédimentaire (d\'origine végétale, formée il y a des millions d\'années)','Métamorphique','Artificielle'], correct:1, hint:'Charbon = roche sédimentaire organique : végétaux enfouis, transformés sous pression et chaleur.' },
      { key:'geo3-5', q:'Le granite est une roche :', options:['Sédimentaire','Métamorphique','Magmatique plutonique (refroidissement lent en profondeur)','De surface volcanique'], correct:2, hint:'Granite = roche magmatique plutonique : refroidissement lent du magma en profondeur → gros cristaux visibles.' },
      { key:'geo3-6', q:'Le basalte se forme par :', options:['Dépôt de sédiments marins','Refroidissement rapide de la lave en surface (volcanique)','Métamorphisme','Dissolution chimique'], correct:1, hint:'Basalte = roche volcanique : refroidissement rapide → petits cristaux ou structure amorphe (verre volcanique).' },
      { key:'geo3-7', q:'Les dorsales océaniques se trouvent :', options:['Au centre des continents','Au fond des océans, là où les plaques divergent','Aux zones de subduction','Aux points chauds uniquement'], correct:1, hint:'Dorsales = chaînes de montagnes sous-marines, zones de divergence. Ex. dorsale médio-atlantique.' },
      { key:'geo3-8', q:'Le cycle des roches montre que :', options:['Les roches sont immuables','Les roches peuvent se transformer les unes en les autres au cours du temps géologique','Les roches se forment uniquement en surface','Seules les roches sédimentaires existent'], correct:1, hint:'Magmatiques → érodées → sédimentaires → métamorphisme → fondues → magmatiques… cycle continu.' },
      { key:'geo3-9', q:'Le métamorphisme est :', options:['La fusion totale des roches','La transformation d\'une roche sous l\'effet de hautes pressions et températures, sans fusion','La formation de sédiments','L\'érosion par l\'eau'], correct:1, hint:'Métamorphisme : roche transformée en profondeur (pression + chaleur) sans fondre. Ex. schiste → gneiss.' },
    ],
  },
  PICK: {
    genetique: 4, cellule: 4, reproduction: 4, immunite: 4, nerveux: 2,
    evolution: 3, risques: 3, climat: 3, geologie: 3,
  },
  PLANS: {
    genetique: {
      'non-acquis': ['ADN → chromosomes → gènes → protéines', '46 chromosomes humains (23 paires)', 'Allèles : versions d\'un gène'],
      'fragile':    ['Exercice : lire un caryotype ; distinguer phénotype et génotype']
    },
    cellule: {
      'non-acquis': ['Mitose : 1 cellule → 2 cellules identiques', 'Méiose : 1 cellule → 4 gamètes à n chromosomes', 'Réplication avant division'],
      'fragile':    ['Étapes détaillées du cycle cellulaire ; n haploïde vs 2n diploïde']
    },
    reproduction: {
      'non-acquis': ['Fécondation = ovule (n) + spermatozoïde (n) → zygote (2n)', 'Chromosomes sexuels XX/XY', 'Hormones : testostérone, œstrogènes, progestérone'],
      'fragile':    ['Développement embryonnaire ; brassages méiotiques et diversité génétique']
    },
    immunite: {
      'non-acquis': ['PRIORITÉ BREVET : phagocytose + anticorps (lymphocytes B)', 'Vaccination = mémoire immunitaire sans maladie', 'VIH attaque les lymphocytes T → SIDA'],
      'fragile':    ['Antibiotiques = contre bactéries, pas contre virus ; allergie = réaction excessive']
    },
    nerveux: {
      'non-acquis': ['Neurone = cellule spécialisée du système nerveux', 'Cerveau + moelle épinière + nerfs', 'Réflexe vs action volontaire'],
      'fragile':    ['Synapse : communication chimique entre neurones']
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
      'fragile':    ['Reconnaître un type de roche à partir de sa description']
    },
  },
};
