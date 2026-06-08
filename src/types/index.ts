export type LessonSection =
  | { type: 'text'; content: string }
  | { type: 'heading'; level: 2 | 3; content: string }
  | { type: 'bullet-list'; items: string[] }
  | { type: 'numbered-list'; items: string[] }
  | { type: 'highlight-box'; title: string; items: string[] }
  | { type: 'info-box'; content: string }
  | { type: 'practice'; question: string; auxiliaryPrompt: string; answer: string }
  | { type: 'glossary'; terms: { term: string; definition: string }[] }
  | { type: 'summary'; content: string; nextLesson: string };

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
}

export interface Course {
  id: string;
  title: string;
  description?: string;
  lessons: Lesson[];
}

export interface Category {
  id: string;
  title: string;
  description: string;
  courses: Course[];
}
