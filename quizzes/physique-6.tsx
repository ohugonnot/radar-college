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
      { key:'eta-2', q:'Un liquide versé dans un récipient :', options:['Garde sa forme initiale','Prend la forme du récipient mais conserve son volume','Occupe tout le volume du récipient','Disparaît'], correct:1, hint:'Liquide : volume fixe, forme variable selon le contenant.' },
      { key:'eta-3', q:'La glace est de l\'eau à l\'état :', options:['Gazeux','Liquide','Solide','Aucun des trois'], correct:2, hint:'Glace = eau solide (en-dessous de 0 °C).' },
      { key:'eta-4', q:'Un gaz occupe :', options:['Un volume fixe','Un volume et une forme propres','Tout le volume disponible dans le contenant','La moitié du récipient'], correct:2, hint:'Un gaz se répand et occupe tout le volume du contenant.' },
      { key:'eta-5', q:<>De l\'eau dans un verre à l\'air libre. Au bout d\'une semaine :</>, options:['Rien ne change','Elle gèle','Une partie s\'évapore','Elle se transforme en lait'], correct:2, hint:'Évaporation lente, même en-dessous de 100 °C.' },
      { key:'eta-6', q:<>Le brouillard est composé :</>, options:['De vapeur d\'eau invisible','De minuscules gouttelettes d\'eau en suspension','De glace','De fumée'], correct:1, hint:'Comme les nuages : gouttelettes d\'eau liquide visibles.' },
      { key:'eta-7', q:'Un solide a :', options:['Un volume et une forme variables','Un volume fixe et une forme propre','Un volume variable et une forme fixe','Ni forme ni volume définis'], correct:1, hint:'Solide : forme et volume propres, il ne se déforme pas seul.' },
      { key:'eta-8', q:'L\'oxygène que nous respirons est normalement à l\'état :', options:['Solide','Liquide','Gazeux','Aucun des trois'], correct:2, hint:'À température ambiante, O₂ est un gaz (il se liquéfie à −183 °C).' },
      { key:'eta-9', q:'La vapeur d\'eau est de l\'eau à l\'état :', options:['Solide','Liquide','Gazeux','Mélangée à de l\'air'], correct:2, hint:'Vapeur = eau gazifiée (> 100 °C à pression normale, ou par évaporation lente).' },
      { key:'eta-10', q:'Dans quel état de la matière les molécules sont-elles les plus éloignées les unes des autres ?', options:['Solide','Liquide','Gazeux','Cela ne dépend pas de l\'état'], correct:2, hint:'Dans un gaz, les molécules sont très espacées et se déplacent librement dans tout le volume.' },
      { key:'eta-11', q:'Lequel de ces objets change d\'état à température ambiante si on le chauffe à 100 °C ?', options:['Un clou en fer','L\'eau liquide','Un bloc de bois','Une pierre'], correct:1, hint:'L\'eau bout à 100 °C → passage à l\'état gazeux (vapeur). Les autres nécessitent des températures bien plus élevées.' },
      { key:'eta-12', q:'Quel changement d\'état correspond à « solide → liquide » ?', options:['Vaporisation','Solidification','Fusion','Condensation'], correct:2, hint:'Fusion = solide → liquide (glace → eau). L\'inverse s\'appelle solidification.' },
      { key:'eta-13', q:'Lequel de ces éléments est normalement à l\'état gazeux à température ambiante ?', options:['Le fer','L\'eau','Le dioxygène (O₂)','Le plomb'], correct:2, hint:'O₂ est un gaz à température ambiante. Fer et plomb sont des solides, l\'eau est liquide.' },
      { key:'eta-14', q:'Comment s\'appelle le changement d\'état gaz → solide (sans passer par l\'état liquide) ?', options:['Condensation','Solidification','Sublimation','Givre / condensation solide'], correct:3, hint:'Gaz → solide directement = condensation solide (ou givrage). Sublimation = solide → gaz.' },
      { key:'eta-15', q:'Dans un solide, les molécules :', options:['Se déplacent librement et rapidement','Sont proches et vibrent sur place','Sont très éloignées les unes des autres','N\'ont pas de position définie'], correct:1, hint:'Solide : molécules liées, elles vibrent autour d\'une position fixe → forme et volume propres.' },
      { key:'eta-16', q:'Une bougie qui fond libère sa cire à l\'état :', options:['Gazeux','Liquide','Solide','Plasma'], correct:1, hint:'La cire passe de l\'état solide à l\'état liquide (fusion) sous l\'effet de la chaleur.' },
      { key:'eta-17', q:'La solidification de l\'eau se produit à quelle température (pression normale) ?', options:['−10 °C','0 °C','4 °C','100 °C'], correct:1, hint:'L\'eau se solidifie (gèle) à 0 °C. Au-dessous de 0 °C, l\'eau est déjà glace.' },
      { key:'eta-18', q:'Parmi ces substances, laquelle est liquide à température ambiante (~20 °C) ?', options:['Le cuivre','La glace','Le mercure','Le bois'], correct:2, hint:'Le mercure (Hg) est un métal liquide à température ambiante (fond à −39 °C).' },
    ],
    melanges: [
      { key:'mel-1', q:'Un mélange homogène est :', options:['On voit plusieurs constituants','On ne distingue pas les constituants à l\'œil nu','Toujours coloré','Impossible à obtenir'], correct:1, hint:'Homogène = un seul aspect (ex. eau salée). Hétérogène = plusieurs (ex. eau + huile).' },
      { key:'mel-2', q:'Quand on dissout du sel dans l\'eau, la masse totale :', options:['Augmente','Diminue','Reste la même (conservation)','Disparaît'], correct:2, hint:'La matière ne disparaît pas : conservation de la masse.' },
      { key:'mel-3', q:'L\'eau et l\'huile forment un mélange :', options:['Homogène','Hétérogène','Pur','Solide'], correct:1, hint:'L\'huile ne se mélange pas à l\'eau : deux couches distinctes = hétérogène.' },
      { key:'mel-4', q:'Pour séparer le sable de l\'eau, on peut utiliser :', options:['Filtration','Dissolution','Chauffage uniquement','Aucune méthode'], correct:0, hint:'Filtre : laisse passer l\'eau et retient le sable.' },
      { key:'mel-5', q:<>Comment séparer le sel de l\'eau salée ?</>, options:['Par filtration','Par évaporation de l\'eau','Par aimantation','On ne peut pas'], correct:1, hint:'L\'eau s\'évapore, le sel reste. Filtration ne marche pas car sel dissous.' },
      { key:'mel-6', q:'Le corps pur est une substance :', options:['Qui contient un seul type de molécules','Colorée','Toujours liquide','Impossible à trouver dans la nature'], correct:0, hint:'Corps pur = une seule espèce chimique (ex. eau distillée, or pur). Un mélange en contient plusieurs.' },
      { key:'mel-7', q:'La solubilité d\'un solide dans l\'eau correspond à :', options:['Sa capacité à se dissoudre dans l\'eau','Sa masse','Sa couleur','Sa taille'], correct:0, hint:'Soluble = se dissout bien. Insoluble = ne se dissout pas (ex. sable dans l\'eau).' },
      { key:'mel-8', q:'On veut séparer de la limaille de fer du sable. On peut utiliser :', options:['La filtration','Un aimant','L\'évaporation','La dissolution'], correct:1, hint:'Le fer est magnétique : un aimant attire la limaille mais pas le sable.' },
      { key:'mel-9', q:'L\'eau de mer est :', options:['Un corps pur','Un mélange homogène','Un mélange hétérogène','De la vapeur d\'eau'], correct:1, hint:'Eau de mer = eau + sel dissous + minéraux. Homogène car on ne distingue pas les constituants.' },
      { key:'mel-10', q:'La décantation permet de séparer :', options:['Un solide dissous d\'un liquide','Un solide non dissous d\'un liquide (par gravité)','Deux liquides miscibles','Un gaz d\'un liquide'], correct:1, hint:'Décantation : on laisse les particules solides se déposer au fond par leur poids.' },
      { key:'mel-11', q:'Le lait est un mélange :', options:['Homogène à l\'œil nu','Hétérogène à l\'œil nu','Un corps pur','Solide'], correct:0, hint:'Homogène à l\'œil nu mais hétérogène au microscope (émulsion).' },
      { key:'mel-12', q:'Pour séparer du sable (non dissous) et de l\'eau, on peut utiliser :', options:['L\'évaporation','La filtration','Un aimant','La dissolution'], correct:1, hint:'Le sable n\'est pas dissous → on peut le retenir avec un filtre. L\'évaporation séparerait un soluté dissous.' },
      { key:'mel-13', q:'Le sirop de grenadine mélangé à l\'eau donne :', options:['Un mélange hétérogène (deux couches)','Un mélange homogène (solution)','Un corps pur','Un gaz'], correct:1, hint:'La grenadine se dissout dans l\'eau → mélange homogène (on ne distingue pas les constituants).' },
      { key:'mel-14', q:'Qu\'est-ce qu\'un soluté ?', options:['Le liquide dans lequel on dissout','La substance qu\'on dissout','Un mélange hétérogène','Un corps pur'], correct:1, hint:'Soluté = ce qu\'on dissout (ex. sel). Solvant = le liquide (ex. eau). Solution = soluté + solvant.' },
      { key:'mel-15', q:'On agite de l\'eau et de l\'huile. Que se passe-t-il ?', options:['Ils se mélangent définitivement (miscibles)','Ils se séparent à nouveau en deux couches (non miscibles)','Ils forment un corps pur','Ils disparaissent'], correct:1, hint:'L\'huile et l\'eau ne sont pas miscibles : elles se séparent, l\'huile (moins dense) reste en haut.' },
      { key:'mel-16', q:'Pour séparer le sel dissous dans l\'eau salée, on peut :', options:['Utiliser un filtre','Utiliser un aimant','Faire évaporer l\'eau','Agiter plus fort'], correct:2, hint:'Le sel dissous passe à travers un filtre. Il faut faire évaporer l\'eau pour récupérer le sel.' },
      { key:'mel-17', q:'L\'eau sucrée (eau + sucre dissous) est :', options:['Un corps pur','Un mélange hétérogène','Un mélange homogène','Un gaz'], correct:2, hint:'Sucre + eau = solution (homogène) : on ne distingue pas les constituants une fois le sucre dissous.' },
      { key:'mel-18', q:'Qu\'est-ce que la miscibilité ?', options:['La capacité à se dissoudre dans un solvant','La capacité de deux liquides à se mélanger uniformément','La masse d\'un soluté','La couleur d\'une solution'], correct:1, hint:'Miscibles = se mélangent (eau + alcool). Non miscibles = ne se mélangent pas (eau + huile).' },
    ],
    temperature: [
      { key:'tem-1', q:'La glace fond à :', options:['0 °C','100 °C','20 °C','−10 °C'], correct:0, hint:'Fusion de la glace à 0 °C (pression normale).' },
      { key:'tem-2', q:'L\'eau bout à :', options:['50 °C','100 °C','200 °C','0 °C'], correct:1, hint:'Vaporisation de l\'eau à 100 °C (pression atmosphérique normale).' },
      { key:'tem-3', q:'Le passage de l\'état liquide à solide s\'appelle :', options:['Fusion','Solidification','Vaporisation','Condensation'], correct:1, hint:'Liquide → solide = solidification (inverse : fusion).' },
      { key:'tem-4', q:'L\'instrument pour mesurer la température :', options:['La balance','Le thermomètre','Le chronomètre','La règle'], correct:1, hint:'Thermomètre (°C).' },
      { key:'tem-5', q:<>Par une nuit d\'hiver, un thermomètre indique −5 °C. Cette température est :</>, options:['Supérieure à 0 °C','Inférieure à 0 °C (froid)','Égale à 0 °C','Non mesurable'], correct:1, hint:'−5 < 0, donc en dessous de 0 : il peut geler.' },
      { key:'tem-6', q:'Lors de la fusion de la glace, la température :', options:['Augmente progressivement','Reste constante à 0 °C','Descend en dessous de 0 °C','Atteint 100 °C'], correct:1, hint:'Pendant un changement d\'état, la température reste CONSTANTE tant que les deux états coexistent.' },
      { key:'tem-7', q:'Le passage de l\'état gazeux à l\'état liquide s\'appelle :', options:['Fusion','Solidification','Vaporisation','Condensation (liquéfaction)'], correct:3, hint:'Gaz → liquide = condensation ou liquéfaction (inverse de la vaporisation).' },
      { key:'tem-8', q:'La sublimation, c\'est le passage :', options:['Solide → liquide','Liquide → gaz','Solide → gaz directement','Gaz → solide'], correct:2, hint:'Sublimation = solide → gaz sans passer par l\'état liquide (ex. neige carbonique).' },
      { key:'tem-9', q:'L\'unité officielle de température dans le système international est :', options:['Le degré Celsius (°C)','Le kelvin (K)','Le degré Fahrenheit (°F)','Le degré absolu'], correct:1, hint:'SI : kelvin (K). Mais en France on utilise le °C au quotidien (0 °C = 273 K).' },
      // Générateur : conversion °C ↔ K (0 °C = 273 K)
      { key:'tem-10', gen: (rnd) => {
        // Choisir entre conversion C→K ou K→C
        const mode = Math.floor(rnd() * 2); // 0 = C→K, 1 = K→C
        // Températures Celsius sympas : multiples de 5 dans [-20, 100]
        const cVals = [-20,-10,-5,0,5,10,15,20,25,30,40,50,60,80,100];
        const cIdx = Math.floor(rnd() * cVals.length);
        const celsius = cVals[cIdx];
        const kelvin = celsius + 273;
        if (mode === 0) {
          // C → K
          const d1 = celsius + 100;
          const d2 = celsius - 273;
          const d3 = kelvin + 10;
          return {
            q: <>{celsius} °C correspond à combien de kelvins ?</>,
            options: [`${kelvin} K`, `${d1} K`, `${d2} K`, `${d3} K`],
            correct: 0,
            hint: `T(K) = T(°C) + 273 = ${celsius} + 273 = ${kelvin} K.`,
          };
        } else {
          // K → C
          const d1 = kelvin + 273;
          const d2 = kelvin - 100;
          const d3 = celsius + 10;
          return {
            q: <>{kelvin} K correspond à combien de degrés Celsius ?</>,
            options: [`${celsius} °C`, `${d1} °C`, `${d2} °C`, `${d3} °C`],
            correct: 0,
            hint: `T(°C) = T(K) − 273 = ${kelvin} − 273 = ${celsius} °C.`,
          };
        }
      } },
      { key:'tem-11', q:'Le passage de l\'état gazeux à l\'état liquide s\'appelle :', options:['Fusion','Vaporisation','Condensation (liquéfaction)','Sublimation'], correct:2, hint:'Gaz → liquide = condensation. Ex. buée sur un miroir froid = vapeur d\'eau qui se condense.' },
      { key:'tem-12', q:'On chauffe de la glace à −10 °C. Dans quel ordre se produisent les changements d\'état ?', options:['Vaporisation puis fusion','Fusion à 0 °C puis vaporisation à 100 °C','Solidification puis condensation','Les deux en même temps'], correct:1, hint:'Avec l\'apport de chaleur : glace fond à 0 °C (fusion), l\'eau bout à 100 °C (vaporisation).' },
      { key:'tem-13', q:'Pendant un changement d\'état (ex. fusion de la glace à 0 °C), la température :', options:['Monte régulièrement','Descend','Reste constante tant que les deux états coexistent','Fluctue aléatoirement'], correct:2, hint:'Palier de changement d\'état : l\'énergie apportée sert au changement d\'état, pas à augmenter la température.' },
    ],
    lumiere: [
      { key:'lum-1', q:'Une source primaire de lumière :', options:['Produit sa propre lumière','Reflète seulement la lumière','Est toujours bleue','Est invisible'], correct:0, hint:'Soleil, lampe = sources primaires. Lune, miroir = sources secondaires (diffusent).' },
      { key:'lum-2', q:'Parmi ces objets, lequel est une source SECONDAIRE de lumière ?', options:['Le Soleil','Une ampoule allumée','La Lune','Une bougie'], correct:2, hint:'La Lune reflète la lumière du Soleil, elle ne la produit pas.' },
      { key:'lum-3', q:'La lumière se propage dans un milieu transparent :', options:['En zigzag','En ligne droite','En cercles','En spirales'], correct:1, hint:'Propagation rectiligne dans un milieu homogène et transparent.' },
      { key:'lum-4', q:'Un objet opaque :', options:['Laisse passer toute la lumière','Laisse passer une partie de la lumière','Ne laisse pas passer la lumière','Produit de la lumière'], correct:2, hint:'Opaque = bloque la lumière. Transparent = la laisse passer. Translucide = laisse passer partiellement.' },
      { key:'lum-5', q:'La lumière du Soleil met environ combien de temps pour arriver sur Terre ?', options:['1 seconde','8 minutes','1 heure','1 an'], correct:1, hint:'Distance Terre-Soleil ≈ 150 millions de km. Lumière à 300 000 km/s → ~8 min.' },
      { key:'lum-6', q:'On voit un objet non lumineux parce que :', options:['Il produit de la lumière','Il diffuse la lumière qu\'il reçoit vers notre œil','Il absorbe toute la lumière','Il crée de l\'ombre'], correct:1, hint:'Vision : lumière de la source → objet → diffuse vers l\'œil.' },
      { key:'lum-7', q:'L\'ombre d\'un objet se forme :', options:['Devant l\'objet (côté source)','Derrière l\'objet (côté opposé à la source)','Sur les côtés uniquement','Il n\'y a pas d\'ombre'], correct:1, hint:'L\'objet opaque bloque la lumière : zone non éclairée derrière lui = ombre.' },
      { key:'lum-8', q:'La vitesse de la lumière dans le vide est d\'environ :', options:['340 m/s','300 000 km/h','300 000 km/s','1000 km/s'], correct:2, hint:'c ≈ 300 000 km/s = 3 × 10⁸ m/s. Beaucoup plus rapide que le son (340 m/s).' },
      { key:'lum-9', q:'Un verre dépoli (translucide) :', options:['Bloque totalement la lumière','Laisse passer la lumière sans qu\'on distingue les formes derrière','Laisse tout voir clairement','Produit sa propre lumière'], correct:1, hint:'Translucide = laisse passer la lumière mais diffuse (on ne voit pas nettement). Ex. verre de salle de bain.' },
    ],
    son: [
      { key:'son-1', q:'Un son est produit par :', options:['La lumière','Une vibration','La chaleur','L\'odeur'], correct:1, hint:'Tout son provient d\'une vibration (corde, haut-parleur…).' },
      { key:'son-2', q:'Dans le vide, le son :', options:['Se propage mieux','Ne se propage pas','Devient lumière','Va très vite'], correct:1, hint:'Le son a besoin de matière pour se propager. Dans le vide : rien n\'entend.' },
      { key:'son-3', q:'La vitesse du son dans l\'air est environ :', options:['300 000 km/s','340 m/s','3 m/s','1 km/h'], correct:1, hint:'Son : ~340 m/s. Bien plus lent que la lumière (300 000 km/s).' },
      { key:'son-4', q:'L\'écho est dû à :', options:['La réflexion du son sur une surface','La lumière','Le vent','La chaleur'], correct:0, hint:'Le son se réfléchit sur les obstacles (mur, falaise) → on entend le même son avec un décalage.' },
      { key:'son-5', q:<>Dans l\'espace (vide), un astronaute peut-il entendre un autre astronaute parler ?</>, options:['Oui directement','Non, le son ne se propage pas dans le vide','Oui mais faiblement','Seulement près de la Terre'], correct:1, hint:'Pas d\'air = pas de vibrations = pas de son. Ils communiquent par radio.' },
      { key:'son-6', q:'Un son aigu (flûte) a :', options:['Une fréquence basse','Une fréquence élevée','Aucune fréquence','Une amplitude nulle'], correct:1, hint:'Plus la fréquence est élevée, plus le son est aigu. Grave = fréquence basse.' },
      { key:'son-7', q:'Un son fort (fort volume) a :', options:['Une amplitude élevée','Une fréquence élevée','Une vitesse élevée','Une longueur d\'onde nulle'], correct:0, hint:'L\'amplitude de la vibration détermine l\'intensité (fort/faible). La fréquence → grave/aigu.' },
      { key:'son-8', q:'Le son se propage plus vite dans :', options:['Le vide','L\'air','L\'eau','Les solides comme l\'acier'], correct:3, hint:'Solide > liquide > gaz pour la vitesse du son. Dans l\'acier : ~5000 m/s.' },
      { key:'son-9', q:'Les nuisances sonores peuvent provoquer :', options:['Une meilleure vision','Des troubles de l\'audition','Un refroidissement','De la lumière'], correct:1, hint:'Bruit excessif → surdité partielle ou totale. Protection : bouchons, casques.' },
      { key:'son-10', q:'La limite de l\'audition humaine est environ :', options:['20 Hz à 20 kHz','0 Hz à 100 Hz','1 kHz à 100 kHz','200 Hz à 2000 Hz'], correct:0, hint:'Humain : 20 Hz (infra grave) à 20 kHz (ultrasons). Chiens et chats entendent plus haut.' },
      // Générateur : distance parcourue par le son (d = v × t, v = 340 m/s)
      { key:'son-11', gen: (rnd) => {
        const mode = Math.floor(rnd() * 2);
        if (mode === 0) {
          // d = v × t dans l'air (340 m/s)
          const t = 1 + Math.floor(rnd() * 20); // 1..20 s
          const v = 340;
          const d = v * t;
          const d1 = 300 * t;
          const d2 = d + 340;
          const d3 = d - 340;
          const used = new Set([d]);
          const safe = [d1, d2, d3].map(x => { while (used.has(x) || x <= 0) x += 17; used.add(x); return x; });
          return {
            q: <>Le son se propage à 340 m/s dans l'air. En {t} s, il parcourt :</>,
            options: [`${d} m`, `${safe[0]} m`, `${safe[1]} m`, `${safe[2]} m`], correct: 0,
            hint: `d = v × t = 340 × ${t} = ${d} m.`,
          };
        } else {
          // Calcul du temps à partir de la distance
          const t = 1 + Math.floor(rnd() * 15); // 1..15 s
          const d = 340 * t;
          const d1 = t + 1;
          const d2 = t * 2;
          const d3 = Math.max(1, t - 1);
          const used = new Set([t]);
          const safe = [d1, d2, d3].map(x => { while (used.has(x) || x <= 0) x++; used.add(x); return x; });
          return {
            q: <>Un son parcourt {d} m dans l'air (340 m/s). Durée du trajet :</>,
            options: [`${t} s`, `${safe[0]} s`, `${safe[1]} s`, `${safe[2]} s`], correct: 0,
            hint: `t = d / v = ${d} / 340 = ${t} s.`,
          };
        }
      } },
    ],
    electricite: [
      { key:'ele-1', q:'Pour qu\'une lampe s\'allume, il faut :', options:['Un circuit ouvert','Un circuit fermé avec une pile','Un fil coupé','Rien du tout'], correct:1, hint:'Circuit fermé = boucle complète avec générateur.' },
      { key:'ele-2', q:'Un interrupteur ouvert :', options:['Ferme le circuit','Interrompt le courant (circuit ouvert)','Fait briller la lampe','Double la tension'], correct:1, hint:'Interrupteur ouvert = circuit ouvert = courant interrompu.' },
      { key:'ele-3', q:'Les éléments de base d\'un circuit simple :', options:['Pile, fils, récepteur','Eau, air, feu','Moteur, volant','Livre, stylo'], correct:0, hint:'Générateur (pile) + fils conducteurs + récepteurs (lampe, moteur).' },
      { key:'ele-4', q:'Un court-circuit :', options:['Est sans danger','Peut endommager la pile et chauffer les fils','Augmente toujours la lumière','Est nécessaire'], correct:1, hint:'Court-circuit = fort courant = surchauffe, danger.' },
      { key:'ele-5', q:<>Pour tester si un objet conduit l\'électricité, on :</>, options:['Le chauffe','L\'intègre à un circuit : si la lampe s\'allume, c\'est conducteur','Le pèse','Le regarde'], correct:1, hint:'Intégrer dans le circuit entre 2 fils : si courant passe = conducteur.' },
      { key:'ele-6', q:'Parmi ces matériaux, lequel est conducteur de l\'électricité ?', options:['Plastique','Bois sec','Cuivre','Verre'], correct:2, hint:'Métaux (cuivre, aluminium, fer…) conduisent l\'électricité. Plastique, bois, verre = isolants.' },
      { key:'ele-7', q:'Parmi ces matériaux, lequel est isolant électrique ?', options:['Aluminium','Fer','Eau salée','Caoutchouc'], correct:3, hint:'Isolants : plastique, caoutchouc, verre, bois sec. Conducteurs : métaux, eau salée, graphite.' },
      { key:'ele-8', q:'Le sens conventionnel du courant électrique va :', options:['Du pôle − vers le pôle + dans le circuit','Du pôle + vers le pôle − dans le circuit extérieur','Dans les deux sens à la fois','Il n\'y a pas de sens'], correct:1, hint:'Convention : courant circule du + vers le − hors pile (sens électrons : inverse).' },
      { key:'ele-9', q:'Un schéma de circuit représente une lampe par :', options:['Un cercle barré d\'une croix','Un rectangle','Un trait simple','Un triangle'], correct:0, hint:'Symbole normalisé : cercle avec une croix (résistance + source lumineuse).' },
      { key:'ele-10', q:'Deux lampes branchées l\'une après l\'autre dans le même fil forment un circuit :', options:['En dérivation','En série','Mixte','Pas de circuit'], correct:1, hint:'Série = un seul chemin, les composants se suivent. Dérivation = plusieurs chemins.' },
      { key:'ele-11', q:'Si on coupe un fil dans un circuit en série :', options:['Seul l\'appareil le plus proche s\'éteint','Tout le circuit s\'éteint','Rien ne change','Le courant double'], correct:1, hint:'En série, un seul chemin : couper le fil = ouvrir le circuit = plus rien ne fonctionne.' },
      { key:'ele-12', q:'Le symbole d\'une pile sur un schéma de circuit est :', options:['Un trait horizontal','Deux barres parallèles de longueur inégale (une longue + et une courte −)','Un rectangle','Un cercle'], correct:1, hint:'Symbole normalisé : barre longue = pôle + ; barre courte = pôle −.' },
      { key:'ele-13', q:'L\'eau pure est-elle conductrice de l\'électricité ?', options:['Oui, toujours','Non, l\'eau pure est isolante ; c\'est l\'eau salée qui conduit','Oui, mais seulement si chauffée','Ça dépend de la couleur'], correct:1, hint:'Eau pure (distillée) = isolante. Les ions dissous (sel, minéraux) rendent l\'eau conductrice.' },
      { key:'ele-14', q:'Dans un circuit, le rôle des fils conducteurs est :', options:['Résister au courant','Stocker l\'énergie','Permettre au courant de circuler','Allumer les lampes eux-mêmes'], correct:2, hint:'Les fils relient les composants et permettent la circulation du courant (résistance quasi nulle).' },
      { key:'ele-15', q:'Pour éviter les accidents électriques avec les prises, on doit :', options:['Y enfoncer des objets métalliques','Utiliser des caches-prises et ne pas les manipuler avec les mains mouillées','Les nettoyer avec de l\'eau','Les laisser toujours ouvertes'], correct:1, hint:'Règles de sécurité : mains sèches, caches-prises, ne pas insérer d\'objets dans les prises.' },
      { key:'ele-16', q:'Dans un circuit en dérivation, deux branches ont chacune une lampe. Si on éteint une lampe (interrupteur ouvert dans sa branche) :', options:['L\'autre lampe s\'éteint aussi','L\'autre lampe continue de briller','La pile se décharge immédiatement','Le courant total devient nul'], correct:1, hint:'Dérivation = branches indépendantes. Une branche ouverte n\'empêche pas les autres de fonctionner.' },
      { key:'ele-17', q:'Lequel de ces objets est un récepteur électrique ?', options:['Une pile','Un fil de cuivre','Un interrupteur','Un moteur électrique'], correct:3, hint:'Récepteur = utilise l\'énergie électrique (lampe, moteur, résistance). Pile = générateur. Fil = conducteur.' },
    ],
    astronomie: [
      { key:'ast-1', q:'La Terre tourne autour :', options:['De la Lune','Du Soleil','D\'Uranus','D\'elle-même uniquement'], correct:1, hint:'Révolution Terre autour du Soleil en 1 an. Rotation sur elle-même en 24 h.' },
      { key:'ast-2', q:'Une année, c\'est le temps pour que la Terre :', options:['Tourne une fois sur elle-même','Fasse un tour autour du Soleil','Change de saison','Fasse le tour de la Lune'], correct:1, hint:'1 an = 1 tour complet autour du Soleil.' },
      { key:'ast-3', q:'Les saisons sont dues :', options:['À la distance Terre-Soleil','À l\'inclinaison de l\'axe de rotation de la Terre','À la Lune','Au vent'], correct:1, hint:'L\'axe terrestre est incliné de 23°. C\'est pour ça qu\'on a des saisons différentes en hémisphère N et S.' },
      { key:'ast-4', q:'La Lune tourne autour de :', options:['Du Soleil directement','De la Terre','De Mars','Rien'], correct:1, hint:'La Lune est un satellite naturel de la Terre (révolution en ~27 jours).' },
      { key:'ast-5', q:<>La Terre fait un tour sur elle-même en :</>, options:['1 heure','24 heures','1 an','1 mois'], correct:1, hint:'Rotation Terre = 24 h (jour/nuit).' },
      { key:'ast-6', q:'Le Soleil est :', options:['Une planète','Une lune','Une étoile','Un astéroïde'], correct:2, hint:'Le Soleil est une étoile (naine jaune), à ~150 millions de km de la Terre.' },
      { key:'ast-7', q:'L\'alternance jour/nuit est due :', options:['À la révolution de la Terre autour du Soleil','À la rotation de la Terre sur elle-même','Aux nuages','À la Lune'], correct:1, hint:'Rotation propre de la Terre (24 h) : côté face au Soleil = jour, côté opposé = nuit.' },
      { key:'ast-8', q:'Combien de temps la Lune met-elle pour faire un tour autour de la Terre ?', options:['24 heures','1 semaine','Environ 1 mois (27 jours)','1 an'], correct:2, hint:'Révolution lunaire ≈ 27 jours (c\'est aussi la période de rotation de la Lune sur elle-même).' },
      { key:'ast-9', q:'Pourquoi voit-on la Lune briller la nuit ?', options:['Elle produit sa propre lumière','Elle reflète la lumière du Soleil','Elle est radioactive','Elle absorbe la chaleur'], correct:1, hint:'La Lune est une source secondaire : elle diffuse la lumière reçue du Soleil.' },
      // Générateur : durées de révolution des planètes
      { key:'ast-10', gen: (rnd) => {
        // Pool étendu : planètes + durées diverses
        const astres = [
          { name:'Mercure', texte:'88 jours', mauvais:['225 jours','365 jours','44 jours'] },
          { name:'Vénus',   texte:'225 jours', mauvais:['88 jours','365 jours','450 jours'] },
          { name:'Mars',    texte:'687 jours (≈ 2 ans)', mauvais:['365 jours','1000 jours','350 jours'] },
          { name:'Jupiter', texte:'environ 12 ans', mauvais:['6 ans','24 ans','4 ans'] },
          { name:'Saturne', texte:'environ 29 ans', mauvais:['12 ans','60 ans','15 ans'] },
          { name:'Uranus',  texte:'environ 84 ans', mauvais:['29 ans','168 ans','42 ans'] },
          { name:'Neptune', texte:'environ 165 ans', mauvais:['84 ans','330 ans','80 ans'] },
          { name:'la Terre',texte:'365 jours (1 an)', mauvais:['225 jours','687 jours','183 jours'] },
        ];
        const idx = Math.floor(rnd() * astres.length);
        const a = astres[idx];
        // Mélanger les 3 mauvais dans un ordre aléatoire
        const shuffle_idx = Math.floor(rnd() * 6);
        const perms = [[0,1,2],[0,2,1],[1,0,2],[1,2,0],[2,0,1],[2,1,0]];
        const perm = perms[shuffle_idx];
        return {
          q: <>Quelle est la durée de révolution de {a.name} autour du Soleil ?</>,
          options: [a.texte, a.mauvais[perm[0]], a.mauvais[perm[1]], a.mauvais[perm[2]]],
          correct: 0,
          hint: `${a.name} met ${a.texte} pour faire un tour complet autour du Soleil.`,
        };
      } },
      { key:'ast-11', q:'Le système solaire est composé de :', options:['1 étoile (le Soleil) et 8 planètes','2 étoiles et 6 planètes','Le Soleil et seulement la Terre','Des millions d\'étoiles'], correct:0, hint:'Notre système solaire : 1 étoile (Soleil) + 8 planètes + lunes + astéroïdes + comètes…' },
      { key:'ast-12', q:'Quelle est la planète la plus proche du Soleil ?', options:['Vénus','Mars','Mercure','La Terre'], correct:2, hint:'Ordre : Mercure, Vénus, Terre, Mars, Jupiter, Saturne, Uranus, Neptune. Mercure = le plus proche.' },
    ],
    environnement: [
      { key:'env-1', q:'Un matériau recyclable est :', options:['Jeté dans n\'importe quelle poubelle','Transformé pour être réutilisé','Enfoui dans le sol','Brûlé'], correct:1, hint:'Recyclage = retransformation du matériau pour un nouvel usage.' },
      { key:'env-2', q:'L\'eau potable provient :', options:['De la pluie uniquement','Des rivières, nappes souterraines ou autres, après traitement','De l\'air','Des glaciers uniquement'], correct:1, hint:'Eau potable = eau traitée (filtrée, désinfectée) à partir de sources naturelles.' },
      { key:'env-3', q:'Le plastique met environ combien de temps à se dégrader dans la nature ?', options:['Quelques jours','Quelques mois','Plusieurs centaines d\'années','Quelques semaines'], correct:2, hint:'Une bouteille plastique : 400-1000 ans. D\'où l\'importance du recyclage.' },
      { key:'env-4', q:<>Pour économiser l\'eau :</>, options:['Laisser couler l\'eau','Prendre des douches courtes plutôt que des bains','Oublier de fermer le robinet','Arroser plus'], correct:1, hint:'Douche 5 min ≈ 60 L · bain ≈ 200 L. Gain évident.' },
      { key:'env-5', q:'Le verre peut être recyclé :', options:['Une seule fois','Quelques fois','Indéfiniment','Jamais'], correct:2, hint:'Le verre peut être fondu et remodelé à l\'infini sans perte de qualité.' },
      { key:'env-6', q:'Le tri sélectif sert à :', options:['Mélanger tous les déchets','Séparer les déchets pour faciliter leur recyclage','Brûler les déchets','Rien, c\'est inutile'], correct:1, hint:'Séparer verre, plastique, papier, métal facilite leur valorisation et réduit l\'enfouissement.' },
      { key:'env-7', q:'La principale source d\'énergie utilisée en France est :', options:['Le pétrole','Le charbon','Le nucléaire','L\'éolien'], correct:2, hint:'En France, environ 70 % de l\'électricité vient du nucléaire. La tendance évolue vers plus de renouvelables.' },
      { key:'env-8', q:'Les énergies renouvelables sont :', options:['Le pétrole et le gaz','Le charbon','Le solaire, l\'éolien, l\'hydraulique','L\'uranium'], correct:2, hint:'Renouvelables = inépuisables à l\'échelle humaine : soleil, vent, eau, biomasse, géothermie.' },
      { key:'env-9', q:'Quel geste réduit la consommation d\'eau au quotidien ?', options:['Laisser couler l\'eau pendant le brossage des dents','Fermer le robinet pendant le brossage des dents','Prendre un bain quotidien','Arroser le jardin en plein soleil'], correct:1, hint:'Robinet ouvert inutilement = jusqu\'à 12 L/min gaspillés. Fermer = économie immédiate.' },
      { key:'env-10', q:'L\'effet de serre naturel :', options:['Est mauvais et à éliminer','Permet à la Terre d\'être habitable (sans lui, -18 °C en moyenne au lieu de +15 °C)','N\'existe que sur Vénus','Est synonyme de pollution'], correct:1, hint:'Les gaz à effet de serre naturels (vapeur d\'eau, CO₂) retiennent la chaleur. Problème : les activités humaines en rajoutent trop → réchauffement climatique.' },
      { key:'env-11', q:'Une ampoule LED, par rapport à une ampoule à incandescence classique :', options:['Consomme plus d\'électricité','Consomme environ 10 fois moins pour la même luminosité','Dure moins longtemps','Éclaire moins'], correct:1, hint:'LED ≈ 10 W pour l\'équivalent d\'une incandescente de 75 W. Durée de vie ~20 000 h contre 1 000 h.' },
      { key:'env-12', q:'Quel matériau met le plus longtemps à se dégrader naturellement ?', options:['Un épluchage de pomme','Une canette en aluminium','Un sachet plastique','Un journal'], correct:2, hint:'Sachet plastique : jusqu\'à 400 ans. Canette aluminium : ~200 ans. Journal : 3-5 ans. Épluchage : quelques semaines.' },
      { key:'env-13', q:'Pour économiser l\'énergie à la maison, on peut :', options:['Laisser les appareils en veille','Éteindre les lumières en partant et régler le chauffage à 19 °C','Augmenter la température du chauffage','Laisser le réfrigérateur ouvert'], correct:1, hint:'Chaque degré de chauffage en moins = ~7 % d\'économie. Veille des appareils = consommation cachée non nulle.' },
      { key:'env-14', q:'Qu\'est-ce que le réchauffement climatique ?', options:['Un phénomène uniquement naturel','Une augmentation de la température moyenne de la Terre liée aux émissions humaines de gaz à effet de serre','Une baisse des températures en hiver','Un phénomène limité aux zones polaires'], correct:1, hint:'Les activités humaines (combustion fossiles, déforestation) augmentent la concentration de CO₂ → effet de serre amplifié → réchauffement global.' },
      { key:'env-15', q:'Quel est le principal avantage du recyclage du métal (aluminium, acier) ?', options:['Cela produit du pétrole','Cela consomme 20 fois moins d\'énergie que de produire le métal à partir de minerai','Cela crée plus de déchets','Cela n\'a aucun intérêt'], correct:1, hint:'Recycler l\'aluminium consomme seulement 5 % de l\'énergie nécessaire à sa production depuis le minerai (bauxite). Gain énorme.' },
      { key:'env-16', q:'Un compost permet de :', options:['Brûler les déchets organiques','Transformer les déchets organiques en engrais naturel','Fabriquer du plastique','Purifier l\'eau'], correct:1, hint:'Compostage = décomposition naturelle des déchets organiques (épluchures, feuilles…) en terreau fertile.' },
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
