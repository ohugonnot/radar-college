/// <reference path="../types.ts" />
// ============================================================
// _svg-kit.tsx — Kit SVG partagé : primitives + compositions pour schémas
// d'électricité et de géométrie (Pythagore, Thalès, trigo, fonctions).
// Fichier préfixé `_` pour trier en premier dans le bundle quizzes
// (build-compile.js concatène par ordre ASCII) : les symboles sont définis
// AVANT tous les quizzes qui s'en servent dans leurs énoncés.
//
// Exposé via window.CircuitKit pour app.tsx (MEMO_BANK).
// ============================================================

// ── Primitives ──────────────────────────────────────────────────────────────
type CircPt = [number, number];

function Fil({ points }: { points: CircPt[] }) {
  const d = points.map((p, i) => (i === 0 ? 'M' : 'L') + p.join(',')).join(' ');
  return <path d={d} fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />;
}

function Pile({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g transform={`translate(${cx},${cy})`}>
      <line x1={-9} y1={-2} x2={9} y2={-2} stroke="currentColor" strokeWidth={2.8} />
      <line x1={-4} y1={3} x2={4} y2={3} stroke="currentColor" strokeWidth={2.8} />
      <text x={13} y={0} fontSize={10} fill="currentColor" fontWeight={700}>+</text>
      <text x={13} y={10} fontSize={10} fill="currentColor" fontWeight={700}>−</text>
    </g>
  );
}

function Resistance({ cx, cy, label }: { cx: number; cy: number; label?: string }) {
  const w = 38, h = 12;
  return (
    <g transform={`translate(${cx},${cy})`}>
      <rect x={-w/2} y={-h/2} width={w} height={h} fill="#fffdf7" stroke="currentColor" strokeWidth={1.8} rx={1.5} />
      {label && <text x={0} y={-h/2 - 5} fontSize={11} textAnchor="middle" fill="currentColor" fontWeight={600} fontStyle="italic">{label}</text>}
    </g>
  );
}

function Noeud({ cx, cy }: { cx: number; cy: number }) {
  return <circle cx={cx} cy={cy} r={2.5} fill="currentColor" />;
}

function FlecheI({ x, y, color }: { x: number; y: number; color?: string }) {
  return <polygon points={`${x},${y-3.5} ${x+7},${y} ${x},${y+3.5}`} fill={color || '#b45309'} />;
}

function Lampe({ cx, cy, r = 10, label }: { cx: number; cy: number; r?: number; label?: string }) {
  const a = r * 0.707;
  return (
    <g transform={`translate(${cx},${cy})`}>
      <circle cx={0} cy={0} r={r} fill="#fffdf7" stroke="currentColor" strokeWidth={1.8} />
      <line x1={-a} y1={-a} x2={a} y2={a} stroke="currentColor" strokeWidth={1.4} />
      <line x1={-a} y1={a} x2={a} y2={-a} stroke="currentColor" strokeWidth={1.4} />
      {label && <text x={0} y={-r - 4} fontSize={11} textAnchor="middle" fill="currentColor" fontWeight={600} fontStyle="italic">{label}</text>}
    </g>
  );
}

function Interrupteur({ cx, cy, ouvert = true, w = 24 }: { cx: number; cy: number; ouvert?: boolean; w?: number }) {
  const x1 = -w/2, x2 = w/2;
  return (
    <g transform={`translate(${cx},${cy})`}>
      <circle cx={x1} cy={0} r={2} fill="currentColor" />
      <circle cx={x2} cy={0} r={2} fill="currentColor" />
      <line x1={x1} y1={0} x2={ouvert ? x2 - 3 : x2} y2={ouvert ? -w/2 + 2 : 0} stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" />
    </g>
  );
}

function Mesureur({ cx, cy, lettre, r = 12 }: { cx: number; cy: number; lettre: string; r?: number }) {
  return (
    <g transform={`translate(${cx},${cy})`}>
      <circle cx={0} cy={0} r={r} fill="#fffdf7" stroke="currentColor" strokeWidth={1.8} />
      <text x={0} y={4} fontSize={13} textAnchor="middle" fill="currentColor" fontWeight={700}>{lettre}</text>
    </g>
  );
}
function Amperemetre({ cx, cy }: { cx: number; cy: number }) { return <Mesureur cx={cx} cy={cy} lettre="A" />; }
function Voltmetre({ cx, cy }: { cx: number; cy: number }) { return <Mesureur cx={cx} cy={cy} lettre="V" />; }

const CIRCUIT_SVG_STYLE: React.CSSProperties = { maxWidth: 280, width: '100%', display: 'block', margin: '6px auto', color: 'var(--ink-soft)' };

// ── Compositions électricité ────────────────────────────────────────────────

function CircuitSerie() {
  return (
    <svg viewBox="0 0 240 115" style={CIRCUIT_SVG_STYLE} role="img" aria-label="Circuit en série : pile et deux résistances" data-circuit="serie">
      <Fil points={[[30,85],[30,30],[210,30],[210,85],[30,85]]} />
      <Pile cx={30} cy={58} />
      <Resistance cx={100} cy={30} label="R₁" />
      <Resistance cx={170} cy={30} label="R₂" />
      <FlecheI x={65} y={30} />
      <FlecheI x={135} y={30} />
      <FlecheI x={208} y={58} />
      <text x={120} y={105} fontSize={10.5} textAnchor="middle" fill="#b45309" fontWeight={600}>même I partout · U = U₁ + U₂</text>
    </svg>
  );
}

function CircuitParallele() {
  return (
    <svg viewBox="0 0 240 125" style={CIRCUIT_SVG_STYLE} role="img" aria-label="Circuit en dérivation : pile et deux résistances en parallèle" data-circuit="parallele">
      <Fil points={[[30,95],[30,30],[90,30]]} />
      <Fil points={[[30,95],[90,95]]} />
      <Fil points={[[90,30],[200,30]]} />
      <Fil points={[[90,95],[200,95]]} />
      <Fil points={[[200,30],[200,95]]} />
      <Pile cx={30} cy={62} />
      <Resistance cx={145} cy={30} label="R₁" />
      <Resistance cx={145} cy={95} label="R₂" />
      <Noeud cx={90} cy={30} />
      <Noeud cx={90} cy={95} />
      <Noeud cx={200} cy={30} />
      <Noeud cx={200} cy={95} />
      <FlecheI x={115} y={30} />
      <FlecheI x={115} y={95} />
      <FlecheI x={60} y={30} />
      <text x={120} y={117} fontSize={10.5} textAnchor="middle" fill="#b45309" fontWeight={600}>même U aux bornes · I = I₁ + I₂</text>
    </svg>
  );
}

function CircuitAmperemetreSerie() {
  return (
    <svg viewBox="0 0 240 115" style={CIRCUIT_SVG_STYLE} role="img" aria-label="Ampèremètre branché en série avec une lampe" data-circuit="amperemetre-serie">
      <Fil points={[[30,85],[30,30],[210,30],[210,85],[30,85]]} />
      <Pile cx={30} cy={58} />
      <Lampe cx={95} cy={30} />
      <Amperemetre cx={165} cy={30} />
      <FlecheI x={55} y={30} />
      <FlecheI x={125} y={30} />
      <FlecheI x={208} y={58} />
      <text x={120} y={107} fontSize={10.5} textAnchor="middle" fill="#b45309" fontWeight={600}>A mesure l'intensité qui le traverse</text>
    </svg>
  );
}

function CircuitVoltmetreDerivation() {
  return (
    <svg viewBox="0 0 240 140" style={CIRCUIT_SVG_STYLE} role="img" aria-label="Voltmètre branché en dérivation aux bornes d'une lampe" data-circuit="voltmetre-derivation">
      <Fil points={[[30,95],[30,40],[210,40],[210,95],[30,95]]} />
      <Pile cx={30} cy={68} />
      <Lampe cx={120} cy={40} />
      <Fil points={[[80,40],[80,90],[160,90],[160,40]]} />
      <Voltmetre cx={120} cy={90} />
      <Noeud cx={80} cy={40} />
      <Noeud cx={160} cy={40} />
      <FlecheI x={60} y={40} />
      <FlecheI x={185} y={40} />
      <text x={120} y={125} fontSize={10.5} textAnchor="middle" fill="#b45309" fontWeight={600}>V mesure la tension aux bornes de la lampe</text>
    </svg>
  );
}

function CircuitCourtCircuit() {
  return (
    <svg viewBox="0 0 240 130" style={CIRCUIT_SVG_STYLE} role="img" aria-label="Court-circuit : un fil contourne la lampe" data-circuit="court-circuit">
      <Fil points={[[30,95],[30,30],[210,30],[210,95],[30,95]]} />
      <Lampe cx={120} cy={30} />
      <Pile cx={30} cy={58} />
      <path d="M80,30 L80,70 L160,70 L160,30" fill="none" stroke="#b8323d" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" />
      <Noeud cx={80} cy={30} />
      <Noeud cx={160} cy={30} />
      <text x={120} y={85} fontSize={10.5} textAnchor="middle" fill="#b8323d" fontWeight={700}>court-circuit</text>
      <text x={120} y={117} fontSize={10.5} textAnchor="middle" fill="#b45309" fontWeight={600}>le courant passe par le fil direct · la lampe s'éteint</text>
    </svg>
  );
}

function GrapheOhm() {
  return (
    <svg viewBox="0 0 200 150" style={CIRCUIT_SVG_STYLE} role="img" aria-label="Caractéristique U = f(I) d'un conducteur ohmique : droite passant par l'origine, pente R" data-circuit="graphe-ohm">
      <defs>
        <marker id="arrOhm" markerWidth={8} markerHeight={8} refX={7} refY={4} orient="auto">
          <polygon points="0,0 8,4 0,8" fill="currentColor" />
        </marker>
      </defs>
      <line x1={35} y1={120} x2={180} y2={120} stroke="currentColor" strokeWidth={1.6} markerEnd="url(#arrOhm)" />
      <line x1={35} y1={120} x2={35} y2={20} stroke="currentColor" strokeWidth={1.6} markerEnd="url(#arrOhm)" />
      <line x1={35} y1={120} x2={160} y2={35} stroke="#b45309" strokeWidth={2.4} />
      <text x={178} y={135} fontSize={11} fill="currentColor" fontStyle="italic" textAnchor="end">I (A)</text>
      <text x={28} y={22} fontSize={11} fill="currentColor" fontStyle="italic" textAnchor="end">U (V)</text>
      <text x={30} y={134} fontSize={10} fill="currentColor" textAnchor="end">0</text>
      <text x={110} y={60} fontSize={11} fill="#b45309" fontWeight={700} fontStyle="italic">pente = R</text>
      <text x={108} y={145} fontSize={10.5} textAnchor="middle" fill="#b45309" fontWeight={600}>U = R × I</text>
    </svg>
  );
}

// ── Compositions géométrie ──────────────────────────────────────────────────

// Triangle rectangle en A. Props optionnelles pour afficher des valeurs
// spécifiques — si omises, affiche les labels génériques (AB, AC, BC).
// Un côté passé à "?" indique la mesure à trouver.
function TriangleRectangle({ ab, ac, bc }: { ab?: string | number; ac?: string | number; bc?: string | number } = {}) {
  const lAB = ab !== undefined ? `AB = ${ab}` : 'AB';
  const lAC = ac !== undefined ? `AC = ${ac}` : 'AC';
  const lBC = bc !== undefined ? `BC = ${bc}` : 'BC (hypoténuse)';
  const hasValues = ab !== undefined || ac !== undefined || bc !== undefined;
  return (
    <svg viewBox="0 0 250 160" style={CIRCUIT_SVG_STYLE} role="img" aria-label="Triangle rectangle en A : côtés AB, AC, hypoténuse BC" data-schema="triangle-rectangle">
      <polygon points="50,30 50,130 200,130" fill="rgba(199,138,29,0.08)" stroke="currentColor" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={50} y={118} width={12} height={12} fill="none" stroke="currentColor" strokeWidth={1.4} />
      <text x={42} y={26} fontSize={13} textAnchor="end" fill="currentColor" fontWeight={700}>A</text>
      <text x={42} y={138} fontSize={13} textAnchor="end" fill="currentColor" fontWeight={700}>B</text>
      <text x={208} y={138} fontSize={13} fill="currentColor" fontWeight={700}>C</text>
      <text x={40} y={85} fontSize={11.5} textAnchor="end" fill="#b45309" fontWeight={600} fontStyle="italic">{lAB}</text>
      <text x={125} y={148} fontSize={11.5} textAnchor="middle" fill="#b45309" fontWeight={600} fontStyle="italic">{lAC}</text>
      <text x={135} y={72} fontSize={11.5} fill="#b45309" fontWeight={600} fontStyle="italic">{lBC}</text>
      {!hasValues && <text x={125} y={14} fontSize={10.5} textAnchor="middle" fill="#b45309" fontWeight={700}>BC² = AB² + AC²</text>}
    </svg>
  );
}

// ConfigThales avec valeurs optionnelles (am, ab, an, ac, mn, bc). Un
// paramètre passé à "?" désigne la longueur à calculer. Sans paramètre,
// affiche la formule générique.
function ConfigThales({ am, ab, an, ac, mn, bc }: { am?: string | number; ab?: string | number; an?: string | number; ac?: string | number; mn?: string | number; bc?: string | number } = {}) {
  const hasValues = [am, ab, an, ac, mn, bc].some(v => v !== undefined);
  const L = (v: string | number | undefined) => v !== undefined ? String(v) : '';
  return (
    <svg viewBox="0 0 260 180" style={CIRCUIT_SVG_STYLE} role="img" aria-label="Configuration Thalès : triangles ABC et AMN avec (MN) parallèle à (BC)" data-schema="config-thales">
      <polygon points="125,20 40,140 220,140" fill="rgba(199,138,29,0.05)" stroke="currentColor" strokeWidth={1.7} strokeLinejoin="round" />
      <line x1={78} y1={86} x2={177} y2={86} stroke="#b45309" strokeWidth={2.2} />
      <text x={125} y={14} fontSize={13} textAnchor="middle" fill="currentColor" fontWeight={700}>A</text>
      <text x={32} y={150} fontSize={13} textAnchor="end" fill="currentColor" fontWeight={700}>B</text>
      <text x={228} y={150} fontSize={13} fill="currentColor" fontWeight={700}>C</text>
      <text x={70} y={80} fontSize={13} textAnchor="end" fill="#b45309" fontWeight={700}>M</text>
      <text x={185} y={80} fontSize={13} fill="#b45309" fontWeight={700}>N</text>
      <text x={125} y={82} fontSize={12} textAnchor="middle" fill="#b45309" fontWeight={700}>»</text>
      <text x={130} y={137} fontSize={12} textAnchor="middle" fill="currentColor" fontWeight={700}>»</text>
      {/* Valeurs optionnelles sur les segments */}
      {am !== undefined && <text x={96} y={56} fontSize={10.5} fill="#b45309" fontWeight={600} fontStyle="italic" textAnchor="end">AM = {L(am)}</text>}
      {ab !== undefined && <text x={65} y={115} fontSize={10.5} fill="#b45309" fontWeight={600} fontStyle="italic" textAnchor="end">AB = {L(ab)}</text>}
      {an !== undefined && <text x={155} y={56} fontSize={10.5} fill="#b45309" fontWeight={600} fontStyle="italic">AN = {L(an)}</text>}
      {ac !== undefined && <text x={190} y={115} fontSize={10.5} fill="#b45309" fontWeight={600} fontStyle="italic">AC = {L(ac)}</text>}
      {mn !== undefined && <text x={125} y={78} fontSize={10.5} textAnchor="middle" fill="#b45309" fontWeight={600} fontStyle="italic">MN = {L(mn)}</text>}
      {bc !== undefined && <text x={130} y={155} fontSize={10.5} textAnchor="middle" fill="#b45309" fontWeight={600} fontStyle="italic">BC = {L(bc)}</text>}
      {!hasValues && <text x={130} y={172} fontSize={10.5} textAnchor="middle" fill="#b45309" fontWeight={700}>(MN) // (BC)  ⇒  AM/AB = AN/AC = MN/BC</text>}
    </svg>
  );
}

function TriangleTrigo() {
  return (
    <svg viewBox="0 0 260 170" style={CIRCUIT_SVG_STYLE} role="img" aria-label="Triangle rectangle pour trigonométrie : hypoténuse, côté opposé, côté adjacent à l'angle x" data-schema="triangle-trigo">
      <polygon points="40,130 210,130 210,30" fill="rgba(184,50,61,0.07)" stroke="currentColor" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={198} y={118} width={12} height={12} fill="none" stroke="currentColor" strokeWidth={1.4} />
      <path d="M 70 130 A 30 30 0 0 0 65.3 113" fill="none" stroke="#b8323d" strokeWidth={1.6} />
      <text x={78} y={120} fontSize={13} fill="#b8323d" fontWeight={700} fontStyle="italic">x</text>
      <text x={32} y={142} fontSize={13} textAnchor="end" fill="currentColor" fontWeight={700}>A</text>
      <text x={218} y={142} fontSize={13} fill="currentColor" fontWeight={700}>B</text>
      <text x={218} y={28} fontSize={13} fill="currentColor" fontWeight={700}>C</text>
      <text x={125} y={146} fontSize={11} textAnchor="middle" fill="#b8323d" fontWeight={600} fontStyle="italic">adjacent</text>
      <text x={217} y={82} fontSize={11} fill="#b8323d" fontWeight={600} fontStyle="italic">opposé</text>
      <text x={115} y={72} fontSize={11} textAnchor="middle" fill="#b8323d" fontWeight={600} fontStyle="italic">hypoténuse</text>
      <text x={130} y={163} fontSize={10.5} textAnchor="middle" fill="#b8323d" fontWeight={700}>sin x = opp/hyp · cos x = adj/hyp · tan x = opp/adj</text>
    </svg>
  );
}

function GrapheAffine() {
  const O = { x: 130, y: 110 }, unit = 16;
  const fx = (x: number) => O.x + x * unit;
  const fy = (y: number) => O.y - y * unit;
  const a = 0.5, b = 1;
  const xMin = -5, xMax = 5;
  return (
    <svg viewBox="0 0 260 180" style={CIRCUIT_SVG_STYLE} role="img" aria-label="Graphe d'une fonction affine f(x) = ax + b dans un repère" data-schema="graphe-affine">
      <defs>
        <marker id="arrAff" markerWidth={7} markerHeight={7} refX={6} refY={3.5} orient="auto">
          <polygon points="0,0 7,3.5 0,7" fill="currentColor" />
        </marker>
      </defs>
      {[-5,-4,-3,-2,-1,1,2,3,4,5].map(n => (
        <line key={`gx${n}`} x1={fx(n)} y1={fy(-4)} x2={fx(n)} y2={fy(4)} stroke="#e8e0d0" strokeWidth={0.7} />
      ))}
      {[-3,-2,-1,1,2,3,4].map(n => (
        <line key={`gy${n}`} x1={fx(-6)} y1={fy(n)} x2={fx(6)} y2={fy(n)} stroke="#e8e0d0" strokeWidth={0.7} />
      ))}
      <line x1={fx(-6)} y1={O.y} x2={fx(6)} y2={O.y} stroke="currentColor" strokeWidth={1.6} markerEnd="url(#arrAff)" />
      <line x1={O.x} y1={fy(-4)} x2={O.x} y2={fy(5)} stroke="currentColor" strokeWidth={1.6} markerEnd="url(#arrAff)" />
      <line x1={fx(xMin)} y1={fy(a*xMin+b)} x2={fx(xMax)} y2={fy(a*xMax+b)} stroke="#b45309" strokeWidth={2.4} />
      <circle cx={O.x} cy={fy(b)} r={3.5} fill="#b45309" />
      <text x={O.x - 6} y={fy(b) - 5} fontSize={10.5} textAnchor="end" fill="#b45309" fontWeight={700} fontStyle="italic">b</text>
      <text x={fx(6) + 4} y={O.y + 4} fontSize={11} fill="currentColor" fontStyle="italic">x</text>
      <text x={O.x - 6} y={fy(5) + 4} fontSize={11} textAnchor="end" fill="currentColor" fontStyle="italic">y</text>
      <text x={O.x - 4} y={O.y + 13} fontSize={10} textAnchor="end" fill="currentColor">0</text>
      <text x={190} y={28} fontSize={11} fill="#b45309" fontWeight={700} fontStyle="italic">f(x) = a·x + b</text>
      <text x={190} y={44} fontSize={10} fill="#b45309" fontStyle="italic">a = pente · b = ordonnée en 0</text>
    </svg>
  );
}

// ════════════════════════════════════════════════════════════════════════════
// OPTIQUE — propagation rectiligne, ombres.
// ════════════════════════════════════════════════════════════════════════════

function PropagationRectiligne() {
  return (
    <svg viewBox="0 0 280 120" style={CIRCUIT_SVG_STYLE} role="img" aria-label="Propagation rectiligne : rayons lumineux en ligne droite depuis une source" data-schema="propagation-rectiligne">
      {/* Source lumineuse (soleil stylisé) */}
      <circle cx={40} cy={60} r={14} fill="#fcd34d" stroke="#b45309" strokeWidth={1.8} />
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(a => {
        const rad = a * Math.PI / 180;
        const x1 = 40 + Math.cos(rad) * 16, y1 = 60 + Math.sin(rad) * 16;
        const x2 = 40 + Math.cos(rad) * 22, y2 = 60 + Math.sin(rad) * 22;
        return <line key={a} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#b45309" strokeWidth={1.6} strokeLinecap="round" />;
      })}
      {/* 3 rayons en ligne droite vers la droite */}
      {[35, 60, 85].map(y => (
        <g key={y}>
          <line x1={62} y1={y} x2={255} y2={y} stroke="#b45309" strokeWidth={1.6} />
          <polygon points={`255,${y-4} 263,${y} 255,${y+4}`} fill="#b45309" />
        </g>
      ))}
      <text x={140} y={110} fontSize={10.5} textAnchor="middle" fill="#b45309" fontWeight={600}>la lumière se propage en ligne droite</text>
    </svg>
  );
}

function OmbreSchema() {
  return (
    <svg viewBox="0 0 300 140" style={CIRCUIT_SVG_STYLE} role="img" aria-label="Schéma d'ombre portée : source, objet opaque, écran, zone d'ombre" data-schema="ombre">
      {/* Source à gauche */}
      <circle cx={35} cy={70} r={12} fill="#fcd34d" stroke="#b45309" strokeWidth={1.8} />
      {[0, 45, 90, 135, 180, 225, 270, 315].map(a => {
        const rad = a * Math.PI / 180;
        return <line key={a} x1={35 + Math.cos(rad) * 14} y1={70 + Math.sin(rad) * 14} x2={35 + Math.cos(rad) * 18} y2={70 + Math.sin(rad) * 18} stroke="#b45309" strokeWidth={1.4} strokeLinecap="round" />;
      })}
      {/* Objet opaque au milieu */}
      <rect x={130} y={50} width={14} height={40} fill="#334155" stroke="#1e293b" strokeWidth={1.4} />
      {/* Zone d'ombre (cône qui part des bords de la source vers les bords de l'objet puis se projette sur l'écran) */}
      <polygon points="47,62 130,50 255,0 255,140 130,90 47,78" fill="rgba(51,65,85,0.18)" />
      {/* Rayons limites */}
      <line x1={47} y1={62} x2={255} y2={0} stroke="#b45309" strokeWidth={1.1} strokeDasharray="3 3" />
      <line x1={47} y1={78} x2={255} y2={140} stroke="#b45309" strokeWidth={1.1} strokeDasharray="3 3" />
      {/* Écran à droite */}
      <line x1={255} y1={0} x2={255} y2={140} stroke="currentColor" strokeWidth={2.4} />
      {/* Labels */}
      <text x={35} y={95} fontSize={10} textAnchor="middle" fill="currentColor">source</text>
      <text x={137} y={105} fontSize={10} textAnchor="middle" fill="currentColor">objet</text>
      <text x={268} y={75} fontSize={10} fill="currentColor">écran</text>
      <text x={200} y={75} fontSize={10.5} textAnchor="middle" fill="#1e293b" fontWeight={700}>ombre</text>
    </svg>
  );
}

// ════════════════════════════════════════════════════════════════════════════
// VOLUMES 3D — vues en perspective cavalière pour MEMO aires/volumes.
// ════════════════════════════════════════════════════════════════════════════

// Cube en perspective cavalière (arêtes cachées en pointillés).
function Cube3D({ cote = 'a' }: { cote?: string }) {
  const dx = 22, dy = 16; // décalage perspective
  return (
    <svg viewBox="0 0 160 140" style={CIRCUIT_SVG_STYLE} role="img" aria-label="Cube de côté a en perspective" data-schema="cube-3d">
      {/* Face arrière (cachée) */}
      <path d={`M ${40+dx} ${30-dy} L ${40+dx} ${90-dy} L ${100+dx} ${90-dy}`} fill="none" stroke="currentColor" strokeWidth={1.3} strokeDasharray="3 3" />
      <line x1={40} y1={30} x2={40+dx} y2={30-dy} stroke="currentColor" strokeWidth={1.3} strokeDasharray="3 3" />
      {/* Face avant */}
      <rect x={40} y={30} width={60} height={60} fill="rgba(199,138,29,0.08)" stroke="currentColor" strokeWidth={1.8} />
      {/* Arêtes de profondeur visibles */}
      <line x1={100} y1={30} x2={100+dx} y2={30-dy} stroke="currentColor" strokeWidth={1.8} />
      <line x1={100} y1={90} x2={100+dx} y2={90-dy} stroke="currentColor" strokeWidth={1.8} />
      <line x1={100+dx} y1={30-dy} x2={100+dx} y2={90-dy} stroke="currentColor" strokeWidth={1.8} />
      {/* Label côté */}
      <text x={70} y={106} fontSize={12} textAnchor="middle" fill="#b45309" fontStyle="italic" fontWeight={600}>{cote}</text>
      <text x={80} y={130} fontSize={10.5} textAnchor="middle" fill="#b45309" fontWeight={600}>V = {cote}³</text>
    </svg>
  );
}

function Pave3D() {
  const dx = 24, dy = 16;
  return (
    <svg viewBox="0 0 180 140" style={CIRCUIT_SVG_STYLE} role="img" aria-label="Pavé droit de dimensions L, l, h" data-schema="pave-3d">
      <path d={`M ${35+dx} ${25-dy} L ${35+dx} ${80-dy} L ${125+dx} ${80-dy}`} fill="none" stroke="currentColor" strokeWidth={1.3} strokeDasharray="3 3" />
      <line x1={35} y1={25} x2={35+dx} y2={25-dy} stroke="currentColor" strokeWidth={1.3} strokeDasharray="3 3" />
      <rect x={35} y={25} width={90} height={55} fill="rgba(199,138,29,0.08)" stroke="currentColor" strokeWidth={1.8} />
      <line x1={125} y1={25} x2={125+dx} y2={25-dy} stroke="currentColor" strokeWidth={1.8} />
      <line x1={125} y1={80} x2={125+dx} y2={80-dy} stroke="currentColor" strokeWidth={1.8} />
      <line x1={125+dx} y1={25-dy} x2={125+dx} y2={80-dy} stroke="currentColor" strokeWidth={1.8} />
      <text x={80} y={96} fontSize={11} textAnchor="middle" fill="#b45309" fontStyle="italic" fontWeight={600}>L</text>
      <text x={28} y={55} fontSize={11} textAnchor="end" fill="#b45309" fontStyle="italic" fontWeight={600}>h</text>
      <text x={142} y={14} fontSize={11} fill="#b45309" fontStyle="italic" fontWeight={600}>l</text>
      <text x={88} y={130} fontSize={10.5} textAnchor="middle" fill="#b45309" fontWeight={600}>V = L × l × h</text>
    </svg>
  );
}

function Cylindre3D() {
  return (
    <svg viewBox="0 0 140 150" style={CIRCUIT_SVG_STYLE} role="img" aria-label="Cylindre de rayon r et hauteur h" data-schema="cylindre-3d">
      {/* Ellipse du haut */}
      <ellipse cx={65} cy={25} rx={40} ry={10} fill="rgba(199,138,29,0.08)" stroke="currentColor" strokeWidth={1.8} />
      {/* Côtés */}
      <line x1={25} y1={25} x2={25} y2={105} stroke="currentColor" strokeWidth={1.8} />
      <line x1={105} y1={25} x2={105} y2={105} stroke="currentColor" strokeWidth={1.8} />
      {/* Ellipse du bas (bord avant plein, bord arrière pointillé) */}
      <path d="M 25 105 A 40 10 0 0 0 105 105" fill="rgba(199,138,29,0.12)" stroke="currentColor" strokeWidth={1.8} />
      <path d="M 25 105 A 40 10 0 0 1 105 105" fill="none" stroke="currentColor" strokeWidth={1.3} strokeDasharray="3 3" />
      {/* Rayon */}
      <line x1={65} y1={25} x2={105} y2={25} stroke="#b45309" strokeWidth={1.4} />
      <text x={85} y={20} fontSize={11} textAnchor="middle" fill="#b45309" fontStyle="italic" fontWeight={600}>r</text>
      {/* Hauteur */}
      <line x1={120} y1={25} x2={120} y2={105} stroke="#b45309" strokeWidth={1.4} />
      <line x1={117} y1={25} x2={123} y2={25} stroke="#b45309" strokeWidth={1.4} />
      <line x1={117} y1={105} x2={123} y2={105} stroke="#b45309" strokeWidth={1.4} />
      <text x={130} y={68} fontSize={11} fill="#b45309" fontStyle="italic" fontWeight={600}>h</text>
      <text x={65} y={138} fontSize={10.5} textAnchor="middle" fill="#b45309" fontWeight={600}>V = π r² h</text>
    </svg>
  );
}

function Sphere3D() {
  return (
    <svg viewBox="0 0 130 150" style={CIRCUIT_SVG_STYLE} role="img" aria-label="Sphère de rayon r" data-schema="sphere-3d">
      <circle cx={65} cy={65} r={45} fill="rgba(199,138,29,0.08)" stroke="currentColor" strokeWidth={1.8} />
      {/* Équateur (arrière pointillé + avant plein pour effet 3D) */}
      <ellipse cx={65} cy={65} rx={45} ry={12} fill="none" stroke="currentColor" strokeWidth={1.3} strokeDasharray="3 3" />
      <path d="M 20 65 A 45 12 0 0 0 110 65" fill="none" stroke="currentColor" strokeWidth={1.6} />
      {/* Rayon */}
      <line x1={65} y1={65} x2={105} y2={45} stroke="#b45309" strokeWidth={1.4} />
      <circle cx={65} cy={65} r={2.2} fill="#b45309" />
      <text x={88} y={50} fontSize={11} fill="#b45309" fontStyle="italic" fontWeight={600}>r</text>
      <text x={65} y={138} fontSize={10.5} textAnchor="middle" fill="#b45309" fontWeight={600}>V = (4/3) π r³</text>
    </svg>
  );
}

function Cone3D() {
  return (
    <svg viewBox="0 0 140 150" style={CIRCUIT_SVG_STYLE} role="img" aria-label="Cône de rayon r et hauteur h" data-schema="cone-3d">
      {/* Triangle + base elliptique */}
      <path d="M 65 15 L 25 105 L 105 105 Z" fill="rgba(199,138,29,0.08)" stroke="currentColor" strokeWidth={1.8} strokeLinejoin="round" />
      <path d="M 25 105 A 40 10 0 0 0 105 105" fill="rgba(199,138,29,0.12)" stroke="currentColor" strokeWidth={1.8} />
      <path d="M 25 105 A 40 10 0 0 1 105 105" fill="none" stroke="currentColor" strokeWidth={1.3} strokeDasharray="3 3" />
      {/* Hauteur (axe central pointillé) */}
      <line x1={65} y1={15} x2={65} y2={105} stroke="#b45309" strokeWidth={1.4} strokeDasharray="2 3" />
      <line x1={65} y1={105} x2={105} y2={105} stroke="#b45309" strokeWidth={1.4} />
      <text x={58} y={62} fontSize={11} textAnchor="end" fill="#b45309" fontStyle="italic" fontWeight={600}>h</text>
      <text x={85} y={118} fontSize={11} textAnchor="middle" fill="#b45309" fontStyle="italic" fontWeight={600}>r</text>
      <text x={65} y={138} fontSize={10.5} textAnchor="middle" fill="#b45309" fontWeight={600}>V = (1/3) π r² h</text>
    </svg>
  );
}

// ════════════════════════════════════════════════════════════════════════════
// TRANSFORMATIONS — symétrie axiale, symétrie centrale, translation.
// On utilise la figure "F" stylisée (asymétrique, donc l'image est clairement
// distinguable) pour illustrer la transformation.
// ════════════════════════════════════════════════════════════════════════════

// Mini "F" positionné à (cx,cy), échelle sc, transform optionnel additionnel.
function FigureF({ cx, cy, sc = 1, extra = '', color = 'currentColor' }: { cx: number; cy: number; sc?: number; extra?: string; color?: string }) {
  return (
    <g transform={`translate(${cx},${cy}) scale(${sc}) ${extra}`}>
      <path d="M 0 0 L 12 0 L 12 2 L 2 2 L 2 8 L 8 8 L 8 10 L 2 10 L 2 18 L 0 18 Z" fill={color} stroke={color} strokeWidth={0.5} strokeLinejoin="round" />
    </g>
  );
}

function SymetrieAxiale() {
  return (
    <svg viewBox="0 0 260 140" style={CIRCUIT_SVG_STYLE} role="img" aria-label="Symétrie axiale : figure et son image par rapport à un axe vertical" data-schema="symetrie-axiale">
      {/* Axe vertical */}
      <line x1={130} y1={15} x2={130} y2={125} stroke="#b45309" strokeWidth={2} strokeDasharray="5 4" />
      <text x={130} y={12} fontSize={10.5} textAnchor="middle" fill="#b45309" fontWeight={700}>axe (d)</text>
      {/* Figure originale à gauche */}
      <FigureF cx={65} cy={50} sc={2} color="#334155" />
      <text x={77} y={108} fontSize={11} textAnchor="middle" fill="#334155" fontWeight={700}>F</text>
      {/* Image miroir à droite (scale -1 horizontal) */}
      <FigureF cx={195} cy={50} sc={2} extra="scale(-1,1) translate(-12,0)" color="#b45309" />
      <text x={183} y={108} fontSize={11} textAnchor="middle" fill="#b45309" fontWeight={700}>F'</text>
      <text x={130} y={135} fontSize={10.5} textAnchor="middle" fill="#b45309" fontWeight={600}>l'axe est la médiatrice de [F F']</text>
    </svg>
  );
}

function SymetrieCentrale() {
  return (
    <svg viewBox="0 0 260 140" style={CIRCUIT_SVG_STYLE} role="img" aria-label="Symétrie centrale : figure et son image par rapport à un centre O" data-schema="symetrie-centrale">
      {/* Centre O */}
      <circle cx={130} cy={70} r={3} fill="#b45309" />
      <text x={138} y={66} fontSize={11} fill="#b45309" fontWeight={700}>O</text>
      {/* Figure originale en haut-gauche */}
      <FigureF cx={60} cy={28} sc={1.6} color="#334155" />
      <text x={55} y={75} fontSize={11} textAnchor="middle" fill="#334155" fontWeight={700}>F</text>
      {/* Image par rotation 180° autour de O → en bas-droite */}
      <FigureF cx={200} cy={112} sc={1.6} extra="rotate(180) translate(-12,-18)" color="#b45309" />
      <text x={205} y={78} fontSize={11} textAnchor="middle" fill="#b45309" fontWeight={700}>F'</text>
      {/* Ligne traversant O */}
      <line x1={60} y1={28} x2={200} y2={112} stroke="#b45309" strokeWidth={1} strokeDasharray="3 3" />
      <text x={130} y={134} fontSize={10.5} textAnchor="middle" fill="#b45309" fontWeight={600}>O est le milieu de [F F']</text>
    </svg>
  );
}

function Translation() {
  return (
    <svg viewBox="0 0 260 140" style={CIRCUIT_SVG_STYLE} role="img" aria-label="Translation : figure et son image par un vecteur" data-schema="translation">
      {/* Figure originale */}
      <FigureF cx={40} cy={50} sc={1.8} color="#334155" />
      <text x={50} y={100} fontSize={11} textAnchor="middle" fill="#334155" fontWeight={700}>F</text>
      {/* Vecteur translation */}
      <defs>
        <marker id="arrT" markerWidth={8} markerHeight={8} refX={7} refY={4} orient="auto">
          <polygon points="0,0 8,4 0,8" fill="#b45309" />
        </marker>
      </defs>
      <line x1={70} y1={60} x2={175} y2={60} stroke="#b45309" strokeWidth={2.2} markerEnd="url(#arrT)" />
      <text x={125} y={54} fontSize={11} textAnchor="middle" fill="#b45309" fontStyle="italic" fontWeight={700}>vecteur u</text>
      {/* Image translatée */}
      <FigureF cx={195} cy={50} sc={1.8} color="#b45309" />
      <text x={205} y={100} fontSize={11} textAnchor="middle" fill="#b45309" fontWeight={700}>F'</text>
      <text x={130} y={132} fontSize={10.5} textAnchor="middle" fill="#b45309" fontWeight={600}>même direction, sens, longueur</text>
    </svg>
  );
}

// ── Export vers window pour app.tsx (MEMO_BANK) ─────────────────────────────
(window as any).CircuitKit = {
  Fil, Pile, Resistance, Noeud, FlecheI, Lampe, Interrupteur, Mesureur, Amperemetre, Voltmetre,
  CircuitSerie, CircuitParallele, CircuitAmperemetreSerie, CircuitVoltmetreDerivation, CircuitCourtCircuit, GrapheOhm,
  TriangleRectangle, ConfigThales, TriangleTrigo, GrapheAffine,
  PropagationRectiligne, OmbreSchema,
  Cube3D, Pave3D, Cylindre3D, Sphere3D, Cone3D,
  SymetrieAxiale, SymetrieCentrale, Translation,
};
