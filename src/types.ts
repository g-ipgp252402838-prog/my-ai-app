export type SectionId = 'home' | 'pengenalan' | 'pembelajaran' | 'amali' | 'permainan' | 'kuiz' | 'sijil';

export interface DeveloperProfile {
  name: string;
  program: string;
  institution: string;
  avatarUrl: string;
  description: string;
  motto: string;
}

export interface UserProgress {
  studentName: string;
  completedModules: {
    modulA: boolean;
    modulB: boolean;
    modulC: boolean;
    modulD: boolean;
  };
  completedAmali: {
    utama?: boolean;
    mukhaffafah: boolean;
    mutawassitah: boolean;
    mughallazah: boolean;
    importance: boolean;
    [key: string]: boolean | undefined;
  };
  gameScores: {
    stage1Score: number;
    stage1Completed: boolean;
    stage2Score: number;
    stage2Completed: boolean;
    stage3Score: number;
    stage3Completed: boolean;
  };
  quizResult: {
    completed: boolean;
    score: number;
    total: number;
    percentage: number;
    answers: number[];
  };
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: 'maksud' | 'mukhaffafah' | 'mutawassitah' | 'mughallazah' | 'amali' | 'situasi';
}

export interface GameItem {
  id: string;
  name: string;
  category: 'mukhaffafah' | 'mutawassitah' | 'mughallazah';
  description: string;
  iconName: string;
}

export interface GameScenario {
  id: number;
  scenario: string;
  question: string;
  options: {
    text: string;
    isCorrect: boolean;
    feedback: string;
  }[];
}

export interface StepItem {
  id: number;
  order: number;
  text: string;
  subtext: string;
}
