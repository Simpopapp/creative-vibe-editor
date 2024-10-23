import { useAppPreferences } from "./useAppPreferences";

type Suggestion = {
  id: string;
  title: string;
  description: string;
  confidence: number;
  category: string;
  features: string[];
};

export const useSuggestions = () => {
  const { preferences } = useAppPreferences();

  const getSuggestions = (): Suggestion[] => {
    const suggestions: Suggestion[] = [];

    if (preferences.type === "entertainment") {
      if (preferences.entertainment?.layout === "social") {
        suggestions.push({
          id: "1",
          title: "Feed Dinâmico",
          description: "Interface de rolagem infinita com conteúdo personalizado",
          confidence: 0.9,
          category: "layout",
          features: ["Rolagem infinita", "Personalização", "Interações sociais"],
        });
      }
      if (preferences.entertainment?.service === "spotify") {
        suggestions.push({
          id: "2",
          title: "Modo Festa",
          description: "Interface especial para playlists colaborativas",
          confidence: 0.85,
          category: "feature",
          features: ["Colaboração", "Tempo real", "Votação"],
        });
      }
    }

    if (preferences.type === "education") {
      if (preferences.education?.courseType === "video") {
        suggestions.push({
          id: "3",
          title: "Notas Sincronizadas",
          description: "Sistema de anotações que sincroniza com os momentos do vídeo",
          confidence: 0.95,
          category: "feature",
          features: ["Sincronização", "Organização", "Revisão"],
        });
      }
    }

    if (preferences.type === "health") {
      if (preferences.health?.focusArea === "fitness") {
        suggestions.push({
          id: "4",
          title: "Treinos em AR",
          description: "Visualização de exercícios em realidade aumentada",
          confidence: 0.8,
          category: "feature",
          features: ["AR", "Interativo", "Visual"],
        });
      }
    }

    return suggestions;
  };

  return { suggestions: getSuggestions() };
};