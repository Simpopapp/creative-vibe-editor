import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppPreferences } from "@/hooks/useAppPreferences";
import { 
  MessageSquare, 
  Calendar, 
  BookOpen, 
  Timer,
  ArrowRight 
} from "lucide-react";
import { OptionCard } from "@/components/customize/OptionCard";

type WidgetType = "chat" | "calendar" | "notes" | "timer" | null;

const WidgetCustomize = () => {
  const navigate = useNavigate();
  const { preferences, updatePreferences } = useAppPreferences();
  const [selectedWidgets, setSelectedWidgets] = useState<WidgetType[]>([]);

  const widgets = [
    {
      type: "chat" as WidgetType,
      icon: MessageSquare,
      title: "Chat Colaborativo",
      description: "Converse com outros estudantes em tempo real"
    },
    {
      type: "calendar" as WidgetType,
      icon: Calendar,
      title: "Calendário de Estudos",
      description: "Organize suas sessões de estudo"
    },
    {
      type: "notes" as WidgetType,
      icon: BookOpen,
      title: "Bloco de Notas",
      description: "Faça anotações durante as aulas"
    },
    {
      type: "timer" as WidgetType,
      icon: Timer,
      title: "Timer Pomodoro",
      description: "Mantenha o foco com intervalos programados"
    }
  ];

  const toggleWidget = (widget: WidgetType) => {
    setSelectedWidgets(prev => {
      if (prev.includes(widget)) {
        toast.info(`Widget ${widget} removido`);
        return prev.filter(w => w !== widget);
      } else {
        toast.success(`Widget ${widget} adicionado!`);
        return [...prev, widget];
      }
    });
  };

  const handleContinue = () => {
    if (selectedWidgets.length === 0) {
      toast.error("Selecione pelo menos um widget para continuar!");
      return;
    }

    updatePreferences({
      widgets: selectedWidgets,
      education: {
        ...preferences.education,
        hasCustomizedWidgets: true
      }
    });

    navigate("/customize/preview");
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
              Personalize sua Área de Estudos
            </h1>
            <p className="text-xl text-muted-foreground">
              Selecione as ferramentas que você deseja ter disponíveis
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Você pode selecionar múltiplos widgets
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {widgets.map((widget) => (
              <OptionCard
                key={widget.type}
                icon={widget.icon}
                title={widget.title}
                description={widget.description}
                selected={selectedWidgets.includes(widget.type)}
                onClick={() => toggleWidget(widget.type)}
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

export default WidgetCustomize;