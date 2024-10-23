export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: "learning" | "engagement" | "milestone";
  progress: number;
  maxProgress: number;
  completed: boolean;
  unlockedAt?: Date;
}

export interface AchievementCategory {
  id: "learning" | "engagement" | "milestone";
  title: string;
  description: string;
}