// types.ts — Types de domaine globaux.
//
// Fichier d'ambient declarations (pas d'import/export). Rend les types disponibles
// partout (app.tsx, quizzes/*.tsx) sans avoir à importer — Babel standalone ne sait
// pas résoudre les imports en contexte browser.
//
// tsc --noEmit les utilise pour type-checker ; au runtime, preset-typescript les strip.

/// <reference types="react" />

// ─── Quiz configuration (window.ALL_QUIZZES['<key>']) ──────────────────────────

type Subject = 'maths' | 'physique' | 'svt';
type Level = 3 | 4 | 5 | 6;

/** Identifiant composite matière-niveau, ex: 'maths-4', 'svt-6'. */
type QuizKey = `${Subject}-${Level}`;

/** Question brute dans POOL (sans domain — le domain est la clé du POOL parent). */
interface SourceQuestion {
  key: string;
  q: React.ReactNode;
  options: React.ReactNode[];
  /** Index 0..3 de la bonne réponse dans les options (ordre original, pré-shuffle). */
  correct: number;
  hint?: string;
}

/** Question post-buildQuiz : domain ajouté, options shuffled, correct réindexé. */
interface Question extends SourceQuestion {
  domain: string;
  /** Permutation d'ordre appliquée pour shuffler les options (pour relecture exacte). */
  order: number[];
}

interface Domain {
  id: string;
  name: string;
  short: string;
  coef: number;
  color: string;
  icon: string;
  search: string;
}

type LevelLabel = 'acquis' | 'fragile' | 'non-acquis';

interface Resource {
  label: string;
  author: string;
  url: string;
}

interface QuizConfig {
  SEARCH_SITES?: string;
  YT_SUFFIX?: string;
  SUMMER_TOPIC?: string;
  SUBJECT: {
    id: QuizKey;
    name: string;
    short: string;
    level: string;
    mark: string;
    tagline: string;
    introTitle?: [string, string, string];
    introDesc?: string;
  };
  DOMAINS: Record<string, Domain>;
  RESOURCES: Resource[];
  POOL: Record<string, SourceQuestion[]>;
  /** Questions par domaine. Somme = 30 (vérifié par validate.js). */
  PICK: Record<string, number>;
  /** Actions de remédiation par domaine et niveau. */
  PLANS: Record<string, Record<string, string[]>>;
}

// ─── Attempts stockés en localStorage / serveur ──────────────────────────────

type Mode = 'training' | 'exam';

interface LogEntry {
  pos: number;
  key: string;
  domain: string;
  given: number | null;
  correct: number;
  ok: boolean;
  ms: number;
  hinted: boolean;
  order: number[];
}

interface Attempt {
  date: string;
  mode: Mode;
  note: number;
  noteRaw: number;
  correct: number;
  total: number;
  totalMs: number;
  domains: Record<string, { level: LevelLabel; pct: number }>;
  log: LogEntry[];
}

interface Profile {
  name: string;
  klass: string;
  attempts: Attempt[];
}

/** Élève actif dans le HomeScreen du quiz (prénom + classe saisis/pré-remplis). */
interface StudentInfo {
  name: string;
  klass: string;
}

/** Écran actif dans le cycle de vie du quiz React. */
type QuizPhase = 'home' | 'quiz' | 'report';

// ─── Dicts runtime indexés par `Question.key` ─────────────────────────────────

/** Réponse donnée à chaque question : index 0..3 dans les options shuffled, ou null si passée. */
type AnswersMap = Record<string, number | null>;
/** Temps passé (ms) par question. */
type TimingsMap = Record<string, number>;
/** Niveau d'ampoule utilisé par question (0 = aucun, 1 = méthode, 2 = astuce complète). */
type HintsMap = Record<string, number>;

// ─── Résultat de analyze() ────────────────────────────────────────────────────

interface DomainAnalysis {
  correct: number;
  total: number;
  skipped: number;
  wrong: number;
  wrongWeighted: number;
  errors: Array<{ q: Question; type: 'skipped' | 'wrong'; given?: number }>;
  pct: number;
  level: LevelLabel;
}

interface AnalyzeResult {
  total: number;
  correct: number;
  wrong: number;
  skipped: number;
  penaltyPoints: number;
  noteSur20: number;
  noteWeighted: number;
  byDomain: Record<string, DomainAnalysis>;
  forces: string[];
  lacunes: Array<DomainAnalysis & { id: string; priority: number }>;
  appreciation: string;
  levelLabel: string;
  levelColor: string;
}

// ─── Badges & célébration ─────────────────────────────────────────────────────

interface Badge {
  id: string;
  emoji: string;
  title: string;
  desc: string;
}

/** Payload animé sur le rapport après un test réussi. */
interface Celebration {
  newBadges: Badge[];
  newRecord: boolean;
  perfect: boolean;
  streak: number;
}

// ─── Props des composants React (app.tsx) ────────────────────────────────────

interface SubjectMarkProps {
  size?: number;
}

interface ChipProps {
  children?: React.ReactNode;
  color?: string;
  className?: string;
}

interface CompetenceRadarProps {
  byDomain: Record<string, DomainAnalysis>;
  previousDomains?: Attempt['domains'] | null;
}

interface ProgressCurveProps {
  attempts: Attempt[];
}

interface ConfirmScreenProps {
  quiz: Question[];
  answers: AnswersMap;
  onValidate: () => void;
  onCancel: () => void;
  onGoBack: (index: number) => void;
}



interface HomeScreenProps {
  onStart: (info: StudentInfo, mode: Mode, revisionKeys?: string[]) => void;
}

interface QuizScreenProps {
  student: StudentInfo;
  quiz: Question[];
  mode: Mode;
  onFinish: (
    answers: AnswersMap,
    timings: TimingsMap,
    totalMs: number,
    hintsUsed: HintsMap,
    finalMode: Mode
  ) => void;
}

interface ReportScreenProps {
  student: StudentInfo;
  quiz: Question[];
  answers: AnswersMap;
  timings: TimingsMap;
  totalMs: number;
  hintsUsed: HintsMap;
  mode: Mode;
  onRestart: () => void;
  onRetryWrong: (wrongKeys: string[]) => void;
  /** true = relecture d'un attempt archivé (désactive les actions destructives). */
  historyMode: boolean;
}

// ─── Globals exposés par le routeur vanilla / React ──────────────────────────

interface Window {
  ALL_QUIZZES: Partial<Record<QuizKey, QuizConfig>>;
  QUIZ_CONFIG?: QuizConfig;
  mountQuizApp: (key: QuizKey, options?: { reportAt?: string | null }) => void;
  unmountQuizApp: () => void;
  setHashSilently?: (hash: string) => void;
  __pendingQuizMount?: { key: QuizKey; options: { reportAt?: string | null } } | null;
}

// Helpers JSX inline dans index.html (bloc babel avant app.tsx).
declare const F: React.FC<{ n: React.ReactNode; d: React.ReactNode }>;
declare const M: React.FC<{ children?: React.ReactNode }>;

// ReactDOM chargé via UMD CDN.
declare const ReactDOM: typeof import('react-dom/client');
