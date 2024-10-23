import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppPreferences } from "@/hooks/useAppPreferences";
import { 
  Code,
  Palette,
  Binary,
  BookOpen,
  Music,
  Globe,
  ArrowRight 
} from "lucide-react";
import { OptionCard } from "@/components/customize/OptionCard";

type StudyTheme = "programming" | "design" | "data" | "languages" | "music" | "general" | null;

interface Theme {
  type: StudyTheme;
  icon: any;
  title: string;
  description: string;
  suggestedWidgets: string[];
}

const StudyThemesCustomize = () => {
  const navigate = useNavigate();
  const { preferences, updatePreferences } = useAppPreferences();
  const [selectedThemes, setSelectedThemes] = useState<StudyTheme[]>([]);

  const themes: Theme[] = [
    {
      type: "programming",
      icon: Code,
      title: "Programação",
      description: "Desenvolvimento de software e coding",
      suggestedWidgets: ["timer", "notes"]
    },
    {
      type: "design",
      icon: Palette,
      title: "Design",
      description: "UI/UX e design gráfico",
      suggestedWidgets: ["calendar", "notes"]
    },
    {
      type: "data",
      icon: Binary,
      title: "Dados",
      description: "Análise de dados e BI",
      suggestedWidgets: ["notes", "timer"]
    },
    {
      type: "languages",
      icon: Globe,
      title: "Idiomas",
      description: "Aprendizado de línguas",
      suggestedWidgets: ["chat", "timer"]
    },
    {
      type: "music",
      icon: Music,
      title: "Música",
      description: "Teoria musical e prática",
      suggestedWidgets: ["timer", "notes"]
    },
    {
      type: "general",
      icon: BookOpen,
      title: "Geral",
      description: "Conhecimentos diversos",
      suggestedWidgets: ["calendar", "notes"]
    }
  ];

  const toggleTheme = (theme: StudyTheme) => {
    setSelectedThemes(prev => {
      if (prev.includes(theme)) {
        toast.info(`Tema ${theme} removido`);
        return prev.filter(t => t !== theme);
      } else {
        if (prev.length >= 3) {
          toast.error("Máximo de 3 temas permitidos!");
          return prev;
        }
        toast.success(`Tema ${theme} adicionado!`);
        return [...prev, theme];
      }
    });
  };

  const handleContinue = () => {
    if (selectedThemes.length === 0) {
      toast.error("Selecione pelo menos um tema para continuar!");
      return;
    }

    const suggestedWidgets = new Set<string>();
    selectedThemes.forEach(theme => {
      const themeObj = themes.find(t => t.type === theme);
      themeObj?.suggestedWidgets.forEach(widget => suggestedWidgets.add(widget));
    });

    updatePreferences({
      education: {
        ...preferences.education,
        studyThemes: selectedThemes,
        suggestedWidgets: Array.from(suggestedWidgets)
      }
    });

    navigate("/customize/widgets");
  };

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-[calc(100vh-5rem)] p-6"
      >
        <div className="max-w-4xl mx-auto space-y-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Escolha seus Temas de Estudo
            </h1>
            <p className="text-xl text-muted-foreground">
              Selecione até 3 áreas de interesse
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Isso nos ajudará a sugerir as melhores ferramentas para você
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {themes.map((theme) => (
              <OptionCard
                key={theme.type}
                icon={theme.icon}
                title={theme.title}
                description={theme.description}
                selected={selectedThemes.includes(theme.type)}
                onClick={() => toggleTheme(theme.type)}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center pt-8"
          >
            <Button
              size="lg"
              onClick={handleContinue}
              className="text-lg px-8 py-6 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 group"
            >
              Continuar
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default StudyThemesCustomize;