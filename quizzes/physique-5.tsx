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
      { key:'eau-6', q:'La buée qui sort d\'une casserole bouillante est :', options:['De la vapeur d\'eau (gaz invisible)','De petites gouttes d\'eau liquide','De l\'oxygène','De la glace'], correct:1, hint:'Piège : la VAPEUR est invisible. La buée = vapeur qui s\'est déjà condensée en gouttelettes.' },
      { key:'eau-7', q:'L\'eau de mer est :', options:['Un corps pur','Un mélange homogène d\'eau et de sel dissous','Un mélange hétérogène','De l\'eau distillée'], correct:1, hint:'Eau de mer = eau + sel + minéraux dissous. Homogène car on ne distingue pas les constituants.' },
      { key:'eau-8', q:'La masse volumique de la glace est :', options:['Supérieure à celle de l\'eau liquide','Inférieure à celle de l\'eau liquide (0,92 g/cm³)','Égale à celle de l\'eau liquide','Nulle'], correct:1, hint:'Glace : ρ ≈ 0,92 g/cm³ < eau : 1 g/cm³. Voilà pourquoi la glace flotte.' },
      { key:'eau-9', q:'La fusion de la glace se fait à quelle température (pression normale) ?', options:['−10 °C','0 °C','20 °C','100 °C'], correct:1, hint:'Fusion : 0 °C. Ébullition : 100 °C (à pression normale).' },
      { key:'eau-10', q:'Lorsque de la vapeur d\'eau se refroidit et redevient liquide, cela s\'appelle :', options:['Fusion','Solidification','Vaporisation','Condensation (liquéfaction)'], correct:3, hint:'Gaz → liquide = condensation. C\'est ainsi que les nuages se forment.' },
      { key:'eau-11', q:'L\'eau couvre environ quelle fraction de la surface de la Terre ?', options:['1/4','1/2','3/4','La quasi-totalité'], correct:2, hint:'Les océans couvrent environ 71 % de la surface terrestre → environ 3/4.' },
      { key:'eau-12', q:'Le passage de l\'état liquide à l\'état gazeux par chauffage s\'appelle :', options:['Fusion','Solidification','Vaporisation (ébullition ou évaporation)','Condensation'], correct:2, hint:'Vaporisation = liquide → gaz (par ébullition si c\'est à 100 °C, ou évaporation à toute température).' },
    ],
    air: [
      { key:'air-1', q:'L\'air est principalement composé de :', options:['O₂ et H₂','N₂ (azote) et O₂ (dioxygène)','CO₂ uniquement','H₂O'], correct:1, hint:'Air ≈ 78 % N₂ + 21 % O₂ + 1 % autres (dont CO₂, argon, vapeur d\'eau).' },
      { key:'air-2', q:'L\'air :', options:['N\'a pas de masse','A une masse (1 L d\'air pèse environ 1,2 g)','Est plus lourd que l\'eau','Est un solide'], correct:1, hint:'Masse volumique de l\'air ≈ 1,2 g/L (ou 1,2 kg/m³) au niveau de la mer.' },
      { key:'air-3', q:'La pression atmosphérique s\'exerce :', options:['Vers le haut uniquement','Dans toutes les directions','Seulement sur le sol','Nulle part'], correct:1, hint:'La pression d\'un gaz s\'exerce dans toutes les directions.' },
      { key:'air-4', q:'Comment démontrer que l\'air a une masse ?', options:['On ne peut pas','Peser un ballon gonflé et un dégonflé','Le regarder','Le chauffer'], correct:1, hint:'Différence de masse entre un ballon gonflé et vide = masse de l\'air dedans.' },
      { key:'air-5', q:'À quelle altitude y a-t-il le moins d\'air ?', options:['Au niveau de la mer','En haut d\'une montagne','Dans une vallée','Sous l\'eau'], correct:1, hint:'Plus on monte, plus l\'air se raréfie (pression atmosphérique diminue).' },
      { key:'air-6', q:'Un ballon gonflé chauffé :', options:['Rétrécit','Gonfle encore plus','Reste pareil','Explose immédiatement'], correct:1, hint:'Un gaz chaud occupe plus de volume (dilatation).' },
      { key:'air-7', q:'Quelle fraction approximative de l\'air représente le dioxygène ?', options:['5 %','21 %','78 %','100 %'], correct:1, hint:'Air : ~78 % diazote N₂ et ~21 % dioxygène O₂.' },
      { key:'air-8', q:'Le dioxyde de carbone (CO₂) représente dans l\'air environ :', options:['0,04 %','21 %','78 %','50 %'], correct:0, hint:'CO₂ ≈ 0,04 % (400 ppm). Bien que minoritaire, il joue un rôle clé dans l\'effet de serre.' },
      { key:'air-9', q:'L\'air comprimé dans un pneu de vélo :', options:['A une densité plus faible que l\'air normal','A une densité plus élevée que l\'air normal','N\'a pas de masse','Est composé différemment de l\'air normal'], correct:1, hint:'Comprimer = mettre plus de matière dans le même volume → densité et pression augmentent.' },
      { key:'air-10', q:'La respiration consomme quel gaz de l\'air ?', options:['Le diazote (N₂)','Le dioxyde de carbone (CO₂)','Le dioxygène (O₂)','La vapeur d\'eau'], correct:2, hint:'Respiration : O₂ consommé, CO₂ rejeté. On inspire ~21 % O₂ et expire ~16 % O₂ + 4 % CO₂.' },
      { key:'air-11', q:'Un alpiniste qui monte très haut peut avoir du mal à respirer parce que :', options:['L\'air est plus chaud','Il y a moins d\'oxygène disponible par litre d\'air','L\'air est trop dense','Il n\'y a plus d\'azote'], correct:1, hint:'En altitude, la pression atmosphérique diminue → moins de molécules d\'O₂ par respiration.' },
      { key:'air-12', q:'L\'argon (Ar) représente dans l\'air environ :', options:['0,04 %','1 %','21 %','78 %'], correct:1, hint:'Air ≈ 78 % N₂ + 21 % O₂ + ~0,93 % Ar + 0,04 % CO₂ + traces. L\'argon est le 3ème composant.' },
    ],
    masseVol: [
      { key:'mv-1', q:<>Masse volumique se calcule par :</>, options:[<><M>ρ = m × V</M></>, <><M>ρ = m / V</M></>, <><M>ρ = V / m</M></>, <><M>ρ = m + V</M></>], correct:1, hint:'ρ = masse / volume. Unités : kg/m³ ou g/cm³.' },
      { key:'mv-2', q:'La masse volumique de l\'eau (liquide) :', options:['0,1 g/cm³','1 g/cm³','10 g/cm³','100 g/cm³'], correct:1, hint:'Eau : ρ = 1 g/cm³ = 1000 kg/m³.' },
      { key:'mv-3', q:'Un objet flotte sur l\'eau si sa masse volumique est :', options:['Plus grande que celle de l\'eau','Plus petite que celle de l\'eau','Égale à 0','Peu importe'], correct:1, hint:'ρ_objet < ρ_eau → flotte. Sinon → coule.' },
      { key:'mv-4', q:'On a 500 g d\'huile occupant 550 cm³. Sa masse volumique vaut :', options:['≈ 0,91 g/cm³','≈ 1,1 g/cm³','≈ 50 g/cm³','≈ 2 g/cm³'], correct:0, hint:'ρ = 500 / 550 ≈ 0,91 g/cm³ → l\'huile flotte sur l\'eau.' },
      { key:'mv-5', q:'Un iceberg flotte sur l\'eau parce que :', options:['Il est léger','La glace est moins dense que l\'eau liquide','Il est grand','Il est salé'], correct:1, hint:'ρ_glace ≈ 0,92 g/cm³ < ρ_eau = 1 g/cm³ → flotte (90 % sous l\'eau).' },
      { key:'mv-6', q:'La masse volumique du fer est environ 7,9 g/cm³. Le fer :', options:['Flotte sur l\'eau','Coule dans l\'eau','Flotte sur l\'huile','N\'a pas de masse volumique'], correct:1, hint:'ρ_fer = 7,9 g/cm³ > ρ_eau = 1 g/cm³ → coule.' },
      { key:'mv-7', q:'1 g/cm³ est équivalent à :', options:['1 kg/m³','10 kg/m³','100 kg/m³','1000 kg/m³'], correct:3, hint:'1 g/cm³ = 1 g / (0,001 L) = 1000 g/L = 1000 kg/m³.' },
      { key:'mv-8', q:'Quelle propriété permet de savoir si deux liquides non miscibles se séparent en couches ?', options:['Leur couleur','Leur masse volumique relative','Leur température','Leur volume'], correct:1, hint:'Le liquide le moins dense monte au-dessus : huile (0,9 g/cm³) sur l\'eau (1 g/cm³).' },
      { key:'mv-9', gen: (rnd) => {
        const flotte = rnd() < 0.5;
        let m, V, rho;
        if (flotte) {
          const num = 1 + Math.floor(rnd() * 4);
          const den = num + 1 + Math.floor(rnd() * 4);
          const k = 10 * (2 + Math.floor(rnd() * 8));
          m = num * k;
          V = den * k;
          rho = +(m / V).toFixed(2);
        } else {
          const rhoWhole = 2 + Math.floor(rnd() * 6);
          V = 10 * (2 + Math.floor(rnd() * 8));
          m = rhoWhole * V;
          rho = rhoWhole;
        }
        const fmt = v => String(v).replace('.', ',');
        const good = flotte ? `Flotter (ρ = ${fmt(rho)} g/cm³)` : `Couler (ρ = ${fmt(rho)} g/cm³)`;
        const wrong1 = flotte ? `Couler (ρ > 1 g/cm³)` : `Flotter (ρ < 1 g/cm³)`;
        return {
          q: <>Un objet de {m} g a un volume de {V} cm³, placé dans l'eau. Il va :</>,
          options: [good, wrong1, 'Se dissoudre', 'Rester en suspension exactement'],
          correct: 0,
          hint: `ρ = ${m}/${V} = ${fmt(rho)} g/cm³. ${flotte ? 'Inférieure' : 'Supérieure'} à 1 → ${flotte ? 'flotte' : 'coule'}.`,
        };
      } },
      { key:'mv-10', q:'Le bois de balsa a une masse volumique d\'environ 0,12 g/cm³. Cela signifie qu\'il :', options:['Coule immédiatement dans l\'eau','Flotte très bien (très peu dense)','A la même densité que l\'eau','Se dissout dans l\'eau'], correct:1, hint:'0,12 < 1 g/cm³ → flotte facilement. C\'est pour cela qu\'il est utilisé pour les radeaux.' },
      { key:'mv-11', q:'Pour mesurer la masse volumique d\'un liquide inconnu, il faut mesurer :', options:['Sa couleur et sa température','Sa masse et son volume','Son pH et sa couleur','Sa viscosité uniquement'], correct:1, hint:'ρ = m / V. On mesure la masse avec une balance, le volume avec une éprouvette graduée.' },
      // Générateur : ρ = m/V (calcul de masse volumique, masse ou volume selon le mode)
      { key:'mv-12', gen: (rnd) => {
        const mode = Math.floor(rnd() * 3); // 0=calcul ρ, 1=calcul m, 2=calcul V
        // Masses sympas (g) et volumes (cm³) donnant des ρ distincts
        const combos = [
          { m:200, V:250 },   // ρ = 0.80
          { m:300, V:100 },   // ρ = 3.00
          { m:400, V:200 },   // ρ = 2.00
          { m:150, V:50 },    // ρ = 3.00 — doublon ρ avec 300/100 mais m/V différents
          { m:600, V:400 },   // ρ = 1.50
          { m:1000, V:125 },  // ρ = 8.00
          { m:250, V:500 },   // ρ = 0.50
          { m:450, V:300 },   // ρ = 1.50
          { m:800, V:400 },   // ρ = 2.00
          { m:350, V:700 },   // ρ = 0.50
        ];
        const c = combos[Math.floor(rnd() * combos.length)];
        const rho = +(c.m / c.V).toFixed(2);
        function dedup(correct, cands) {
          const key = v => String(+(v).toFixed(2));
          const used = new Set([key(correct)]);
          const result = [];
          for (const cv of cands) { const k = key(cv); if (!used.has(k)) { used.add(k); result.push(cv); } if (result.length === 3) break; }
          let x = correct + 0.5;
          while (result.length < 3) { const k = key(x); if (!used.has(k)) { used.add(k); result.push(x); } x += 0.5; }
          return result;
        }
        function dedupInt(correct, cands) {
          const used = new Set([correct]);
          const result = [];
          for (const cv of cands) { if (!used.has(cv)) { used.add(cv); result.push(cv); } if (result.length === 3) break; }
          let x = correct + 10; while (result.length < 3) { if (!used.has(x)) { used.add(x); result.push(x); } x += 10; }
          return result;
        }
        if (mode === 0) {
          const [d1,d2,d3] = dedup(rho, [+(c.m * c.V / 1000).toFixed(2), +(c.V / c.m).toFixed(2), rho + 1, rho * 2]);
          return {
            q: <>Un solide a une masse de {c.m} g et un volume de {c.V} cm³. Sa masse volumique est :</>,
            options: [`${rho} g/cm³`, `${+d1.toFixed(2)} g/cm³`, `${+d2.toFixed(2)} g/cm³`, `${+d3.toFixed(2)} g/cm³`], correct: 0,
            hint: `ρ = m / V = ${c.m} / ${c.V} = ${rho} g/cm³.`,
          };
        } else if (mode === 1) {
          const [d1,d2,d3] = dedupInt(c.m, [Math.round(c.m * 0.5), Math.round(c.m * 2), Math.round(c.m + c.V), c.m + 50]);
          return {
            q: <>Un liquide a une masse volumique de {rho} g/cm³ et un volume de {c.V} cm³. Sa masse est :</>,
            options: [`${c.m} g`, `${d1} g`, `${d2} g`, `${d3} g`], correct: 0,
            hint: `m = ρ × V = ${rho} × ${c.V} = ${c.m} g.`,
          };
        } else {
          const [d1,d2,d3] = dedupInt(c.V, [Math.round(c.V * 2), Math.round(c.V * 0.5), Math.round(c.V + 150), c.V + 75]);
          return {
            q: <>Un solide de masse {c.m} g a une masse volumique de {rho} g/cm³. Son volume est :</>,
            options: [`${c.V} cm³`, `${d1} cm³`, `${d2} cm³`, `${d3} cm³`], correct: 0,
            hint: `V = m / ρ = ${c.m} / ${rho} = ${c.V} cm³.`,
          };
        }
      } },
      { key:'mv-13', q:'Quelle unité est équivalente à 1 g/cm³ ?', options:['1 kg/m³','10 kg/m³','100 kg/m³','1000 kg/m³'], correct:3, hint:'1 g/cm³ = 1 g / (10⁻⁶ m³) = 10⁻³ kg / 10⁻⁶ m³ = 1000 kg/m³.' },
      { key:'mv-14', q:'Un objet de masse volumique 0,8 g/cm³ est placé dans l\'eau (ρ = 1 g/cm³), puis dans de l\'huile (ρ = 0,9 g/cm³). Il :', options:['Flotte dans les deux','Coule dans les deux','Flotte dans l\'eau, coule dans l\'huile','Coule dans l\'eau, flotte dans l\'huile'], correct:0, hint:'0,8 < 0,9 < 1. L\'objet flotte dans l\'eau ET dans l\'huile (densité inférieure aux deux).' },
      // Générateur : densité relative et flottaison de liquides superposés
      { key:'mv-15', gen: (rnd) => {
        // ρ liquide connu + objet, demande flotte/coule ou demande la ρ minimale pour flotter
        const mode = Math.floor(rnd() * 2);
        if (mode === 0) {
          // Masse connue, volume connu, comparaison à l'eau
          const combos = [
            { m:90, V:100, rho:0.9, res:'flotte', mat:'le bois léger' },
            { m:200, V:100, rho:2.0, res:'coule', mat:'le sable' },
            { m:80, V:100, rho:0.8, res:'flotte', mat:'le balsa' },
            { m:300, V:100, rho:3.0, res:'coule', mat:'la roche' },
            { m:70, V:100, rho:0.7, res:'flotte', mat:'le bois de pin' },
            { m:500, V:100, rho:5.0, res:'coule', mat:'le zinc' },
            { m:50, V:100, rho:0.5, res:'flotte', mat:'le liège' },
            { m:800, V:100, rho:8.0, res:'coule', mat:'le fer' },
          ];
          const c = combos[Math.floor(rnd() * combos.length)];
          const fmt = v => String(v).replace('.', ',');
          return {
            q: <>{c.mat.charAt(0).toUpperCase() + c.mat.slice(1)} : masse {c.m} g, volume {c.V} cm³, dans l'eau (ρ = 1 g/cm³) :</>,
            options: [c.res === 'flotte' ? 'Flotte' : 'Coule', c.res === 'flotte' ? 'Coule' : 'Flotte', 'Reste exactement au milieu', 'Se dissout'],
            correct: 0,
            hint: `ρ = ${c.m} / ${c.V} = ${fmt(c.rho)} g/cm³. ${c.rho < 1 ? 'Inférieur' : 'Supérieur'} à 1 → ${c.res}.`,
          };
        } else {
          // Conversion ρ entre unités
          const vals = [0.5, 0.8, 0.9, 1.2, 2.0, 3.0, 7.9, 11.3];
          const rho_gcc = vals[Math.floor(rnd() * vals.length)];
          const rho_kgm3 = Math.round(rho_gcc * 1000);
          const used = new Set([rho_kgm3]);
          let d1 = rho_gcc * 100, d2 = rho_gcc * 10, d3 = rho_gcc;
          [d1, d2, d3] = [d1, d2, d3].map(x => { while (used.has(x)) x += 10; used.add(x); return x; });
          const fmt = v => String(v).replace('.', ',');
          return {
            q: <>Une substance a une masse volumique de {fmt(rho_gcc)} g/cm³. En kg/m³, cela vaut :</>,
            options: [`${rho_kgm3} kg/m³`, `${d1} kg/m³`, `${d2} kg/m³`, `${d3} kg/m³`], correct: 0,
            hint: `1 g/cm³ = 1000 kg/m³. ${fmt(rho_gcc)} g/cm³ × 1000 = ${rho_kgm3} kg/m³.`,
          };
        }
      } },
    ],
    electricite: [
      { key:'ele-1', q:'Dans un circuit en série :', options:['L\'intensité est la même partout','Tout se divise','Les lampes brillent pareil quel que soit le nombre','Il y a plusieurs chemins'], correct:0, hint:'Série = un seul chemin → intensité identique partout.' },
      { key:'ele-2', q:'Dans un circuit en dérivation (parallèle) :', options:['L\'intensité totale = somme des intensités des branches','L\'intensité augmente','Il n\'y a qu\'un chemin','Les lampes ne s\'allument pas'], correct:0, hint:'Loi des nœuds : I_totale = I₁ + I₂ + … dans un nœud.' },
      { key:'ele-3', q:'Un matériau conducteur :', options:['Empêche le courant de passer','Laisse passer le courant','Est forcément en bois','Est invisible'], correct:1, hint:'Conducteur : métaux, eau salée, graphite. Isolant : plastique, verre, bois sec, caoutchouc.' },
      { key:'ele-4', q:'L\'intensité se mesure avec un :', options:['Voltmètre','Ampèremètre','Thermomètre','Ohmmètre'], correct:1, hint:'Ampèremètre (en série). Unité : ampère (A).' },
      { key:'ele-5', q:'Dans un circuit en série, si une lampe grille :', options:['Les autres continuent','Tout s\'éteint','La pile explose','Rien ne change'], correct:1, hint:'Série = un seul chemin. Si on casse ce chemin → tout s\'arrête.' },
      { key:'ele-6', q:'Dans un circuit en dérivation, si une lampe grille :', options:['Tout s\'éteint','Les autres branches fonctionnent','La pile explose','Le courant double'], correct:1, hint:'Dérivation = chemins indépendants. C\'est pourquoi les guirlandes modernes sont en parallèle.' },
      { key:'ele-7', q:'Un voltmètre se branche :', options:['En série avec le dipôle','En dérivation (en parallèle) sur le dipôle','Dans la pile','N\'importe comment'], correct:1, hint:'Voltmètre = mesure la tension → en parallèle sur le dipôle. Ampèremètre = en série.' },
      { key:'ele-8', q:'L\'unité de la tension électrique est :', options:['L\'ampère (A)','Le watt (W)','Le volt (V)','L\'ohm (Ω)'], correct:2, hint:'Tension → volt (V). Intensité → ampère (A).' },
      { key:'ele-9', q:'Dans un circuit en dérivation, la tension aux bornes de chaque branche :', options:['Varie selon les branches','Est la même pour toutes les branches','Est nulle','Se divise'], correct:1, hint:'Loi des mailles : même tension en parallèle (toutes les branches ont la tension du générateur).' },
      { key:'ele-10', q:'Dans un circuit en série avec 2 lampes identiques, chaque lampe brille :', options:['Autant qu\'une lampe seule','Moins que si elle était seule','Plus que si elle était seule','Ne brille pas'], correct:1, hint:'Deux résistances en série → courant plus faible → lampes moins brillantes.' },
      { key:'ele-11', q:'Le courant électrique dans les métaux est dû au déplacement de :', options:['Des protons','Des neutrons','Des électrons libres','Des ions uniquement'], correct:2, hint:'Dans les conducteurs métalliques, ce sont les électrons libres (de conduction) qui se déplacent.' },
      { key:'ele-12', q:'En dérivation, si on ajoute une troisième lampe identique dans une nouvelle branche, les deux lampes déjà en place :', options:['S\'éteignent','Brillent moins fort','Brillent aussi fort qu\'avant','Brillent plus fort'], correct:2, hint:'En dérivation, chaque branche a la même tension (celle de la pile). Ajouter une branche n\'affecte pas les autres.' },
    ],
    lumiereOmbre: [
      { key:'lo-1', q:'La lumière se propage en ligne droite dans :', options:['N\'importe quel milieu','Un milieu transparent et homogène','Le vide uniquement','L\'eau uniquement'], correct:1, hint:'Propagation rectiligne dans un milieu transparent et homogène (air, eau, verre…).' },
      { key:'lo-2', q:'Une ombre se forme :', options:['Derrière un objet opaque éclairé','Devant la source','Uniquement la nuit','Dans le miroir'], correct:0, hint:'L\'objet bloque la lumière → zone sombre derrière = ombre.' },
      { key:'lo-3', q:'On voit un objet si :', options:['De la lumière partie de cet objet entre dans l\'œil','L\'objet émet du son','L\'objet est chaud','L\'objet est grand'], correct:0, hint:'Vision = lumière diffusée ou émise par l\'objet qui atteint l\'œil.' },
      { key:'lo-4', q:'La nuit est due :', options:['À l\'absence du Soleil','À la rotation de la Terre (on est du côté opposé au Soleil)','À la Lune','Aux nuages'], correct:1, hint:'La Terre tourne sur elle-même en 24 h : on voit le Soleil le jour, on est dans l\'ombre la nuit.' },
      { key:'lo-5', q:'On peut voir la Lune pendant la journée ?', options:['Jamais','Oui, souvent','Seulement pendant une éclipse','Seulement dans l\'espace'], correct:1, hint:'La Lune est souvent visible en plein jour — elle reflète la lumière du Soleil 24h/24.' },
      { key:'lo-6', q:'Une éclipse de Soleil se produit quand :', options:['La Terre passe entre le Soleil et la Lune','La Lune passe entre la Terre et le Soleil','La Lune passe dans l\'ombre de la Terre','Le Soleil s\'éteint'], correct:1, hint:'Éclipse solaire : Lune entre Terre et Soleil → ombre de la Lune projetée sur la Terre.' },
      { key:'lo-7', q:'Une éclipse de Lune se produit quand :', options:['La Lune passe entre la Terre et le Soleil','La Terre passe entre le Soleil et la Lune','Le Soleil tourne autour de la Lune','La Lune disparaît'], correct:1, hint:'Éclipse lunaire : Terre entre Soleil et Lune → ombre de la Terre sur la Lune.' },
      { key:'lo-8', q:'La pénombre est :', options:['Une zone complètement sombre','Une zone partiellement éclairée (entre ombre et lumière)','Une source lumineuse','Un miroir'], correct:1, hint:'Autour de l\'ombre portée il y a une zone de pénombre partiellement éclairée.' },
      { key:'lo-9', q:'Quand la lumière passe d\'un milieu à un autre (ex. air → eau), elle :', options:['Continue en ligne droite sans changer','Change de direction (réfraction)','S\'arrête','Devient son'], correct:1, hint:'La réfraction = déviation de la lumière en changeant de milieu (c\'est pour cela qu\'une paille semble pliée dans un verre).' },
    ],
    mouvement: [
      { key:'mou-1', q:<>Formule de la vitesse :</>, options:[<><M>v = d × t</M></>, <><M>v = d / t</M></>, <><M>v = t / d</M></>, 'Aucune'], correct:1, hint:'v = d / t. m/s ou km/h.' },
      { key:'mou-2', q:'Un vélo fait 12 km en 30 min. Sa vitesse moyenne :', options:['6 km/h','24 km/h','12 km/h','40 km/h'], correct:1, hint:'12 km en 0,5 h → 24 km/h.' },
      { key:'mou-3', q:'Pour étudier un mouvement, il faut choisir :', options:['Un référentiel','La couleur','Le poids','Rien'], correct:0, hint:'Le mouvement est relatif : pas de référentiel → pas de mouvement.' },
      { key:'mou-4', q:'Un mouvement uniforme :', options:['A une vitesse qui change','A une vitesse constante','Est impossible','S\'arrête vite'], correct:1, hint:'Uniforme = vitesse constante (ni accéléré ni ralenti).' },
      { key:'mou-5', q:'Un passager assis dans un train en marche, par rapport au train :', options:['Se déplace à 100 km/h','Est immobile','Recule','Tombe'], correct:1, hint:'Le mouvement est RELATIF. Référentiel train → passager immobile. Référentiel sol → il avance.' },
      { key:'mou-6', q:'Convertir 36 km/h en m/s :', options:['36 m/s','10 m/s','3,6 m/s','0,36 m/s'], correct:1, hint:'÷ 3,6 : 36 / 3,6 = 10 m/s.' },
      { key:'mou-7', q:'Un mouvement accéléré signifie que :', options:['La vitesse est constante','La vitesse augmente','La vitesse diminue','Il n\'y a pas de mouvement'], correct:1, hint:'Accéléré = v croissante. Décéléré (ralenti) = v décroissante. Uniforme = v constante.' },
      { key:'mou-8', q:'La vitesse de la lumière (~300 000 km/s) est par rapport au son (~340 m/s) :', options:['À peu près égale','À peu près 1 000 fois plus rapide','À peu près 1 000 000 fois plus rapide','Inférieure'], correct:2, hint:'300 000 km/s = 3 × 10⁸ m/s vs 340 m/s : rapport ≈ 900 000 ≈ 10⁶.' },
      { key:'mou-9', q:'La trajectoire d\'une balle lancée horizontalement est :', options:['Une ligne droite horizontale','Une courbe (parabolique)','Un cercle','Une ligne droite verticale'], correct:1, hint:'Sous l\'effet de la gravité, la balle s\'incurve vers le bas → trajectoire parabolique.' },
      { key:'mou-10', q:'Pour décrire le mouvement d\'un passager dans une voiture sur l\'autoroute, quel référentiel choisit-on ?', options:['La voiture elle-même','Le sol (la route)','La Lune','N\'importe lequel'], correct:1, hint:'On choisit le sol (route) pour décrire la vitesse de la voiture ; dans le référentiel voiture le passager est immobile.' },
      { key:'mou-11', q:'Un coureur fait 400 m en 50 s. Sa vitesse moyenne est :', options:['450 m/s','8 m/s','4 m/s','0,125 m/s'], correct:1, hint:'v = 400 / 50 = 8 m/s.' },
      // Générateur : v=d/t avec valeurs entières variées
      { key:'mou-12', gen: (rnd) => {
        const mode = Math.floor(rnd() * 3); // 0=calc v, 1=calc d, 2=calc t
        // Triplets (d km, t h, v km/h) tous entiers, t >= 2 pour éviter t/2 = 1 = t-1
        const triplets = [
          { d:120, t:2, v:60 }, { d:180, t:3, v:60 }, { d:300, t:5, v:60 },
          { d:150, t:2, v:75 }, { d:200, t:4, v:50 }, { d:240, t:3, v:80 },
          { d:350, t:5, v:70 }, { d:100, t:2, v:50 }, { d:280, t:4, v:70 },
          { d:400, t:4, v:100 }, { d:360, t:4, v:90 }, { d:500, t:5, v:100 },
        ];
        function dedupInt(correct, cands) {
          const used = new Set([correct]);
          const result = [];
          for (const cv of cands) { if (!used.has(cv)) { used.add(cv); result.push(cv); } if (result.length === 3) break; }
          let x = correct + 1; while (result.length < 3) { if (!used.has(x)) { used.add(x); result.push(x); } x++; }
          return result;
        }
        const tr = triplets[Math.floor(rnd() * triplets.length)];
        if (mode === 0) {
          const [d1,d2,d3] = dedupInt(tr.v, [tr.v + 10, tr.v - 10, tr.d + tr.t, tr.v * 2]);
          return {
            q: <>Un véhicule parcourt {tr.d} km en {tr.t} h. Sa vitesse moyenne est :</>,
            options: [`${tr.v} km/h`, `${d1} km/h`, `${d2} km/h`, `${d3} km/h`], correct: 0,
            hint: `v = d / t = ${tr.d} / ${tr.t} = ${tr.v} km/h.`,
          };
        } else if (mode === 1) {
          const [d1,d2,d3] = dedupInt(tr.d, [tr.d + 50, tr.d - 20, tr.v * tr.t + 10, tr.d * 2]);
          return {
            q: <>Un véhicule roule à {tr.v} km/h pendant {tr.t} h. La distance parcourue est :</>,
            options: [`${tr.d} km`, `${d1} km`, `${d2} km`, `${d3} km`], correct: 0,
            hint: `d = v × t = ${tr.v} × ${tr.t} = ${tr.d} km.`,
          };
        } else {
          const [d1,d2,d3] = dedupInt(tr.t, [tr.t + 1, tr.t + 2, tr.t * 2, tr.t - 1 > 0 ? tr.t - 1 : tr.t + 3]);
          return {
            q: <>Un véhicule roule à {tr.v} km/h et parcourt {tr.d} km. Le temps de trajet est :</>,
            options: [`${tr.t} h`, `${d1} h`, `${d2} h`, `${d3} h`], correct: 0,
            hint: `t = d / v = ${tr.d} / ${tr.v} = ${tr.t} h.`,
          };
        }
      } },
    ],
    energie: [
      { key:'ene-1', q:'Parmi ces sources, laquelle est renouvelable ?', options:['Le pétrole','Le charbon','Le soleil','Le gaz naturel'], correct:2, hint:'Renouvelables : soleil, vent, eau, biomasse. Fossiles non renouvelables : pétrole, gaz, charbon.' },
      { key:'ene-2', q:'Une lampe transforme :', options:['L\'électricité en lumière (et chaleur)','La lumière en son','Rien','La chaleur en électricité'], correct:0, hint:'Convertisseur : électrique → lumineux + thermique (pertes).' },
      { key:'ene-3', q:'L\'énergie du mouvement s\'appelle :', options:['Énergie cinétique','Énergie chimique','Énergie solaire','Énergie nucléaire'], correct:0, hint:'Cinétique (de kinesis = mouvement en grec).' },
      { key:'ene-4', q:'L\'unité légale de l\'énergie est :', options:['Le watt (W)','Le joule (J)','Le volt (V)','Le kilogramme (kg)'], correct:1, hint:'Énergie → joule (J). Puissance (énergie par seconde) → watt (W).' },
      { key:'ene-5', q:'Un radiateur électrique transforme :', options:['La chaleur en électricité','L\'électricité en chaleur','La lumière en son','L\'eau en glace'], correct:1, hint:'Effet Joule : le courant dans une résistance produit de la chaleur.' },
      { key:'ene-6', q:'Un panneau solaire photovoltaïque convertit :', options:['La lumière en électricité','La chaleur en mouvement','L\'électricité en lumière','Le vent en eau'], correct:0, hint:'Photovoltaïque : photons → électricité. Différent du solaire thermique (chaleur).' },
      { key:'ene-7', q:'L\'énergie stockée dans une pile ou une batterie est de forme :', options:['Électrique directement','Cinétique','Chimique','Nucléaire'], correct:2, hint:'Une pile stocke de l\'énergie chimique. Lorsqu\'elle fonctionne, elle la convertit en énergie électrique.' },
      { key:'ene-8', q:'L\'énergie hydraulique est produite grâce à :', options:['La chaleur du soleil','Le mouvement de l\'eau','La combustion du bois','La fusion nucléaire'], correct:1, hint:'Hydraulique : mouvement/chute d\'eau → turbine → électricité.' },
      { key:'ene-9', q:'Un appareil de 1000 W allumé pendant 2 heures consomme :', options:['500 J','2000 W','2 kWh','2000 kWh'], correct:2, hint:'Énergie = Puissance × temps. E = 1 kW × 2 h = 2 kWh.' },
      { key:'ene-10', q:'Éteindre la lumière en quittant une pièce est utile car :', options:['Cela refroidit la pièce','Cela économise de l\'énergie électrique','Cela augmente la durée de vie du soleil','Cela ne sert à rien'], correct:1, hint:'Toute énergie non utilisée est gaspillée. L\'économie est directe sur la facture et réduit les émissions.' },
      { key:'ene-11', q:'Le vent est une forme d\'énergie :', options:['Chimique','Nucléaire','Cinétique (mouvement de l\'air)','Thermique'], correct:2, hint:'Le vent = air en mouvement → énergie cinétique captée par les éoliennes.' },
      // Générateur : E = P × t en kWh
      { key:'ene-12', gen: (rnd) => {
        const mode = Math.floor(rnd() * 2); // 0=calc E, 1=calc P
        const appareils = [
          { nom:'un four électrique (2 kW)', P:2, t:2, E:4 },
          { nom:'un lave-linge (1 kW)', P:1, t:2, E:2 },
          { nom:'une TV (100 W)', P:0.1, t:30, E:3 },
          { nom:'un radiateur (1 kW)', P:1, t:5, E:5 },
          { nom:'un climatiseur (2 kW)', P:2, t:3, E:6 },
          { nom:'un chauffe-eau (3 kW)', P:3, t:2, E:6 },
          { nom:'un sèche-linge (2 kW)', P:2, t:4, E:8 },
          { nom:'un aspirateur (1 kW)', P:1, t:7, E:7 },
        ];
        function dedupF(correct, cands) {
          const key = v => String(+v.toFixed(2));
          const used = new Set([key(correct)]);
          const result = [];
          for (const cv of cands) { const k = key(cv); if (!used.has(k)) { used.add(k); result.push(+cv.toFixed(2)); } if (result.length === 3) break; }
          let x = correct + 0.5; while (result.length < 3) { const k = key(x); if (!used.has(k)) { used.add(k); result.push(+x.toFixed(2)); } x += 0.5; }
          return result;
        }
        const ap = appareils[Math.floor(rnd() * appareils.length)];
        if (mode === 0) {
          const [d1,d2,d3] = dedupF(ap.E, [ap.E + 2, ap.P + ap.t, ap.E * 2, ap.E + 1]);
          return {
            q: <>Un appareil est {ap.nom}. Il fonctionne {ap.t} h. L'énergie consommée est :</>,
            options: [`${ap.E} kWh`, `${d1} kWh`, `${d2} kWh`, `${d3} kWh`], correct: 0,
            hint: `E = P × t = ${ap.P} kW × ${ap.t} h = ${ap.E} kWh.`,
          };
        } else {
          const [d1,d2,d3] = dedupF(ap.P, [ap.P * 2, +(ap.E / ap.t + 1).toFixed(1), ap.E + ap.t, ap.P + 1]);
          return {
            q: <>Un appareil consomme {ap.E} kWh en {ap.t} h. Sa puissance est :</>,
            options: [`${ap.P} kW`, `${d1} kW`, `${d2} kW`, `${d3} kW`], correct: 0,
            hint: `P = E / t = ${ap.E} / ${ap.t} = ${ap.P} kW.`,
          };
        }
      } },
    ],
    signaux: [
      { key:'sig-1', q:'La lumière transporte :', options:['De l\'eau','Une information / de l\'énergie','Des particules lourdes','Du son'], correct:1, hint:'Les signaux (lumière, son, radio) transportent information et énergie.' },
      { key:'sig-2', q:'Le son a besoin de :', options:['Vide','Un milieu matériel (air, eau, solide)','Lumière','Chaleur'], correct:1, hint:'Son : vibration de la matière → a besoin d\'un milieu.' },
      { key:'sig-3', q:'Vitesse approximative de la lumière dans le vide :', options:['340 m/s','1 km/s','300 000 km/s','Infinie'], correct:2, hint:'c ≈ 300 000 km/s, beaucoup plus rapide que le son.' },
      { key:'sig-4', q:'Pendant un orage, on voit l\'éclair avant d\'entendre le tonnerre car :', options:['L\'éclair est plus fort','La lumière va beaucoup plus vite que le son','Le tonnerre est en retard','C\'est un hasard'], correct:1, hint:'Lumière ≈ 300 000 km/s · son ≈ 340 m/s → la lumière arrive presque instantanément.' },
      { key:'sig-5', q:'La vitesse du son est plus grande dans :', options:['Le vide','L\'air','L\'eau','Un solide (comme le métal)'], correct:3, hint:'Son plus rapide dans un solide (>5 km/s) que dans un liquide (>1,5 km/s) que dans un gaz (340 m/s).' },
      { key:'sig-6', q:'Un signal sonore se caractérise par :', options:['Sa couleur et sa longueur','Sa fréquence (grave/aigu) et son amplitude (fort/faible)','Sa masse et sa vitesse','Sa chaleur'], correct:1, hint:'Fréquence (Hz) = grave/aigu. Amplitude = intensité sonore (fort/faible).' },
      { key:'sig-7', q:'La fréquence d\'un son se mesure en :', options:['Décibels (dB)','Hertz (Hz)','Mètres (m)','Watts (W)'], correct:1, hint:'Fréquence → hertz (Hz). Nombre de vibrations par seconde.' },
      { key:'sig-8', q:'Un son de 440 Hz correspond à :', options:['Un son très grave (infra-son)','La note La (son médium audible)','Un ultra-son non audible','Aucun son connu'], correct:1, hint:'440 Hz = la note La en musique, parfaitement audible (20 Hz < 440 Hz < 20 000 Hz).' },
      { key:'sig-9', q:'Les fibres optiques transmettent des informations grâce à :', options:['Des signaux électriques','Des signaux lumineux','Des vibrations sonores','Des ondes radio'], correct:1, hint:'Fibre optique = lumière se propageant dans un verre très fin → très haut débit, pas de pertes électriques.' },
      { key:'sig-10', q:'Pendant un orage, on voit l\'éclair avant d\'entendre le tonnerre parce que :', options:['L\'éclair arrive en premier','La lumière (300 000 km/s) est beaucoup plus rapide que le son (340 m/s)','Le son se propage en zigzag','L\'éclair fait plus de bruit'], correct:1, hint:'Lumière ≈ 300 000 km/s, son dans l\'air ≈ 340 m/s. En comptant 3 secondes entre l\'éclair et le tonnerre, on estime la distance : 3 × 340 ≈ 1 km.' },
      { key:'sig-11', q:'Pour transmettre un signal numérique sur une grande distance, on utilise :', options:['Des cordes vibrantes','Des câbles en cuivre, fibres optiques ou ondes radio','Des miroirs','Des tuyaux d\'eau'], correct:1, hint:'Câbles cuivre (ADSL), fibres optiques (très haut débit), ondes radio/micro-ondes (Wi-Fi, 4G/5G) sont les trois grands supports de transmission.' },
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
