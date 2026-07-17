// ── 学習構造の5層 ─────────────────────────────────────
// Genre（ジャンル） → Category（カテゴリ） → Category（コース）
//   → Course（章） → Lesson（講義）
//
// コード内の既存型との対応:
//   Genre      = 新規（座学系 / ゲーム系 / 受験用）
//   Category   = 新規（お金 / 投資 / ZAi …）
//   Category   = 既存（お金の基本コース など）← 画像・レベルを追加
//   Course     = 既存（第1章 など）
//   Lesson     = 既存
// ─────────────────────────────────────────────────────

export type CourseLevel = '入門' | '基礎' | '応用' | '上級';

export interface Genre {
  id: string;
  title: string;
  description: string;
  image?: string;
}

export interface TopicCategory {
  id: string;
  title: string;
  description: string;
  image?: string;
  genreId: string;
}

export type LessonSection =
  | { type: 'text'; content: string }
  | { type: 'heading'; level: 2 | 3; content: string }
  | { type: 'bullet-list'; items: string[] }
  | { type: 'numbered-list'; items: string[] }
  | { type: 'highlight-box'; title: string; items?: string[]; content?: string }
  | { type: 'info-box'; content: string }
  | { type: 'practice'; question: string; auxiliaryPrompt: string; answer: string }
  | { type: 'glossary'; terms: { term: string; definition: string }[] }
  | { type: 'summary'; content: string; nextLesson: string }
  | { type: 'image'; src: string; alt: string; caption?: string }
  | { type: 'comic'; data: ComicData };

export interface GameTag {
  source: 'ZAi';
  mechanic: string;
  description: string;
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  videoId: string;
  isPremium: boolean;
  checkItems: string[];
  sections: LessonSection[];
  gameTags?: GameTag[];
  isComingSoon?: boolean;
  checkItemsRecommendation?: boolean;
  [key: string]: any; // Allow additional properties for language-specific fields
}

export interface Course {
  id: string;
  title: string;
  description?: string;
  image?: string;
  lessons: Lesson[];
}

export interface Category {
  id: string;
  title: string;
  description: string;
  image?: string;
  level?: CourseLevel;
  topicCategoryId?: string;
  courses: Course[];
}

// ── 漫画機能 ────────────────────────────────────────────

export type ComicPanel = {
  role: string;
  character: string;
  text: string;
};

export type ComicData = {
  title: string;
  lessonId: string;
  image: string;
  panels: ComicPanel[];
  learning: string[];
  comicPrompt?: string;
  generatedAt?: string;
  imageVersion?: string;
};

// ── ZAi 株ゲーム 入門コース（全12UNIT） ──────────────
// 正式仕様（2026-07-15 確定）
// 旧 course-zai.ts から独立した新カリキュラム

export interface ZaiQuizOption {
  text: string;
  isCorrect: boolean;
}

export interface ZaiQuizQuestion {
  id: string;
  question: string;
  options: ZaiQuizOption[];
  explanation: string;
}

export interface ZaiWorksheet {
  classroomWork?: {
    title: string;
    duration_minutes: number;
    instructions: string;
    questions: string[];
    format: 'web' | 'paper' | 'both';
  };
  gameRecording?: {
    title: string;
    duration_minutes: number;
    instructions: string;
    recordingItems: string[];
    format: 'web' | 'paper' | 'both';
  };
  reflection?: {
    title: string;
    duration_minutes: number;
    instructions: string;
    questions: string[];
    format: 'web' | 'paper' | 'both';
  };
  homework?: {
    title: string;
    duration_days: number;
    instructions: string;
    tasks: string[];
    format: 'printable' | 'web' | 'both';
    notes?: string;
  };
}

export interface ZaiTeacherGuide {
  purpose: string;
  estimatedTime: number;
  materialsNeeded: string[];
  preparation?: string[];
  introduction?: {
    duration_minutes: number;
    questions: string[];
    notes: string;
    expectedResponses?: string[];
    teachingPoints?: string[];
  };
  setupSession?: {
    duration_minutes: number;
    title?: string;
    content: string[];
    notes?: string;
  };
  gameSession?: {
    duration_minutes: number;
    setup?: string[];
    flow: string[];
    questions_to_ask: string[];
    stoppingPoints: string[];
    notes: string[];
  };
  academySession?: {
    duration_minutes: number;
    focus: string;
    content: string[];
    notes: string;
    timing?: string;
  };
  reflection?: {
    duration_minutes: number;
    structure: string[];
    sharingPrompts: string[];
    notes: string[];
  };
  summarySession?: {
    duration_minutes: number;
    title?: string;
    content: string[];
    notes?: string;
  };
  commonResponses?: Array<{
    scenario: string;
    response: string;
  }>;
  teachingNotes?: string[];
  nextUnit?: string;
  nextUnitPreview?: string;
}

export interface ZaiAcademicContent {
  introduction?: {
    type: string;
    title?: string;
    content: string;
  };
  keywords_explanation?: Array<{
    term: string;
    explanation: string;
  }>;
  realWorldConnection?: {
    type: string;
    title: string;
    examples?: string[];
    explanation?: string;
  };
  summary?: {
    points: string[];
  };
}

export interface ZaiGameContent {
  overview: string;
  focus: string;
  duration_minutes: number;
}

export interface ZaiUnit {
  id: string;
  unitNumber: number;
  title: string;
  theme?: string;
  learningGoals: string[];
  goalStatement: string;
  keywords: string[];
  estimatedTime?: {
    introduction?: number;
    setup?: number;
    gamePlay?: number;
    reflection?: number;
    classroom?: number;
    summary?: number;
    total: number;
  };
  academicContent?: ZaiAcademicContent;
  gameContent?: ZaiGameContent;
  gameQuestions?: string[];
  reflection?: {
    sharingPoints: string[];
  };
  teacherGuide?: ZaiTeacherGuide;
  worksheet?: ZaiWorksheet;
  quiz?: {
    title: string;
    questions: ZaiQuizQuestion[];
  };
  navigation?: {
    unitNumber: number;
    nextUnit?: string;
    nextUnitTitle?: string;
    prevUnit?: string;
    prevUnitTitle?: string;
  };
}

export interface Zai12UnitCategory {
  id: string;
  title: string;
  description: string;
  level: CourseLevel;
  topicCategoryId?: string;
  units: ZaiUnit[];
}
