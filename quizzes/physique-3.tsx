// Source éditable — quiz physique-3. Régénéré automatiquement dans index.html via build.sh.
window.ALL_QUIZZES['physique-3'] = {
  SEARCH_SITES: 'site:fr.khanacademy.org OR site:lumni.fr OR site:maxicours.com',
  YT_SUFFIX: 'physique chimie brevet college',
  SUMMER_TOPIC: 'physique-chimie',
  SUBJECT: { id:'physique-3', name:'Physique-Chimie', short:'Physique', level:'Fin de 3ème (brevet)', mark:'⚛', tagline:'Évaluation brevet' },
  DOMAINS: {
    forces:    { id:'forces',    name:'Forces & interactions',                  short:'Forces',    coef:3, color:'#b45309', icon:'F', search:'forces interactions 3eme' },
    poids:     { id:'poids',     name:'Poids & masse (P = m × g)',              short:'Poids',     coef:3, color:'#166a39', icon:'g', search:'poids masse gravite 3eme' },
    cinematique:{ id:'cinematique',name:'Mouvement, vitesse & accélération',    short:'Mouvement', coef:3, color:'#1d4ed8', icon:'→', search:'mouvement vitesse 3eme' },
    energie:   { id:'energie',   name:'Énergie (formes, conservation)',         short:'Énergie',   coef:4, color:'#c2410c', icon:'E', search:'energie formes conservation 3eme' },
    electricite:{ id:'electricite',name:'Puissance & énergie électrique',       short:'Électricité',coef:4, color:'#ca8a04', icon:'⚡',search:'puissance energie electrique 3eme' },
    chimie:    { id:'chimie',    name:'Transformations chimiques (équations)',   short:'Chimie',   coef:4, color:'#a01b34', icon:'⇌', search:'transformation chimique equation bilan 3eme' },
    ions:      { id:'ions',      name:'Ions & pH',                               short:'Ions/pH',  coef:3, color:'#059669', icon:'⊕', search:'ions pH acide base 3eme' },
    astronomie:{ id:'astronomie',name:'Univers, système solaire',               short:'Univers',   coef:2, color:'#7c3aed', icon:'○', search:'systeme solaire univers annee lumiere 3eme' },
    signaux:   { id:'signaux',   name:'Signaux sonores & lumineux',              short:'Signaux',  coef:2, color:'#db2777', icon:'♪', search:'signal son lumiere frequence 3eme' },
  },
  RESOURCES: [
    { label:'Khan Academy Physique 3ème',author:'Cours + exos',       url:'https://fr.khanacademy.org/science/college-physique-chimie-3eme-v2' },
    { label:'Lumni — Physique 3ème',     author:'France TV éducation',url:'https://www.lumni.fr/college/troisieme/physique-chimie' },
    { label:'PhET Simulations',          author:'Université Colorado',url:'https://phet.colorado.edu/fr/' },
    { label:'Annales brevet Physique',   author:'Sujets + corrigés',  url:'https://www.brevetdescolleges.fr/annales/' },
  ],
  POOL: {
    forces: [
      { key:'for-1', q:'Une force se représente par :', options:['Un point','Un vecteur (flèche)','Un cercle','Une courbe'], correct:1, hint:'Une force a 4 caractéristiques : point d\'application, direction, sens, intensité. → Vecteur.' },
      { key:'for-2', q:'L\'unité d\'une force est :', options:['Le kilogramme','Le newton (N)','Le joule','Le watt'], correct:1, hint:'Force → newton (N). 1 N = 1 kg·m/s².' },
      { key:'for-3', q:'Deux objets qui ne se touchent pas peuvent-ils exercer une force l\'un sur l\'autre ?', options:['Non','Oui (ex. gravitation, aimantation)','Seulement s\'ils sont chauds','Seulement dans l\'eau'], correct:1, hint:'Les interactions à distance (gravité, électrique, magnétique) sont classiques en physique.' },
      { key:'for-4', q:'Le principe des actions réciproques (3ᵉ loi de Newton) dit :', options:['A tire sur B, donc B reste immobile','Si A exerce une force sur B, B exerce la même force sur A en sens opposé','Les forces s\'annulent toujours','Il n\'y a pas de réaction'], correct:1, hint:'Action-réaction : F_A→B = − F_B→A, mêmes valeur et direction, sens opposés.' },
      { key:'for-5', q:'Un livre posé sur une table est soumis à :', options:['Aucune force','Son poids uniquement','Son poids et la réaction de la table','Seulement la table'], correct:2, hint:'2 forces qui s\'annulent → livre en équilibre.' },
      { key:'for-6', q:'Le poids d\'un objet agit :', options:['Verticalement vers le bas','Vers le centre de la Terre','Horizontalement','Il n\'y a pas de direction'], correct:0, hint:'Poids = verticale vers le bas (approximation locale).' },
      { key:'for-7', q:'Un objet est en équilibre si :', options:['Une seule force l\'agit','La résultante de toutes les forces est nulle','Il est lourd','Il est fixe sur une table'], correct:1, hint:'Équilibre = somme vectorielle des forces = 0 N. Les forces se compensent.' },
      { key:'for-8', q:'La force de frottement :', options:['Accélère toujours les objets','S\'oppose au mouvement','Augmente la vitesse','N\'existe pas entre surfaces'], correct:1, hint:'Frottement = résistance au mouvement → tend à freiner, opposé à la direction du déplacement.' },
      { key:'for-9', q:'La gravitation universelle entre deux corps dépend de :', options:['Leurs couleurs','Leurs masses et leur distance','Leur température','Leur vitesse'], correct:1, hint:'Loi de gravitation de Newton : F ∝ m₁ × m₂ / d². Plus massifs et proches = force plus grande.' },
      { key:'for-10', q:'La tension d\'un fil (force d\'un ressort ou câble) est :', options:['Toujours dirigée vers le sol','Dirigée le long du fil vers son point d\'attache','Toujours horizontale','Nulle'], correct:1, hint:'Tension d\'un fil = force qui tire le long du fil. Si câble vertical → vers le haut sur l\'objet.' },
    ],
    poids: [
      { key:'poi-1', q:<>Relation entre poids et masse :</>, options:[<><M>P = m + g</M></>, <><M>P = m × g</M></>, <><M>P = m / g</M></>, <><M>m = P × g</M></>], correct:1, hint:'P (N) = m (kg) × g (N/kg).' },
      { key:'poi-2', q:'Sur Terre, g vaut environ :', options:['1 N/kg','10 N/kg','100 N/kg','0'], correct:1, hint:'g ≈ 9,8 N/kg, arrondi à 10 au brevet.' },
      { key:'poi-3', gen: (rnd) => {
        const m = 1 + Math.floor(rnd() * 80);
        const P = m * 10;
        const used = new Set([P]);
        let d1 = m, d2 = P * 10, d3 = Math.max(1, Math.round(m / 10));
        [d1, d2, d3] = [d1, d2, d3].map(x => { while (used.has(x)) x++; used.add(x); return x; });
        return {
          q: <>Une masse de {m} kg a un poids sur Terre d'environ (g = 10 N/kg) :</>,
          options: [`${P} N`, `${d1} N`, `${d2} N`, `${d3} N`],
          correct: 0,
          hint: `P = m × g = ${m} × 10 = ${P} N.`,
        };
      } },
      { key:'poi-4', q:'Si on emmène un objet sur la Lune, sa MASSE :', options:['Augmente','Diminue','Reste la même','Disparaît'], correct:2, hint:'Masse = quantité de matière, constante. Poids change (g_Lune ≈ 1,6 N/kg).' },
      { key:'poi-5', gen: (rnd) => {
        // Calcul P sur la Lune, g ≈ 1,6 N/kg. Masses divisibles par 5 pour résultats entiers.
        const m = 5 * (1 + Math.floor(rnd() * 20));
        const P = Math.round(m * 1.6);
        const used = new Set([P]);
        let d1 = m * 10, d2 = m, d3 = Math.round(m / 6);
        [d1, d2, d3] = [d1, d2, d3].map(x => { while (used.has(x) || x <= 0) x++; used.add(x); return x; });
        return {
          q: <>Sur la Lune (g ≈ 1,6 N/kg), le poids d'un objet de {m} kg est environ :</>,
          options: [`${P} N`, `${d1} N`, `${d2} N`, `${d3} N`],
          correct: 0,
          hint: `P_Lune = m × g_Lune = ${m} × 1,6 ≈ ${P} N.`,
        };
      } },
      { key:'poi-6', gen: (rnd) => {
        const m = 1 + Math.floor(rnd() * 80);
        const P = m * 10;
        const used = new Set([m]);
        let d1 = P, d2 = P * 10, d3 = +(P / 100).toFixed(2);
        [d1, d2, d3] = [d1, d2, d3].map(x => { while (used.has(x)) x++; used.add(x); return x; });
        const fmt = v => String(v).replace('.', ',');
        return {
          q: <>Un objet pèse {P} N sur Terre (g = 10 N/kg). Sa masse est :</>,
          options: [`${m} kg`, `${fmt(d1)} kg`, `${fmt(d2)} kg`, `${fmt(d3)} kg`],
          correct: 0,
          hint: `m = P / g = ${P} / 10 = ${m} kg.`,
        };
      } },
      { key:'poi-7', q:'Le poids est une force. Elle s\'exerce :', options:['Vers le haut','Verticalement vers le bas','Horizontalement','Dans toutes les directions'], correct:1, hint:'Poids = attraction gravitationnelle de la Terre = vecteur vertical dirigé vers le bas.' },
      { key:'poi-8', gen: (rnd) => {
        // Astres et leur g (arrondi pédagogique)
        const astres = [
          { nom:'Mars', g:3.7 },
          { nom:'Mercure', g:3.7 },
          { nom:'Vénus', g:8.9 },
          { nom:'Jupiter', g:24.8 },
          { nom:'Saturne', g:10.4 },
        ];
        const a = astres[Math.floor(rnd() * astres.length)];
        const m = 2 + Math.floor(rnd() * 30);
        const P = Math.round(m * a.g);
        const used = new Set([P]);
        let d1 = m * 10, d2 = m, d3 = Math.round(a.g);
        [d1, d2, d3] = [d1, d2, d3].map(x => { while (used.has(x)) x++; used.add(x); return x; });
        return {
          q: <>Sur {a.nom}, g ≈ {String(a.g).replace('.', ',')} N/kg. Le poids d'une masse de {m} kg sur {a.nom} est environ :</>,
          options: [`${P} N`, `${d1} N`, `${d2} N`, `${d3} N`],
          correct: 0,
          hint: `P = m × g = ${m} × ${String(a.g).replace('.', ',')} ≈ ${P} N.`,
        };
      } },
      { key:'poi-9', q:'La distinction masse/poids est importante car :', options:['Elles ont les mêmes unités','La masse est invariable, le poids dépend de l\'astre','Ce sont des synonymes','Seul le poids a une unité'], correct:1, hint:'Masse (kg) : quantité de matière, ne change pas. Poids (N) = m × g, change selon l\'astre.' },
      // Générateur : P = m × g (3 modes : calc P Terre, calc m Terre, autre astre)
      // Générateur : comparaison poids sur différents astres
      { key:'poi-11', gen: (rnd) => {
        // Masse sur Terre, compare poids sur deux astres
        const m = 5 * (2 + Math.floor(rnd() * 10)); // 10..55 kg par pas de 5
        const astres = [
          { nom:'la Lune', g:1.6 }, { nom:'Mars', g:3.7 }, { nom:'Jupiter', g:26 }, { nom:'Vénus', g:8.9 }
        ];
        const astre = astres[Math.floor(rnd() * astres.length)];
        const P_terre = m * 10;
        const P_astre = +(m * astre.g).toFixed(1);
        const rapport = +(P_terre / P_astre).toFixed(1);
        const used = new Set([P_astre]);
        let d1 = P_terre, d2 = +(P_astre * 2).toFixed(1), d3 = +(P_astre + 20).toFixed(1);
        [d1, d2, d3] = [d1, d2, d3].map(x => { while (used.has(x)) x = +(x + 1).toFixed(1); used.add(x); return x; });
        return {
          q: <>Une personne de {m} kg a un poids de {P_terre} N sur Terre. Sur {astre.nom} (g = {String(astre.g).replace('.', ',')} N/kg), son poids vaut :</>,
          options: [`${String(P_astre).replace('.', ',')} N`, `${String(d1).replace('.', ',')} N`, `${String(d2).replace('.', ',')} N`, `${String(d3).replace('.', ',')} N`],
          correct: 0,
          hint: `P = m × g = ${m} × ${String(astre.g).replace('.', ',')} = ${String(P_astre).replace('.', ',')} N (environ ${rapport} fois moins que sur Terre).`,
        };
      } },
      // Générateur : conversion g/N et questions sur la valeur de g
      { key:'poi-12', gen: (rnd) => {
        const mode = Math.floor(rnd() * 2);
        if (mode === 0) {
          // Quelle est la masse connaissant le poids ?
          const masses = [2, 5, 10, 20, 25, 30, 40, 50, 75, 100];
          const m = masses[Math.floor(rnd() * masses.length)];
          const P = m * 10;
          const used = new Set([m]);
          let d1 = P, d2 = m * 2, d3 = Math.max(1, m - 5);
          [d1, d2, d3] = [d1, d2, d3].map(x => { while (used.has(x)) x++; used.add(x); return x; });
          return {
            q: <>Un objet a un poids de {P} N sur Terre (g = 10 N/kg). Sa masse est :</>,
            options: [`${m} kg`, `${d1} kg`, `${d2} kg`, `${d3} kg`], correct: 0,
            hint: `m = P / g = ${P} / 10 = ${m} kg.`,
          };
        } else {
          // Poids d'un objet donné en grammes
          const grams = [500, 1000, 2000, 250, 100, 200, 750, 1500];
          const g = grams[Math.floor(rnd() * grams.length)];
          const m = g / 1000;
          const P = +(m * 10).toFixed(1);
          const used = new Set([P]);
          let d1 = +(g * 10).toFixed(1), d2 = +(P * 10).toFixed(1), d3 = +(P / 10).toFixed(2);
          [d1, d2, d3] = [d1, d2, d3].map(x => { while (used.has(x)) x = +(x + 0.5).toFixed(2); used.add(x); return x; });
          const fmt = v => String(v).replace('.', ',');
          return {
            q: <>Un objet a une masse de {g} g (soit {fmt(m)} kg). Son poids sur Terre est :</>,
            options: [`${fmt(P)} N`, `${fmt(d1)} N`, `${fmt(d2)} N`, `${fmt(d3)} N`], correct: 0,
            hint: `m = ${g} g = ${fmt(m)} kg. P = m × g = ${fmt(m)} × 10 = ${fmt(P)} N.`,
          };
        }
      } },
      // Statique : pourquoi la masse ne change pas mais le poids si
      { key:'poi-13', q:'Un objet pesant 80 N sur Terre est transporté sur Mars (g ≈ 3,7 N/kg). Sa MASSE sur Mars est :', options:['80 N','8 kg','Inférieure à 8 kg','8 kg — la masse est invariable'], correct:3, hint:'La masse (quantité de matière) = 8 kg partout. Seul le poids (m × g) change.' },
      { key:'poi-10', gen: (rnd) => {
        const mode = Math.floor(rnd() * 3); // 0=calc P Terre, 1=calc m Terre, 2=autre astre
        const masses = [1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 20, 25, 50, 100];
        const m = masses[Math.floor(rnd() * masses.length)];
        const g_terre = 10;
        function dedupN(correct, cands) {
          const used = new Set([correct]);
          const result = [];
          for (const c of cands) { if (!used.has(c)) { used.add(c); result.push(c); } if (result.length === 3) break; }
          let x = correct + 1; while (result.length < 3) { if (!used.has(x)) { used.add(x); result.push(x); } x++; }
          return result;
        }
        if (mode === 0) {
          const P = m * g_terre;
          const [d1,d2,d3] = dedupN(P, [P / 2, P * 2, m + g_terre, P + 10]);
          return {
            q: <>Un objet de masse {m} kg est sur Terre (g = 10 N/kg). Son poids est :</>,
            options: [`${P} N`, `${d1} N`, `${d2} N`, `${d3} N`], correct: 0,
            hint: `P = m × g = ${m} × 10 = ${P} N.`,
          };
        } else if (mode === 1) {
          const P = m * g_terre;
          const [d1,d2,d3] = dedupN(m, [m * 2, Math.max(1, Math.round(m / 2)), m + 3, m * 5]);
          return {
            q: <>Un objet pèse {P} N sur Terre (g = 10 N/kg). Sa masse est :</>,
            options: [`${m} kg`, `${d1} kg`, `${d2} kg`, `${d3} kg`], correct: 0,
            hint: `m = P / g = ${P} / 10 = ${m} kg.`,
          };
        } else {
          const astres = [
            { nom:'la Lune', g:1.6 },
            { nom:'Mars',    g:3.7 },
            { nom:'Jupiter', g:26.0 },
          ];
          const astre = astres[Math.floor(rnd() * astres.length)];
          const P = +(m * astre.g).toFixed(1);
          const d1 = m * g_terre; // erreur : utilise g Terre
          const [d2,d3] = (() => {
            const used = new Set([P, d1]);
            const cands = [+(P * 2).toFixed(1), +(P / 2).toFixed(1), +(P + 10).toFixed(1), +(P + 5).toFixed(1)];
            const res = [];
            for (const c of cands) { if (!used.has(c)) { used.add(c); res.push(c); } if (res.length === 2) break; }
            let x = +(P + 1).toFixed(1);
            while (res.length < 2) { if (!used.has(x)) { used.add(x); res.push(x); } x = +(x + 1).toFixed(1); }
            return res;
          })();
          return {
            q: <>Un objet de masse {m} kg est sur {astre.nom} (g = {astre.g} N/kg). Son poids est :</>,
            options: [`${P} N`, `${d1} N`, `${d2} N`, `${d3} N`], correct: 0,
            hint: `P = m × g = ${m} × ${astre.g} = ${P} N.`,
          };
        }
      } },
    ],
    cinematique: [
      { key:'cin-1', q:<>Formule de la vitesse moyenne :</>, options:[<><M>v = d × t</M></>, <><M>v = d / t</M></>, <><M>v = t / d</M></>, 'Aucune'], correct:1, hint:'v = distance / temps. m/s ou km/h.' },
      { key:'cin-2', gen: (rnd) => {
        // km/h → m/s, valeurs divisibles par 3,6 pour rester entier
        const pairs = [[18,5],[36,10],[54,15],[72,20],[90,25],[108,30],[126,35],[144,40],[180,50],[216,60]];
        const [kmh, ms] = pairs[Math.floor(rnd() * pairs.length)];
        const used = new Set([ms]);
        let d1 = kmh, d2 = +(kmh / 10).toFixed(1), d3 = ms * 3;
        [d1, d2, d3] = [d1, d2, d3].map(x => { while (used.has(x)) x++; used.add(x); return x; });
        const fmt = v => String(v).replace('.', ',');
        return {
          q: <>Convertis {kmh} km/h en m/s :</>,
          options: [`${ms} m/s`, `${fmt(d1)} m/s`, `${fmt(d2)} m/s`, `${fmt(d3)} m/s`],
          correct: 0,
          hint: `km/h → m/s : diviser par 3,6. ${kmh} / 3,6 = ${ms} m/s.`,
        };
      } },
      { key:'cin-3', q:'Un mouvement accéléré signifie :', options:['La vitesse diminue','La vitesse augmente','La vitesse est constante','Il n\'y a pas de vitesse'], correct:1, hint:'Accéléré = v augmente. Décéléré (ralenti) = v diminue. Uniforme = v constante.' },
      { key:'cin-4', gen: (rnd) => {
        const v = 20 * (3 + Math.floor(rnd() * 9)); // 60..220 km/h
        const t = 2 + Math.floor(rnd() * 5);        // 2..6 h
        const d = v * t;
        const used = new Set([v]);
        let d1 = d, d2 = v + t, d3 = Math.round(d / 2);
        [d1, d2, d3] = [d1, d2, d3].map(x => { while (used.has(x)) x++; used.add(x); return x; });
        return {
          q: <>Un train parcourt {d} km en {t} h. Sa vitesse moyenne est :</>,
          options: [`${v} km/h`, `${d1} km/h`, `${d2} km/h`, `${d3} km/h`],
          correct: 0,
          hint: `v = d / t = ${d} / ${t} = ${v} km/h.`,
        };
      } },
      { key:'cin-5', gen: (rnd) => {
        // m/s → km/h : × 3,6
        const pairs = [[5,18],[10,36],[15,54],[20,72],[25,90],[30,108],[35,126],[40,144],[45,162],[50,180],[55,198],[60,216]];
        const [ms, kmh] = pairs[Math.floor(rnd() * pairs.length)];
        const used = new Set([kmh]);
        let d1 = ms * 10, d2 = ms, d3 = Math.round(ms / 3.6);
        [d1, d2, d3] = [d1, d2, d3].map(x => { while (used.has(x)) x++; used.add(x); return x; });
        return {
          q: <>Un cycliste roule à {ms} m/s. Sa vitesse en km/h est :</>,
          options: [`${kmh} km/h`, `${d1} km/h`, `${d2} km/h`, `${d3} km/h`],
          correct: 0,
          hint: `m/s → km/h : × 3,6. ${ms} × 3,6 = ${kmh} km/h.`,
        };
      } },
      { key:'cin-6', q:'La distance de freinage d\'un véhicule dépend principalement de :', options:['La couleur du véhicule','La vitesse initiale (et de v²)','La masse du moteur uniquement','La température'], correct:1, hint:'Distance de freinage ∝ v². Doubler la vitesse quadruple la distance de freinage.' },
      { key:'cin-7', q:'Un objet en chute libre (sans frottement) a un mouvement :', options:['Uniforme','Uniformément accéléré','Ralenti','Circulaire'], correct:1, hint:'Chute libre = accélération constante g ≈ 10 m/s². Vitesse croît régulièrement.' },
      { key:'cin-8', q:'La notion de référentiel est nécessaire pour décrire un mouvement car :', options:['Le mouvement est absolu','Le mouvement est relatif à l\'observateur choisi','La vitesse est toujours nulle','Les forces n\'existent pas sans référentiel'], correct:1, hint:'Un passager immobile dans un train est en mouvement par rapport au sol. Tout dépend du référentiel.' },
      { key:'cin-9', q:'La distance parcourue par un véhicule se calcule par :', options:[<><M>d = v / t</M></>, <><M>d = v × t</M></>, <><M>d = t / v</M></>, 'Aucune formule'], correct:1, hint:'d = v × t (avec v en m/s et t en s → d en m). Ou v en km/h et t en h → d en km.' },
      // Générateur : v=d/t, conversions km/h↔m/s, chute libre v=g×t
      { key:'cin-10', gen: (rnd) => {
        const mode = Math.floor(rnd() * 4); // 0=calc v(km/h), 1=km/h→m/s, 2=m/s→km/h, 3=chute libre v=g×t
        const triplets_kmh = [
          { d:180, t:2, v:90 }, { d:300, t:3, v:100 }, { d:540, t:3, v:180 },
          { d:120, t:2, v:60 }, { d:400, t:4, v:100 }, { d:250, t:2, v:125 },
          { d:480, t:6, v:80 }, { d:350, t:5, v:70 },  { d:200, t:4, v:50 },
          { d:600, t:4, v:150 },
        ];
        const kmh_ms = [
          { kmh:36, ms:10 }, { kmh:72, ms:20 }, { kmh:90, ms:25 },
          { kmh:108, ms:30 }, { kmh:54, ms:15 }, { kmh:18, ms:5 },
          { kmh:144, ms:40 }, { kmh:126, ms:35 }, { kmh:180, ms:50 },
        ];
        // Chute libre : t en s (1..6), v = g×t, g=10
        const t_chute = [1, 2, 3, 4, 5, 6];
        if (mode === 0) {
          const tr = triplets_kmh[Math.floor(rnd() * triplets_kmh.length)];
          const d1 = tr.v + 20; const d2 = tr.v - 20; const d3 = tr.d + tr.t;
          return {
            q: <>Un train parcourt {tr.d} km en {tr.t} h. Sa vitesse moyenne est :</>,
            options: [`${tr.v} km/h`, `${d1} km/h`, `${d2} km/h`, `${d3} km/h`], correct: 0,
            hint: `v = d / t = ${tr.d} / ${tr.t} = ${tr.v} km/h.`,
          };
        } else if (mode === 1) {
          const c = kmh_ms[Math.floor(rnd() * kmh_ms.length)];
          const d1 = c.ms + 5; const d2 = c.kmh / 10; const d3 = c.ms * 3;
          return {
            q: <>{c.kmh} km/h correspond à combien de m/s ?</>,
            options: [`${c.ms} m/s`, `${d1} m/s`, `${d2} m/s`, `${d3} m/s`], correct: 0,
            hint: `Diviser par 3,6 : ${c.kmh} / 3,6 = ${c.ms} m/s.`,
          };
        } else if (mode === 2) {
          const c = kmh_ms[Math.floor(rnd() * kmh_ms.length)];
          const d1 = c.kmh + 18; const d2 = c.kmh - 18; const d3 = c.ms * 10;
          return {
            q: <>{c.ms} m/s correspond à combien de km/h ?</>,
            options: [`${c.kmh} km/h`, `${d1} km/h`, `${d2} km/h`, `${d3} km/h`], correct: 0,
            hint: `Multiplier par 3,6 : ${c.ms} × 3,6 = ${c.kmh} km/h.`,
          };
        } else {
          const t = t_chute[Math.floor(rnd() * t_chute.length)];
          const v = 10 * t;
          // Distracteurs : oubli facteur (t seul), g=5×t, v+5, tous distincts de v
          let d1 = v + 5; let d2 = 5 * t; let d3 = t;
          const used = new Set([v]);
          [d1, d2, d3] = [d1, d2, d3].map(x => { while (used.has(x)) x++; used.add(x); return x; });
          return {
            q: <>Un objet en chute libre (g = 10 m/s²) tombe pendant {t} s. Sa vitesse à l'arrivée est :</>,
            options: [`${v} m/s`, `${d1} m/s`, `${d2} m/s`, `${d3} m/s`], correct: 0,
            hint: `Chute libre : v = g × t = 10 × ${t} = ${v} m/s.`,
          };
        }
      } },
    ],
    energie: [
      { key:'ene-1', q:'L\'énergie se conserve :', options:['Elle peut disparaître','Elle se transforme mais la quantité totale se conserve','Elle augmente avec le temps','Elle dépend du lieu'], correct:1, hint:'Principe de conservation de l\'énergie : elle change de forme mais la somme totale reste constante.' },
      { key:'ene-2', q:'L\'unité de l\'énergie est :', options:['Le watt','Le joule (J)','Le newton','Le kelvin'], correct:1, hint:'Énergie : joule (J). Puissance : watt (W). 1 W = 1 J/s.' },
      { key:'ene-3', q:'L\'énergie cinétique dépend :', options:['De la masse uniquement','De la vitesse uniquement','De la masse et de la vitesse','De la taille'], correct:2, hint:'E_c = ½ × m × v². Dépend de la masse ET du carré de la vitesse.' },
      { key:'ene-4', q:'Parmi ces sources, lesquelles sont renouvelables ?', options:['Pétrole, charbon, gaz','Solaire, éolien, hydraulique, biomasse','Uranium','Aucune'], correct:1, hint:'Renouvelables : soleil, vent, eau, biomasse, géothermie. Fossiles et nucléaire = non renouvelables.' },
      { key:'ene-5', q:'Une éolienne convertit :', options:['Lumière en électricité','Énergie cinétique du vent en électricité','Chaleur en lumière','Nucléaire en chimique'], correct:1, hint:'Vent → rotation des pales (cinétique) → alternateur → électricité.' },
      { key:'ene-6', q:'Un vélo qui roule puis freine jusqu\'à l\'arrêt : son énergie cinétique :', options:['Disparaît','Se transforme en chaleur (frottements freins)','Devient électrique','Est stockée'], correct:1, hint:'Conservation de l\'énergie : le mouvement devient chaleur dans les freins.' },
      { key:'ene-7', q:'1 kWh =', options:['1000 W','3 600 000 J','60 W','3600 s'], correct:1, hint:'1 kWh = 1000 W × 3600 s = 3,6 × 10⁶ J.' },
      { key:'ene-8', q:'L\'énergie potentielle de pesanteur dépend de :', options:['La vitesse et la masse','La hauteur et la masse','La couleur','La température'], correct:1, hint:'E_pp = m × g × h. Plus l\'objet est haut et lourd, plus il a d\'énergie potentielle.' },
      { key:'ene-9', q:'Un barrage hydroélectrique convertit :', options:['Lumière → électricité','Énergie potentielle de l\'eau → électricité','Chaleur → électricité','Vent → électricité'], correct:1, hint:'Barrage : eau retenue en hauteur (E_pot) → chute → turbine (E_cinétique) → alternateur (électricité).' },
      { key:'ene-10', q:'Le rendement d\'un appareil est :', options:['Toujours 100 %','L\'énergie utile / énergie totale consommée (< 1)','Toujours 0','L\'énergie perdue'], correct:1, hint:'Rendement η = E_utile / E_totale. Toujours < 1 à cause des pertes (chaleur, frottements…).' },
      { key:'ene-11', q:'Si l\'énergie cinétique d\'un objet double (à masse constante), sa vitesse :', options:['Double','Est multipliée par √2','Est multipliée par 4','Reste la même'], correct:1, hint:'E_c = ½mv². Si E_c × 2 → v × √2 (car le carré de v double).' },
      // Générateur : rendement η = E_utile / E_totale × 100
      { key:'ene-12', gen: (rnd) => {
        const mode = Math.floor(rnd() * 2); // 0=calc rendement, 1=calc E_utile
        // Valeurs sympas : rendements ronds (en %)
        const cas = [
          { E_tot:1000, E_utile:400, rend:40, appareil:'un moteur électrique' },
          { E_tot:500, E_utile:100, rend:20, appareil:'une ampoule à incandescence' },
          { E_tot:200, E_utile:180, rend:90, appareil:'une LED' },
          { E_tot:2000, E_utile:1600, rend:80, appareil:'un alternateur' },
          { E_tot:1000, E_utile:250, rend:25, appareil:'un moteur thermique' },
          { E_tot:600, E_utile:300, rend:50, appareil:'une éolienne' },
          { E_tot:800, E_utile:640, rend:80, appareil:'un transformateur' },
          { E_tot:400, E_utile:60, rend:15, appareil:'une lampe halogène' },
        ];
        const c = cas[Math.floor(rnd() * cas.length)];
        if (mode === 0) {
          // Distracteurs sans collision : inversion (utile/tot×100), E_utile seul, erreur ×10
          const inv = Math.round(c.E_tot / c.E_utile * 100);
          const rawUtile = c.E_utile;
          const faux3 = c.rend + 30 <= 100 ? c.rend + 30 : c.rend - 30;
          // Garantir unicité
          const used = new Set([c.rend, inv, rawUtile, faux3]);
          let d3safe = faux3; while (used.has(d3safe)) d3safe++; used.add(d3safe);
          return {
            q: <>Pour {c.appareil}, l'énergie consommée est {c.E_tot} J et l'énergie utile est {c.E_utile} J. Le rendement est :</>,
            options: [`${c.rend} %`, `${inv} %`, `${rawUtile} %`, `${d3safe} %`], correct: 0,
            hint: `η = E_utile / E_totale × 100 = ${c.E_utile} / ${c.E_tot} × 100 = ${c.rend} %.`,
          };
        } else {
          const d1 = Math.round(c.E_utile * 1.5);
          const d2 = c.E_tot; // erreur : prendre l'énergie totale
          const d3 = Math.round(c.E_tot * c.rend / 100) + 50; // légère suresti
          const used = new Set([c.E_utile, d1, d2, d3]);
          let d3s = d3; while (used.has(d3s)) d3s += 10; used.add(d3s);
          return {
            q: <>Un appareil a un rendement de {c.rend} % et consomme {c.E_tot} J. L'énergie utile fournie est :</>,
            options: [`${c.E_utile} J`, `${d1} J`, `${d2} J`, `${d3s} J`], correct: 0,
            hint: `E_utile = η × E_totale = ${c.rend/100} × ${c.E_tot} = ${c.E_utile} J.`,
          };
        }
      } },
    ],
    electricite: [
      { key:'elec-1', q:<>Relation puissance-tension-intensité :</>, options:[<><M>P = U + I</M></>, <><M>P = U × I</M></>, <><M>P = U / I</M></>, <><M>P = U<sup>2</sup></M></>], correct:1, hint:'P (W) = U (V) × I (A).' },
      { key:'elec-2', gen: (rnd) => {
        // E = P × t en kWh, avec P en W et t en h
        const powers = [500, 1000, 1500, 2000, 2500, 3000];
        const times = [1, 2, 3, 4, 5, 6, 8, 10];
        const P = powers[Math.floor(rnd() * powers.length)];
        const t = times[Math.floor(rnd() * times.length)];
        const E = (P / 1000) * t; // kWh
        const fmt = v => String(v).replace('.', ',');
        const used = new Set([E]);
        let d1 = P * t;               // oubli conversion W→kW
        let d2 = E * 10;
        let d3 = +(E / 10).toFixed(2);
        [d1, d2, d3] = [d1, d2, d3].map(x => { while (used.has(x)) x = +(x + 0.5).toFixed(2); used.add(x); return x; });
        return {
          q: <>Énergie consommée : E = P × t. Un appareil de {P} W pendant {t} h consomme :</>,
          options: [`${fmt(E)} kWh`, `${fmt(d1)} kWh`, `${fmt(d2)} kWh`, `${fmt(d3)} kWh`],
          correct: 0,
          hint: `E = ${P/1000} kW × ${t} h = ${fmt(E)} kWh.`,
        };
      } },
      { key:'elec-3', q:'Unité d\'énergie électrique pour la facture EDF :', options:['Joule','Kilowatt-heure (kWh)','Watt','Volt'], correct:1, hint:'kWh = 1000 W pendant 1 h = 3,6 × 10⁶ J.' },
      { key:'elec-4', q:'La tension du secteur en France est :', options:['12 V','230 V','1000 V','9 V'], correct:1, hint:'Secteur France : 230 V, 50 Hz.' },
      { key:'elec-5', q:'Le rôle d\'un disjoncteur est :', options:['Faire briller une lampe','Couper le circuit en cas de surintensité','Augmenter la tension','Ne sert à rien'], correct:1, hint:'Disjoncteur = sécurité contre les surintensités (court-circuit, surcharge).' },
      { key:'elec-6', q:'Un appareil de 100 W sous 230 V absorbe un courant de :', options:['~0,43 A','~23 000 A','~230 A','~2,3 A'], correct:0, hint:'I = P/U = 100/230 ≈ 0,43 A.' },
      { key:'elec-7', q:'Un fer à repasser de 1800 W sous 230 V. L\'intensité absorbée est environ :', options:['~7,8 A','~780 A','~0,13 A','~1,8 A'], correct:0, hint:'I = P/U = 1800/230 ≈ 7,8 A.' },
      { key:'elec-8', q:'Pourquoi ne doit-on jamais toucher les fils dénudés du secteur (230 V) ?', options:['Cela décharge la pile','Le courant alternatif est dangereux voire mortel à cette tension','C\'est interdit mais sans danger réel','Cela abîme les appareils uniquement'], correct:1, hint:'230 V courant alternatif : seuil mortel à partir de ~50 V en courant alternatif. Danger réel d\'électrocution.' },
      { key:'elec-9', q:'La puissance d\'une ampoule LED est 10 W, celle d\'une halogène équivalente est 60 W. L\'économie d\'énergie est :', options:['6 fois plus économique','600 %','10 %','Aucune différence'], correct:0, hint:'P_halogène / P_LED = 60/10 = 6. La LED consomme 6 fois moins.' },
      { key:'elec-10', q:'En France, la fréquence du réseau électrique est :', options:['50 Hz','100 Hz','230 Hz','60 Hz'], correct:0, hint:'Réseau France : 50 Hz (courant alternatif sinusoïdal à 50 cycles/sec). USA : 60 Hz.' },
      { key:'elec-11', q:'La prise de terre dans une installation électrique sert à :', options:['Augmenter la tension','Protéger les personnes en cas de défaut d\'isolation','Doubler le courant','Alimenter le disjoncteur'], correct:1, hint:'Prise de terre : si un appareil est en défaut, le courant s\'écoule vers la terre → le disjoncteur se déclenche.' },
      // Générateur : P=U×I (3 modes) et E=P×t en kWh
      { key:'elec-12', gen: (rnd) => {
        const mode = Math.floor(rnd() * 4); // 0=calc P, 1=calc I, 2=calc U, 3=calc E kWh
        // Triplets sans doublons de P : tous distincts
        const triplets = [
          { U:230, I:1, P:230 }, { U:230, I:2, P:460 }, { U:230, I:4, P:920 },
          { U:230, I:8, P:1840 }, { U:230, I:10, P:2300 }, { U:12, I:5, P:60 },
          { U:12, I:10, P:120 }, { U:9, I:2, P:18 }, { U:5, I:2, P:10 },
          { U:24, I:5, P:120 }, { U:48, I:5, P:240 }, { U:6, I:5, P:30 },
        ];
        const tr = triplets[Math.floor(rnd() * triplets.length)];
        function dedup(correct, cands) {
          // Returns 3 distinct distractors that differ from correct and each other
          const used = new Set([correct]);
          const result = [];
          for (let c of cands) {
            if (!used.has(c)) { used.add(c); result.push(c); }
            if (result.length === 3) break;
          }
          let extra = correct + 1;
          while (result.length < 3) { if (!used.has(extra)) { used.add(extra); result.push(extra); } extra++; }
          return result;
        }
        if (mode === 0) {
          const [d1,d2,d3] = dedup(tr.P, [tr.U + tr.I, tr.P / 2, tr.P * 2, tr.P + 100]);
          return {
            q: <>Un appareil fonctionne sous {tr.U} V avec un courant de {tr.I} A. Sa puissance est :</>,
            options: [`${tr.P} W`, `${d1} W`, `${d2} W`, `${d3} W`], correct: 0,
            hint: `P = U × I = ${tr.U} × ${tr.I} = ${tr.P} W.`,
          };
        } else if (mode === 1) {
          const d1_cand = tr.I * 2; const d2_cand = tr.I + 2; const d3_cand = +(tr.P / tr.U * 0.5).toFixed(2);
          const [d1,d2,d3] = dedup(tr.I, [d1_cand, d2_cand, d3_cand, tr.I + 5, 0.5]);
          return {
            q: <>Un appareil de {tr.P} W fonctionne sous {tr.U} V. L'intensité absorbée est :</>,
            options: [`${tr.I} A`, `${d1} A`, `${d2} A`, `${d3} A`], correct: 0,
            hint: `I = P / U = ${tr.P} / ${tr.U} = ${tr.I} A.`,
          };
        } else if (mode === 2) {
          const [d1,d2,d3] = dedup(tr.U, [tr.U + 50, tr.U * 2, tr.U / 2, tr.P, tr.U - 50]);
          return {
            q: <>Un appareil de {tr.P} W absorbe {tr.I} A. La tension d'alimentation est :</>,
            options: [`${tr.U} V`, `${d1} V`, `${d2} V`, `${d3} V`], correct: 0,
            hint: `U = P / I = ${tr.P} / ${tr.I} = ${tr.U} V.`,
          };
        } else {
          // E = P × t en kWh — all with distinct E values
          const appareils = [
            { nom:'un four (2 kW)', P:2, t:2, E:4 }, { nom:'un radiateur (1 kW)', P:1, t:5, E:5 },
            { nom:'une TV (100 W)', P:0.1, t:20, E:2 }, { nom:'un sèche-linge (2 kW)', P:2, t:1.5, E:3 },
            { nom:'un chauffe-eau (3 kW)', P:3, t:2, E:6 }, { nom:'un climatiseur (2 kW)', P:2, t:4, E:8 },
            { nom:'un lave-linge (1 kW)', P:1, t:2, E:2 }, { nom:'un aspirateur (1 kW)', P:1, t:7, E:7 },
          ];
          const ap = appareils[Math.floor(rnd() * appareils.length)];
          const [d1,d2,d3] = dedup(ap.E, [ap.E + 2, ap.E * 2, ap.P + ap.t, ap.E + 1, ap.E - 1]);
          return {
            q: <>Énergie consommée par {ap.nom} pendant {ap.t} h :</>,
            options: [`${ap.E} kWh`, `${d1} kWh`, `${d2} kWh`, `${d3} kWh`], correct: 0,
            hint: `E = P × t = ${ap.P} kW × ${ap.t} h = ${ap.E} kWh.`,
          };
        }
      } },
    ],
    chimie: [
      { key:'chim-1', q:'Dans une transformation chimique :', options:['Les atomes apparaissent/disparaissent','Les atomes se conservent (même nombre avant et après)','La masse augmente','On obtient toujours de l\'eau'], correct:1, hint:'Conservation : des atomes et de la masse (loi de Lavoisier).' },
      { key:'chim-2', q:<>Équation de la combustion du méthane : <M>CH<sub>4</sub> + 2 O<sub>2</sub> → CO<sub>2</sub> + 2 H<sub>2</sub>O</M>. Les réactifs sont :</>, options:['CH₄ et CO₂','CH₄ et O₂','CO₂ et H₂O','H₂O seul'], correct:1, hint:'Réactifs à gauche de la flèche, produits à droite.' },
      { key:'chim-3', q:'Test du dioxygène :', options:['Eau de chaux qui se trouble','Bûchette incandescente qui se rallume','Sulfate de cuivre bleu','Papier pH'], correct:1, hint:'O₂ : ravive la flamme d\'une bûchette.' },
      { key:'chim-4', q:'Test du dioxyde de carbone :', options:['Eau de chaux qui se trouble','Bûchette qui se rallume','Flamme qui détone','Papier pH rouge'], correct:0, hint:'CO₂ : trouble l\'eau de chaux (formation de CaCO₃).' },
      { key:'chim-5', q:<>Équation équilibrée de <M>H<sub>2</sub> + ? O<sub>2</sub> → H<sub>2</sub>O</M> :</>, options:[<><M>2 H<sub>2</sub> + O<sub>2</sub> → 2 H<sub>2</sub>O</M></>, <><M>H<sub>2</sub> + O<sub>2</sub> → H<sub>2</sub>O</M></>, <><M>H<sub>2</sub> + 2 O<sub>2</sub> → 2 H<sub>2</sub>O</M></>, <><M>H<sub>2</sub> + O<sub>2</sub> → 2 H<sub>2</sub>O</M></>], correct:0, hint:'Équilibrer pour avoir même nombre d\'atomes H et O des deux côtés.' },
      { key:'chim-6', q:<>Dans <M>2H<sub>2</sub> + O<sub>2</sub> → 2H<sub>2</sub>O</M>, combien d\'atomes d\'H à gauche et à droite ?</>, options:['2 et 2','4 et 4','2 et 4','4 et 2'], correct:1, hint:'À gauche : 2×2=4 H. À droite : 2×2=4 H. Équation bien équilibrée.' },
      { key:'chim-7', q:'Lors d\'une combustion complète d\'un hydrocarbure, les produits sont :', options:['Uniquement CO₂','CO₂ et H₂O','H₂ et CO','N₂ et O₂'], correct:1, hint:'Combustion complète hydrocarbure + O₂ → CO₂ + H₂O (+ énergie).' },
      { key:'chim-8', q:'Test du dihydrogène H₂ :', options:['Eau de chaux trouble','Bûchette qui se rallume','Flamme qui produit une détonation (pop)','Papier pH bleu'], correct:2, hint:'H₂ : petite explosion (détonation "pop") au contact d\'une flamme.' },
      { key:'chim-9', q:'La loi de Lavoisier s\'énonce :', options:['La matière se crée dans les réactions','Rien ne se perd, rien ne se crée, tout se transforme','La masse diminue dans toute réaction','Les réactifs disparaissent'], correct:1, hint:'Conservation de la matière : masse totale avant réaction = masse totale après réaction.' },
      { key:'chim-10', q:'Dans l\'équation 2 H₂ + O₂ → 2 H₂O, l\'atome de dioxygène à gauche est lié à :', options:['1 autre O (molécule O₂)','2 autres O','3 H','Rien'], correct:0, hint:'O₂ = molécule de 2 atomes d\'oxygène. Les 2 O sont liés ensemble dans la molécule.' },
      { key:'chim-11', q:'Une transformation chimique irréversible est :', options:['La fusion de la glace','La combustion du bois','La dissolution du sel','La condensation de vapeur'], correct:1, hint:'Combustion = réaction qui ne peut pas revenir en arrière spontanément. Fusion/dissolution = réversibles.' },
      // Générateur : équilibrage et comptage d'atomes
      { key:'chim-12', gen: (rnd) => {
        // Équations simples : compter les atomes dans des équations bilan brevet
        const equs = [
          { q: <>Dans <M>CH<sub>4</sub> + 2O<sub>2</sub> → CO<sub>2</sub> + 2H<sub>2</sub>O</M>, combien d'atomes d'hydrogène à gauche ?</>, correct: '4', wrong: ['2', '8', '6'], hint: 'CH₄ = 1 C + 4 H. Pas de H dans O₂. Total gauche : 4 H.' },
          { q: <>Dans <M>2H<sub>2</sub> + O<sub>2</sub> → 2H<sub>2</sub>O</M>, combien d'atomes d'oxygène à DROITE ?</>, correct: '2', wrong: ['1', '4', '3'], hint: '2 H₂O → 2 atomes d\'O.' },
          { q: <>Dans <M>C + O<sub>2</sub> → CO<sub>2</sub></M>, combien d'atomes d'oxygène à gauche ?</>, correct: '2', wrong: ['1', '4', '3'], hint: 'O₂ = 2 atomes d\'O.' },
          { q: <>Dans <M>2Fe + O<sub>2</sub> → 2FeO</M>, combien d'atomes de fer à droite ?</>, correct: '2', wrong: ['1', '4', '3'], hint: '2FeO = 2 atomes de Fe (un par molécule).' },
          { q: <>Dans <M>CH<sub>4</sub> + 2O<sub>2</sub> → CO<sub>2</sub> + 2H<sub>2</sub>O</M>, combien d'atomes d'oxygène à droite ?</>, correct: '4', wrong: ['2', '6', '3'], hint: 'CO₂ : 2 O. 2×H₂O : 2×1=2 O. Total : 4 O.' },
        ];
        const e = equs[Math.floor(rnd() * equs.length)];
        const perm = Math.floor(rnd() * 3);
        let opts;
        if (perm === 0) opts = [e.correct, e.wrong[0], e.wrong[1], e.wrong[2]];
        else if (perm === 1) opts = [e.wrong[0], e.correct, e.wrong[1], e.wrong[2]];
        else opts = [e.wrong[0], e.wrong[1], e.correct, e.wrong[2]];
        const correctIdx = opts.indexOf(e.correct);
        return { q: e.q, options: opts, correct: correctIdx, hint: e.hint };
      } },
      { key:'chim-13', q:<>Quelle équation est correctement équilibrée ? </>, options:[<><M>H<sub>2</sub> + O<sub>2</sub> → H<sub>2</sub>O</M></>, <><M>2H<sub>2</sub> + O<sub>2</sub> → 2H<sub>2</sub>O</M></>, <><M>H<sub>2</sub> + 2O<sub>2</sub> → H<sub>2</sub>O</M></>, <><M>4H + O<sub>2</sub> → 2H<sub>2</sub>O</M></>], correct:1, hint:'2H₂ + O₂ → 2H₂O : gauche 4H+2O, droite 4H+2O. Seule cette version est équilibrée.' },
    ],
    ions: [
      { key:'ion-1', q:'Un ion positif (cation) est :', options:['Un atome ayant gagné des électrons','Un atome ayant perdu des électrons','Une molécule','Un neutron'], correct:1, hint:'Cation = perte d\'électron(s) → charge positive. Anion = gain → charge négative.' },
      { key:'ion-2', q:'L\'ion H⁺ est responsable :', options:['Du caractère basique','Du caractère acide','De la couleur bleue','De la conductivité du métal'], correct:1, hint:'Acide = excès d\'ions H⁺. Base = excès d\'ions OH⁻.' },
      { key:'ion-3', q:'Une solution est basique si pH :', options:['< 7','= 7','> 7','= 0'], correct:2, hint:'pH > 7 : basique. pH = 7 : neutre. pH < 7 : acide.' },
      { key:'ion-4', q:'La formule de l\'ion chlorure :', options:['Cl','Cl⁺','Cl⁻','Cl₂'], correct:2, hint:'Chlorure = ion Cl⁻ (gain d\'un électron).' },
      { key:'ion-5', q:'Les solutions acides ou basiques concentrées :', options:['Sont sans danger','Sont dangereuses (port de lunettes + blouse)','Sont inodores','Sont toujours colorées'], correct:1, hint:'Précautions : lunettes, blouse, gants, sous hotte si nécessaire.' },
      { key:'ion-6', q:'L\'ion hydroxyde OH⁻ est responsable :', options:['De l\'acidité','De la basicité','De la neutralité','De la couleur'], correct:1, hint:'Base = libère des ions OH⁻. Acide = libère des ions H⁺. Neutre : H⁺ = OH⁻.' },
      { key:'ion-7', q:'Quand on dilue un acide, son pH :', options:['Diminue (plus acide)','S\'approche de 7 (moins acide)','Augmente au-dessus de 7','Reste fixe'], correct:1, hint:'Dilution : moins d\'ions H⁺ par litre → pH augmente et se rapproche de 7.' },
      { key:'ion-8', q:'L\'ion sodium est :', options:['Na⁻','Na⁺','Na₂','Na²⁺'], correct:1, hint:'Sodium (Na) perd 1 électron → Na⁺ (cation). Présent dans le sel de table (NaCl).' },
      { key:'ion-9', q:'Une solution de soude est :', options:['Acide (pH < 7)','Neutre (pH = 7)','Basique (pH > 7)','Non mesurable'], correct:2, hint:'Soude (NaOH) libère des ions OH⁻ → solution basique, pH > 7 (souvent > 12).' },
    ],
    astronomie: [
      { key:'ast-1', q:'Une année-lumière est :', options:['Une unité de temps','Une unité de distance','Une unité de vitesse','Une unité de masse'], correct:1, hint:'Distance parcourue par la lumière en 1 an ≈ 9,46 × 10¹² km.' },
      { key:'ast-2', q:'Ordre croissant des planètes depuis le Soleil :', options:['Mercure, Vénus, Terre, Mars, Jupiter, Saturne, Uranus, Neptune','Terre, Vénus, Mars, Jupiter…','Soleil, Lune, Terre…','Mercure, Mars, Terre, Vénus…'], correct:0, hint:'Mercure le plus proche, Neptune le plus éloigné.' },
      { key:'ast-3', q:'L\'étoile la plus proche de la Terre est :', options:['La Lune','Alpha Centauri','Le Soleil','Sirius'], correct:2, hint:'Le Soleil EST une étoile, la plus proche de nous (8 min-lumière).' },
      { key:'ast-4', q:'L\'Univers :', options:['Est en expansion','Est statique','A toujours eu sa taille actuelle','Ne contient que la Voie lactée'], correct:0, hint:'Les galaxies s\'éloignent les unes des autres depuis le Big Bang.' },
      { key:'ast-5', q:'Le Soleil est à environ quelle distance de la Terre ?', options:['150 millions de km','150 km','1,5 milliard de km','4 années-lumière'], correct:0, hint:'Distance Terre-Soleil ≈ 150 × 10⁶ km = 1 UA (unité astronomique). Lumière : ~8 min.' },
      { key:'ast-6', q:'L\'étoile la plus proche du Soleil (hors Soleil) est :', options:['Sirius','Alpha Centauri (Proxima Centauri)','Bételgeuse','Véga'], correct:1, hint:'Proxima Centauri (système Alpha Centauri) ≈ 4,2 années-lumière du Soleil.' },
      { key:'ast-7', q:'Le système solaire appartient à la galaxie :', options:['Andromède','Le Grand Nuage de Magellan','La Voie Lactée','Triangulum'], correct:2, hint:'Notre système solaire est dans un bras de la Voie Lactée, à ~26 000 al du centre galactique.' },
      { key:'ast-8', q:'Une galaxie est :', options:['Une étoile isolée','Un système de milliards d\'étoiles liées par la gravité','Une planète géante','Un nuage de gaz sans étoiles'], correct:1, hint:'Galaxie = amas de milliards d\'étoiles + gaz + poussières + matière noire. La Voie Lactée ≈ 200 milliards d\'étoiles.' },
      { key:'ast-9', q:'La lumière voyage dans le vide à environ :', options:['340 m/s','300 000 km/h','300 000 km/s','1000 km/s'], correct:2, hint:'c ≈ 3 × 10⁸ m/s = 300 000 km/s. La vitesse limite dans l\'Univers.' },
      { key:'ast-10', q:'Le Big Bang est :', options:['Une explosion nucléaire récente','L\'origine de l\'Univers, il y a ~14 milliards d\'années','Une collision de galaxies','Une théorie réfutée'], correct:1, hint:'Big Bang : l\'Univers a commencé dans un état très chaud et dense, il y a ~13,8 milliards d\'années.' },
    ],
    signaux: [
      { key:'sig-1', q:'La fréquence d\'un signal se mesure en :', options:['Décibels (dB)','Hertz (Hz)','Mètres (m)','Joules (J)'], correct:1, hint:'Fréquence (nombre de vibrations par seconde) : en Hz.' },
      { key:'sig-2', q:'Les ultrasons sont des sons :', options:['Plus graves que l\'audible','Plus aigus que l\'audible (> 20 kHz)','De la lumière','Invisibles'], correct:1, hint:'Audible humain ≈ 20 Hz - 20 kHz. Ultrasons > 20 kHz. Infrasons < 20 Hz.' },
      { key:'sig-3', q:'Le son et la lumière se propagent :', options:['À la même vitesse','Beaucoup plus vite pour le son','Beaucoup plus vite pour la lumière','Ni l\'un ni l\'autre'], correct:2, hint:'Lumière : ~300 000 km/s. Son dans l\'air : ~340 m/s. Rapport ≈ 1 million.' },
      { key:'sig-4', q:'La période T d\'un signal et sa fréquence f sont liées par :', options:['T = f','T = 1/f','T = 2f','T = f²'], correct:1, hint:'T (en secondes) = 1 / f (en Hz). Ex : f = 50 Hz → T = 0,02 s.' },
      { key:'sig-5', q:'Un son de fréquence 20 000 Hz est :', options:['Infra-sonore (non audible, trop grave)','Audible (médium)','Ultra-sonore (non audible, trop aigu)','Un signal lumineux'], correct:2, hint:'20 000 Hz = 20 kHz. Limite haute de l\'audition humaine. Au-delà = ultrason.' },
      { key:'sig-6', q:'La vitesse du son dans l\'air à 20 °C est environ :', options:['340 m/s','340 km/s','300 000 km/s','1500 m/s'], correct:0, hint:'Son dans l\'air : ~340 m/s. Dans l\'eau : ~1500 m/s. Dans l\'acier : ~5000 m/s.' },
      { key:'sig-7', q:'L\'écho d\'un son se produit :', options:['Quand le son accélère','Quand le son est réfléchi par une surface','Quand la lumière interfère','Quand la fréquence augmente'], correct:1, hint:'Écho = réflexion du son sur un obstacle suffisamment éloigné (au moins ~17 m pour l\'oreille).' },
      { key:'sig-8', q:'Un signal de fréquence 50 Hz a une période de :', options:['50 s','20 ms (0,02 s)','5 s','500 ms'], correct:1, hint:'T = 1/f = 1/50 = 0,02 s = 20 ms.' },
      { key:'sig-9', q:'Les infrasons (< 20 Hz) sont produits par exemple par :', options:['Un violon','Les séismes et certains animaux (éléphants, baleines)','Les chauve-souris','Les écrans d\'ordinateur'], correct:1, hint:'Infrasons : séismes, moteurs lents, certains animaux. Chauve-souris → ultrasons.' },
      // Générateur : T = 1/f (calc T ou calc f)
      { key:'sig-10', gen: (rnd) => {
        const mode = Math.floor(rnd() * 2); // 0=calc T, 1=calc f
        // Fréquences donnant des périodes lisibles
        const cas = [
          { f:50,   T_ms:20,  T_str:'20 ms (0,02 s)' },
          { f:100,  T_ms:10,  T_str:'10 ms (0,01 s)' },
          { f:200,  T_ms:5,   T_str:'5 ms (0,005 s)' },
          { f:500,  T_ms:2,   T_str:'2 ms (0,002 s)' },
          { f:1000, T_ms:1,   T_str:'1 ms (0,001 s)' },
          { f:25,   T_ms:40,  T_str:'40 ms (0,04 s)' },
          { f:10,   T_ms:100, T_str:'100 ms (0,1 s)' },
          { f:4,    T_ms:250, T_str:'250 ms (0,25 s)' },
          { f:2,    T_ms:500, T_str:'500 ms (0,5 s)' },
          { f:1,    T_ms:1000,T_str:'1 s' },
        ];
        const c = cas[Math.floor(rnd() * cas.length)];
        function dedupMs(correct_ms, cands) {
          const used = new Set([correct_ms]);
          const result = [];
          for (const c of cands) { if (!used.has(c)) { used.add(c); result.push(c); } if (result.length === 3) break; }
          let x = correct_ms + 3; while (result.length < 3) { if (!used.has(x)) { used.add(x); result.push(x); } x += 3; }
          return result;
        }
        function dedupHz(correct_f, cands) {
          const used = new Set([correct_f]);
          const result = [];
          for (const c of cands) { if (!used.has(c)) { used.add(c); result.push(c); } if (result.length === 3) break; }
          let x = correct_f + 1; while (result.length < 3) { if (!used.has(x)) { used.add(x); result.push(x); } x++; }
          return result;
        }
        if (mode === 0) {
          // calc T given f
          const [d1,d2,d3] = dedupMs(c.T_ms, [c.T_ms * 2, c.T_ms / 2, c.T_ms * 4, c.T_ms + 5]);
          return {
            q: <>Un signal a une fréquence de {c.f} Hz. Sa période est :</>,
            options: [c.T_str, `${d1} ms`, `${d2} ms`, `${d3} ms`], correct: 0,
            hint: `T = 1 / f = 1 / ${c.f} = ${c.T_ms / 1000} s = ${c.T_ms} ms.`,
          };
        } else {
          // calc f given T
          const [d1,d2,d3] = dedupHz(c.f, [c.f * 2, c.f / 2, c.f * 4, c.f + 10]);
          return {
            q: <>Un signal a une période de {c.T_str}. Sa fréquence est :</>,
            options: [`${c.f} Hz`, `${d1} Hz`, `${d2} Hz`, `${d3} Hz`], correct: 0,
            hint: `f = 1 / T = 1 / ${c.T_ms / 1000} = ${c.f} Hz.`,
          };
        }
      } },
      { key:'sig-12', q:'Les ultrasons sont utilisés en médecine pour :', options:['Radiographier les os','Réaliser des échographies (imagerie des tissus mous)','Tuer les microbes','Chauffer les aliments'], correct:1, hint:'Les ultrasons (> 20 kHz) permettent une imagerie non-ionisante des tissus mous : suivi de grossesse, abdomen, cœur. Différents des rayons X (radiographie des os).' },
      { key:'sig-13', q:'La lumière laser se distingue de la lumière d\'une lampe par :', options:['Sa couleur unique','Son caractère monochromatique, cohérent et directionnel','Sa vitesse plus élevée','Son caractère dangereux uniquement'], correct:1, hint:'Laser : une seule fréquence (monochromatique), ondes en phase (cohérentes), faisceau peu divergent. Vitesse identique à la lumière normale : c.' },
    ],
  },
  PICK: {
    forces: 3, poids: 3, cinematique: 3, energie: 4, electricite: 4,
    chimie: 4, ions: 3, astronomie: 3, signaux: 3,
  },
  PLANS: {
    forces: {
      'non-acquis': ['Force = vecteur (4 caractéristiques : direction, sens, valeur, point d\'application)', 'Unité : newton (N)', 'Principe d\'action-réaction'],
      'fragile':    ['Représenter une force par un vecteur à l\'échelle']
    },
    poids: {
      'non-acquis': ['P = m × g, avec g ≈ 10 N/kg sur Terre', 'DISTINGUER masse (kg, invariable) et poids (N, dépend de g)', 'Calculs Terre/Lune'],
      'fragile':    ['Représenter le poids par un vecteur vertical descendant']
    },
    cinematique: {
      'non-acquis': ['v = d/t et conversions km/h ↔ m/s (×3,6 ou /3,6)', 'Mouvement uniforme / accéléré / ralenti', 'Notion de référentiel'],
      'fragile':    ['Relation d = v × t pour calculer une distance']
    },
    energie: {
      'non-acquis': ['Conservation de l\'énergie : elle se transforme, la somme totale est constante', 'Formes : cinétique (m et v), chimique, thermique, électrique, lumineuse', 'Unités : joule et watt'],
      'fragile':    ['Chaîne énergétique (ex. barrage hydroélectrique)']
    },
    electricite: {
      'non-acquis': ['P = U × I et E = P × t', 'Unités : kWh pour l\'énergie domestique', 'Sécurité : disjoncteur, prise de terre, 230 V'],
      'fragile':    ['Rendement d\'une conversion énergétique']
    },
    chimie: {
      'non-acquis': ['PRIORITÉ BREVET : équilibrer une équation-bilan', 'Réactifs → Produits avec flèche', 'Tests de gaz à connaître par cœur (O₂, CO₂, H₂, eau)'],
      'fragile':    ['Masse avant = masse après (Lavoisier)']
    },
    ions: {
      'non-acquis': ['Ion = atome ayant perdu ou gagné des électrons', 'pH : acide < 7, neutre = 7, basique > 7', 'Ion H⁺ (acidité) et OH⁻ (basicité)'],
      'fragile':    ['Dilution d\'un acide : le pH augmente vers 7']
    },
    astronomie: {
      'non-acquis': ['Les 8 planètes du système solaire dans l\'ordre', 'Année-lumière = distance', 'Le Soleil est une étoile'],
      'fragile':    ['Ordres de grandeur : distance Terre-Lune, Terre-Soleil']
    },
    signaux: {
      'non-acquis': ['Fréquence en Hz, audible 20 Hz - 20 kHz', 'Son : milieu matériel obligatoire. Lumière : même dans le vide', 'Période T = 1/f'],
      'fragile':    ['Dangers de l\'exposition prolongée au bruit']
    },
  },
};
