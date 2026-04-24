// Source éditable — quiz physique-4. Régénéré automatiquement dans index.html via build.sh.
window.ALL_QUIZZES['physique-4'] = {
  SEARCH_SITES: 'site:fr.khanacademy.org OR site:lumni.fr OR site:maxicours.com',
  YT_SUFFIX: 'college physique',
  SUMMER_TOPIC: 'physique-chimie',
  SUBJECT: {
    id: 'physique-4',
    name: 'Physique-Chimie',
    short: 'Physique',
    level: 'Fin de 4ème',
    mark: '⚛',
    tagline: 'Évaluation diagnostique',
  },
  DOMAINS: {
  electricite: { id:'electricite', name:'Électricité & circuits',            short:'Électricité', coef:4, color:'#b45309', icon:'⚡', search:'electricite circuit intensite tension loi ohm 4eme' },
  loiOhm:      { id:'loiOhm',      name:'Loi d\'Ohm (U = R × I)',             short:'Loi d\'Ohm',  coef:3, color:'#ca8a04', icon:'Ω', search:'loi d ohm 4eme' },
  optique:     { id:'optique',     name:'Optique & lumière',                  short:'Optique',     coef:2, color:'#ca9a04', icon:'☀', search:'optique lumiere sources 4eme' },
  couleurs:    { id:'couleurs',    name:'Lumières colorées (RVB / CMJ)',      short:'Couleurs',    coef:2, color:'#db2777', icon:'◐', search:'synthese additive soustractive couleurs 4eme' },
  matiere:     { id:'matiere',     name:'Matière & masse volumique',          short:'Matière',     coef:3, color:'#0f5e6b', icon:'ρ', search:'masse volumique etats matiere 4eme' },
  atomes:      { id:'atomes',      name:'Atomes, molécules & ions',           short:'Atomes',      coef:3, color:'#7c3aed', icon:'A', search:'atomes molecules ions 4eme' },
  chimie:      { id:'chimie',      name:'Transformations chimiques',          short:'Chimie',      coef:4, color:'#a01b34', icon:'⇌', search:'transformation chimique reactifs produits 4eme' },
  ph:          { id:'ph',          name:'Acidité, basicité & pH',             short:'pH',          coef:2, color:'#059669', icon:'pH',search:'ph acide base 4eme' },
  mouvement:   { id:'mouvement',   name:'Mouvement & vitesse',                short:'Mouvement',   coef:2, color:'#1d4ed8', icon:'→', search:'mouvement vitesse 4eme' },
  poids:       { id:'poids',       name:'Poids & masse (P = m × g)',          short:'Poids',       coef:3, color:'#166a39', icon:'g', search:'poids masse 4eme' },
  },
  RESOURCES: [
  { label:'Physique-Chimie Khan Academy', author:'Cours + exercices gratuits', url:'https://fr.khanacademy.org/science/college-physique-chimie-4eme-v2' },
  { label:'Lumni — Physique-Chimie 4ème', author:'France TV éducation',         url:'https://www.lumni.fr/college/quatrieme/physique-chimie' },
  { label:'PhET Simulations',             author:'Université Colorado (gratuit)', url:'https://phet.colorado.edu/fr/simulations/filter?subjects=physics,chemistry&type=html' },
  { label:'Physique-Chimie au collège',   author:'Paul Olivier (YouTube)',       url:'https://www.youtube.com/@PaulOlivier' },
  ],
  POOL: {
  electricite: [
    { key:'ele-1', q:'Dans un circuit en série, l\'intensité du courant électrique :',
      options:['Est la même partout','Se divise aux nœuds','Augmente avec la résistance','Disparaît dans la lampe'], correct:0,
      hint:'En série, le courant est identique en tout point du circuit (un seul chemin).' },
    { key:'ele-2', q:'Dans un circuit en dérivation (parallèle), les tensions aux bornes de chaque branche :',
      options:['Se divisent','S\'additionnent','Sont égales','Sont nulles'], correct:2,
      hint:'En dérivation, toutes les branches ont la même tension (loi d\'unicité des tensions).' },
    { key:'ele-3', q:'L\'unité de l\'intensité électrique est :',
      options:['Le volt (V)','L\'ampère (A)','L\'ohm (Ω)','Le watt (W)'], correct:1,
      hint:'Intensité → ampère (A). La tension est en volts (V).' },
    { key:'ele-4', q:<>Sur ce schéma, quel est le rôle de l'appareil marqué <b>A</b> ?<CircuitAmperemetreSerie /></>,
      options:['Mesurer la tension','Mesurer l\'intensité du courant','Mesurer la résistance','Mesurer la température'], correct:1,
      hint:'Le cercle avec A est un ampèremètre : branché en SÉRIE, il mesure l\'intensité (débit). Voltmètre : en dérivation.' },
    { key:'ele-5', q:<>Observe le montage : comment le voltmètre <b>V</b> est-il branché par rapport à la lampe ?<CircuitVoltmetreDerivation /></>,
      options:['En série avec la lampe','En dérivation (aux bornes de la lampe)','Dans la pile','À la masse'], correct:1,
      hint:'Le voltmètre mesure la tension aux bornes : branché en parallèle sur le dipôle (comme ici sur la lampe).' },
    { key:'ele-6', q:'Dans un circuit série, si on ajoute une lampe identique, les lampes brillent :',
      options:['Plus fort','Moins fort','Pareil','S\'éteignent toutes'], correct:1,
      hint:'Plus de récepteurs en série → résistance totale plus grande → courant plus faible → éclat moindre.' },
    { key:'ele-7', q:<>Sur ce schéma, que se passe-t-il pour la lampe ? Comment appelle-t-on ce montage ?<CircuitCourtCircuit /></>,
      options:['Un circuit ouvert','Un court-circuit : un fil direct contourne la lampe','Un montage en dérivation normal','Une pile déchargée'], correct:1,
      hint:'Le fil rouge contourne la lampe sans résistance : tout le courant y passe, la lampe ne brille plus. En eau : tuyau sans étranglement.' },
    { key:'ele-8', q:'Dans un circuit en série avec 3 lampes, si une lampe grille :',
      options:['Les deux autres continuent à briller','Tout le circuit s\'éteint','Une seule s\'éteint','La pile explose'], correct:1,
      hint:'Série = un seul chemin. Si un composant est brisé, le circuit s\'ouvre → plus de courant.' },
    { key:'ele-9', q:'Dans un circuit en dérivation, si une branche est coupée :',
      options:['Tout s\'éteint','Les autres branches continuent à fonctionner','La tension double','Le courant disparaît'], correct:1,
      hint:'Dérivation = branches indépendantes. Chaque branche a son propre chemin.' },
    { key:'ele-10', q:'Le sens conventionnel du courant électrique va :',
      options:['Du pôle − vers le pôle + dans le circuit extérieur','Du pôle + vers le pôle − dans le circuit extérieur','Dans les deux sens','Il n\'y a pas de sens'], correct:1,
      hint:'Convention (établie avant la découverte des électrons) : courant de + vers − hors pile.' },
    { key:'ele-11', q:'La résistance totale de deux résistances R₁ et R₂ en série est :',
      options:['R₁ × R₂','R₁ + R₂','(R₁ × R₂)/(R₁ + R₂)','R₁ − R₂'], correct:1,
      hint:'En série, les résistances s\'additionnent : R_total = R₁ + R₂.' },
    // Générateur : loi des nœuds et mailles
    { key:'ele-12', gen: (rnd) => {
      const mode = Math.floor(rnd() * 2);
      if (mode === 0) {
        // Loi des nœuds : I1 + I2 = I_total
        const I1 = +(0.1 * (1 + Math.floor(rnd() * 9))).toFixed(1);
        const I2 = +(0.1 * (1 + Math.floor(rnd() * 9))).toFixed(1);
        const Itot = +(I1 + I2).toFixed(1);
        const used = new Set([Itot]);
        let d1 = +(Math.abs(I1 - I2)).toFixed(1);
        let d2 = +(I1 * 2).toFixed(1);
        let d3 = +(Itot + 0.2).toFixed(1);
        [d1, d2, d3] = [d1, d2, d3].map(x => { while (used.has(x)) x = +(x + 0.1).toFixed(1); used.add(x); return x; });
        const fmt = v => String(v).replace('.', ',');
        return {
          q: <>Dans un circuit en dérivation, une branche a I₁ = {fmt(I1)} A et l'autre I₂ = {fmt(I2)} A. L'intensité totale vaut :</>,
          options: [`${fmt(Itot)} A`, `${fmt(d1)} A`, `${fmt(d2)} A`, `${fmt(d3)} A`],
          correct: 0,
          hint: `Loi des nœuds : I_total = I₁ + I₂ = ${fmt(I1)} + ${fmt(I2)} = ${fmt(Itot)} A.`,
        };
      } else {
        // Loi des mailles : U_pile = U_R1 + U_R2 en série
        const U1 = 1 + Math.floor(rnd() * 8);
        const U2 = 1 + Math.floor(rnd() * 8);
        const Upile = U1 + U2;
        const used = new Set([Upile]);
        let d1 = Math.abs(U1 - U2);
        let d2 = Upile + 2;
        let d3 = Upile - 2;
        [d1, d2, d3] = [d1, d2, d3].map(x => { while (used.has(x) || x <= 0) x++; used.add(x); return x; });
        return {
          q: <>En série, une résistance a une tension de {U1} V et l'autre de {U2} V. La tension de la pile est :</>,
          options: [`${Upile} V`, `${d1} V`, `${d2} V`, `${d3} V`],
          correct: 0,
          hint: `Loi des mailles : U_pile = U₁ + U₂ = ${U1} + ${U2} = ${Upile} V.`,
        };
      }
    } },
  ],

  loiOhm: [
    { key:'ohm-1', q:<>La loi d\'Ohm s\'écrit :</>,
      options:[<><M>U = R + I</M></>, <><M>U = R × I</M></>, <><M>U = R / I</M></>, <><M>R = U × I</M></>], correct:1,
      hint:'Loi d\'Ohm : U (volts) = R (ohms) × I (ampères).' },
    { key:'ohm-2', gen: (rnd) => {
      // Calcul de U = R × I, valeurs rondes
      const Rs = [5, 10, 15, 20, 25, 40, 50, 100];
      const Is = [0.1, 0.2, 0.25, 0.4, 0.5, 1, 2];
      const R = Rs[Math.floor(rnd() * Rs.length)];
      const I = Is[Math.floor(rnd() * Is.length)];
      const U = +(R * I).toFixed(3);
      const used = new Set([U]);
      let d1 = +(R + I).toFixed(3);          // piège + au lieu de ×
      let d2 = +(R / I).toFixed(3);          // piège division
      let d3 = +(U * 2).toFixed(3);
      [d1, d2, d3] = [d1, d2, d3].map(x => { while (used.has(x)) x = +(x + 0.5).toFixed(3); used.add(x); return x; });
      const fmt = v => String(v).replace('.', ',');
      return {
        q: <>Une résistance <M>R = {fmt(R)} Ω</M> est traversée par <M>I = {fmt(I)} A</M>. La tension vaut :</>,
        options: [`${fmt(U)} V`, `${fmt(d1)} V`, `${fmt(d2)} V`, `${fmt(d3)} V`],
        correct: 0,
        hint: `U = R × I = ${fmt(R)} × ${fmt(I)} = ${fmt(U)} V.`,
      };
    } },
    { key:'ohm-3', gen: (rnd) => {
      // Calcul de I = U / R
      const pairs = [[12,4,3],[6,2,3],[9,3,3],[12,6,2],[24,8,3],[10,5,2],[20,4,5],[6,3,2],[18,6,3],[15,5,3],[8,4,2],[12,3,4]];
      const [U, R, I] = pairs[Math.floor(rnd() * pairs.length)];
      const used = new Set([I]);
      let d1 = U * R, d2 = +(R / U).toFixed(3), d3 = I + 1;
      [d1, d2, d3] = [d1, d2, d3].map(x => { while (used.has(x)) x = +(x + 1).toFixed(3); used.add(x); return x; });
      const fmt = v => String(v).replace('.', ',');
      return {
        q: <>Pour <M>U = {U} V</M> et <M>R = {R} Ω</M>, l'intensité vaut :</>,
        options: [`${fmt(I)} A`, `${fmt(d1)} A`, `${fmt(d2)} A`, `${fmt(d3)} A`],
        correct: 0,
        hint: `I = U / R = ${U} / ${R} = ${fmt(I)} A.`,
      };
    } },
    { key:'ohm-4', q:'L\'unité de la résistance électrique est :',
      options:['L\'ampère','Le volt','L\'ohm','Le hertz'], correct:2,
      hint:'Résistance → ohm (Ω). Symbole du matériau : conducteur peu conducteur.' },
    { key:'ohm-5', q:<>Si la tension aux bornes d\'une résistance double (R fixée), l\'intensité :</>,
      options:['Double','Est divisée par 2','Reste égale','Disparaît'], correct:0,
      hint:'U et I sont proportionnels à R fixé (loi d\'Ohm).' },
    { key:'ohm-6', q:'Un conducteur ohmique est un dipôle dont la caractéristique U = f(I) est :',
      options:['Une courbe parabolique','Une droite passant par l\'origine','Un cercle','Une droite horizontale'], correct:1,
      hint:'Loi d\'Ohm → proportionnalité entre U et I → droite passant par (0,0) de pente R.' },
    { key:'ohm-7', gen: (rnd) => {
      // R = U / I avec I décimal pour tester le calcul avec virgule
      const pairs = [[9,0.3,30],[12,0.4,30],[6,0.2,30],[12,0.6,20],[15,0.5,30],[9,0.9,10],[12,0.3,40],[10,0.2,50],[20,0.4,50],[6,0.3,20],[24,0.6,40],[18,0.9,20]];
      const [U, I, R] = pairs[Math.floor(rnd() * pairs.length)];
      const used = new Set([R]);
      let d1 = +(U * I).toFixed(2), d2 = +(U + I).toFixed(2), d3 = Math.round(R / 10);
      [d1, d2, d3] = [d1, d2, d3].map(x => { while (used.has(x)) x++; used.add(x); return x; });
      const fmt = v => String(v).replace('.', ',');
      return {
        q: <>Pour <M>U = {U} V</M> et <M>I = {fmt(I)} A</M>, la résistance vaut :</>,
        options: [`${R} Ω`, `${fmt(d1)} Ω`, `${fmt(d2)} Ω`, `${fmt(d3)} Ω`],
        correct: 0,
        hint: `R = U / I = ${U} / ${fmt(I)} = ${R} Ω.`,
      };
    } },
    { key:'ohm-8', q:'Si on double la résistance et qu\'on garde la même tension, l\'intensité :',
      options:['Double','Est divisée par 2','Reste la même','Devient nulle'], correct:1,
      hint:'I = U/R. Si R double, I = U/(2R) = moitié. U et R inversement proportionnels à U fixé.' },
    { key:'ohm-9', gen: (rnd) => {
      // Deux résistances en série, U imposé. Choisir R1, R2 et U tels que I est sympa.
      const combos = [
        [10, 20, 6, 0.2], [10, 30, 8, 0.2], [20, 30, 10, 0.2], [15, 25, 8, 0.2],
        [10, 40, 10, 0.2], [50, 50, 10, 0.1], [20, 20, 8, 0.2], [30, 30, 6, 0.1],
        [25, 75, 10, 0.1], [40, 60, 10, 0.1], [5, 15, 4, 0.2], [10, 20, 9, 0.3],
      ];
      const [R1, R2, U, I] = combos[Math.floor(rnd() * combos.length)];
      const fmt = v => String(v).replace('.', ',');
      const used = new Set([I]);
      let d1 = +(U / R1).toFixed(3), d2 = +(U / R2).toFixed(3), d3 = +(U / (R1 + R2) * 10).toFixed(3);
      [d1, d2, d3] = [d1, d2, d3].map(x => { while (used.has(x)) x = +(x + 0.1).toFixed(3); used.add(x); return x; });
      return {
        q: <>Deux résistances R₁ = {R1} Ω et R₂ = {R2} Ω en série. Tension totale = {U} V. Intensité :</>,
        options: [`${fmt(I)} A`, `${fmt(d1)} A`, `${fmt(d2)} A`, `${fmt(d3)} A`],
        correct: 0,
        hint: `En série, R_total = R₁ + R₂ = ${R1 + R2} Ω. I = U / R_total = ${U} / ${R1 + R2} = ${fmt(I)} A.`,
      };
    } },
    // Générateur U = R × I (3 modes : calc U, calc I, calc R)
    { key:'ohm-10', gen: (rnd) => {
      const mode = Math.floor(rnd() * 3);
      const Rs = [10, 20, 50, 100, 200, 500, 1000];
      const Is = [0.1, 0.2, 0.5, 1, 2, 5];
      const R = Rs[Math.floor(rnd() * Rs.length)];
      const I = Is[Math.floor(rnd() * Is.length)];
      const U = +(R * I).toFixed(2);
      const fmt = v => String(v).replace('.', ',');
      function dedup(correct, cands) {
        const used = new Set([String(correct)]);
        const result = [];
        for (const c of cands) { const k = String(c); if (!used.has(k)) { used.add(k); result.push(c); } if (result.length === 3) break; }
        let x = correct + 1; while (result.length < 3) { const k = String(x); if (!used.has(k)) { used.add(k); result.push(x); } x++; }
        return result;
      }
      if (mode === 0) {
        const [d1,d2,d3] = dedup(U, [+(R + I).toFixed(2), +(R / I).toFixed(1), +(I / R).toFixed(3), U * 2, U / 2]);
        return {
          q: <>Une résistance <M>R = {R} Ω</M> est traversée par <M>I = {fmt(I)} A</M>. La tension est :</>,
          options: [`${fmt(U)} V`, `${fmt(d1)} V`, `${fmt(d2)} V`, `${fmt(d3)} V`], correct: 0,
          hint: `U = R × I = ${R} × ${fmt(I)} = ${fmt(U)} V.`,
        };
      } else if (mode === 1) {
        const [d1,d2,d3] = dedup(I, [I * 2, I + 1, +(U * R).toFixed(1), I * 5, I / 2]);
        return {
          q: <>Tension aux bornes d'une résistance <M>R = {R} Ω</M> : <M>U = {fmt(U)} V</M>. L'intensité est :</>,
          options: [`${fmt(I)} A`, `${fmt(d1)} A`, `${fmt(d2)} A`, `${fmt(d3)} A`], correct: 0,
          hint: `I = U / R = ${fmt(U)} / ${R} = ${fmt(I)} A.`,
        };
      } else {
        const [d1,d2,d3] = dedup(R, [R * 2, R + 10, +(U * I).toFixed(1), R / 2, R + 50]);
        return {
          q: <>Un dipôle : <M>U = {fmt(U)} V</M>, <M>I = {fmt(I)} A</M>. Sa résistance est :</>,
          options: [`${fmt(R)} Ω`, `${fmt(d1)} Ω`, `${fmt(d2)} Ω`, `${fmt(d3)} Ω`], correct: 0,
          hint: `R = U / I = ${fmt(U)} / ${fmt(I)} = ${R} Ω.`,
        };
      }
    } },
    // Générateur : puissance dissipée P = U × I dans une résistance ohmique
    { key:'ohm-11', gen: (rnd) => {
      const mode = Math.floor(rnd() * 3); // 0=calc P, 1=calc I, 2=calc U
      const triplets = [
        { U:6, I:0.5, P:3 }, { U:12, I:1, P:12 }, { U:9, I:3, P:27 },
        { U:24, I:2, P:48 }, { U:6, I:2, P:12 }, { U:18, I:3, P:54 },
        { U:12, I:2, P:24 }, { U:9, I:1, P:9 }, { U:15, I:2, P:30 },
        { U:12, I:4, P:48 }, { U:6, I:4, P:24 }, { U:24, I:3, P:72 },
      ];
      const tr = triplets[Math.floor(rnd() * triplets.length)];
      const fmt = v => String(v).replace('.', ',');
      function dedup(correct, cands) {
        const used = new Set([correct]);
        const result = [];
        for (const c of cands) { if (!used.has(c)) { used.add(c); result.push(c); } if (result.length === 3) break; }
        let x = correct + 1; while (result.length < 3) { if (!used.has(x)) { used.add(x); result.push(x); } x++; }
        return result;
      }
      if (mode === 0) {
        const [d1,d2,d3] = dedup(tr.P, [tr.U + tr.I, tr.P * 2, Math.round(tr.P / 2), tr.P + 10]);
        return {
          q: <>Une résistance fonctionne sous {fmt(tr.U)} V avec un courant de {fmt(tr.I)} A. La puissance dissipée est :</>,
          options: [`${tr.P} W`, `${d1} W`, `${d2} W`, `${d3} W`], correct: 0,
          hint: `P = U × I = ${fmt(tr.U)} × ${fmt(tr.I)} = ${tr.P} W.`,
        };
      } else if (mode === 1) {
        const [d1,d2,d3] = dedup(tr.I, [tr.I + 1, tr.I * 2, Math.max(0, tr.I - 1), tr.I + 2]);
        return {
          q: <>Une résistance de {fmt(tr.U)} V dissipe {tr.P} W. L'intensité qui la traverse est :</>,
          options: [`${fmt(tr.I)} A`, `${fmt(d1)} A`, `${fmt(d2)} A`, `${fmt(d3)} A`], correct: 0,
          hint: `I = P / U = ${tr.P} / ${fmt(tr.U)} = ${fmt(tr.I)} A.`,
        };
      } else {
        const [d1,d2,d3] = dedup(tr.U, [tr.U + 6, tr.U * 2, Math.max(1, tr.U - 3), tr.U + 12]);
        return {
          q: <>Une résistance traversée par {fmt(tr.I)} A dissipe {tr.P} W. La tension à ses bornes est :</>,
          options: [`${fmt(tr.U)} V`, `${d1} V`, `${d2} V`, `${d3} V`], correct: 0,
          hint: `U = P / I = ${tr.P} / ${fmt(tr.I)} = ${fmt(tr.U)} V.`,
        };
      }
    } },
    // Calculer R à partir de U et de P
    { key:'ohm-12', gen: (rnd) => {
      const combos = [
        { U:12, P:48, R:3 }, { U:6, P:12, R:3 }, { U:9, P:27, R:3 },
        { U:12, P:24, R:6 }, { U:24, P:48, R:12 }, { U:6, P:9, R:4 },
        { U:10, P:50, R:2 }, { U:15, P:75, R:3 }, { U:20, P:100, R:4 },
        { U:8, P:32, R:2 },  { U:12, P:36, R:4 },  { U:6, P:18, R:2 },
      ];
      const c = combos[Math.floor(rnd() * combos.length)];
      const used = new Set([c.R]);
      let d1 = c.P / c.U, d2 = c.U * c.P, d3 = c.R * 2;
      [d1, d2, d3] = [d1, d2, d3].map(x => { while (used.has(x)) x++; used.add(x); return x; });
      return {
        q: <>Une résistance est soumise à {c.U} V et dissipe {c.P} W. Sa résistance est :</>,
        options: [`${c.R} Ω`, `${d1} Ω`, `${d2} Ω`, `${d3} Ω`], correct: 0,
        hint: `I = P / U = ${c.P} / ${c.U} = ${c.P / c.U} A. R = U / I = ${c.U} / ${c.P / c.U} = ${c.R} Ω. Ou : R = U² / P = ${c.U}² / ${c.P} = ${c.R} Ω.`,
      };
    } },
    { key:'ohm-13', q:'Lorsqu\'on double la résistance et qu\'on double aussi la tension, l\'intensité :', options:['Double','Reste la même (U/R = 2U/2R)','Est divisée par 4','Est multipliée par 4'], correct:1, hint:'I = U/R. Si U → 2U et R → 2R : I = 2U/2R = U/R. L\'intensité ne change pas.' },
    { key:'ohm-14', q:'Quel schéma représente un conducteur ohmique idéal (courbe U=f(I)) ?', options:['Une droite passant par l\'origine de pente R','Une courbe parabolique','Une droite horizontale (U constant)','Un cercle'], correct:0, hint:'Conducteur ohmique : U = R×I → proportionnalité → droite passant par (0,0).' },
    // Générateur : résistances en série — R_total = R1 + R2, puis I = U/R_total
    { key:'ohm-15', gen: (rnd) => {
      const combos = [
        [20, 30, 10], [10, 40, 6], [15, 35, 10], [25, 75, 10],
        [50, 50, 12], [40, 60, 20], [30, 70, 8], [20, 80, 12],
        [5, 45, 10], [100, 200, 15], [60, 40, 10], [30, 20, 10],
      ];
      const [R1, R2, U] = combos[Math.floor(rnd() * combos.length)];
      const Rtot = R1 + R2;
      const I = +(U / Rtot).toFixed(3);
      const U1 = +(I * R1).toFixed(2);
      const U2 = +(I * R2).toFixed(2);
      // ask for U1 or U2 (tension aux bornes d'une résistance)
      const askR1 = rnd() < 0.5;
      const correct_U = askR1 ? U1 : U2;
      const wrong_U = askR1 ? U2 : U1;
      const fmt = v => String(v).replace('.', ',');
      const used = new Set([correct_U]);
      let d1 = wrong_U, d2 = U, d3 = +(correct_U * 2).toFixed(2);
      [d1, d2, d3] = [d1, d2, d3].map(x => { while (used.has(x)) x = +(x + 0.5).toFixed(2); used.add(x); return x; });
      return {
        q: <>R₁ = {R1} Ω et R₂ = {R2} Ω en série sous {U} V. La tension aux bornes de {askR1 ? 'R₁' : 'R₂'} est :</>,
        options: [`${fmt(correct_U)} V`, `${fmt(d1)} V`, `${fmt(d2)} V`, `${fmt(d3)} V`], correct: 0,
        hint: `I = U/R_total = ${U}/${Rtot} = ${fmt(I)} A. U_${askR1 ? 'R1':'R2'} = I × R_${askR1?'1':'2'} = ${fmt(I)} × ${askR1?R1:R2} = ${fmt(correct_U)} V.`,
      };
    } },
    // Générateur : résistances en parallèle (2 branches) — courant se divise
    { key:'ohm-16', gen: (rnd) => {
      // I total = I1 + I2 ; avec U commun, I1=U/R1, I2=U/R2
      const combos = [
        { U:6, R1:3, R2:6 }, { U:12, R1:4, R2:6 }, { U:10, R1:5, R2:10 },
        { U:12, R1:6, R2:4 }, { U:6, R1:2, R2:6 }, { U:9, R1:3, R2:9 },
        { U:24, R1:8, R2:12 }, { U:18, R1:6, R2:9 }, { U:15, R1:5, R2:15 },
      ];
      const c = combos[Math.floor(rnd() * combos.length)];
      const I1 = +(c.U / c.R1).toFixed(2);
      const I2 = +(c.U / c.R2).toFixed(2);
      const Itot = +(I1 + I2).toFixed(2);
      const fmt = v => String(v).replace('.', ',');
      const used = new Set([Itot]);
      let d1 = +(Math.abs(I1 - I2)).toFixed(2), d2 = +I1.toFixed(2), d3 = +(Itot + 1).toFixed(2);
      [d1, d2, d3] = [d1, d2, d3].map(x => { while (used.has(x)) x = +(x + 0.5).toFixed(2); used.add(x); return x; });
      return {
        q: <>R₁ = {c.R1} Ω et R₂ = {c.R2} Ω en parallèle sous {c.U} V. L'intensité totale débitée par la pile est :</>,
        options: [`${fmt(Itot)} A`, `${fmt(d1)} A`, `${fmt(d2)} A`, `${fmt(d3)} A`], correct: 0,
        hint: `I₁ = ${c.U}/${c.R1} = ${fmt(I1)} A ; I₂ = ${c.U}/${c.R2} = ${fmt(I2)} A. I_tot = ${fmt(I1)} + ${fmt(I2)} = ${fmt(Itot)} A.`,
      };
    } },
  ],

  optique: [
    { key:'opt-1', q:'La lumière se propage :',
      options:['En ligne courbe','En ligne droite dans un milieu transparent homogène','Uniquement dans le vide','En zigzag'], correct:1,
      hint:'Propagation rectiligne dans un milieu transparent et homogène (air, eau, verre).' },
    { key:'opt-2', q:'La vitesse de la lumière dans le vide est environ :',
      options:['300 km/s','300 000 km/h','300 000 km/s','3 000 m/s'], correct:2,
      hint:'c ≈ 300 000 km/s = 3 × 10⁸ m/s' },
    { key:'opt-3', q:'Le Soleil est une source :',
      options:['Secondaire','Primaire','Diffuse uniquement','Ponctuelle froide'], correct:1,
      hint:'Une source primaire produit sa propre lumière (Soleil, lampe). Secondaire = diffuse (Lune, objets).' },
    { key:'opt-4', q:'Une année-lumière est une unité :',
      options:['De temps','De vitesse','De distance','De masse'], correct:2,
      hint:'Distance parcourue par la lumière en 1 an (≈ 9,5 × 10¹² km).' },
    { key:'opt-5', q:'On ne peut voir un objet que si :',
      options:['Il est coloré','De la lumière venue de cet objet entre dans notre œil','Il est proche','Il fait jour'], correct:1,
      hint:'Vision = lumière émise ou diffusée par l\'objet qui parvient à l\'œil.' },
    { key:'opt-6', q:'Un rayon lumineux est représenté par :',
      options:['Un cercle','Un point','Une flèche sur une droite','Une onde sinusoïdale'], correct:2,
      hint:'Flèche indiquant le sens de propagation sur une droite.' },
    { key:'opt-7', q:'La réfraction de la lumière se produit quand elle :',
      options:['Se réfléchit sur un miroir','Change de milieu (ex. air → eau) et change de direction','S\'arrête dans le verre','Disparaît dans l\'obscurité'], correct:1,
      hint:'Réfraction = déviation de la lumière au passage d\'un milieu à un autre. Paille tordue dans l\'eau !' },
    { key:'opt-8', q:'Une lentille convergente fait converger les rayons lumineux :',
      options:['En les dispersant','En un foyer (point focal)','En les réfléchissant','En les arrêtant'], correct:1,
      hint:'Lentille convergente (convexe) concentre les rayons en un foyer. C\'est le principe des lunettes pour hypermétropes.' },
    { key:'opt-9', q:'L\'arc-en-ciel est dû à :',
      options:['La réflexion simple sur les nuages','La décomposition de la lumière blanche par les gouttes d\'eau (dispersion)','Un effet de chaleur','La lumière de la Lune'], correct:1,
      hint:'Les gouttes d\'eau jouent le rôle de prismes : elles dispersent la lumière blanche en ses couleurs.' },
  ],

  couleurs: [
    { key:'col-1', q:'Les trois lumières primaires de la synthèse additive sont :',
      options:['Rouge, vert, bleu','Jaune, cyan, magenta','Rouge, jaune, bleu','Noir, blanc, gris'], correct:0,
      hint:'RVB (additive, écrans). CMJ (soustractive, imprimantes).' },
    { key:'col-2', q:'Rouge + Vert (en lumières) donne :',
      options:['Jaune','Blanc','Orange','Marron'], correct:0,
      hint:'Synthèse additive : R + V = Jaune ; V + B = Cyan ; R + B = Magenta ; R + V + B = Blanc.' },
    { key:'col-3', q:'Rouge + Vert + Bleu (en lumières) donne :',
      options:['Noir','Blanc','Gris','Rien, incompatibles'], correct:1,
      hint:'Les trois primaires additives à pleine intensité donnent du blanc.' },
    { key:'col-4', q:'Un objet rouge éclairé en lumière bleue apparaît :',
      options:['Rouge','Bleu','Noir','Blanc'], correct:2,
      hint:'L\'objet ne diffuse que le rouge ; en lumière bleue il n\'a rien à diffuser → il paraît noir.' },
    { key:'col-5', q:'Les couleurs primaires utilisées en imprimerie (synthèse soustractive) sont :',
      options:['RVB','CMJ (cyan, magenta, jaune)','Rouge, blanc, noir','Toutes les couleurs'], correct:1,
      hint:'CMJN en imprimerie (cyan, magenta, jaune, noir).' },
    { key:'col-6', q:'La lumière blanche est :',
      options:['Une lumière sans couleur','La superposition de toutes les couleurs du spectre','Uniquement du violet et du rouge','Identique au noir'], correct:1,
      hint:'La lumière blanche = lumière polychromatique contenant toutes les couleurs (décomposable par un prisme).' },
    { key:'col-7', q:'Cyan + Magenta + Jaune (en pigments, synthèse soustractive) donne :',
      options:['Blanc','Gris','Noir (en théorie)','Bleu'], correct:2,
      hint:'Synthèse soustractive : tous les pigments ensemble absorbent tout → noir (en pratique, brun foncé + ajout du N).' },
    { key:'col-8', q:'Un filtre vert laisse passer :',
      options:['Toutes les couleurs','Uniquement la lumière verte','Uniquement le rouge et le bleu','Aucune lumière'], correct:1,
      hint:'Un filtre coloré ne laisse passer que sa propre couleur et absorbe les autres.' },
    { key:'col-9', q:'Vert + Bleu (en lumières) donne :',
      options:['Jaune','Magenta','Cyan','Blanc'], correct:2,
      hint:'Synthèse additive : V + B = Cyan (bleu-vert).' },
  ],

  matiere: [
    { key:'mat-1', q:<>La masse volumique se calcule par :</>,
      options:[<><M>ρ = m × V</M></>, <><M>ρ = m / V</M></>, <><M>ρ = V / m</M></>, <><M>ρ = m + V</M></>], correct:1,
      hint:'ρ (rho) = masse / volume. Unité : kg/m³ ou g/cm³.' },
    { key:'mat-2', q:'La masse volumique de l\'eau (liquide) est environ :',
      options:['1 g/cm³','10 g/cm³','0,1 g/cm³','100 g/cm³'], correct:0,
      hint:'Eau pure : 1 g/cm³ = 1 kg/L = 1000 kg/m³.' },
    { key:'mat-3', q:'Un objet flotte sur l\'eau si sa masse volumique est :',
      options:['Plus grande que celle de l\'eau','Plus petite que celle de l\'eau','Égale à zéro','Peu importe'], correct:1,
      hint:'Densité < 1 g/cm³ → flotte. Densité > 1 → coule.' },
    { key:'mat-4', q:'Les trois états physiques de la matière sont :',
      options:['Chaud, froid, tiède','Solide, liquide, gazeux','Dur, mou, fluide','Lourd, léger, flottant'], correct:1,
      hint:'Solide (forme propre), liquide (épouse le récipient), gaz (occupe tout le volume).' },
    { key:'mat-5', q:'Lors d\'un changement d\'état, la masse :',
      options:['Diminue','Reste constante','Augmente','S\'évapore'], correct:1,
      hint:'Conservation de la masse : la quantité de matière ne change pas. Le volume, si.' },
    { key:'mat-6', q:'Passage de l\'état liquide à l\'état solide :',
      options:['Fusion','Solidification','Vaporisation','Sublimation'], correct:1,
      hint:'Solidification = liquide → solide (l\'inverse de la fusion).' },
    { key:'mat-7', gen: (rnd) => {
      // ρ = m / V, choisir ρ entier pour clarté, V ∈ {10..100}, m = ρ × V
      const rho = 2 + Math.floor(rnd() * 10); // 2..11
      const V = 10 * (1 + Math.floor(rnd() * 10)); // 10..100
      const m = rho * V;
      const used = new Set([rho]);
      let d1 = +(V / rho).toFixed(2), d2 = m + V, d3 = Math.max(1, rho * 10);
      [d1, d2, d3] = [d1, d2, d3].map(x => { while (used.has(x)) x++; used.add(x); return x; });
      const fmt = v => String(v).replace('.', ',');
      return {
        q: <>Un objet de {m} g a un volume de {V} cm³. Sa masse volumique vaut :</>,
        options: [`${rho} g/cm³`, `${fmt(d1)} g/cm³`, `${fmt(d2)} g/cm³`, `${fmt(d3)} g/cm³`],
        correct: 0,
        hint: `ρ = m / V = ${m} / ${V} = ${rho} g/cm³.`,
      };
    } },
    { key:'mat-8', q:'La sublimation est le passage directement de :',
      options:['Liquide → solide','Solide → gaz sans passer par le liquide','Gaz → liquide','Gaz → solide'], correct:1,
      hint:'Sublimation : solide → gaz sans phase liquide intermédiaire (ex. neige carbonique, givre qui s\'évapore).' },
    { key:'mat-9', q:'La glace (eau solide) a une masse volumique d\'environ 0,92 g/cm³. Elle :',
      options:['Coule dans l\'eau liquide','Flotte sur l\'eau liquide','A la même masse volumique que l\'eau liquide','Ne peut pas être mesurée'], correct:1,
      hint:'0,92 < 1 → la glace flotte. Propriété rare dans la nature : la plupart des solides sont plus denses que leur liquide.' },
    // Générateur : ρ = m/V (3 modes : calc ρ, calc m, calc V)
    { key:'mat-10', gen: (rnd) => {
      const mode = Math.floor(rnd() * 3); // 0=calc ρ, 1=calc m, 2=calc V
      // Combos (m en g, V en cm³) avec ρ entier ou à 1 décimale
      const combos = [
        { m:200, V:50,  rho:4 },
        { m:400, V:100, rho:4 },
        { m:300, V:100, rho:3 },
        { m:600, V:200, rho:3 },
        { m:200, V:100, rho:2 },
        { m:500, V:100, rho:5 },
        { m:800, V:200, rho:4 },
        { m:150, V:100, rho:1.5 },
        { m:300, V:200, rho:1.5 },
        { m:700, V:100, rho:7 },
        { m:1000, V:200, rho:5 },
        { m:900, V:300, rho:3 },
      ];
      const c = combos[Math.floor(rnd() * combos.length)];
      function dedup3(correct, cands) {
        const key = v => String(+(v).toFixed(2));
        const used = new Set([key(correct)]);
        const result = [];
        for (const cv of cands) { const k = key(cv); if (!used.has(k)) { used.add(k); result.push(cv); } if (result.length === 3) break; }
        let x = correct + 0.5;
        while (result.length < 3) { const k = key(x); if (!used.has(k)) { used.add(k); result.push(x); } x += 0.5; }
        return result;
      }
      function dedupInt3(correct, cands) {
        const used = new Set([correct]);
        const result = [];
        for (const cv of cands) { if (!used.has(cv)) { used.add(cv); result.push(cv); } if (result.length === 3) break; }
        let x = correct + 10; while (result.length < 3) { if (!used.has(x)) { used.add(x); result.push(x); } x += 10; }
        return result;
      }
      const fmt = v => String(v).replace('.', ',');
      if (mode === 0) {
        const [d1,d2,d3] = dedup3(c.rho, [+(c.m * c.V / 1000).toFixed(1), +(c.V / c.m).toFixed(3), c.rho + 1, c.rho * 2]);
        return {
          q: <>Un objet a une masse de {c.m} g et un volume de {c.V} cm³. Sa masse volumique est :</>,
          options: [`${fmt(c.rho)} g/cm³`, `${fmt(+d1.toFixed(2))} g/cm³`, `${fmt(+d2.toFixed(2))} g/cm³`, `${fmt(+d3.toFixed(2))} g/cm³`], correct: 0,
          hint: `ρ = m / V = ${c.m} / ${c.V} = ${fmt(c.rho)} g/cm³.`,
        };
      } else if (mode === 1) {
        const [d1,d2,d3] = dedupInt3(c.m, [c.m * 2, Math.round(c.m / 2), c.m + 50, c.m + c.V]);
        return {
          q: <>Un matériau a une masse volumique de {fmt(c.rho)} g/cm³ et un volume de {c.V} cm³. Sa masse est :</>,
          options: [`${c.m} g`, `${d1} g`, `${d2} g`, `${d3} g`], correct: 0,
          hint: `m = ρ × V = ${fmt(c.rho)} × ${c.V} = ${c.m} g.`,
        };
      } else {
        const [d1,d2,d3] = dedupInt3(c.V, [c.V * 2, Math.round(c.V / 2), c.V + 75, Math.round(c.m / (c.rho + 1))]);
        return {
          q: <>Un objet de masse {c.m} g a une masse volumique de {fmt(c.rho)} g/cm³. Son volume est :</>,
          options: [`${c.V} cm³`, `${d1} cm³`, `${d2} cm³`, `${d3} cm³`], correct: 0,
          hint: `V = m / ρ = ${c.m} / ${fmt(c.rho)} = ${c.V} cm³.`,
        };
      }
    } },
  ],

  atomes: [
    { key:'ato-1', q:'Un atome est constitué de :',
      options:['Un noyau et des électrons','Deux noyaux','Uniquement d\'électrons','De molécules'], correct:0,
      hint:'Noyau (protons + neutrons) + électrons qui tournent autour.' },
    { key:'ato-2', q:'Le noyau d\'un atome contient :',
      options:['Des électrons et des protons','Des protons et des neutrons','Uniquement des neutrons','Rien'], correct:1,
      hint:'Noyau = protons (charge +) + neutrons (neutres).' },
    { key:'ato-3', q:'Une molécule est :',
      options:['Un atome isolé','Un groupe d\'atomes liés','Un noyau','Un ion'], correct:1,
      hint:'Molécule = plusieurs atomes liés (H₂O, CO₂…).' },
    { key:'ato-4', q:'La formule de l\'eau est :',
      options:['H₂O','CO₂','O₂','H₂'], correct:0,
      hint:'H₂O : 2 hydrogènes + 1 oxygène.' },
    { key:'ato-5', q:'Un ion est un atome qui a :',
      options:['Perdu ou gagné des électrons','Perdu ses neutrons','Changé de noyau','Fondu'], correct:0,
      hint:'Ion positif = a perdu un ou plusieurs électrons. Ion négatif = en a gagné.' },
    { key:'ato-6', q:'L\'ion Na⁺ correspond à :',
      options:['Un atome de sodium ayant perdu 1 électron','Un atome de sodium ayant gagné 1 électron','Un atome d\'azote','Une molécule'], correct:0,
      hint:'Le + indique qu\'il manque un électron ; Na⁺ = sodium cation.' },
    { key:'ato-7', q:'La formule du dioxygène est :',
      options:['O','O₂','O₃','2O'], correct:1,
      hint:'Dioxygène = molécule formée de 2 atomes d\'oxygène liés : O₂.' },
    { key:'ato-8', q:'La formule du dioxyde de carbone est :',
      options:['CO','CO₂','C₂O','C₂O₂'], correct:1,
      hint:'CO₂ : 1 carbone + 2 oxygènes. CO serait le monoxyde de carbone (dangereux).' },
    { key:'ato-9', q:'Un atome neutre a :',
      options:['Plus de protons que d\'électrons','Autant de protons que d\'électrons','Plus d\'électrons que de protons','Aucun électron'], correct:1,
      hint:'Atome neutre : charges + (protons) = charges − (électrons). S\'il y a déséquilibre → ion.' },
    { key:'ato-10', q:'L\'ion chlorure est :',
      options:['Cl⁺','Cl⁻','Cl₂','Cl²⁻'], correct:1,
      hint:'Chlore (Cl) gagne 1 électron → Cl⁻ (ion chlorure, anion). Présent dans le sel de cuisine NaCl.' },
    { key:'ato-11', q:'Combien d\'atomes contient une molécule d\'eau H₂O ?',
      options:['1','2','3','4'], correct:2,
      hint:'H₂O = 2 atomes d\'hydrogène (H) + 1 atome d\'oxygène (O) = 3 atomes au total.' },
  ],

  chimie: [
    { key:'chi-1', q:'Dans une transformation chimique :',
      options:['De nouvelles substances apparaissent','La masse des produits est plus grande','Les atomes disparaissent','Rien ne se passe'], correct:0,
      hint:'Les réactifs sont consommés et donnent des produits. Atomes conservés, masse conservée.' },
    { key:'chi-2', q:'Lors d\'une combustion, il faut trois éléments :',
      options:['Air, eau, feu','Combustible, comburant (O₂), énergie d\'activation','CO₂, H₂O, chaleur','Métal, acide, sel'], correct:1,
      hint:'Triangle du feu : combustible + comburant + énergie.' },
    { key:'chi-3', q:'Le test du dioxyde de carbone CO₂ utilise :',
      options:['Un test à la flamme','L\'eau de chaux (se trouble)','Du sulfate de cuivre','Un aimant'], correct:1,
      hint:'CO₂ + eau de chaux limpide → eau de chaux qui se trouble (devient blanche laiteuse).' },
    { key:'chi-4', q:'Le test du dioxygène O₂ se fait avec :',
      options:['L\'eau de chaux','Une bûchette incandescente qui se rallume','Du sulfate de cuivre anhydre','Un papier pH'], correct:1,
      hint:'Le dioxygène ravive la flamme d\'une bûchette incandescente.' },
    { key:'chi-5', q:'Les espèces avant la réaction s\'appellent :',
      options:['Produits','Réactifs','Solvants','Catalyseurs'], correct:1,
      hint:'Réactifs → Produits (sens de la flèche d\'équation chimique).' },
    { key:'chi-6', q:'La combustion du carbone donne :',
      options:['De l\'eau','Du dioxyde de carbone (CO₂)','Du dihydrogène','De l\'azote'], correct:1,
      hint:'C + O₂ → CO₂' },
    { key:'chi-7', q:'Lors d\'une transformation chimique, la masse totale des produits est :',
      options:['Plus grande que la masse des réactifs','Égale à la masse des réactifs','Plus petite que la masse des réactifs','Impossible à connaître'], correct:1,
      hint:'Loi de Lavoisier : conservation de la masse. Masse réactifs = masse produits.' },
    { key:'chi-8', q:'Le test du dihydrogène H₂ utilise :',
      options:['L\'eau de chaux','Une bûchette incandescente','Une flamme qui produit une détonation (pop)','Du papier pH rouge'], correct:2,
      hint:'H₂ s\'enflamme avec un bruit caractéristique (détonation "pop") au contact d\'une flamme.' },
    { key:'chi-9', q:'La rouille du fer est une transformation :',
      options:['Physique (changement d\'état)','Chimique (réaction entre fer et oxygène/eau)','Nucléaire','Magnétique'], correct:1,
      hint:'Fe + O₂ + H₂O → oxyde de fer (rouille). Nouvelle substance → transformation chimique.' },
    { key:'chi-10', q:'Dans l\'équation C + O₂ → CO₂, combien d\'atomes de carbone à gauche et à droite ?',
      options:['1 et 2','2 et 2','1 et 1','2 et 1'], correct:2,
      hint:'À gauche : 1 C. À droite : 1 C dans CO₂. C\'est bien équilibré pour le carbone.' },
    { key:'chi-11', q:'Un réactif en excès est :', options:['Entièrement consommé à la fin','Partiellement consommé, il en reste à la fin','Transformé en énergie','Identique à un produit'], correct:1,
      hint:'Réactif en excès = quantité introduite > quantité stœchiométrique → il en reste à la fin.' },
    { key:'chi-12', q:<>Dans l\'équation <M>2Mg + O<sub>2</sub> → 2MgO</M>, combien d\'atomes d\'oxygène à gauche et à droite ?</>, options:['1 et 1','2 et 2','2 et 1','1 et 2'], correct:1, hint:'À gauche : O₂ = 2 atomes O. À droite : 2MgO = 2×1 = 2 atomes O. Équation équilibrée.' },
  ],

  ph: [
    { key:'ph-1', q:'Une solution est acide si son pH est :',
      options:['= 7','> 7','< 7','= 0'], correct:2,
      hint:'pH < 7 : acide ; pH = 7 : neutre ; pH > 7 : basique.' },
    { key:'ph-2', q:'L\'eau pure a un pH de :',
      options:['0','7','14','1'], correct:1,
      hint:'Eau pure = neutre = pH 7.' },
    { key:'ph-3', q:'Plus une solution acide est diluée, son pH :',
      options:['Se rapproche de 0','Se rapproche de 7','Se rapproche de 14','Ne change pas'], correct:1,
      hint:'Dilution d\'un acide → pH se rapproche de 7 (neutre).' },
    { key:'ph-4', q:'Exemples de solutions basiques :',
      options:['Jus de citron','Vinaigre','Eau savonneuse, soude','Eau gazeuse'], correct:2,
      hint:'Acides : citron, vinaigre, cola. Bases : savon, soude, ammoniaque.' },
    { key:'ph-5', q:'Le papier pH donne une mesure :',
      options:['Du poids','De l\'acidité','De la température','Du volume'], correct:1,
      hint:'Le papier pH change de couleur selon l\'acidité/basicité de la solution.' },
    { key:'ph-6', q:'L\'échelle de pH va de :',
      options:['0 à 7','−7 à 7','0 à 14','1 à 100'], correct:2,
      hint:'Échelle de pH : de 0 (très acide) à 14 (très basique), 7 = neutre.' },
    { key:'ph-7', q:'Le vinaigre a un pH d\'environ 3. C\'est une solution :',
      options:['Neutre','Basique','Acide','Impossible à classer'], correct:2,
      hint:'pH 3 < 7 → acide. L\'acide acétique (vinaigre) est un acide faible mais clairement acide.' },
  ],

  mouvement: [
    { key:'mou-1', q:<>La formule de la vitesse moyenne est :</>,
      options:[<><M>v = d × t</M></>, <><M>v = d / t</M></>, <><M>v = t / d</M></>, <><M>v = d + t</M></>], correct:1,
      hint:'v = distance / temps. Unités : m/s ou km/h.' },
    { key:'mou-2', gen: (rnd) => {
      // v = d / t avec valeurs entières m/s
      const v = 2 + Math.floor(rnd() * 15); // 2..16
      const t = 2 + Math.floor(rnd() * 18); // 2..19
      const d = v * t;
      const used = new Set([v]);
      let d1 = d, d2 = t, d3 = Math.round(d * 3.6);
      [d1, d2, d3] = [d1, d2, d3].map(x => { while (used.has(x)) x++; used.add(x); return x; });
      return {
        q: <>Un coureur fait {d} m en {t} s. Sa vitesse moyenne est :</>,
        options: [`${v} m/s`, `${d1} m/s`, `${d2} m/s`, `${d3} m/s`],
        correct: 0,
        hint: `v = d / t = ${d} / ${t} = ${v} m/s.`,
      };
    } },
    { key:'mou-3', q:'Un mouvement est dit uniforme quand :',
      options:['La vitesse augmente','La vitesse diminue','La vitesse est constante','Il n\'y a pas de vitesse'], correct:2,
      hint:'Uniforme = vitesse constante. Accéléré = v augmente. Décéléré (ou ralenti) = v diminue.' },
    { key:'mou-4', q:'Pour étudier un mouvement, il faut choisir :',
      options:['Une couleur','Un référentiel','Un kilo','Un ami'], correct:1,
      hint:'Un référentiel (objet de référence) : sans lui, impossible de dire si un corps bouge.' },
    { key:'mou-5', gen: (rnd) => {
      const pairs = [[18,5],[36,10],[54,15],[72,20],[90,25],[108,30],[126,35],[144,40],[162,45],[180,50],[198,55],[216,60]];
      const [kmh, ms] = pairs[Math.floor(rnd() * pairs.length)];
      const used = new Set([ms]);
      let d1 = kmh, d2 = +(kmh / 10).toFixed(1), d3 = ms * 3;
      [d1, d2, d3] = [d1, d2, d3].map(x => { while (used.has(x)) x++; used.add(x); return x; });
      const fmt = v => String(v).replace('.', ',');
      return {
        q: <>Convertir {kmh} km/h en m/s :</>,
        options: [`${ms} m/s`, `${fmt(d1)} m/s`, `${fmt(d2)} m/s`, `${fmt(d3)} m/s`],
        correct: 0,
        hint: `km/h → m/s : ÷ 3,6. ${kmh} / 3,6 = ${ms} m/s.`,
      };
    } },
    { key:'mou-6', q:'Un mouvement rectiligne a une trajectoire :',
      options:['Courbe','En ligne droite','Circulaire','Aléatoire'], correct:1,
      hint:'Rectiligne = droite. Circulaire = cercle. Curviligne = courbe quelconque.' },
    { key:'mou-7', q:'La distance d\'arrêt d\'un véhicule dépend :',
      options:['Uniquement de la vitesse','De la vitesse et du temps de réaction (et des frottements)','Uniquement du poids','Du moteur seul'], correct:1,
      hint:'Distance totale = distance de réaction (v × t_réaction) + distance de freinage (dépend de v²).' },
    { key:'mou-8', q:'Si la vitesse d\'un véhicule est multipliée par 2, sa distance de freinage est :',
      options:['Multipliée par 2','Multipliée par 4','Divisée par 2','Inchangée'], correct:1,
      hint:'La distance de freinage est proportionnelle à v² → si v × 2, distance × 4.' },
    { key:'mou-9', q:'La trajectoire d\'une bille roulant sur une table lisse (sans friction) est :',
      options:['Courbe vers le bas','Rectiligne uniforme','Circulaire','Elle s\'arrête immédiatement'], correct:1,
      hint:'Pas de force horizontale → pas de changement de vitesse → mouvement rectiligne uniforme (1ère loi de Newton).' },
    // Générateur : v=d/t + conversions km/h ↔ m/s
    { key:'mou-10', gen: (rnd) => {
      const mode = Math.floor(rnd() * 3); // 0=calc v(m/s), 1=km/h→m/s, 2=m/s→km/h
      const triplets_ms = [
        { d:100, t:10, v:10 }, { d:200, t:25, v:8 }, { d:500, t:50, v:10 },
        { d:300, t:30, v:10 }, { d:150, t:15, v:10 }, { d:400, t:40, v:10 },
        { d:180, t:20, v:9 },  { d:240, t:30, v:8 },  { d:350, t:50, v:7 },
      ];
      const kmh_to_ms = [
        { kmh:36, ms:10 }, { kmh:72, ms:20 }, { kmh:90, ms:25 },
        { kmh:108, ms:30 }, { kmh:54, ms:15 }, { kmh:18, ms:5 },
        { kmh:144, ms:40 }, { kmh:126, ms:35 }, { kmh:180, ms:50 },
      ];
      if (mode === 0) {
        const tr = triplets_ms[Math.floor(rnd() * triplets_ms.length)];
        const d1 = tr.v + 5; const d2 = tr.v - 2; const d3 = tr.d + tr.t;
        return {
          q: <>Un objet parcourt {tr.d} m en {tr.t} s. Sa vitesse moyenne est :</>,
          options: [`${tr.v} m/s`, `${d1} m/s`, `${d2} m/s`, `${d3} m/s`], correct: 0,
          hint: `v = d / t = ${tr.d} / ${tr.t} = ${tr.v} m/s.`,
        };
      } else if (mode === 1) {
        const c = kmh_to_ms[Math.floor(rnd() * kmh_to_ms.length)];
        const d1 = c.ms + 5; const d2 = c.kmh / 10; const d3 = c.ms * 3;
        const fmt = v => String(v).replace('.', ',');
        return {
          q: <>{c.kmh} km/h correspond à combien de m/s ?</>,
          options: [`${c.ms} m/s`, `${fmt(d1)} m/s`, `${fmt(d2)} m/s`, `${fmt(d3)} m/s`], correct: 0,
          hint: `Diviser par 3,6 : ${c.kmh} ÷ 3,6 = ${c.ms} m/s.`,
        };
      } else {
        const c = kmh_to_ms[Math.floor(rnd() * kmh_to_ms.length)];
        const d1 = c.kmh + 18; const d2 = c.kmh - 18; const d3 = c.ms * 10;
        return {
          q: <>{c.ms} m/s correspond à combien de km/h ?</>,
          options: [`${c.kmh} km/h`, `${d1} km/h`, `${d2} km/h`, `${d3} km/h`], correct: 0,
          hint: `Multiplier par 3,6 : ${c.ms} × 3,6 = ${c.kmh} km/h.`,
        };
      }
    } },
  ],

  poids: [
    { key:'poi-1', q:<>La relation entre le poids et la masse est :</>,
      options:[<><M>P = m + g</M></>, <><M>P = m × g</M></>, <><M>P = m / g</M></>, <><M>m = P × g</M></>], correct:1,
      hint:'P (newtons) = m (kg) × g (N/kg). Sur Terre : g ≈ 9,8 N/kg (on utilise souvent 10).' },
    { key:'poi-2', q:'L\'unité du poids est :',
      options:['Le kilogramme','Le newton','Le gramme','Le pascal'], correct:1,
      hint:'Poids → newton (N). Masse → kilogramme (kg). Attention à ne pas confondre !' },
    { key:'poi-3', q:'Sur Terre, la valeur de la pesanteur g vaut environ :',
      options:['1 N/kg','10 N/kg','100 N/kg','0 N/kg'], correct:1,
      hint:'g ≈ 9,8 N/kg sur Terre, arrondi à 10 N/kg en 4ème.' },
    { key:'poi-4', gen: (rnd) => {
      // P = m × g sur Terre, g=10 N/kg
      const m = 1 + Math.floor(rnd() * 50);
      const P = m * 10;
      const used = new Set([P]);
      let d1 = m, d2 = m + 10, d3 = P * 10;
      [d1, d2, d3] = [d1, d2, d3].map(x => { while (used.has(x)) x++; used.add(x); return x; });
      return {
        q: <>Un objet de masse {m} kg a un poids sur Terre d'environ (g = 10 N/kg) :</>,
        options: [`${P} N`, `${d1} N`, `${d2} N`, `${d3} N`],
        correct: 0,
        hint: `P = m × g = ${m} × 10 = ${P} N.`,
      };
    } },
    { key:'poi-5', q:'Si on emmène un objet de la Terre vers la Lune, sa masse :',
      options:['Diminue','Augmente','Reste la même','Disparaît'], correct:2,
      hint:'La masse est invariable (quantité de matière). Le poids, lui, dépend de g et change.' },
    { key:'poi-6', q:'Un astronaute qui pèse 700 N sur Terre pèse sur la Lune environ :',
      options:['700 N','350 N','120 N','0 N'], correct:2,
      hint:'g_lune ≈ 1,6 N/kg (≈ 1/6 de Terre). Poids lunaire ≈ 1/6 du poids terrestre.' },
    { key:'poi-7', q:'La masse d\'un objet sur la Lune par rapport à la Terre :',
      options:['Est divisée par 6','Est 6 fois plus grande','Est la même','Est nulle'], correct:2,
      hint:'La MASSE est une propriété intrinsèque (invariable). Seul le POIDS change selon g.' },
    { key:'poi-8', q:'Le poids est une force : comment est-elle dirigée ?',
      options:['Verticalement vers le haut','Horizontalement','Verticalement vers le bas','Dans toutes les directions'], correct:2,
      hint:'Le poids est la force d\'attraction gravitationnelle de la Terre : toujours vertical vers le bas.' },
    // Générateur : P = m × g (calc P, calc m, Lune/Mars)
    { key:'poi-9', gen: (rnd) => {
      const mode = Math.floor(rnd() * 3); // 0=calc P Terre, 1=calc m Terre, 2=autre astre
      const masses = [1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 20, 25, 50, 100];
      const m = masses[Math.floor(rnd() * masses.length)];
      const g_terre = 10;
      if (mode === 0) {
        const P = m * g_terre;
        const d1 = P / 2; const d2 = P * 2; const d3 = m + g_terre;
        return {
          q: <>Un objet de masse {m} kg est sur Terre (g = 10 N/kg). Son poids est :</>,
          options: [`${P} N`, `${d1} N`, `${d2} N`, `${d3} N`], correct: 0,
          hint: `P = m × g = ${m} × 10 = ${P} N.`,
        };
      } else if (mode === 1) {
        const P = m * g_terre;
        function dedupKg(correct, cands) {
          const used = new Set([correct]);
          const result = [];
          for (const c of cands) { if (!used.has(c)) { used.add(c); result.push(c); } if (result.length === 3) break; }
          let x = correct + 1; while (result.length < 3) { if (!used.has(x)) { used.add(x); result.push(x); } x++; }
          return result;
        }
        const [d1,d2,d3] = dedupKg(m, [m * 2, m / 2, m + 3, m * 5, m - 2]);
        return {
          q: <>Un objet a un poids de {P} N sur Terre (g = 10 N/kg). Sa masse est :</>,
          options: [`${m} kg`, `${d1} kg`, `${d2} kg`, `${d3} kg`], correct: 0,
          hint: `m = P / g = ${P} / 10 = ${m} kg.`,
        };
      } else {
        // Lune g ≈ 1,6 ou Mars g ≈ 3,7
        const astres_g = [
          { nom:'Lune', g:1.6 },
          { nom:'Mars', g:3.7 },
        ];
        const astre = astres_g[Math.floor(rnd() * astres_g.length)];
        const P = +(m * astre.g).toFixed(1);
        const d1 = m * g_terre; const d2 = +(P * 2).toFixed(1); const d3 = +(P + 10).toFixed(1);
        return {
          q: <>Un objet de masse {m} kg est sur {astre.nom} (g = {astre.g} N/kg). Son poids est :</>,
          options: [`${P} N`, `${d1} N`, `${d2} N`, `${d3} N`], correct: 0,
          hint: `P = m × g = ${m} × ${astre.g} = ${P} N.`,
        };
      }
    } },
    { key:'poi-10', q:'Le poids est représenté par un vecteur :',
      options:['Horizontal','Vertical, orienté vers le bas, appliqué au centre de gravité','Vertical, orienté vers le haut','Dirigé vers l\'astre le plus proche'], correct:1,
      hint:'Vecteur poids P⃗ : direction verticale, sens vers le bas (sur Terre), point d\'application au centre de gravité, norme en newtons.' },
    { key:'poi-11', q:'En chute libre dans le vide, deux objets de masses différentes :',
      options:['L\'objet le plus lourd tombe plus vite','Tombent à la même vitesse (accélération g identique)','Le plus léger tombe plus vite','L\'un monte, l\'autre descend'], correct:1,
      hint:'Expérience de Galilée : dans le vide, plume et boule de plomb tombent à la même vitesse. Dans l\'air, l\'air freine la plume.' },
    // Générateur : P = m × g avec masse en grammes (conversion requise)
    { key:'poi-12', gen: (rnd) => {
      const grams = [200, 500, 250, 100, 800, 1500, 2500, 750, 400, 1200];
      const g_val = grams[Math.floor(rnd() * grams.length)];
      const m = g_val / 1000;
      const P = +(m * 10).toFixed(1);
      const fmt = v => String(v).replace('.', ',');
      const used = new Set([P]);
      let d1 = +(g_val * 10).toFixed(1), d2 = +(P * 10).toFixed(1), d3 = +(P / 10).toFixed(2);
      [d1, d2, d3] = [d1, d2, d3].map(x => { while (used.has(x)) x = +(x + 0.5).toFixed(2); used.add(x); return x; });
      return {
        q: <>Un objet a une masse de {g_val} g (g = 10 N/kg). Son poids est :</>,
        options: [`${fmt(P)} N`, `${fmt(d1)} N`, `${fmt(d2)} N`, `${fmt(d3)} N`], correct: 0,
        hint: `Convertir : ${g_val} g = ${fmt(m)} kg. P = m × g = ${fmt(m)} × 10 = ${fmt(P)} N.`,
      };
    } },
    { key:'poi-13', q:'Un objet pèse 50 N sur Terre (g = 10 N/kg). Sur Jupiter (g = 26 N/kg), son poids est environ :', options:['50 N','5 N','130 N','500 N'], correct:2, hint:'m = P_Terre / g_Terre = 50 / 10 = 5 kg. P_Jupiter = 5 × 26 = 130 N.' },
  ],

  },
  PICK: {
  electricite: 4, loiOhm: 3, optique: 3, couleurs: 3, matiere: 3,
  atomes: 3, chimie: 4, ph: 2, mouvement: 3, poids: 2,
  },
  PLANS: {
    electricite: {
      'non-acquis': ['Distinguer clairement CIRCUIT SÉRIE (un seul chemin) et DÉRIVATION (plusieurs branches)', 'Apprendre par cœur : ampèremètre en SÉRIE, voltmètre en DÉRIVATION', 'Revoir les unités : ampère (A), volt (V), ohm (Ω)', 'S\'entraîner à repérer un court-circuit sur un schéma'],
      'fragile':    ['Exercices avec 2-3 lampes en configurations mixtes', 'Savoir prévoir l\'éclat d\'une lampe quand on ajoute/enlève un dipôle']
    },
    loiOhm: {
      'non-acquis': ['Retenir la formule : U = R × I (et ses 2 dérivées : I = U/R et R = U/I)', 'S\'entraîner sur 10 calculs simples par jour', 'Attention aux unités : si R en ohms et I en A, alors U en volts'],
      'fragile':    ['Problèmes avec changement de R ou de tension d\'alimentation', 'Tracer la caractéristique U = f(I) d\'un conducteur ohmique']
    },
    optique: {
      'non-acquis': ['Propagation rectiligne dans un milieu transparent et homogène', 'Vitesse de la lumière : c = 300 000 km/s', 'Source primaire (Soleil, lampe) vs secondaire (objets éclairés)'],
      'fragile':    ['Représenter un rayon lumineux par une demi-droite avec flèche', 'Savoir expliquer pourquoi on voit un objet']
    },
    couleurs: {
      'non-acquis': ['Synthèse ADDITIVE (lumières, écrans) : RVB → R+V+B = blanc', 'Synthèse SOUSTRACTIVE (peinture, impression) : CMJ', 'Un objet rouge = diffuse le rouge et absorbe le reste'],
      'fragile':    ['Prévoir la couleur d\'un objet selon la lumière qui l\'éclaire']
    },
    matiere: {
      'non-acquis': ['Formule ρ = m / V, unité kg/m³ ou g/cm³', 'Eau = 1 g/cm³. Si ρ_objet < 1 → flotte ; > 1 → coule', 'Les 3 états et leurs 6 changements d\'état (fusion/solidification, vaporisation/liquéfaction, sublimation/condensation)'],
      'fragile':    ['Calculs de masse volumique avec conversions d\'unités', 'Conservation de la masse lors d\'un changement d\'état']
    },
    atomes: {
      'non-acquis': ['Atome = noyau (protons + neutrons) + électrons', 'Molécule = groupe d\'atomes liés (ex. H₂O, CO₂, O₂)', 'Ion = atome qui a perdu ou gagné des électrons'],
      'fragile':    ['Écrire les formules des molécules usuelles', 'Différencier atomes, molécules et ions sur des exemples']
    },
    chimie: {
      'non-acquis': ['PRIORITÉ : RÉACTIFS → PRODUITS, conservation des atomes et de la masse', 'Tests à connaître par cœur : CO₂ (eau de chaux), O₂ (bûchette), H₂ (détonation), eau (sulfate de cuivre anhydre)', 'Combustion : combustible + O₂ (comburant) + énergie'],
      'fragile':    ['Équilibrer une équation-bilan simple', 'Calcul de masse dans une réaction chimique']
    },
    ph: {
      'non-acquis': ['Échelle : pH 0-14. Acide < 7, neutre = 7, basique > 7', 'Papier pH ou indicateur coloré pour mesurer', 'Exemples : citron (acide), eau pure (neutre), eau savonneuse (basique)'],
      'fragile':    ['Dilution d\'un acide ou d\'une base : pH se rapproche de 7']
    },
    mouvement: {
      'non-acquis': ['Formule v = d / t, unités m/s et km/h', 'Conversions : 1 km/h = 1000 m / 3600 s ≈ 0,28 m/s (et ×3,6 pour l\'inverse)', 'Notion de référentiel indispensable'],
      'fragile':    ['Mouvement uniforme / accéléré / décéléré', 'Exercices avec changement de vitesse']
    },
    poids: {
      'non-acquis': ['PRIORITÉ : masse (kg, invariable) ≠ poids (newtons, dépend de g)', 'Formule P = m × g ; sur Terre g ≈ 10 N/kg', 'Le poids change selon l\'astre ; la masse, non'],
      'fragile':    ['Calculs P ↔ m avec différentes valeurs de g (Terre, Lune, Mars)', 'Représenter le poids par un vecteur vertical vers le bas']
    },
  },
};
