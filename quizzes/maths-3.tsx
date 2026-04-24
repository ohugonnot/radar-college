// Source éditable — quiz maths-3. Régénéré automatiquement dans index.html via build.sh.
window.ALL_QUIZZES['maths-3'] = {
  SEARCH_SITES: 'site:maths-et-tiques.fr OR site:fr.khanacademy.org OR site:lumni.fr',
  YT_SUFFIX: 'Yvan Monka brevet',
  SUMMER_TOPIC: 'maths',
  SUBJECT: {
    id: 'maths-3',
    name: 'Mathématiques',
    short: 'Maths',
    level: 'Fin de 3ème (brevet)',
    mark: '∑',
    tagline: 'Évaluation brevet',
  },
  DOMAINS: {
    arithmetique: { id:'arithmetique', name:'Arithmétique (PGCD, fractions irréductibles)', short:'Arithmétique', coef:2, color:'#0f5e6b', icon:'N',  search:'pgcd arithmetique 3eme brevet' },
    puissances:   { id:'puissances',   name:'Puissances & écriture scientifique',           short:'Puissances',   coef:2, color:'#6d28d9', icon:'xⁿ', search:'puissances ecriture scientifique 3eme' },
    remarquables: { id:'remarquables', name:'Identités remarquables',                        short:'Remarquables', coef:3, color:'#be123c', icon:'²',  search:'identites remarquables 3eme' },
    equations:    { id:'equations',    name:'Équations & inéquations',                        short:'Équations',    coef:4, color:'#b8323d', icon:'=',  search:'equations inequations 3eme' },
    fonctions:    { id:'fonctions',    name:'Fonctions linéaires & affines',                  short:'Fonctions',    coef:4, color:'#c2410c', icon:'f',  search:'fonctions lineaires affines 3eme' },
    pythagore:    { id:'pythagore',    name:'Pythagore (direct + réciproque)',                short:'Pythagore',    coef:3, color:'#a01b34', icon:'△',  search:'theoreme pythagore reciproque 3eme' },
    thales:       { id:'thales',       name:'Thalès (direct + réciproque)',                   short:'Thalès',       coef:3, color:'#7a2ca8', icon:'//', search:'theoreme thales reciproque 3eme' },
    trigo:        { id:'trigo',        name:'Trigonométrie (sin, cos, tan)',                  short:'Trigo',        coef:3, color:'#1d4ed8', icon:'θ',  search:'trigonometrie sinus cosinus tangente 3eme' },
    geomespace:   { id:'geomespace',   name:'Géométrie dans l\'espace (volumes, sections)',   short:'Espace',       coef:2, color:'#166a39', icon:'▢',  search:'geometrie espace volumes sections 3eme' },
    stats:        { id:'stats',        name:'Statistiques & probabilités',                    short:'Stats',        coef:2, color:'#c4307a', icon:'p',  search:'statistiques probabilites mediane 3eme' },
  },
  RESOURCES: [
    { label:'Maths et Tiques 3ème',  author:'Yvan Monka (gratuit)', url:'https://www.maths-et-tiques.fr/index.php/cours-en-ligne/cours-troisieme' },
    { label:'Khan Academy 3ème',     author:'Cours + exos',          url:'https://fr.khanacademy.org/math/cycle-4-3eme-v2' },
    { label:'Lumni — Maths 3ème',    author:'France TV éducation',   url:'https://www.lumni.fr/college/troisieme/mathematiques' },
    { label:'Annales brevet gratuites', author:'Sujets + corrigés', url:'https://www.brevetdescolleges.fr/annales/' },
  ],
  POOL: {
    arithmetique: [
      { key:'ari-1', gen: (rnd) => {
        function gcd(a: number, b: number): number { return b === 0 ? a : gcd(b, a % b); }
        // Génère deux nombres avec un PGCD sympathique
        const gcds = [6, 8, 9, 10, 12, 15];
        const g = gcds[Math.floor(rnd() * gcds.length)];
        const p = 2 + Math.floor(rnd() * 6);
        const q2 = p + 1 + Math.floor(rnd() * 4);
        const a = g * p, b = g * q2;
        const good = g;
        const w1 = g / 2 > 1 ? g / 2 : g * 2;
        const w2 = a * b;
        const w3 = g * 2;
        const used = new Set([good, w1, w2, w3]);
        let w1f = Number.isInteger(w1) ? w1 : g * 2;
        while (used.has(w1f) || w1f === good) { w1f += 1; }
        return {
          q: `Le PGCD de ${a} et ${b} est :`,
          options: [String(w1f), String(good), String(g * 3), String(a + b)],
          correct: 1,
          hint: `Algorithme d'Euclide : PGCD(${a}, ${b}) = ${good}.`,
        };
      }},
      { key:'ari-2', gen: (rnd) => {
        const gcds = [4, 6, 8, 9, 12, 15];
        const g = gcds[Math.floor(rnd() * gcds.length)];
        const p = 2 + Math.floor(rnd() * 5);
        const q2 = p + 1 + Math.floor(rnd() * 4);
        const a = g * p, b = g * q2;
        const fn = p, fd = q2; // fraction irréductible
        // Utilise des chaînes "n/d" — compatibles avec le sérialiseur du test
        const good = `${fn}/${fd}`;
        const w1 = `${fd}/${fn}`;      // fraction inversée
        const w2 = `${fn}/${fd + 1}`;  // dénominateur décalé
        const w3 = `${fn + 1}/${fd}`;  // numérateur décalé
        const used = new Set([good, w1, w2, w3]);
        // Garantit 4 options distinctes
        let w2f = w2, w3f = w3;
        if (used.size < 4) { w2f = `${fn * 2}/${fd * 2}`; }
        return {
          q: <>La fraction <F n={String(a)} d={String(b)}/> simplifiée à l&apos;irréductible vaut :</>,
          options: [good, w1, w2f, w3f],
          correct: 0,
          hint: `PGCD(${a},${b}) = ${g} → ${a}/${b} = ${fn}/${fd} (irréductible).`,
        };
      }},
      { key:'ari-3', q:'Deux nombres sont premiers entre eux si leur PGCD vaut :', options:['0','1','le plus petit','le plus grand'], correct:1, hint:'Premiers entre eux ⇔ PGCD = 1.' },
      { key:'ari-4', gen: (rnd) => {
        function gcd(a: number, b: number): number { return b === 0 ? a : gcd(b, a % b); }
        const gcds = [6, 8, 9, 12, 15];
        const g = gcds[Math.floor(rnd() * gcds.length)];
        const p = 2 + Math.floor(rnd() * 5);
        const q2 = p + 1 + Math.floor(rnd() * 4);
        const a = g * p, b = g * q2;
        const good = g;
        const w1 = a + b;
        const w2 = g * 2;
        const w3 = g + 1;
        const used = new Set([good, w1, w2, w3]);
        let w2f = w2;
        while (used.has(w2f) || w2f === good) w2f++;
        return {
          q: `Combien de parts identiques maximum peut-on faire avec ${a} gâteaux et ${b} bonbons ?`,
          options: [String(g - 1 > 0 ? g - 1 : g + 3), String(good), String(w2f), String(w1)],
          correct: 1,
          hint: `PGCD(${a},${b}) = ${good} parts.`,
        };
      }},
      { key:'ari-5', gen: (rnd) => {
        function gcd(a: number, b: number): number { return b === 0 ? a : gcd(b, a % b); }
        // Fraction réductible vs irréductible
        const configs: Array<[number, number, number, number, boolean]> = [
          [15,25,3,5,true], [14,21,2,3,true], [9,15,3,5,true],
          [18,24,3,4,true], [10,35,2,7,true], [12,16,3,4,true],
          [21,28,3,4,true], [6,14,3,7,true], [8,12,2,3,true],
          [7,13,7,13,false], [11,17,11,17,false], [5,9,5,9,false],
          [7,11,7,11,false], [13,19,13,19,false], [4,9,4,9,false],
        ];
        const [num, den, fn, fd, reducible] = configs[Math.floor(rnd() * configs.length)];
        const g = gcd(num, den);
        const answer = reducible
          ? `Non (PGCD=${g} → ${fn}/${fd})`
          : 'Oui';
        const wrong = reducible ? 'Oui' : `Non (PGCD=${num} → 1/${fd})`;
        return {
          q: <>La fraction <F n={String(num)} d={String(den)}/> est-elle irréductible ?</>,
          options: [answer, wrong, `Non (PGCD=${g+1})`, 'On ne peut pas savoir'],
          correct: 0,
          hint: reducible
            ? `${num}/${den} = ${fn}/${fd} après simplification par ${g}.`
            : `PGCD(${num},${den}) = 1 → déjà irréductible.`,
        };
      }},
      { key:'ari-6', gen: (rnd) => {
        function gcd(a: number, b: number): number { return b === 0 ? a : gcd(b, a % b); }
        const gcds = [5, 6, 8, 9, 10, 15];
        const g = gcds[Math.floor(rnd() * gcds.length)];
        const p = 2 + Math.floor(rnd() * 5);
        const q2 = p + 1 + Math.floor(rnd() * 4);
        const a = g * p, b = g * q2;
        const good = g;
        const w1 = good * 2;
        const w2 = good / 2 > 1 ? good / 2 : good + 3;
        const w3 = a * b;
        const used = new Set([good, w1, w2, w3]);
        let w2f = Number.isInteger(w2) ? w2 : good + 3;
        while (used.has(w2f) || w2f === good) w2f++;
        return {
          q: `Le PGCD de ${a} et ${b} est :`,
          options: [String(w2f), String(w1), String(good), String(a + b)],
          correct: 2,
          hint: `${a} = ${good}×${p}, ${b} = ${good}×${q2} → PGCD = ${good}.`,
        };
      }},
    ],

    puissances: [
      { key:'pui-1', gen: (rnd) => {
        const bases = [2, 3, 4, 5, 7];
        const base = bases[Math.floor(rnd() * bases.length)];
        const e1 = 2 + Math.floor(rnd() * 5);
        const e2 = 1 + Math.floor(rnd() * 4);
        const goodExp = e1 + e2;
        const used = new Set([goodExp]);
        // w1 = produit des exposants (erreur fréquente)
        let w1 = e1 * e2;
        while (used.has(w1)) w1++;
        used.add(w1);
        // w2 = différence (autre erreur)
        let w2 = Math.abs(e1 - e2);
        while (used.has(w2) || w2 <= 0) w2 = goodExp - 1 > 0 ? goodExp - 1 : goodExp + 2;
        if (used.has(w2)) w2 = goodExp + 3;
        used.add(w2);
        let w3 = goodExp + 2;
        while (used.has(w3)) w3++;
        return {
          q: <>Simplifie : <M>{base}<sup>{e1}</sup> × {base}<sup>{e2}</sup> =</M></>,
          options: [<>{base}<sup>{goodExp}</sup></>, <>{base}<sup>{w1}</sup></>, <>{base}<sup>{w2}</sup></>, <>{base}<sup>{w3}</sup></>],
          correct: 0,
          hint: `aⁿ × aᵐ = aⁿ⁺ᵐ → ${base}^${e1+e2}.`,
        };
      }},
      { key:'pui-2', gen: (rnd) => {
        const e1 = -(2 + Math.floor(rnd() * 5));
        const e2 = e1 + 2 + Math.floor(rnd() * 8);
        const goodExp = e1 + e2;
        const used = new Set([goodExp]);
        let w1 = e1 * e2;
        while (used.has(w1)) w1 += (w1 >= goodExp ? 1 : -1);
        used.add(w1);
        let w2 = e2 - e1;  // toujours > 0 car e2 > e1
        while (used.has(w2)) w2++;
        used.add(w2);
        let w3 = goodExp - 3;
        while (used.has(w3)) w3--;
        return {
          q: <>Calcule : <M>10<sup>{e1}</sup> × 10<sup>{e2}</sup> =</M></>,
          options: [<>10<sup>{goodExp}</sup></>, <>10<sup>{w1}</sup></>, <>10<sup>{w2}</sup></>, <>10<sup>{w3}</sup></>],
          correct: 0,
          hint: `${e1} + ${e2} = ${goodExp}.`,
        };
      }},
      { key:'pui-3', gen: (rnd) => {
        // Notation scientifique petit nombre
        const configs: Array<[number, string, number]> = [
          [0.000032, '3,2', -5], [0.0000071, '7,1', -6], [0.00015, '1,5', -4],
          [0.0000092, '9,2', -6], [0.000043, '4,3', -5], [0.0016, '1,6', -3],
          [0.00024, '2,4', -4], [0.0000058, '5,8', -6], [0.0083, '8,3', -3],
          [0.000067, '6,7', -5], [0.0000019, '1,9', -6], [0.000512, '5,12', -4],
        ];
        const [_val, mantissa, exp] = configs[Math.floor(rnd() * configs.length)];
        const valFr = String(_val).replace('.', ',');
        const fmtMantissa = (n: number) => {
          const s = n.toFixed(6).replace(/0+$/, '').replace(/\.$/, '');
          return s.replace('.', ',');
        };
        return {
          q: `Écris en notation scientifique : ${valFr}`,
          options: [
            <>{mantissa} × 10<sup>{exp}</sup></>,
            <>{fmtMantissa(parseFloat(mantissa.replace(',', '.'))*10)} × 10<sup>{exp+1}</sup></>,
            <>{mantissa} × 10<sup>{-exp}</sup></>,
            <>{fmtMantissa(parseFloat(mantissa.replace(',', '.'))/10)} × 10<sup>{exp-1}</sup></>,
          ],
          correct: 0,
          hint: `Un seul chiffre non nul avant la virgule : ${mantissa} × 10^${exp}.`,
        };
      }},
      { key:'pui-4', gen: (rnd) => {
        const bases = [2, 3, 5];
        const base = bases[Math.floor(rnd() * bases.length)];
        const e1 = 2 + Math.floor(rnd() * 3);
        const e2 = 2 + Math.floor(rnd() * 3);
        const goodExp = e1 * e2;
        const used = new Set([goodExp]);
        let w1 = e1 + e2;  // somme (erreur fréquente)
        while (used.has(w1)) w1++;
        used.add(w1);
        let w2 = goodExp + 1;
        while (used.has(w2)) w2++;
        used.add(w2);
        let w3 = goodExp - 1;
        if (w3 <= 0 || used.has(w3)) { w3 = goodExp + 2; while (used.has(w3)) w3++; }
        return {
          q: <>Simplifie : <M>({base}<sup>{e1}</sup>)<sup>{e2}</sup> =</M></>,
          options: [<>{base}<sup>{w1}</sup></>, <>{base}<sup>{goodExp}</sup></>, <>{base}<sup>{w2}</sup></>, <>{base}<sup>{w3}</sup></>],
          correct: 1,
          hint: `Puissance de puissance : on multiplie les exposants → ${base}^(${e1}×${e2}) = ${base}^${goodExp}.`,
        };
      }},
      { key:'pui-5', gen: (rnd) => {
        // (a × 10^n) × (b × 10^m) en notation scientifique
        const asPool = [2, 3, 4, 5];
        const a = asPool[Math.floor(rnd() * asPool.length)];
        const bs = [2, 3, 4, 5];
        const b = bs[Math.floor(rnd() * bs.length)];
        const n = 2 + Math.floor(rnd() * 5);
        const m = 1 + Math.floor(rnd() * 4);
        const prod = a * b;
        const expSum = n + m;
        // Si prod >= 10, normalize
        const normalProd = prod >= 10 ? prod / 10 : prod;
        const normalExp = prod >= 10 ? expSum + 1 : expSum;
        // Options distinctes : clé = "mantisse|exposant"
        const goodKey = `${normalProd}|${normalExp}`;
        const usedKeys = new Set([goodKey]);
        // w1 : mauvaise mantisse (somme au lieu de produit)
        const w1mant = a + b;
        let w1exp = expSum;
        let w1key = `${w1mant}|${w1exp}`;
        while (usedKeys.has(w1key)) { w1exp++; w1key = `${w1mant}|${w1exp}`; }
        usedKeys.add(w1key);
        // w2 : bonne mantisse, exposant décalé
        let w2exp = normalExp - 1;
        let w2key = `${normalProd}|${w2exp}`;
        while (usedKeys.has(w2key)) { w2exp--; w2key = `${normalProd}|${w2exp}`; }
        usedKeys.add(w2key);
        // w3 : mantisse = prod non-normalisé, exposant n*m
        let w3mant = prod;
        let w3exp = n * m;
        let w3key = `${w3mant}|${w3exp}`;
        while (usedKeys.has(w3key)) { w3exp++; w3key = `${w3mant}|${w3exp}`; }
        return {
          q: <>({a} × 10<sup>{n}</sup>) × ({b} × 10<sup>{m}</sup>) =</>,
          options: [
            <>{normalProd} × 10<sup>{normalExp}</sup></>,
            <>{w1mant} × 10<sup>{w1exp}</sup></>,
            <>{normalProd} × 10<sup>{w2exp}</sup></>,
            <>{w3mant} × 10<sup>{w3exp}</sup></>,
          ],
          correct: 0,
          hint: `${a}×${b} = ${prod}${prod >= 10 ? ` = ${normalProd} × 10` : ''} et 10^${n} × 10^${m} = 10^${expSum} → ${normalProd} × 10^${normalExp}.`,
        };
      }},
      { key:'pui-6', gen: (rnd) => {
        const bases = [3, 5, 7];
        const base = bases[Math.floor(rnd() * bases.length)];
        const e1 = 4 + Math.floor(rnd() * 5);
        const e2 = 1 + Math.floor(rnd() * 3);
        const goodExp = e1 - e2;
        const w1 = e1 + e2;
        const w2 = goodExp - 1;
        const used = new Set([goodExp, w1, w2]);
        let w3 = goodExp + 2;
        while (used.has(w3)) w3++;
        return {
          q: <>Simplifie : <M>{base}<sup>{e1}</sup> ÷ {base}<sup>{e2}</sup> =</M></>,
          options: [<>{base}<sup>{goodExp}</sup></>, <>{base}<sup>{w1}</sup></>, <>{base}<sup>{w2}</sup></>, <>{base}<sup>{w3}</sup></>],
          correct: 0,
          hint: `Division : on soustrait les exposants → ${base}^${e1}−${e2} = ${base}^${goodExp}.`,
        };
      }},
      { key:'pui-7', gen: (rnd) => {
        // Notation scientifique grand nombre
        const configs: Array<[number, string, number]> = [
          [4800000, '4,8', 6], [2300000, '2,3', 6], [91000000, '9,1', 7],
          [3750000, '3,75', 6], [12400000, '1,24', 7], [560000, '5,6', 5],
          [7200000, '7,2', 6], [830000, '8,3', 5], [1570000, '1,57', 6],
          [63000000, '6,3', 7], [4100000, '4,1', 6], [980000, '9,8', 5],
        ];
        const [val, mantissa, exp] = configs[Math.floor(rnd() * configs.length)];
        const mNum = parseFloat(mantissa.replace(',', '.'));
        const fmtM = (n: number) => {
          const s = n.toFixed(6).replace(/0+$/, '').replace(/\.$/, '');
          return s.replace('.', ',');
        };
        return {
          q: `Écris en notation scientifique : ${val.toLocaleString('fr-FR')}`,
          options: [
            <>{mantissa} × 10<sup>{exp}</sup></>,
            <>{fmtM(mNum*10)} × 10<sup>{exp-1}</sup></>,
            <>{mantissa} × 10<sup>{exp+1}</sup></>,
            <>{fmtM(mNum/10)} × 10<sup>{exp+1}</sup></>,
          ],
          correct: 0,
          hint: `Un chiffre non nul avant la virgule : ${mantissa} × 10^${exp}.`,
        };
      }},
      { key:'pui-8', gen: (rnd) => {
        // (a × 10^n) ÷ (b × 10^m)
        const configs = [
          [3, 6, 6, 2], [4, 8, 5, 2], [9, 3, 7, 4], [6, 2, 8, 3], [8, 4, 9, 3],
          [6, 3, 8, 5], [8, 2, 9, 6], [9, 9, 8, 4], [4, 2, 7, 3], [6, 6, 9, 5],
          [5, 5, 7, 2], [3, 3, 8, 3],
        ];
        const [a, b, n, m] = configs[Math.floor(rnd() * configs.length)];
        const ratio = a / b;
        const expDiff = n - m;
        // Normalize if ratio < 1
        const normRatio = ratio < 1 ? ratio * 10 : ratio;
        const normExp = ratio < 1 ? expDiff - 1 : expDiff;
        return {
          q: <>({a} × 10<sup>{n}</sup>) ÷ ({b} × 10<sup>{m}</sup>) =</>,
          options: [
            <>{normRatio} × 10<sup>{normExp}</sup></>,
            <>{normRatio} × 10<sup>{normExp + 1}</sup></>,
            <>{ratio < 1 ? ratio * 100 : ratio} × 10<sup>{normExp - 1}</sup></>,
            <>{a * b} × 10<sup>{n + m}</sup></>,
          ],
          correct: 0,
          hint: `${a}÷${b} = ${ratio}${ratio < 1 ? ` = ${normRatio} × 10⁻¹` : ''} et 10^${n}÷10^${m} = 10^${expDiff} → ${normRatio} × 10^${normExp}.`,
        };
      }},
    ],

    remarquables: [
      { key:'rem-1', gen: (rnd) => {
        const b = 1 + Math.floor(rnd() * 12);
        const b2 = b * b;
        const twob = 2 * b;
        const good = `x² + ${twob}x + ${b2}`;
        const w1 = `x² + ${b2}`;
        const w2 = `x² − ${twob}x + ${b2}`;
        const w3 = `${twob}x + ${b2}`;
        return {
          q: <>Développe : <M>(x + {b})² =</M></>,
          options: [good, w1, w2, w3],
          correct: 0,
          hint: `(a+b)² = a² + 2ab + b² = x² + ${twob}x + ${b2}.`,
        };
      }},
      { key:'rem-2', gen: (rnd) => {
        const a = 2 + Math.floor(rnd() * 4);
        const b = 1 + Math.floor(rnd() * 5);
        const a2 = a * a, b2 = b * b, twab = 2 * a * b;
        const good = `${a2}x² − ${twab}x + ${b2}`;
        const w1 = `${a2}x² − ${b2}`;
        const w2 = `${a2}x² + ${twab}x + ${b2}`;
        const w3 = `${a}x² − ${twab}x + ${b2}`;
        return {
          q: <>Développe : <M>({a}x − {b})² =</M></>,
          options: [good, w1, w2, w3],
          correct: 0,
          hint: `(a−b)² = a² − 2ab + b² = ${a2}x² − ${twab}x + ${b2}.`,
        };
      }},
      { key:'rem-3', gen: (rnd) => {
        const b = 1 + Math.floor(rnd() * 12);
        const b2 = b * b;
        const twob = 2 * b;
        const good = `x² − ${b2}`;
        const w1 = `x² + ${b2}`;
        const w2 = `x² − ${twob}x + ${b2}`;
        const w3 = `${twob}x`;
        return {
          q: <>Développe : <M>(x + {b})(x − {b}) =</M></>,
          options: [good, w1, w2, w3],
          correct: 0,
          hint: `(a+b)(a−b) = a² − b² = x² − ${b2}.`,
        };
      }},
      { key:'rem-4', gen: (rnd) => {
        const b = 2 + Math.floor(rnd() * 11);
        const b2 = b * b;
        const good = `(x − ${b})(x + ${b})`;
        const w1 = `(x − ${b})²`;
        const w2 = `(x + ${b})²`;
        const w3 = `x(x − ${b2})`;
        return {
          q: <>Factorise : <M>x² − {b2} =</M></>,
          options: [good, w1, w2, w3],
          correct: 0,
          hint: `a² − b² = (a−b)(a+b). ${b2} = ${b}².`,
        };
      }},
      { key:'rem-5', gen: (rnd) => {
        const b = 1 + Math.floor(rnd() * 11);
        const b2 = b * b;
        const twob = 2 * b;
        const good = `(x + ${b})²`;
        const w1 = `(x − ${b})²`;
        const w2 = `(x + ${b})(x + ${b2})`;
        const w3 = `(x + ${twob})(x + ${b2})`;
        return {
          q: <>Factorise : <M>x² + {twob}x + {b2} =</M></>,
          options: [good, w1, w2, w3],
          correct: 0,
          hint: `Forme a²+2ab+b² avec a=x, b=${b} → (x+${b})².`,
        };
      }},
      { key:'rem-6', gen: (rnd) => {
        const a = 2 + Math.floor(rnd() * 4);
        const b = 1 + Math.floor(rnd() * 5);
        const a2 = a * a, b2 = b * b, twab = 2 * a * b;
        const good = `${a2}x² + ${twab}x + ${b2}`;
        const w1 = `${a2}x² + ${b2}`;                     // sans le terme en x
        const w2 = `${a2}x² + ${a * b}x + ${b2}`;         // 2ab → ab (erreur ×2)
        // w3 : coefficient de x² = (a+1)² pour éviter collision avec a²
        const a3 = (a + 1) * (a + 1);
        const w3 = `${a3}x² + ${twab}x + ${b2}`;
        const used = new Set([good, w1, w2, w3]);
        const finalW3 = used.size === 4 ? w3 : `${a2}x² + ${twab + 1}x + ${b2}`;
        return {
          q: <>Développe : <M>({a}x + {b})² =</M></>,
          options: [good, w1, w2, finalW3],
          correct: 0,
          hint: `(a+b)² = a²+2ab+b² avec a=${a}x, b=${b} : ${a2}x² + ${twab}x + ${b2}.`,
        };
      }},
      { key:'rem-7', gen: (rnd) => {
        const a = 2 + Math.floor(rnd() * 5);
        const b = 2 + Math.floor(rnd() * 5);
        const a2 = a * a, b2 = b * b;
        const good = `(${a}x − ${b})(${a}x + ${b})`;
        const w1 = `(${a}x − ${b})²`;
        const w2 = `(${a2}x − ${b2})(${a2}x + ${b2})`;
        const w3 = `${a}(${a}x² − ${b2})`;
        return {
          q: <>Factorise : <M>{a2}x² − {b2} =</M></>,
          options: [good, w1, w2, w3],
          correct: 0,
          hint: `a² − b² avec a=${a}x, b=${b} → (${a}x−${b})(${a}x+${b}).`,
        };
      }},
      { key:'rem-8', gen: (rnd) => {
        const b = 2 + Math.floor(rnd() * 11);
        const b2 = b * b;
        const twob = 2 * b;
        const good = `x² − ${b2}`;
        const w1 = `x² − ${twob}x + ${b2}`;
        const w2 = `x² + ${b2}`;
        const w3 = `${twob}x − ${b2}`;
        return {
          q: <>Développe : <M>(x − {b})(x + {b}) =</M></>,
          options: [good, w1, w2, w3],
          correct: 0,
          hint: `(a+b)(a−b) = a² − b² = x² − ${b2}.`,
        };
      }},
    ],

    equations: [
      { key:'equ-1', gen: (rnd) => {
        const a = 3 + Math.floor(rnd() * 5);
        const b = 1 + Math.floor(rnd() * (a - 1));
        const shift_r = 1 + Math.floor(rnd() * 10);
        const shift_l = -(1 + Math.floor(rnd() * 8));
        // a*x + shift_l = b*x + shift_r → x = (shift_r - shift_l)/(a - b)
        if (a <= b) return { q: <>Résous : <M>4x − 7 = 2x + 5</M></>, options:['x = 6','x = −6','x = 3','x = 12'], correct:0, hint:'4x − 2x = 5 + 7 → 2x = 12 → x = 6.' };
        const x = (shift_r - shift_l) / (a - b);
        if (!Number.isInteger(x) || x <= 0 || x > 15) return { q: <>Résous : <M>4x − 7 = 2x + 5</M></>, options:['x = 6','x = −6','x = 3','x = 12'], correct:0, hint:'4x − 2x = 5 + 7 → 2x = 12 → x = 6.' };
        const lhs_const_str = shift_l < 0 ? `${shift_l}` : `+ ${shift_l}`;
        const used = new Set([x, -x]);
        let w3 = x + 1;
        while (used.has(w3)) w3++;
        used.add(w3);
        let w4 = shift_r;
        while (used.has(w4)) w4 = w4 + 2;
        return {
          q: <>Résous : <M>{a}x {lhs_const_str} = {b}x + {shift_r}</M></>,
          options: [`x = ${x}`, `x = ${-x}`, `x = ${w3}`, `x = ${w4}`],
          correct: 0,
          hint: `${a}x − ${b}x = ${shift_r} + ${-shift_l} → ${a-b}x = ${shift_r - shift_l} → x = ${x}.`,
        };
      }},
      { key:'equ-2', gen: (rnd) => {
        const r1 = 1 + Math.floor(rnd() * 8);
        const r2 = -(1 + Math.floor(rnd() * 8));
        return {
          q: <>Résous l'équation produit : <M>(x − {r1})(x + {-r2}) = 0</M></>,
          options: [
            `x = ${r1} ou x = ${r2}`,
            `x = ${r1} seulement`,
            `x = ${-r1} ou x = ${-r2}`,
            `x = ${r1 * (-r2)}`,
          ],
          correct: 0,
          hint: `Un produit nul ⇔ un des facteurs est nul : x=${r1} ou x=${r2}.`,
        };
      }},
      { key:'equ-3', gen: (rnd) => {
        const sqrts = [4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169];
        const sq = sqrts[Math.floor(rnd() * sqrts.length)];
        const root = Math.sqrt(sq);
        const used = new Set([`x = ${root} ou x = ${-root}`, `x = ${root}`, `x = ${-root}`, `x = ${root + 1}`]);
        // w3 : sq/2 sauf si collision avec root
        const half = sq / 2;
        const w3 = half !== root && half !== -root ? `x = ${half}` : `x = ${root + 2}`;
        return {
          q: <>Résous : <M>x² = {sq}</M></>,
          options: [`x = ${root} ou x = ${-root}`, `x = ${root}`, w3, `x = ${root + 1}`],
          correct: 0,
          hint: `x² = ${sq} a deux solutions : ${root} et ${-root}.`,
        };
      }},
      { key:'equ-4', gen: (rnd) => {
        const sol = 2 + Math.floor(rnd() * 7);
        const a = 2 + Math.floor(rnd() * 4);
        const b = 1 + Math.floor(rnd() * 6);
        const rhs = a * sol - b;
        // Garantit 4 options distinctes
        const used = new Set([`x ≤ ${sol}`, `x ≥ ${sol}`]);
        let w3 = `x ≤ ${rhs}`;
        if (used.has(w3)) w3 = `x ≤ ${sol + 2}`;
        used.add(w3);
        let w4 = `x ≥ ${b}`;
        if (used.has(w4)) w4 = `x ≥ ${sol + 3}`;
        return {
          q: <>Résous l&apos;inéquation : <M>{a}x − {b} ≤ {rhs}</M></>,
          options: [`x ≤ ${sol}`, `x ≥ ${sol}`, w3, w4],
          correct: 0,
          hint: `${a}x ≤ ${rhs + b} → x ≤ ${sol}.`,
        };
      }},
      { key:'equ-5', q:'Dans une inéquation, que se passe-t-il quand on multiplie ou divise par un nombre négatif ?',
        options:['Rien ne change','Le sens de l\'inégalité change','L\'inégalité disparaît','Il faut mettre au carré'], correct:1,
        hint:'Multiplier par négatif INVERSE le sens de l\'inégalité.' },
      { key:'equ-6', gen: (rnd) => {
        const x = 3 + Math.floor(rnd() * 7);
        const y = 1 + Math.floor(rnd() * 5);
        // Garantit x ≠ y pour que les options permutées soient distinctes
        const yf = y >= x ? y + 1 : y;
        const s1 = x + yf;
        const s2 = x - yf;
        const used = new Set([`x=${x}, y=${yf}`, `x=${yf}, y=${x}`, `x=${s1}, y=${s2}`]);
        let w4 = `x=${x+1}, y=${yf-1}`;
        while (used.has(w4)) w4 = `x=${x+2}, y=${yf}`;
        return {
          q: <>Résous le système : <M>x + y = {s1}</M> et <M>x − y = {s2}</M></>,
          options: [`x=${x}, y=${yf}`, `x=${yf}, y=${x}`, `x=${s1}, y=${s2}`, w4],
          correct: 0,
          hint: `Ajouter les 2 équations → 2x=${s1+s2} → x=${x}, puis y=${s1}−${x}=${yf}.`,
        };
      }},
      { key:'equ-7', gen: (rnd) => {
        const sol = 2 + Math.floor(rnd() * 8);
        const a = 2 + Math.floor(rnd() * 4);
        const b = 1 + Math.floor(rnd() * 5);
        const c = 1 + Math.floor(rnd() * (a - 1));
        if (a <= c) return { q: <>Résous : <M>2(3x − 1) = 4x + 8</M></>, options:['x = 5','x = 3','x = 2','x = −5'], correct:0, hint:'6x − 2 = 4x + 8 → 2x = 10 → x = 5.' };
        const rhs2 = (a - c) * sol - b;
        const solCheck = (rhs2 + b) / (a - c);
        if (!Number.isInteger(solCheck) || solCheck !== sol) return { q: <>Résous : <M>2(3x − 1) = 4x + 8</M></>, options:['x = 5','x = 3','x = 2','x = −5'], correct:0, hint:'6x − 2 = 4x + 8 → 2x = 10 → x = 5.' };
        const used = new Set([sol]);
        let w2 = sol + 1;
        while (used.has(w2)) w2++;
        used.add(w2);
        let w3 = sol - 1;
        if (w3 <= 0 || used.has(w3)) { w3 = sol + 2; while (used.has(w3)) w3++; }
        used.add(w3);
        let w4 = rhs2;
        while (used.has(w4)) w4 = w4 + 3;
        return {
          q: <>Résous : <M>{a}x − {b} = {c}x + {rhs2}</M></>,
          options: [`x = ${sol}`, `x = ${w2}`, `x = ${w3}`, `x = ${w4}`],
          correct: 0,
          hint: `${a}x − ${c}x = ${rhs2} + ${b} → ${a-c}x = ${rhs2+b} → x = ${sol}.`,
        };
      }},
      { key:'equ-8', gen: (rnd) => {
        const sol = 1 + Math.floor(rnd() * 12);
        const a = 2 + Math.floor(rnd() * 4);
        const b = a * sol + 1;
        // −a*x + b > 0 → x < b/a = sol + 1/a ... not integer. Use: −a*x + a*sol > 0 → x < sol
        return {
          q: <>Résous l&apos;inéquation : <M>−{a}x + {a * sol} &gt; 0</M></>,
          options: [`x > ${sol}`, `x < ${sol}`, `x > ${-sol}`, `x < ${-sol}`],
          correct: 1,
          hint: `−${a}x > −${a * sol} → diviser par −${a} et INVERSER : x < ${sol}.`,
        };
      }},
      { key:'equ-9', gen: (rnd) => {
        const r1 = -(1 + Math.floor(rnd() * 5));
        const r2 = 2 + Math.floor(rnd() * 7);
        // (2x - r1*(-2))(x - r2) = (2x + 2*|r1|)(x - r2) ... simpler:
        // (ax + b)(x - r2) = 0 → x = -b/a or x = r2
        const a = 2 + Math.floor(rnd() * 3);
        // r1 = -b/a → b = -r1*a
        const b = -r1 * a;
        // so (ax + b)(x - r2) = 0 → x = r1 or x = r2
        return {
          q: <>Résous l'équation produit : <M>({a}x + {b})(x − {r2}) = 0</M></>,
          options: [
            `x = ${r1} ou x = ${r2}`,
            `x = ${-r1} ou x = ${r2}`,
            `x = ${r1} ou x = ${-r2}`,
            `x = ${-r2}`,
          ],
          correct: 0,
          hint: `${a}x + ${b} = 0 → x = ${r1} ; x − ${r2} = 0 → x = ${r2}.`,
        };
      }},
      { key:'equ-10', gen: (rnd) => {
        const x = 2 + Math.floor(rnd() * 7);
        const y = 1 + Math.floor(rnd() * 4);
        // Garantit x ≠ y pour que la permutation soit distincte
        const yf = y >= x ? y + 2 : y;
        const s1 = 2 * x + yf;
        const s2 = x - yf;
        const good = `x=${x}, y=${yf}`;
        const used = new Set([good, `x=${yf}, y=${x}`]);
        let w3 = `x=${x+1}, y=${yf}`;
        while (used.has(w3)) w3 = `x=${x+2}, y=${yf}`;
        used.add(w3);
        let w4 = `x=${x}, y=${yf+1}`;
        while (used.has(w4)) w4 = `x=${x}, y=${yf+2}`;
        return {
          q: <>Résous le système : <M>2x + y = {s1}</M> et <M>x − y = {s2}</M></>,
          options: [good, `x=${yf}, y=${x}`, w3, w4],
          correct: 0,
          hint: `Additionner : 3x = ${s1+s2} → x = ${x}, puis y = ${s1} − ${2*x} = ${yf}.`,
        };
      }},
      { key:'equ-11', gen: (rnd) => {
        const sol = 1 + Math.floor(rnd() * 9);
        const a = 2 + Math.floor(rnd() * 5);
        const b = 1 + Math.floor(rnd() * 8);
        const c = 1 + Math.floor(rnd() * 8);
        // a*x - b = c*x + a*sol - b - c*sol → rhs = a*sol - b - (sol*(a-c)) + c*sol ...
        // Simpler: a*x - b = c + lhs_const where lhs_const chosen so x=sol
        // a*sol - b = rhs → rhs = a*sol - b, ensure rhs > 0
        if (a <= 1) return { q: <>Résous : <M>5x − 3 = 22</M></>, options:['x = 5','x = 4','x = 6','x = 3'], correct:0, hint:'5x = 25 → x = 5.' };
        const rhs = a * sol - b;
        if (rhs <= 0 || rhs > 50) return { q: <>Résous : <M>5x − 3 = 22</M></>, options:['x = 5','x = 4','x = 6','x = 3'], correct:0, hint:'5x = 25 → x = 5.' };
        const used = new Set([sol]);
        let w2 = sol + 1; while (used.has(w2)) w2++; used.add(w2);
        let w3 = sol - 1;
        if (w3 <= 0 || used.has(w3)) { w3 = sol + 2; while (used.has(w3)) w3++; }
        used.add(w3);
        let w4 = rhs; while (used.has(w4)) w4++;
        return {
          q: <>Résous : <M>{a}x − {b} = {rhs}</M></>,
          options: [`x = ${sol}`, `x = ${w2}`, `x = ${w3}`, `x = ${w4}`],
          correct: 0,
          hint: `${a}x = ${rhs} + ${b} = ${rhs+b} → x = ${rhs+b} ÷ ${a} = ${sol}.`,
        };
      }},
      { key:'equ-12', gen: (rnd) => {
        const r1 = 1 + Math.floor(rnd() * 6);
        const r2 = r1 + 1 + Math.floor(rnd() * 6);
        // (x - r1)(x - r2) = 0
        return {
          q: <>Résous : <M>(x − {r1})(x − {r2}) = 0</M></>,
          options: [
            `x = ${r1} ou x = ${r2}`,
            `x = ${-r1} ou x = ${-r2}`,
            `x = ${r1 * r2}`,
            `x = ${r1} seulement`,
          ],
          correct: 0,
          hint: `Produit nul ⇔ l'un des facteurs est nul : x − ${r1} = 0 → x = ${r1} ou x − ${r2} = 0 → x = ${r2}.`,
        };
      }},
      { key:'equ-13', gen: (rnd) => {
        const sol = 2 + Math.floor(rnd() * 8);
        const a = 2 + Math.floor(rnd() * 4);
        const b = 1 + Math.floor(rnd() * 5);
        const c = 1 + Math.floor(rnd() * (a - 1));
        // a*(sol - b/a) ne marche pas toujours, utiliser: ax - b ≥ c*sol - b → x ≥ sol
        // On veut ax + b > c*sol + b → ax > c*sol → simple: ax > c*x + (a-c)*sol
        // Format: ax - b > c*x + (a-c)*sol - b → (a-c)x > (a-c)*sol ... compliqué
        // Simpler: a*x + b > a*sol + b is trivial... Use: x/a + b > c → x > a*(c-b)
        // Most robust: just set rhs such that ax > rhs → x > sol
        const diff = a - c;
        if (diff <= 0) return { q: <>Résous : <M>5x − 8 &gt; 2x + 4</M></>, options:['x > 4','x < 4','x > −4','x > 12'], correct:0, hint:'3x > 12 → x > 4.' };
        const rhs = diff * sol;
        const used = new Set([`x > ${sol}`, `x < ${sol}`]);
        let w3 = `x > ${sol - 1}`; if (used.has(w3)) w3 = `x > ${sol + 2}`;
        let w4 = `x < ${sol + 1}`; if (used.has(w4)) w4 = `x ≥ ${sol}`;
        return {
          q: <>Résous : <M>{a}x − {c}x &gt; {rhs}</M></>,
          options: [`x > ${sol}`, `x < ${sol}`, w3, w4],
          correct: 0,
          hint: `${diff}x > ${rhs} → x > ${sol}.`,
        };
      }},
      { key:'equ-14', gen: (rnd) => {
        // Équation avec fraction : x/a = b → x = a*b
        const a = 2 + Math.floor(rnd() * 5);   // 2..6
        const b = 2 + Math.floor(rnd() * 8);   // 2..9
        const good = a * b;
        const used = new Set([good]);
        let w2 = a + b; while (used.has(w2)) w2++; used.add(w2);
        let w3 = good + a; while (used.has(w3)) w3++; used.add(w3);
        let w4 = good - 1;
        if (w4 <= 0 || used.has(w4)) { w4 = good + 2; while (used.has(w4)) w4++; }
        return {
          q: <><M><F n="x" d={String(a)}/> = {b}</M> → <M>x =</M></>,
          options: [String(good), String(w2), String(w3), String(w4)],
          correct: 0,
          hint: `Multiplier les deux membres par ${a} : x = ${b} × ${a} = ${good}.`,
        };
      }},
      { key:'equ-15', gen: (rnd) => {
        const x = 2 + Math.floor(rnd() * 8);
        const y = 1 + Math.floor(rnd() * 6);
        const yf = y === x ? y + 1 : y;
        // Système : x + y = s1, 2x + y = s2
        const s1 = x + yf;
        const s2 = 2 * x + yf;
        const good = `x=${x}, y=${yf}`;
        const used = new Set([good]);
        let w2 = `x=${yf}, y=${x}`; if (used.has(w2)) w2 = `x=${x+1}, y=${yf-1}`; used.add(w2);
        let w3 = `x=${x+1}, y=${yf}`; while (used.has(w3)) w3 = `x=${x+2}, y=${yf}`; used.add(w3);
        let w4 = `x=${x}, y=${yf+1}`; while (used.has(w4)) w4 = `x=${x}, y=${yf+2}`;
        return {
          q: <>Résous : <M>x + y = {s1}</M> et <M>2x + y = {s2}</M></>,
          options: [good, w2, w3, w4],
          correct: 0,
          hint: `Soustraire la 1ʳᵉ équation de la 2ᵉ : x = ${s2} − ${s1} = ${x}, puis y = ${s1} − ${x} = ${yf}.`,
        };
      }},
    ],

    fonctions: [
      { key:'fon-1', q:'Une fonction linéaire a pour forme :',
        options:['f(x) = ax + b','f(x) = ax','f(x) = x + b','f(x) = a/x'], correct:1,
        hint:'Linéaire : f(x) = ax. Affine : f(x) = ax + b.' },
      { key:'fon-2', gen: (rnd) => {
        const a = 2 + Math.floor(rnd() * 7);
        const x = 2 + Math.floor(rnd() * 8);
        const good = a * x;
        const used = new Set([good]);
        let w1 = a + x;  // erreur : additionner au lieu de multiplier
        while (used.has(w1)) w1++;
        used.add(w1);
        let w2 = good + a;  // f(x+1) erreur
        while (used.has(w2)) w2++;
        used.add(w2);
        let w3 = good - a;  // f(x-1)
        while (used.has(w3) || w3 <= 0) w3 = good + 2 * a;
        if (used.has(w3)) w3 = good + 3;
        return {
          q: `Si f(x) = ${a}x, que vaut f(${x}) ?`,
          options: [String(good), String(w1), String(w2), String(w3)],
          correct: 0,
          hint: `f(${x}) = ${a} × ${x} = ${good}.`,
        };
      }},
      { key:'fon-3', q:'La représentation graphique d\'une fonction linéaire est :',
        options:['Une courbe','Une droite passant par l\'origine','Une droite quelconque','Un cercle'], correct:1,
        hint:'Linéaire f(x)=ax → droite passant par (0,0).' },
      { key:'fon-4', q:'La représentation graphique d\'une fonction affine f(x) = ax + b est :',
        options:['Une droite d\'ordonnée à l\'origine b','Toujours passant par l\'origine','Une parabole','Une hyperbole'], correct:0,
        hint:'Affine : droite, passe par (0, b).' },
      { key:'fon-5', gen: (rnd) => {
        const a = 1 + Math.floor(rnd() * 5);
        const b = -(1 + Math.floor(rnd() * 8));
        const x = 2 + Math.floor(rnd() * 7);
        const good = a * x + b;
        const used = new Set([good]);
        let w1 = a * x - b;  // signe oublié sur b
        while (used.has(w1)) w1 = w1 + 2;
        used.add(w1);
        let w2 = a + x + b;  // additionné au lieu de multiplié
        while (used.has(w2)) w2 = w2 - 1;
        if (used.has(w2)) w2 = good + 3;
        used.add(w2);
        let w3 = good + 1;
        while (used.has(w3)) w3++;
        return {
          q: `Pour f(x) = ${a}x + (${b}), quelle est l&apos;image de ${x} ?`,
          options: [String(good), String(w1), String(w2), String(w3)],
          correct: 0,
          hint: `f(${x}) = ${a}×${x} + (${b}) = ${a*x} + (${b}) = ${good}.`,
        };
      }},
      { key:'fon-6', gen: (rnd) => {
        // f(x) = ax + b, trouver antécédent de y
        const a = 1 + Math.floor(rnd() * 5);
        const b = -(1 + Math.floor(rnd() * 6));
        const x = 2 + Math.floor(rnd() * 8);
        const y = a * x + b;
        const good = x;
        const used = new Set([good]);
        let w1 = y;
        while (used.has(w1)) w1 += 2;
        used.add(w1);
        let w2 = x + 1;
        while (used.has(w2)) w2++;
        used.add(w2);
        let w3 = x - 1;
        while (used.has(w3) || w3 <= 0) w3 = w3 - 1 > 0 ? w3 - 1 : good + 3;
        if (used.has(w3)) w3 = good + 4;
        return {
          q: `Pour f(x) = ${a}x + (${b}), quel antécédent a l&apos;image ${y} ?`,
          options: [`x = ${good}`, `x = ${w1}`, `x = ${w2}`, `x = ${w3}`],
          correct: 0,
          hint: `${a}x + (${b}) = ${y} → ${a}x = ${y - b} → x = ${good}.`,
        };
      }},
      { key:'fon-7', gen: (rnd) => {
        // Coefficient directeur
        const a = -(4 + Math.floor(rnd() * 6));
        const b = 1 + Math.floor(rnd() * 8);
        const good = a;
        const used = new Set([good]);
        let w1 = b;  // ordonnée à l'origine (erreur fréquente)
        while (used.has(w1)) w1++;
        used.add(w1);
        let w2 = -a;  // signe oublié
        while (used.has(w2)) w2++;
        used.add(w2);
        let w3 = a - 1;  // décalé
        while (used.has(w3)) w3--;
        return {
          q: `La pente (coefficient directeur) de f(x) = ${a}x + ${b} est :`,
          options: [String(w1), String(good), String(w2), String(w3)],
          correct: 1,
          hint: `Dans f(x) = ax + b, a est la pente → a = ${good}.`,
        };
      }},
      { key:'fon-8', gen: (rnd) => {
        // Déterminer la fonction affine à partir de 2 points : (0, b) et (k, y)
        const a = 1 + Math.floor(rnd() * 5);
        // b ≠ a pour que la permutation soit distincte
        let b = 1 + Math.floor(rnd() * 6);
        if (b === a) b = b < 6 ? b + 1 : b - 1;
        const k = 2 + Math.floor(rnd() * 4);
        const y2 = a * k + b;
        const good = `f(x) = ${a}x + ${b}`;
        const used = new Set([good]);
        let w1 = `f(x) = ${b}x + ${a}`;
        if (used.has(w1)) w1 = `f(x) = ${b + 1}x + ${a}`;
        used.add(w1);
        let w2 = `f(x) = ${a}x − ${b}`;
        if (used.has(w2)) w2 = `f(x) = ${a}x − ${b + 1}`;
        used.add(w2);
        let w3 = `f(x) = ${a + 1}x + ${b}`;
        if (used.has(w3)) w3 = `f(x) = ${a + 2}x + ${b}`;
        return {
          q: `Une droite passe par (0, ${b}) et (${k}, ${y2}). Sa fonction affine est :`,
          options: [good, w1, w2, w3],
          correct: 0,
          hint: `b = ${b}. Pente a = (${y2}−${b})/(${k}−0) = ${y2-b}/${k} = ${a}. Donc f(x) = ${a}x + ${b}.`,
        };
      }},
      { key:'fon-9', gen: (rnd) => {
        // Zéro d'une fonction : f(x) = -ax + c → x = c/a, avec a ≥ 2 pour c ≠ sol
        const a = 2 + Math.floor(rnd() * 4);  // a ≥ 2 garantit c = a*sol ≠ sol
        const sol = 2 + Math.floor(rnd() * 8);
        const c = a * sol;
        const good = sol;
        const used = new Set([good]);
        let w1 = -sol;
        while (used.has(w1)) w1--;
        used.add(w1);
        let w2 = c;
        while (used.has(w2)) w2 = w2 + 2;
        used.add(w2);
        let w3 = sol + 1;
        while (used.has(w3)) w3++;
        return {
          q: `Pour f(x) = −${a}x + ${c}, la valeur de x pour laquelle f(x) = 0 est :`,
          options: [`x = ${w1}`, `x = ${good}`, `x = ${w2}`, `x = ${w3}`],
          correct: 1,
          hint: `−${a}x + ${c} = 0 → x = ${c}/${a} = ${good}.`,
        };
      }},
      { key:'fon-10', gen: (rnd) => {
        // Linéaire : f(x)=ax, trouver f(n) connaissant f(m)
        const m = 2 + Math.floor(rnd() * 4);
        const a = 2 + Math.floor(rnd() * 5);
        const fm = a * m;
        const n = m + 1 + Math.floor(rnd() * 4);
        const good = a * n;
        const used = new Set([good]);
        let w1 = fm + n;  // erreur fréquente : additionner au lieu de multiplier
        while (used.has(w1)) w1 = w1 + n;
        used.add(w1);
        let w2 = good - a;  // f(n-1) au lieu de f(n)
        while (used.has(w2)) w2--;
        used.add(w2);
        let w3 = good + a;  // f(n+1)
        while (used.has(w3)) w3++;
        return {
          q: `Si f est une fonction linéaire telle que f(${m}) = ${fm}, alors f(${n}) =`,
          options: [String(w1), String(good), String(w2), String(w3)],
          correct: 1,
          hint: `Linéaire : f(x) = ax. a = ${fm}/${m} = ${a}. f(${n}) = ${a}×${n} = ${good}.`,
        };
      }},
    ],

    pythagore: [
      { key:'pyt-1', gen: (rnd) => {
        const TRIPLETS = [[3,4,5],[5,12,13],[8,15,17],[7,24,25],[9,12,15],[6,8,10],[15,20,25],[10,24,26],[20,21,29],[12,16,20],[9,40,41],[11,60,61]];
        const [a, b, c] = TRIPLETS[Math.floor(rnd() * TRIPLETS.length)];
        return {
          q: `Un triangle ABC a AB = ${a}, BC = ${b}, AC = ${c}. Est-il rectangle ?`,
          options: [
            `Oui, rectangle en B (réciproque de Pythagore)`,
            'Non',
            'Oui, rectangle en A',
            'Oui, rectangle en C',
          ],
          correct: 0,
          hint: `AB² + BC² = ${a*a} + ${b*b} = ${a*a+b*b} = ${c}² → rectangle en B.`,
        };
      }},
      { key:'pyt-1b', gen: (rnd) => {
        const TRIPLETS = [[3,4,5],[5,12,13],[8,15,17],[9,12,15],[6,8,10],[15,20,25],[7,24,25],[10,24,26],[12,16,20],[20,21,29],[9,40,41]];
        const [a, b, c] = TRIPLETS[Math.floor(rnd() * TRIPLETS.length)];
        const w1 = a + b;
        const w2 = c - 1;
        const w3 = c + 1;
        const used = new Set([c, w1, w2, w3]);
        let w3f = w3;
        while (used.has(w3f)) w3f++;
        return {
          q: `Triangle rectangle en A avec AB = ${a} cm, AC = ${b} cm. Calcule BC.`,
          options: [`${c} cm`, `${w1} cm`, `${w2} cm`, `${w3f} cm`],
          correct: 0,
          hint: `BC² = ${a}² + ${b}² = ${a*a+b*b} → BC = ${c} cm.`,
        };
      }},
      { key:'pyt-2', gen: (rnd) => {
        const TRIPLETS = [[5,12,13],[8,15,17],[7,24,25],[9,12,15],[10,24,26],[6,8,10]];
        const [a, b, c] = TRIPLETS[Math.floor(rnd() * TRIPLETS.length)];
        const known = rnd() < 0.5 ? a : b;
        const missing = known === a ? b : a;
        return {
          q: `L'hypoténuse d'un triangle rectangle mesure ${c} cm et un côté ${known} cm. L'autre côté mesure :`,
          options: [`${missing} cm`, `${c - known} cm`, `√${c*c+known*known} cm`, `${missing + 1} cm`],
          correct: 0,
          hint: `c² = ${c}² − ${known}² = ${c*c - known*known} → c = ${missing} cm.`,
        };
      }},
      { key:'pyt-3', gen: (rnd) => {
        const TRIPLETS = [[5,12,13],[8,15,17],[7,24,25],[9,12,15],[6,8,10],[3,4,5],[10,24,26],[12,16,20],[15,20,25],[20,21,29],[9,40,41],[11,60,61]];
        const [a, b, c] = TRIPLETS[Math.floor(rnd() * TRIPLETS.length)];
        return {
          q: `Un triangle ${a}, ${b}, ${c} est :`,
          options: ['Rectangle', 'Isocèle', 'Équilatéral', 'Quelconque'],
          correct: 0,
          hint: `${a}² + ${b}² = ${a*a+b*b} = ${c}² → rectangle.`,
        };
      }},
      { key:'pyt-4', q:'Si AB² + AC² ≠ BC² et BC est le plus grand côté, alors le triangle ABC est :',
        options:['Rectangle en A','Non rectangle','Rectangle en B','Isocèle'], correct:1,
        hint:'Contraposée de Pythagore : si l\'égalité n\'est pas vérifiée, le triangle n\'est pas rectangle.' },
      { key:'pyt-5', gen: (rnd) => {
        const TRIPLETS = [[3,4,5],[5,12,13],[8,15,17],[7,24,25],[9,12,15],[6,8,10],[10,24,26],[12,16,20],[15,20,25],[20,21,29],[9,40,41]];
        const [a, b, c] = TRIPLETS[Math.floor(rnd() * TRIPLETS.length)];
        return {
          q: `Un triangle a pour côtés ${a}, ${b} et ${c}. Est-il rectangle ?`,
          options: ['Oui', 'Non', 'Isocèle seulement', 'On ne sait pas'],
          correct: 0,
          hint: `${a}² + ${b}² = ${a*a+b*b} = ${c}². Triplet pythagoricien.`,
        };
      }},
      { key:'pyt-6', gen: (rnd) => {
        const TRIPLETS = [[3,4,5],[5,12,13],[6,8,10],[8,15,17],[9,12,15],[7,24,25],[10,24,26],[12,16,20],[15,20,25],[20,21,29]];
        const [a, b, c] = TRIPLETS[Math.floor(rnd() * TRIPLETS.length)];
        const w1 = a + b;
        const w2 = c - 1;
        const w3 = c + 2;
        const used = new Set([c, w1, w2, w3]);
        let w3f = w3;
        while (used.has(w3f)) w3f++;
        return {
          q: `Triangle rectangle en C avec AC = ${a} et BC = ${b}. Combien mesure AB ?`,
          options: [`${c} cm`, `${w1} cm`, `${w2} cm`, `${w3f} cm`],
          correct: 0,
          hint: `AB² = ${a}² + ${b}² = ${a*a+b*b} → AB = ${c} cm.`,
        };
      }},
      { key:'pyt-7', gen: (rnd) => {
        // Faux triplet — triangle non-rectangle
        const falseTriangles = [[3,5,6],[4,6,8],[5,7,9],[3,6,8],[2,4,5],[4,5,7],[3,7,9],[5,9,11],[6,7,10],[4,8,10],[2,5,6]];
        const [a, b, c] = falseTriangles[Math.floor(rnd() * falseTriangles.length)];
        return {
          q: `Un triangle a pour côtés ${a}, ${b} et ${c}. Est-il rectangle ?`,
          options: [`Oui, car ${a}² + ${b}² = ${c}²`, `Non, car ${a*a} + ${b*b} ≠ ${c*c}`, `Oui, c'est un triplet`, 'On ne peut pas savoir'],
          correct: 1,
          hint: `${a}² + ${b}² = ${a*a+b*b} ≠ ${c*c} = ${c}² → pas rectangle.`,
        };
      }},
      { key:'pyt-8', gen: (rnd) => {
        const TRIPLETS = [[6,8,10],[9,12,15],[10,24,26],[8,15,17],[5,12,13]];
        const [a, b, c] = TRIPLETS[Math.floor(rnd() * TRIPLETS.length)];
        const known = rnd() < 0.5 ? a : b;
        const missing = known === a ? b : a;
        return {
          q: `Dans un triangle rectangle, l'hypoténuse mesure ${c} cm et un côté ${known} cm. L'autre côté mesure :`,
          options: [`${missing} cm`, `${c - known} cm`, `√${c*c+known*known} cm`, `${missing + 3} cm`],
          correct: 0,
          hint: `c² = ${c*c} − ${known*known} = ${missing*missing} → c = ${missing} cm.`,
        };
      }},
    ],

    thales: [
      { key:'tha-1', gen: (rnd) => {
        const AM = 2 + Math.floor(rnd() * 4);
        const factor = 2 + Math.floor(rnd() * 4);
        const AB = AM * factor;
        const AN = 1 + Math.floor(rnd() * 5);
        const AC = AN * factor;
        const used = new Set([AC]);
        let w1 = AN + AM;
        while (used.has(w1)) w1 = w1 + 1;
        used.add(w1);
        let w2 = AN * AM;
        while (used.has(w2)) w2 = w2 + AM;
        used.add(w2);
        let w3 = AC + 2;
        while (used.has(w3)) w3++;
        return {
          q: <>Dans la configuration de Thalès, si <M>(MN) // (BC)</M> avec AM = {AM}, AB = {AB} et AN = {AN}, alors AC vaut :</>,
          options: [String(AC), String(w1), String(w2), String(w3)],
          correct: 0,
          hint: `AM/AB = AN/AC → ${AM}/${AB} = ${AN}/AC → AC = ${AN}×${factor} = ${AC}.`,
        };
      }},
      { key:'tha-2', q:'La RÉCIPROQUE du théorème de Thalès permet :',
        options:['De calculer des longueurs','De démontrer que deux droites sont parallèles','De calculer un angle','D\'affirmer qu\'un triangle est rectangle'], correct:1,
        hint:'Si les rapports sont égaux ET les points alignés dans le même ordre → parallèles.' },
      { key:'tha-3', gen: (rnd) => {
        // Réciproque de Thalès avec valeurs numériques concrètes
        const factors = [2, 3, 4, 5, 6, 7, 8];
        const factor = factors[Math.floor(rnd() * factors.length)];
        const AM = 1 + Math.floor(rnd() * 5);
        const AN = 1 + Math.floor(rnd() * 5);
        const AB = AM * factor;
        const AC = AN * factor;
        // La réciproque : AM/AB = AN/AC = 1/factor → (MN) // (BC)
        const pos = Math.floor(rnd() * 4);
        const opts = ['(MN) // (BC) par réciproque de Thalès', 'MN = BC', '(MN) ⊥ (BC)', 'Le triangle est isocèle'];
        // Shuffle correct answer to position pos
        const correct = opts[0];
        const wrongs = opts.slice(1);
        const finalOpts: string[] = [];
        let wi = 0;
        for (let i = 0; i < 4; i++) {
          if (i === pos) finalOpts.push(correct);
          else finalOpts.push(wrongs[wi++]);
        }
        return {
          q: <>Dans ABC, AM = {AM}, AB = {AB}, AN = {AN}, AC = {AC}. Comme AM/AB = AN/AC et points alignés dans le même ordre, alors :</>,
          options: finalOpts,
          correct: pos,
          hint: `AM/AB = ${AM}/${AB} = AN/AC = ${AN}/${AC} = 1/${factor} → réciproque de Thalès → (MN) // (BC).`,
        };
      }},
      { key:'tha-4', gen: (rnd) => {
        // Check if parallel or not (réciproque)
        const AM = 2 + Math.floor(rnd() * 4);
        const MB = 2 + Math.floor(rnd() * 5);
        const AB = AM + MB;
        const AN = 1 + Math.floor(rnd() * 4);
        const NC = AN + 1 + Math.floor(rnd() * 5);
        const AC = AN + NC;
        // Parallel iff AM/AB = AN/AC
        const isParallel = AM * AC === AN * AB;
        const answer = isParallel ? 'Oui' : `Non (${AM}/${AB} ≠ ${AN}/${AC})`;
        const wrong = isParallel ? `Non (${AM}/${AB} ≠ ${AN}/${AC})` : 'Oui';
        return {
          q: <>Dans une configuration de Thalès, AM = {AM}, AN = {AN}, MB = {MB}, NC = {NC}, les droites (MN) et (BC) sont-elles parallèles ?</>,
          options: [answer, wrong, 'On ne peut pas savoir', 'Seulement si A est au milieu'],
          correct: 0,
          hint: `AM/AB = ${AM}/${AB}${isParallel ? ` = AN/AC = ${AN}/${AC} → parallèles` : ` ≠ AN/AC = ${AN}/${AC} → pas parallèles`}.`,
        };
      }},
      { key:'tha-5', gen: (rnd) => {
        const AM = 2 + Math.floor(rnd() * 4);
        const factor = 2 + Math.floor(rnd() * 4);
        const AB = AM * factor;
        const MN = 1 + Math.floor(rnd() * 4);
        const BC = MN * factor;
        const used = new Set([BC]);
        let w1 = MN + factor;
        while (used.has(w1) || w1 === BC) w1++;
        used.add(w1);
        let w2 = BC + 1;
        while (used.has(w2)) w2++;
        used.add(w2);
        let w3 = BC - 1;
        while (used.has(w3) || w3 <= 0) w3 = w3 > 1 ? w3 - 1 : BC + 3;
        if (used.has(w3)) w3 = BC + 4;
        return {
          q: <>Dans une config Thalès, <M>(MN) // (BC)</M>, AM = {AM}, AB = {AB}, MN = {MN}. BC vaut :</>,
          options: [String(BC), String(w1), String(w2), String(w3)],
          correct: 0,
          hint: `AM/AB = MN/BC → ${AM}/${AB} = ${MN}/BC → BC = ${MN} × ${factor} = ${BC}.`,
        };
      }},
      { key:'tha-6', gen: (rnd) => {
        const AM = 2 + Math.floor(rnd() * 5);
        const factor = 2 + Math.floor(rnd() * 4);
        const AB = AM * factor;
        const AN = 1 + Math.floor(rnd() * 5);
        const AC = AN * factor;
        const used = new Set([AC]);
        let w1 = AN + factor;
        while (used.has(w1)) w1++;
        used.add(w1);
        let w2 = AC + 2;
        while (used.has(w2)) w2++;
        used.add(w2);
        let w3 = AC - 2;
        while (used.has(w3) || w3 <= 0) w3 = w3 > 1 ? w3 - 1 : AC + 3;
        if (used.has(w3)) w3 = AC + 5;
        return {
          q: <>Dans la configuration de Thalès, AM = {AM}, AB = {AB}, AN = {AN}. AC vaut :</>,
          options: [String(AC), String(w1), String(w2), String(w3)],
          correct: 0,
          hint: `AM/AB = AN/AC → ${AM}/${AB} = ${AN}/AC → AC = ${AN}×${factor} = ${AC}.`,
        };
      }},
      { key:'tha-7', q:'Thalès direct donne les égalités AM/AB = AN/AC. Cela signifie que :',
        options:['MN est perpendiculaire à BC','(MN) est parallèle à (BC)','MN = BC','Le triangle est isocèle'], correct:1,
        hint:'Dans la configuration de Thalès, si (MN) // (BC) les rapports sont égaux.' },
      { key:'tha-8', gen: (rnd) => {
        const AM = 2 + Math.floor(rnd() * 5);
        const MB = 2 + Math.floor(rnd() * 6);
        const AB = AM + MB;
        const MN = 1 + Math.floor(rnd() * 4);
        // AM/AB = MN/BC → BC = MN * AB / AM
        const BC_raw = MN * AB / AM;
        if (!Number.isInteger(BC_raw)) {
          return {
            q: <>Dans une configuration de Thalès, AM = 4, MB = 6, MN = 3. BC vaut :</>,
            options:['7,5','2','4,5','12'], correct:0,
            hint:'AM/AB = MN/BC → 4/10 = 3/BC → BC = 7,5.',
          };
        }
        const BC = BC_raw;
        const used = new Set([BC]);
        let w1 = MN + AM;
        while (used.has(w1)) w1++;
        used.add(w1);
        let w2 = BC + 1;
        while (used.has(w2)) w2++;
        used.add(w2);
        let w3 = BC - 1;
        while (used.has(w3) || w3 <= 0) w3 = w3 > 1 ? w3 - 1 : BC + 3;
        if (used.has(w3)) w3 = BC + 4;
        return {
          q: <>Dans une configuration de Thalès, AM = {AM}, MB = {MB}, MN = {MN}. BC vaut :</>,
          options: [String(BC), String(w1), String(w2), String(w3)],
          correct: 0,
          hint: `AM/AB = MN/BC → ${AM}/${AB} = ${MN}/BC → BC = ${MN}×${AB}/${AM} = ${BC}.`,
        };
      }},
    ],

    trigo: [
      { key:'tri-1', q:'Dans un triangle rectangle, le sinus d\'un angle aigu est :',
        options:[<F n="opposé" d="hypoténuse"/>, <F n="adjacent" d="hypoténuse"/>, <F n="opposé" d="adjacent"/>, <F n="adjacent" d="opposé"/>], correct:0,
        hint:'SOH CAH TOA : Sin = Opposé/Hyp.' },
      { key:'tri-2', q:'Le tangent d\'un angle aigu dans un triangle rectangle est :',
        options:[<F n="opposé" d="hypoténuse"/>, <F n="opposé" d="adjacent"/>, <F n="adjacent" d="opposé"/>, <F n="hypoténuse" d="adjacent"/>], correct:1,
        hint:'TOA : Tan = Opposé / Adjacent.' },
      { key:'tri-3', gen: (rnd) => {
        // tan(B) = opp/adj = AC/AB, triplets 3-4-5, 5-12-13 etc.
        const TRIPLETS = [[3,4,5],[5,12,13],[8,15,17],[6,8,10],[7,24,25],[9,12,15],[9,40,41],[20,21,29],[10,24,26],[12,16,20],[15,20,25],[11,60,61]];
        const [adj, opp, hyp] = TRIPLETS[Math.floor(rnd() * TRIPLETS.length)];
        function gcd(a: number, b: number): number { return b === 0 ? a : gcd(b, a % b); }
        const g1 = gcd(opp, adj);
        const tanStr = g1 > 1 ? `${opp/g1}/${adj/g1}` : `${opp}/${adj}`;
        const g2 = gcd(opp, hyp);
        const sinStr = g2 > 1 ? `${opp/g2}/${hyp/g2}` : `${opp}/${hyp}`;
        const g3 = gcd(adj, hyp);
        const cosStr = g3 > 1 ? `${adj/g3}/${hyp/g3}` : `${adj}/${hyp}`;
        const invStr = `${adj}/${opp}`;
        // Utilise des chaînes au lieu de <F> (compatible avec le sérialiseur de test)
        return {
          q: <>Dans un triangle ABC rectangle en A avec AB = {adj} et AC = {opp}, tan(B) vaut :</>,
          options: [tanStr, sinStr, cosStr, invStr],
          correct: 0,
          hint: `tan(B) = opposé/adjacent = AC/AB = ${opp}/${adj}${g1 > 1 ? ` = ${tanStr}` : ''}.`,
        };
      }},
      { key:'tri-4', gen: (rnd) => {
        // Valeurs exactes sin/cos/tan pour 30°/45°/60°
        const configs = [
          { fn:'sin', val:'0,5',    angle: 30, wrong:[45, 60, 90] },
          { fn:'sin', val:'√2/2',   angle: 45, wrong:[30, 60, 90] },
          { fn:'sin', val:'√3/2',   angle: 60, wrong:[30, 45, 90] },
          { fn:'cos', val:'√3/2',   angle: 30, wrong:[45, 60, 90] },
          { fn:'cos', val:'√2/2',   angle: 45, wrong:[30, 60, 90] },
          { fn:'cos', val:'0,5',    angle: 60, wrong:[30, 45, 90] },
          { fn:'tan', val:'√3/3',   angle: 30, wrong:[45, 60, 90] },
          { fn:'tan', val:'1',      angle: 45, wrong:[30, 60, 90] },
          { fn:'tan', val:'√3',     angle: 60, wrong:[30, 45, 90] },
        ];
        const c = configs[Math.floor(rnd() * configs.length)];
        const pos = Math.floor(rnd() * 4);
        const wrong = [...c.wrong];
        // Shuffle wrong answers into 3 remaining positions
        const opts: string[] = [];
        let wi = 0;
        for (let i = 0; i < 4; i++) {
          if (i === pos) opts.push(`${c.angle}°`);
          else opts.push(`${wrong[wi++]}°`);
        }
        return {
          q: <>Si {c.fn}(α) = {c.val} dans un triangle rectangle, α =</>,
          options: opts,
          correct: pos,
          hint: `${c.fn}(${c.angle}°) = ${c.val}.`,
        };
      }},
      { key:'tri-5', gen: (rnd) => {
        // opp = hyp × sin(angle)
        const configs = [
          [10, 30, 0.5, 5], [20, 30, 0.5, 10], [8, 30, 0.5, 4],
          [10, 60, 0.866, 8.66], [12, 60, 0.866, 10.39],
          [16, 30, 0.5, 8], [6, 30, 0.5, 3], [14, 30, 0.5, 7],
          [4, 60, 0.866, 3.46], [6, 60, 0.866, 5.2],
          [18, 30, 0.5, 9], [22, 30, 0.5, 11],
        ];
        const [hyp, angle, sinVal, opp] = configs[Math.floor(rnd() * configs.length)];
        const fr = (v: number | string) => String(v).replace('.', ',');
        const oppStr = fr(opp);
        const oppNum = Number(opp);
        const used = new Set([oppStr, String(hyp)]);
        let w2 = hyp - oppNum;
        let w2Str = fr(Math.round(w2 * 100) / 100);
        while (used.has(w2Str)) { w2 += 1; w2Str = fr(Math.round(w2 * 100) / 100); }
        used.add(w2Str);
        let w3 = Math.round((oppNum + 1) * 100) / 100;
        let w3Str = fr(w3);
        while (used.has(w3Str)) { w3 += 1; w3Str = fr(Math.round(w3 * 100) / 100); }
        return {
          q: <>Dans un triangle rectangle, hypoténuse = {hyp} cm et angle = {angle}° (sin {angle}° = {fr(sinVal)}). Le côté opposé à {angle}° mesure :</>,
          options: [`${oppStr} cm`, `${hyp} cm`, `${w2Str} cm`, `${w3Str} cm`],
          correct: 0,
          hint: `opposé = hyp × sin(${angle}°) = ${hyp} × ${fr(sinVal)} = ${oppStr} cm.`,
        };
      }},
      { key:'tri-6', gen: (rnd) => {
        // adj = hyp × cos(angle)
        const configs = [
          [10, 60, 0.5, 5], [20, 60, 0.5, 10], [8, 60, 0.5, 4],
          [10, 30, 0.866, 8.66], [12, 30, 0.866, 10.39],
          [16, 60, 0.5, 8], [6, 60, 0.5, 3], [14, 60, 0.5, 7],
          [4, 30, 0.866, 3.46], [6, 30, 0.866, 5.2],
          [18, 60, 0.5, 9], [22, 60, 0.5, 11],
        ];
        const [hyp, angle, cosVal, adj] = configs[Math.floor(rnd() * configs.length)];
        const fr = (v: number | string) => String(v).replace('.', ',');
        const adjStr = fr(adj);
        const adjNum = Number(adj);
        const used = new Set([adjStr, String(hyp)]);
        let w1 = hyp - adjNum;
        let w1Str = fr(Math.round(w1 * 100) / 100);
        while (used.has(w1Str)) { w1 += 1; w1Str = fr(Math.round(w1 * 100) / 100); }
        used.add(w1Str);
        let w3 = Math.round((adjNum + 1) * 100) / 100;
        let w3Str = fr(w3);
        while (used.has(w3Str)) { w3 += 1; w3Str = fr(Math.round(w3 * 100) / 100); }
        return {
          q: <>Dans un triangle rectangle (hyp={hyp} cm, angle={angle}°). Le côté adjacent à {angle}° mesure (cos {angle}° = {fr(cosVal)}) :</>,
          options: [`${adjStr} cm`, `${w1Str} cm`, `${hyp} cm`, `${w3Str} cm`],
          correct: 0,
          hint: `adjacent = hyp × cos(${angle}°) = ${hyp} × ${fr(cosVal)} = ${adjStr} cm.`,
        };
      }},
      { key:'tri-7', gen: (rnd) => {
        // tan(α) = opp/adj avec triplet
        const TRIPLETS = [[3,4,5],[5,12,13],[8,15,17],[6,8,10],[7,24,25],[9,12,15],[9,40,41],[20,21,29],[10,24,26],[12,16,20],[15,20,25],[11,60,61]];
        const [adj, opp, hyp] = TRIPLETS[Math.floor(rnd() * TRIPLETS.length)];
        function gcd(a: number, b: number): number { return b === 0 ? a : gcd(b, a % b); }
        const g = gcd(opp, adj);
        const tanStr = g > 1 ? `${opp/g}/${adj/g}` : `${opp}/${adj}`;
        const cosStr = `${adj}/${hyp}`;
        const sinStr = `${opp}/${hyp}`;
        const invStr = `${adj}/${opp}`;
        // Utilise des chaînes au lieu de <F> (compatible avec le sérialiseur de test)
        return {
          q: `Dans un triangle rectangle avec côté opposé = ${opp} cm et adjacent = ${adj} cm, tan(α) vaut :`,
          options: [cosStr, tanStr, sinStr, invStr],
          correct: 1,
          hint: `tan(α) = opposé / adjacent = ${opp}/${adj}${g > 1 ? ` = ${tanStr}` : ''}.`,
        };
      }},
      { key:'tri-8', gen: (rnd) => {
        // cos(45°) ≈ 0,707, adj = hyp × cos(45°)
        const hyps = [4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26];
        const hyp = hyps[Math.floor(rnd() * hyps.length)];
        const adj = Math.round(hyp * 0.707 * 100) / 100;
        const w1 = Math.round(hyp / 2 * 100) / 100;
        const w2 = Math.round(hyp * 1.414 * 100) / 100;
        const w3 = adj + 1;
        return {
          q: `cos(45°) ≈ 0,707. Dans un triangle rectangle d'hypoténuse ${hyp} cm et un angle de 45°, le côté adjacent mesure environ :`,
          options: [`${adj} cm`, `${w1} cm`, `${w2} cm`, `${w3} cm`],
          correct: 0,
          hint: `adjacent = hyp × cos(45°) = ${hyp} × 0,707 ≈ ${adj} cm.`,
        };
      }},
    ],

    geomespace: [
      { key:'esp-1', q:'Le volume d\'une sphère de rayon r est :',
        options:[<>4πr<sup>2</sup></>, <><F n="4" d="3"/>πr<sup>3</sup></>, <>πr<sup>2</sup>h</>, <>2πr</>], correct:1,
        hint:'V_sphère = (4/3)πr³.' },
      { key:'esp-2', q:'Le volume d\'un cône de base B et hauteur h :',
        options:['B × h', 'B × h / 3', '2B × h', 'π × B'], correct:1,
        hint:'V_cône = (B × h) / 3 — comme la pyramide.' },
      { key:'esp-3', gen: (rnd) => {
        // Agrandissement : longueurs ×k, aires ×k², volumes ×k³
        // On varie k ET ce qui est demandé (volumes vs aires)
        const entries: Array<[number, string, number]> = [
          [2,'volumes',8],
          [3,'volumes',27],
          [4,'volumes',64],
          [5,'volumes',125],
          [6,'volumes',216],
          [7,'volumes',343],
          [2,'aires',4],
          [3,'aires',9],
          [4,'aires',16],
          [5,'aires',25],
          [6,'aires',36],
        ];
        const [k, asked, goodVal] = entries[Math.floor(rnd() * entries.length)];
        const k2 = k * k, k3 = k * k * k;
        // Position aléatoire de la bonne réponse parmi 4 options
        const pos = Math.floor(rnd() * 4);
        const goodStr = String(goodVal);
        const wrongA = String(k);
        const wrongB = asked === 'volumes' ? String(k2) : String(k3);
        const wrongC = `${k}/3`;
        const wrongs = [wrongA, wrongB, wrongC];
        const opts: string[] = [];
        let wi = 0;
        for (let i = 0; i < 4; i++) {
          if (i === pos) opts.push(goodStr);
          else opts.push(wrongs[wi++]);
        }
        return {
          q: <>Agrandissement d&apos;un solide au coefficient {k} : les {asked} sont multipliés par :</>,
          options: opts,
          correct: pos,
          hint: `Longueurs ×${k}, aires ×${k2}, volumes ×${k3}.`,
        };
      }},
      { key:'esp-4', q:'La section d\'un cube par un plan parallèle à une face est :',
        options:['Un triangle','Un rectangle','Un carré identique à la face','Un cercle'], correct:2,
        hint:'Parallèle à une face → carré de même taille.' },
      { key:'esp-5', gen: (rnd) => {
        const radii = [2, 3, 4, 5, 6];
        const r = radii[Math.floor(rnd() * radii.length)];
        const heights = [3, 5, 7, 8, 10, 12, 15];
        const h = heights[Math.floor(rnd() * heights.length)];
        const V = Math.round(3.14 * r * r * h);
        const used = new Set([V]);
        let w1 = Math.round(3.14 * r * h);  // manque un r
        while (used.has(w1)) w1 = w1 + r;
        used.add(w1);
        let w2 = Math.round(3.14 * r * r);  // manque h
        while (used.has(w2)) w2 = w2 + r;
        used.add(w2);
        let w3 = V * 2;
        while (used.has(w3)) w3++;
        return {
          q: <>Un cylindre a pour rayon {r} cm et hauteur {h} cm. Son volume vaut (π ≈ 3,14) :</>,
          options: [`~${w1} cm³`, `~${w2} cm³`, `~${V} cm³`, `~${w3} cm³`],
          correct: 2,
          hint: `V = π × r² × h = 3,14 × ${r*r} × ${h} = ${V} cm³.`,
        };
      }},
      { key:'esp-6', q:'La surface latérale d\'un cylindre de rayon r et hauteur h est :',
        options:['πr²','2πrh','πr²h','2πr²'], correct:1,
        hint:'Surface latérale = 2πr × h (le périmètre de la base × la hauteur).' },
      { key:'esp-7', gen: (rnd) => {
        const bases = [20, 24, 30, 36];
        const B = bases[Math.floor(rnd() * bases.length)];
        const heights = [3, 4, 5, 6];
        const h = heights[Math.floor(rnd() * heights.length)];
        const good = B * h / 3;
        const w1 = B * h;
        const w2 = B / h;
        const w3 = good + 5;
        const used = new Set([good, w1, w2, w3]);
        let w3f = w3;
        while (used.has(w3f)) w3f++;
        return {
          q: `Volume d'une pyramide de base ${B} cm² et hauteur ${h} cm :`,
          options: [`${good} cm³`, `${w1} cm³`, `${w2} cm³`, `${w3f} cm³`],
          correct: 0,
          hint: `V = (B × h)/3 = (${B} × ${h})/3 = ${good} cm³.`,
        };
      }},
      { key:'esp-8', q:'La section d\'un cylindre par un plan perpendiculaire à l\'axe est :',
        options:['Un rectangle','Un cercle','Une ellipse','Un triangle'], correct:1,
        hint:'Perpendiculaire à l\'axe = parallèle aux bases → section circulaire.' },
    ],

    stats: [
      { key:'sta-1', gen: (rnd) => {
        // Médiane d'une série de 7 valeurs croissantes
        const base = 2 + Math.floor(rnd() * 15);
        const vals = [base, base+1, base+2, base+3, base+5, base+7, base+9];
        const median = vals[3]; // 4ème valeur
        const mean = Math.round(vals.reduce((a, b) => a + b, 0) / 7);
        const w1 = median - 1;
        const w2 = median + 1;
        const used = new Set([median, mean, w1, w2]);
        let meanf = mean;
        while (used.has(meanf) || meanf === median) meanf++;
        return {
          q: `La médiane de : ${vals.join(', ')} est :`,
          options: [String(w1), String(median), String(w2), String(meanf)],
          correct: 1,
          hint: `Série triée, médiane = valeur centrale = ${median} (4ᵉ sur 7).`,
        };
      }},
      { key:'sta-2', q:'L\'étendue d\'une série statistique est :',
        options:['La moyenne','Max − Min','La médiane','La variance'], correct:1,
        hint:'Étendue = différence entre la plus grande et la plus petite valeur.' },
      { key:'sta-3', q:'On lance deux dés et on fait la somme. La probabilité d\'obtenir 7 est :',
        options:[<F n="1" d="6"/>, <F n="1" d="36"/>, <F n="1" d="12"/>, <F n="5" d="36"/>], correct:0,
        hint:'6 issues favorables (1+6, 2+5, 3+4, 4+3, 5+2, 6+1) sur 36 total = 1/6.' },
      { key:'sta-4', q:'Le 1er quartile Q1 d\'une série statistique est :',
        options:['La moyenne','La valeur telle qu\'au moins 25% des données soient inférieures ou égales','La valeur la plus fréquente','Le maximum'], correct:1,
        hint:'Q1 = position 25% du classement.' },
      { key:'sta-5', q:'Dans un arbre de probabilités, pour trouver la probabilité d\'une branche complète, on :',
        options:['Additionne les probabilités','Multiplie les probabilités','Prend le max','Prend la moyenne'], correct:1,
        hint:'Probabilités du chemin = produit des probabilités sur les branches.' },
      { key:'sta-6', gen: (rnd) => {
        // Moyenne d'une série de 5 valeurs
        const mean = 5 + Math.floor(rnd() * 12);
        const vals: number[] = [];
        let sum = 0;
        for (let i = 0; i < 4; i++) {
          const v = mean - 3 + Math.floor(rnd() * 7);
          vals.push(v);
          sum += v;
        }
        const last = mean * 5 - sum;
        if (last < 1 || last > 20) {
          return {
            q: 'Moyenne de la série : 4 ; 6 ; 8 ; 10 ; 12 :',
            options: ['8','7','9','40'],
            correct: 0,
            hint: '(4+6+8+10+12)/5 = 40/5 = 8.',
          };
        }
        vals.push(last);
        const total = mean * 5;
        return {
          q: `Moyenne de la série : ${vals.join(' ; ')} :`,
          options: [String(mean), String(mean - 1), String(mean + 1), String(total)],
          correct: 0,
          hint: `(${vals.join('+')})/5 = ${total}/5 = ${mean}.`,
        };
      }},
      { key:'sta-7', q:'Dans une série statistique, l\'effectif est :', options:['La valeur la plus fréquente','Le nombre de fois où une valeur apparaît','La somme de toutes les valeurs','La moyenne'], correct:1, hint:'Effectif = nombre d\'individus ayant une certaine valeur. Fréquence = effectif / effectif total.' },
      { key:'sta-8', q:'La médiane d\'une série triée de 10 valeurs est :', options:['La 5ᵉ valeur','La moyenne des 5ᵉ et 6ᵉ valeurs','La 6ᵉ valeur','La dernière valeur'], correct:1, hint:'Pour n pair, la médiane est la moyenne des deux valeurs centrales (n/2 et n/2+1).' },
      { key:'sta-9', gen: (rnd) => {
        // Probabilité conditionnelle simple : arbre à deux branches
        const p1 = 2 + Math.floor(rnd() * 4); // 2..5
        const tot = 8 + Math.floor(rnd() * 5); // 8..12
        const p2 = tot - p1;
        function gcd(a: number, b: number): number { return b === 0 ? a : gcd(b, a % b); }
        const g = gcd(p1, tot);
        const fn = p1 / g, fd = tot / g;
        const goodStr = `${fn}/${fd}`;
        const used = new Set([goodStr]);
        const cands = [`${p1}/${p2}`, `${p2}/${tot}`, `${fn+1}/${fd}`, `${fn}/${fd+1}`];
        const opts = [goodStr];
        for (const c of cands) { if (!used.has(c)) { used.add(c); opts.push(c); if (opts.length === 4) break; } }
        let ex = fn + 2;
        while (opts.length < 4) { const s = `${ex}/${fd}`; if (!used.has(s)) { opts.push(s); used.add(s); } ex++; }
        return {
          q: `Une urne contient ${p1} boules rouges et ${p2} boules bleues. Probabilité de tirer une rouge :`,
          options: opts,
          correct: 0,
          hint: `${p1} rouges sur ${tot} → ${goodStr}${g > 1 ? ' (simplifié)' : ''}.`,
        };
      }},
      { key:'sta-10', gen: (rnd) => {
        // Quartile Q1 sur série de 8 valeurs triées
        const base = 2 + Math.floor(rnd() * 10);
        const vals = [base, base+1, base+2, base+3, base+4, base+6, base+8, base+10];
        // Q1 = médiane des 4 premières = moy(vals[1], vals[2])
        const q1 = (vals[1] + vals[2]) / 2;
        const med = (vals[3] + vals[4]) / 2;
        const q3 = (vals[5] + vals[6]) / 2;
        const used = new Set([q1, med, q3]);
        let w4 = vals[0]; while (used.has(w4)) w4--;
        return {
          q: `Série triée : ${vals.join(', ')}. Le 1ᵉʳ quartile Q1 est :`,
          options: [String(q1), String(med), String(q3), String(vals[0])],
          correct: 0,
          hint: `Q1 = médiane des 4 premières valeurs (${vals[0]}, ${vals[1]}, ${vals[2]}, ${vals[3]}) = (${vals[1]}+${vals[2]})/2 = ${q1}.`,
        };
      }},
      { key:'sta-11', gen: (rnd) => {
        // Arbre de probabilités : P(A∩B) = P(A)×P(B|A) — valeurs simples
        const numA = 1 + Math.floor(rnd() * 3);  // 1..3
        const denA = numA + 2 + Math.floor(rnd() * 2); // numA+2..numA+3
        const numB = 1 + Math.floor(rnd() * 3);
        const denB = numB + 1 + Math.floor(rnd() * 2);
        const numGood = numA * numB;
        const denGood = denA * denB;
        function gcd(a: number, b: number): number { return b === 0 ? a : gcd(b, a % b); }
        const g = gcd(numGood, denGood);
        const fn = numGood / g, fd = denGood / g;
        const goodStr = `${fn}/${fd}`;
        const used = new Set([goodStr]);
        const pick = (candidates: string[], fallback: (i: number) => string) => {
          for (const c of candidates) if (!used.has(c)) { used.add(c); return c; }
          let i = 1; while (true) { const c = fallback(i++); if (!used.has(c)) { used.add(c); return c; } }
        };
        const w1 = pick([`${numA}/${denA}`, `${numB}/${denB}`], i => `${fn+i}/${fd}`);
        const w2 = pick([`${numA + numB}/${denA + denB}`, `${numA}/${denB}`], i => `${fn}/${fd+i}`);
        const w3 = pick([`${fn+1}/${fd}`, `${fn}/${fd+1}`, `${fn+2}/${fd}`], i => `${fn+i+2}/${fd}`);
        return {
          q: `Dans un arbre, P(A) = ${numA}/${denA} et P(B|A) = ${numB}/${denB}. P(A et B) =`,
          options: [goodStr, w1, w2, w3],
          correct: 0,
          hint: `P(A∩B) = P(A) × P(B|A) = ${numA}/${denA} × ${numB}/${denB} = ${numGood}/${denGood}${g>1 ? ` = ${goodStr}` : ''}.`,
        };
      }},
      { key:'sta-12', gen: (rnd) => {
        // Fréquence relative d'une valeur
        const effectif = 3 + Math.floor(rnd() * 7); // 3..9
        const total = effectif + 5 + Math.floor(rnd() * 10); // effectif+5..effectif+14
        const pct = Math.round(effectif / total * 100);
        const used = new Set([pct]);
        let w1 = effectif;                 // donne effectif brut
        while (used.has(w1)) w1++; used.add(w1);
        let w2 = total - effectif;         // donne complément
        while (used.has(w2)) w2++; used.add(w2);
        let w3 = pct + 10;
        while (used.has(w3)) w3 += 5;
        return {
          q: `Dans un groupe de ${total} élèves, ${effectif} ont eu 20/20. Fréquence (%) :`,
          options: [`${pct} %`, `${w1} %`, `${w2} %`, `${w3} %`],
          correct: 0,
          hint: `${effectif} ÷ ${total} × 100 ≈ ${pct} %.`,
        };
      }},
      { key:'sta-13', gen: (rnd) => {
        // Médiane d'une série de 6 valeurs : moy des 3e et 4e
        const base = 3 + Math.floor(rnd() * 12);
        const vals = [base, base+1, base+2, base+4, base+6, base+9];
        const median = (vals[2] + vals[3]) / 2;
        const mean = Math.round(vals.reduce((a,b) => a+b, 0) / 6 * 10) / 10;
        const used = new Set([median, mean]);
        let w3 = vals[2]; while (used.has(w3)) w3++;
        used.add(w3);
        let w4 = vals[3]; while (used.has(w4)) w4++;
        return {
          q: `Médiane de la série triée : ${vals.join(', ')} :`,
          options: [String(median), String(mean), String(w3), String(w4)],
          correct: 0,
          hint: `6 valeurs : médiane = moyenne des 3ᵉ et 4ᵉ = (${vals[2]}+${vals[3]})/2 = ${median}.`,
        };
      }},
    ],
  },
  PICK: {
    arithmetique: 2, puissances: 3, remarquables: 3, equations: 4, fonctions: 4,
    pythagore: 3, thales: 3, trigo: 3, geomespace: 3, stats: 2,
  },
  PLANS: {
    arithmetique: {
      'non-acquis': ['Mémoriser l\'algorithme d\'Euclide pour le PGCD', 'Savoir simplifier une fraction en utilisant le PGCD', 'Reconnaître des nombres premiers entre eux (PGCD = 1)'],
      'fragile':    ['Utiliser le PGCD dans des problèmes concrets (partage, regroupement)']
    },
    puissances: {
      'non-acquis': ['Règles : aⁿ × aᵐ = aⁿ⁺ᵐ, (aⁿ)ᵐ = aⁿᵐ', 'Écriture scientifique : un seul chiffre non nul avant la virgule', 'S\'entraîner sur puissances négatives'],
      'fragile':    ['Opérations avec notation scientifique']
    },
    remarquables: {
      'non-acquis': ['PRIORITÉ BREVET : mémoriser les 3 identités (a+b)², (a−b)², (a+b)(a−b)', 'Développer : 20 exercices', 'Factoriser : reconnaître la forme'],
      'fragile':    ['Applications aux équations (factoriser pour résoudre)']
    },
    equations: {
      'non-acquis': ['Méthode d\'isolation de x étape par étape', 'Équation produit nul : (A)(B) = 0 ⇔ A=0 ou B=0', 'Inéquations : attention au signe quand on multiplie par négatif'],
      'fragile':    ['Systèmes de 2 équations (substitution ou combinaison)', 'Mise en équation de problèmes concrets']
    },
    fonctions: {
      'non-acquis': ['PRIORITÉ BREVET : différencier linéaire (f(x)=ax) et affine (f(x)=ax+b)', 'Image, antécédent : savoir les calculer', 'Représentation graphique : droite passant par (0, b)'],
      'fragile':    ['Déterminer une fonction à partir de 2 points', 'Lire des informations sur un graphique']
    },
    pythagore: {
      'non-acquis': ['Théorème direct : calculer une longueur', 'Réciproque : démontrer qu\'un triangle est rectangle', 'Triplets à connaître : 3-4-5, 5-12-13, 6-8-10, 8-15-17'],
      'fragile':    ['Contraposée : démontrer qu\'un triangle n\'est PAS rectangle']
    },
    thales: {
      'non-acquis': ['Direct : 3 rapports égaux AM/AB = AN/AC = MN/BC', 'Réciproque : si rapports égaux ET alignement même ordre → parallèles', 'Attention à l\'ordre des points'],
      'fragile':    ['Configuration "papillon" (points de part et d\'autre)']
    },
    trigo: {
      'non-acquis': ['SOHCAHTOA : Sin=O/H, Cos=A/H, Tan=O/A', 'Savoir CHOISIR la bonne formule selon ce qu\'on cherche', 'Calculatrice : cos, sin, tan et leurs inverses (cos⁻¹…)'],
      'fragile':    ['Calculer un angle à partir d\'un rapport', 'Distinguer les 3 formules sur un même schéma']
    },
    geomespace: {
      'non-acquis': ['V pyramide = V cône = (B × h) / 3', 'V sphère = (4/3)πr³, V cylindre = πr²h', 'Agrandissement : k (longueurs), k² (aires), k³ (volumes)'],
      'fragile':    ['Sections de solides par un plan (cube, cylindre, cône)']
    },
    stats: {
      'non-acquis': ['Moyenne, médiane, étendue : savoir les calculer', 'Probabilité = cas favorables / cas possibles', 'Arbre de probabilités : on MULTIPLIE le long d\'une branche'],
      'fragile':    ['Quartiles Q1 et Q3, diagrammes en boîte']
    },
  },
};
