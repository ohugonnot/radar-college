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

function TriangleRectangle() {
  return (
    <svg viewBox="0 0 250 160" style={CIRCUIT_SVG_STYLE} role="img" aria-label="Triangle rectangle en A : côtés AB, AC, hypoténuse BC" data-schema="triangle-rectangle">
      <polygon points="50,30 50,130 200,130" fill="rgba(199,138,29,0.08)" stroke="currentColor" strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={50} y={118} width={12} height={12} fill="none" stroke="currentColor" strokeWidth={1.4} />
      <text x={42} y={26} fontSize={13} textAnchor="end" fill="currentColor" fontWeight={700}>A</text>
      <text x={42} y={138} fontSize={13} textAnchor="end" fill="currentColor" fontWeight={700}>B</text>
      <text x={208} y={138} fontSize={13} fill="currentColor" fontWeight={700}>C</text>
      <text x={40} y={85} fontSize={11.5} textAnchor="end" fill="#b45309" fontWeight={600} fontStyle="italic">AB</text>
      <text x={125} y={148} fontSize={11.5} textAnchor="middle" fill="#b45309" fontWeight={600} fontStyle="italic">AC</text>
      <text x={135} y={72} fontSize={11.5} fill="#b45309" fontWeight={600} fontStyle="italic">BC (hypoténuse)</text>
      <text x={125} y={14} fontSize={10.5} textAnchor="middle" fill="#b45309" fontWeight={700}>BC² = AB² + AC²</text>
    </svg>
  );
}

function ConfigThales() {
  return (
    <svg viewBox="0 0 260 170" style={CIRCUIT_SVG_STYLE} role="img" aria-label="Configuration Thalès : triangles ABC et AMN avec (MN) parallèle à (BC)" data-schema="config-thales">
      <polygon points="125,20 40,140 220,140" fill="rgba(199,138,29,0.05)" stroke="currentColor" strokeWidth={1.7} strokeLinejoin="round" />
      <line x1={78} y1={86} x2={177} y2={86} stroke="#b45309" strokeWidth={2.2} />
      <text x={125} y={14} fontSize={13} textAnchor="middle" fill="currentColor" fontWeight={700}>A</text>
      <text x={32} y={150} fontSize={13} textAnchor="end" fill="currentColor" fontWeight={700}>B</text>
      <text x={228} y={150} fontSize={13} fill="currentColor" fontWeight={700}>C</text>
      <text x={70} y={80} fontSize={13} textAnchor="end" fill="#b45309" fontWeight={700}>M</text>
      <text x={185} y={80} fontSize={13} fill="#b45309" fontWeight={700}>N</text>
      <text x={125} y={82} fontSize={12} textAnchor="middle" fill="#b45309" fontWeight={700}>»</text>
      <text x={130} y={137} fontSize={12} textAnchor="middle" fill="currentColor" fontWeight={700}>»</text>
      <text x={130} y={163} fontSize={10.5} textAnchor="middle" fill="#b45309" fontWeight={700}>(MN) // (BC)  ⇒  AM/AB = AN/AC = MN/BC</text>
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

// ── Export vers window pour app.tsx (MEMO_BANK) ─────────────────────────────
(window as any).CircuitKit = {
  Fil, Pile, Resistance, Noeud, FlecheI, Lampe, Interrupteur, Mesureur, Amperemetre, Voltmetre,
  CircuitSerie, CircuitParallele, CircuitAmperemetreSerie, CircuitVoltmetreDerivation, CircuitCourtCircuit, GrapheOhm,
  TriangleRectangle, ConfigThales, TriangleTrigo, GrapheAffine,
};
