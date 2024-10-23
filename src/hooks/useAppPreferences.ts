import { useLocalStorage } from "./useLocalStorage";

export type AppType = "entertainment" | "education" | "health" | null;

interface AppPreferences {
  type: AppType;
  entertainment?: {
    layout: "social" | "streaming" | "gaming" | null;
    service: "spotify" | "youtube" | "twitch" | null;
    interactionDetails: string;
  };
  education?: {
    courseType: "video" | "podcast" | "text" | null;
    gamification: "badges" | "quizzes" | "leaderboard" | null;
  };
  health?: {
    focusArea: "fitness" | "meditation" | "nutrition" | null;
    trackingPreference: string;
  };
}

export function useAppPreferences() {
  const [preferences, setPreferences] = useLocalStorage<AppPreferences>("app-preferences", {
    type: null
  });

  const updatePreferences = (newPreferences: Partial<AppPreferences>) => {
    setPreferences(prev => ({
      ...prev,
      ...newPreferences
    }));
  };

  return {
    preferences,
    updatePreferences
  };
}