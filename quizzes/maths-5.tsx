// Source éditable — quiz maths-5. Régénéré automatiquement dans index.html via build.sh.
window.ALL_QUIZZES['maths-5'] = {
  SEARCH_SITES: 'site:maths-et-tiques.fr OR site:fr.khanacademy.org OR site:lumni.fr',
  YT_SUFFIX: 'Yvan Monka',
  SUMMER_TOPIC: 'maths',
  SUBJECT: { id:'maths-5', name:'Mathématiques', short:'Maths', level:'Fin de 5ème', mark:'∑', tagline:'Évaluation diagnostique' },
  DOMAINS: {
    relatifs:   { id:'relatifs',   name:'Nombres relatifs (intro)',          short:'Relatifs',   coef:3, color:'#0f5e6b', icon:'±',  search:'nombres relatifs 5eme' },
    fractions:  { id:'fractions',  name:'Fractions (opérations)',            short:'Fractions',  coef:4, color:'#0d7a6f', icon:'⅔',  search:'fractions 5eme' },
    proportion: { id:'proportion', name:'Proportionnalité & pourcentages',   short:'Proportion', coef:3, color:'#b97a0e', icon:'%',  search:'proportionnalite pourcentage 5eme' },
    litteral:   { id:'litteral',   name:'Calcul littéral (intro)',           short:'Littéral',   coef:3, color:'#b8323d', icon:'k', search:'calcul litteral 5eme' },
    triangles:  { id:'triangles',  name:'Triangles (angles, inégalité)',     short:'Triangles',  coef:3, color:'#a01b34', icon:'△',  search:'triangles inegalite triangulaire 5eme' },
    parallelog: { id:'parallelog', name:'Parallélogrammes',                  short:'Parallélog.',coef:2, color:'#7c3aed', icon:'▱', search:'parallelogramme 5eme' },
    aires:      { id:'aires',      name:'Aires & périmètres (disque)',       short:'Aires',      coef:2, color:'#c2410c', icon:'○',  search:'aire perimetre disque 5eme' },
    volumes:    { id:'volumes',    name:'Volumes (prismes, cylindres)',      short:'Volumes',    coef:2, color:'#166a39', icon:'V',  search:'volume prisme cylindre 5eme' },
    symetrie:   { id:'symetrie',   name:'Symétrie centrale',                 short:'Symétrie',   coef:2, color:'#1e7a8a', icon:'⊙',  search:'symetrie centrale 5eme' },
    stats:      { id:'stats',      name:'Statistiques & diagrammes',         short:'Stats',      coef:2, color:'#c4307a', icon:'▥',  search:'statistiques moyenne 5eme' },
  },
  RESOURCES: [
    { label:'Maths et Tiques 5ème',  author:'Yvan Monka (gratuit)', url:'https://www.maths-et-tiques.fr/index.php/cours-en-ligne/cours-cinquieme' },
    { label:'Khan Academy 5ème',     author:'Cours + exos',          url:'https://fr.khanacademy.org/math/cycle-4-5eme-v2' },
    { label:'Lumni — Maths 5ème',    author:'France TV éducation',   url:'https://www.lumni.fr/college/cinquieme/mathematiques' },
    { label:'Sésamath',              author:'Manuel + exos',         url:'https://manuel.sesamath.net/' },
  ],
  POOL: {
    relatifs: [
      // rel-1 : addition (+a) + (-b) — signes opposés
      { key:'rel-1', gen: (rnd) => {
        const A = 1 + Math.floor(rnd() * 19);   // +1..+19
        const B = 1 + Math.floor(rnd() * 19);   // 1..19
        const good = A - B;
        const piege1 = A + B;                   // oublie le signe −
        const piege2 = -(A + B);
        const piege3 = good - 1;
        const used = new Set([good, piege1, piege2]);
        let v3 = piege3; while (used.has(v3)) { v3 += (v3 >= 0 ? 1 : -1); }
        const fmt = (n: number) => n >= 0 ? `+${n}` : `${n}`;
        return {
          q: <>Calcule : <M>(+{A}) + (−{B}) =</M></>,
          options: [fmt(good), fmt(piege1), fmt(piege2), fmt(v3)],
          correct: 0,
          hint: `Signes opposés : soustraire les valeurs et garder le signe du plus grand. ${A} − ${B} = ${good >= 0 ? '+' : ''}${good}.`,
        };
      } },
      // rel-2 : addition (−a) + (−b) — deux négatifs
      { key:'rel-2', gen: (rnd) => {
        const A = 2 + Math.floor(rnd() * 14);
        const B = 2 + Math.floor(rnd() * 14);
        const good = -(A + B);
        const piege1 = A + B;           // oublie le signe −
        const piege2 = A - B;           // soustraction au lieu d'addition
        const piege3 = -(Math.abs(A - B));
        const used = new Set([good, piege1, piege2]);
        let v3 = piege3; while (used.has(v3)) { v3--; }
        return {
          q: <>Calcule : <M>(−{A}) + (−{B}) =</M></>,
          options: [`${good}`, `+${piege1}`, `${piege2 >= 0 ? '+' : ''}${piege2}`, `${v3}`],
          correct: 0,
          hint: `Deux négatifs : on additionne les valeurs et on garde le signe −. −${A} − ${B} = −${A+B}.`,
        };
      } },
      // rel-3 : soustraire un négatif — piège classique
      { key:'rel-3', gen: (rnd) => {
        const A = 1 + Math.floor(rnd() * 15);
        const B = 1 + Math.floor(rnd() * 15);
        const good = A + B;             // −(−B) = +B
        const piege1 = A - B;           // oublie que − × − = +
        const piege2 = -(A + B);
        const piege3 = -(A - B);
        const used = new Set([good, piege1, piege2]);
        let v3 = piege3; while (used.has(v3)) { v3++; }
        const fmt = (n: number) => n >= 0 ? `+${n}` : `${n}`;
        return {
          q: <>Calcule : <M>(+{A}) − (−{B}) =</M></>,
          options: [fmt(good), fmt(piege1), fmt(piege2), fmt(v3)],
          correct: 0,
          hint: `Soustraire un négatif = additionner le positif : +${A} − (−${B}) = +${A} + ${B} = +${good}.`,
        };
      } },
      // rel-4 : opposé d'un nombre relatif (paramétrique)
      { key:'rel-4', gen: (rnd) => {
        const neg = rnd() > 0.5;   // moitié du temps on demande l'opposé d'un négatif
        const v = 2 + Math.floor(rnd() * 18);   // 2..19 (≥2 pour éviter ±1 trop proches de 0)
        const num = neg ? -v : v;
        const good = -num;
        const fmtP = (n: number) => n > 0 ? `+${n}` : `${n}`;
        const piege1 = num;           // le nombre lui-même (confusion)
        const piege2 = -(v - 1);      // off-by-one avec bon signe
        // piege3 : valeur de signe opposé mais valeur absolue différente
        let p3 = good > 0 ? good + 1 : good - 1;
        const used = new Set([fmtP(good), fmtP(piege1), fmtP(piege2)]);
        while (used.has(fmtP(p3))) { p3 += (good >= 0 ? 1 : -1); }
        return {
          q: <>L'opposé de <M>{fmtP(num)}</M> est :</>,
          options: [fmtP(good), fmtP(piege1), fmtP(piege2), fmtP(p3)],
          correct: 0,
          hint: `Opposé = même valeur absolue, signe contraire : opposé de ${fmtP(num)} = ${fmtP(good)}.`,
        };
      } },
      // rel-5 : écart de température (paramétrique)
      { key:'rel-5', gen: (rnd) => {
        const start = -10 + Math.floor(rnd() * 10);  // −10..−1
        const drop  = 2 + Math.floor(rnd() * 12);    // baisse de 2..13°
        const good  = start - drop;
        const piege1 = start + drop;   // mauvais sens
        const used = new Set([good, piege1]);
        let piege2 = -drop; while (used.has(piege2)) { piege2--; } used.add(piege2);
        let piege3 = good + 1; while (used.has(piege3)) { piege3--; }
        const fmt = (n: number) => n >= 0 ? `+${n}` : `${n}`;
        return {
          q: <>Il fait {fmt(start)} °C. La température baisse de {drop} °C. Température finale :</>,
          options: [`${fmt(good)} °C`, `${fmt(piege1)} °C`, `${fmt(piege2)} °C`, `${fmt(piege3)} °C`],
          correct: 0,
          hint: `${fmt(start)} − ${drop} = ${fmt(good)} °C.`,
        };
      } },
      // rel-6 : comparaison de deux relatifs négatifs (paramétrique)
      { key:'rel-6', gen: (rnd) => {
        const A = 1 + Math.floor(rnd() * 20);
        let B = 1 + Math.floor(rnd() * 20);
        while (B === A) { B = 1 + Math.floor(rnd() * 20); }
        const bigger = Math.max(-A, -B);
        const smaller = Math.min(-A, -B);
        const biggerAbs = Math.abs(bigger);   // valeur absolue du plus grand
        const smallerAbs = Math.abs(smaller);
        return {
          q: <>Quel nombre est plus grand : <M>−{A}</M> ou <M>−{B}</M> ?</>,
          options: [`−${biggerAbs}`, `−${smallerAbs}`, 'Ils sont égaux', 'On ne peut pas comparer'],
          correct: 0,
          hint: `Sur la droite graduée, −${biggerAbs} est plus à droite que −${smallerAbs} → −${biggerAbs} > −${smallerAbs}.`,
        };
      } },
      // rel-7 : addition (+a) + (+b) (paramétrique — base facile)
      { key:'rel-7', gen: (rnd) => {
        const A = 5 + Math.floor(rnd() * 20);
        const B = 5 + Math.floor(rnd() * 20);
        const good = A + B;
        const piege1 = good + 1;
        const piege2 = good - 1;
        const piege3 = A - B;
        const used = new Set([good, piege1, piege2]);
        let v3 = piege3; while (used.has(v3)) { v3 += (v3 >= 0 ? 1 : -1); }
        const fmt = (n: number) => n >= 0 ? `+${n}` : `${n}`;
        return {
          q: <>Calcule : <M>(+{A}) + (+{B}) =</M></>,
          options: [fmt(good), fmt(piege1), fmt(piege2), fmt(v3)],
          correct: 0,
          hint: `Deux positifs : même règle que les entiers naturels. ${A} + ${B} = ${good}.`,
        };
      } },
      // rel-8 : soustraction (paramétrique)
      { key:'rel-8', gen: (rnd) => {
        const A = 3 + Math.floor(rnd() * 18);
        const B = A + 1 + Math.floor(rnd() * 10);  // B > A pour résultat négatif
        const good = A - B;           // résultat négatif
        const piege1 = B - A;         // inversion
        const piege2 = A + B;
        const piege3 = good - 1;
        const used = new Set([good, piege1, piege2]);
        let v3 = piege3; while (used.has(v3)) { v3--; }
        const fmt = (n: number) => n >= 0 ? `+${n}` : `${n}`;
        return {
          q: <>Calcule : <M>(+{A}) − (+{B}) =</M></>,
          options: [fmt(good), `+${piege1}`, fmt(piege2), fmt(v3)],
          correct: 0,
          hint: `${A} − ${B} = ${good}.`,
        };
      } },
      // rel-9 : multiplication d'un relatif par un entier
      { key:'rel-9', gen: (rnd) => {
        const neg = rnd() > 0.5;
        const A = 2 + Math.floor(rnd() * 9);
        const B = 2 + Math.floor(rnd() * 9);
        const num = neg ? -A : A;
        const good = num * B;
        const fmt = (n: number) => n >= 0 ? `+${n}` : `${n}`;
        let piege1 = -good;                // mauvais signe (inverse de good)
        let piege2 = num + B;              // addition au lieu de multiplication
        const used = new Set([good]);
        while (used.has(piege1)) piege1 += (piege1 >= 0 ? 1 : -1); used.add(piege1);
        while (used.has(piege2)) piege2 += (piege2 >= 0 ? 1 : -1); used.add(piege2);
        let v3 = good - 1; while (used.has(v3)) { v3 += (v3 < 0 ? -1 : 1); }
        return {
          q: <>Calcule : <M>({fmt(num)}) × {B} =</M></>,
          options: [fmt(good), fmt(piege1), fmt(piege2), fmt(v3)],
          correct: 0,
          hint: `${neg ? '−' : '+'}${A} × ${B} = ${fmt(good)} (signe × positif = même signe).`,
        };
      } },
      // rel-10 : multiplication de deux relatifs (règle des signes)
      { key:'rel-10', gen: (rnd) => {
        const sA = rnd() > 0.5 ? 1 : -1;
        const sB = rnd() > 0.5 ? 1 : -1;
        const A = 2 + Math.floor(rnd() * 8);
        const B = 2 + Math.floor(rnd() * 8);
        const numA = sA * A, numB = sB * B;
        const good = numA * numB;
        const fmt = (n: number) => n >= 0 ? `+${n}` : `${n}`;
        let piege1 = -good;    // mauvais signe
        let piege2 = numA + numB;
        const used = new Set([good]);
        while (used.has(piege1)) piege1 += (piege1 >= 0 ? 1 : -1); used.add(piege1);
        while (used.has(piege2)) piege2 += (piege2 >= 0 ? 1 : -1); used.add(piege2);
        let v3 = good + 1; while (used.has(v3)) { v3++; }
        return {
          q: <>Calcule : <M>({fmt(numA)}) × ({fmt(numB)}) =</M></>,
          options: [fmt(good), fmt(piege1), fmt(piege2), fmt(v3)],
          correct: 0,
          hint: `Signe : (${sA > 0 ? '+' : '−'}) × (${sB > 0 ? '+' : '−'}) = ${good >= 0 ? '+' : '−'}. ${A} × ${B} = ${A*B}. Résultat : ${fmt(good)}.`,
        };
      } },
      // rel-11 : position sur la droite graduée (comparaison)
      { key:'rel-11', gen: (rnd) => {
        const A = 1 + Math.floor(rnd() * 12);
        const B = -(1 + Math.floor(rnd() * 12));
        const fmt = (n: number) => n >= 0 ? `+${n}` : `${n}`;
        return {
          q: <>Quel nombre est le plus grand : <M>{fmt(A)}</M> ou <M>{fmt(B)}</M> ?</>,
          options: [fmt(A), fmt(B), 'Ils sont égaux', 'Impossible à comparer'],
          correct: 0,
          hint: `Tout nombre positif est supérieur à tout nombre négatif. ${fmt(A)} > ${fmt(B)}.`,
        };
      } },
      // rel-12 : valeur absolue
      { key:'rel-12', gen: (rnd) => {
        const neg = rnd() > 0.5;
        const v = 2 + Math.floor(rnd() * 18);
        const num = neg ? -v : v;
        const fmt = (n: number) => n >= 0 ? `+${n}` : `${n}`;
        return {
          q: <><M>|{fmt(num)}|</M> (valeur absolue) vaut :</>,
          options: [String(v), String(-v), String(neg ? v - 1 : v + 1), '0'],
          correct: 0,
          hint: `La valeur absolue est toujours positive : |${fmt(num)}| = ${v}.`,
        };
      } },
      // rel-13 : division d'un relatif
      { key:'rel-13', gen: (rnd) => {
        const neg = rnd() > 0.5;
        const q = 2 + Math.floor(rnd() * 8);
        const d = 2 + Math.floor(rnd() * 5);
        const dividend = neg ? -(q * d) : (q * d);
        const good = neg ? -q : q;
        const fmt = (n: number) => n >= 0 ? `+${n}` : `${n}`;
        let piege1 = -good;
        let piege2 = dividend - d;
        const used = new Set([good]);
        while (used.has(piege1)) piege1 += (piege1 >= 0 ? 1 : -1); used.add(piege1);
        while (used.has(piege2)) piege2 += (piege2 >= 0 ? 1 : -1); used.add(piege2);
        let v3 = good + 1; while (used.has(v3)) { v3++; }
        return {
          q: <>Calcule : <M>({fmt(dividend)}) ÷ {d} =</M></>,
          options: [fmt(good), fmt(piege1), fmt(piege2), fmt(v3)],
          correct: 0,
          hint: `${Math.abs(dividend)} ÷ ${d} = ${q}. Signe : ${neg ? '− ÷ + = −' : '+ ÷ + = +'}. Résultat : ${fmt(good)}.`,
        };
      } },
      // rel-14 : écart entre deux relatifs (distance)
      { key:'rel-14', gen: (rnd) => {
        const A = -(2 + Math.floor(rnd() * 10));  // négatif
        const B = 2 + Math.floor(rnd() * 10);     // positif
        const good = B - A;   // toujours positif
        const piege1 = A - B; // signe inversé
        const piege2 = B + A; // somme confondue avec distance
        const used = new Set([good, piege1, piege2]);
        let v3 = good - 1; while (used.has(v3) || v3 <= 0) { v3++; }
        const fmt = (n: number) => n >= 0 ? `+${n}` : `${n}`;
        return {
          q: <>Quelle est la distance entre <M>{fmt(A)}</M> et <M>{fmt(B)}</M> sur la droite ?</>,
          options: [String(good), String(Math.abs(piege2)), String(good + 2), String(good - 2 > 0 ? good - 2 : good + 3)],
          correct: 0,
          hint: `Distance = B − A = ${fmt(B)} − (${fmt(A)}) = ${B} + ${-A} = ${good}.`,
        };
      } },
      // rel-15 : encadrement entre deux entiers
      { key:'rel-15', gen: (rnd) => {
        const base = -(5 + Math.floor(rnd() * 10));
        const frac = (1 + Math.floor(rnd() * 8)) / 10;
        const val = base - frac;  // entre base-1 et base
        const fmt = (n: number) => n >= 0 ? `+${n}` : `${n}`;
        return {
          q: <>Entre quels entiers consécutifs se trouve <M>{fmt(base)}−0,{Math.round(frac * 10)}</M> ?</>,
          options: [
            `${fmt(base-1)} et ${fmt(base)}`,
            `${fmt(base)} et ${fmt(base+1)}`,
            `${fmt(base-2)} et ${fmt(base-1)}`,
            `${fmt(base+1)} et ${fmt(base+2)}`,
          ],
          correct: 0,
          hint: `${fmt(base)} − 0,${Math.round(frac*10)} est légèrement en dessous de ${fmt(base)}, donc entre ${fmt(base-1)} et ${fmt(base)}.`,
        };
      } },
    ],
    fractions: [
      // fra-1 : addition même dénominateur (paramétrique)
      { key:'fra-1', gen: (rnd) => {
        const d = 5 + Math.floor(rnd() * 8);   // dénominateur 5..12
        const n1 = 1 + Math.floor(rnd() * (d - 2));
        const n2 = 1 + Math.floor(rnd() * (d - n1 - 1));
        const numGood = n1 + n2;
        // Simplification éventuelle
        function gcd(a: number, b: number): number { return b === 0 ? a : gcd(b, a % b); }
        const g = gcd(numGood, d);
        const nS = numGood / g; const dS = d / g;
        const goodStr = g > 1 ? `${nS}/${dS}` : `${numGood}/${d}`;
        const wrong1 = `${n1 + n2}/${d + d}`;   // additionne aussi les dénos
        const wrong2 = `${n1}/${d + n2}`;
        const wrong3 = `${numGood + 1}/${d}`;
        const used = new Set([goodStr, wrong1, wrong2, wrong3]);
        return {
          q: <>Calcule (simplifié si possible) : <F n={n1} d={d}/> + <F n={n2} d={d}/> =</>,
          options: [goodStr, wrong1, wrong2, wrong3],
          correct: 0,
          hint: `Même dénominateur : ${n1} + ${n2} = ${numGood}, puis ${numGood}/${d}${g > 1 ? ` = ${nS}/${dS}` : ''}.`,
        };
      } },
      // fra-2 : addition dénominateurs multiples l'un de l'autre (paramétrique)
      { key:'fra-2', gen: (rnd) => {
        // Choisir d1 et d2=k*d1 (k=2,3,4)
        const d1 = 2 + Math.floor(rnd() * 5);         // 2..6
        const k  = 2 + Math.floor(rnd() * 3);         // 2..4
        const d2 = d1 * k;                             // multiple
        const n1 = 1 + Math.floor(rnd() * (d1 - 1));
        const n2 = 1 + Math.floor(rnd() * (d2 - 1));
        const numGood = n1 * k + n2;
        const dGood = d2;
        function gcd(a: number, b: number): number { return b === 0 ? a : gcd(b, a % b); }
        const g = gcd(numGood, dGood);
        const nS = numGood / g; const dS = dGood / g;
        const goodStr = g > 1 ? `${nS}/${dS}` : `${numGood}/${dGood}`;
        const wrong1 = `${n1 + n2}/${d1 + d2}`;   // additionne numérateurs ET dénominateurs
        const wrong2 = `${n1 * k + n2 + 1}/${dGood}`;
        const wrong3 = `${n1}/${d2}`;              // oublie de mettre au même déno
        const used = new Set([goodStr, wrong1, wrong2, wrong3]);
        return {
          q: <>Calcule : <F n={n1} d={d1}/> + <F n={n2} d={d2}/> =</>,
          options: [goodStr, wrong1, wrong2, wrong3],
          correct: 0,
          hint: `Déno commun = ${d2}. ${n1}/${d1} = ${n1*k}/${d2}. Donc ${n1*k}/${d2} + ${n2}/${d2} = ${numGood}/${dGood}${g>1 ? ` = ${nS}/${dS}` : ''}.`,
        };
      } },
      // fra-3 : simplification à l'irréductible (paramétrique)
      { key:'fra-3', gen: (rnd) => {
        // Tire le résultat simplifié d'abord puis multiplie par un facteur commun
        const nSimp = 1 + Math.floor(rnd() * 6);
        const dSimp = nSimp + 1 + Math.floor(rnd() * 6);
        function gcd(a: number, b: number): number { return b === 0 ? a : gcd(b, a % b); }
        // S'assurer que nSimp/dSimp est irréductible
        const g0 = gcd(nSimp, dSimp);
        const ns = nSimp / g0; const ds = dSimp / g0;
        const factor = 2 + Math.floor(rnd() * 4);   // 2..5
        const n = ns * factor; const d = ds * factor;
        const goodStr = `${ns}/${ds}`;
        const wrong1  = `${n}/${d}`;                  // pas simplifié
        const wrong2  = `${ns + 1}/${ds}`;
        const wrong3  = `${ns}/${ds + 1}`;
        const used = new Set([goodStr, wrong1, wrong2, wrong3]);
        return {
          q: <>Simplifie à l'irréductible : <F n={n} d={d}/> =</>,
          options: [goodStr, wrong1, wrong2, wrong3],
          correct: 0,
          hint: `PGCD(${n}, ${d}) = ${factor}. ${n}÷${factor} = ${ns}, ${d}÷${factor} = ${ds}. Résultat : ${goodStr}.`,
        };
      } },
      // fra-4 : soustraction même dénominateur (paramétrique)
      { key:'fra-4', gen: (rnd) => {
        const d = 4 + Math.floor(rnd() * 9);    // 4..12
        const n1 = 2 + Math.floor(rnd() * (d - 2));
        const n2 = 1 + Math.floor(rnd() * (n1 - 1));   // n2 < n1 → résultat > 0
        const numGood = n1 - n2;
        function gcd(a: number, b: number): number { return b === 0 ? a : gcd(b, a % b); }
        const g = gcd(numGood, d);
        const nS = numGood / g; const dS = d / g;
        const goodStr = g > 1 ? `${nS}/${dS}` : `${numGood}/${d}`;
        const wrong1Safe = `${numGood}/0`;          // soustrait aussi les dénos → 0 au déno
        const used = new Set([goodStr, wrong1Safe]);
        // wrong2 : inversion numérateur/dénominateur, mais différent de goodStr
        let w2n = n2, w2d = n1;
        if (`${w2n}/${w2d}` === goodStr) { w2n = numGood + 1; w2d = d; }
        const wrong2 = `${w2n}/${w2d}`; used.add(wrong2);
        let w3n = numGood + 1; let wrong3 = `${w3n}/${d}`; while (used.has(wrong3)) { w3n++; wrong3 = `${w3n}/${d}`; }
        return {
          q: <>Calcule (simplifié si possible) : <F n={n1} d={d}/> − <F n={n2} d={d}/> =</>,
          options: [goodStr, wrong1Safe, wrong2, wrong3],
          correct: 0,
          hint: `Même dénominateur : ${n1} − ${n2} = ${numGood}, résultat : ${goodStr}.`,
        };
      } },
      // fra-5 : addition avec dénominateurs croisés (paramétrique)
      { key:'fra-5', gen: (rnd) => {
        // Tire 2 dénominateurs premiers entre eux
        const denoms = [[2,3],[2,5],[3,4],[3,5],[4,5],[2,7],[3,7],[4,7],[5,6],[5,7]];
        const idx = Math.floor(rnd() * denoms.length);
        const [d1, d2] = denoms[idx];
        const n1 = 1 + Math.floor(rnd() * (d1 - 1));
        const n2 = 1 + Math.floor(rnd() * (d2 - 1));
        const dLcm = d1 * d2;
        const numGood = n1 * d2 + n2 * d1;
        function gcd(a: number, b: number): number { return b === 0 ? a : gcd(b, a % b); }
        const g = gcd(numGood, dLcm);
        const nS = numGood / g; const dS = dLcm / g;
        const goodStr = g > 1 ? `${nS}/${dS}` : `${numGood}/${dLcm}`;
        const wrong1 = `${n1 + n2}/${d1 + d2}`;       // additionne tout
        const wrong2 = `${numGood + 1}/${dLcm}`;
        const wrong3 = `${n1 * d2 + n2 * d1 + 1}/${dLcm}`;
        const used = new Set([goodStr, wrong1, wrong2]);
        let v3 = wrong3; while (used.has(v3)) { v3 = `${parseInt(v3) + 1}/${dLcm}`; }
        return {
          q: <>Calcule : <F n={n1} d={d1}/> + <F n={n2} d={d2}/> =</>,
          options: [goodStr, wrong1, wrong2, v3],
          correct: 0,
          hint: `Déno commun = ${dLcm}. ${n1}/${d1} = ${n1*d2}/${dLcm}, ${n2}/${d2} = ${n2*d1}/${dLcm}. Somme : ${numGood}/${dLcm}${g>1 ? ` = ${goodStr}` : ''}.`,
        };
      } },
      // fra-6 : multiplication de fractions (paramétrique)
      { key:'fra-6', gen: (rnd) => {
        const nA = 1 + Math.floor(rnd() * 5);
        const dA = 2 + Math.floor(rnd() * 6);
        const nB = 1 + Math.floor(rnd() * 5);
        const dB = 2 + Math.floor(rnd() * 6);
        const numProd = nA * nB;
        const denProd = dA * dB;
        function gcd(a: number, b: number): number { return b === 0 ? a : gcd(b, a % b); }
        const g = gcd(numProd, denProd);
        const nS = numProd / g; const dS = denProd / g;
        const goodStr = g > 1 ? `${nS}/${dS}` : `${numProd}/${denProd}`;
        const used = new Set([goodStr]);
        // wrong1 : additionne au lieu de multiplier — uniquify
        let w1n = nA + nB, w1d = dA + dB;
        let w1 = `${w1n}/${w1d}`; while (used.has(w1)) { w1n++; w1 = `${w1n}/${w1d}`; } used.add(w1);
        // wrong2 : off-by-one sur numérateur
        let w2n = numProd + 1;
        let w2 = `${w2n}/${denProd}`; while (used.has(w2)) { w2n++; w2 = `${w2n}/${denProd}`; } used.add(w2);
        // wrong3 : non simplifié (si g>1) ou off-by-one
        let w3n = g > 1 ? numProd : nS + 1, w3d = g > 1 ? denProd : dS;
        let w3 = `${w3n}/${w3d}`; while (used.has(w3)) { w3n++; w3 = `${w3n}/${w3d}`; }
        return {
          q: <>Calcule (résultat simplifié) : <F n={nA} d={dA}/> × <F n={nB} d={dB}/> =</>,
          options: [goodStr, w1, w2, w3],
          correct: 0,
          hint: `(${nA}×${nB})/(${dA}×${dB}) = ${numProd}/${denProd}${g>1 ? ` = ${goodStr}` : ''}.`,
        };
      } },
      // fra-7 : division de fractions (paramétrique)
      { key:'fra-7', gen: (rnd) => {
        // résultat = nA/dA × dB/nB
        const nA = 1 + Math.floor(rnd() * 5);
        const dA = 2 + Math.floor(rnd() * 5);
        const nB = 1 + Math.floor(rnd() * 5);
        const dB = 2 + Math.floor(rnd() * 5);
        const numProd = nA * dB;
        const denProd = dA * nB;
        function gcd(a: number, b: number): number { return b === 0 ? a : gcd(b, a % b); }
        const g = gcd(numProd, denProd);
        const nS = numProd / g; const dS = denProd / g;
        const goodStr = g > 1 ? `${nS}/${dS}` : `${numProd}/${denProd}`;
        const used = new Set([goodStr]);
        let w1n2 = nA * nB, w1d2 = dA * dB;
        let w1 = `${w1n2}/${w1d2}`; while (used.has(w1)) { w1n2++; w1 = `${w1n2}/${w1d2}`; } used.add(w1);
        let w2n2 = nA, w2d2 = dA * nB;
        let w2 = `${w2n2}/${w2d2}`; while (used.has(w2)) { w2n2++; w2 = `${w2n2}/${w2d2}`; } used.add(w2);
        let w3n2 = g > 1 ? numProd : nS, w3d2 = g > 1 ? denProd : dS + 1;
        let w3 = `${w3n2}/${w3d2}`; while (used.has(w3)) { w3n2++; w3 = `${w3n2}/${w3d2}`; }
        return {
          q: <>Calcule : <F n={nA} d={dA}/> ÷ <F n={nB} d={dB}/> =</>,
          options: [goodStr, w1, w2, w3],
          correct: 0,
          hint: `Diviser = multiplier par l'inverse : ${nA}/${dA} × ${dB}/${nB} = ${numProd}/${denProd}${g>1 ? ` = ${goodStr}` : ''}.`,
        };
      } },
      // fra-8 : comparaison de deux fractions (paramétrique)
      { key:'fra-8', gen: (rnd) => {
        // Choisit deux fractions distinctes avec déno premier entre eux
        const pairs = [[3,5,5,8],[2,3,3,4],[1,3,2,5],[3,7,4,9],[2,5,3,7],[5,8,7,12],[1,4,2,7],[3,8,5,12],[2,9,3,13],[4,11,5,14],[3,10,2,7],[1,6,2,11],[5,9,7,13],[4,13,3,10]];
        const idx = Math.floor(rnd() * pairs.length);
        const [n1,d1,n2,d2] = pairs[idx];
        const cross1 = n1 * d2;
        const cross2 = n2 * d1;
        // On veut que la bonne réponse varie : parfois fra1 > fra2, parfois fra2 > fra1
        const flip = rnd() > 0.5;
        const [na, da, nb, db, crossA, crossB] = flip
          ? [n2, d2, n1, d1, cross2, cross1]
          : [n1, d1, n2, d2, cross1, cross2];
        const bigger = crossA >= crossB ? `${na}/${da}` : `${nb}/${db}`;
        const smaller = crossA >= crossB ? `${nb}/${db}` : `${na}/${da}`;
        // correctIdx : 0 = na/da plus grand, 1 = nb/db plus grand
        const correctIdx = crossA >= crossB ? 0 : 1;
        const wrong2 = 'Elles sont égales';
        const wrong3 = 'Impossible à comparer';
        return {
          q: <>Quelle fraction est la plus grande : <F n={na} d={da}/> ou <F n={nb} d={db}/> ?</>,
          options: [`${na}/${da}`, `${nb}/${db}`, wrong2, wrong3],
          correct: correctIdx,
          hint: `Produits croisés : ${na}×${db}=${na*db} et ${nb}×${da}=${nb*da}. La plus grande est ${bigger}.`,
        };
      } },
      // fra-9 : addition même dénominateur résultat > 1 (paramétrique)
      { key:'fra-9', gen: (rnd) => {
        const d = 3 + Math.floor(rnd() * 6);   // 3..8
        const n1 = Math.ceil(d / 2) + Math.floor(rnd() * Math.ceil(d / 2));
        const n2 = Math.ceil(d / 2) + Math.floor(rnd() * Math.ceil(d / 2));
        const numGood = n1 + n2;
        function gcd(a: number, b: number): number { return b === 0 ? a : gcd(b, a % b); }
        const g = gcd(numGood, d);
        const nS = numGood / g; const dS = d / g;
        const goodStr = g > 1 ? `${nS}/${dS}` : `${numGood}/${d}`;
        const wrong1 = `${n1 + n2}/${d * 2}`;
        const wrong2 = `${numGood - 1}/${d}`;
        const wrong3 = `${numGood}/${d - 1}`;
        const used = new Set([goodStr, wrong1, wrong2, wrong3]);
        return {
          q: <>Calcule (résultat simplifié si possible) : <F n={n1} d={d}/> + <F n={n2} d={d}/> =</>,
          options: [goodStr, wrong1, wrong2, wrong3],
          correct: 0,
          hint: `Même déno : ${n1} + ${n2} = ${numGood}. Résultat : ${numGood}/${d}${g>1 ? ` = ${goodStr}` : ''}.`,
        };
      } },
      // fra-10 : simplification PGCD (paramétrique)
      { key:'fra-10', gen: (rnd) => {
        const ns = 1 + Math.floor(rnd() * 7);   // numérateur simplifié
        const ds = ns + 1 + Math.floor(rnd() * 7); // dénominateur simplifié
        function gcd(a: number, b: number): number { return b === 0 ? a : gcd(b, a % b); }
        const g0 = gcd(ns, ds);
        const nsIr = ns / g0; const dsIr = ds / g0;
        const factor = 3 + Math.floor(rnd() * 5);  // 3..7
        const n = nsIr * factor; const d = dsIr * factor;
        const goodStr = `${nsIr}/${dsIr}`;
        const wrong1 = `${n}/${d}`;              // non simplifié
        const wrong2 = `${nsIr + 1}/${dsIr}`;
        const wrong3 = `${nsIr}/${dsIr + 1}`;
        const used = new Set([goodStr, wrong1, wrong2, wrong3]);
        return {
          q: <>Simplifie à l'irréductible : <F n={n} d={d}/> =</>,
          options: [goodStr, wrong1, wrong2, wrong3],
          correct: 0,
          hint: `PGCD(${n}, ${d}) = ${factor}. ${n}÷${factor} = ${nsIr}, ${d}÷${factor} = ${dsIr}. Résultat : ${goodStr}.`,
        };
      } },
    ],
    proportion: [
      // pro-1 : pourcentage d'un entier (paramétrique)
      { key:'pro-1', gen: (rnd) => {
        const pcts = [10, 15, 20, 25, 30, 40, 50, 75];
        const bases = [40, 60, 80, 100, 120, 200, 240, 300, 400, 500];
        const iPct  = Math.floor(rnd() * pcts.length);
        const iBase = Math.floor(rnd() * bases.length);
        const pct   = pcts[iPct];
        const base  = bases[iBase];
        const good  = pct * base / 100;
        const used = new Set([good]);
        // piege1 : addition au lieu de multiplication
        let p1 = pct + base; while (used.has(p1)) { p1++; } used.add(p1);
        // piege2 : inversion (base/pct)
        let p2 = Math.round(base / pct); while (used.has(p2)) { p2++; } used.add(p2);
        // piege3 : off
        let p3 = Math.round(good + base / 10); while (used.has(p3)) { p3++; }
        return {
          q: <>{pct} % de {base} :</>,
          options: [String(good), String(p1), String(p2), String(p3)],
          correct: 0,
          hint: `${pct}/100 × ${base} = ${good}.`,
        };
      } },
      // pro-2 : réduction en pourcentage (paramétrique)
      { key:'pro-2', gen: (rnd) => {
        const reduc = [10, 15, 20, 25, 30, 40, 50];
        const prices = [20, 40, 60, 80, 100, 120, 150, 200];
        const iR = Math.floor(rnd() * reduc.length);
        const iP = Math.floor(rnd() * prices.length);
        const r = reduc[iR]; const price = prices[iP];
        const good  = price * (100 - r) / 100;
        const used = new Set([good]);
        let p1 = price - r; while (used.has(p1)) { p1++; } used.add(p1);
        let p2 = price * r / 100; while (used.has(p2)) { p2++; } used.add(p2);
        let p3 = price + price * r / 100; while (used.has(p3)) { p3++; }
        return {
          q: <>Un article à {price} € est soldé à −{r} %. Prix final :</>,
          options: [`${good} €`, `${p1} €`, `${p2} €`, `${p3} €`],
          correct: 0,
          hint: `${price} × (1 − ${r}/100) = ${price} × ${(100-r)/100} = ${good} €.`,
        };
      } },
      // pro-3 : règle de 3 / produit en croix (paramétrique)
      { key:'pro-3', gen: (rnd) => {
        const unitPrice = 1 + Math.floor(rnd() * 5);  // prix unitaire 1..5 €/kg
        const qty1 = 2 + Math.floor(rnd() * 6);       // quantité connue 2..7
        const qty2 = qty1 + 1 + Math.floor(rnd() * 5);// quantité recherchée > qty1
        const total1 = unitPrice * qty1;
        const good   = unitPrice * qty2;
        const used = new Set([good]);
        let p1 = total1 + qty2; while (used.has(p1)) { p1++; } used.add(p1);
        let p2 = Math.round(total1 * qty2 / 10); while (used.has(p2)) { p2++; } used.add(p2);
        let p3 = good + unitPrice; while (used.has(p3)) { p3++; }
        return {
          q: <>{qty1} kg de pommes coûtent {total1} €. Prix de {qty2} kg :</>,
          options: [`${good} €`, `${p1} €`, `${p2} €`, `${p3} €`],
          correct: 0,
          hint: `Prix au kg : ${total1} ÷ ${qty1} = ${unitPrice} €. Pour ${qty2} kg : ${unitPrice} × ${qty2} = ${good} €.`,
        };
      } },
      // pro-4 : vitesse v = d/t (paramétrique)
      { key:'pro-4', gen: (rnd) => {
        const v = [50, 60, 70, 80, 90, 100, 110, 120][Math.floor(rnd() * 8)];
        const t = [2, 3, 4][Math.floor(rnd() * 3)];   // t≥2 pour éviter d=v quand t=1
        const d = v * t;
        const used = new Set([v]);
        let p1 = d + v; while (used.has(p1)) { p1++; } used.add(p1);
        let p2 = d - v; while (used.has(p2)) { p2 += 5; } used.add(p2);
        let p3 = v + 10; while (used.has(p3)) { p3 += 5; }
        return {
          q: <>Un train parcourt {d} km en {t} h. Sa vitesse moyenne :</>,
          options: [`${v} km/h`, `${p1} km/h`, `${p2} km/h`, `${p3} km/h`],
          correct: 0,
          hint: `v = d ÷ t = ${d} ÷ ${t} = ${v} km/h.`,
        };
      } },
      // pro-5 : distance à partir de vitesse et temps (paramétrique)
      { key:'pro-5', gen: (rnd) => {
        // Durées fractionnaires rondes uniquement pour éviter 0.3333 à l'affichage
        const tFracs: Array<[number, string, string, number]> = [
          [30, '30 min', '1/2', 0.5],
          [45, '45 min', '3/4', 0.75],
          [15, '15 min', '1/4', 0.25],
        ];
        const v = [60, 80, 100, 120][Math.floor(rnd() * 4)];
        const [tMin, tStr, frac, tH] = tFracs[Math.floor(rnd() * tFracs.length)];
        const good = Math.round(v * tH);
        const piege1 = v + tMin;
        const piege2 = Math.round(v / tH);
        const piege3 = v;
        const used = new Set([good, piege1, piege2, piege3]);
        let p3 = piege3; while (used.has(p3)) { p3 += 5; }
        return {
          q: <>Une voiture roule à {v} km/h. En {tStr}, elle parcourt :</>,
          options: [`${good} km`, `${piege1} km`, `${piege2} km`, `${p3} km`],
          correct: 0,
          hint: `${tStr} = ${frac} h. d = v × t = ${v} × ${frac} = ${good} km.`,
        };
      } },
      // pro-6 : augmentation en pourcentage (paramétrique)
      { key:'pro-6', gen: (rnd) => {
        const augm = [5, 10, 15, 20, 25, 30][Math.floor(rnd() * 6)];
        const prices = [40, 60, 80, 100, 120, 150, 200][Math.floor(rnd() * 7)];
        const good  = prices * (100 + augm) / 100;
        const used = new Set([good]);
        let p1 = prices + augm; while (used.has(p1)) { p1++; } used.add(p1);
        let p2 = prices * augm / 100; while (used.has(p2)) { p2++; } used.add(p2);
        let p3 = prices * (100 - augm) / 100; while (used.has(p3)) { p3++; }
        return {
          q: <>Un article vaut {prices} €. Son prix augmente de {augm} %. Nouveau prix :</>,
          options: [`${good} €`, `${p1} €`, `${p2} €`, `${p3} €`],
          correct: 0,
          hint: `${prices} × (1 + ${augm}/100) = ${prices} × ${(100+augm)/100} = ${good} €.`,
        };
      } },
      // pro-7 : 50% d'un nombre (paramétrique — facile, ancrage)
      { key:'pro-7', gen: (rnd) => {
        const even = (2 + Math.floor(rnd() * 20)) * 10;  // multiple de 20, 40..420 → 20 valeurs
        const good = even / 2;
        const used = new Set([good]);
        let p1 = even - 50; while (used.has(p1)) { p1 += 10; } used.add(p1);
        let p2 = even * 2; while (used.has(p2)) { p2 += 10; } used.add(p2);
        let p3 = Math.round(even / 5); while (used.has(p3)) { p3 += 5; }
        return {
          q: <>50 % de {even} :</>,
          options: [String(good), String(p1), String(p2), String(p3)],
          correct: 0,
          hint: `50 % = moitié. ${even} ÷ 2 = ${good}.`,
        };
      } },
      // pro-8 : échelle carte (statique — piège sur conversion cm → km)
      { key:'pro-8', q:'Sur une carte à l\'échelle 1/20 000, 5 cm représentent :', options:['100 m','1 km','10 km','500 m'], correct:1, hint:'5 × 20 000 = 100 000 cm = 1 000 m = 1 km.' },
      // pro-9 : trouver le coefficient de proportionnalité
      { key:'pro-9', gen: (rnd) => {
        const k = 2 + Math.floor(rnd() * 9);   // coef 2..10
        const x1 = 3 + Math.floor(rnd() * 6);
        const x2 = x1 + 2 + Math.floor(rnd() * 4);
        const y1 = k * x1, y2 = k * x2;
        const used = new Set([k]);
        let w2 = k + 1; while (used.has(w2)) w2++; used.add(w2);
        let w3 = k - 1;
        if (w3 <= 0 || used.has(w3)) { w3 = k + 2; while (used.has(w3)) w3++; }
        used.add(w3);
        let w4 = y1 + y2; while (used.has(w4)) w4++;
        return {
          q: <>Un tableau de proportionnalité donne : {x1} → {y1} et {x2} → {y2}. Le coefficient est :</>,
          options: [String(k), String(w2), String(w3), String(w4)],
          correct: 0,
          hint: `${y1} ÷ ${x1} = ${k} (vérifié : ${y2} ÷ ${x2} = ${k}).`,
        };
      } },
      // pro-10 : taux de variation / coefficient multiplicateur
      { key:'pro-10', gen: (rnd) => {
        const pcts = [5, 10, 15, 20, 25, 30];
        const pct = pcts[Math.floor(rnd() * pcts.length)];
        const mult = 1 + pct / 100;
        const multStr = String(mult).replace('.', ',');
        const wrongA = 1 - pct / 100;
        const wrongAStr = String(wrongA).replace('.', ',');
        const wrongB = String(pct / 100).replace('.', ',');
        // Distracteur "1 + pct" (confusion pct ↔ coef). Évite la collision
        // avec multStr quand pct est à 2 chiffres (ex 25 → 1,25 = mult).
        const wrongC = pct < 10 ? `1,${pct}0` : String(1 + pct).replace('.', ',');
        return {
          q: `Un prix augmente de ${pct} %. Le coefficient multiplicateur est :`,
          options: [multStr, wrongAStr, wrongB, wrongC],
          correct: 0,
          hint: `Augmentation de ${pct} % → multiplier par 1 + ${pct}/100 = ${multStr}.`,
        };
      } },
      // pro-11 : trouver la 4e proportionnelle
      { key:'pro-11', gen: (rnd) => {
        const k = 2 + Math.floor(rnd() * 7);
        const a = 3 + Math.floor(rnd() * 7);
        const b = 2 + Math.floor(rnd() * 6);
        const c = a * k;
        const good = b * k;
        const used = new Set([good]);
        let w2 = b + k; while (used.has(w2)) w2++; used.add(w2);
        let w3 = c + b; while (used.has(w3)) w3++; used.add(w3);
        let w4 = good + 1; while (used.has(w4)) w4++;
        return {
          q: <>Tableau de proportionnalité : <M>{a} → {b}</M> et <M>{c} → ?</M></>,
          options: [String(good), String(w2), String(w3), String(w4)],
          correct: 0,
          hint: `${c} = ${a} × ${k}, donc ? = ${b} × ${k} = ${good}.`,
        };
      } },
      // pro-12 : distance-temps → vitesse
      { key:'pro-12', gen: (rnd) => {
        const speeds = [40, 50, 60, 70, 80, 90, 100];
        const v = speeds[Math.floor(rnd() * speeds.length)];
        const t = 1 + Math.floor(rnd() * 4);
        const d = v * t;
        const used = new Set([v]);
        let w2 = d + v; while (used.has(w2)) w2++; used.add(w2);
        let w3 = v + 10; while (used.has(w3)) w3 += 5; used.add(w3);
        let w4 = v - 10; while (used.has(w4) || w4 <= 0) w4 += 5; used.add(w4);
        return {
          q: <>Un cycliste parcourt {d} km en {t} h. Sa vitesse moyenne :</>,
          options: [`${v} km/h`, `${w2} km/h`, `${w3} km/h`, `${w4} km/h`],
          correct: 0,
          hint: `v = d ÷ t = ${d} ÷ ${t} = ${v} km/h.`,
        };
      } },
      // pro-13 : pourcentage d'augmentation globale
      { key:'pro-13', gen: (rnd) => {
        const base = [80, 100, 120, 150, 200][Math.floor(rnd() * 5)];
        const after = [90, 110, 130, 140, 165, 180, 210, 240][Math.floor(rnd() * 8)];
        const diff = after - base;
        if (diff <= 0) return { q: 'Prix initial 100 €, nouveau 120 €. Augmentation (%) :', options:['20 %','12 %','120 %','80 %'], correct:0, hint:'(120-100)/100 × 100 = 20 %.' };
        const pct = Math.round(diff / base * 100);
        const used = new Set([pct]);
        let w2 = pct + 5; while (used.has(w2)) w2 += 5; used.add(w2);
        let w3 = pct - 5; while (used.has(w3) || w3 <= 0) w3 += 5; used.add(w3);
        let w4 = Math.round(after / base * 100); while (used.has(w4)) w4 += 5;
        return {
          q: <>Prix : {base} € → {after} €. Taux d'augmentation :</>,
          options: [`${pct} %`, `${w2} %`, `${w3} %`, `${w4} %`],
          correct: 0,
          hint: `(${after} − ${base}) ÷ ${base} × 100 = ${diff} ÷ ${base} × 100 ≈ ${pct} %.`,
        };
      } },
      // pro-14 : trouver le prix initial après réduction
      { key:'pro-14', gen: (rnd) => {
        const finalPrices = [60, 80, 90, 120, 150];
        const final = finalPrices[Math.floor(rnd() * finalPrices.length)];
        const pcts = [20, 25, 40, 50];
        const pct = pcts[Math.floor(rnd() * pcts.length)];
        const initial = Math.round(final / ((100 - pct) / 100));
        const used = new Set([initial]);
        let w2 = initial + 10; while (used.has(w2)) w2 += 5; used.add(w2);
        let w3 = initial - 10; while (used.has(w3) || w3 <= 0) w3 += 5; used.add(w3);
        let w4 = Math.round(final * (100 + pct) / 100); while (used.has(w4)) w4 += 5;
        return {
          q: `Après une réduction de ${pct} %, un article coûte ${final} €. Prix initial :`,
          options: [`${initial} €`, `${w2} €`, `${w3} €`, `${w4} €`],
          correct: 0,
          hint: `Prix initial × (1 − ${pct}/100) = ${final} → initial = ${final} ÷ ${(100-pct)/100} ≈ ${initial} €.`,
        };
      } },
      // pro-15 : proportionnalité — vérification
      { key:'pro-15', gen: (rnd) => {
        // Tableau proportionnel : a/b = c/d (produits croisés égaux)
        const a = 2 + Math.floor(rnd() * 6);
        const k = 2 + Math.floor(rnd() * 5);
        const b = a * (k + 1);
        const c = 3 + Math.floor(rnd() * 5);
        const d = c * (k + 1);
        // Distracteur : changer d légèrement
        const dWrong = d + 1;
        return {
          q: `Le tableau (${a} ; ${c}) et (${b} ; ${d}) est-il proportionnel ?`,
          options: ['Oui', 'Non', 'On ne peut pas savoir', `Non, il faudrait ${dWrong}`],
          correct: 0,
          hint: `${a} × ${d} = ${a*d} et ${c} × ${b} = ${c*b}. Produits égaux → tableau proportionnel.`,
        };
      } },
    ],
    litteral: [
      // lit-1 : substitution ax + b (paramétrique)
      { key:'lit-1', gen: (rnd) => {
        const a = 2 + Math.floor(rnd() * 6);   // coefficient 2..7
        const b = 1 + Math.floor(rnd() * 10);  // constante 1..10
        const x = 1 + Math.floor(rnd() * 8);   // valeur 1..8
        const good = a * x + b;
        const used = new Set([good]);
        let p1 = a * x; while (used.has(p1)) { p1++; } used.add(p1);           // oublie + b
        let p2 = a + x + b; while (used.has(p2)) { p2++; } used.add(p2);      // additionne tout
        let p3 = (a + b) * x; while (used.has(p3)) { p3++; }                   // distributivité incorrecte
        return {
          q: <>Pour <M>x = {x}</M>, que vaut <M>A = {a}x + {b}</M> ?</>,
          options: [String(good), String(p1), String(p2), String(p3)],
          correct: 0,
          hint: `A = ${a}×${x} + ${b} = ${a*x} + ${b} = ${good}.`,
        };
      } },
      // lit-2 : réduction d'expression (paramétrique)
      { key:'lit-2', gen: (rnd) => {
        const a1 = 1 + Math.floor(rnd() * 6);
        const a2 = 1 + Math.floor(rnd() * 6);
        const b1 = 1 + Math.floor(rnd() * 10);
        const b2 = 1 + Math.floor(rnd() * 10);
        const sumA = a1 + a2;
        const sumB = b1 + b2;
        const good  = `${sumA}x + ${sumB}`;
        const used = new Set([good]);
        // wrong1 : soustraction au lieu d'addition pour les constantes
        const diffB = b1 - b2;
        let w1 = `${sumA}x + ${diffB}`; if (w1 === good) { w1 = `${sumA}x + ${diffB - 1}`; } used.add(w1);
        // wrong2 : multiplie les coefficients
        let w2c = a1 * a2;
        let w2 = `${w2c}x + ${sumB}`; while (used.has(w2)) { w2c++; w2 = `${w2c}x + ${sumB}`; } used.add(w2);
        // wrong3 : fusionne tout
        let w3c = sumA + sumB;
        let w3 = `${w3c}x`; while (used.has(w3)) { w3c++; w3 = `${w3c}x`; }
        return {
          q: <>Réduis : <M>{a1}x + {b1} + {a2}x + {b2} =</M></>,
          options: [good, w1, w2, w3],
          correct: 0,
          hint: `Grouper les termes en x : (${a1}+${a2})x = ${sumA}x. Constantes : ${b1}+${b2} = ${sumB}. Résultat : ${good}.`,
        };
      } },
      // lit-3 : distributivité simple k(x + p) (paramétrique)
      { key:'lit-3', gen: (rnd) => {
        const k = 2 + Math.floor(rnd() * 6);   // 2..7
        const p = 1 + Math.floor(rnd() * 10);  // 1..10
        const good = `${k}x + ${k * p}`;
        const wrong1 = `${k}x + ${p}`;         // oublie de distribuer sur p
        const wrong2 = `${k}x × ${k * p}`;     // signe × au lieu de +
        const wrong3 = `${k + p}x`;            // additionne k et p
        const used = new Set([good, wrong1, wrong2, wrong3]);
        return {
          q: <>Développe : <M>{k}(x + {p}) =</M></>,
          options: [good, wrong1, wrong2, wrong3],
          correct: 0,
          hint: `${k}×x + ${k}×${p} = ${k}x + ${k*p}.`,
        };
      } },
      // lit-4 : tester si un nombre est solution d'une équation (paramétrique)
      { key:'lit-4', gen: (rnd) => {
        const a = 2 + Math.floor(rnd() * 5);
        const sol = 1 + Math.floor(rnd() * 8);
        const b = 1 + Math.floor(rnd() * 10);
        const rhs = a * sol + b;
        return {
          q: <>Le nombre {sol} est-il solution de <M>{a}x + {b} = {rhs}</M> ?</>,
          options: ['Oui','Non','On ne peut pas savoir','Seulement si x est entier'],
          correct: 0,
          hint: `${a}×${sol} + ${b} = ${a*sol} + ${b} = ${rhs} ✓ → oui.`,
        };
      } },
      // lit-5 : substitution avec a négatif (paramétrique)
      { key:'lit-5', gen: (rnd) => {
        const a = 2 + Math.floor(rnd() * 5);
        const b = 1 + Math.floor(rnd() * 8);
        const x = -(1 + Math.floor(rnd() * 6));   // x négatif
        const good = a * x + b;
        const piege1 = a * (-x) + b;      // oublie le signe négatif de x
        const piege2 = a * x - b;         // soustrait au lieu d'additionner b
        const piege3 = good + a;          // off
        const used = new Set([good, piege1, piege2, piege3]);
        let v3 = piege3; while (used.has(v3)) { v3++; }
        return {
          q: <>Pour <M>x = {x}</M>, que vaut <M>{a}x + {b}</M> ?</>,
          options: [String(good), String(piege1), String(piege2), String(v3)],
          correct: 0,
          hint: `${a}×(${x}) + ${b} = ${a*x} + ${b} = ${good}.`,
        };
      } },
      // lit-6 : développe k(x − p) (paramétrique)
      { key:'lit-6', gen: (rnd) => {
        const k = 2 + Math.floor(rnd() * 6);
        const p = 1 + Math.floor(rnd() * 8);
        const good = `${k}x − ${k * p}`;
        const wrong1 = `${k}x − ${p}`;        // oublie de distribuer
        const wrong2 = `${k}x + ${k * p}`;    // mauvais signe
        const wrong3 = `${k - p}x`;
        const used = new Set([good, wrong1, wrong2, wrong3]);
        return {
          q: <>Développe : <M>{k}(x − {p}) =</M></>,
          options: [good, wrong1, wrong2, wrong3],
          correct: 0,
          hint: `${k}×x + ${k}×(−${p}) = ${k}x − ${k*p}.`,
        };
      } },
      // lit-7 : réduction avec soustraction (paramétrique)
      { key:'lit-7', gen: (rnd) => {
        const a1 = 3 + Math.floor(rnd() * 5);
        const a2 = 1 + Math.floor(rnd() * (a1 - 1));   // a2 < a1 pour rester positif
        const b1 = 2 + Math.floor(rnd() * 8);
        const b2 = 1 + Math.floor(rnd() * (b1 - 1));   // b2 < b1
        const sumA = a1 + a2;
        const diffB = b1 - b2;
        const good  = `${sumA}a + ${diffB}`;
        const wrong1 = `${sumA}a − ${diffB}`;
        const wrong2 = `${a1 - a2}a + ${diffB}`;
        const wrong3 = `${sumA}a + ${b1 + b2}`;
        return {
          q: <>Réduis : <M>{a1}a − {b2} + {a2}a + {b1} =</M></>,
          options: [good, wrong1, wrong2, wrong3],
          correct: 0,
          hint: `Termes en a : (${a1}+${a2})a = ${sumA}a. Constantes : −${b2}+${b1} = +${diffB}. Résultat : ${good}.`,
        };
      } },
      // lit-8 : B = x² + c pour x négatif (paramétrique — piège sur le carré d'un négatif)
      { key:'lit-8', gen: (rnd) => {
        const x = -(3 + Math.floor(rnd() * 3));  // −3..−5 (x=-2 → piege1=piege2=2x+c=-4+c)
        const c = 1 + Math.floor(rnd() * 10);    // constante 1..10
        const xSq = x * x;
        const good = xSq + c;
        const used = new Set([good]);
        let p1 = -xSq + c; while (used.has(p1)) { p1--; } used.add(p1);   // piège classique
        let p2 = 2 * x + c; while (used.has(p2)) { p2--; } used.add(p2); // x² confondu avec 2x
        let p3 = good + 1; while (used.has(p3)) { p3++; }
        return {
          q: <>Pour <M>x = {x}</M>, que vaut <M>B = x² + {c}</M> ?</>,
          options: [String(good), String(p1), String(p2), String(p3)],
          correct: 0,
          hint: `(${x})² + ${c} = ${xSq} + ${c} = ${good}. Attention : (${x})² = +${xSq}, pas −${xSq} !`,
        };
      } },
    ],
    triangles: [
      // tri-1 : somme des angles (statique — définition fondamentale)
      { key:'tri-1', q:'La somme des angles d\'un triangle vaut :', options:['90°','180°','360°','Varie selon le triangle'], correct:1, hint:'Dans TOUT triangle, somme des 3 angles = 180°.' },
      // tri-2 : 3e angle sachant 2 autres (paramétrique)
      { key:'tri-2', gen: (rnd) => {
        const A = 20 + Math.floor(rnd() * 60);   // 20..79°
        const B = 20 + Math.floor(rnd() * (140 - A));  // tel que A+B < 160
        const C = 180 - A - B;
        const used = new Set([C]);
        let p1 = 180 - A; while (used.has(p1)) { p1 += 5; } used.add(p1);   // oublie B
        let p2 = A + B; while (used.has(p2)) { p2 += 5; } used.add(p2);     // additionne
        let p3 = C + 10; while (used.has(p3)) { p3 += 5; }
        return {
          q: <>Un triangle a des angles de {A}° et {B}°. Le 3ᵉ angle vaut :</>,
          options: [`${C}°`, `${p1}°`, `${p2}°`, `${p3}°`],
          correct: 0,
          hint: `180 − (${A} + ${B}) = 180 − ${A+B} = ${C}°.`,
        };
      } },
      // tri-3 : inégalité triangulaire — impossible (paramétrique)
      { key:'tri-3', gen: (rnd) => {
        const a = 3 + Math.floor(rnd() * 5);
        const b = 3 + Math.floor(rnd() * 5);
        const c = a + b + 1 + Math.floor(rnd() * 5);  // c > a+b → impossible
        return {
          q: <>Peut-on construire un triangle avec les côtés {a} cm, {b} cm et {c} cm ?</>,
          options: [
            `Non (inégalité triangulaire : ${a}+${b} < ${c})`,
            'Oui',
            'Oui, mais seulement rectangle',
            'Parfois',
          ],
          correct: 0,
          hint: `Inégalité triangulaire : le plus grand côté doit être < somme des deux autres. Ici ${a}+${b}=${a+b} < ${c} → IMPOSSIBLE.`,
        };
      } },
      // tri-4 : triangle isocèle (statique — définition)
      { key:'tri-4', q:'Un triangle isocèle a :', options:['3 côtés égaux','2 côtés égaux ET 2 angles égaux','1 angle droit','Aucun côté égal'], correct:1, hint:'Isocèle : 2 côtés égaux (et les 2 angles à la base sont égaux).' },
      // tri-5 : triangle équilatéral — angle (statique)
      { key:'tri-5', q:'Dans un triangle équilatéral, chaque angle mesure :', options:['30°','45°','60°','90°'], correct:2, hint:'3 angles égaux de somme 180° → 60° chacun.' },
      // tri-6 : triangle rectangle isocèle (statique)
      { key:'tri-6', q:'Un triangle rectangle isocèle a pour angles :', options:['90°-45°-45°','90°-60°-30°','60°-60°-60°','90°-80°-10°'], correct:0, hint:'Rectangle (90°) + 2 angles égaux → 45° + 45°.' },
      // tri-7 : inégalité triangulaire — possible (paramétrique)
      { key:'tri-7', gen: (rnd) => {
        const a = 3 + Math.floor(rnd() * 8);
        const b = 3 + Math.floor(rnd() * 8);
        const c = 1 + Math.floor(rnd() * (a + b - 2));  // c < a+b → possible
        const cSafe = Math.max(c, 1);
        return {
          q: <>Peut-on construire un triangle avec les côtés {a} cm, {b} cm et {cSafe} cm ?</>,
          options: [
            `Oui, car ${a}+${b} > ${cSafe}`,
            `Non, car ${a}+${b} < ${cSafe}`,
            'Non, car les côtés ne sont pas égaux',
            'Oui, mais seulement isocèle',
          ],
          correct: 0,
          hint: `${a} + ${b} = ${a+b} > ${cSafe} → l'inégalité triangulaire est vérifiée.`,
        };
      } },
      // tri-8 : deux angles de 60° → équilatéral (statique)
      { key:'tri-8', q:'Un triangle a deux angles de 60° chacun. C\'est :', options:['Un triangle rectangle','Un triangle isocèle (seulement)','Un triangle équilatéral','Impossible'], correct:2, hint:'3ᵉ angle = 180 − 60 − 60 = 60°. Trois angles de 60° → équilatéral.' },
    ],
    parallelog: [
      { key:'par-1', q:'Dans un parallélogramme, les diagonales :', options:['Sont perpendiculaires','Se coupent en leur milieu','Sont égales','Sont parallèles'], correct:1, hint:'Propriété clé : les diagonales se coupent en leur milieu.' },
      { key:'par-2', q:'Un parallélogramme a :', options:['1 paire de côtés parallèles','2 paires de côtés parallèles','Des angles droits obligatoirement','4 côtés égaux obligatoirement'], correct:1, hint:'Définition : 2 paires de côtés parallèles (et égaux deux à deux).' },
      { key:'par-3', q:'Un losange est un parallélogramme qui a :', options:['4 angles droits','4 côtés égaux','1 angle droit','Aucune propriété particulière'], correct:1, hint:'Losange = parallélogramme à 4 côtés égaux.' },
      { key:'par-4', q:'Un rectangle est un parallélogramme qui a :', options:['4 angles droits','4 côtés égaux','Des diagonales perpendiculaires','1 seul angle droit'], correct:0, hint:'Rectangle = parallélogramme à 4 angles droits.' },
      { key:'par-5', q:'Un losange dont les diagonales sont égales est :', options:['Un carré','Un rectangle','Un trapèze','Rien de particulier'], correct:0, hint:'Losange (côtés égaux) + diagonales égales = carré.' },
      { key:'par-6', q:'Les côtés opposés d\'un parallélogramme sont :', options:['Égaux','Perpendiculaires','De longueurs différentes','Inclinés à 45°'], correct:0, hint:'Propriété fondamentale : côtés opposés parallèles ET égaux.' },
      { key:'par-7', q:'Dans un rectangle, les diagonales sont :', options:['Perpendiculaires','Égales et se coupent en leur milieu','De longueurs différentes','Parallèles'], correct:1, hint:'Rectangle : diagonales égales ET se coupant en leur milieu.' },
      { key:'par-8', q:'Un quadrilatère dont les 4 côtés sont égaux ET les 4 angles droits est :', options:['Un losange','Un rectangle','Un carré','Un trapèze'], correct:2, hint:'Carré = losange + rectangle : 4 côtés égaux et 4 angles droits.' },
    ],
    aires: [
      // air-1 : aire d'un disque (paramétrique)
      { key:'air-1', gen: (rnd) => {
        const rHalf = 6 + Math.floor(rnd() * 21);
        const r = rHalf / 2;
        const aire = Math.round(3.14 * r * r * 100) / 100;
        const fr = (v: number) => String(v).replace('.', ',');
        const used = new Set([fr(aire)]);
        let p1 = Math.round(2 * 3.14 * r * 100) / 100;
        while (used.has(fr(p1))) { p1 = Math.round((p1 + 1) * 100) / 100; } used.add(fr(p1));
        let p2 = Math.round(3.14 * r * 100) / 100;
        while (used.has(fr(p2))) { p2 = Math.round((p2 + 1) * 100) / 100; } used.add(fr(p2));
        let p3 = r * r;
        while (used.has(fr(p3))) { p3++; }
        return {
          q: <>Aire d'un disque de rayon {fr(r)} cm (π ≈ 3,14) :</>,
          options: [`~${fr(aire)} cm²`, `~${fr(p1)} cm²`, `~${fr(p2)} cm²`, `${fr(p3)} cm²`],
          correct: 0,
          hint: `A = π × r² = 3,14 × ${fr(r)}² = 3,14 × ${fr(r*r)} ≈ ${fr(aire)} cm².`,
        };
      } },
      { key:'air-2', gen: (rnd) => {
        const rHalf = 4 + Math.floor(rnd() * 21);
        const r = rHalf / 2;
        const perim = Math.round(2 * 3.14 * r * 100) / 100;
        const fr = (v: number) => String(v).replace('.', ',');
        const used = new Set([fr(perim)]);
        let piege1 = Math.round(3.14 * r * r * 100) / 100;
        while (used.has(fr(piege1))) { piege1 = Math.round((piege1 + 1) * 100) / 100; } used.add(fr(piege1));
        let piege2 = Math.round(3.14 * r * 100) / 100;
        while (used.has(fr(piege2))) { piege2 = Math.round((piege2 + 1) * 100) / 100; } used.add(fr(piege2));
        let piege3 = Math.round(2 * r);
        while (used.has(fr(piege3))) { piege3++; }
        return {
          q: <>Périmètre d'un cercle de rayon {fr(r)} cm (π ≈ 3,14) :</>,
          options: [`~${fr(perim)} cm`, `~${fr(piege1)} cm²`, `~${fr(piege2)} cm`, `${fr(piege3)} cm`],
          correct: 0,
          hint: `P = 2π × r = 2 × 3,14 × ${fr(r)} ≈ ${fr(perim)} cm.`,
        };
      } },
      // air-3 : aire d'un triangle (paramétrique)
      { key:'air-3', gen: (rnd) => {
        const base = 2 + Math.floor(rnd() * 14);   // 2..15 cm
        const haut = 2 + Math.floor(rnd() * 14);
        const good = base * haut / 2;
        const used = new Set([good]);
        let p1 = base * haut; while (used.has(p1)) { p1++; } used.add(p1);         // oublie ÷2
        let p2 = (base + haut) * 2; while (used.has(p2)) { p2 += 2; } used.add(p2); // périmètre
        let p3 = good + base; while (used.has(p3)) { p3 += 2; }
        return {
          q: <>Aire d'un triangle de base {base} cm et hauteur {haut} cm :</>,
          options: [`${good} cm²`, `${p1} cm²`, `${p2} cm²`, `${p3} cm²`],
          correct: 0,
          hint: `A = base × hauteur ÷ 2 = ${base} × ${haut} ÷ 2 = ${good} cm².`,
        };
      } },
      // air-4 : aire d'un parallélogramme (paramétrique)
      { key:'air-4', gen: (rnd) => {
        const base = 3 + Math.floor(rnd() * 13);   // 3..15 cm
        const haut = 2 + Math.floor(rnd() * 12);   // 2..13 cm
        const good = base * haut;
        const piege1 = base * haut / 2;   // confond avec triangle
        const piege2 = 2 * (base + haut); // périmètre
        const piege3 = good + haut;       // off
        const used = new Set([good, piege1, piege2, piege3]);
        let v3 = piege3; while (used.has(v3)) { v3 += haut; }
        return {
          q: <>Aire d'un parallélogramme de base {base} cm et hauteur {haut} cm :</>,
          options: [`${good} cm²`, `${piege1} cm²`, `${piege2} cm`, `${v3} cm²`],
          correct: 0,
          hint: `A = base × hauteur = ${base} × ${haut} = ${good} cm².`,
        };
      } },
      // air-5 : périmètre d'un carré (paramétrique)
      { key:'air-5', gen: (rnd) => {
        const c = 2 + Math.floor(rnd() * 20);   // côté 2..21 cm (20 valeurs)
        const good = 4 * c;
        const piege1 = c * c;    // aire au lieu de périmètre
        const piege2 = 2 * c;    // oublie ×4
        const piege3 = good + c; // off
        const used = new Set([good, piege1, piege2, piege3]);
        let v3 = piege3; while (used.has(v3)) { v3 += c; }
        return {
          q: <>Périmètre d'un carré de côté {c} cm :</>,
          options: [`${good} cm`, `${piege1} cm²`, `${piege2} cm`, `${v3} cm`],
          correct: 0,
          hint: `P = 4 × ${c} = ${good} cm.`,
        };
      } },
      // air-6 : aire d'un rectangle (paramétrique)
      { key:'air-6', gen: (rnd) => {
        const L = 3 + Math.floor(rnd() * 13);
        const l = 2 + Math.floor(rnd() * 10);
        const good = L * l;
        const piege1 = 2 * (L + l);   // périmètre
        const piege2 = L + l;
        const piege3 = good + L;
        const used = new Set([good, piege1, piege2, piege3]);
        let v3 = piege3; while (used.has(v3)) { v3 += l; }
        return {
          q: <>Aire d'un rectangle {L} cm × {l} cm :</>,
          options: [`${good} cm²`, `${piege1} cm`, `${piege2} cm²`, `${v3} cm²`],
          correct: 0,
          hint: `A = L × l = ${L} × ${l} = ${good} cm².`,
        };
      } },
      // air-7 : aire d'un disque (paramétrique — rayon en demi-entier pour plus de variabilité)
      { key:'air-7', gen: (rnd) => {
        // Rayon en demi-pas : 1.5, 2, ..., 10.5 → 20 valeurs distinctes
        const rHalf = 3 + Math.floor(rnd() * 20);   // 3..22 demi-unités
        const r = rHalf / 2;
        const aire = Math.round(3.14 * r * r * 100) / 100;
        const used = new Set([String(aire)]);
        let p1 = Math.round(2 * 3.14 * r * 100) / 100;   // périmètre
        while (used.has(String(p1))) { p1 = Math.round((p1 + 1) * 100) / 100; } used.add(String(p1));
        let p2 = Math.round(3.14 * r * 100) / 100;        // oublie le carré
        while (used.has(String(p2))) { p2 = Math.round((p2 + 1) * 100) / 100; } used.add(String(p2));
        let p3 = Math.round(r * r);                        // oublie π
        while (used.has(String(p3))) { p3++; }
        return {
          q: <>Aire d'un disque de rayon {r} cm (π ≈ 3,14) :</>,
          options: [`~${aire} cm²`, `~${p1} cm`, `~${p2} cm²`, `${p3} cm²`],
          correct: 0,
          hint: `A = π × r² = 3,14 × ${r}² ≈ ${aire} cm².`,
        };
      } },
      // air-8 : retrouver la hauteur d'un triangle (paramétrique)
      { key:'air-8', gen: (rnd) => {
        const h = 2 + Math.floor(rnd() * 12);    // hauteur 2..13 cm
        const base = 2 + Math.floor(rnd() * 12); // base 2..13 cm
        const aire = base * h / 2;
        const good = 2 * aire / base;            // = h
        const piege1 = aire / base;
        const piege2 = aire / (2 * base);
        const piege3 = good + 2;
        const used = new Set([good, piege1, piege2, piege3]);
        let v3 = piege3; while (used.has(v3)) { v3 += 2; }
        return {
          q: <>Un triangle de base {base} cm a une aire de {aire} cm². Sa hauteur vaut :</>,
          options: [`${good} cm`, `${piege1} cm`, `${piege2} cm`, `${v3} cm`],
          correct: 0,
          hint: `h = 2 × aire ÷ base = 2 × ${aire} ÷ ${base} = ${good} cm.`,
        };
      } },
      // air-9 : disque — retrouver le rayon à partir du périmètre (approx)
      { key:'air-9', gen: (rnd) => {
        const r = 2 + Math.floor(rnd() * 9);   // 2..10 cm
        const perim = Math.round(2 * 3.14 * r * 10) / 10;
        const fr = (v: number) => String(v).replace('.', ',');
        const used = new Set([r]);
        let w2 = r + 1; while (used.has(w2)) w2++; used.add(w2);
        let w3 = r * 2; while (used.has(w3)) w3++; used.add(w3);
        let w4 = r - 1;
        if (w4 <= 0 || used.has(w4)) { w4 = r + 2; while (used.has(w4)) w4++; }
        return {
          q: <>Un cercle a un périmètre d'environ {fr(perim)} cm (π ≈ 3,14). Son rayon :</>,
          options: [`${r} cm`, `${w2} cm`, `${w3} cm`, `${w4} cm`],
          correct: 0,
          hint: `r = P ÷ (2π) = ${fr(perim)} ÷ (2×3,14) ≈ ${r} cm.`,
        };
      } },
      // air-10 : aire d'un demi-disque
      { key:'air-10', gen: (rnd) => {
        const rHalf = 4 + Math.floor(rnd() * 15);
        const r = rHalf / 2;
        const full = Math.round(3.14 * r * r * 100) / 100;
        const good = Math.round(full / 2 * 100) / 100;
        const fr = (v: number) => String(v).replace('.', ',');
        const used = new Set([fr(good)]);
        let p1 = full; while (used.has(fr(p1))) { p1 = Math.round((p1 + 0.5) * 100) / 100; } used.add(fr(p1));
        let p2 = Math.round(3.14 * r * 100) / 100; while (used.has(fr(p2))) { p2 = Math.round((p2 + 0.5) * 100) / 100; } used.add(fr(p2));
        let p3 = Math.round(good + 2 * r); while (used.has(fr(p3))) { p3++; }
        return {
          q: <>Aire d'un demi-disque de rayon {fr(r)} cm (π ≈ 3,14) :</>,
          options: [`~${fr(good)} cm²`, `~${fr(p1)} cm²`, `~${fr(p2)} cm²`, `${fr(p3)} cm²`],
          correct: 0,
          hint: `A_demi = π×r²/2 = 3,14×${fr(r)}²/2 ≈ ${fr(good)} cm².`,
        };
      } },
      // air-11 : périmètre d'un demi-disque (diamètre + demi-cercle)
      { key:'air-11', gen: (rnd) => {
        const r = 3 + Math.floor(rnd() * 8);   // 3..10 cm
        const halfPerim = Math.round(3.14 * r * 100) / 100;
        const diam = 2 * r;
        const good = Math.round((halfPerim + diam) * 100) / 100;
        const fr = (v: number) => String(v).replace('.', ',');
        const used = new Set([fr(good)]);
        let p1 = halfPerim; while (used.has(fr(p1))) { p1 = Math.round((p1 + 1) * 100) / 100; } used.add(fr(p1));
        let p2 = Math.round(2 * 3.14 * r * 100) / 100; while (used.has(fr(p2))) { p2 = Math.round((p2+1)*100)/100; } used.add(fr(p2));
        let p3 = Math.round(good + r); while (used.has(fr(p3))) { p3++; }
        return {
          q: <>Périmètre total d'un demi-disque de rayon {r} cm (π ≈ 3,14) :</>,
          options: [`~${fr(good)} cm`, `~${fr(p1)} cm`, `~${fr(p2)} cm`, `${fr(p3)} cm`],
          correct: 0,
          hint: `Demi-cercle (πr) + diamètre (2r) = 3,14×${r} + ${diam} ≈ ${fr(good)} cm.`,
        };
      } },
      // air-12 : périmètre d'un losange
      { key:'air-12', gen: (rnd) => {
        const c = 3 + Math.floor(rnd() * 13);   // 3..15 cm
        const good = 4 * c;
        const piege1 = 2 * c;
        const piege2 = c * c;
        const used = new Set([good, piege1, piege2]);
        let v3 = good + c; while (used.has(v3)) { v3 += c; }
        return {
          q: <>Périmètre d'un losange de côté {c} cm :</>,
          options: [`${good} cm`, `${piege1} cm`, `${piege2} cm²`, `${v3} cm`],
          correct: 0,
          hint: `Losange = 4 côtés égaux. P = 4 × ${c} = ${good} cm.`,
        };
      } },
      // air-13 : aire d'un trapèze
      { key:'air-13', gen: (rnd) => {
        const b1 = 3 + Math.floor(rnd() * 9);
        let b2 = b1 + 1 + Math.floor(rnd() * 6);
        const h = 2 + Math.floor(rnd() * 10);
        const good = (b1 + b2) * h / 2;
        const piege1 = (b1 + b2) * h; // oublie ÷2
        const piege2 = b1 * h;        // oublie b2
        const piege3 = good + h;
        const used = new Set([good, piege1, piege2, piege3]);
        let v3 = piege3; while (used.has(v3)) { v3 += h; }
        return {
          q: <>Aire d'un trapèze de bases {b1} cm et {b2} cm, hauteur {h} cm :</>,
          options: [`${good} cm²`, `${piege1} cm²`, `${piege2} cm²`, `${v3} cm²`],
          correct: 0,
          hint: `A = (b1+b2)×h/2 = (${b1}+${b2})×${h}/2 = ${b1+b2}×${h}/2 = ${good} cm².`,
        };
      } },
      // air-14 : conversion d'unités d'aire (cm² ↔ m²)
      { key:'air-14', gen: (rnd) => {
        const m2 = 1 + Math.floor(rnd() * 8);
        const good = m2 * 10000;
        const piege1 = m2 * 100;   // oublie que 1m² = 10000 cm²
        const piege2 = m2 * 1000;
        const piege3 = m2 * 100000;
        return {
          q: <><M>{m2} m²</M> en cm² :</>,
          options: [String(good)+' cm²', String(piege1)+' cm²', String(piege2)+' cm²', String(piege3)+' cm²'],
          correct: 0,
          hint: `1 m = 100 cm → 1 m² = 100² = 10 000 cm². ${m2} m² = ${good} cm².`,
        };
      } },
      // air-15 : aire d'un disque (variante : donner le diamètre)
      { key:'air-15', gen: (rnd) => {
        const d = (4 + Math.floor(rnd() * 12)) * 2;  // diamètre pair : 8..28 cm
        const r = d / 2;
        const good = Math.round(3.14 * r * r * 100) / 100;
        const fr = (v: number) => String(v).replace('.', ',');
        const used = new Set([fr(good)]);
        let p1 = Math.round(3.14 * d * d * 100) / 100; while (used.has(fr(p1))) { p1 = Math.round((p1+1)*100)/100; } used.add(fr(p1));
        let p2 = Math.round(3.14 * d * 100) / 100; while (used.has(fr(p2))) { p2 = Math.round((p2+1)*100)/100; } used.add(fr(p2));
        let p3 = Math.round(good + r); while (used.has(fr(p3))) { p3++; }
        return {
          q: <>Aire d'un disque de diamètre {d} cm (π ≈ 3,14) :</>,
          options: [`~${fr(good)} cm²`, `~${fr(p1)} cm²`, `~${fr(p2)} cm`, `${fr(p3)} cm²`],
          correct: 0,
          hint: `Rayon = ${d}/2 = ${r} cm. A = π×r² = 3,14×${r}² ≈ ${fr(good)} cm².`,
        };
      } },
      // air-16 : périmètre d'un triangle quelconque
      { key:'air-16', gen: (rnd) => {
        const a = 3 + Math.floor(rnd() * 8);
        const b = 4 + Math.floor(rnd() * 8);
        const c2 = 5 + Math.floor(rnd() * 8);
        const good = a + b + c2;
        const piege1 = a * b * c2 / 4;  // fausse formule (Héron mal compris)
        let piege2 = 2 * (a + b);       // oublie c
        const used = new Set([good]);
        while (used.has(piege2)) piege2++; used.add(piege2);
        let v1 = Math.round(piege1); while (used.has(v1)) { v1++; } used.add(v1);
        let v3 = good + a; while (used.has(v3)) { v3 += a; }
        return {
          q: <>Périmètre d'un triangle de côtés {a} cm, {b} cm, {c2} cm :</>,
          options: [`${good} cm`, `${piege2} cm`, `${v1} cm²`, `${v3} cm`],
          correct: 0,
          hint: `P = a+b+c = ${a}+${b}+${c2} = ${good} cm.`,
        };
      } },
    ],
    volumes: [
      // vol-1 : formule prisme droit (statique)
      { key:'vol-1', q:'Le volume d\'un prisme droit se calcule par :', options:['Aire de base × hauteur','Périmètre × hauteur','(B × h) / 3','Aire × aire'], correct:0, hint:'V_prisme = B × h (B = aire de la base).' },
      // vol-2 : formule cylindre (statique)
      { key:'vol-2', q:'Le volume d\'un cylindre de rayon r et hauteur h :', options:['2π r h','π r² h','π r² + h','r × h'], correct:1, hint:'V_cylindre = π × r² × h.' },
      // vol-3 : conversion cm³ ↔ L (paramétrique)
      { key:'vol-3', gen: (rnd) => {
        // Alterne entre cm³→L et L→cm³
        const toLitres = rnd() > 0.5;
        const litres = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 2, 2.5, 3, 4, 5][Math.floor(rnd() * 11)];
        const cm3 = litres * 1000;
        const fmt = v => String(v).replace('.', ',');
        if (toLitres) {
          const good = litres;
          const piege1 = litres * 10;
          const piege2 = litres * 100;
          const piege3 = litres / 10;
          return {
            q: <>{cm3} cm³ = ___ L</>,
            options: [`${fmt(good)} L`, `${fmt(piege1)} L`, `${fmt(piege2)} L`, `${fmt(piege3)} L`],
            correct: 0,
            hint: `1 L = 1 000 cm³ → ${cm3} ÷ 1 000 = ${fmt(good)} L.`,
          };
        } else {
          const good = cm3;
          const piege1 = litres * 100;
          const piege2 = litres * 10;
          const piege3 = good + 500;
          return {
            q: <>{fmt(litres)} L = ___ cm³</>,
            options: [`${fmt(good)} cm³`, `${fmt(piege1)} cm³`, `${fmt(piege2)} cm³`, `${fmt(piege3)} cm³`],
            correct: 0,
            hint: `1 L = 1 000 cm³ → ${fmt(litres)} × 1 000 = ${fmt(good)} cm³.`,
          };
        }
      } },
      // vol-4 : volume d'un cube (paramétrique)
      { key:'vol-4', gen: (rnd) => {
        const a = 2 + Math.floor(rnd() * 22);   // arête 2..23 cm (22 valeurs distinctes)
        const good = a * a * a;
        const used = new Set([good]);
        let p1 = a * a; while (used.has(p1)) { p1++; } used.add(p1);       // carré au lieu de cube
        let p2 = 6 * a * a; while (used.has(p2)) { p2++; } used.add(p2);   // aire totale
        let p3 = 3 * a; while (used.has(p3)) { p3 += a; }                   // 3 arêtes
        return {
          q: <>Volume d'un cube d'arête {a} cm :</>,
          options: [`${good} cm³`, `${p1} cm²`, `${p2} cm²`, `${p3} cm³`],
          correct: 0,
          hint: `V = a³ = ${a}³ = ${good} cm³.`,
        };
      } },
      // vol-5 : volume d'un pavé droit (paramétrique)
      { key:'vol-5', gen: (rnd) => {
        const L = 2 + Math.floor(rnd() * 8);
        const l = 2 + Math.floor(rnd() * 8);
        const h = 2 + Math.floor(rnd() * 8);
        const good = L * l * h;
        const piege1 = L + l + h;             // somme
        const piege2 = 2 * (L * l + L * h + l * h);  // aire totale
        const piege3 = L * l;                 // oublie h
        const used = new Set([good, piege1, piege2, piege3]);
        let v3 = piege3; while (used.has(v3)) { v3 += L; }
        return {
          q: <>Volume d'un pavé droit {L} × {l} × {h} cm :</>,
          options: [`${good} cm³`, `${piege1}`, `${piege2} cm²`, `${v3} cm³`],
          correct: 0,
          hint: `V = L×l×h = ${L}×${l}×${h} = ${good} cm³.`,
        };
      } },
      // vol-6 : conversion L → mL (paramétrique)
      { key:'vol-6', gen: (rnd) => {
        const options = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 2.25, 2.5, 2.75, 3, 3.5, 4, 4.25, 4.5, 5, 5.5, 6, 6.5, 7, 7.5];
        const litres = options[Math.floor(rnd() * options.length)];
        const good = litres * 1000;
        const fmt = v => String(v).replace('.', ',');
        const used = new Set([good]);
        let p1 = litres * 100; while (used.has(p1)) { p1 += 50; } used.add(p1);
        let p2 = litres * 10; while (used.has(p2)) { p2 += 10; } used.add(p2);
        let p3 = good + 100; while (used.has(p3)) { p3 += 100; }
        return {
          q: <>{fmt(litres)} L =</>,
          options: [`${fmt(good)} mL`, `${fmt(p1)} mL`, `${fmt(p2)} mL`, `${fmt(p3)} mL`],
          correct: 0,
          hint: `1 L = 1000 mL → ${fmt(litres)} L = ${fmt(good)} mL.`,
        };
      } },
      // vol-7 : volume d'un pavé droit carré (paramétrique)
      { key:'vol-7', gen: (rnd) => {
        const side = 2 + Math.floor(rnd() * 6);
        const h    = 3 + Math.floor(rnd() * 10);
        const good = side * side * h;
        const piege1 = side + side + h;
        const piege2 = side * h;
        const piege3 = side * side;
        const used = new Set([good, piege1, piege2, piege3]);
        let v3 = piege3; while (used.has(v3)) { v3 += side; }
        return {
          q: <>Volume d'un pavé droit de base carrée {side}×{side} cm et hauteur {h} cm :</>,
          options: [`${good} cm³`, `${piege1}`, `${piege2} cm³`, `${v3} cm³`],
          correct: 0,
          hint: `V = ${side}×${side}×${h} = ${good} cm³.`,
        };
      } },
      // vol-8 : volume prisme base triangulaire (paramétrique)
      { key:'vol-8', gen: (rnd) => {
        const base = 2 + Math.floor(rnd() * 8);
        const hTri = 2 + Math.floor(rnd() * 8);
        const hPrisme = 3 + Math.floor(rnd() * 8);
        const baire = base * hTri / 2;
        const good = baire * hPrisme;
        const piege1 = baire + hPrisme;
        const piege2 = base * hTri * hPrisme;  // oublie ÷2
        const piege3 = good / 2;
        const used = new Set([good, piege1, piege2, piege3]);
        let v3 = piege3; while (used.has(v3)) { v3 += hPrisme; }
        return {
          q: <>Prisme de base triangulaire (base {base} cm, hauteur triangle {hTri} cm) et hauteur {hPrisme} cm :</>,
          options: [`${good} cm³`, `${piege1} cm³`, `${piege2} cm³`, `${v3} cm³`],
          correct: 0,
          hint: `Aire base = ${base}×${hTri}/2 = ${baire} cm². V = ${baire}×${hPrisme} = ${good} cm³.`,
        };
      } },
    ],
    symetrie: [
      { key:'sym-1', q:'Dans une symétrie centrale de centre O, le symétrique d\'un point A est :', options:['Sur la droite (OA)','À la même distance de O que A, mais de l\'autre côté','Confondu avec A','Au-dessus de A'], correct:1, hint:'Symétrie centrale : O est le milieu de [AA\'].' },
      { key:'sym-2', q:'Le symétrique d\'un segment par symétrie centrale est :', options:['Plus court','Un segment de même longueur','Un cercle','Un triangle'], correct:1, hint:'Une symétrie conserve les longueurs et les angles.' },
      { key:'sym-3', q:'Le centre de symétrie d\'un parallélogramme est :', options:['Un sommet','Le point d\'intersection des diagonales','Le milieu d\'un côté','Il n\'y en a pas'], correct:1, hint:'Les diagonales se coupent en leur milieu = centre de symétrie.' },
      { key:'sym-4', q:'Par symétrie centrale, une droite a pour image :', options:['Un point','Une droite parallèle','Un cercle','Un angle'], correct:1, hint:'Image d\'une droite par symétrie centrale = droite parallèle.' },
      { key:'sym-5', q:'Le centre d\'une symétrie est noté :', options:['A','O (le centre)','B','C'], correct:1, hint:'On nomme souvent le centre O (\'origine\').' },
      // sym-6 : OA = OA' par symétrie centrale (paramétrique)
      { key:'sym-6', gen: (rnd) => {
        const oa = 2 + Math.floor(rnd() * 21);   // 2..22 cm (21 valeurs)
        const good = oa;
        const piege1 = oa * 2;    // confond OA avec AA'
        const piege2 = oa / 2;    // inverse
        const piege3 = 0;         // centre confondu avec image
        return {
          q: <>Par symétrie centrale de centre O, si OA = {oa} cm, alors OA' =</>,
          options: [`${good} cm`, `${piege1} cm`, `${piege2} cm`, `${piege3} cm`],
          correct: 0,
          hint: `O est le milieu de [AA'], donc OA = OA' = ${oa} cm.`,
        };
      } },
      { key:'sym-7', q:'Un triangle a-t-il un centre de symétrie ?', options:['Oui, toujours','Non, jamais (sauf équilatéral)','Oui, si isocèle','Non, jamais'], correct:3, hint:'Seuls les polygones avec un nombre PAIR de côtés peuvent avoir un centre de symétrie.' },
      { key:'sym-8', q:'Par symétrie centrale, les angles sont :', options:['Doublés','Conservés','Divisés par 2','Mis au carré'], correct:1, hint:'Les symétries conservent toujours les mesures des angles.' },
      { key:'sym-9', q:'Un parallélogramme a pour centre de symétrie :', options:['Un de ses sommets','Le milieu d\'un côté','L\'intersection de ses diagonales','Aucun, il n\'en a pas'], correct:2, hint:'Le centre de symétrie d\'un parallélogramme est le point d\'intersection de ses diagonales (qui se coupent en leur milieu).' },
    ],
    stats: [
      // sta-1 : moyenne d'une série (paramétrique)
      { key:'sta-1', gen: (rnd) => {
        const n = 3 + Math.floor(rnd() * 3);   // 3..5 valeurs
        const vals: number[] = [];
        for (let i = 0; i < n; i++) {
          vals.push(2 + Math.floor(rnd() * 17));
        }
        const sum = vals.reduce((a, b) => a + b, 0);
        const good = Math.round(sum / n * 10) / 10;
        const piege1 = sum;                     // donne la somme, pas la moyenne
        const piege2 = Math.round(sum / (n + 1) * 10) / 10;  // divise par n+1
        const piege3 = Math.round(sum / (n - 1) * 10) / 10;  // divise par n-1
        const used = new Set([good, piege1, piege2, piege3]);
        let v3 = piege3; while (used.has(v3)) { v3 = Math.round((v3 + 0.5) * 10) / 10; }
        return {
          q: <>Moyenne de {vals.join(', ')} :</>,
          options: [String(good), String(piege1), String(piege2), String(v3)],
          correct: 0,
          hint: `(${vals.join('+')})/  ${n} = ${sum}/${n} = ${good}.`,
        };
      } },
      // sta-2 : diagramme en barres (statique)
      { key:'sta-2', q:'Dans un diagramme en barres, la hauteur d\'une barre indique :', options:['La fréquence ou l\'effectif d\'une valeur','L\'âge','La couleur','Rien de précis'], correct:0, hint:'Diagramme en barres = visualisation des effectifs.' },
      // sta-3 : définition fréquence (statique)
      { key:'sta-3', q:'La fréquence d\'une valeur est :', options:['L\'effectif','Effectif / Effectif total','Max − Min','La moyenne'], correct:1, hint:'Fréquence = effectif de la valeur / effectif total. Souvent exprimée en %.' },
      // sta-4 : moyenne d'une série arithmétique (paramétrique)
      { key:'sta-4', gen: (rnd) => {
        const start = 5 + Math.floor(rnd() * 10);
        const step  = 1 + Math.floor(rnd() * 4);
        const n = 4 + Math.floor(rnd() * 3);   // 4..6 valeurs
        const vals: number[] = [];
        for (let i = 0; i < n; i++) { vals.push(start + i * step); }
        const sum = vals.reduce((a, b) => a + b, 0);
        const good = sum / n;
        const used = new Set([good]);
        let p1 = vals[Math.floor(n / 2)]; while (used.has(p1)) { p1++; } used.add(p1); // médiane
        let p2 = good + step; while (used.has(p2)) { p2++; } used.add(p2);
        let p3 = good - step; while (used.has(p3)) { p3--; }
        return {
          q: <>Moyenne de {vals.join(', ')} :</>,
          options: [String(good), String(p1), String(p2), String(p3)],
          correct: 0,
          hint: `(${vals.join('+')})/  ${n} = ${sum}/${n} = ${good}.`,
        };
      } },
      // sta-5 : étendue (paramétrique)
      { key:'sta-5', gen: (rnd) => {
        const n = 4 + Math.floor(rnd() * 4);   // 4..7 valeurs
        const vals: number[] = [];
        const used0: Set<number> = new Set();
        for (let i = 0; i < n; i++) {
          let v = 2 + Math.floor(rnd() * 20);
          while (used0.has(v)) { v++; }
          used0.add(v);
          vals.push(v);
        }
        const max = Math.max(...vals);
        const min = Math.min(...vals);
        const good = max - min;
        const used = new Set([good]);
        let p1 = max; while (used.has(p1)) { p1++; } used.add(p1);   // max
        let p2 = min; while (used.has(p2)) { p2++; } used.add(p2);   // min
        let p3 = good + 1; while (used.has(p3)) { p3++; }
        return {
          q: <>Étendue de {vals.sort((a,b) => a-b).join(', ')} :</>,
          options: [String(good), String(p1), String(p2), String(p3)],
          correct: 0,
          hint: `Étendue = Max − Min = ${max} − ${min} = ${good}.`,
        };
      } },
      // sta-6 : médiane d'une série impaire (paramétrique)
      { key:'sta-6', gen: (rnd) => {
        const base = 3 + Math.floor(rnd() * 10);
        const vals: number[] = [];
        let x = base;
        for (let i = 0; i < 5; i++) { vals.push(x); x += 1 + Math.floor(rnd() * 4); }
        const median = vals[2];
        const mean = Math.round(vals.reduce((a,b) => a+b, 0) / 5 * 10) / 10;
        let effectiveMean = mean;
        const used = new Set([median]);
        while (used.has(effectiveMean)) effectiveMean = Math.round((effectiveMean + 0.1) * 10) / 10; used.add(effectiveMean);
        let w3 = vals[1]; while (used.has(w3)) w3++; used.add(w3);
        let w4 = vals[3]; while (used.has(w4)) w4++;
        return {
          q: <>Médiane de {vals.join(', ')} :</>,
          options: [String(median), String(effectiveMean), String(w3), String(w4)],
          correct: 0,
          hint: `5 valeurs triées : la médiane est la 3ᵉ valeur = ${median}.`,
        };
      } },
      // sta-7 : lecture de diagramme circulaire (pourcentage → effectif)
      { key:'sta-7', gen: (rnd) => {
        const total = [20, 25, 40, 50, 100][Math.floor(rnd() * 5)];
        const pcts = [10, 20, 25, 40, 50];
        const pct = pcts[Math.floor(rnd() * pcts.length)];
        const good = total * pct / 100;
        const used = new Set([good]);
        let w2 = total - good; while (used.has(w2)) w2++; used.add(w2);
        let w3 = good + 5; while (used.has(w3)) w3 += 5; used.add(w3);
        let w4 = Math.round(good / 2); while (used.has(w4) || w4 <= 0) w4++;
        return {
          q: `Dans un groupe de ${total} élèves, ${pct} % aiment les maths. Combien ?`,
          options: [String(good), String(w2), String(w3), String(w4)],
          correct: 0,
          hint: `${pct} % de ${total} = ${pct}/100 × ${total} = ${good}.`,
        };
      } },
      // sta-8 : trouver une valeur manquante pour obtenir une moyenne fixée
      { key:'sta-8', gen: (rnd) => {
        const mean = 10 + Math.floor(rnd() * 8);
        const known: number[] = [];
        for (let i = 0; i < 4; i++) { known.push(mean - 5 + Math.floor(rnd() * 11)); }
        const sumKnown = known.reduce((a,b) => a+b, 0);
        const good = mean * 5 - sumKnown;
        if (good < 0 || good > 30) {
          return {
            q: 'Notes : 8 ; 12 ; 10 ; 9 ; ? pour une moyenne de 10. La valeur manquante :',
            options: ['11','10','12','9'],
            correct: 0,
            hint: '5×10 = 50. 8+12+10+9 = 39. 50−39 = 11.',
          };
        }
        const used = new Set([good]);
        let w2 = good + 2; while (used.has(w2)) w2++; used.add(w2);
        let w3 = good - 2;
        if (w3 < 0 || used.has(w3)) { w3 = good + 3; while (used.has(w3)) w3++; }
        used.add(w3);
        let w4 = mean + 3; while (used.has(w4)) w4++;
        return {
          q: `Notes : ${known.join(' ; ')} ; ?. Moyenne souhaitée : ${mean}. La note manquante :`,
          options: [String(good), String(w2), String(w3), String(w4)],
          correct: 0,
          hint: `5×${mean} = ${mean*5}. ${known.join('+')} = ${sumKnown}. Valeur = ${mean*5} − ${sumKnown} = ${good}.`,
        };
      } },
      // sta-9 : interpréter une fréquence d'un diagramme
      { key:'sta-9', gen: (rnd) => {
        const total = [30, 40, 50, 60][Math.floor(rnd() * 4)];
        const effectif = [6, 8, 10, 12, 15][Math.floor(rnd() * 5)];
        if (effectif >= total) return { q: 'Fréquence de 10 sur 50 :', options:['20 %','10 %','5 %','50 %'], correct:0, hint:'10/50 = 20 %.' };
        const pct = Math.round(effectif / total * 100);
        const used = new Set([pct]);
        let w2 = 100 - pct; while (used.has(w2)) w2++; used.add(w2);
        let w3 = pct + 10; while (used.has(w3)) w3 += 5; used.add(w3);
        let w4 = pct - 5; while (used.has(w4) || w4 <= 0) w4 += 5;
        return {
          q: `Sur ${total} observations, une valeur apparaît ${effectif} fois. Sa fréquence :`,
          options: [`${pct} %`, `${w2} %`, `${w3} %`, `${w4} %`],
          correct: 0,
          hint: `${effectif}/${total} × 100 = ${pct} %.`,
        };
      } },
      // sta-10 : médiane d'une série paire (paramétrique)
      { key:'sta-10', gen: (rnd) => {
        const base = 4 + Math.floor(rnd() * 10);
        const vals: number[] = [];
        let x = base;
        for (let i = 0; i < 6; i++) { vals.push(x); x += 1 + Math.floor(rnd() * 3); }
        const median = (vals[2] + vals[3]) / 2;
        let mean = Math.round(vals.reduce((a,b)=>a+b,0)/6 * 10) / 10;
        const used = new Set([median]);
        while (used.has(mean)) mean = Math.round((mean + 0.1) * 10) / 10; used.add(mean);
        let w3 = vals[2]; while (used.has(w3)) w3++;
        used.add(w3);
        let w4 = vals[3]; while (used.has(w4)) w4++;
        return {
          q: <>Médiane de la série triée : {vals.join(', ')} :</>,
          options: [String(median), String(mean), String(w3), String(w4)],
          correct: 0,
          hint: `6 valeurs : médiane = (${vals[2]}+${vals[3]})/2 = ${median}.`,
        };
      } },
      // sta-11 : effectif total à partir d'une fréquence
      { key:'sta-11', gen: (rnd) => {
        const total = [20, 25, 40, 50][Math.floor(rnd() * 4)];
        const effectif = [5, 8, 10, 12][Math.floor(rnd() * 4)];
        if (effectif >= total) return { q: '10 % correspondent à 5 individus. Effectif total :', options:['50','500','10','100'], correct:0, hint:'5 = 10% de N → N = 5×10 = 50.' };
        const pct = Math.round(effectif / total * 100);
        if (pct < 5) return { q: '20 % correspondent à 8 individus. Effectif total :', options:['40','80','8','16'], correct:0, hint:'8 = 20% de N → N = 8×5 = 40.' };
        const used = new Set([total]);
        let w2 = total + 5; while (used.has(w2)) w2 += 5; used.add(w2);
        let w3 = total - 5; while (used.has(w3) || w3 <= 0) w3 += 5; used.add(w3);
        let w4 = effectif * 2; while (used.has(w4)) w4++;
        return {
          q: `${pct} % d'un groupe correspondent à ${effectif} élèves. Effectif total :`,
          options: [String(total), String(w2), String(w3), String(w4)],
          correct: 0,
          hint: `${effectif} = ${pct}/100 × N → N = ${effectif} × 100/${pct} = ${total}.`,
        };
      } },
    ],
  },
  PICK: {
    relatifs: 3, fractions: 4, proportion: 3, litteral: 3, triangles: 3,
    parallelog: 3, aires: 3, volumes: 3, symetrie: 3, stats: 2,
  },
  PLANS: {
    relatifs: {
      'non-acquis': ['Règle des signes pour l\'addition : distinguer +/+, −/−, +/−', 'Utiliser la droite graduée pour visualiser', 'Opposé d\'un nombre : même valeur, signe contraire'],
      'fragile':    ['Calculs avec suite d\'additions/soustractions']
    },
    fractions: {
      'non-acquis': ['Dénominateur commun pour l\'addition (multiples)', 'Multiplication : numérateurs × numérateurs, dénominateurs × dénominateurs', 'Simplification avec un diviseur commun'],
      'fragile':    ['Enchaîner simplification et calcul']
    },
    proportion: {
      'non-acquis': ['Règle de trois (produit en croix)', 'Pourcentages : calcul direct (x % de N)', 'Vitesse : v = d/t'],
      'fragile':    ['Augmentation/diminution en pourcentage']
    },
    litteral: {
      'non-acquis': ['Calculer la valeur d\'une expression pour une valeur donnée', 'Réduire une somme avec lettres', 'Distributivité : k(a+b) = ka + kb'],
      'fragile':    ['Tester si un nombre est solution d\'une équation']
    },
    triangles: {
      'non-acquis': ['Somme des angles = 180°', 'Inégalité triangulaire : plus grand côté < somme des 2 autres', 'Types : isocèle, équilatéral, rectangle, isocèle rectangle'],
      'fragile':    ['Construction de triangles avec contraintes']
    },
    parallelog: {
      'non-acquis': ['2 paires de côtés parallèles = définition', 'Diagonales se coupent en leur milieu', 'Cas particuliers : rectangle, losange, carré'],
      'fragile':    ['Démontrer qu\'un quadrilatère est un parallélogramme']
    },
    aires: {
      'non-acquis': ['Aire du disque : π r², périmètre : 2πr', 'Aire du triangle : base × hauteur / 2', 'Aire du parallélogramme : base × hauteur'],
      'fragile':    ['Figures composées : décomposer en formes simples']
    },
    volumes: {
      'non-acquis': ['V prisme droit = B × h', 'V cylindre = π r² h', 'Conversions : 1 L = 1 dm³ = 1000 cm³'],
      'fragile':    ['Problèmes concrets de contenance']
    },
    symetrie: {
      'non-acquis': ['Symétrie centrale : O milieu de [AA\']', 'Conservation : longueurs, angles, aires', 'Centres de symétrie des figures usuelles'],
      'fragile':    ['Distinguer symétrie centrale et axiale']
    },
    stats: {
      'non-acquis': ['Moyenne = somme / nombre de valeurs', 'Effectif et fréquence', 'Lire un diagramme en bâtons et un diagramme circulaire'],
      'fragile':    ['Calcul de moyenne pondérée']
    },
  },
};
