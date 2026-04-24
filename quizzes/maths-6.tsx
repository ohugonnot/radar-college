// Source éditable — quiz maths-6. Régénéré automatiquement dans index.html via build.sh.
window.ALL_QUIZZES['maths-6'] = {
  SEARCH_SITES: 'site:maths-et-tiques.fr OR site:fr.khanacademy.org OR site:lumni.fr',
  YT_SUFFIX: 'Yvan Monka',
  SUMMER_TOPIC: 'maths',
  SUBJECT: { id:'maths-6', name:'Mathématiques', short:'Maths', level:'Fin de 6ème', mark:'∑', tagline:'Évaluation diagnostique' },
  DOMAINS: {
    numeration: { id:'numeration', name:'Nombres entiers & décimaux',   short:'Nombres',   coef:3, color:'#0f5e6b', icon:'N',  search:'nombres entiers decimaux 6eme' },
    operations: { id:'operations', name:'Opérations (+, −, ×, ÷)',      short:'Opérations',coef:4, color:'#0d7a6f', icon:'+',  search:'operations calcul 6eme' },
    fractions:  { id:'fractions',  name:'Fractions (intro, partage)',   short:'Fractions', coef:3, color:'#7c3aed', icon:'⅓',  search:'fractions 6eme' },
    proportion: { id:'proportion', name:'Proportionnalité',             short:'Proportion',coef:2, color:'#b97a0e', icon:'%',  search:'proportionnalite regle trois 6eme' },
    angles:     { id:'angles',     name:'Angles (mesure, types)',       short:'Angles',    coef:2, color:'#c2410c', icon:'∠',  search:'angles 6eme' },
    geometrie:  { id:'geometrie',  name:'Figures géométriques',         short:'Géométrie', coef:3, color:'#a01b34', icon:'△',  search:'triangles quadrilateres 6eme' },
    aires:      { id:'aires',      name:'Périmètres & aires',           short:'Aires',     coef:3, color:'#166a39', icon:'□',  search:'perimetre aire 6eme' },
    symetrie:   { id:'symetrie',   name:'Symétrie axiale',              short:'Symétrie',  coef:2, color:'#1e7a8a', icon:'↔',  search:'symetrie axiale 6eme' },
    unites:     { id:'unites',     name:'Unités & conversions',         short:'Unités',    coef:2, color:'#c4307a', icon:'u',  search:'conversions unites 6eme' },
  },
  RESOURCES: [
    { label:'Maths et Tiques 6ème',  author:'Yvan Monka (gratuit)', url:'https://www.maths-et-tiques.fr/index.php/cours-en-ligne/cours-sixieme' },
    { label:'Khan Academy 6ème',     author:'Cours + exos',          url:'https://fr.khanacademy.org/math/cycle-3-6eme-v1' },
    { label:'Lumni — Maths 6ème',    author:'France TV éducation',   url:'https://www.lumni.fr/college/sixieme/mathematiques' },
    { label:'Sésamath',              author:'Manuel + exos',         url:'https://manuel.sesamath.net/' },
  ],
  POOL: {
    numeration: [
      // num-1 : position d'un chiffre dans un nombre (paramétrique)
      { key:'num-1', gen: (rnd) => {
        const d3 = 1 + Math.floor(rnd() * 9); // milliers
        const d2 = 1 + Math.floor(rnd() * 9); // centaines
        const d1 = 1 + Math.floor(rnd() * 9); // dizaines
        const d0 = 1 + Math.floor(rnd() * 9); // unités
        // Choisir une position : centaines(0), dizaines(1), milliers(2)
        const posIdx = Math.floor(rnd() * 3);
        const configs = [
          { digit: d2, name: 'centaines',  others: ['unités','dizaines','milliers'] },
          { digit: d1, name: 'dizaines',   others: ['unités','centaines','milliers'] },
          { digit: d3, name: 'milliers',   others: ['unités','dizaines','centaines'] },
        ];
        const pos = configs[posIdx];
        const nb = d3 * 1000 + d2 * 100 + d1 * 10 + d0;
        const goodLabel = `${pos.digit} ${pos.name}`;
        const opts = [goodLabel, `${pos.digit} ${pos.others[0]}`, `${pos.digit} ${pos.others[1]}`, `${pos.digit} ${pos.others[2]}`];
        return {
          q: <>Que vaut le chiffre {pos.digit} dans le nombre <M>{nb}</M> ?</>,
          options: opts,
          correct: 0,
          hint: `${pos.digit} est en position des ${pos.name} dans ${nb}.`,
        };
      } },
      // num-2 : comparaison de décimaux proches (paramétrique)
      { key:'num-2', gen: (rnd) => {
        const ent = 10 + Math.floor(rnd() * 20);
        const a = ent + 0.5;
        const b = ent + 0.45;
        const c = ent + 0.05;
        const d = ent + 0.4;
        const fmt = v => String(v).replace('.', ',');
        return {
          q: <>Quel nombre est le plus grand ?</>,
          options: [fmt(a), fmt(b), fmt(c), fmt(d)],
          correct: 0,
          hint: `On compare chiffre par chiffre : ${fmt(a)} > ${fmt(b)} > ${fmt(d)} > ${fmt(c)}.`,
        };
      } },
      // num-3 : statique — décomposition correcte de 3,14
      { key:'num-3', q:<>Dans <M>3,14</M>, le chiffre <M>4</M> représente :</>, options:['4 dixièmes','4 centièmes','4 unités','4 dizaines'], correct:1, hint:'Après la virgule : 1ᵉʳ rang = dixièmes, 2ᵉ rang = centièmes. Donc 4 = 4 centièmes (4/100).' },
      // num-4 : statique — piège 7,2 = 7,20 (logique avec zéros)
      { key:'num-4', q:'Range du plus petit au plus grand : 7,2 ; 7,02 ; 7,20 ; 7,002', options:['7,002 < 7,02 < 7,2 = 7,20','7,002 < 7,02 = 7,2 < 7,20','7,02 < 7,002 < 7,20 < 7,2','7,2 < 7,20 < 7,02 < 7,002'], correct:0, hint:'7,2 et 7,20 sont égaux. 7,002 est le plus petit.' },
      // num-5 : statique — 0,9 vs 0,09 (exemple canonique)
      { key:'num-5', q:'Quel est le plus grand : 0,9 ou 0,09 ?', options:['0,9','0,09','Ils sont égaux','On ne peut pas comparer'], correct:0, hint:'0,9 = 9/10 ; 0,09 = 9/100. 0,9 est 10 fois plus grand !' },
      // num-6 : décomposition additive d'un nombre (paramétrique)
      { key:'num-6', gen: (rnd) => {
        const mill = 1 + Math.floor(rnd() * 8); // 1..8
        const cent = 1 + Math.floor(rnd() * 8); // 1..8
        const unit = 1 + Math.floor(rnd() * 9); // 1..9
        const good = mill * 1000 + cent * 100 + unit;
        const d1 = mill * 100 + cent * 10 + unit;   // décalage d'un rang
        const d2 = mill * 1000 + cent * 10 + unit;  // centaines en position dizaines
        const d3 = mill * 1000 + cent * 100 + unit + 10; // +10 unités
        return {
          q: <><M>{mill} × 1000 + {cent} × 100 + {unit}</M> vaut :</>,
          options: [String(good), String(d1), String(d2), String(d3)],
          correct: 0,
          hint: `${mill} milliers + ${cent} centaines + ${unit} unités = ${good}.`,
        };
      } },
      // num-7 : chiffre des dizaines dans un nombre à 4 chiffres (paramétrique)
      // Correction : forcer que les 4 chiffres soient tous distincts pour éviter les doublons dans les options
      { key:'num-7', gen: (rnd) => {
        // Tirage de 4 chiffres distincts entre 1 et 9
        const pool = [1,2,3,4,5,6,7,8,9];
        // Mélange partiel (4 premiers après shuffle)
        for (let i = 0; i < 4; i++) {
          const j = i + Math.floor(rnd() * (pool.length - i));
          const tmp = pool[i]; pool[i] = pool[j]; pool[j] = tmp;
        }
        const mill = pool[0]; const cent = pool[1]; const diz = pool[2]; const unit = pool[3];
        const nb = mill * 1000 + cent * 100 + diz * 10 + unit;
        return {
          q: <>Quel est le chiffre des dizaines dans {nb} ?</>,
          options: [String(mill), String(cent), String(diz), String(unit)],
          correct: 2,
          hint: `Position depuis la droite : unités=${unit}, dizaines=${diz}, centaines=${cent}, milliers=${mill}.`,
        };
      } },
      // num-8 : encadrement d'un décimal entre deux entiers consécutifs (paramétrique)
      { key:'num-8', gen: (rnd) => {
        const ent = 2 + Math.floor(rnd() * 18);
        const dec = 1 + Math.floor(rnd() * 8);
        const val = ent + dec / 10;
        const v = String(val).replace('.', ',');
        const good = `${ent} < ${v} < ${ent + 1}`;
        const d1   = `${ent - 1} < ${v} < ${ent}`;
        const d2   = `${ent} < ${v} < ${ent + 2}`;
        const d3   = `${ent + 1} < ${v} < ${ent + 2}`;
        return {
          q: <>Encadre {v} entre deux entiers consécutifs :</>,
          options: [good, d1, d2, d3],
          correct: 0,
          hint: `${v} est entre ${ent} et ${ent + 1}.`,
        };
      } },
      // num-9 : compter les chiffres après la virgule (paramétrique)
      { key:'num-9', gen: (rnd) => {
        const ent = 2 + Math.floor(rnd() * 90);
        const nbDec = 2 + Math.floor(rnd() * 2); // 2 ou 3 chiffres
        const d1 = 1 + Math.floor(rnd() * 9);
        const d2 = 1 + Math.floor(rnd() * 9); // ≠0 pour éviter ambiguïté
        const d3 = 1 + Math.floor(rnd() * 9);
        let decimStr: string;
        if (nbDec === 2) decimStr = `${ent},${d1}${d2}`;
        else decimStr = `${ent},${d1}${d2}${d3}`;
        const good = nbDec;
        return {
          q: <>Combien y a-t-il de chiffres après la virgule dans <M>{decimStr}</M> ?</>,
          options: [String(good - 1), String(good), String(good + 1), String(good + 2)],
          correct: 1,
          hint: `On compte les chiffres après la virgule dans ${decimStr} : il y en a ${good}.`,
        };
      } },
      // num-10 : reconnaître la décomposition correcte d'un nombre avec zéro intercalé (paramétrique)
      { key:'num-10', gen: (rnd) => {
        const mill = 1 + Math.floor(rnd() * 8);
        const diz  = 1 + Math.floor(rnd() * 9);
        const unit = 1 + Math.floor(rnd() * 9);
        const nb = mill * 1000 + diz * 10 + unit; // centaines = 0
        const good   = `${mill}×1000 + ${diz}×10 + ${unit}`;
        const wrong1 = `${mill}×100 + ${diz}×10 + ${unit}`;
        const wrong2 = `${mill}×1000 + ${diz}×100 + ${unit}`;
        const wrong3 = `${mill}×1000 + ${diz * 10 + unit}`;
        return {
          q: <>Quelle décomposition est correcte pour {nb} ?</>,
          options: [good, wrong1, wrong2, wrong3],
          correct: 0,
          hint: `${mill} milliers, 0 centaine, ${diz} dizaines, ${unit} unités = ${nb}.`,
        };
      } },
      // num-11 : arrondir un décimal au dixième (paramétrique)
      { key:'num-11', gen: (rnd) => {
        const ent = 2 + Math.floor(rnd() * 18);
        const centi = 1 + Math.floor(rnd() * 9); // 1..9 centièmes
        const val = ent + centi / 100;
        const rounded = centi < 5 ? ent + Math.floor(centi / 10) / 10 : ent + (Math.floor(centi / 10) + 1) / 10;
        const v = String(val).replace('.', ',');
        // Distracteurs communs : arrondir au centième, ne pas arrondir, mauvaise règle
        const w1 = v;   // non arrondi
        const w2 = String(ent + (centi < 5 ? 0 : 1)).replace('.', ','); // arrondi à l'unité
        const w3Num = centi < 5 ? rounded + 0.1 : rounded - 0.1;
        const w3 = String(Math.round(w3Num * 10) / 10).replace('.', ',');
        const goodStr = String(rounded).replace('.', ',');
        const opts = [goodStr, w1, w2, w3];
        const seen = new Set(opts);
        // Fallback si doublons
        if (seen.size < 4) return { q: 'Arrondir 3,47 au dixième :', options:['3,5','3,4','3,0','3,47'], correct:0, hint:'7 centièmes ≥ 5 → on arrondit au dixième supérieur : 3,5.' };
        return {
          q: <>Arrondi de {v} au dixième :</>,
          options: opts,
          correct: 0,
          hint: `${centi} centièmes : ${centi >= 5 ? '≥ 5 → arrondi supérieur' : '< 5 → arrondi inférieur'}. Résultat : ${goodStr}.`,
        };
      } },
      // num-12 : multiplication par 10, 100, 1000
      { key:'num-12', gen: (rnd) => {
        const base = 1 + Math.floor(rnd() * 15);
        const mults = [10, 100, 1000];
        const m = mults[Math.floor(rnd() * mults.length)];
        const good = base * m;
        const used = new Set([good]);
        let w2 = base + m; while (used.has(w2)) w2++; used.add(w2);
        let w3 = good + base; while (used.has(w3)) w3++; used.add(w3);
        let w4 = good * 10; while (used.has(w4)) w4 += good;
        return {
          q: <><M>{base} × {m} =</M></>,
          options: [String(good), String(w2), String(w3), String(w4)],
          correct: 0,
          hint: `Multiplier par ${m} = déplacer la virgule de ${String(m).length - 1} rang(s) vers la droite : ${good}.`,
        };
      } },
      // num-13 : division par 10, 100 (décimaux)
      { key:'num-13', gen: (rnd) => {
        const base = 10 + Math.floor(rnd() * 90);  // 10..99
        const divs = [10, 100];
        const d = divs[Math.floor(rnd() * divs.length)];
        const good = base / d;
        const goodStr = String(good).replace('.', ',');
        const w1Str = String(base * d).replace('.', ',');
        const w2Str = String(Math.round(good + 1)).replace('.', ',');
        const w3Str = d === 10 ? String(base / 100).replace('.', ',') : String(base / 10).replace('.', ',');
        const seen = new Set([goodStr, w1Str, w2Str, w3Str]);
        if (seen.size < 4) return { q: '45 ÷ 10 =', options:['4,5','0,45','450','45'], correct:0, hint:'Diviser par 10 = déplacer la virgule d\'un rang à gauche : 4,5.' };
        return {
          q: <><M>{base} ÷ {d} =</M></>,
          options: [goodStr, w1Str, w2Str, w3Str],
          correct: 0,
          hint: `Diviser par ${d} = déplacer la virgule de ${String(d).length - 1} rang(s) à gauche : ${goodStr}.`,
        };
      } },
      // num-14 : valeur d'un chiffre en position décimale
      { key:'num-14', gen: (rnd) => {
        // Tire 3 chiffres distincts et non nuls pour éviter les options
        // doublons dans les distracteurs (ent, dix, cent).
        const pool = [1,2,3,4,5,6,7,8,9];
        // Fisher-Yates partiel basé sur rnd()
        for (let i = pool.length - 1; i > 0; i--) {
          const j = Math.floor(rnd() * (i + 1));
          [pool[i], pool[j]] = [pool[j], pool[i]];
        }
        const ent = pool[0], dix = pool[1], cent = pool[2];
        const nb = ent + dix / 10 + cent / 100;
        const nbStr = String(nb).replace('.', ',');
        return {
          q: <>Dans {nbStr}, le chiffre des dixièmes est :</>,
          options: [String(ent), String(dix), String(cent), '0'],
          correct: 1,
          hint: `${nbStr} = ${ent} + ${dix}/10 + ${cent}/100. Le chiffre des dixièmes est ${dix}.`,
        };
      } },
      // num-15 : intercaler un décimal (lequel est entre deux valeurs)
      { key:'num-15', gen: (rnd) => {
        const ent = 2 + Math.floor(rnd() * 18);
        const good = ent + 0.5;
        const bad1  = ent + 1.5;
        const bad2  = ent - 0.5;
        const bad3  = ent + 1;
        const fmt = (n: number) => String(n).replace('.', ',');
        return {
          q: <>Quel nombre est compris entre {ent} et {ent + 1} ?</>,
          options: [fmt(good), fmt(bad1), fmt(bad2), String(bad3)],
          correct: 0,
          hint: `${fmt(good)} est entre ${ent} et ${ent + 1}. ${fmt(bad1)} et ${fmt(bad2)} sont hors intervalle.`,
        };
      } },
      // num-16 : comparer deux décimaux proches (3 chiffres après virgule)
      { key:'num-16', gen: (rnd) => {
        const ent = 1 + Math.floor(rnd() * 9);
        const a = ent + 0.001 * (1 + Math.floor(rnd() * 9)); // ent,001 à ent,009
        const b = a + 0.010;                                  // b = a + 1 centième
        const c = a + 0.100;                                  // c = a + 1 dixième
        const fmtN = (n: number) => {
          const s = n.toFixed(3);
          return s.replace('.', ',');
        };
        return {
          q: <>Quel nombre est le plus grand : <M>{fmtN(a)}</M> ou <M>{fmtN(c)}</M> ?</>,
          options: [fmtN(c), fmtN(a), 'Ils sont égaux', 'Impossible à comparer'],
          correct: 0,
          hint: `${fmtN(c)} > ${fmtN(a)} car le chiffre des dixièmes est plus grand.`,
        };
      } },
      // num-17 : ordre de grandeur (arrondir à l'unité)
      { key:'num-17', gen: (rnd) => {
        const ent = 10 + Math.floor(rnd() * 40);
        const dec = 1 + Math.floor(rnd() * 8);
        const val = ent + dec / 10;
        const rounded = dec < 5 ? ent : ent + 1;
        const fmt = String(val).replace('.', ',');
        const used = new Set([rounded]);
        let w2 = rounded + 1; while (used.has(w2)) w2++; used.add(w2);
        let w3 = rounded - 1; while (used.has(w3) || w3 < 0) w3 += 2; used.add(w3);
        let w4 = ent + 5; while (used.has(w4)) w4++;
        return {
          q: <>Arrondi de {fmt} à l'unité :</>,
          options: [String(rounded), String(w2), String(w3), String(w4)],
          correct: 0,
          hint: `${dec} dixièmes : ${dec >= 5 ? '≥ 5 → arrondi à l\'unité supérieure' : '< 5 → arrondi à l\'unité inférieure'}. Résultat : ${rounded}.`,
        };
      } },
      // num-18 : chiffre des centaines dans un grand nombre
      { key:'num-18', gen: (rnd) => {
        const pool = [1,2,3,4,5,6,7,8,9];
        for (let i = 0; i < 5; i++) {
          const j = i + Math.floor(rnd() * (pool.length - i));
          const tmp = pool[i]; pool[i] = pool[j]; pool[j] = tmp;
        }
        const [mill, cent, diz, unit] = pool;
        const nb = mill * 1000 + cent * 100 + diz * 10 + unit;
        return {
          q: <>Quel est le chiffre des centaines dans {nb} ?</>,
          options: [String(mill), String(cent), String(diz), String(unit)],
          correct: 1,
          hint: `Position depuis la droite : unités=${unit}, dizaines=${diz}, centaines=${cent}, milliers=${mill}.`,
        };
      } },
      // num-19 : décomposer un nombre en écriture développée
      { key:'num-19', gen: (rnd) => {
        const mill = 1 + Math.floor(rnd() * 9);
        const cent = 1 + Math.floor(rnd() * 9);
        const diz  = 1 + Math.floor(rnd() * 9);
        const unit = 1 + Math.floor(rnd() * 9);
        const nb = mill * 1000 + cent * 100 + diz * 10 + unit;
        const good   = `${mill * 1000} + ${cent * 100} + ${diz * 10} + ${unit}`;
        const wrong1 = `${mill} + ${cent} + ${diz} + ${unit}`;    // oublie les puissances
        const wrong2 = `${mill * 100} + ${cent * 10} + ${diz} + ${unit}`; // décalage d'un rang
        const wrong3 = `${mill * 1000} + ${cent} + ${diz} + ${unit}`;     // oublie ×100 et ×10
        return {
          q: <>Écriture développée de {nb} :</>,
          options: [good, wrong1, wrong2, wrong3],
          correct: 0,
          hint: `${nb} = ${mill}×1000 + ${cent}×100 + ${diz}×10 + ${unit} = ${good}.`,
        };
      } },
    ],
    operations: [
      { key:'ope-1', gen: (rnd) => {
        const A = 20 + Math.floor(rnd() * 60);
        const B = 3 + Math.floor(rnd() * 6);
        const C = 3 + Math.floor(rnd() * 6);
        const good = A + B * C;
        const piege = (A + B) * C;
        let d2 = A + B + C;
        let d3 = A * B + C;
        const used = new Set([good, piege]);
        while (used.has(d2)) { d2++; } used.add(d2);
        while (used.has(d3)) { d3++; } used.add(d3);
        return {
          q: <>Calcule : <M>{A} + {B} × {C} =</M></>,
          options: [String(good), String(piege), String(d2), String(d3)],
          correct: 0,
          hint: `Priorité : × avant + → ${B}×${C}=${B*C}, puis ${A}+${B*C}=${good}.`,
        };
      } },
      // ope-2 : calcul avec parenthèses (paramétrique)
      { key:'ope-2', gen: (rnd) => {
        const A = 5 + Math.floor(rnd() * 15);
        const B = 3 + Math.floor(rnd() * 12);
        const C = 2 + Math.floor(rnd() * 8);
        const inner = A + B;
        const good = inner * C;
        const piege = A + B * C;   // sans parenthèses
        const d2 = A * C + B;
        const d3 = A + B + C;
        const used = new Set([good, piege, d2, d3]);
        // Si doublons : ajuster d2/d3
        let v2 = d2; while (used.has(v2) || v2 === good) { v2++; } const final_d2 = v2;
        const used2 = new Set([good, piege, final_d2]);
        let v3 = d3; while (used2.has(v3)) { v3++; }
        return {
          q: <>Calcule : <M>({A} + {B}) × {C} =</M></>,
          options: [String(good), String(piege), String(final_d2), String(v3)],
          correct: 0,
          hint: `Parenthèses d'abord : ${A}+${B}=${inner}, puis ${inner}×${C}=${good}.`,
        };
      } },
      // ope-3 : division euclidienne (paramétrique)
      { key:'ope-3', gen: (rnd) => {
        const div = 3 + Math.floor(rnd() * 9);       // diviseur 3..11
        const q   = 4 + Math.floor(rnd() * 12);      // quotient 4..15
        const r   = 1 + Math.floor(rnd() * (div-1)); // reste 1..div-1
        const nb  = div * q + r;
        const good   = `q=${q} r=${r}`;
        const wrong1 = `q=${q} r=${r+1}`;
        const wrong2 = `q=${q+1} r=${r > 0 ? r-1 : r+1}`;
        const wrong3 = `q=${q-1} r=${r + div}`;
        return {
          q: <>Division euclidienne de {nb} par {div} : quotient et reste ?</>,
          options: [good, wrong1, wrong2, wrong3],
          correct: 0,
          hint: `${div}×${q}=${div*q}, reste ${nb}−${div*q}=${r}. Donc q=${q}, r=${r}.`,
        };
      } },
      // ope-4 : multiplication décimal × entier (paramétrique) — plage élargie pour variabilité ≥ 20
      { key:'ope-4', gen: (rnd) => {
        // 25 couples distincts pour avoir au moins 20 sorties uniques
        const couples = [
          [0.5,4],[1.5,4],[2.5,4],[3.5,4],[4.5,4],
          [0.5,6],[1.5,6],[2.5,6],[3.5,6],[4.5,6],
          [0.5,8],[1.5,8],[2.5,8],[3.5,8],[4.5,8],
          [0.5,10],[1.5,10],[2.5,10],[3.5,10],[4.5,10],
          [0.5,12],[1.5,12],[2.5,12],[3.5,12],[4.5,12],
        ];
        const idx = Math.floor(rnd() * couples.length);
        const [dec, ent] = couples[idx];
        const good = dec * ent;
        // Distracteurs pédagogiques : erreur sur la virgule
        const wrong1 = dec * 10 * ent / 10 + ent;  // ajouter au lieu de multiplier
        const wrong2 = Math.round(dec) * ent;        // arrondir à l'entier d'abord
        const wrong3 = good + 1;                     // erreur d'une unité
        const used = new Set([good]);
        let w1 = wrong1; while (used.has(w1)) { w1 += 0.5; } used.add(w1);
        let w2 = wrong2; while (used.has(w2)) { w2 += 1; }   used.add(w2);
        let w3 = wrong3; while (used.has(w3)) { w3 += 0.5; } used.add(w3);
        const fmt = (n: number) => (Number.isInteger(n) ? String(n) : n.toFixed(1)).replace('.', ',');
        const decStr = fmt(dec);
        return {
          q: <>Calcule : <M>{decStr} × {ent} =</M></>,
          options: [fmt(good), fmt(w1), fmt(w2), fmt(w3)],
          correct: 0,
          hint: `${decStr} × ${ent} = ${fmt(good)}`,
        };
      } },
      // ope-5 : priorité × avant − (paramétrique)
      { key:'ope-5', gen: (rnd) => {
        const B = 2 + Math.floor(rnd() * 6);
        const C = 2 + Math.floor(rnd() * 5);
        const prodBC = B * C;
        const A = prodBC + 2 + Math.floor(rnd() * 20); // A > B*C toujours
        const good = A - prodBC;
        const piege = (A - B) * C;
        const d2 = A + prodBC;
        const d3 = A - B - C;
        const used = new Set([good, piege, d2, d3]);
        let v2 = d2; while (used.has(v2) || v2 === good) { v2++; } const fd2 = v2;
        const used2 = new Set([good, piege, fd2]);
        let v3 = d3; while (used2.has(v3) || v3 <= 0) { v3++; }
        return {
          q: <>Calcule : <M>{A} − {B} × {C} =</M></>,
          options: [String(good), String(piege), String(fd2), String(v3)],
          correct: 0,
          hint: `Priorité : ${B}×${C}=${prodBC}, puis ${A}−${prodBC}=${good}.`,
        };
      } },
      // ope-6 : priorité × avant + (variante, paramétrique)
      { key:'ope-6', gen: (rnd) => {
        const A = 5 + Math.floor(rnd() * 10);
        const B = 2 + Math.floor(rnd() * 8);
        const C = 3 + Math.floor(rnd() * 7);
        const good = A + B * C;
        const piege = (A + B) * C;
        const d2 = A * B + C;
        const d3 = A + B + C;
        const used = new Set([good, piege, d2, d3]);
        let v2 = d2; while (used.has(v2) || v2 === good) { v2++; } const fd2 = v2;
        const used2 = new Set([good, piege, fd2]);
        let v3 = d3; while (used2.has(v3)) { v3++; }
        return {
          q: <>Calcule : <M>{A} + {B} × {C}</M></>,
          options: [String(good), String(piege), String(fd2), String(v3)],
          correct: 0,
          hint: `Piège ! Priorité à × : ${B}×${C}=${B*C} puis ${A}+${B*C}=${good} (pas ${piege} !).`,
        };
      } },
      // ope-7 : soustractions successives gauche à droite (paramétrique)
      // Correction : calculer piege1 = A − (B − C) en s'assurant qu'il diffère de piege2
      { key:'ope-7', gen: (rnd) => {
        const B = 10 + Math.floor(rnd() * 30);
        const C = 5  + Math.floor(rnd() * 20);
        const A = B + C + 5 + Math.floor(rnd() * 50); // A > B+C toujours
        const good = A - B - C;
        const piege1 = A - (B - C);   // lecture incorrecte avec sous-parenthèse
        const piege2 = A + B - C;
        const piege3 = A - B + C;
        const used = new Set([good]);
        let v1 = piege1; while (used.has(v1)) { v1++; } used.add(v1);
        let v2 = piege2; while (used.has(v2)) { v2++; } used.add(v2);
        let v3 = piege3; while (used.has(v3)) { v3++; } used.add(v3);
        return {
          q: <>Calcule : <M>{A} − {B} − {C}</M></>,
          options: [String(good), String(v1), String(v2), String(v3)],
          correct: 0,
          hint: `On lit de gauche à droite : ${A}−${B}=${A-B}, puis ${A-B}−${C}=${good}.`,
        };
      } },
      // ope-8 : priorités avec ÷ et × (paramétrique)
      { key:'ope-8', gen: (rnd) => {
        const B = 2 + Math.floor(rnd() * 8);   // diviseur
        const qA = 2 + Math.floor(rnd() * 8);  // quotient
        const A = B * qA;                        // A divisible par B
        const C = 2 + Math.floor(rnd() * 6);
        const D = 2 + Math.floor(rnd() * 5);
        const good = qA + C * D;
        const piege = (A + C) * D;
        const d2 = qA * C + D;
        const d3 = A + C + D;
        const used = new Set([good, piege, d2, d3]);
        let v2 = d2; while (used.has(v2) || v2 === good) { v2++; } const fd2 = v2;
        const used2 = new Set([good, piege, fd2]);
        let v3 = d3; while (used2.has(v3)) { v3++; }
        return {
          q: <>Calcule : <M>{A} ÷ {B} + {C} × {D} =</M></>,
          options: [String(good), String(piege), String(fd2), String(v3)],
          correct: 0,
          hint: `Priorités d'abord : ${A}÷${B}=${qA}, ${C}×${D}=${C*D}, puis ${qA}+${C*D}=${good}.`,
        };
      } },
      // ope-9 : reste d'une division euclidienne (paramétrique)
      // Plage élargie pour variabilité ≥ 20 ; div ≥ 5 pour avoir 4 restes distincts
      { key:'ope-9', gen: (rnd) => {
        const div = 5 + Math.floor(rnd() * 10);   // 5..14 (10 valeurs)
        const q2  = 3 + Math.floor(rnd() * 18);   // 3..20 (18 valeurs)
        const r2  = 1 + Math.floor(rnd() * (div - 2)); // reste 1..div-2
        const nb2 = div * q2 + r2;
        const good = r2;
        // Distracteurs : restes distincts dans [0..div-1] — garantis car div ≥ 5 > 4
        const seen = [good];
        const nextRem = (start) => {
          let v = ((start % div) + div) % div;
          while (seen.indexOf(v) >= 0) v = (v + 1) % div;
          seen.push(v); return v;
        };
        const w1 = nextRem(r2 + 1);
        const w2 = nextRem(r2 + 2);
        const w3 = nextRem(0);
        return {
          q: <>Division euclidienne de {nb2} par {div} : le reste vaut :</>,
          options: [String(good), String(w1), String(w2), String(w3)],
          correct: 0,
          hint: `${div}×${q2}=${div*q2}, ${nb2}−${div*q2}=${good}. Donc reste = ${good}.`,
        };
      } },
      // ope-10 : double parenthèse (A+B) × (C−D) (paramétrique)
      // Correction : garantir 4 options distinctes
      { key:'ope-10', gen: (rnd) => {
        const A = 3 + Math.floor(rnd() * 8);
        const B = 2 + Math.floor(rnd() * 7);
        const C = 8 + Math.floor(rnd() * 8);
        const D = 2 + Math.floor(rnd() * 5);
        const sumAB = A + B;
        const diffCD = C - D;
        const good = sumAB * diffCD;
        // Distracteurs pédagogiques
        const piege1 = A + B * C - D;  // sans parenthèses
        const piege2 = sumAB + diffCD; // addition au lieu de multiplication
        const piege3 = A * B * (C - D); // mauvaise lecture (A×B au lieu de A+B)
        const used = new Set([good]);
        let v1 = piege1; while (used.has(v1)) { v1++; } used.add(v1);
        let v2 = piege2; while (used.has(v2)) { v2++; } used.add(v2);
        let v3 = piege3; while (used.has(v3)) { v3++; } used.add(v3);
        return {
          q: <>Calcule : <M>({A} + {B}) × ({C} − {D}) =</M></>,
          options: [String(good), String(v1), String(v2), String(v3)],
          correct: 0,
          hint: `${A}+${B}=${sumAB}, ${C}−${D}=${diffCD}, puis ${sumAB}×${diffCD}=${good}.`,
        };
      } },
    ],
    fractions: [
      // fra-1 : statique — définition de fraction (conceptuel)
      { key:'fra-1', q:<>Que représente <F n="3" d="4"/> d'une tarte ?</>, options:['3 parts sur 4 parts égales','3 tartes','4 parts sur 3','3 quarts de part'], correct:0, hint:'3/4 = 3 parts sur un total de 4 parts égales.' },
      // fra-2 : fraction équivalente (×2) — paramétrique
      { key:'fra-2', gen: (rnd) => {
        // Choisir une fraction p/q simple (p < q, dénominateurs 3..8)
        const fracs = [[1,3],[2,3],[1,4],[3,4],[1,5],[2,5],[3,5],[1,6],[5,6],[1,7],[2,7],[1,8],[3,8]];
        const [p, q] = fracs[Math.floor(rnd() * fracs.length)];
        const k = 2 + Math.floor(rnd() * 3); // multiplier 2, 3 ou 4
        const good_n = p * k; const good_d = q * k;
        const goodStr = `${good_n}/${good_d}`;
        // Distracteurs : additionner, mélanger, mauvais mult
        const d1 = `${p + k}/${q + k}`;       // additionner au lieu de multiplier
        const d2 = `${p * k}/${q * (k + 1)}`; // mult différent dénominateur
        const d3 = `${p * (k + 1)}/${q * k}`; // mult différent numérateur
        const seen = new Set([goodStr]);
        const distinct: string[] = [];
        for (const c of [d1, d2, d3]) {
          if (!seen.has(c)) { seen.add(c); distinct.push(c); }
        }
        let en = p * k + 1; let ed = q * k + 1;
        while (distinct.length < 3) {
          const s = `${en}/${ed}`;
          if (!seen.has(s)) { seen.add(s); distinct.push(s); }
          en++; ed++;
        }
        return {
          q: <>Quelle fraction est égale à <F n={String(p)} d={String(q)} /> ?</>,
          options: [distinct[0], goodStr, distinct[1], distinct[2]],
          correct: 1,
          hint: `${p}/${q} = ${good_n}/${good_d} (multiplier numérateur et dénominateur par ${k}).`,
        };
      } },
      // fra-3 : 1/2 d'un entier (paramétrique) — correction : let au lieu de const pour wrong3
      { key:'fra-3', gen: (rnd) => {
        const N = (2 + Math.floor(rnd() * 20)) * 2; // pair 4..42
        const good = N / 2;
        const wrong1 = N * 2;
        const wrong2 = N - 2;
        let wrong3 = good + 1;
        const used = new Set([good, wrong1, wrong2]);
        while (used.has(wrong3)) { wrong3++; }
        return {
          q: <><F n="1" d="2"/> de {N} =</>,
          options: [String(wrong1), String(good), String(N), String(wrong3)],
          correct: 1,
          hint: `1/2 × ${N} = ${good}`,
        };
      } },
      // fra-4 : fraction > 1 (paramétrique) — options en texte brut (fractions p/q)
      { key:'fra-4', gen: (rnd) => {
        const dens = [3,4,5,6,7,8]; // dénominateur ≥ 3 pour avoir n_lt ≠ 1
        const d = dens[Math.floor(rnd() * dens.length)];
        const extra = 1 + Math.floor(rnd() * 3); // d+1..d+3
        const n_good = d + extra; // > d → fraction > 1
        // n_lt ∈ [2, d-1] → distinctement différent de 1 et de d
        const n_lt = 2 + Math.floor(rnd() * (d - 2)); // 2..d-1
        const opts = [
          `${n_lt}/${d}`,   // < 1
          `${d}/${d}`,      // = 1
          `${n_good}/${d}`, // > 1 (bonne réponse)
          `1/${d}`,         // << 1
        ];
        // Dédoublonnage au cas où (ex: n_lt=1 impossible mais par sécurité)
        const seen = new Set(opts);
        if (seen.size < 4) {
          let nl = 2; while (seen.has(`${nl}/${d}`) || nl >= d) nl++;
          opts[0] = `${nl}/${d}`;
        }
        return {
          q: <>Parmi ces fractions, laquelle est strictement plus grande que 1 ?</>,
          options: opts,
          correct: 2,
          hint: `${n_good}/${d} > 1 car numérateur > dénominateur. ${d}/${d} = 1 exactement.`,
        };
      } },
      // fra-5 : comparaison de deux fractions (paramétrique)
      { key:'fra-5', gen: (rnd) => {
        // Pairs de fractions simples faciles à comparer via LCD
        const pairs: [number,number,number,number][] = [
          [1,2,2,3],[1,3,1,2],[2,3,3,4],[1,4,1,3],[3,4,2,3],
          [1,2,3,5],[2,5,1,2],[1,3,2,5],[3,5,2,3],[1,4,2,7],
          [2,5,3,7],[1,5,1,4],[3,8,1,2],[5,8,3,4],[1,6,1,4],
        ];
        const [p1,q1,p2,q2] = pairs[Math.floor(rnd() * pairs.length)];
        // Compare p1/q1 vs p2/q2 via cross multiplication
        const cross1 = p1 * q2; // p1/q1 vs p2/q2 → compare p1*q2 vs p2*q1
        const cross2 = p2 * q1;
        // Choisir un prénom pour chaque
        const names1 = ['Léa','Tom','Alice','Paul','Zoé','Noa'];
        const names2 = ['Tom','Alice','Paul','Zoé','Noa','Léa'];
        const ni = Math.floor(rnd() * names1.length);
        const nom1 = names1[ni]; const nom2 = names2[ni];
        let correctIdx: number;
        let expl: string;
        if (cross1 > cross2) {
          correctIdx = 0; // nom1 gagne
          expl = `${p1}/${q1} = ${p1*q2}/${q1*q2} > ${p2}/${q2} = ${p2*q1}/${q1*q2}.`;
        } else {
          correctIdx = 1; // nom2 gagne
          expl = `${p2}/${q2} = ${p2*q1}/${q1*q2} > ${p1}/${q1} = ${p1*q2}/${q1*q2}.`;
        }
        return {
          q: <>Qui prend le plus : {nom1} ({p1}/{q1}) ou {nom2} ({p2}/{q2}) ?</>,
          options: [nom1, nom2, "C'est pareil", "On ne peut pas savoir"],
          correct: correctIdx,
          hint: expl,
        };
      } },
      // fra-6 : 3/4 d'un nombre (paramétrique)
      { key:'fra-6', gen: (rnd) => {
        const k = 5 + Math.floor(rnd() * 26); // 5..30, N = 4k (20..120)
        const N = k * 4;
        const good    = 3 * k;  // 3/4 de N
        const quarter = k;      // 1/4
        const half    = 2 * k;  // 1/2
        const used = new Set([good, quarter, half]);
        let w3 = 4 * k + k;
        while (used.has(w3)) { w3 += 4; }
        return {
          q: <><F n="3" d="4"/> de {N} vaut :</>,
          options: [String(quarter), String(half), String(good), String(w3)],
          correct: 2,
          hint: `1/4 de ${N} = ${quarter}, donc 3/4 = ${quarter}×3 = ${good}.`,
        };
      } },
      // fra-7 : fraction équivalente × 2 (paramétrique) — plage élargie pour variabilité ≥ 20
      { key:'fra-7', gen: (rnd) => {
        const num = 1 + Math.floor(rnd() * 7); // 1..7 (7 valeurs)
        // dénominateur > num, distinct de num*2 pour éviter doublons
        let den = num + 2 + Math.floor(rnd() * 6); // num+2..num+7 (6 valeurs)
        if (den === num * 2) den++;
        const good_n = num * 2;
        const good_d = den * 2;
        const d1_n = num + 2;  const d1_d = den + 2; // additionner au lieu de multiplier
        const d2_n = num * 3;  const d2_d = den * 2; // multiplier seulement le numérateur par 3
        const d3_n = num;      const d3_d = den + 3;
        // Sérialiser sous forme de chaîne pour vérifier les doublons
        const serialize = (n: number, d: number) => `${n}/${d}`;
        const goodStr = serialize(good_n, good_d);
        const used = new Set([goodStr]);
        const candidates = [
          serialize(d1_n, d1_d),
          serialize(d2_n, d2_d),
          serialize(d3_n, d3_d),
        ];
        const distinct = [];
        for (const c of candidates) {
          if (!used.has(c)) { used.add(c); distinct.push(c); }
        }
        // Compléter si besoin
        let extra = num * 2 + 1;
        while (distinct.length < 3) {
          const s = serialize(extra, den * 2 + 1);
          if (!used.has(s)) { used.add(s); distinct.push(s); }
          extra++;
        }
        return {
          q: <>Quelle fraction est équivalente à <F n={String(num)} d={String(den)} /> ?</>,
          options: [distinct[0], goodStr, distinct[1], distinct[2]],
          correct: 1,
          hint: `${num}/${den} = ${good_n}/${good_d} (multiplier numérateur et dénominateur par 2).`,
        };
      } },
      // fra-8 : 1/4 d'un entier (paramétrique) — plage élargie pour variabilité ≥ 20
      { key:'fra-8', gen: (rnd) => {
        const k = 2 + Math.floor(rnd() * 22); // 2..23, N = 4k (8..92)
        const N = k * 4;
        const good   = k;       // 1/4
        const wrong1 = k * 2;  // 1/2
        const wrong2 = k * 3;  // 3/4
        const used = new Set([good, wrong1, wrong2]);
        let w3 = k + 1;
        while (used.has(w3)) { w3++; }
        return {
          q: <><F n="1" d="4"/> de {N} =</>,
          options: [String(wrong1), String(good), String(wrong2), String(w3)],
          correct: 1,
          hint: `1/4 × ${N} = ${good}.`,
        };
      } },
      // fra-9 : fraction d'un entier — plusieurs numérateurs (paramétrique)
      { key:'fra-9', gen: (rnd) => {
        const ds = [3, 4, 5, 6];
        const d = ds[Math.floor(rnd() * ds.length)];
        const n = 2 + Math.floor(rnd() * (d - 2)); // 2..d-1
        const k = 3 + Math.floor(rnd() * 8);
        const total = d * k;
        const good = n * k;
        const used = new Set([good]);
        let w1 = total / d; while (used.has(w1)) w1++; used.add(w1);
        let w2 = good + d; while (used.has(w2)) w2++; used.add(w2);
        let w3 = total - good; while (used.has(w3)) w3++;
        return {
          q: <><F n={String(n)} d={String(d)}/> de {total} :</>,
          options: [String(good), String(w1), String(w2), String(w3)],
          correct: 0,
          hint: `1/${d} de ${total} = ${k}, donc ${n}/${d} = ${n} × ${k} = ${good}.`,
        };
      } },
      // fra-10 : fraction supérieure à 1 — lire un nombre mixte
      { key:'fra-10', gen: (rnd) => {
        const ent = 1 + Math.floor(rnd() * 4); // 1..4
        const den = 2 + Math.floor(rnd() * 5); // 2..6
        const rem = 1 + Math.floor(rnd() * (den - 1));
        const num = ent * den + rem;
        const goodStr = `${num}/${den}`;
        const w1 = `${ent * den}/${den}`;  // oublie le reste
        const w2 = `${ent}/${den}`;        // prend l'entier comme numérateur
        const w3 = `${num + 1}/${den}`;
        const used = new Set([goodStr, w1, w2, w3]);
        const finalW3 = used.size < 4 ? `${num}/${den + 1}` : w3;
        return {
          q: <>{ent} et <F n={String(rem)} d={String(den)}/> en fraction impropre :</>,
          options: [goodStr, w1, w2, finalW3],
          correct: 0,
          hint: `${ent}×${den} + ${rem} = ${num}. Fraction : ${goodStr}.`,
        };
      } },
      // fra-11 : ordonner 3 fractions (paramétrique — via LCD)
      { key:'fra-11', gen: (rnd) => {
        // 3 fractions simples avec même dénominateur ou petits LCD
        const d = 6 + Math.floor(rnd() * 5); // 6..10
        const ns: number[] = [];
        const used0: Set<number> = new Set();
        for (let i = 0; i < 3; i++) {
          let v = 1 + Math.floor(rnd() * (d - 1));
          while (used0.has(v)) { v = 1 + Math.floor(rnd() * (d - 1)); }
          used0.add(v); ns.push(v);
        }
        const sorted = [...ns].sort((a,b) => a-b);
        const good = `${sorted[0]}/${d} < ${sorted[1]}/${d} < ${sorted[2]}/${d}`;
        const wrong1 = `${sorted[2]}/${d} < ${sorted[1]}/${d} < ${sorted[0]}/${d}`;
        const wrong2 = `${ns[0]}/${d} < ${ns[1]}/${d} < ${ns[2]}/${d}`;
        const wrong3 = `${sorted[0]}/${d} < ${sorted[2]}/${d} < ${sorted[1]}/${d}`;
        const seen = new Set([good, wrong1, wrong2, wrong3]);
        if (seen.size < 4) return { q: 'Ordonner 1/5, 3/5, 2/5 :', options:['1/5 < 2/5 < 3/5','3/5 < 2/5 < 1/5','2/5 < 1/5 < 3/5','1/5 < 3/5 < 2/5'], correct:0, hint:'Même dénominateur : comparer les numérateurs.' };
        return {
          q: <>Ordonne dans le bon ordre : <F n={String(ns[0])} d={String(d)}/>, <F n={String(ns[1])} d={String(d)}/>, <F n={String(ns[2])} d={String(d)}/></>,
          options: [good, wrong1, wrong2, wrong3],
          correct: 0,
          hint: `Même dénominateur ${d} : on compare les numérateurs → ${sorted[0]} < ${sorted[1]} < ${sorted[2]}.`,
        };
      } },
      // fra-12 : trouver la fraction manquante dans une égalité
      { key:'fra-12', gen: (rnd) => {
        const d = 3 + Math.floor(rnd() * 6);
        const n1 = 1 + Math.floor(rnd() * (d - 1));
        const n2 = 1 + Math.floor(rnd() * (d - 1));
        // n1/d + ?/d = (n1+n2)/d
        const goodN = n2;
        const used = new Set([goodN]);
        let w2 = n1 + n2; while (used.has(w2)) w2++; used.add(w2);
        let w3 = Math.abs(n1 - n2); while (used.has(w3)) w3++; used.add(w3);
        let w4 = goodN + 1; while (used.has(w4)) w4++;
        return {
          q: <><F n={String(n1)} d={String(d)}/> + <F n="?" d={String(d)}/> = <F n={String(n1+n2)} d={String(d)}/> → ? =</>,
          options: [String(goodN), String(w2), String(w3), String(w4)],
          correct: 0,
          hint: `${n1+n2}/${d} − ${n1}/${d} = ${n2}/${d}. ? = ${goodN}.`,
        };
      } },
      // fra-13 : reconnaître une fraction en image (parts ombrées)
      { key:'fra-13', gen: (rnd) => {
        const d = 3 + Math.floor(rnd() * 5); // 3..7 parts
        const n = 1 + Math.floor(rnd() * (d - 1));
        const goodStr = `${n}/${d}`;
        const used = new Set([goodStr]);
        const pick = (candidates: string[], fallback: (i: number) => string) => {
          for (const c of candidates) if (!used.has(c)) { used.add(c); return c; }
          let i = 1; while (true) { const c = fallback(i++); if (!used.has(c)) { used.add(c); return c; } }
        };
        const w1 = pick([`${d - n}/${d}`, `${d - n + 1}/${d}`], i => `${d - n + i + 1}/${d}`);
        const w2 = pick([`${n}/${d + 1}`, `${n}/${d + 2}`], i => `${n}/${d + 2 + i}`);
        const w3 = pick([`${n + 1}/${d}`, `${n + 2}/${d}`], i => `${n + 2 + i}/${d}`);
        return {
          q: <>Une figure est divisée en {d} parts égales et {n} sont coloriées. La fraction coloriée est :</>,
          options: [goodStr, w1, w2, w3],
          correct: 0,
          hint: `${n} parts sur ${d} au total → fraction = ${goodStr}.`,
        };
      } },
      // fra-14 : double d'une fraction simple
      { key:'fra-14', gen: (rnd) => {
        const d = 3 + Math.floor(rnd() * 6); // 3..8
        const n = 1 + Math.floor(rnd() * (d - 1));
        function gcd(a: number, b: number): number { return b === 0 ? a : gcd(b, a % b); }
        const rn = 2 * n, rd = d;
        const g = gcd(rn, rd);
        const fn = rn / g, fd = rd / g;
        const goodStr = fd === 1 ? String(fn) : `${fn}/${fd}`;
        const used = new Set([goodStr]);
        let w1 = `${n * 2}/${d * 2}`; while (used.has(w1)) w1 = `${n*2+1}/${d*2}`; used.add(w1);
        let w2 = `${n}/${d * 2}`; while (used.has(w2)) w2 = `${n}/${d*2+1}`; used.add(w2);
        let w3 = `${fn+1}/${fd}`; while (used.has(w3)) w3 = `${fn+2}/${fd}`;
        return {
          q: <>Le double de <F n={String(n)} d={String(d)}/> est :</>,
          options: [goodStr, w1, w2, w3],
          correct: 0,
          hint: `2 × ${n}/${d} = ${rn}/${d}${g>1 ? ` = ${goodStr}` : ''}.`,
        };
      } },
      // fra-15 : fraction d'une collection avec reste
      { key:'fra-15', gen: (rnd) => {
        const d = 3 + Math.floor(rnd() * 5); // 3..7
        const n = 1 + Math.floor(rnd() * (d - 1));
        const total = d * (2 + Math.floor(rnd() * 7));
        const good = Math.floor(n * total / d);
        const used = new Set([good]);
        let w1 = total / d; while (used.has(w1)) w1++; used.add(w1);
        let w2 = n + total; while (used.has(w2)) w2++; used.add(w2);
        let w3 = good + d; while (used.has(w3)) w3++;
        return {
          q: <>Dans une classe de {total} élèves, <F n={String(n)} d={String(d)}/> ont un animal. Combien ?</>,
          options: [String(good), String(w1), String(w2), String(w3)],
          correct: 0,
          hint: `${n}/${d} × ${total} = ${good} élèves.`,
        };
      } },
      // fra-16 : fraction d'une fraction (intro — 1/2 de 1/4)
      { key:'fra-16', gen: (rnd) => {
        function gcd(a: number, b: number): number { return b === 0 ? a : gcd(b, a % b); }
        const d1 = [2,3,4,5,6,7,8][Math.floor(rnd() * 7)];
        const d2 = [2,3,4,5,6,7,8][Math.floor(rnd() * 7)];
        const n1 = 1, n2 = 1;
        const rn = n1 * n2, rd = d1 * d2;
        const g = gcd(rn, rd);
        const fn = rn / g, fd = rd / g;
        const goodStr = fd === 1 ? String(fn) : `${fn}/${fd}`;
        const used = new Set([goodStr]);
        let w1 = `1/${d1 + d2}`; while (used.has(w1)) w1 = `1/${d1+d2+1}`; used.add(w1);
        let w2 = `${d1}/${d2}`; while (used.has(w2)) w2 = `${d1+1}/${d2}`; used.add(w2);
        let w3 = `${fn}/${fd+1}`; while (used.has(w3)) w3 = `${fn}/${fd+2}`;
        return {
          q: <><F n="1" d={String(d1)}/> de <F n="1" d={String(d2)}/> :</>,
          options: [goodStr, w1, w2, w3],
          correct: 0,
          hint: `1/${d1} × 1/${d2} = 1/${d1*d2}${g>1 ? ` = ${goodStr}` : ''}.`,
        };
      } },
    ],
    proportion: [
      // pro-1 : règle de 3 (paramétrique) — correction doublons dans options
      { key:'pro-1', gen: (rnd) => {
        const qty1 = 2 + Math.floor(rnd() * 5);    // 2..6
        const mult  = 2 + Math.floor(rnd() * 3);    // ×2, ×3, ×4
        // Prix unitaire en centimes entiers pour éviter les décimaux compliqués
        const priceUnit = 50 + Math.floor(rnd() * 10) * 25; // 50, 75, 100, ..., 300 centimes
        const total1 = qty1 * priceUnit;
        const qty2   = qty1 * mult;
        const good   = qty2 * priceUnit;
        const wrong1 = total1 + priceUnit;   // +1 article seulement
        const wrong2 = total1 * (mult + 1);  // ×(mult+1)
        const wrong3 = good + priceUnit;
        const used = new Set([good]);
        let v1 = wrong1; while (used.has(v1)) { v1 += priceUnit; } used.add(v1);
        let v2 = wrong2; while (used.has(v2)) { v2 += priceUnit; } used.add(v2);
        let v3 = wrong3; while (used.has(v3)) { v3 += priceUnit; } used.add(v3);
        const fmt = (n: number) => (n / 100).toFixed(n % 100 === 0 ? 0 : 2);
        return {
          q: <>Si {qty1} articles coûtent {fmt(total1)} €, combien coûtent {qty2} articles ?</>,
          options: [fmt(v1)+' €', fmt(good)+' €', fmt(v2)+' €', fmt(v3)+' €'],
          correct: 1,
          hint: `${qty2} = ${qty1}×${mult}, donc prix ×${mult} = ${fmt(good)} €.`,
        };
      } },
      // pro-2 : recette × N (paramétrique)
      { key:'pro-2', gen: (rnd) => {
        const pers1 = 2 + Math.floor(rnd() * 4);     // 2..5 personnes
        const farine = (2 + Math.floor(rnd() * 8)) * 50; // 100..500 g
        const mult = 2 + Math.floor(rnd() * 3);       // ×2..×4
        const pers2 = pers1 * mult;
        const good = farine * mult;
        const wrong1 = Math.round(farine / mult);
        const wrong2 = farine + mult * 10;
        const wrong3 = farine + farine / 2;
        const used = new Set([good]);
        let v1 = wrong1; while (used.has(v1)) { v1 += 25; } used.add(v1);
        let v2 = wrong2; while (used.has(v2)) { v2 += 25; } used.add(v2);
        let v3 = wrong3; while (used.has(v3)) { v3 += 25; } used.add(v3);
        return {
          q: <>Pour {pers1} personnes : {farine} g de farine. Pour {pers2} personnes ?</>,
          options: [String(v1)+' g', String(good)+' g', String(v2)+' g', String(v3)+' g'],
          correct: 1,
          hint: `${pers2} = ${pers1}×${mult} → farine ×${mult} = ${good} g.`,
        };
      } },
      // pro-3 : 10% d'un nombre — plage élargie pour variabilité ≥ 20
      { key:'pro-3', gen: (rnd) => {
        // 25 multiples de 10 de 20 à 260 (pas de 10)
        const N = 20 + Math.floor(rnd() * 25) * 10; // 20, 30, ..., 260
        const good = N / 10;
        const wrong1 = N / 100;   // ‰ erreur
        const wrong2 = N;         // oublie calcul
        const wrong3 = N * 10;    // multiplie au lieu de diviser
        return {
          q: <>10 % de {N} vaut :</>,
          options: [String(wrong1), String(good), String(wrong2), String(wrong3)],
          correct: 1,
          hint: `10 % = 1/10. ${N} ÷ 10 = ${good}.`,
        };
      } },
      // pro-4 : vitesse × demi-heure — plage élargie
      { key:'pro-4', gen: (rnd) => {
        // 20 vitesses distinctes : 3..22 km/h
        const vitesse = 3 + Math.floor(rnd() * 20);
        const good_raw = vitesse / 2;
        const good = Number.isInteger(good_raw) ? good_raw : good_raw;
        const fmt = (n: number) => Number.isInteger(n) ? String(n) : n.toFixed(1);
        // Distracteurs pédagogiques
        const wrong1 = vitesse;           // confond 30 min et 1 h
        const wrong2 = vitesse * 2;       // double au lieu de diviser
        const wrong3_raw = vitesse / 4;   // confond 30 min et 15 min
        const wrong3 = wrong3_raw;
        return {
          q: <>Un piéton marche à {vitesse} km/h. En 30 min, il parcourt :</>,
          options: [fmt(wrong1)+' km', fmt(good)+' km', fmt(wrong2)+' km', fmt(wrong3)+' km'],
          correct: 1,
          hint: `30 min = 1/2 heure → ${vitesse} ÷ 2 = ${fmt(good)} km.`,
        };
      } },
      // pro-5 : règle de 3 descendante — plage élargie pour variabilité ≥ 20
      { key:'pro-5', gen: (rnd) => {
        // 24 valeurs de farine distinctes (pas de 30 g, de 120 à 840 g)
        const farine_per_pers = 30 + Math.floor(rnd() * 24) * 30; // 30, 60, ..., 720 g pour 1 pers
        const persRef = 6;
        const farineRef = farine_per_pers * persRef;
        const persTarget = 2;
        const good = farine_per_pers * persTarget;
        const wrong1 = farineRef / 2;
        const used = new Set([good]);
        let v1 = wrong1; while (used.has(v1)) { v1 += 30; } used.add(v1);
        let v2 = good + 60; while (used.has(v2)) { v2 += 30; } used.add(v2);
        let v3 = good - 30; while (used.has(v3) || v3 <= 0) { v3 += 30; } used.add(v3);
        return {
          q: <>Un gâteau pour {persRef} personnes demande {farineRef} g. Pour {persTarget} personnes ?</>,
          options: [String(good)+' g', String(v1)+' g', String(v2)+' g', String(v3)+' g'],
          correct: 0,
          hint: `${persRef} → ${farineRef} g, 1 → ${farine_per_pers} g, ${persTarget} → ${good} g.`,
        };
      } },
      // pro-6 : 25% — plage élargie pour variabilité ≥ 20
      { key:'pro-6', gen: (rnd) => {
        // 24 multiples de 4 de 20 à 116 (pas de 4)
        const k = 5 + Math.floor(rnd() * 24); // 5..28, N = 4k (20..112)
        const N = k * 4;
        const good = k;           // N/4
        const wrong1 = k * 2;    // N/2 (50%)
        const wrong2 = N / 10;   // 10%
        const used = new Set([good, wrong1, wrong2]);
        let w3 = k + 3; while (used.has(w3)) { w3++; }
        return {
          q: <>25 % de {N}, c'est :</>,
          options: [String(wrong2), String(good), String(wrong1), String(w3)],
          correct: 1,
          hint: `25 % = 1/4. ${N} ÷ 4 = ${good}.`,
        };
      } },
      // pro-7 : réduction 50% — plage élargie pour variabilité ≥ 20
      { key:'pro-7', gen: (rnd) => {
        // 20 prix pairs de 10 à 48 €
        const prix = (5 + Math.floor(rnd() * 20)) * 2; // 10..48 €
        const good = prix / 2;
        const wrong1_raw = prix * 0.75;  // réduction de 25%
        const wrong2 = prix / 4;          // réduction de 75%
        const used = new Set([good]);
        let v1 = wrong1_raw; while (used.has(v1)) { v1 += 1; } used.add(v1);
        let v2 = wrong2;     while (used.has(v2)) { v2 += 1; } used.add(v2);
        let v3 = good - 2;   while (used.has(v3) || v3 <= 0) { v3 += 2; } used.add(v3);
        return {
          q: <>Un livre coûte {prix} €. Avec 50 % de réduction, son prix devient :</>,
          options: [String(good)+' €', String(v1)+' €', String(v2)+' €', String(v3)+' €'],
          correct: 0,
          hint: `50 % = moitié. ${prix} ÷ 2 = ${good} €.`,
        };
      } },
      // pro-8 : distance = vitesse × temps (paramétrique)
      { key:'pro-8', gen: (rnd) => {
        const v = 40 + Math.floor(rnd() * 8) * 10; // 40..110 km/h
        const t = 2 + Math.floor(rnd() * 4);        // 2..5 h
        const good = v * t;
        const used = new Set([good]);
        let v1 = v / t; while (used.has(v1)) { v1++; } used.add(v1);
        let v2 = v + t; while (used.has(v2)) { v2++; } used.add(v2);
        let v3 = v * (t + 1); while (used.has(v3)) { v3 += v; } used.add(v3);
        return {
          q: <>Une voiture roule à {v} km/h. En {t} h, elle parcourt :</>,
          options: [String(v1)+' km', String(v2)+' km', String(good)+' km', String(v3)+' km'],
          correct: 2,
          hint: `Distance = vitesse × temps = ${v} × ${t} = ${good} km.`,
        };
      } },
      // pro-9 : vérifier si deux grandeurs sont proportionnelles
      { key:'pro-9', gen: (rnd) => {
        const k = 2 + Math.floor(rnd() * 7);
        const a = 2 + Math.floor(rnd() * 6);
        const b = a + 1 + Math.floor(rnd() * 4);
        const ya = a * k, yb = b * k;
        // Distracteur : yb légèrement différent
        const ybWrong = yb + 1;
        return {
          q: `Les paires (${a} ; ${ya}) et (${b} ; ${yb}) sont-elles proportionnelles ?`,
          options: ['Oui', 'Non', 'On ne peut pas savoir', `Non, il faudrait ${ybWrong}`],
          correct: 0,
          hint: `${ya}/${a} = ${yb}/${b} = ${k} → oui, coefficient ${k}.`,
        };
      } },
      // pro-10 : 75% d'un nombre (paramétrique)
      { key:'pro-10', gen: (rnd) => {
        const k = 2 + Math.floor(rnd() * 20); // N = 4k : 8..84
        const N = k * 4;
        const good = 3 * k;   // 75%
        const wrong1 = k;      // 25%
        const wrong2 = k * 2;  // 50%
        const used = new Set([good, wrong1, wrong2]);
        let w3 = good + k; while (used.has(w3)) w3 += k;
        return {
          q: <>75 % de {N} :</>,
          options: [String(wrong1), String(wrong2), String(good), String(w3)],
          correct: 2,
          hint: `75 % = 3/4. 1/4 de ${N} = ${k}. 3/4 = ${k}×3 = ${good}.`,
        };
      } },
      // pro-11 : règle de trois descendante
      { key:'pro-11', gen: (rnd) => {
        const prixUnit = (1 + Math.floor(rnd() * 8)) * 50; // 50..400 centimes
        const n1 = 3 + Math.floor(rnd() * 5);
        const n2 = n1 - 1 - Math.floor(rnd() * 2); // n2 < n1
        if (n2 <= 0) return { q: '5 crayons coûtent 3 €. Prix de 3 crayons :', options:['1,80 €','1,50 €','2 €','0,60 €'], correct:0, hint:'Prix unitaire = 3/5 = 0,60 €. 3 × 0,60 = 1,80 €.' };
        const total1 = n1 * prixUnit;
        const good = n2 * prixUnit;
        const fmt = (n: number) => (n / 100).toFixed(n % 100 === 0 ? 0 : 2);
        const used = new Set([good]);
        let w2 = good + prixUnit; while (used.has(w2)) w2 += prixUnit; used.add(w2);
        let w3 = good - prixUnit; while (used.has(w3) || w3 <= 0) w3 += prixUnit; used.add(w3);
        let w4 = total1 - prixUnit; while (used.has(w4)) w4 += prixUnit;
        return {
          q: `${n1} cahiers coûtent ${fmt(total1)} €. Prix de ${n2} cahiers :`,
          options: [`${fmt(good)} €`, `${fmt(w2)} €`, `${fmt(w3)} €`, `${fmt(w4)} €`],
          correct: 0,
          hint: `1 cahier = ${fmt(prixUnit)} €. ${n2} cahiers = ${n2} × ${fmt(prixUnit)} = ${fmt(good)} €.`,
        };
      } },
      // pro-12 : 20% d'augmentation
      { key:'pro-12', gen: (rnd) => {
        const prices = [10, 15, 20, 25, 30, 40, 50];
        const price = prices[Math.floor(rnd() * prices.length)];
        const pcts = [10, 20, 25, 50];
        const pct = pcts[Math.floor(rnd() * pcts.length)];
        const good = price + price * pct / 100;
        const used = new Set([good]);
        let w1 = price + pct; while (used.has(w1)) w1++; used.add(w1);
        let w2 = price * pct / 100; while (used.has(w2)) w2++; used.add(w2);
        let w3 = good + 5; while (used.has(w3)) w3 += 5;
        return {
          q: `Un article coûte ${price} €. Son prix augmente de ${pct} %. Nouveau prix :`,
          options: [`${good} €`, `${w1} €`, `${w2} €`, `${w3} €`],
          correct: 0,
          hint: `${price} + ${price}×${pct}/100 = ${price} + ${price * pct / 100} = ${good} €.`,
        };
      } },
      // pro-13 : lire un tableau de proportionnalité
      { key:'pro-13', gen: (rnd) => {
        const k = 2 + Math.floor(rnd() * 8);
        const x1 = 2 + Math.floor(rnd() * 5);
        const x2 = x1 + 2 + Math.floor(rnd() * 3);
        const y1 = k * x1;
        const good = k * x2;
        const used = new Set([good]);
        let w2 = y1 + x2; while (used.has(w2)) w2++; used.add(w2);
        let w3 = good + k; while (used.has(w3)) w3 += k; used.add(w3);
        let w4 = good - k; while (used.has(w4) || w4 <= 0) w4 += k;
        return {
          q: <>Tableau de proportionnalité : {x1} → {y1} et {x2} → ?</>,
          options: [String(good), String(w2), String(w3), String(w4)],
          correct: 0,
          hint: `Coefficient : ${y1}÷${x1} = ${k}. Pour ${x2} : ${k}×${x2} = ${good}.`,
        };
      } },
      // pro-14 : répartir proportionnellement
      { key:'pro-14', gen: (rnd) => {
        const total = [20, 30, 40, 50, 60][Math.floor(rnd() * 5)];
        const parts = [2, 3, 4, 5];
        const p = parts[Math.floor(rnd() * parts.length)];
        if (total % p !== 0) return { q: '30 bonbons partagés en 3 parts égales. Chaque part :', options:['10','15','6','30'], correct:0, hint:'30 ÷ 3 = 10.' };
        const good = total / p;
        const used = new Set([good]);
        let w2 = total - good; while (used.has(w2)) w2++; used.add(w2);
        let w3 = good * 2; while (used.has(w3)) w3++; used.add(w3);
        let w4 = good + p; while (used.has(w4)) w4++;
        return {
          q: `${total} bonbons partagés en ${p} parts égales. Chaque part :`,
          options: [String(good), String(w2), String(w3), String(w4)],
          correct: 0,
          hint: `${total} ÷ ${p} = ${good}.`,
        };
      } },
      // pro-15 : prix au kilo → prix pour N grammes
      { key:'pro-15', gen: (rnd) => {
        const pricePerKg = [4, 5, 6, 8, 10][Math.floor(rnd() * 5)]; // €/kg
        const grams = [200, 250, 500, 750][Math.floor(rnd() * 4)];
        const good = Math.round(pricePerKg * grams / 1000 * 100) / 100;
        const fmt = (n: number) => n % 1 === 0 ? String(n) : n.toFixed(2);
        // Déduplique les options sur leur représentation formatée (évite good=w4
        // quand w4 = good + k*0.5 tombe pile sur pricePerKg ou pricePerKg*grams/100).
        const seen = new Set([fmt(good)]);
        const bump = (v: number) => { while (seen.has(fmt(v))) v = Math.round((v + 0.5) * 100) / 100; seen.add(fmt(v)); return v; };
        const w1 = bump(pricePerKg);
        const w2 = bump(good + pricePerKg * 0.5);
        const w3 = bump(pricePerKg * grams / 100);
        return {
          q: `Fromage à ${pricePerKg} €/kg. Prix pour ${grams} g :`,
          options: [`${fmt(good)} €`, `${fmt(w1)} €`, `${fmt(w2)} €`, `${fmt(w3)} €`],
          correct: 0,
          hint: `${grams} g = ${grams/1000} kg. ${pricePerKg} × ${grams/1000} = ${fmt(good)} €.`,
        };
      } },
    ],
    angles: [
      { key:'ang-1', q:'Un angle droit mesure :', options:['45°','90°','180°','360°'], correct:1, hint:'Angle droit = 90°, quart de tour.' },
      { key:'ang-2', q:'Un angle aigu est :', options:['Plus petit que 90°','Égal à 90°','Plus grand que 90° mais plus petit que 180°','Égal à 180°'], correct:0, hint:'Aigu : < 90°. Obtus : entre 90° et 180°. Plat : 180°.' },
      { key:'ang-3', q:'Un angle plat mesure :', options:['90°','180°','360°','45°'], correct:1, hint:'Plat = demi-tour = 180°.' },
      { key:'ang-4', q:"La somme des angles d'un triangle vaut :", options:['90°','180°','270°','360°'], correct:1, hint:"Dans TOUT triangle, la somme des 3 angles = 180°." },
      // ang-5 : 3e angle d'un triangle (paramétrique)
      // Correction : s'assurer que wrong1 ≠ wrong2 et ≠ good
      { key:'ang-5', gen: (rnd) => {
        const a1 = 20 + Math.floor(rnd() * 50); // 20..69
        const maxA2 = 150 - a1;                   // a1+a2 < 170 → a3 >= 10
        const a2 = 20 + Math.floor(rnd() * Math.max(1, maxA2 - 20)); // assure a2 >= 20
        const good = 180 - a1 - a2;
        const wrong1 = 180 - a1;
        const wrong2 = 180 - a2;
        const wrong3 = 360 - a1 - a2;
        const used = new Set([good]);
        let v1 = wrong1; while (used.has(v1) || v1 <= 0 || v1 >= 180) { v1--; } used.add(v1);
        let v2 = wrong2; while (used.has(v2) || v2 <= 0 || v2 >= 180) { v2--; } used.add(v2);
        let v3 = wrong3; while (used.has(v3) || v3 <= 0 || v3 >= 360) { v3--; } used.add(v3);
        return {
          q: <>Un triangle a deux angles de {a1}° et {a2}°. Le 3ᵉ angle mesure :</>,
          options: [String(good)+'°', String(v1)+'°', String(v2)+'°', String(v3)+'°'],
          correct: 0,
          hint: `Somme = 180° → 180 − ${a1} − ${a2} = ${good}°.`,
        };
      } },
      { key:'ang-6', q:'Deux angles complémentaires ont pour somme :', options:['90°','100°','180°','360°'], correct:0, hint:'Complémentaires = somme 90°. Supplémentaires = somme 180°.' },
      { key:'ang-7', q:'Un angle obtus est compris :', options:['Entre 0° et 90°','Entre 90° et 180°','Entre 180° et 360°','Égal à 180°'], correct:1, hint:'Obtus : entre 90° et 180° (exclu).' },
      // ang-8 : classification d'un triangle selon son plus grand angle (paramétrique)
      { key:'ang-8', gen: (rnd) => {
        // Choisir le type : 0=acutangle, 1=rectangle, 2=obtusangle
        const typeIdx = Math.floor(rnd() * 3);
        let angle: number;
        if (typeIdx === 0) {
          angle = 10 + Math.floor(rnd() * 79); // 10..88° → tout aigu
        } else if (typeIdx === 1) {
          angle = 90;
        } else {
          angle = 91 + Math.floor(rnd() * 88); // 91..178° → obtus
        }
        const labels = ['Acutangle','Rectangle','Obtusangle'];
        const correct = typeIdx;
        // Distracteurs : les deux autres labels + Équilatéral
        const opts = [...labels, 'Équilatéral'];
        // Shuffle les 3 premiers, garder Équilatéral à la fin dans options[3]
        return {
          q: <>Un triangle a un angle de {angle}°. Ce triangle est :</>,
          options: [opts[0], opts[1], opts[2], opts[3]],
          correct: correct,
          hint: angle < 90
            ? `${angle}° < 90° : tous les angles sont aigus → triangle acutangle.`
            : angle === 90
            ? `${angle}° = 90° : il possède exactement un angle droit → triangle rectangle.`
            : `${angle}° > 90° : il possède un angle obtus → triangle obtusangle.`,
        };
      } },
      // ang-9 : angle complémentaire (paramétrique)
      { key:'ang-9', gen: (rnd) => {
        const a = 5 + Math.floor(rnd() * 80); // 5..84°
        const good = 90 - a;
        const used = new Set([good]);
        let w1 = 180 - a; used.add(w1); // supplémentaire (piège classique)
        let w2 = a;        while (used.has(w2)) { w2 += 5; } used.add(w2);
        let w3 = good + 5; while (used.has(w3)) { w3 += 5; } used.add(w3);
        return {
          q: <>L'angle complémentaire de {a}° mesure :</>,
          options: [String(good)+'°', String(w1)+'°', String(w2)+'°', String(w3)+'°'],
          correct: 0,
          hint: `Complémentaires → somme = 90°. 90 − ${a} = ${good}°.`,
        };
      } },
      // ang-10 : angle supplémentaire (paramétrique)
      { key:'ang-10', gen: (rnd) => {
        const a = 10 + Math.floor(rnd() * 160); // 10..169°
        const good = 180 - a;
        const used = new Set([good]);
        let w1 = 90 - a; if (w1 <= 0) w1 = 90 + a; while (used.has(w1) || w1 <= 0) { w1++; } used.add(w1);
        let w2 = 360 - a; while (used.has(w2)) { w2--; } used.add(w2);
        let w3 = good + 10; while (used.has(w3) || w3 >= 180) { w3--; } used.add(w3);
        return {
          q: <>L'angle supplémentaire de {a}° mesure :</>,
          options: [String(good)+'°', String(w1)+'°', String(w2)+'°', String(w3)+'°'],
          correct: 0,
          hint: `Supplémentaires → somme = 180°. 180 − ${a} = ${good}°.`,
        };
      } },
    ],
    geometrie: [
      { key:'geo-1', q:'Un triangle équilatéral a :', options:['3 côtés égaux','2 côtés égaux','1 angle droit','Aucun côté égal'], correct:0, hint:'Équilatéral : 3 côtés de même longueur ET 3 angles de 60°.' },
      { key:'geo-2', q:"Un carré a :", options:["4 côtés égaux mais pas d'angles droits","4 angles droits mais pas de côtés égaux","4 côtés égaux et 4 angles droits","3 côtés"], correct:2, hint:'Carré = losange + rectangle : 4 côtés égaux + 4 angles droits.' },
      { key:'geo-3', q:'Un rectangle a :', options:['4 côtés égaux','4 angles droits','3 côtés','Des côtés courbes'], correct:1, hint:'Rectangle : 4 angles droits (côtés opposés égaux mais pas nécessairement tous les 4).' },
      { key:'geo-4', q:'Le cercle est défini par :', options:['Son centre et son rayon','Sa base','Ses sommets','Sa hauteur'], correct:0, hint:'Cercle = ensemble des points à distance r (rayon) du centre.' },
      { key:'geo-5', q:'Un losange a toujours :', options:['4 angles droits','4 côtés égaux','Des diagonales égales','Des côtés opposés perpendiculaires'], correct:1, hint:"Losange = 4 côtés égaux. Les angles peuvent ne pas être droits (sinon ce serait un carré)." },
      // geo-6 : diamètre d'un cercle (paramétrique) — plage élargie pour variabilité ≥ 20
      { key:'geo-6', gen: (rnd) => {
        const r = 2 + Math.floor(rnd() * 23); // rayon 2..24 cm (23 valeurs)
        const good = 2 * r;
        const wrong1 = r;      // confondu avec rayon
        const wrong2 = 3 * r;  // ×3 erreur
        const used = new Set([good, wrong1, wrong2]);
        let w3 = r * r; while (used.has(w3)) { w3++; }
        return {
          q: <>Un cercle a un rayon de {r} cm. Son diamètre mesure :</>,
          options: [String(wrong1)+' cm', String(good)+' cm', String(wrong2)+' cm', String(w3)+' cm'],
          correct: 1,
          hint: `Diamètre = 2 × rayon = 2 × ${r} = ${good} cm.`,
        };
      } },
      { key:'geo-7', q:'Un triangle rectangle possède :', options:['3 angles droits','1 angle droit exactement','2 angles droits','Aucun angle droit'], correct:1, hint:'Rectangle = 1 angle droit. Le mot "rectangle" désigne cet angle.' },
      { key:'geo-8', q:'Un triangle isocèle possède :', options:['3 côtés égaux','2 côtés égaux','1 axe de symétrie','Les deux dernières réponses'], correct:3, hint:'Isocèle : 2 côtés égaux, et donc 1 axe de symétrie.' },
      { key:'geo-9', q:'Quel quadrilatère a exactement 2 axes de symétrie et 4 angles droits ?', options:['Carré','Rectangle (non carré)','Losange','Trapèze'], correct:1, hint:'Rectangle non carré : 2 axes (médianes), 4 angles droits.' },
      { key:'geo-10', q:"Le périmètre d'un cercle s'appelle :", options:["L'aire","Le rayon","La circonférence","Le diamètre"], correct:2, hint:'La circonférence est le périmètre du cercle.' },
    ],
    aires: [
      // air-1 : périmètre d'un carré — plage élargie (20 valeurs → variabilité ≥ 20)
      { key:'air-1', gen: (rnd) => {
        const c = 3 + Math.floor(rnd() * 20); // côté 3..22 cm
        const good = 4 * c;
        const wrong1 = 2 * c;   // ×2 erreur
        const wrong2 = c * c;   // aire
        const used = new Set([good, wrong1, wrong2]);
        let w3 = 4 + c; while (used.has(w3)) { w3++; }
        return {
          q: <>Le périmètre d'un carré de côté {c} cm vaut :</>,
          options: [String(wrong1)+' cm', String(good)+' cm', String(wrong2)+' cm²', String(w3)+' cm'],
          correct: 1,
          hint: `P = 4 × côté = 4 × ${c} = ${good} cm.`,
        };
      } },
      // air-2 : aire d'un rectangle — correction doublons (périmètre vs somme)
      { key:'air-2', gen: (rnd) => {
        const L = 4 + Math.floor(rnd() * 12); // 4..15
        let l = 2 + Math.floor(rnd() * 8);    // 2..9
        if (l === L) l = L > 2 ? L - 1 : L + 1; // L ≠ l
        const good = L * l;
        const wrong1 = 2 * (L + l); // périmètre
        // S'assurer que wrong1 ≠ good
        const used = new Set([good]);
        let v1 = wrong1; while (used.has(v1)) { v1 += 2; } used.add(v1);
        let v2 = L + l;  while (used.has(v2)) { v2 += 1; } used.add(v2);
        let v3 = good + l; while (used.has(v3)) { v3 += 1; } used.add(v3);
        return {
          q: <>L'aire d'un rectangle de longueur {L} cm et largeur {l} cm :</>,
          options: [String(v1)+' cm²', String(good)+' cm²', String(v2)+' cm²', String(v3)+' cm²'],
          correct: 1,
          hint: `A = L × l = ${L} × ${l} = ${good} cm².`,
        };
      } },
      // air-3 : aire d'un carré — côté ≥ 5 pour éviter c=4 (4c=c²=16), ≥ 20 valeurs
      { key:'air-3', gen: (rnd) => {
        const c = 5 + Math.floor(rnd() * 20); // côté 5..24 cm (20 valeurs, c≥5 → 4c < c²)
        const good = c * c;
        const wrong1 = 4 * c;   // périmètre (toujours ≠ good car c≥5 → 4c < c²)
        const used = new Set([good, wrong1]);
        let v2 = 2 * c; while (used.has(v2)) { v2++; } used.add(v2);
        let v3 = good + c; while (used.has(v3)) { v3++; } used.add(v3);
        return {
          q: <>L'aire d'un carré de côté {c} cm :</>,
          options: [String(wrong1)+' cm²', String(v2)+' cm²', String(good)+' cm²', String(v3)+' cm²'],
          correct: 2,
          hint: `A = côté² = ${c}² = ${good} cm².`,
        };
      } },
      // air-4 : statique — unité de l'aire (conceptuel)
      { key:'air-4', q:"L'aire se mesure en :", options:['cm','cm²','cm³','L'], correct:1, hint:'Aire = unité au carré. Volume = unité au cube.' },
      // air-5 : périmètre d'un rectangle — correction doublons (L*l vs 2*(L+l))
      { key:'air-5', gen: (rnd) => {
        const L = 5 + Math.floor(rnd() * 15); // 5..19
        let l  = 2 + Math.floor(rnd() * 8);   // 2..9
        if (l === L) l = L > 2 ? L - 1 : L + 1;
        const good = 2 * (L + l);
        const aire  = L * l;
        const used = new Set([good]);
        let v1 = aire;  while (used.has(v1)) { v1 += 1; } used.add(v1);
        let v2 = L + l; while (used.has(v2)) { v2 += 1; } used.add(v2);
        let v3 = 4 * L; while (used.has(v3)) { v3 += 1; } used.add(v3);
        return {
          q: <>Le périmètre d'un rectangle {L}×{l} cm :</>,
          options: [String(v1)+' cm', String(v2)+' cm', String(good)+' cm', String(v3)+' cm'],
          correct: 2,
          hint: `P = 2(L+l) = 2(${L}+${l}) = ${good} cm.`,
        };
      } },
      // air-6 : carré → aire (plage élargie pour variabilité ≥ 20)
      { key:'air-6', gen: (rnd) => {
        const c = 5 + Math.floor(rnd() * 20); // côté 5..24 cm (c≥5 → 4c≠c²)
        const good = c * c;
        const wrong1 = 4 * c;    // périmètre
        const used = new Set([good, wrong1]);
        let v2 = c * c + c; while (used.has(v2)) { v2++; } used.add(v2);
        let v3 = (c+1)*(c+1); while (used.has(v3)) { v3++; } used.add(v3);
        return {
          q: <>Un carré a un côté de {c} cm. Son aire :</>,
          options: [String(wrong1)+' cm', String(good)+' cm²', String(v2)+' cm²', String(v3)+' cm²'],
          correct: 1,
          hint: `A = c² = ${c}² = ${good}. Unité : cm² !`,
        };
      } },
      // air-7 : trouver la largeur à partir de l'aire (paramétrique)
      { key:'air-7', gen: (rnd) => {
        const L = 4 + Math.floor(rnd() * 9);  // 4..12
        const l = 3 + Math.floor(rnd() * 8);  // 3..10
        const A = L * l;
        const good = l;
        const used = new Set([good]);
        let v1 = A - L;
        if (v1 <= 0 || used.has(v1)) { v1 = l + 2; while (used.has(v1)) v1++; }
        used.add(v1);
        let v2 = A + L; while (used.has(v2)) { v2++; } used.add(v2);
        let v3 = l + 1; while (used.has(v3)) { v3++; } used.add(v3);
        return {
          q: <>Un rectangle a une aire de {A} cm² et une longueur de {L} cm. Sa largeur vaut :</>,
          options: [String(good)+' cm', String(v1)+' cm', String(v2)+' cm', String(v3)+' cm'],
          correct: 0,
          hint: `l = A ÷ L = ${A} ÷ ${L} = ${good} cm.`,
        };
      } },
      // air-8 : périmètre triangle équilatéral — plage élargie
      { key:'air-8', gen: (rnd) => {
        const c = 3 + Math.floor(rnd() * 20); // côté 3..22 cm
        const good = 3 * c;
        const wrong1 = 2 * c;
        const used = new Set([good, wrong1]);
        let v2 = c * c;    while (used.has(v2)) { v2++; } used.add(v2);
        let v3 = 4 * c;    while (used.has(v3)) { v3++; } used.add(v3);
        return {
          q: <>Le périmètre d'un triangle équilatéral de côté {c} cm :</>,
          options: [String(wrong1)+' cm', String(good)+' cm', String(v2)+' cm²', String(v3)+' cm'],
          correct: 1,
          hint: `P = 3 × côté = 3 × ${c} = ${good} cm.`,
        };
      } },
      // air-9 : aire d'un triangle (paramétrique)
      { key:'air-9', gen: (rnd) => {
        const base = 2 + Math.floor(rnd() * 14);
        const haut = 2 + Math.floor(rnd() * 14);
        const good = base * haut / 2;
        const used = new Set([good]);
        let p1 = base * haut; while (used.has(p1)) { p1++; } used.add(p1);
        let p2 = 2 * (base + haut); while (used.has(p2)) { p2 += 2; } used.add(p2);
        let p3 = good + base; while (used.has(p3)) { p3 += 2; }
        return {
          q: <>Aire d'un triangle de base {base} cm et hauteur {haut} cm :</>,
          options: [`${good} cm²`, `${p1} cm²`, `${p2} cm`, `${p3} cm²`],
          correct: 0,
          hint: `A = base × hauteur ÷ 2 = ${base} × ${haut} ÷ 2 = ${good} cm².`,
        };
      } },
      // air-10 : périmètre d'un rectangle — retrouver la largeur
      { key:'air-10', gen: (rnd) => {
        const L = 4 + Math.floor(rnd() * 12); // 4..15
        const l = 2 + Math.floor(rnd() * 8);  // 2..9
        const P = 2 * (L + l);
        const good = l;
        const used = new Set([good]);
        let v1 = L - l;
        if (v1 <= 0 || used.has(v1)) { v1 = l + 2; while (used.has(v1)) v1++; }
        used.add(v1);
        let v2 = P / 2 - L + 1; while (used.has(v2)) { v2++; } used.add(v2);
        let v3 = l + 2; while (used.has(v3)) { v3++; }
        return {
          q: <>Un rectangle a un périmètre de {P} cm et une longueur de {L} cm. Sa largeur :</>,
          options: [String(good)+' cm', String(v1)+' cm', String(v2)+' cm', String(v3)+' cm'],
          correct: 0,
          hint: `P = 2(L+l) → l = P/2 − L = ${P/2} − ${L} = ${good} cm.`,
        };
      } },
      // air-11 : aire d'un carré donné son côté (avec périmètre comme distracteur)
      { key:'air-11', gen: (rnd) => {
        let c = 3 + Math.floor(rnd() * 16); // 3..18 cm
        if (c === 4) c = 5;                 // évite aire=perim=16
        const aire = c * c;
        const perim = 4 * c;
        const used = new Set([aire, perim]);
        let v3 = 2 * c; while (used.has(v3)) { v3++; } used.add(v3);
        let v4 = aire + c; while (used.has(v4)) { v4++; }
        return {
          q: <>Aire d'un carré de périmètre {perim} cm :</>,
          options: [`${aire} cm²`, `${perim} cm²`, `${v3} cm²`, `${v4} cm²`],
          correct: 0,
          hint: `Côté = périmètre ÷ 4 = ${perim} ÷ 4 = ${c} cm. Aire = ${c}² = ${aire} cm².`,
        };
      } },
      // air-12 : unité d'aire — conversion m² ↔ dm²
      { key:'air-12', gen: (rnd) => {
        const m2 = 1 + Math.floor(rnd() * 24);
        const good = m2 * 100;  // 1 m² = 100 dm²
        const p1 = m2 * 10;
        const p2 = m2 * 1000;
        const p3 = m2 * 10000;
        return {
          q: <><M>{m2} m²</M> en dm² :</>,
          options: [String(good)+' dm²', String(p1)+' dm²', String(p2)+' dm²', String(p3)+' dm²'],
          correct: 0,
          hint: `1 m = 10 dm → 1 m² = 10² = 100 dm². ${m2} m² = ${good} dm².`,
        };
      } },
      // air-13 : périmètre d'un carré à partir de son aire
      { key:'air-13', gen: (rnd) => {
        const c = 3 + Math.floor(rnd() * 10); // côté 3..12
        const aire = c * c;
        const good = 4 * c;
        const used = new Set([good]);
        let v1 = aire; while (used.has(v1)) { v1++; } used.add(v1);
        let v2 = 2 * c; while (used.has(v2)) { v2++; } used.add(v2);
        let v3 = good + c; while (used.has(v3)) { v3++; }
        return {
          q: <>Un carré a une aire de {aire} cm². Son périmètre :</>,
          options: [`${good} cm`, `${v1} cm`, `${v2} cm`, `${v3} cm`],
          correct: 0,
          hint: `Côté = √${aire} = ${c} cm. P = 4×${c} = ${good} cm.`,
        };
      } },
      // air-14 : aire d'un rectangle — retrouver la longueur
      { key:'air-14', gen: (rnd) => {
        const l = 3 + Math.floor(rnd() * 7);   // largeur 3..9
        const L = l + 1 + Math.floor(rnd() * 8); // longueur > largeur
        const A = L * l;
        const good = L;
        const used = new Set([good]);
        let v1 = A - l; while (used.has(v1) || v1 <= 0) { v1 += l; } used.add(v1);
        let v2 = A + l; while (used.has(v2)) { v2 += l; } used.add(v2);
        let v3 = good + 1; while (used.has(v3)) { v3++; }
        return {
          q: <>Un rectangle de largeur {l} cm a une aire de {A} cm². Sa longueur :</>,
          options: [String(good)+' cm', String(v1)+' cm', String(v2)+' cm', String(v3)+' cm'],
          correct: 0,
          hint: `L = A ÷ l = ${A} ÷ ${l} = ${good} cm.`,
        };
      } },
      // air-15 : périmètre d'un polygone quelconque (somme des côtés)
      { key:'air-15', gen: (rnd) => {
        const n = 4 + Math.floor(rnd() * 3); // 4..6 côtés
        const sides: number[] = [];
        for (let i = 0; i < n; i++) sides.push(2 + Math.floor(rnd() * 9));
        const good = sides.reduce((a,b) => a+b, 0);
        const used = new Set([good]);
        let v1 = good + sides[0]; while (used.has(v1)) v1++; used.add(v1);
        let v2 = good - sides[0]; while (used.has(v2) || v2 <= 0) v2 += 2; used.add(v2);
        let v3 = good + 1; while (used.has(v3)) v3++;
        return {
          q: <>Périmètre d'un polygone de {n} côtés : {sides.join(' ; ')} cm :</>,
          options: [`${good} cm`, `${v1} cm`, `${v2} cm`, `${v3} cm`],
          correct: 0,
          hint: `P = ${sides.join('+')} = ${good} cm.`,
        };
      } },
      // air-16 : aire d'un carré — côté donné par fraction entière
      { key:'air-16', gen: (rnd) => {
        let c = 3 + Math.floor(rnd() * 23); // côté 3..25 cm
        if (c === 4) c = 5;                 // évite aire=perim=16
        const aire = c * c;
        let perim = 4 * c;
        let demi = 2 * c;
        const used = new Set([aire]);
        while (used.has(perim)) perim++; used.add(perim);
        while (used.has(demi)) demi++; used.add(demi);
        let v4 = c + 3; while (used.has(v4)) v4++;
        return {
          q: <>Un carré a un côté de {c} cm. Son aire en cm² :</>,
          options: [String(perim), String(demi), String(aire), String(v4)],
          correct: 2,
          hint: `Aire = côté² = ${c}² = ${aire} cm². Périmètre (4×${c}=${perim}) est une longueur, pas une aire.`,
        };
      } },
    ],
    symetrie: [
      { key:'sym-1', q:"Un rectangle a combien d'axes de symétrie ?", options:['0','1','2','4'], correct:2, hint:'Rectangle : 2 axes (les 2 médianes des côtés).' },
      { key:'sym-2', q:"Un carré a combien d'axes de symétrie ?", options:['1','2','4','8'], correct:2, hint:'Carré : 4 axes (2 médianes + 2 diagonales).' },
      { key:'sym-3', q:'Dans une symétrie axiale, une figure et son image sont :', options:['Identiques de même sens','Identiques mais inversées (comme dans un miroir)','Différentes','Plus petites'], correct:1, hint:'Symétrie axiale = effet miroir.' },
      { key:'sym-4', q:'Un triangle équilatéral a :', options:['0 axe','1 axe','3 axes','6 axes'], correct:2, hint:"Chaque hauteur d'un équilatéral est aussi un axe de symétrie." },
      { key:'sym-5', q:'Par symétrie axiale, les longueurs sont :', options:['Divisées par 2','Conservées','Doublées','Mises au carré'], correct:1, hint:'Une symétrie conserve toujours les longueurs et les angles.' },
      { key:'sym-6', q:"Un cercle a combien d'axes de symétrie ?", options:['0','2','4','Une infinité'], correct:3, hint:'Tout diamètre est un axe de symétrie → infinité d\'axes.' },
      { key:'sym-7', q:"Le symétrique d'un point par rapport à un axe est :", options:["Sur l'axe","À égale distance de l'axe, de l'autre côté","Plus loin que le point d'origine","Confondu avec le point d'origine"], correct:1, hint:"Le pied de la perpendiculaire est le milieu du segment [AA']." },
      { key:'sym-8', q:'Par symétrie axiale, les angles sont :', options:['Doublés','Conservés','Inversés','Réduits de moitié'], correct:1, hint:'Une symétrie conserve tous les angles.' },
    ],
    unites: [
      // uni-1..3 : statiques — définitions fondamentales
      { key:'uni-1', q:'1 m =', options:['10 cm','100 cm','1000 cm','100 mm'], correct:1, hint:'1 m = 100 cm = 1000 mm.' },
      { key:'uni-2', q:'1 kg =', options:['100 g','1000 g','10 g','1 t'], correct:1, hint:'1 kg = 1000 g.' },
      { key:'uni-3', q:'1 L =', options:['10 mL','100 mL','1000 mL','1 dL'], correct:2, hint:'1 L = 100 cL = 1000 mL.' },
      // uni-9 : km → m (paramétrique)
      { key:'uni-9', gen: (rnd) => {
        const km = 1 + Math.floor(rnd() * 20); // 1..20 km
        const good = km * 1000;
        const wrong1 = km * 100;    // ÷10 erreur
        const wrong2 = km * 10;     // ÷100 erreur
        const wrong3 = km * 10000;
        return {
          q: <>Convertis : <M>{km} km =</M></>,
          options: [String(good)+' m', String(wrong1)+' m', String(wrong2)+' m', String(wrong3)+' m'],
          correct: 0,
          hint: `1 km = 1000 m → ${km} km = ${good} m.`,
        };
      } },
      // uni-10 : L → mL (paramétrique) — plage élargie pour variabilité ≥ 20
      { key:'uni-10', gen: (rnd) => {
        const L = 1 + Math.floor(rnd() * 20); // 1..20 L
        const good = L * 1000;
        const wrong1 = L * 100;   // ÷10 erreur
        const wrong2 = L * 10;    // ÷100 erreur
        const wrong3 = L * 10000;
        return {
          q: <>Convertis : <M>{L} L =</M></>,
          options: [String(good)+' mL', String(wrong1)+' mL', String(wrong2)+' mL', String(wrong3)+' mL'],
          correct: 0,
          hint: `1 L = 1000 mL → ${L} L = ${good} mL.`,
        };
      } },
      // uni-4 : conversion h min → min (paramétrique)
      { key:'uni-4', gen: (rnd) => {
        const h = 1 + Math.floor(rnd() * 4);          // 1..4 h
        const minChoice = [5,10,15,20,25,30,35,40,45,50,55];
        const min = minChoice[Math.floor(rnd() * minChoice.length)];
        const good = h * 60 + min;
        const wrong1 = h * 100 + min;   // base 10 erreur
        const wrong2 = h * 60 - min;    // soustraction
        const used = new Set([good, wrong1, wrong2]);
        let w3 = good + 30; while (used.has(w3)) { w3 += 5; }
        return {
          q: <>Convertis : {h} h {min} min =</>,
          options: [String(good)+' min', String(wrong1)+' min', String(wrong2)+' min', String(w3)+' min'],
          correct: 0,
          hint: `${h} h = ${h*60} min, +${min} min = ${good} min. Attention : pas en base 10 !`,
        };
      } },
      // uni-5 : kg → g — plage élargie (10 valeurs → variabilité OK)
      { key:'uni-5', gen: (rnd) => {
        const kg = 1 + Math.floor(rnd() * 20); // 1..20 kg
        const good = kg * 1000;
        const wrong1 = kg * 100;   // ÷10 erreur
        const wrong2 = kg * 10;    // ÷100 erreur
        const wrong3 = kg * 10000;
        return {
          q: <>Convertis : <M>{kg} kg =</M></>,
          options: [String(wrong1)+' g', String(wrong2)+' g', String(good)+' g', String(wrong3)+' g'],
          correct: 2,
          hint: `1 kg = 1000 g → ${kg} kg = ${good} g.`,
        };
      } },
      // uni-6 : h min → min (variante paramétrique)
      { key:'uni-6', gen: (rnd) => {
        const h = 1 + Math.floor(rnd() * 4);
        const minChoice = [5,10,15,20,25,30,35,40,45,50];
        const min = minChoice[Math.floor(rnd() * minChoice.length)];
        const good = h * 60 + min;
        const wrong1 = h * 100 + min;
        const used = new Set([good, wrong1]);
        let v2 = good + 60; while (used.has(v2)) { v2 += 5; } used.add(v2);
        // Pièges sous forme décimale (1h15 → 1,15 h → ×60 = 69)
        const wrong3 = Math.floor((h + min / 100) * 60);
        let v3 = wrong3; while (used.has(v3)) { v3 += 5; } used.add(v3);
        return {
          q: <>Convertis : <M>{h} h {min} min =</M></>,
          options: [String(good)+' min', String(wrong1)+' min', String(v2)+' min', String(v3)+' min'],
          correct: 0,
          hint: `${h}h = ${h*60} min, +${min} min = ${good} min. Attention : ${h},${min < 10 ? '0' : ''}${min} h ≠ ${h}h${min < 10 ? '0' : ''}${min}min !`,
        };
      } },
      // uni-7 : cm → m — plage élargie (20 valeurs)
      { key:'uni-7', gen: (rnd) => {
        const cm = (1 + Math.floor(rnd() * 20)) * 100; // 100, 200, ..., 2000 cm
        const good = cm / 100;
        const wrong1 = cm / 10;     // ÷ 10
        const wrong2 = cm * 10;     // × 10
        const wrong3 = cm / 1000;   // km erreur
        const fmt = (n: number) => Number.isInteger(n) ? String(n) : n.toFixed(1);
        return {
          q: <>Convertis : {cm} cm =</>,
          options: [fmt(good)+' m', fmt(wrong1)+' m', fmt(wrong2)+' m', fmt(wrong3)+' km'],
          correct: 0,
          hint: `${cm} cm ÷ 100 = ${fmt(good)} m.`,
        };
      } },
      // uni-8 : g → kg — multiples de 1000 pour éviter doublons ÷100 vs ×10
      { key:'uni-8', gen: (rnd) => {
        // Multiples de 1000 entre 1000 et 20000 g (20 valeurs) → good est entier
        const g = (1 + Math.floor(rnd() * 20)) * 1000; // 1000..20000 g
        const good = g / 1000;       // entier exact
        const wrong1 = g / 100;      // ÷100 au lieu de ÷1000 (10× trop grand)
        const wrong2 = g / 10000;    // ÷10000 (10× trop petit)
        const used = new Set([good, wrong1, wrong2]);
        let w3 = good * 1000; while (used.has(w3)) { w3 += good; }
        const fmt = (n: number) => Number.isInteger(n) ? String(n) : n.toFixed(1);
        return {
          q: <>Convertis : {g} g =</>,
          options: [fmt(good)+' kg', fmt(wrong1)+' kg', fmt(wrong2)+' kg', fmt(w3)+' kg'],
          correct: 0,
          hint: `${g} g ÷ 1000 = ${fmt(good)} kg.`,
        };
      } },
      { key:'uni-11', q:'1 tonne (t) correspond à :', options:['100 kg','1 000 kg','10 000 kg','1 kg'], correct:1, hint:'1 t = 1 000 kg. Un éléphant d\'Afrique adulte pèse environ 5 à 6 tonnes.' },
      { key:'uni-12', q:'1 cm³ d\'eau pure pèse environ :', options:['1 mg','1 g','1 kg','1 L'], correct:1, hint:'1 cm³ d\'eau = 1 g. Donc 1 L (= 1 000 cm³) d\'eau pèse 1 kg.' },
    ],
  },
  PICK: {
    numeration: 4, operations: 4, fractions: 3, proportion: 3, angles: 3,
    geometrie: 4, aires: 3, symetrie: 3, unites: 3,
  },
  PLANS: {
    numeration: {
      'non-acquis': ['Revoir le tableau de numération (unités/dizaines/centaines/…/dixièmes/centièmes)', 'Lire et écrire les nombres décimaux en lettres', 'Comparer 2 décimaux : aligner les virgules'],
      'fragile':    ['Exercices de rangement et encadrement de décimaux']
    },
    operations: {
      'non-acquis': ['Apprendre par cœur les priorités : × et ÷ avant + et −, parenthèses en premier', 'Technique de la division posée', 'Tables de multiplication par cœur'],
      'fragile':    ["Calculs avec parenthèses imbriquées", "Estimation : ordre de grandeur d'un résultat"]
    },
    fractions: {
      'non-acquis': ['Comprendre : fraction = partage en parts égales', 'Fractions équivalentes (multiplier en haut et en bas par le même nombre)', 'Prendre une fraction d\'un nombre (1/2 de 30 = 15)'],
      'fragile':    ['Comparer des fractions simples']
    },
    proportion: {
      'non-acquis': ['Règle de trois (produit en croix)', 'Pourcentages simples : 10 %, 25 %, 50 %', 'Situations concrètes : prix, recettes, distance'],
      'fragile':    ['Échelle et conversions de proportionnalité']
    },
    angles: {
      'non-acquis': ["Mémoriser : aigu (<90°), droit (=90°), obtus (>90°), plat (=180°)", 'Utiliser un rapporteur', "Somme des angles d'un triangle = 180°"],
      'fragile':    ['Construire un angle de mesure donnée']
    },
    geometrie: {
      'non-acquis': ['Propriétés des triangles (équilatéral, isocèle, rectangle)', 'Propriétés des quadrilatères (carré, rectangle, losange)', 'Notions de cercle (centre, rayon, diamètre)'],
      'fragile':    ['Reconnaître les figures à partir de leurs propriétés']
    },
    aires: {
      'non-acquis': ['Formules : P_carré=4a, P_rectangle=2(L+l), A_carré=a², A_rectangle=L×l', 'Attention aux unités : aire en cm², m²…', 'Différence périmètre (contour) vs aire (surface)'],
      'fragile':    ['Calculer aire et périmètre de figures composées']
    },
    symetrie: {
      'non-acquis': ["Construire le symétrique d'un point, d'une figure", 'Reconnaître les axes de symétrie des figures usuelles', 'Propriétés conservées : longueurs, angles'],
      'fragile':    ['Compléter une figure par symétrie']
    },
    unites: {
      'non-acquis': ['Tableau des longueurs (km, hm, dam, m, dm, cm, mm)', 'Masses (kg, g, mg) et contenances (L, dL, cL, mL)', 'Attention aux heures : 1h30 = 1h30min = 90 min, pas 130'],
      'fragile':    ['Conversions complexes et chaînes de conversions']
    },
  },
};
