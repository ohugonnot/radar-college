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

interface Question {
  /** Identifiant stable (base du tracker d'erreurs + log). */
  key: string;
  /** Énoncé (peut contenir du JSX). */
  q: React.ReactNode;
  /** 4 options. */
  options: React.ReactNode[];
  /** Index 0..3 de la bonne réponse. */
  correct: 0 | 1 | 2 | 3;
  /** Astuce détaillée (mode entraînement). */
  hint?: string;
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
  POOL: Record<string, Question[]>;
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
