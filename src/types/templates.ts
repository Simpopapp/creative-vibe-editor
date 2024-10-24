export interface Template {
  id: string;
  name: string;
  description: string;
  type: "entertainment" | "education" | "health";
  presetConfig: {
    features: string[];
  };
}

export const templates: Template[] = [
  {
    id: "template1",
    name: "Template 1",
    description: "Descrição do Template 1",
    type: "entertainment",
    presetConfig: {
      features: ["Feature 1", "Feature 2"],
    },
  },
  {
    id: "template2",
    name: "Template 2",
    description: "Descrição do Template 2",
    type: "education",
    presetConfig: {
      features: ["Feature 1", "Feature 2"],
    },
  },
  {
    id: "template3",
    name: "Template 3",
    description: "Descrição do Template 3",
    type: "health",
    presetConfig: {
      features: ["Feature 1", "Feature 2"],
    },
  },
];

export type StudyTheme = "programming" | "design" | "data" | "languages" | "music" | "general" | null;

export interface StudyGoal {
  id: string;
  title: string;
  hoursPerWeek: number;
  reminder: boolean;
}

export interface Schedule {
  type: "flexible" | "fixed" | "hybrid";
  goals: StudyGoal[];
}

export interface EducationPreferences {
  courseType: "video" | "podcast" | "text" | null;
  gamification: "badges" | "quizzes" | "leaderboard" | null;
  schedule: "flexible" | "fixed" | "hybrid" | null;
  interaction: "individual" | "group" | "mentored" | null;
  hasCustomizedWidgets?: boolean;
  studyThemes?: StudyTheme[];
  suggestedWidgets?: string[];
  studyGoals?: StudyGoal[];
  schedule?: Schedule;
}

export type WidgetType = "chat" | "calendar" | "notes" | "timer" | null;