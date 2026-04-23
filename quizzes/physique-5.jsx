// Source éditable — quiz physique-5. Régénéré automatiquement dans index.html via build.sh.
window.ALL_QUIZZES['physique-5'] = {
  SEARCH_SITES: 'site:fr.khanacademy.org OR site:lumni.fr OR site:maxicours.com',
  YT_SUFFIX: 'physique chimie college',
  SUMMER_TOPIC: 'physique-chimie',
  SUBJECT: { id:'physique-5', name:'Physique-Chimie', short:'Physique', level:'Fin de 5ème', mark:'⚛', tagline:'Évaluation diagnostique' },
  DOMAINS: {
    eau:         { id:'eau',         name:'L\'eau dans notre environnement',   short:'Eau',        coef:3, color:'#0f5e6b', icon:'≈',  search:'eau etats 5eme' },
    air:         { id:'air',         name:'L\'air qui nous entoure',           short:'Air',        coef:3, color:'#0d7a6f', icon:'~',  search:'air composition 5eme' },
    masseVol:    { id:'masseVol',    name:'Masse volumique',                   short:'Masse vol.', coef:3, color:'#7c3aed', icon:'ρ',  search:'masse volumique 5eme' },
    electricite: { id:'electricite', name:'Circuits électriques',              short:'Circuits',   coef:4, color:'#b45309', icon:'⚡', search:'circuit electrique conducteur 5eme' },
    lumiereOmbre:{ id:'lumiereOmbre',name:'Lumière, ombre & vision',           short:'Lumière',    coef:2, color:'#ca8a04', icon:'☀',  search:'lumiere ombre vision 5eme' },
    mouvement:   { id:'mouvement',   name:'Mouvements & vitesses',             short:'Mouvement',  coef:2, color:'#1d4ed8', icon:'→',  search:'mouvement vitesse 5eme' },
    energie:     { id:'energie',     name:'Énergie (formes, sources)',         short:'Énergie',    coef:3, color:'#c2410c', icon:'E',  search:'energie formes sources 5eme' },
    signaux:     { id:'signaux',     name:'Signaux (son, lumière)',            short:'Signaux',    coef:2, color:'#db2777', icon:'♪',  search:'signaux son lumiere 5eme' },
  },
  RESOURCES: [
    { label:'Khan Academy Physique', author:'Cours + exos',        url:'https://fr.khanacademy.org/science/college-physique-chimie-5eme-v2' },
    { label:'Lumni — Physique 5ème', author:'France TV éducation', url:'https://www.lumni.fr/college/cinquieme/physique-chimie' },
    { label:'PhET Simulations',      author:'Université Colorado', url:'https://phet.colorado.edu/fr/' },
    { label:'Paul Olivier (YouTube)',author:'Cours physique-chimie', url:'https://www.youtube.com/@PaulOlivier' },
  ],
  POOL: {
    eau: [
      { key:'eau-1', q:'L\'eau pure est :', options:['Un corps pur','Un mélange homogène','Un mélange hétérogène','Une suspension'], correct:0, hint:'L\'eau pure (distillée) n\'est constituée que de molécules H₂O : corps pur.' },
      { key:'eau-2', q:'Lors de l\'ébullition de l\'eau pure, la température :', options:['Augmente sans cesse','Reste constante à 100 °C','Descend','Se divise par 2'], correct:1, hint:'Pendant le changement d\'état, la température est constante (100 °C pour l\'eau à pression normale).' },
      { key:'eau-3', q:'La vapeur d\'eau est :', options:['Un gaz invisible','La buée blanche qu\'on voit','De la glace','Un liquide'], correct:0, hint:'Attention : la vapeur (gaz) est INVISIBLE. La buée = petites gouttelettes liquides.' },
      { key:'eau-4', q:'Le cycle de l\'eau comporte :', options:['Évaporation, condensation, précipitations','Juste la pluie','Juste l\'évaporation','La dissolution'], correct:0, hint:'Cycle : évaporation (mer, lac) → condensation (nuages) → précipitations → ruissellement.' },
      { key:'eau-5', q:'Pendant la fusion de la glace, la température :', options:['Monte','Descend','Reste à 0 °C','Atteint 100 °C'], correct:2, hint:'Pendant un changement d\'état, la température reste CONSTANTE.' },
      { key:'eau-6', q:'La buée qui sort d\'une casserole bouillante est :', options:['De la vapeur d\'eau (gaz invisible)','De petites gouttes d\'eau liquide','De l\'oxygène','De la glace'], correct:1, hint:'Piège : la VAPEUR est invisible. La buée = vapeur qui s\'est déjà condensée en gouttelettes.' }
    ],
    air: [
      { key:'air-1', q:'L\'air est principalement composé de :', options:['O₂ et H₂','N₂ (azote) et O₂ (dioxygène)','CO₂ uniquement','H₂O'], correct:1, hint:'Air ≈ 78 % N₂ + 21 % O₂ + 1 % autres (dont CO₂, argon, vapeur d\'eau).' },
      { key:'air-2', q:'L\'air :', options:['N\'a pas de masse','A une masse (1 L d\'air pèse environ 1,2 g)','Est plus lourd que l\'eau','Est un solide'], correct:1, hint:'Masse volumique de l\'air ≈ 1,2 g/L (ou 1,2 kg/m³) au niveau de la mer.' },
      { key:'air-3', q:'La pression atmosphérique s\'exerce :', options:['Vers le haut uniquement','Dans toutes les directions','Seulement sur le sol','Nulle part'], correct:1, hint:'La pression d\'un gaz s\'exerce dans toutes les directions.' },
      { key:'air-4', q:'Comment démontrer que l\'air a une masse ?', options:['On ne peut pas','Peser un ballon gonflé et un dégonflé','Le regarder','Le chauffer'], correct:1, hint:'Différence de masse entre un ballon gonflé et vide = masse de l\'air dedans.' },
      { key:'air-5', q:'À quelle altitude y a-t-il le moins d\'air ?', options:['Au niveau de la mer','En haut d\'une montagne','Dans une vallée','Sous l\'eau'], correct:1, hint:'Plus on monte, plus l\'air se raréfie (pression atmosphérique diminue).' },
      { key:'air-6', q:'Un ballon gonflé chauffé :', options:['Rétrécit','Gonfle encore plus','Reste pareil','Explose immédiatement'], correct:1, hint:'Un gaz chaud occupe plus de volume (dilatation).' }
    ],
    masseVol: [
      { key:'mv-1', q:<>Masse volumique se calcule par :</>, options:[<><M>ρ = m × V</M></>, <><M>ρ = m / V</M></>, <><M>ρ = V / m</M></>, <><M>ρ = m + V</M></>], correct:1, hint:'ρ = masse / volume. Unités : kg/m³ ou g/cm³.' },
      { key:'mv-2', q:'La masse volumique de l\'eau (liquide) :', options:['0,1 g/cm³','1 g/cm³','10 g/cm³','100 g/cm³'], correct:1, hint:'Eau : ρ = 1 g/cm³ = 1000 kg/m³.' },
      { key:'mv-3', q:'Un objet flotte sur l\'eau si sa masse volumique est :', options:['Plus grande que celle de l\'eau','Plus petite que celle de l\'eau','Égale à 0','Peu importe'], correct:1, hint:'ρ_objet < ρ_eau → flotte. Sinon → coule.' },
      { key:'mv-4', q:'On a 500 g d\'huile occupant 550 cm³. Sa masse volumique vaut :', options:['≈ 0,91 g/cm³','≈ 1,1 g/cm³','≈ 50 g/cm³','≈ 2 g/cm³'], correct:0, hint:'ρ = 500 / 550 ≈ 0,91 g/cm³ → l\'huile flotte sur l\'eau.' },
      { key:'mv-5', q:'Un objet de 100 g a un volume de 50 cm³. Sa masse volumique :', options:['0,5 g/cm³','2 g/cm³','50 g/cm³','5000 g/cm³'], correct:1, hint:'ρ = m/V = 100/50 = 2 g/cm³.' },
      { key:'mv-6', q:'Un iceberg flotte sur l\'eau parce que :', options:['Il est léger','La glace est moins dense que l\'eau liquide','Il est grand','Il est salé'], correct:1, hint:'ρ_glace ≈ 0,92 g/cm³ < ρ_eau = 1 g/cm³ → flotte (90 % sous l\'eau).' }
    ],
    electricite: [
      { key:'ele-1', q:'Dans un circuit en série :', options:['L\'intensité est la même partout','Tout se divise','Les lampes brillent pareil quel que soit le nombre','Il y a plusieurs chemins'], correct:0, hint:'Série = un seul chemin → intensité identique partout.' },
      { key:'ele-2', q:'Dans un circuit en dérivation (parallèle) :', options:['L\'intensité totale = somme des intensités des branches','L\'intensité augmente','Il n\'y a qu\'un chemin','Les lampes ne s\'allument pas'], correct:0, hint:'Loi des nœuds : I_totale = I₁ + I₂ + … dans un nœud.' },
      { key:'ele-3', q:'Un matériau conducteur :', options:['Empêche le courant de passer','Laisse passer le courant','Est forcément en bois','Est invisible'], correct:1, hint:'Conducteur : métaux, eau salée, graphite. Isolant : plastique, verre, bois sec, caoutchouc.' },
      { key:'ele-4', q:'L\'intensité se mesure avec un :', options:['Voltmètre','Ampèremètre','Thermomètre','Ohmmètre'], correct:1, hint:'Ampèremètre (en série). Unité : ampère (A).' },
      { key:'ele-5', q:'Dans un circuit en série, si une lampe grille :', options:['Les autres continuent','Tout s\'éteint','La pile explose','Rien ne change'], correct:1, hint:'Série = un seul chemin. Si on casse ce chemin → tout s\'arrête.' },
      { key:'ele-6', q:'Dans un circuit en dérivation, si une lampe grille :', options:['Tout s\'éteint','Les autres branches fonctionnent','La pile explose','Le courant double'], correct:1, hint:'Dérivation = chemins indépendants. C\'est pourquoi les guirlandes modernes sont en parallèle.' }
    ],
    lumiereOmbre: [
      { key:'lo-1', q:'La lumière se propage en ligne droite dans :', options:['N\'importe quel milieu','Un milieu transparent et homogène','Le vide uniquement','L\'eau uniquement'], correct:1, hint:'Propagation rectiligne dans un milieu transparent et homogène (air, eau, verre…).' },
      { key:'lo-2', q:'Une ombre se forme :', options:['Derrière un objet opaque éclairé','Devant la source','Uniquement la nuit','Dans le miroir'], correct:0, hint:'L\'objet bloque la lumière → zone sombre derrière = ombre.' },
      { key:'lo-3', q:'On voit un objet si :', options:['De la lumière partie de cet objet entre dans l\'œil','L\'objet émet du son','L\'objet est chaud','L\'objet est grand'], correct:0, hint:'Vision = lumière diffusée ou émise par l\'objet qui atteint l\'œil.' },
      { key:'lo-4', q:'La nuit est due :', options:['À l\'absence du Soleil','À la rotation de la Terre (on est du côté opposé au Soleil)','À la Lune','Aux nuages'], correct:1, hint:'La Terre tourne sur elle-même en 24 h : on voit le Soleil le jour, on est dans l\'ombre la nuit.' },
      { key:'lo-5', q:'On peut voir la Lune pendant la journée ?', options:['Jamais','Oui, souvent','Seulement pendant une éclipse','Seulement dans l\'espace'], correct:1, hint:'La Lune est souvent visible en plein jour — elle reflète la lumière du Soleil 24h/24.' }
    ],
    mouvement: [
      { key:'mou-1', q:<>Formule de la vitesse :</>, options:[<><M>v = d × t</M></>, <><M>v = d / t</M></>, <><M>v = t / d</M></>, 'Aucune'], correct:1, hint:'v = d / t. m/s ou km/h.' },
      { key:'mou-2', q:'Un vélo fait 12 km en 30 min. Sa vitesse moyenne :', options:['6 km/h','24 km/h','12 km/h','40 km/h'], correct:1, hint:'12 km en 0,5 h → 24 km/h.' },
      { key:'mou-3', q:'Pour étudier un mouvement, il faut choisir :', options:['Un référentiel','La couleur','Le poids','Rien'], correct:0, hint:'Le mouvement est relatif : pas de référentiel → pas de mouvement.' },
      { key:'mou-4', q:'Un mouvement uniforme :', options:['A une vitesse qui change','A une vitesse constante','Est impossible','S\'arrête vite'], correct:1, hint:'Uniforme = vitesse constante (ni accéléré ni ralenti).' },
      { key:'mou-5', q:'Un passager assis dans un train en marche, par rapport au train :', options:['Se déplace à 100 km/h','Est immobile','Recule','Tombe'], correct:1, hint:'Le mouvement est RELATIF. Référentiel train → passager immobile. Référentiel sol → il avance.' },
      { key:'mou-6', q:'Un coureur court à 10 km/h pendant 30 min. Distance :', options:['3 km','5 km','10 km','20 km'], correct:1, hint:'30 min = 0,5 h. d = v × t = 10 × 0,5 = 5 km.' }
    ],
    energie: [
      { key:'ene-1', q:'Parmi ces sources, laquelle est renouvelable ?', options:['Le pétrole','Le charbon','Le soleil','Le gaz naturel'], correct:2, hint:'Renouvelables : soleil, vent, eau, biomasse. Fossiles non renouvelables : pétrole, gaz, charbon.' },
      { key:'ene-2', q:'Une lampe transforme :', options:['L\'électricité en lumière (et chaleur)','La lumière en son','Rien','La chaleur en électricité'], correct:0, hint:'Convertisseur : électrique → lumineux + thermique (pertes).' },
      { key:'ene-3', q:'L\'énergie du mouvement s\'appelle :', options:['Énergie cinétique','Énergie chimique','Énergie solaire','Énergie nucléaire'], correct:0, hint:'Cinétique (de kinesis = mouvement en grec).' },
      { key:'ene-4', q:'L\'unité légale de l\'énergie est :', options:['Le watt (W)','Le joule (J)','Le volt (V)','Le kilogramme (kg)'], correct:1, hint:'Énergie → joule (J). Puissance (énergie par seconde) → watt (W).' },
      { key:'ene-5', q:'Un radiateur électrique transforme :', options:['La chaleur en électricité','L\'électricité en chaleur','La lumière en son','L\'eau en glace'], correct:1, hint:'Effet Joule : le courant dans une résistance produit de la chaleur.' },
      { key:'ene-6', q:'Un panneau solaire photovoltaïque convertit :', options:['La lumière en électricité','La chaleur en mouvement','L\'électricité en lumière','Le vent en eau'], correct:0, hint:'Photovoltaïque : photons → électricité. Différent du solaire thermique (chaleur).' }
    ],
    signaux: [
      { key:'sig-1', q:'La lumière transporte :', options:['De l\'eau','Une information / de l\'énergie','Des particules lourdes','Du son'], correct:1, hint:'Les signaux (lumière, son, radio) transportent information et énergie.' },
      { key:'sig-2', q:'Le son a besoin de :', options:['Vide','Un milieu matériel (air, eau, solide)','Lumière','Chaleur'], correct:1, hint:'Son : vibration de la matière → a besoin d\'un milieu.' },
      { key:'sig-3', q:'Vitesse approximative de la lumière dans le vide :', options:['340 m/s','1 km/s','300 000 km/s','Infinie'], correct:2, hint:'c ≈ 300 000 km/s, beaucoup plus rapide que le son.' },
      { key:'sig-4', q:'Pendant un orage, on voit l\'éclair avant d\'entendre le tonnerre car :', options:['L\'éclair est plus fort','La lumière va beaucoup plus vite que le son','Le tonnerre est en retard','C\'est un hasard'], correct:1, hint:'Lumière ≈ 300 000 km/s · son ≈ 340 m/s → la lumière arrive presque instantanément.' },
      { key:'sig-5', q:'La vitesse du son est plus grande dans :', options:['Le vide','L\'air','L\'eau','Un solide (comme le métal)'], correct:3, hint:'Son plus rapide dans un solide (>5 km/s) que dans un liquide (>1,5 km/s) que dans un gaz (340 m/s).' }
    ],
  },
  PICK: { eau: 4, air: 4, masseVol: 4, electricite: 4, lumiereOmbre: 3, mouvement: 4, energie: 4, signaux: 3 },
  PLANS: {
    eau: {
      'non-acquis': ['Les 3 états de l\'eau et leurs changements (fusion, solidification, vaporisation, liquéfaction)', 'Température constante à 0 °C et 100 °C pendant les changements d\'état', 'Cycle de l\'eau'],
      'fragile':    ['Corps pur vs mélange']
    },
    air: {
      'non-acquis': ['Composition : ~78 % N₂, ~21 % O₂', 'L\'air a une masse', 'Pression atmosphérique'],
      'fragile':    ['Effet de la température sur le volume d\'un gaz']
    },
    masseVol: {
      'non-acquis': ['Formule ρ = m/V et unités', 'Eau = 1 g/cm³ (référence)', 'Flotte/coule selon la densité'],
      'fragile':    ['Convertir kg/m³ ↔ g/cm³']
    },
    electricite: {
      'non-acquis': ['Circuit série vs dérivation : schéma et comportement', 'Conducteurs (métaux) vs isolants', 'Ampèremètre en série (A), voltmètre en dérivation (V)'],
      'fragile':    ['Loi des nœuds (somme des intensités)']
    },
    lumiereOmbre: {
      'non-acquis': ['Propagation rectiligne', 'Formation des ombres', 'Vision : lumière entre dans l\'œil'],
      'fragile':    ['Éclipses : ombre de la Lune/Terre']
    },
    mouvement: {
      'non-acquis': ['v = d/t avec les bonnes unités', 'Référentiel : indispensable pour parler de mouvement', 'Types : uniforme, accéléré, ralenti'],
      'fragile':    ['Conversion km/h ↔ m/s']
    },
    energie: {
      'non-acquis': ['Distinguer sources renouvelables et fossiles', 'Formes d\'énergie (cinétique, thermique, électrique, chimique…)', 'Conversions d\'énergie (ex. pile → lampe)'],
      'fragile':    ['Unités : joule (énergie), watt (puissance)']
    },
    signaux: {
      'non-acquis': ['Son : vibration, besoin d\'un milieu matériel', 'Lumière : peut se propager dans le vide', 'Les deux transportent de l\'information'],
      'fragile':    ['Ordres de grandeur des vitesses son/lumière']
    },
  },
};
