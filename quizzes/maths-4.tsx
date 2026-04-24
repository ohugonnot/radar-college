// Source éditable — quiz maths-4. Régénéré automatiquement dans index.html via build.sh.
window.ALL_QUIZZES['maths-4'] = {
  SEARCH_SITES: 'site:maths-et-tiques.fr OR site:fr.khanacademy.org OR site:lumni.fr',
  YT_SUFFIX: 'Yvan Monka',
  SUMMER_TOPIC: 'maths',
  SUBJECT: {
    id: 'maths-4',
    name: 'Mathématiques',
    short: 'Maths',
    level: 'Fin de 4ème',
    mark: '∑',
    tagline: 'Évaluation diagnostique',
  },
  DOMAINS: {
  relatifs:   { id:'relatifs',   name:'Nombres relatifs',                  short:'Relatifs',    coef:2, color:'#0f5e6b', icon:'±',   search:'nombres relatifs 4eme' },
  fractions:  { id:'fractions',  name:'Fractions',                         short:'Fractions',   coef:3, color:'#0d7a6f', icon:'⅔',   search:'fractions 4eme' },
  puissances: { id:'puissances', name:'Puissances & écriture scientifique',short:'Puissances',  coef:2, color:'#6d28d9', icon:'xⁿ',  search:'puissances ecriture scientifique 4eme' },
  litteral:   { id:'litteral',   name:'Calcul littéral & équations',       short:'Littéral',    coef:4, color:'#b8323d', icon:'2x',  search:'calcul litteral equations 4eme' },
  pythagore:  { id:'pythagore',  name:'Théorème de Pythagore',             short:'Pythagore',   coef:4, color:'#a01b34', icon:'△',   search:'theoreme de pythagore 4eme' },
  thales:     { id:'thales',     name:'Théorème de Thalès',                short:'Thalès',      coef:3, color:'#7a2ca8', icon:'//',  search:'theoreme de thales 4eme' },
  trigo:      { id:'trigo',      name:'Trigonométrie (cosinus)',           short:'Trigo',       coef:2, color:'#1d4ed8', icon:'cos', search:'trigonometrie cosinus 4eme' },
  transfo:    { id:'transfo',    name:'Transformations (symétries, translations)', short:'Transfo', coef:2, color:'#1e7a8a', icon:'↔', search:'symetrie translation 4eme' },
  grandeurs:  { id:'grandeurs',  name:'Grandeurs & volumes',               short:'Grandeurs',   coef:2, color:'#166a39', icon:'V',   search:'grandeurs volumes 4eme' },
  proportion: { id:'proportion', name:'Proportionnalité & %',              short:'Proportion',  coef:2, color:'#b97a0e', icon:'%',   search:'proportionnalite pourcentage 4eme' },
  probas:     { id:'probas',     name:'Statistiques & probabilités',       short:'Probas',      coef:2, color:'#c4307a', icon:'p',   search:'statistiques probabilites 4eme' },
  },
  RESOURCES: [
  { label:'Maths et Tiques',  author:'Yvan Monka (gratuit)',   url:'https://www.maths-et-tiques.fr/index.php/cours-en-ligne/cours-quatrieme' },
  { label:'Khan Academy',     author:'Cours + exos gratuits',  url:'https://fr.khanacademy.org/math/cycle-4-4eme-v2' },
  { label:'Lumni',            author:'France TV éducation',    url:'https://www.lumni.fr/college/quatrieme/mathematiques' },
  { label:'Sésamath',         author:'Manuel en ligne gratuit',url:'https://manuel.sesamath.net/' },
  ],
  POOL: {
  relatifs: [
    { key:'rel-1', gen: (rnd) => {
      const a = -(2 + Math.floor(rnd() * 12));
      const b = -(2 + Math.floor(rnd() * 12));
      const good = a + b;
      const d1 = -(Math.abs(a) + Math.abs(b)); // toujours négatif mais valeur absolue additionnée (si bonne réponse déjà couverte, différent)
      // distracteur signe inversé
      const d2 = Math.abs(good);
      // distracteur différence des abs
      const d3 = Math.abs(a) - Math.abs(b);
      const used = new Set([good]);
      const opts: number[] = [good];
      for (const d of [d1, d2, d3]) {
        let v = d;
        while (used.has(v)) v += (v >= 0 ? 1 : -1);
        used.add(v);
        opts.push(v);
      }
      return {
        q: <>Calcule : <M>({a}) + ({b}) =</M></>,
        options: opts.map(String),
        correct: 0,
        hint: `Deux négatifs : on additionne les valeurs et on garde le signe −. ${a} + ${b} = ${good}`,
      };
    }},
    { key:'rel-2', gen: (rnd) => {
      const signs: Array<[number, number, number]> = [[-1,-1,1],[-1,1,-1],[1,-1,-1],[-1,1,1]];
      const [sa, sb, _] = signs[Math.floor(rnd() * signs.length)];
      const a = sa * (2 + Math.floor(rnd() * 9));
      const b = sb * (2 + Math.floor(rnd() * 9));
      const good = a * b;
      const wrongSign = -good;
      const used = new Set([good, wrongSign]);
      let wrongAdd = a + b;
      while (used.has(wrongAdd)) wrongAdd += (wrongAdd >= 0 ? 1 : -1);
      used.add(wrongAdd);
      let d3 = Math.abs(a) * Math.abs(b) + 1;
      while (used.has(d3)) d3++;
      return {
        q: <>Calcule : <M>({a}) × ({b}) =</M></>,
        options: [String(good), String(wrongSign), String(wrongAdd), String(d3)],
        correct: 0,
        hint: `Règle des signes : ${a > 0 ? '+' : '−'} × ${b > 0 ? '+' : '−'} = ${good > 0 ? '+' : '−'}. ${Math.abs(a)} × ${Math.abs(b)} = ${Math.abs(good)}, donc ${good}.`,
      };
    }},
    { key:'rel-3', gen: (rnd) => {
      const a = 10 + Math.floor(rnd() * 20);
      const b = -(1 + Math.floor(rnd() * 8));
      const c = -(1 + Math.floor(rnd() * 8));
      const good = a - b + c; // a − (b) + c = a + |b| + c
      const used = new Set([good]);
      let wrong1 = a + b + c;
      while (used.has(wrong1)) wrong1 += (wrong1 >= 0 ? 1 : -1); used.add(wrong1);
      let wrong2 = a - b - c;
      while (used.has(wrong2)) wrong2 += (wrong2 >= 0 ? 1 : -1); used.add(wrong2);
      let wrong3 = a + b - c;
      while (used.has(wrong3)) wrong3 += (wrong3 >= 0 ? 1 : -1);
      return {
        q: <>Calcule : <M>{a} − ({b}) + ({c}) =</M></>,
        options: [String(good), String(wrong1), String(wrong2), String(wrong3)],
        correct: 0,
        hint: `${a} − (${b}) = ${a} + ${Math.abs(b)} = ${a + Math.abs(b)}, puis + (${c}) = ${good}.`,
      };
    }},
    { key:'rel-4', gen: (rnd) => {
      const divisors = [2,3,4,5,6,9];
      const d = divisors[Math.floor(rnd() * divisors.length)];
      const q2 = 2 + Math.floor(rnd() * 10);
      const num = -(d * q2);
      const good = num / d; // négatif
      const used = new Set([good]);
      let wrong1 = -good;
      while (used.has(wrong1)) wrong1++; used.add(wrong1);
      let wrong2 = num - d;
      while (used.has(wrong2)) wrong2--; used.add(wrong2);
      let wrong3 = num + d;
      while (used.has(wrong3)) wrong3--;
      return {
        q: <>Calcule : <M>({num}) ÷ (+{d}) =</M></>,
        options: [String(good), String(wrong1), String(wrong2), String(wrong3)],
        correct: 0,
        hint: `− ÷ + = −. ${Math.abs(num)} ÷ ${d} = ${Math.abs(good)}, donc ${good}.`,
      };
    }},
    { key:'rel-5', gen: (rnd) => {
      const v = 2 + Math.floor(rnd() * 15);
      const neg = -v;
      const wrong1 = neg;
      const wrong2 = 0;
      const wrong3 = Math.floor(100 / v) || 1;
      const used = new Set([v, neg, wrong2]);
      let w3 = wrong3;
      while (used.has(w3)) w3++;
      return {
        q: <>Quel est l'opposé du nombre <M>{neg}</M> ?</>,
        options: [String(neg), String(v), String(wrong2), String(w3)],
        correct: 1,
        hint: `L'opposé de ${neg} est +${v} (leur somme vaut 0).`,
      };
    }},
    { key:'rel-6', gen: (rnd) => {
      const k = -(2 + Math.floor(rnd() * 8));
      const a = 2 + Math.floor(rnd() * 8);
      const b = a + 1 + Math.floor(rnd() * 5);
      const inner = a - b; // négatif
      const good = k * inner;
      const used = new Set([good]);
      let wrong1 = -good;
      while (used.has(wrong1)) wrong1++; used.add(wrong1);
      let wrong2 = k * a - b;
      while (used.has(wrong2)) wrong2--; used.add(wrong2);
      let wrong3 = k + inner;
      while (used.has(wrong3)) wrong3 += (wrong3 <= 0 ? -1 : 1);
      return {
        q: <>Calcule : <M>{k} × ({a} − {b}) =</M></>,
        options: [String(good), String(wrong1), String(wrong2), String(wrong3)],
        correct: 0,
        hint: `${a} − ${b} = ${inner}, puis ${k} × (${inner}) = ${good}.`,
      };
    }},
    { key:'rel-7', gen: (rnd) => {
      const a = 2 + Math.floor(rnd() * 9);
      const b = 2 + Math.floor(rnd() * 9);
      const good = -(a * b);
      const used = new Set([good]);
      let wrong1 = a * b;
      while (used.has(wrong1)) wrong1++; used.add(wrong1);
      let wrong2 = a + b;
      while (used.has(wrong2)) wrong2++; used.add(wrong2);
      let wrong3 = -(a + b);
      while (used.has(wrong3)) wrong3--;
      return {
        q: <>Calcule : <M>(+{a}) × (−{b}) =</M></>,
        options: [String(good), String(wrong1), String(wrong2), String(wrong3)],
        correct: 0,
        hint: `+ × − = −. ${a} × ${b} = ${a*b} → résultat : ${good}.`,
      };
    }},
    { key:'rel-8', gen: (rnd) => {
      const divisors = [2,3,4,5,6];
      const d = divisors[Math.floor(rnd() * divisors.length)];
      const q2 = 2 + Math.floor(rnd() * 8);
      const num = d * q2;
      const good = q2;
      const used = new Set([good]);
      let wrong1 = -good;
      while (used.has(wrong1)) wrong1--; used.add(wrong1);
      let wrong2 = num - d;
      while (used.has(wrong2)) wrong2++; used.add(wrong2);
      let wrong3 = num + d;
      while (used.has(wrong3)) wrong3++;
      return {
        q: <>Calcule : <M>(−{num}) ÷ (−{d}) =</M></>,
        options: [String(wrong1), String(good), String(wrong2), String(wrong3)],
        correct: 1,
        hint: `− ÷ − = +. ${num} ÷ ${d} = ${good} → résultat : +${good}.`,
      };
    }},
  ],

  fractions: [
    { key:'fra-1', gen: (rnd) => {
      // Addition de fractions simples avec dénominateurs multiples
      const denPairs = [[3,4],[2,5],[3,5],[4,5],[2,7],[3,7],[2,9],[4,9]];
      const [d1, d2] = denPairs[Math.floor(rnd() * denPairs.length)];
      const lcd = d1 * d2; // dénominateurs premiers entre eux dans cette liste
      const n1 = 1 + Math.floor(rnd() * (d1 - 1));
      const n2 = 1 + Math.floor(rnd() * (d2 - 1));
      const gn = n1 * d2 + n2 * d1;
      // simplifie si possible
      function gcd(a: number, b: number): number { return b === 0 ? a : gcd(b, a % b); }
      const g = gcd(gn, lcd);
      const rn = gn / g, rd = lcd / g;
      const good = rd === 1 ? String(rn) : `${rn}/${rd}`;
      // distracteurs
      const w1 = `${n1 + n2}/${d1 + d2}`;
      const w2 = `${n1 * n2}/${lcd}`;
      const w3 = rd === 1 ? `${rn + 1}` : `${rn}/${rd + 1}`;
      const strings = [good, w1, w2, w3];
      const used = new Set(strings);
      // ensure uniqueness
      if (used.size !== 4) {
        // fallback static values unlikely to collide
        return {
          q: <>Calcule : <F n={String(n1)} d={String(d1)}/> + <F n={String(n2)} d={String(d2)}/> =</>,
          options: [good, `${n1+n2}/${d1+d2}`, `${n1*d2}/${lcd}`, `${n2*d1}/${lcd}`],
          correct: 0,
          hint: `Dénominateur commun ${lcd} : ${n1*d2}/${lcd} + ${n2*d1}/${lcd} = ${gn}/${lcd}${g > 1 ? ` = ${rn}/${rd}` : ''}.`,
        };
      }
      return {
        q: <>Calcule : <F n={String(n1)} d={String(d1)}/> + <F n={String(n2)} d={String(d2)}/> =</>,
        options: strings,
        correct: 0,
        hint: `Dénominateur commun ${lcd} : ${n1*d2}/${lcd} + ${n2*d1}/${lcd} = ${gn}/${lcd}${g > 1 ? ` = ${rn}/${rd}` : ''}.`,
      };
    }},
    { key:'fra-2', gen: (rnd) => {
      // Multiplication de fractions avec simplification : génération dynamique
      // n1/d1 × d1/n2 = n1/n2 (simplification garantie car d1 s'élimine)
      function gcd(a: number, b: number): number { return b === 0 ? a : gcd(b, a % b); }
      const d1 = 3 + Math.floor(rnd() * 8); // 3..10
      const n1 = 1 + Math.floor(rnd() * (d1 - 1)); // 1..d1-1
      const n2 = 2 + Math.floor(rnd() * 6); // 2..7
      const d2 = n2 * (2 + Math.floor(rnd() * 4)); // multiple de n2 → simplification garantie
      const rn = n1 * n2, rd = d1 * d2;
      const g = gcd(rn, rd);
      const fn = rn / g, fd = rd / g;
      const good = fd === 1 ? String(fn) : `${fn}/${fd}`;
      const used = new Set([good]);
      const w1 = `${n1 + n2}/${d1 + d2}`;
      const w2s = new Set([good, w1]);
      let w2 = `${rn}/${rd}`;
      if (w2s.has(w2)) w2 = `${fn+1}/${fd+1}`;
      const w3s = new Set([good, w1, w2]);
      let w3 = fd === 1 ? String(fn + 1) : `${fn + 1}/${fd}`;
      if (w3s.has(w3)) w3 = `${fn}/${fd+2}`;
      return {
        q: <>Calcule (en simplifiant) : <F n={String(n1)} d={String(d1)}/> × <F n={String(n2)} d={String(d2)}/> =</>,
        options: [good, w1, w2, w3],
        correct: 0,
        hint: `(${n1}×${n2})/(${d1}×${d2}) = ${rn}/${rd}${g > 1 ? ` = ${fn}/${fd}` : ''} après simplification par ${g}.`,
      };
    }},
    { key:'fra-3', gen: (rnd) => {
      // Division de fractions : génération dynamique
      function gcd(a: number, b: number): number { return b === 0 ? a : gcd(b, a % b); }
      const n1 = 1 + Math.floor(rnd() * 7); // 1..7
      const d1 = n1 + 1 + Math.floor(rnd() * 6); // > n1
      const n2 = 1 + Math.floor(rnd() * 5); // 1..5
      const d2 = n2 + 1 + Math.floor(rnd() * 5); // > n2
      const rn = n1 * d2, rd = d1 * n2;
      const g = gcd(rn, rd);
      const fn = rn / g, fd = rd / g;
      const good = fd === 1 ? String(fn) : `${fn}/${fd}`;
      const used = new Set([good]);
      let wrong_mul = `${n1*n2}/${d1*d2}`;
      if (used.has(wrong_mul)) wrong_mul = `${n1*n2+1}/${d1*d2}`;
      used.add(wrong_mul);
      let w2 = fd === 1 ? String(fn + 1) : `${fn}/${fd + 1}`;
      if (used.has(w2)) w2 = `${fn+2}/${fd}`;
      used.add(w2);
      let w3 = `${rn}/${rd}`;
      if (used.has(w3)) w3 = `${n1}/${n2}`;
      if (used.has(w3)) w3 = `${fn+1}/${fd+1}`;
      return {
        q: <>Calcule : <F n={String(n1)} d={String(d1)}/> ÷ <F n={String(n2)} d={String(d2)}/> =</>,
        options: [good, wrong_mul, w2, w3],
        correct: 0,
        hint: `Diviser = multiplier par l'inverse : ${n1}/${d1} × ${d2}/${n2} = ${rn}/${rd}${g > 1 ? ` = ${fn}/${fd}` : ''}.`,
      };
    }},
    { key:'fra-4', gen: (rnd) => {
      // Simplification de fraction : génération dynamique (k×fn / k×fd)
      function gcd(a: number, b: number): number { return b === 0 ? a : gcd(b, a % b); }
      // fd ∈ {2..7}, fn ∈ {1..fd-1} coprimes, k ∈ {2..5}
      const fds = [2,3,4,5,7];
      const fd = fds[Math.floor(rnd() * fds.length)];
      const fn = 1 + Math.floor(rnd() * (fd - 1));
      if (gcd(fn, fd) !== 1) {
        // fallback si pas coprimes
        return {
          q: <>Simplifie au maximum : <F n="18" d="24"/> =</>,
          options: ['3/4','4/6','6/8','3/8'],
          correct: 0,
          hint: 'PGCD(18,24) = 6 → 18/24 = 3/4.',
        };
      }
      const k = 2 + Math.floor(rnd() * 4); // 2..5
      const num = fn * k, den = fd * k;
      const good = `${fn}/${fd}`;
      const used = new Set([good]);
      let w1 = `${fn+1}/${fd}`;
      if (used.has(w1)) w1 = `${fn+2}/${fd}`; used.add(w1);
      let w2 = `${fn}/${fd+1}`;
      if (used.has(w2)) w2 = `${fn}/${fd+2}`; used.add(w2);
      let w3 = `${num/2 | 0}/${den/2 | 0}`;
      if (used.has(w3) || w3.includes('.')) w3 = `${fn*2}/${fd*2}`;
      return {
        q: <>Simplifie au maximum : <F n={String(num)} d={String(den)}/> =</>,
        options: [good, w1, w2, w3],
        correct: 0,
        hint: `PGCD(${num},${den}) = ${k} → ${num}/${den} = ${fn}/${fd} (irréductible).`,
      };
    }},
    { key:'fra-5', gen: (rnd) => {
      // Soustraction de fractions
      const denPairs = [[5,10],[4,8],[3,6],[7,14],[3,9],[4,12]];
      const [d1, d2] = denPairs[Math.floor(rnd() * denPairs.length)];
      const lcd = d2;
      const n2 = 1 + Math.floor(rnd() * (d1 - 1));
      const n1 = n2 + 1 + Math.floor(rnd() * (d1 - n2));
      function gcd(a: number, b: number): number { return b === 0 ? a : gcd(b, a % b); }
      const rn_raw = n1 * (d2 / d1) - n2;
      if (rn_raw <= 0) {
        return {
          q: <>Calcule : <F n="7" d="10"/> − <F n="1" d="2"/> =</>,
          options: ['1/5','2/5','3/10','6/8'],
          correct: 0,
          hint: '1/2 = 5/10, donc 7/10 − 5/10 = 2/10 = 1/5.',
        };
      }
      const g = gcd(rn_raw, lcd);
      const fn = rn_raw / g, fd = lcd / g;
      const good = fd === 1 ? String(fn) : `${fn}/${fd}`;
      const w1 = `${n1 - n2}/${d1 - d2 || d1}`;
      const w2 = fd === 1 ? String(fn + 1) : `${fn+1}/${fd}`;
      const w3 = `${rn_raw}/${lcd}`;
      const strings = [good, w1, w2, w3];
      const uniq = new Set(strings);
      const finalOpts = uniq.size === 4 ? strings : [good, `${fn}/${fd+1}`, `${fn+1}/${fd}`, `${rn_raw*2}/${lcd}`];
      return {
        q: <>Calcule : <F n={String(n1)} d={String(d1)}/> − <F n={String(n2)} d={String(d2 === lcd ? d1 * (d2/d1) : d2)}/> =</>,
        options: finalOpts,
        correct: 0,
        hint: `Dénominateur commun ${lcd} : ${n1*(d2/d1)}/${lcd} − ${n2}/${lcd} = ${rn_raw}/${lcd}${g > 1 ? ` = ${fn}/${fd}` : ''}.`,
      };
    }},
    { key:'fra-6', gen: (rnd) => {
      // Fraction d'un entier : n/d × total (total multiple de d)
      const ds = [2,3,4,5,8];
      const d = ds[Math.floor(rnd() * ds.length)];
      const n = 1 + Math.floor(rnd() * (d - 1)); // 1..d-1
      const mult = 3 + Math.floor(rnd() * 8); // 3..10
      const total = d * mult;
      const good = n * mult;
      const used = new Set([good]);
      let w1 = total / d;
      while (used.has(w1)) w1++; used.add(w1);
      let w2 = total - good;
      while (used.has(w2)) w2++; used.add(w2);
      let w3 = good + d;
      while (used.has(w3)) w3++;
      return {
        q: <>Que vaut <F n={String(n)} d={String(d)}/> de {total} ?</>,
        options: [String(good), String(w1), String(w2), String(w3)],
        correct: 0,
        hint: `${n}/${d} × ${total} = ${n*total}/${d} = ${good}.`,
      };
    }},
    { key:'fra-7', gen: (rnd) => {
      // Addition avec dénominateur commun : d2 divise d1
      function gcd(a: number, b: number): number { return b === 0 ? a : gcd(b, a % b); }
      const d2s = [2,3,4,5,6];
      const d2 = d2s[Math.floor(rnd() * d2s.length)];
      const factor = 2 + Math.floor(rnd() * 4); // 2..5
      const d1 = d2 * factor;
      const n1 = 1 + Math.floor(rnd() * (d1 - 1));
      const n2 = 1 + Math.floor(rnd() * (d2 - 1));
      const n2c = n2 * factor;
      const rn = n1 + n2c;
      const rd = d1;
      const g = gcd(rn, rd);
      const fn = rn / g, fd = rd / g;
      const good = fd === 1 ? String(fn) : `${fn}/${fd}`;
      const used = new Set([good]);
      let w1 = `${n1+n2}/${d1+d2}`;
      if (used.has(w1)) w1 = `${n1+n2+1}/${d1+d2}`; used.add(w1);
      let w2 = `${n1}/${d1}`;
      if (used.has(w2)) w2 = `${n1+1}/${d1}`; used.add(w2);
      let w3 = `${rn}/${rd}`;
      if (used.has(w3)) w3 = `${fn+1}/${fd}`;
      return {
        q: <>Calcule : <F n={String(n1)} d={String(d1)}/> + <F n={String(n2)} d={String(d2)}/> =</>,
        options: [good, w1, w2, w3],
        correct: 0,
        hint: `${n2}/${d2} = ${n2c}/${d1}. ${n1}/${d1} + ${n2c}/${d1} = ${rn}/${rd}${g > 1 ? ` = ${fn}/${fd}` : ''}.`,
      };
    }},
    { key:'fra-8', gen: (rnd) => {
      // Multiplication croisée avec simplification : n1/d × d/n2 = n1/n2
      function gcd(a: number, b: number): number { return b === 0 ? a : gcd(b, a % b); }
      const d = 5 + Math.floor(rnd() * 8); // 5..12 (le dénominateur commun qui se simplifie)
      const n1 = 1 + Math.floor(rnd() * (d - 1));
      const n2 = 1 + Math.floor(rnd() * (d - 1));
      const rn = n1 * d, rd = d * n2;
      const g = gcd(rn, rd);
      const fn = rn / g, fd = rd / g;
      const good = fd === 1 ? String(fn) : `${fn}/${fd}`;
      const used = new Set([good]);
      function nextFrac(base: string): string {
        const [nn, dd] = base.split('/').map(Number);
        if (!dd) return String(Number(base) + 1);
        let b = `${nn+1}/${dd}`;
        while (used.has(b)) { const [x,y] = b.split('/').map(Number); b = `${x+1}/${y}`; }
        return b;
      }
      let w1 = fn === n1 ? `${n1}/${n2+1}` : `${n1}/${n2}`;
      while (used.has(w1)) { const [x,y]=w1.split('/').map(Number); w1=`${x+1}/${y}`; }
      used.add(w1);
      let w2 = fd === 1 ? String(fn+1) : `${fn+1}/${fd}`;
      while (used.has(w2)) w2 = nextFrac(w2);
      used.add(w2);
      let w3 = fn > 1 ? (fd === 1 ? String(fn-1) : `${fn-1}/${fd}`) : (fd===1 ? String(fn+3) : `${fn}/${fd+2}`);
      while (used.has(w3)) w3 = nextFrac(w3);
      return {
        q: <>Calcule (en simplifiant) : <F n={String(n1)} d={String(d)}/> × <F n={String(d)} d={String(n2)}/> =</>,
        options: [good, w1, w2, w3],
        correct: 0,
        hint: `(${n1}×${d})/(${d}×${n2}) = ${rn}/${rd} = ${fn}/${fd}. Le ${d} se simplifie.`,
      };
    }},
    { key:'fra-9', gen: (rnd) => {
      // Addition avec dénominateurs quelconques (LCD = LCM)
      function gcd(a: number, b: number): number { return b === 0 ? a : gcd(b, a % b); }
      function lcm(a: number, b: number): number { return a * b / gcd(a, b); }
      const denoms = [[3,5],[4,7],[3,8],[5,7],[4,9],[5,6],[7,8],[3,10]];
      const [d1, d2] = denoms[Math.floor(rnd() * denoms.length)];
      const n1 = 1 + Math.floor(rnd() * (d1 - 1));
      const n2 = 1 + Math.floor(rnd() * (d2 - 1));
      const lcd = lcm(d1, d2);
      const numGood = n1 * (lcd / d1) + n2 * (lcd / d2);
      const g = gcd(numGood, lcd);
      const fn = numGood / g, fd = lcd / g;
      const goodStr = fd === 1 ? String(fn) : `${fn}/${fd}`;
      const used = new Set([goodStr]);
      let w1 = `${n1+n2}/${d1+d2}`; while (used.has(w1)) w1 = `${n1+n2+1}/${d1+d2}`; used.add(w1);
      let w2 = `${numGood}/${lcd}`; if (used.has(w2)) w2 = `${fn+1}/${fd}`; used.add(w2);
      let w3 = `${fn}/${fd+1}`; while (used.has(w3)) w3 = `${fn+1}/${fd+1}`;
      return {
        q: <>Calcule : <F n={String(n1)} d={String(d1)}/> + <F n={String(n2)} d={String(d2)}/> =</>,
        options: [goodStr, w1, w2, w3],
        correct: 0,
        hint: `LCD = ${lcd}. ${n1}/${d1} = ${n1*(lcd/d1)}/${lcd}, ${n2}/${d2} = ${n2*(lcd/d2)}/${lcd}. Somme = ${numGood}/${lcd}${g>1 ? ` = ${goodStr}` : ''}.`,
      };
    }},
    { key:'fra-10', gen: (rnd) => {
      // Soustraction avec LCD
      function gcd(a: number, b: number): number { return b === 0 ? a : gcd(b, a % b); }
      function lcm(a: number, b: number): number { return a * b / gcd(a, b); }
      const denoms = [[3,4],[2,7],[4,5],[3,7],[5,8],[2,9],[4,11]];
      const [d1, d2] = denoms[Math.floor(rnd() * denoms.length)];
      const n1 = 2 + Math.floor(rnd() * (d1 - 1));
      const n2 = 1 + Math.floor(rnd() * (d2 - 1));
      const lcd = lcm(d1, d2);
      const numRaw = n1 * (lcd / d1) - n2 * (lcd / d2);
      if (numRaw <= 0) return {
        q: <>Calcule : <F n="3" d="4"/> − <F n="1" d="3"/> =</>,
        options: ['5/12','1/12','7/12','2/7'], correct:0, hint:'LCD=12 : 9/12 − 4/12 = 5/12.',
      };
      const g = gcd(numRaw, lcd);
      const fn = numRaw / g, fd = lcd / g;
      const goodStr = fd === 1 ? String(fn) : `${fn}/${fd}`;
      const used = new Set([goodStr]);
      let w1 = `${n1-n2}/${Math.abs(d1-d2)||1}`; while (used.has(w1)) w1 = `${n1-n2+1}/${Math.abs(d1-d2)||1}`; used.add(w1);
      let w2 = `${fn+1}/${fd}`; while (used.has(w2)) w2 = `${fn+2}/${fd}`; used.add(w2);
      let w3 = `${fn}/${fd+1}`; while (used.has(w3)) w3 = `${fn}/${fd+2}`;
      return {
        q: <>Calcule : <F n={String(n1)} d={String(d1)}/> − <F n={String(n2)} d={String(d2)}/> =</>,
        options: [goodStr, w1, w2, w3],
        correct: 0,
        hint: `LCD = ${lcd}. ${n1*(lcd/d1)}/${lcd} − ${n2*(lcd/d2)}/${lcd} = ${numRaw}/${lcd}${g>1 ? ` = ${goodStr}` : ''}.`,
      };
    }},
    { key:'fra-11', gen: (rnd) => {
      // Comparaison de deux fractions par produits croisés
      const pairs: [number,number,number,number][] = [
        [2,3,3,5],[3,4,5,7],[4,5,7,9],[2,5,3,8],[5,6,7,9],[3,7,4,9],[1,3,2,7],
        [5,8,3,5],[4,7,5,9],[7,10,3,4],[2,9,3,14],[5,12,2,5],
      ];
      const [a,b,c,d] = pairs[Math.floor(rnd() * pairs.length)];
      const cross1 = a * d, cross2 = b * c;
      const bigN = cross1 > cross2 ? a : c;
      const bigD = cross1 > cross2 ? b : d;
      const smallN = cross1 > cross2 ? c : a;
      const smallD = cross1 > cross2 ? d : b;
      const correctIdx = cross1 > cross2 ? 0 : 1;
      return {
        q: <>Quelle fraction est la plus grande : <F n={String(a)} d={String(b)}/> ou <F n={String(c)} d={String(d)}/> ?</>,
        options: [`${a}/${b}`, `${c}/${d}`, 'Elles sont égales', 'Impossible à dire'],
        correct: correctIdx,
        hint: `Produits croisés : ${a}×${d}=${a*d} et ${c}×${b}=${c*b}. La plus grande est ${bigN}/${bigD}.`,
      };
    }},
    { key:'fra-12', gen: (rnd) => {
      // Division d'une fraction par un entier
      function gcd(a: number, b: number): number { return b === 0 ? a : gcd(b, a % b); }
      const n = 2 + Math.floor(rnd() * 7);
      const d = n + 1 + Math.floor(rnd() * 7);
      const k = 2 + Math.floor(rnd() * 4);
      const rn = n, rd = d * k;
      const g = gcd(rn, rd);
      const fn = rn / g, fd = rd / g;
      const goodStr = `${fn}/${fd}`;
      const used = new Set([goodStr]);
      let w1 = `${n*k}/${d}`; while (used.has(w1)) w1 = `${n*k+1}/${d}`; used.add(w1);
      let w2 = `${fn}/${fd+1}`; while (used.has(w2)) w2 = `${fn}/${fd+2}`; used.add(w2);
      let w3 = `${fn+1}/${fd}`; while (used.has(w3)) w3 = `${fn+2}/${fd}`;
      return {
        q: <>Calcule : <F n={String(n)} d={String(d)}/> ÷ {k} =</>,
        options: [goodStr, w1, w2, w3],
        correct: 0,
        hint: `Diviser par ${k} = multiplier le dénominateur par ${k} : ${n}/${d} ÷ ${k} = ${n}/${d*k}${g>1 ? ` = ${fn}/${fd}` : ''}.`,
      };
    }},
    { key:'fra-13', gen: (rnd) => {
      // Fraction d'une quantité : n/d × total
      const ds = [3,4,5,6,8];
      const d = ds[Math.floor(rnd() * ds.length)];
      const n = 1 + Math.floor(rnd() * (d - 1));
      const mult = 4 + Math.floor(rnd() * 8);
      const total = d * mult;
      const good = n * mult;
      const used = new Set([good]);
      let w1 = total / d; while (used.has(w1)) w1++; used.add(w1);
      let w2 = total - good; while (used.has(w2)) w2++; used.add(w2);
      let w3 = good + d; while (used.has(w3)) w3++;
      return {
        q: <><F n={String(n)} d={String(d)}/> de {total} élèves =</>,
        options: [String(good), String(w1), String(w2), String(w3)],
        correct: 0,
        hint: `${n}/${d} × ${total} = ${n*total}/${d} = ${good}.`,
      };
    }},
    { key:'fra-14', gen: (rnd) => {
      // Multiplication d'une fraction par un entier
      function gcd(a: number, b: number): number { return b === 0 ? a : gcd(b, a % b); }
      const n = 1 + Math.floor(rnd() * 6);
      const d = n + 2 + Math.floor(rnd() * 6);
      const k = 2 + Math.floor(rnd() * 5);
      const rn = n * k, rd = d;
      const g = gcd(rn, rd);
      const fn = rn / g, fd = rd / g;
      const goodStr = fd === 1 ? String(fn) : `${fn}/${fd}`;
      const used = new Set([goodStr]);
      let w1 = `${n}/${d * k}`; while (used.has(w1)) w1 = `${n}/${d*k+1}`; used.add(w1);
      let w2 = `${n+k}/${d}`; while (used.has(w2)) w2 = `${n+k+1}/${d}`; used.add(w2);
      let w3 = fd === 1 ? String(fn+1) : `${fn+1}/${fd}`; while (used.has(w3)) w3 = `${fn+2}/${fd}`;
      return {
        q: <>{k} × <F n={String(n)} d={String(d)}/> =</>,
        options: [goodStr, w1, w2, w3],
        correct: 0,
        hint: `${k} × ${n}/${d} = ${k*n}/${d}${g>1 ? ` = ${fn}/${fd}` : ''}.`,
      };
    }},
    { key:'fra-15', gen: (rnd) => {
      // Somme de trois fractions simples même dénominateur
      function gcd(a: number, b: number): number { return b === 0 ? a : gcd(b, a % b); }
      const d = 5 + Math.floor(rnd() * 6); // 5..10
      const n1 = 1 + Math.floor(rnd() * 3);
      const n2 = 1 + Math.floor(rnd() * 3);
      const n3 = 1 + Math.floor(rnd() * 3);
      const numGood = n1 + n2 + n3;
      const g = gcd(numGood, d);
      const fn = numGood / g, fd = d / g;
      const goodStr = fd === 1 ? String(fn) : `${fn}/${fd}`;
      const used = new Set([goodStr]);
      let w1 = `${n1+n2+n3}/${d*3}`; while (used.has(w1)) w1 = `${n1+n2+n3+1}/${d*3}`; used.add(w1);
      let w2 = `${fn+1}/${fd}`; while (used.has(w2)) w2 = `${fn+2}/${fd}`; used.add(w2);
      let w3 = `${fn}/${fd+1}`; while (used.has(w3)) w3 = `${fn}/${fd+2}`;
      return {
        q: <>Calcule : <F n={String(n1)} d={String(d)}/> + <F n={String(n2)} d={String(d)}/> + <F n={String(n3)} d={String(d)}/> =</>,
        options: [goodStr, w1, w2, w3],
        correct: 0,
        hint: `Même dénominateur ${d} : ${n1}+${n2}+${n3} = ${numGood} → ${numGood}/${d}${g>1 ? ` = ${goodStr}` : ''}.`,
      };
    }},
  ],

  puissances: [
    { key:'pui-1', gen: (rnd) => {
      const base = 2 + Math.floor(rnd() * 5); // 2..6
      const exp = 2 + Math.floor(rnd() * 4);  // 2..5
      const good = Math.pow(base, exp);
      const used = new Set([good]);
      let w1 = base * exp;
      while (used.has(w1)) w1++; used.add(w1);
      let w2 = good + exp;
      while (used.has(w2)) w2++; used.add(w2);
      let w3 = Math.pow(base, exp - 1);
      while (used.has(w3)) w3++;
      return {
        q: <>Calcule : <M>{base}<sup>{exp}</sup> =</M></>,
        options: [String(good), String(w1), String(w2), String(w3)],
        correct: 0,
        hint: `${Array(exp).fill(base).join('×')} = ${good}.`,
      };
    }},
    { key:'pui-2', gen: (rnd) => {
      const bases = [2,3,5,7];
      const base = bases[Math.floor(rnd() * bases.length)];
      const e1 = 2 + Math.floor(rnd() * 4);
      const e2 = 1 + Math.floor(rnd() * 4);
      const goodExp = e1 + e2;
      // Distracteurs : produit des exposants (erreur classique), différence, voisins
      const used = new Set([goodExp]);
      let w1 = e1 * e2;
      while (used.has(w1) || w1 <= 0) w1++; used.add(w1);
      let w2 = Math.abs(e1 - e2);
      if (w2 === 0) w2 = 1;
      while (used.has(w2) || w2 <= 0) w2++; used.add(w2);
      let w3 = goodExp - 1;
      if (w3 <= 0) w3 = goodExp + 2;
      while (used.has(w3) || w3 <= 0) w3++;
      return {
        q: <>Simplifie : <M>{base}<sup>{e1}</sup> × {base}<sup>{e2}</sup> =</M></>,
        options: [<>{base}<sup>{goodExp}</sup></>, <>{base}<sup>{w1}</sup></>, <>{base}<sup>{w2}</sup></>, <>{base}<sup>{w3}</sup></>],
        correct: 0,
        hint: `On additionne les exposants : ${base}^${e1} × ${base}^${e2} = ${base}^${goodExp}.`,
      };
    }},
    { key:'pui-3', gen: (rnd) => {
      // Notation scientifique d'un grand nombre : a,bc × 10^n généré dynamiquement
      // Mantisse : chiffre entier 1..9, décimales 1..2 chiffres
      const a = 1 + Math.floor(rnd() * 9); // 1..9
      const b = Math.floor(rnd() * 10);    // 0..9
      const exp = 3 + Math.floor(rnd() * 5); // exposant 3..7
      const mantissa = b === 0 ? `${a}` : `${a},${b}`;
      const val = parseFloat(`${a}.${b}`) * Math.pow(10, exp);
      const valStr = Number.isInteger(val) ? val.toLocaleString('fr-FR') : val.toLocaleString('fr-FR');
      return {
        q: `Écris ${Math.round(val).toLocaleString('fr-FR')} en notation scientifique :`,
        options: [
          <>{mantissa} × 10<sup>{exp}</sup></>,
          <>{mantissa} × 10<sup>{exp+1}</sup></>,
          <>{a},{b+1 > 9 ? 0 : b+1} × 10<sup>{exp}</sup></>,
          <>{mantissa} × 10<sup>{exp-1}</sup></>,
        ],
        correct: 0,
        hint: `Un seul chiffre non nul avant la virgule : ${mantissa} × 10^${exp}.`,
      };
    }},
    { key:'pui-4', gen: (rnd) => {
      // Mix positif/négatif pour élargir la variabilité
      const n = (rnd() < 0.5 ? -1 : 1) * (2 + Math.floor(rnd() * 6)); // ±2..±7
      const good = Math.pow(10, n);
      const fmt = (v) => {
        if (n >= 0) return String(Math.round(v));
        return v.toFixed(-n).replace('.', ',');
      };
      const goodStr = fmt(good);
      // Distracteurs : exposant opposé, exposant -1, exposant +1, négation
      const d1 = fmt(Math.pow(10, -n));
      const d2 = fmt(Math.pow(10, n - 1));
      const d3 = fmt(Math.pow(10, n + 1));
      const opts = [goodStr, d1, d2, d3];
      // Dédoublonnage
      const seen = new Set([goodStr]);
      for (let i = 1; i < 4; i++) {
        let s = opts[i]; let k = 2;
        while (seen.has(s)) { s = fmt(Math.pow(10, n + k)); k++; if (k > 10) break; }
        seen.add(s); opts[i] = s;
      }
      return {
        q: <>Calcule : <M>10<sup>{n}</sup> =</M></>,
        options: opts,
        correct: 0,
        hint: `10^${n} = ${goodStr}.`,
      };
    }},
    { key:'pui-5', gen: (rnd) => {
      const bases = [2, 3, 5];
      const base = bases[Math.floor(rnd() * bases.length)];
      const e1 = 2 + Math.floor(rnd() * 3);
      const e2 = 2 + Math.floor(rnd() * 3);
      const goodExp = e1 * e2;
      const used = new Set([goodExp]);
      let w1 = e1 + e2;
      while (used.has(w1)) w1++; used.add(w1);
      let w2 = goodExp + 1;
      while (used.has(w2)) w2++; used.add(w2);
      let w3 = e1 + e2 - 1;
      while (used.has(w3) || w3 <= 0) w3++;
      return {
        q: <>Simplifie : <M>({base}<sup>{e1}</sup>)<sup>{e2}</sup> =</M></>,
        options: [<>{base}<sup>{goodExp}</sup></>, <>{base}<sup>{w1}</sup></>, <>{base}<sup>{w2}</sup></>, <>{base}<sup>{w3}</sup></>],
        correct: 0,
        hint: `Puissance de puissance : on multiplie les exposants → ${base}^(${e1}×${e2}) = ${base}^${goodExp}.`,
      };
    }},
    { key:'pui-6', gen: (rnd) => {
      // Notation scientifique d'un petit nombre : généré dynamiquement
      const a = 1 + Math.floor(rnd() * 9); // 1..9
      const b = Math.floor(rnd() * 10);    // 0..9
      const exp = -(3 + Math.floor(rnd() * 5)); // -3..-7
      const mantissa = b === 0 ? `${a}` : `${a},${b}`;
      const val = parseFloat(`${a}.${b}`) * Math.pow(10, exp);
      const valStr = val.toFixed(-exp + (b === 0 ? 0 : 1));
      return {
        q: `Écris ${valStr} en notation scientifique :`,
        options: [
          <>{mantissa} × 10<sup>{exp}</sup></>,
          <>{a},{b+1 > 9 ? 0 : b+1} × 10<sup>{exp}</sup></>,
          <>{mantissa} × 10<sup>{-exp}</sup></>,
          <>{mantissa} × 10<sup>{exp-1}</sup></>,
        ],
        correct: 0,
        hint: `Virgule déplacée de ${-exp} rangs vers la droite → exposant ${exp}.`,
      };
    }},
    { key:'pui-7', gen: (rnd) => {
      const bases = [2,3,5,7];
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
        hint: `Division de puissances de même base : on soustrait les exposants → ${base}^${e1}−${e2} = ${base}^${goodExp}.`,
      };
    }},
    { key:'pui-8', gen: (rnd) => {
      const base = 2 + Math.floor(rnd() * 9);  // 2..10
      const exp = 2 + Math.floor(rnd() * 3);   // 2, 3, 4
      const good = Math.pow(base, exp);
      const used = new Set([good]);
      let w1 = base * exp;                     // piège classique : multiplie au lieu de ×
      while (used.has(w1)) w1++; used.add(w1);
      let w2 = Math.pow(base, exp - 1);        // exposant − 1
      while (used.has(w2)) w2++; used.add(w2);
      let w3 = Math.pow(base, exp + 1);        // exposant + 1
      while (used.has(w3)) w3++;
      return {
        q: <>Calcule : <M>{base}<sup>{exp}</sup> =</M></>,
        options: [String(good), String(w1), String(w2), String(w3)],
        correct: 0,
        hint: `${base}^${exp} = ${good}.`,
      };
    }},
  ],

  litteral: [
    { key:'lit-1', gen: (rnd) => {
      const k = 2 + Math.floor(rnd() * 7);
      const a = 2 + Math.floor(rnd() * 6);
      const b = 1 + Math.floor(rnd() * 8);
      const good = `${k*a}x − ${k*b}`;
      const w1 = `${k*a}x − ${b}`;
      const w2 = `${a}x − ${k*b}`;
      const w3 = `${k*a}x + ${k*b}`;
      return {
        q: <>Développe : <M>{k}({a}x − {b}) =</M></>,
        options: [good, w1, w2, w3],
        correct: 0,
        hint: `Distributivité : ${k}×${a}x + ${k}×(−${b}) = ${k*a}x − ${k*b}.`,
      };
    }},
    { key:'lit-2', gen: (rnd) => {
      const a = 3 + Math.floor(rnd() * 5);
      const b = 2 + Math.floor(rnd() * 6);
      const c = 1 + Math.floor(rnd() * (a - 1));
      const d = 1 + Math.floor(rnd() * 8);
      const rx = a - c;
      const rc = b + d;
      const good = `${rx}x + ${rc}`;
      const w1 = `${a + c}x + ${rc}`;
      const w2 = `${rx}x + ${b - d > 0 ? b - d : b + d + 1}`;
      const w3 = `${a}x + ${rc}`;
      return {
        q: <>Réduis : <M>{a}x + {b} − {c}x + {d} =</M></>,
        options: [good, w1, w2, w3],
        correct: 0,
        hint: `(${a}x − ${c}x) + (${b} + ${d}) = ${rx}x + ${rc}.`,
      };
    }},
    { key:'lit-3', gen: (rnd) => {
      const x = 3 + Math.floor(rnd() * 8);
      const c = 3 + Math.floor(rnd() * 12);
      const rhs = 3 * x + c;
      const good = x;
      const w1 = x + 1;
      const w2 = (rhs + c) / 3 | 0;
      const w3 = rhs;
      const used = new Set([good, w1, w2, w3]);
      let w3f = w3;
      while (used.has(w3f)) w3f++;
      return {
        q: <>Résous : <M>3x + {c} = {rhs}</M></>,
        options: [String(good), String(w1), String(w2), String(w3f)],
        correct: 0,
        hint: `3x = ${rhs} − ${c} = ${rhs - c}, donc x = ${good}.`,
      };
    }},
    { key:'lit-4', gen: (rnd) => {
      const x = 3 + Math.floor(rnd() * 8);
      const a = 4 + Math.floor(rnd() * 4);
      const b = 1 + Math.floor(rnd() * a);
      const rhs_shift = 1 + Math.floor(rnd() * 10);
      const lhs_const = -(1 + Math.floor(rnd() * 8));
      const rhs = b * x + rhs_shift;
      const lhs = a * x + lhs_const;
      // verify solution: ax + lhs_const = bx + rhs_shift → x = (rhs_shift - lhs_const)/(a - b)
      if (a <= b) {
        return {
          q: <>Résous : <M>5x − 4 = 2x + 11</M></>,
          options: ['x = 3','x = 5','x = 7','x = −5'],
          correct: 1,
          hint: '5x − 2x = 11 + 4 → 3x = 15 → x = 5.',
        };
      }
      const sol = (rhs_shift - lhs_const) / (a - b);
      if (!Number.isInteger(sol) || sol <= 0 || sol > 15) {
        return {
          q: <>Résous : <M>5x − 4 = 2x + 11</M></>,
          options: ['x = 3','x = 5','x = 7','x = −5'],
          correct: 1,
          hint: '5x − 2x = 11 + 4 → 3x = 15 → x = 5.',
        };
      }
      const w1 = sol + 1;
      const w2 = sol - 1;
      const w3 = -sol;
      const used = new Set([sol, w1, w2, w3]);
      return {
        q: <>Résous : <M>{a}x + ({lhs_const}) = {b}x + {rhs_shift}</M></>,
        options: [`x = ${sol}`, `x = ${w1}`, `x = ${w2}`, `x = ${w3}`],
        correct: 0,
        hint: `${a}x − ${b}x = ${rhs_shift} + ${-lhs_const} → ${a-b}x = ${rhs_shift - lhs_const} → x = ${sol}.`,
      };
    }},
    { key:'lit-5', gen: (rnd) => {
      const x = -(1 + Math.floor(rnd() * 5));
      const a = 1 + Math.floor(rnd() * 4);
      const b = 1 + Math.floor(rnd() * 6);
      const c = -(Math.floor(rnd() * 5));
      const good = a * x * x + b * x + c;
      const w1 = a * x * x - b * x + c; // signe de b inversé
      const w2 = a * x + b * x + c;     // oubli du carré
      const w3 = good + 1;
      const used = new Set([good, w1, w2]);
      let w3f = w3;
      while (used.has(w3f)) w3f++;
      return {
        q: <>Si <M>x = {x}</M>, que vaut <M>A = {a}x² + {b}x + ({c}) ?</M></>,
        options: [String(good), String(w1), String(w2), String(w3f)],
        correct: 0,
        hint: `${a}×(${x})² + ${b}×(${x}) + (${c}) = ${a*x*x} + (${b*x}) + (${c}) = ${good}.`,
      };
    }},
    { key:'lit-6', gen: (rnd) => {
      // Factorisation : k(ax+b), k,a,b générés dynamiquement
      const k = 2 + Math.floor(rnd() * 7); // 2..8
      const a = 1 + Math.floor(rnd() * 5); // 1..5
      const b = 1 + Math.floor(rnd() * 7); // 1..7
      const good = `${k}(${a}x + ${b})`;
      const used = new Set([good]);
      let w1 = `${k}(${a}x + ${k*b})`;
      if (used.has(w1)) w1 = `${k}(${a}x + ${b+1})`; used.add(w1);
      let w2 = `${k*a}(x + ${b})`;
      if (used.has(w2)) w2 = `${k*a}(x + ${b+1})`; used.add(w2);
      let w3 = `${a}(${k}x + ${b})`;
      if (used.has(w3)) w3 = `${a}(${k+1}x + ${b})`;
      return {
        q: <>Factorise : <M>{k*a}x + {k*b} =</M></>,
        options: [good, w1, w2, w3],
        correct: 0,
        hint: `Facteur commun ${k} : ${k*a}x = ${k}×${a}x et ${k*b} = ${k}×${b} → ${k}(${a}x + ${b}).`,
      };
    }},
    { key:'lit-7', gen: (rnd) => {
      const a = 1 + Math.floor(rnd() * 5);
      const b = -(1 + Math.floor(rnd() * 5));
      const good = `x² + ${a + b}x + ${a * b}`;
      const w1 = `x² + ${a * b}`;
      const w2 = `x² + ${a - b}x + ${a * b}`;
      const w3 = `x² + ${a + b}x − ${a * b}`;
      return {
        q: <>Développe : <M>(x + {a})(x + ({b})) =</M></>,
        options: [good, w1, w2, w3],
        correct: 0,
        hint: `x² + ${b}x + ${a}x + ${a}×${b} = x² + ${a+b}x + ${a*b}.`,
      };
    }},
    { key:'lit-8', gen: (rnd) => {
      const sol = 3 + Math.floor(rnd() * 8);
      const c = 1 + Math.floor(rnd() * 5);
      const rhs = sol + c;
      const good = sol;
      const used = new Set([good]);
      let w1 = rhs;
      while (used.has(w1)) w1++; used.add(w1);
      let w2 = sol - 1;
      if (w2 <= 0 || used.has(w2)) { w2 = sol + 2; while (used.has(w2)) w2++; }
      used.add(w2);
      let w3 = sol + 1;
      while (used.has(w3)) w3++;
      return {
        q: <>Résous : <M>2(x − {c}) = x + {sol - c}</M></>,
        options: [`x = ${good}`, `x = ${w1}`, `x = ${w2}`, `x = ${w3}`],
        correct: 0,
        hint: `2x − ${2*c} = x + ${sol - c} → x = ${sol - c} + ${2*c} = ${good}.`,
      };
    }},
    { key:'lit-9', gen: (rnd) => {
      const a = 2 + Math.floor(rnd() * 4);
      const b = 2 + Math.floor(rnd() * 5);
      const c = 1 + Math.floor(rnd() * (a - 1));
      const d = 1 + Math.floor(rnd() * (b));
      const rx = a - c;
      const rc = b - d;
      const good = rc === 0 ? `${rx}x²` : `${rx}x² + ${rc}x`;
      const w1 = `${a + c}x² + ${b + d}x`;
      const w2 = `${rx}x² + ${b + d}x`;
      const w3 = `${a}x² + ${rc}x`;
      return {
        q: <>Réduis : <M>{a}x² + {b}x − {c}x² − {d}x =</M></>,
        options: [good, w1, w2, w3],
        correct: 0,
        hint: `(${a}x² − ${c}x²) + (${b}x − ${d}x) = ${rx}x² + ${rc}x.`,
      };
    }},
    { key:'lit-10', gen: (rnd) => {
      const sol = 3 + Math.floor(rnd() * 8);
      const k = 2 + Math.floor(rnd() * 4);
      const inside = 1 + Math.floor(rnd() * 5);
      const b = 1 + Math.floor(rnd() * 6);
      const rhs_coef = k - 1;
      // k(x + inside) = rhs_coef * x + rhs_const → sol = rhs_const - k*inside
      const rhs_const = sol + k * inside;
      const good = sol;
      const w1 = sol + inside;
      const w2 = sol - 1;
      const w3 = rhs_const;
      const used = new Set([good, w1, w2, w3]);
      return {
        q: <>Résous : <M>{k}(x + {inside}) = {rhs_coef}x + {rhs_const}</M></>,
        options: [`x = ${good}`, `x = ${w1}`, `x = ${w2}`, `x = ${w3}`],
        correct: 0,
        hint: `${k}x + ${k*inside} = ${rhs_coef}x + ${rhs_const} → x = ${rhs_const} − ${k*inside} = ${good}.`,
      };
    }},
    { key:'lit-11', gen: (rnd) => {
      // Factorisation avec soustraction : k(ax−b)
      const k = 2 + Math.floor(rnd() * 7); // 2..8
      const a = 1 + Math.floor(rnd() * 5); // 1..5
      const b = 1 + Math.floor(rnd() * 7); // 1..7
      const good = `${k}(${a}x − ${b})`;
      const used = new Set([good]);
      let w1 = `${k}(${a}x − ${k*b})`;
      if (used.has(w1)) w1 = `${k}(${a}x − ${b+1})`; used.add(w1);
      let w2 = `${k*a}(x − ${b})`;
      if (used.has(w2)) w2 = `${k*a}(x − ${b+1})`; used.add(w2);
      let w3 = `${a}(${k}x − ${b})`;
      if (used.has(w3)) w3 = `${a}(${k+1}x − ${b})`;
      return {
        q: <>Factorise : <M>{k*a}x − {k*b} =</M></>,
        options: [good, w1, w2, w3],
        correct: 0,
        hint: `Facteur commun ${k} : ${k*a}x = ${k}×${a}x, ${k*b} = ${k}×${b} → ${k}(${a}x − ${b}).`,
      };
    }},
    { key:'lit-12', gen: (rnd) => {
      const x = 1 + Math.floor(rnd() * 6);
      const rhs_small = 1 + Math.floor(rnd() * 4);
      const lhs_const = rhs_small + 2 * x;
      const good = x;
      const w1 = lhs_const;
      const w2 = x + 1;
      const w3 = -x;
      const used = new Set([good, w1, w2, w3]);
      return {
        q: <>Résous : <M>{lhs_const} − 2x = {rhs_small}</M></>,
        options: [`x = ${good}`, `x = ${w1}`, `x = ${w2}`, `x = ${w3}`],
        correct: 0,
        hint: `−2x = ${rhs_small} − ${lhs_const} = ${rhs_small - lhs_const} → x = ${good}.`,
      };
    }},
    { key:'lit-13', gen: (rnd) => {
      const x = 2 + Math.floor(rnd() * 5);
      const a = 1 + Math.floor(rnd() * 3);
      const b = 1 + Math.floor(rnd() * 5);
      const c = 1 + Math.floor(rnd() * 4);
      const good = a * x * x - b * x + c;
      const w1 = a * x * x + b * x + c;
      const w2 = a * x - b * x + c;
      const w3 = good + 1;
      const used = new Set([good, w1, w2]);
      let w3f = w3;
      while (used.has(w3f)) w3f++;
      return {
        q: <>Si <M>x = {x}</M>, que vaut <M>B = {a}x² − {b}x + {c} ?</M></>,
        options: [String(good), String(w1), String(w2), String(w3f)],
        correct: 0,
        hint: `${a}×${x}² − ${b}×${x} + ${c} = ${a*x*x} − ${b*x} + ${c} = ${good}.`,
      };
    }},
  ],

  pythagore: [
    { key:'pyt-1', gen: (rnd) => {
      const TRIPLETS = [[3,4,5],[5,12,13],[8,15,17],[7,24,25],[9,12,15],[6,8,10],[15,20,25],[10,24,26],[20,21,29]];
      const [a0, b0, c0] = TRIPLETS[Math.floor(rnd() * TRIPLETS.length)];
      const k = 1 + Math.floor(rnd() * 3); // multiplicateur 1..3
      const [a, b, c] = [a0*k, b0*k, c0*k];
      const w1 = a + b;
      const w2 = a * a + b * b;
      const used = new Set([c, w1, w2]);
      let w3f = Math.abs(a - b);
      if (w3f <= 0) w3f = c + 2;
      while (used.has(w3f)) w3f++;
      return {
        q: `Triangle rectangle en A avec les deux cathètes ${a} cm et ${b} cm. L'hypoténuse mesure :`,
        options: [`${c} cm`, `${w1} cm`, `${w2} cm`, `${w3f} cm`],
        correct: 0,
        hint: `c² = ${a}² + ${b}² = ${a*a} + ${b*b} = ${a*a+b*b} → c = ${c} cm.`,
      };
    }},
    { key:'pyt-2', gen: (rnd) => {
      const TRIPLETS = [[3,4,5],[5,12,13],[8,15,17],[7,24,25],[9,12,15],[6,8,10],[15,20,25],[10,24,26],[20,21,29]];
      const [a, b, c] = TRIPLETS[Math.floor(rnd() * TRIPLETS.length)];
      const isRect = rnd() < 0.6; // 60% vrai
      let qa, qb, qc;
      if (isRect) {
        [qa, qb, qc] = [a, b, c];
      } else {
        // faux triplet : changer c légèrement
        qa = a; qb = b; qc = c + 1;
      }
      const check = qa*qa + qb*qb;
      const expected = qc * qc;
      const isActuallyRect = check === expected;
      const goodAnswer = isActuallyRect
        ? `Oui, car ${qa}² + ${qb}² = ${qc}²`
        : `Non, car ${qa}² + ${qb}² ≠ ${qc}²`;
      const wrongAnswer = isActuallyRect
        ? `Non, car ${qa} + ${qb} ≠ ${qc}`
        : `Oui, car ${qa}² + ${qb}² = ${qc}²`;
      return {
        q: `Un triangle a pour côtés ${qa}, ${qb} et ${qc}. Est-il rectangle ?`,
        options: [goodAnswer, wrongAnswer, `Oui, car ${qa} × ${qb} = ${qa*qb}`, 'On ne peut pas savoir'],
        correct: 0,
        hint: `Réciproque : ${qa}² + ${qb}² = ${check}${isActuallyRect ? ` = ${qc}² → rectangle` : ` ≠ ${expected} → pas rectangle`}.`,
      };
    }},
    { key:'pyt-3', gen: (rnd) => {
      const TRIPLETS = [[5,12,13],[8,15,17],[7,24,25],[9,12,15],[10,24,26],[20,21,29],[6,8,10]];
      const [a, b, c] = TRIPLETS[Math.floor(rnd() * TRIPLETS.length)];
      // cherche côté manquant : cathète b, hyp c, cathète a connue
      const known = rnd() < 0.5 ? a : b;
      const missing = known === a ? b : a;
      const w1 = c - known;
      const w2 = c + known;
      const w3 = missing + 1;
      const used = new Set([missing, w1, w2, w3]);
      let w3f = w3;
      while (used.has(w3f)) w3f++;
      return {
        q: `Dans un triangle rectangle, l'hypoténuse mesure ${c} cm et un côté ${known} cm. L'autre côté mesure :`,
        options: [`${missing} cm`, `${w1} cm`, `${w2} cm`, `${w3f} cm`],
        correct: 0,
        hint: `c² = ${c}² − ${known}² = ${c*c} − ${known*known} = ${missing*missing} → c = ${missing} cm.`,
      };
    }},
    { key:'pyt-4', q:'Dans un triangle rectangle, l\'hypoténuse est :',
      options:['Le côté le plus court','Le côté opposé à l\'angle droit','N\'importe quel côté','Le côté vertical'], correct:1,
      hint:'Hypoténuse = côté opposé à l\'angle droit, le plus long.' },
    { key:'pyt-5', gen: (rnd) => {
      const TRIPLETS = [[3,4,5],[5,12,13],[8,15,17],[7,24,25],[9,12,15],[6,8,10],[15,20,25],[10,24,26],[20,21,29]];
      const [a0, b0, c0] = TRIPLETS[Math.floor(rnd() * TRIPLETS.length)];
      const k = 1 + Math.floor(rnd() * 3); // multiplicateur pour varier
      const [a, b, c] = [a0*k, b0*k, c0*k];
      return {
        q: `Un triangle a pour côtés ${a}, ${b} et ${c}. Est-il rectangle ?`,
        options: ['Oui', 'Non', 'Isocèle seulement', 'Équilatéral'],
        correct: 0,
        hint: `${a}² + ${b}² = ${a*a} + ${b*b} = ${a*a+b*b} = ${c}² ✓`,
      };
    }},
    { key:'pyt-6', gen: (rnd) => {
      const TRIPLETS = [[5,12,13],[8,15,17],[7,24,25],[9,12,15],[6,8,10],[15,20,25]];
      const [a0, b0, c0] = TRIPLETS[Math.floor(rnd() * TRIPLETS.length)];
      const k = 1 + Math.floor(rnd() * 3);
      const [a, b, c] = [a0*k, b0*k, c0*k];
      const label = ['A','B','C'][Math.floor(rnd() * 3)];
      const w1 = Math.abs(a - b);
      const w2 = a + b;
      const w3 = c + 1;
      const used = new Set([c, w1, w2, w3]);
      let w3f = w3;
      while (used.has(w3f)) w3f++;
      return {
        q: `Triangle rectangle en ${label} avec les deux côtés ${a} cm et ${b} cm. Hypoténuse :`,
        options: [`${c} cm`, `${w1} cm`, `${w2} cm`, `${w3f} cm`],
        correct: 0,
        hint: `AC² = ${a}² + ${b}² = ${a*a+b*b} → AC = ${c} cm (triplet ${a}-${b}-${c}).`,
      };
    }},
    { key:'pyt-7', gen: (rnd) => {
      const TRIPLETS = [[3,4,5],[5,12,13],[8,15,17],[9,12,15],[6,8,10]];
      const [a0, b0, c0] = TRIPLETS[Math.floor(rnd() * TRIPLETS.length)];
      const k = 1 + Math.floor(rnd() * 3);
      const [a, b, c] = [a0*k, b0*k, c0*k];
      return {
        q: `Un triangle a pour côtés ${a}, ${b} et ${c}. Est-il rectangle ?`,
        options: [`Oui, car ${a}² + ${b}² = ${c}²`, 'Non', 'Oui, mais équilatéral', 'On ne sait pas'],
        correct: 0,
        hint: `${a*a} + ${b*b} = ${a*a+b*b} = ${c*c}. Triplet pythagoricien.`,
      };
    }},
    { key:'pyt-8', gen: (rnd) => {
      const TRIPLETS = [[6,8,10],[9,12,15],[10,24,26],[8,15,17],[5,12,13]];
      const [a, _b, c] = TRIPLETS[Math.floor(rnd() * TRIPLETS.length)];
      const b = _b;
      const known = rnd() < 0.5 ? a : b;
      const missing = known === a ? b : a;
      const used = new Set([missing]);
      let w1 = known - 2;
      if (w1 <= 0) w1 = known + 3;
      while (used.has(w1)) w1++; used.add(w1);
      let w2 = c + known;
      while (used.has(w2)) w2++; used.add(w2);
      let w3 = missing + 2;
      while (used.has(w3)) w3++;
      return {
        q: `Dans un triangle rectangle, l'hypoténuse mesure ${c} cm et un côté vaut ${known} cm. L'autre côté ?`,
        options: [`${missing} cm`, `${w1} cm`, `${w2} cm`, `${w3} cm`],
        correct: 0,
        hint: `c² = ${c*c} − ${known*known} = ${missing*missing} → c = ${missing} cm.`,
      };
    }},
  ],

  thales: [
    { key:'tha-1', gen: (rnd) => {
      // AM/AB = AN/AC → AC = AN * AB / AM
      const AM = 2 + Math.floor(rnd() * 5);
      const factor = 2 + Math.floor(rnd() * 4);
      const AB = AM * factor;
      const AN = 1 + Math.floor(rnd() * 6);
      const AC = AN * factor;
      const used = new Set([AC]);
      let w1 = AN + factor;
      while (used.has(w1)) w1++; used.add(w1);
      let w2 = AN * AM;
      while (used.has(w2)) w2++; used.add(w2);
      let w3 = AC + 1;
      while (used.has(w3)) w3++;
      return {
        q: <>Dans la configuration de Thalès, si <M>(MN) // (BC)</M> avec AM = {AM}, AB = {AB} et AN = {AN}, alors AC vaut :</>,
        options: [String(AC), String(w1), String(w2), String(w3)],
        correct: 0,
        hint: `AM/AB = AN/AC → ${AM}/${AB} = ${AN}/AC → AC = ${AN} × ${AB}/${AM} = ${AC}.`,
      };
    }},
    { key:'tha-2', q:'Le théorème de Thalès permet de :',
      options:['Calculer une aire','Calculer des longueurs (droites parallèles)','Calculer un angle','Démontrer qu\'un triangle est isocèle'], correct:1,
      hint:'Thalès = longueurs dans une configuration avec droites parallèles.' },
    { key:'tha-3', gen: (rnd) => {
      // AM/AB = MN/BC → BC = MN * AB / AM
      const AM = 2 + Math.floor(rnd() * 4);
      const factor = 2 + Math.floor(rnd() * 3);
      const AB = AM * factor;
      const MN = 2 + Math.floor(rnd() * 5);
      const BC = MN * factor;
      const used = new Set([BC]);
      let w1 = BC + 1;
      while (used.has(w1)) w1++; used.add(w1);
      let w2 = MN * AM;
      while (used.has(w2)) w2++; used.add(w2);
      let w3 = BC - 1;
      if (w3 <= 0) w3 = BC + 3;
      while (used.has(w3)) w3++;
      return {
        q: <>Dans un triangle ABC, M ∈ [AB] et N ∈ [AC] avec <M>(MN) // (BC)</M>. Si AM = {AM}, AB = {AB} et MN = {MN}, alors BC vaut :</>,
        options: [String(BC), String(w1), String(w2), String(w3)],
        correct: 0,
        hint: `AM/AB = MN/BC → ${AM}/${AB} = ${MN}/BC → BC = ${MN} × ${factor} = ${BC}.`,
      };
    }},
    { key:'tha-4', q:'Pour appliquer Thalès il faut impérativement :',
      options:['Un triangle rectangle','Deux droites parallèles et sécantes à deux autres droites','Un cercle','Deux angles égaux'], correct:1,
      hint:'La configuration repose sur deux parallèles coupées par deux sécantes concourantes.' },
    { key:'tha-5', gen: (rnd) => {
      const AM = 2 + Math.floor(rnd() * 5);
      const factor = 3 + Math.floor(rnd() * 3);
      const AB = AM * factor;
      const AN = 1 + Math.floor(rnd() * 5);
      const AC = AN * factor;
      const used = new Set([AC]);
      let w1 = AN * AM;
      while (used.has(w1)) w1++; used.add(w1);
      let w2 = AC + 2;
      while (used.has(w2)) w2++; used.add(w2);
      let w3 = AC - 2;
      if (w3 <= 0) w3 = AC + 3;
      while (used.has(w3)) w3++;
      return {
        q: <>Dans la configuration de Thalès, AM = {AM}, AB = {AB}, AN = {AN}. Combien vaut AC ?</>,
        options: [String(AC), String(w1), String(w2), String(w3)],
        correct: 0,
        hint: `AM/AB = AN/AC → ${AM}/${AB} = ${AN}/AC → AC = ${AN} × ${factor} = ${AC}.`,
      };
    }},
  ],

  trigo: [
    { key:'tri-1', q:'Dans un triangle rectangle, le cosinus d\'un angle aigu est :',
      options:[<F n="opposé" d="hypoténuse"/>, <F n="adjacent" d="hypoténuse"/>, <F n="opposé" d="adjacent"/>, <F n="hypoténuse" d="adjacent"/>], correct:1,
      hint:'CAH : Cosinus = Adjacent / Hypoténuse.' },
    { key:'tri-2', gen: (rnd) => {
      // Tirer un triplet pythagoricien ET une question parmi cos/sin/tan pour élargir la variabilité
      const TRIPLETS = [[3,4,5],[5,12,13],[8,15,17],[6,8,10],[9,12,15],[7,24,25],[20,21,29],[12,16,20],[15,20,25],[10,24,26]];
      const [adj, opp, hyp] = TRIPLETS[Math.floor(rnd() * TRIPLETS.length)];
      const whichFn = ['cos','sin','tan'][Math.floor(rnd() * 3)];
      function gcd(a: number, b: number): number { return b === 0 ? a : gcd(b, a % b); }
      const simp = (n, d) => { const g = gcd(n, d); return g > 1 ? `${n/g}/${d/g}` : `${n}/${d}`; };
      const cosSimp = simp(adj, hyp);
      const sinSimp = simp(opp, hyp);
      const tanSimp = simp(opp, adj);
      let good, askLabel;
      if (whichFn === 'cos') { good = cosSimp; askLabel = 'cos(α)'; }
      else if (whichFn === 'sin') { good = sinSimp; askLabel = 'sin(α)'; }
      else { good = tanSimp; askLabel = 'tan(α)'; }
      const pool = [cosSimp, sinSimp, tanSimp, simp(hyp, adj), simp(hyp, opp), simp(adj, opp)].filter(v => v !== good);
      const seen = new Set([good]);
      const distract = [];
      for (const p of pool) { if (!seen.has(p)) { distract.push(p); seen.add(p); } if (distract.length === 3) break; }
      while (distract.length < 3) { distract.push(`${distract.length+2}/${hyp}`); }
      return {
        q: <>Dans un triangle rectangle, adjacent = {adj}, opposé = {opp}, hypoténuse = {hyp}. Que vaut {askLabel} ?</>,
        options: [good, distract[0], distract[1], distract[2]],
        correct: 0,
        hint: `${askLabel} = ${whichFn === 'cos' ? 'adjacent/hypoténuse' : whichFn === 'sin' ? 'opposé/hypoténuse' : 'opposé/adjacent'} = ${good}.`,
      };
    }},
    { key:'tri-3', gen: (rnd) => {
      // Retrouver l'angle depuis sin/cos/tan d'angles remarquables (incl. tan)
      const data = [
        { fn:'cos', angle:30, val:'√3/2 ≈ 0,87' },
        { fn:'cos', angle:45, val:'√2/2 ≈ 0,71' },
        { fn:'cos', angle:60, val:'0,5' },
        { fn:'sin', angle:30, val:'0,5' },
        { fn:'sin', angle:45, val:'√2/2 ≈ 0,71' },
        { fn:'sin', angle:60, val:'√3/2 ≈ 0,87' },
        { fn:'tan', angle:30, val:'√3/3 ≈ 0,58' },
        { fn:'tan', angle:45, val:'1' },
        { fn:'tan', angle:60, val:'√3 ≈ 1,73' },
      ];
      const c = data[Math.floor(rnd() * data.length)];
      // 3 distracteurs tirés parmi les autres angles + un "impossible"
      const pool = [20, 30, 45, 60, 75, 90].filter(a => a !== c.angle);
      // Shuffle pool
      for (let i = pool.length - 1; i > 0; i--) {
        const j = Math.floor(rnd() * (i + 1));
        [pool[i], pool[j]] = [pool[j], pool[i]];
      }
      return {
        q: <>Si {c.fn}(α) = {c.val} dans un triangle rectangle, l'angle α mesure :</>,
        options: [`${c.angle}°`, `${pool[0]}°`, `${pool[1]}°`, `${pool[2]}°`],
        correct: 0,
        hint: `${c.fn}(${c.angle}°) = ${c.val}.`,
      };
    }},
    { key:'tri-4', q:'Le cosinus d\'un angle aigu est toujours :',
      options:['Supérieur à 1','Entre 0 et 1','Négatif','Égal à 1'], correct:1,
      hint:'Rapport de deux longueurs où l\'hypoténuse est la plus grande → 0 < cos < 1 pour un angle aigu.' },
    { key:'tri-5', gen: (rnd) => {
      // adj = hyp × cos(angle) — angle 60° (cos = 0,5 exact) pour résultats propres
      // Plage large d'hypoténuses paires pour variabilité
      const hyp = 2 * (2 + Math.floor(rnd() * 40)); // 4..82 pairs
      const adj = hyp / 2;
      const used = new Set([adj]);
      let w1 = hyp;                 // piège : confond adj/hyp
      let w2 = Math.round(hyp * 0.87 * 10) / 10; // √3/2 au lieu de 1/2
      let w3 = adj + 1;
      [w1, w2, w3] = [w1, w2, w3].map(x => { while (used.has(x)) x++; used.add(x); return x; });
      return {
        q: <>Dans un triangle rectangle, hypoténuse = {hyp} cm et angle = 60° (cos 60° = 0,5). Le côté adjacent mesure :</>,
        options: [`${adj} cm`, `${w1} cm`, `${w2} cm`, `${w3} cm`],
        correct: 0,
        hint: `adjacent = hyp × cos(60°) = ${hyp} × 0,5 = ${adj} cm.`,
      };
    }},
  ],

  grandeurs: [
    { key:'gra-1', gen: (rnd) => {
      // v = d/t — durées entières uniquement pour un affichage propre
      const speeds = [30, 45, 60, 80, 90, 100, 120];
      const v = speeds[Math.floor(rnd() * speeds.length)];
      const t = 2 + Math.floor(rnd() * 5); // 2..6 h
      const d = v * t;
      const used = new Set([v]);
      let w1 = v + 10, w2 = v - 5, w3 = Math.round(v / 2);
      [w1, w2, w3] = [w1, w2, w3].map(x => { while (used.has(x) || x <= 0) x++; used.add(x); return x; });
      return {
        q: `Un cycliste parcourt ${d} km en ${t} h. Sa vitesse moyenne est :`,
        options: [`${v} km/h`, `${w1} km/h`, `${w2} km/h`, `${w3} km/h`],
        correct: 0,
        hint: `v = d / t = ${d} / ${t} = ${v} km/h.`,
      };
    }},
    { key:'gra-2', gen: (rnd) => {
      // V pyramide = B*h/3
      const bases = [12, 15, 18, 24, 30];
      const B = bases[Math.floor(rnd() * bases.length)];
      const heights = [3, 4, 5, 6];
      const h = heights[Math.floor(rnd() * heights.length)];
      const good = B * h / 3;
      const w1 = B * h;
      const w2 = (B + h) / 3 | 0;
      const w3 = good + 5;
      const used = new Set([good, w1, w2, w3]);
      let w3f = w3;
      while (used.has(w3f)) w3f++;
      return {
        q: `Volume d'une pyramide de base ${B} cm² et de hauteur ${h} cm :`,
        options: [`${good} cm³`, `${w1} cm³`, `${w2} cm³`, `${w3f} cm³`],
        correct: 0,
        hint: `V = (B × h)/3 = (${B} × ${h})/3 = ${good} cm³.`,
      };
    }},
    { key:'gra-3', gen: (rnd) => {
      // Conversion L → cm³ (plage élargie, pas demi-entiers)
      const v = (1 + Math.floor(rnd() * 40)) / 2; // 0,5 à 20
      const good = v * 1000;
      const vStr = String(v).replace('.', ',');
      const goodStr = String(good).replace('.', ',');
      return {
        q: <>Convertis : <M>{vStr} L =</M></>,
        options: [`${goodStr} cm³`, `${String(v*10).replace('.',',')} cm³`, `${String(v*100).replace('.',',')} cm³`, `${String(v*10000).replace('.',',')} cm³`],
        correct: 0,
        hint: `1 L = 1000 cm³ → ${vStr} L = ${goodStr} cm³.`,
      };
    }},
    { key:'gra-4', gen: (rnd) => {
      // V cube — plage 2..15
      const a = 2 + Math.floor(rnd() * 14);
      const good = a * a * a;
      const used = new Set([good]);
      let w1 = 3 * a, w2 = a * a, w3 = 6 * a * a;
      [w1, w2, w3] = [w1, w2, w3].map(x => { while (used.has(x)) x++; used.add(x); return x; });
      return {
        q: `Volume d'un cube d'arête ${a} cm :`,
        options: [`${good} cm³`, `${w1} cm³`, `${w2} cm³`, `${w3} cm³`],
        correct: 0,
        hint: `V = a³ = ${a}×${a}×${a} = ${good}.`,
      };
    }},
    { key:'gra-5', gen: (rnd) => {
      // d = v × t avec durées rondes fractionnaires (15/30/45 min → 1/4, 1/2, 3/4 h)
      const cases = [
        { mins:15, frac:'1/4', tH:0.25 },
        { mins:30, frac:'1/2', tH:0.5 },
        { mins:45, frac:'3/4', tH:0.75 },
      ];
      const c = cases[Math.floor(rnd() * cases.length)];
      const speeds = [4, 6, 8, 10, 12, 16, 20];
      const v = speeds[Math.floor(rnd() * speeds.length)];
      const d = +(v * c.tH).toFixed(2);
      const fmt = (n: number | string) => String(n).replace('.', ',');
      const dStr = fmt(d);
      const used = new Set([dStr]);
      let w1 = fmt(+(v * c.mins / 100).toFixed(2));
      while (used.has(w1)) w1 = fmt(+(Number(w1.replace(',', '.')) + 0.5).toFixed(2)); used.add(w1);
      let w2 = fmt(v);
      while (used.has(w2)) w2 = fmt(Number(w2.replace(',', '.')) + 1); used.add(w2);
      let w3 = fmt(+(v + c.tH).toFixed(2));
      while (used.has(w3)) w3 = fmt(Number(w3.replace(',', '.')) + 1);
      return {
        q: `Un piéton marche à ${v} km/h pendant ${c.mins} min. Distance parcourue ?`,
        options: [`${dStr} km`, `${w1} km`, `${w2} km`, `${w3} km`],
        correct: 0,
        hint: `${c.mins} min = ${c.frac} h → ${v} × ${c.frac} = ${dStr} km.`,
      };
    }},
    { key:'gra-6', gen: (rnd) => {
      // Conversion m³ → dm³ (plage élargie + demi-unités)
      const v = (1 + Math.floor(rnd() * 40)) / 2; // 0,5 à 20
      const good = v * 1000;
      const vStr = String(v).replace('.', ',');
      const goodStr = String(good).replace('.', ',');
      return {
        q: <>Convertis : <M>{vStr} m³ =</M></>,
        options: [`${goodStr} dm³`, `${String(v*10).replace('.',',')} dm³`, `${String(v*100).replace('.',',')} dm³`, `${String(v*10000).replace('.',',')} dm³`],
        correct: 0,
        hint: `1 m³ = 1000 dm³ → ${vStr} m³ = ${goodStr} dm³.`,
      };
    }},
    { key:'gra-7', gen: (rnd) => {
      // d = v * t, t en minutes fractions of hour
      const speeds = [80, 100, 120, 160, 200];
      const v = speeds[Math.floor(rnd() * speeds.length)];
      const mins = [15, 20, 30, 45];
      const m = mins[Math.floor(rnd() * mins.length)];
      const t = m / 60;
      const d = v * t;
      const dStr = String(d);
      const used = new Set([dStr]);
      let w1s = String(v * m / 100);
      while (used.has(w1s)) w1s = String(Number(w1s) + 10); used.add(w1s);
      let w2s = String(v / 2);
      while (used.has(w2s)) w2s = String(Number(w2s) + 5); used.add(w2s);
      let w3s = String(v);
      while (used.has(w3s)) w3s = String(Number(w3s) + 20);
      return {
        q: `Un train roule à ${v} km/h. En ${m} min, il parcourt :`,
        options: [`${w1s} km`, `${dStr} km`, `${w2s} km`, `${w3s} km`],
        correct: 1,
        hint: `${m} min = ${t} h. d = ${v} × ${t} = ${d} km.`,
      };
    }},
    { key:'gra-8', gen: (rnd) => {
      // V pavé droit — dimensions tirées indépendamment pour variabilité maximale
      const l = 2 + Math.floor(rnd() * 10);
      const L = 2 + Math.floor(rnd() * 10);
      const h = 2 + Math.floor(rnd() * 10);
      const good = l * L * h;
      const used = new Set([good]);
      let w1 = 2 * (l * L + l * h + L * h);
      let w2 = l + L + h;
      let w3 = l * L;
      [w1, w2, w3] = [w1, w2, w3].map(x => { while (used.has(x)) x++; used.add(x); return x; });
      return {
        q: `Volume d'un pavé droit ${l}×${L}×${h} cm :`,
        options: [`${good} cm³`, `${w1} cm³`, `${w2} cm³`, `${w3} cm³`],
        correct: 0,
        hint: `V = ${l}×${L}×${h} = ${good} cm³.`,
      };
    }},
  ],

  proportion: [
    { key:'pro-1', gen: (rnd) => {
      // Solde en %
      const prices = [60, 80, 100, 120, 150, 200];
      const price = prices[Math.floor(rnd() * prices.length)];
      const discounts = [10, 20, 25, 30, 40, 50];
      const pct = discounts[Math.floor(rnd() * discounts.length)];
      const good = price * (100 - pct) / 100;
      const used = new Set([good]);
      let w1 = price - pct;
      while (used.has(w1)) w1++; used.add(w1);
      let w2 = price * pct / 100;
      while (used.has(w2)) w2++; used.add(w2);
      let w3 = good + 5;
      while (used.has(w3)) w3++;
      return {
        q: `Un article à ${price} € est soldé à −${pct} %. Son nouveau prix est :`,
        options: [`${good} €`, `${w1} €`, `${w2} €`, `${w3} €`],
        correct: 0,
        hint: `${price} × ${(100-pct)/100} = ${good} €.`,
      };
    }},
    { key:'pro-2', gen: (rnd) => {
      // Règle de trois : prix unitaire × quantité
      const unitPrices = [1.5, 2, 2.5, 3, 1.2];
      const up = unitPrices[Math.floor(rnd() * unitPrices.length)];
      const n1 = 3 + Math.floor(rnd() * 5);
      const n2 = n1 + 3 + Math.floor(rnd() * 6);
      const price1 = Math.round(up * n1 * 100) / 100;
      const good = Math.round(up * n2 * 100) / 100;
      const w1 = price1 + n2 - n1;
      const w2 = price1 * n2 / n1 + 1;
      const w3 = good + up;
      const used = new Set([good, w1, w2, w3]);
      let w3f = Math.round(w3 * 100) / 100;
      while (Math.abs(used.has(w3f) ? 1 : 0)) w3f += up;
      return {
        q: `${n1} stylos coûtent ${price1} €. Combien coûtent ${n2} stylos ?`,
        options: [`${good} €`, `${w1} €`, `${Math.round(w2)} €`, `${price1} €`],
        correct: 0,
        hint: `1 stylo = ${up} € → ${n2} × ${up} = ${good} €.`,
      };
    }},
    { key:'pro-3', q:'Un prix augmente de 20 %. Pour revenir au prix initial, il faut diminuer de :',
      options:['20 %','16,67 %','25 %','10 %'], correct:1,
      hint:'Multiplier par 1,2 puis par 1/1,2 = 0,833… soit −16,67 %.' },
    { key:'pro-4', gen: (rnd) => {
      // Échelle de carte
      const scales = [50000, 25000, 100000, 200000];
      const scale = scales[Math.floor(rnd() * scales.length)];
      const cms = [2, 3, 4, 5];
      const cm = cms[Math.floor(rnd() * cms.length)];
      const real_m = cm * scale / 100;
      const real_km = real_m / 1000;
      const w1 = real_km * 10;
      const w2 = real_km / 10;
      const w3 = real_km + 1;
      const used = new Set([real_km, w1, w2, w3]);
      let w3f = w3;
      while (used.has(w3f)) w3f++;
      return {
        q: `Sur une carte à l'échelle 1/${scale.toLocaleString('fr-FR')}, ${cm} cm représentent :`,
        options: [`${real_m} m`, `${real_km} km`, `${w1} km`, `${w2} km`],
        correct: 1,
        hint: `${cm} × ${scale} = ${cm * scale} cm = ${real_m} m = ${real_km} km.`,
      };
    }},
    { key:'pro-5', gen: (rnd) => {
      // Augmentation en %
      const prices = [80, 100, 120, 150, 200, 250];
      const price = prices[Math.floor(rnd() * prices.length)];
      const pcts = [10, 15, 20, 25, 30];
      const pct = pcts[Math.floor(rnd() * pcts.length)];
      const good = price * (100 + pct) / 100;
      const used = new Set([good]);
      // w1 : erreur classique — ajouter pct (nombre) au prix
      let w1 = price + pct;
      while (used.has(w1)) w1++; used.add(w1);
      // w2 : uniquement la hausse en €
      let w2 = price * pct / 100;
      while (used.has(w2)) w2++; used.add(w2);
      // w3 : proche de la bonne réponse
      let w3 = good + 2;
      while (used.has(w3)) w3++;
      return {
        q: `Un prix de ${price} € est augmenté de ${pct} %. Nouveau prix :`,
        options: [`${good} €`, `${w1} €`, `${w2} €`, `${w3} €`],
        correct: 0,
        hint: `${price} × ${(100+pct)/100} = ${good} €.`,
      };
    }},
  ],

  transfo: [
    { key:'tra-1', q:'Par symétrie centrale de centre O, un segment a pour image :',
      options:['Un segment de même longueur','Un segment plus court','Un point','Un cercle'], correct:0,
      hint:'Une symétrie centrale conserve les longueurs : l\'image d\'un segment est un segment de même longueur.' },
    { key:'tra-2', q:'Par translation, une figure est :',
      options:['Retournée','Déplacée sans déformation','Réduite','Tournée'], correct:1,
      hint:'Une translation glisse la figure sans la déformer, ni la tourner, ni la retourner.' },
    { key:'tra-3', q:'Par symétrie centrale, les angles sont :',
      options:['Doublés','Conservés','Inversés','Égaux à 180°'], correct:1,
      hint:'Les symétries (centrale et axiale) conservent les angles et les longueurs.' },
    { key:'tra-4', q:'Le centre de symétrie d\'un parallélogramme est :',
      options:['Un sommet','Le milieu d\'un côté','Le point d\'intersection des diagonales','Il n\'y en a pas'], correct:2,
      hint:'Les diagonales d\'un parallélogramme se coupent en leur milieu, qui est son centre de symétrie.' },
    { key:'tra-5', gen: (rnd) => {
      // Homothétie : longueur image = k × longueur originale
      const ks = [2, 3, 4, 0.5];
      const k = ks[Math.floor(rnd() * ks.length)];
      const lengths = [3, 4, 5, 6, 7, 8, 10];
      const L = lengths[Math.floor(rnd() * lengths.length)];
      const good = k * L;
      const w1 = L + k;
      const w2 = L / k;
      const w3 = good + k;
      const used = new Set([good, w1, w2, w3]);
      let w3f = w3;
      while (used.has(w3f)) w3f++;
      return {
        q: `Une homothétie de rapport ${k} transforme un segment de ${L} cm. L'image mesure :`,
        options: [`${good} cm`, `${w1} cm`, `${w2} cm`, `${w3f} cm`],
        correct: 0,
        hint: `Image = rapport × longueur = ${k} × ${L} = ${good} cm.`,
      };
    }},
  ],

  probas: [
    { key:'pb-1', gen: (rnd) => {
      // Moyenne d'une série de 5 entiers
      const mean = 8 + Math.floor(rnd() * 8);
      const vals: number[] = [];
      let sum = 0;
      for (let i = 0; i < 4; i++) {
        const v = mean - 4 + Math.floor(rnd() * 9);
        vals.push(v);
        sum += v;
      }
      const last = mean * 5 - sum;
      if (last < 1 || last > 20) {
        return {
          q: 'Moyenne de la série : 8 ; 12 ; 10 ; 14 ; 6',
          options: ['10','8','50','12'],
          correct: 0,
          hint: '(8+12+10+14+6)/5 = 50/5 = 10.',
        };
      }
      vals.push(last);
      const total = mean * 5;
      const w1 = mean - 1;
      const w2 = total;
      const w3 = mean + 1;
      return {
        q: `Moyenne de la série : ${vals.join(' ; ')}`,
        options: [String(mean), String(w1), String(w2), String(w3)],
        correct: 0,
        hint: `(${vals.join('+')})/5 = ${total}/5 = ${mean}.`,
      };
    }},
    { key:'pb-2', q:'On lance un dé équilibré à 6 faces. Probabilité d\'obtenir un nombre pair ?',
      options:[<F n="1" d="6"/>, <F n="1" d="3"/>, <F n="1" d="2"/>, <F n="2" d="3"/>], correct:2,
      hint:'3 cas favorables (2,4,6) sur 6 → 1/2.' },
    { key:'pb-3', gen: (rnd) => {
      // Urne colorée
      const reds = [2, 3, 4, 5];
      const r = reds[Math.floor(rnd() * reds.length)];
      const blues = [3, 4, 5, 6, 7];
      const b = blues[Math.floor(rnd() * blues.length)];
      const total = r + b;
      function gcd(a: number, b: number): number { return b === 0 ? a : gcd(b, a % b); }
      const g = gcd(r, total);
      const fn = r / g, fd = total / g;
      const goodStr = `${fn}/${fd}`;
      const used = new Set([goodStr]);
      // Distracteurs : rapport rouge/bleues, bleues/total, fraction proche
      const cands = [`${r}/${b}`, `${b}/${total}`, `${r}/${total}`, `${fn+1}/${fd}`, `${fn}/${fd+1}`, `${r+1}/${total}`, `${fn}/${fd+2}`];
      const opts = [goodStr];
      for (const c of cands) {
        if (!used.has(c) && c.includes('/') && !c.includes('undefined')) {
          used.add(c);
          opts.push(c);
          if (opts.length === 4) break;
        }
      }
      // Ensure 4 options
      let extra = fn + 2;
      while (opts.length < 4) { const s = `${extra}/${fd}`; if (!used.has(s)) { opts.push(s); used.add(s); } extra++; }
      return {
        q: `Urne : ${r} boules rouges, ${b} bleues. Probabilité de tirer une rouge ?`,
        options: opts,
        correct: 0,
        hint: `${r} rouges sur ${total} → ${goodStr}${g > 1 ? ` (simplifié)` : ''}.`,
      };
    }},
    { key:'pb-4', gen: (rnd) => {
      // Médiane d'une série triée de 7 valeurs — pas de progression arithmétique stricte
      const vals: number[] = [];
      let x = 1 + Math.floor(rnd() * 8);
      for (let i = 0; i < 7; i++) { vals.push(x); x += 1 + Math.floor(rnd() * 4); }
      const median = vals[3];
      const used = new Set([median]);
      let w1 = vals[2], w2 = vals[4];
      let w3 = Math.round(vals.reduce((a, b) => a + b, 0) / 7);
      [w1, w2, w3] = [w1, w2, w3].map(v => { while (used.has(v)) v++; used.add(v); return v; });
      return {
        q: `Médiane de la série triée : ${vals.join(' ; ')}`,
        options: [String(median), String(w1), String(w2), String(w3)],
        correct: 0,
        hint: `7 valeurs triées → médiane = 4ᵉ valeur = ${median}.`,
      };
    }},
    { key:'pb-5', gen: (rnd) => {
      // Étendue
      const vals: number[] = [];
      const n = 5 + Math.floor(rnd() * 3);
      for (let i = 0; i < n; i++) vals.push(2 + Math.floor(rnd() * 14));
      const mn = Math.min(...vals);
      const mx = Math.max(...vals);
      const good = mx - mn;
      const used = new Set([good]);
      let w1 = mx;
      while (used.has(w1)) w1++; used.add(w1);
      let w2 = mn;
      while (used.has(w2)) w2--; if (w2 <= 0) w2 = good + 3; while (used.has(w2)) w2++; used.add(w2);
      let w3 = good + 1;
      while (used.has(w3)) w3++;
      return {
        q: `Étendue de la série : ${vals.join(' ; ')}`,
        options: [String(good), String(w1), String(w2), String(w3)],
        correct: 0,
        hint: `Max − Min = ${mx} − ${mn} = ${good}.`,
      };
    }},
    { key:'pb-6', q:'On tire une carte dans un jeu de 32. Probabilité d\'un cœur ?',
      options:[<F n="1" d="4"/>, <F n="1" d="8"/>, <F n="1" d="32"/>, <F n="4" d="32"/>], correct:0,
      hint:'8 cœurs sur 32 cartes → 8/32 = 1/4.' },
    { key:'pb-7', q:'Une probabilité est toujours un nombre compris entre :',
      options:['−1 et 1','0 et 1','0 et 100','1 et 10'], correct:1,
      hint:'P(A) ∈ [0 ; 1]. 0 = événement impossible, 1 = événement certain. On peut l\'exprimer en % (0 % à 100 %).' },
    { key:'pb-8', q:'Si P(A) = 0,3, la probabilité de l\'événement contraire est :',
      options:['0,3','0,7','0,6','1,3'], correct:1,
      hint:'P(non A) = 1 − P(A) = 1 − 0,3 = 0,7.' },
    { key:'pb-9', gen: (rnd) => {
      // Dé à N faces, probabilité d'un événement
      const faces = [6, 8, 10];
      const n = faces[Math.floor(rnd() * faces.length)];
      const favs = [1, 2, 3, 4];
      const f = favs[Math.floor(rnd() * favs.length)];
      if (f >= n) return { q: 'On lance un dé à 6 faces. P(obtenir 1 ou 2) =', options:['1/6','1/3','1/2','2/6'], correct:1, hint:'2 cas favorables sur 6 → 1/3.' };
      function gcd(a: number, b: number): number { return b === 0 ? a : gcd(b, a % b); }
      const g = gcd(f, n);
      const fn2 = f / g, fd2 = n / g;
      const goodStr = `${fn2}/${fd2}`;
      const used = new Set([goodStr]);
      const cands = [`${f}/${n}`, `${fn2+1}/${fd2}`, `${fn2}/${fd2+1}`, `${n-f}/${n}`];
      const opts = [goodStr];
      for (const c of cands) { if (!used.has(c) && c !== goodStr) { used.add(c); opts.push(c); if (opts.length === 4) break; } }
      let ex = fn2 + 2;
      while (opts.length < 4) { const s = `${ex}/${fd2}`; if (!used.has(s)) { opts.push(s); used.add(s); } ex++; }
      return {
        q: `On lance un dé équilibré à ${n} faces. Probabilité d'obtenir un résultat ≤ ${f} :`,
        options: opts,
        correct: 0,
        hint: `${f} cas favorables sur ${n} → ${goodStr}${g>1 ? ' (simplifié)' : ''}.`,
      };
    }},
    { key:'pb-10', gen: (rnd) => {
      // Fréquence expérimentale : nombre de succès / total lancers
      const total = [20, 25, 40, 50][Math.floor(rnd() * 4)];
      const heads = [8, 10, 12, 15, 20][Math.floor(rnd() * 5)];
      if (heads >= total) return { q: 'Sur 50 lancers, 20 fois pile. Fréquence pile :', options:['0,4','0,2','0,5','20'], correct:0, hint:'20/50 = 0,4 = 40 %.' };
      const freqNum = heads, freqDen = total;
      function gcd(a: number, b: number): number { return b === 0 ? a : gcd(b, a % b); }
      const g = gcd(freqNum, freqDen);
      const fn2 = freqNum / g, fd2 = freqDen / g;
      const goodStr = `${fn2}/${fd2}`;
      const used = new Set([goodStr]);
      let w1 = `${freqNum}/${freqDen}`; if (used.has(w1)) w1 = `${fn2+1}/${fd2}`; used.add(w1);
      let w2 = `${total - heads}/${total}`; if (used.has(w2)) w2 = `${fn2}/${fd2+1}`; used.add(w2);
      let w3 = `${fn2+1}/${fd2+1}`; while (used.has(w3)) w3 = `${fn2+2}/${fd2}`;
      return {
        q: `Sur ${total} lancers d'une pièce, on obtient ${heads} fois pile. Fréquence de pile :`,
        options: [goodStr, w1, w2, w3],
        correct: 0,
        hint: `${heads} ÷ ${total} = ${goodStr}${g>1 ? ' (simplifié)' : ''}.`,
      };
    }},
    { key:'pb-11', gen: (rnd) => {
      // Événement contraire
      const nums = [1, 2, 3, 4]; const dens = [5, 8, 10];
      const n = nums[Math.floor(rnd() * nums.length)];
      const d = dens[Math.floor(rnd() * dens.length)];
      if (n >= d || n * 2 === d) return { q: 'P(A) = 3/10. P(non A) =', options:['7/10','3/10','1/10','6/10'], correct:0, hint:'P(non A) = 1 − 3/10 = 7/10.' };
      const goodN = d - n, goodD = d;
      const used = new Set([`${goodN}/${goodD}`]);
      const pickFrac = (candidates: string[]) => {
        for (const c of candidates) if (!used.has(c)) { used.add(c); return c; }
        let i = 1; while (used.has(`${goodN+i}/${goodD}`)) i++; const c = `${goodN+i}/${goodD}`; used.add(c); return c;
      };
      const o1 = pickFrac([`${n}/${d}`, `${n+1}/${d}`]);
      const o2 = pickFrac([`1/${d}`, `2/${d}`, `1/${d+1}`]);
      const o3 = pickFrac([`${goodN}/${d+1}`, `${goodN+1}/${d+1}`]);
      return {
        q: `P(A) = ${n}/${d}. P(non A) =`,
        options: [`${goodN}/${goodD}`, o1, o2, o3],
        correct: 0,
        hint: `P(non A) = 1 − ${n}/${d} = ${d-n}/${d}.`,
      };
    }},
    { key:'pb-12', gen: (rnd) => {
      // Urne, deux couleurs, tirer une bille
      const rouge = 2 + Math.floor(rnd() * 5);
      const bleue = 3 + Math.floor(rnd() * 6);
      const verte = 1 + Math.floor(rnd() * 3);
      const total = rouge + bleue + verte;
      function gcd(a: number, b: number): number { return b === 0 ? a : gcd(b, a % b); }
      const g = gcd(bleue, total);
      const fn2 = bleue / g, fd2 = total / g;
      const goodStr = `${fn2}/${fd2}`;
      const used = new Set([goodStr]);
      const cands = [`${rouge}/${total}`, `${verte}/${total}`, `${bleue}/${total}`, `${fn2+1}/${fd2}`, `${fn2}/${fd2+1}`];
      const opts = [goodStr];
      for (const c of cands) { if (!used.has(c)) { used.add(c); opts.push(c); if (opts.length === 4) break; } }
      let ex = fn2 + 2;
      while (opts.length < 4) { const s = `${ex}/${fd2}`; if (!used.has(s)) { opts.push(s); used.add(s); } ex++; }
      return {
        q: `Urne : ${rouge} rouges, ${bleue} bleues, ${verte} vertes. Probabilité de tirer une bleue :`,
        options: opts,
        correct: 0,
        hint: `${bleue} bleues sur ${total} → ${goodStr}${g>1 ? ' (simplifié)' : ''}.`,
      };
    }},
    { key:'pb-13', gen: (rnd) => {
      // Lire une fréquence dans un tableau (données brutes → %)
      const total = [100, 200, 50][Math.floor(rnd() * 3)];
      const n = 10 + Math.floor(rnd() * 8) * 5; // multiple de 5
      if (n >= total) return { q: 'Sur 100 élèves, 45 ont un chat. Fréquence (%) :', options:['45 %','55 %','4,5 %','450 %'], correct:0, hint:'45/100 = 45 %.' };
      const pct = Math.round(n / total * 100);
      const used = new Set([pct]);
      let w1 = 100 - pct; while (used.has(w1)) w1++; used.add(w1);
      let w2 = pct + 10; while (used.has(w2)) w2 += 5; used.add(w2);
      let w3 = pct - 5; while (used.has(w3) || w3 <= 0) w3 += 5; used.add(w3);
      return {
        q: `Sur ${total} élèves interrogés, ${n} aiment le sport. Fréquence :`,
        options: [`${pct} %`, `${w1} %`, `${w2} %`, `${w3} %`],
        correct: 0,
        hint: `${n} ÷ ${total} × 100 = ${pct} %.`,
      };
    }},
  ],
  },
  PICK: {
  relatifs: 3, fractions: 3, puissances: 3, litteral: 5, pythagore: 3,
  thales: 2, trigo: 2, transfo: 2, grandeurs: 3, proportion: 2, probas: 2,
  },
  PLANS: {
    relatifs: {
      'non-acquis': ['Revoir la règle des signes (+ et −) pour addition et multiplication', 'Refaire 15 calculs par jour pendant 1 semaine', 'S\'entraîner avec des jeux de cartes (signe +/−)'],
      'fragile':    ['Consolider par 10 exercices variés (parenthèses imbriquées)', 'Attention particulière aux soustractions de nombres négatifs']
    },
    fractions: {
      'non-acquis': ['Reprendre la notion de dénominateur commun (multiples)', 'Mémoriser : diviser = multiplier par l\'inverse', '5 exercices par jour sur 2 semaines'],
      'fragile':    ['Travailler la simplification avant de calculer', 'Exercices mixtes + et × avec 3 fractions']
    },
    puissances: {
      'non-acquis': ['Revoir la définition : aⁿ = a × a × … × a (n fois)', 'Apprendre par cœur les règles : aⁿ × aᵐ = aⁿ⁺ᵐ', 'Écriture scientifique : s\'entraîner sur 20 exemples'],
      'fragile':    ['Focus sur les puissances négatives (10⁻ⁿ) et l\'écriture scientifique']
    },
    litteral: {
      'non-acquis': ['PRIORITÉ ABSOLUE : revoir la distributivité k(a+b) = ka + kb', 'Progression : réduction → développement → équations', 'Au moins 30 min/jour pendant 3 semaines', 'Méthode : isoler x étape par étape'],
      'fragile':    ['Équations avec x des deux côtés', 'Vérifier chaque solution en remplaçant x']
    },
    pythagore: {
      'non-acquis': ['Identifier l\'hypoténuse (face à l\'angle droit)', 'Mémoriser la formule et sa réciproque', 'Triplets 3-4-5 et 5-12-13 par cœur', '3 exercices par jour sur 2 semaines'],
      'fragile':    ['Bien distinguer théorème direct et réciproque', 'Problèmes concrets : échelle, diagonale, etc.']
    },
    thales: {
      'non-acquis': ['Revoir la configuration : parallèles + sécantes', 'Écrire les 3 rapports égaux', 'Attention à l\'ordre des points (AM/AB, pas AM/AN)'],
      'fragile':    ['Travailler la configuration "papillon" en anticipation de la 3ème']
    },
    trigo: {
      'non-acquis': ['Mémoriser CAH : Cos = Adjacent / Hypoténuse', 'Identifier côté opposé/adjacent selon l\'angle', 'Utiliser la calculatrice : touches cos et cos⁻¹'],
      'fragile':    ['Distinguer "calculer un côté" vs "calculer un angle"']
    },
    grandeurs: {
      'non-acquis': ['V cube, V pavé, V cylindre, V pyramide, V cône par cœur', 'Tableau de conversions : L / dm³ / cm³ / mL', 'Formule v = d/t et ses dérivées'],
      'fragile':    ['Attention aux unités de temps (1h30 = 1,5h ≠ 1,3h)']
    },
    proportion: {
      'non-acquis': ['Revoir le produit en croix', 'Pourcentages : augmentation/diminution', 'Vitesse, échelle, situations concrètes'],
      'fragile':    ['Remises successives et problèmes à plusieurs étapes']
    },
    transfo: {
      'non-acquis': ['Revoir les 3 transformations : symétrie centrale, symétrie axiale, translation', 'Retenir : toutes conservent les longueurs et les angles', 'Identifier le centre / l\'axe / le vecteur avant de construire'],
      'fragile':    ['Construire l\'image par symétrie centrale (milieu) puis par translation', 'Reconnaître une figure qui a un centre ou un axe de symétrie']
    },
    probas: {
      'non-acquis': ['Moyenne simple', 'Probabilité = cas favorables / cas possibles', 'Événements simples : dé, pièce, urne'],
      'fragile':    ['Arbres de probabilités (préparation 3ème)']
    },
  },
};
