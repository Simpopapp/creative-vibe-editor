export interface Template {
  id: string;
  name: string;
  description: string;
  type: "entertainment" | "education" | "health";
  presetConfig: {
    layout?: string;
    theme?: string;
    features: string[];
  };
  preview: string;
}

export const templates: Template[] = [
  {
    id: "streaming-platform",
    name: "Plataforma de Streaming",
    description: "Template ideal para conteúdo em vídeo com interface moderna",
    type: "entertainment",
    presetConfig: {
      layout: "streaming",
      theme: "dark",
      features: ["playlists", "categorias", "recomendações"]
    },
    preview: "/templates/streaming.png"
  },
  {
    id: "fitness-tracker",
    name: "Tracker de Fitness",
    description: "App completo para acompanhamento de exercícios",
    type: "health",
    presetConfig: {
      layout: "dashboard",
      theme: "light",
      features: ["progresso", "estatísticas", "planos"]
    },
    preview: "/templates/fitness.png"
  },
  {
    id: "curso-interativo",
    name: "Curso Interativo",
    description: "Plataforma educacional gamificada",
    type: "education",
    presetConfig: {
      layout: "modular",
      theme: "neon",
      features: ["quizzes", "conquistas", "ranking"]
    },
    preview: "/templates/course.png"
  }
];