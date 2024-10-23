import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppPreferences } from "@/hooks/useAppPreferences";
import { 
  BookOpen, 
  Headphones, 
  FileText, 
  Trophy, 
  Brain,
  Users,
  Calendar,
  Clock,
  ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";

type CourseType = "video" | "podcast" | "text" | null;
type GamificationType = "badges" | "quizzes" | "leaderboard" | null;
type ScheduleType = "flexible" | "fixed" | "hybrid" | null;
type InteractionType = "individual" | "group" | "mentored" | null;

const EducationCustomize = () => {
  const navigate = useNavigate();
  const { preferences, updatePreferences } = useAppPreferences();
  const [selectedCourseType, setSelectedCourseType] = useState<CourseType>(null);
  const [selectedGamification, setSelectedGamification] = useState<GamificationType>(null);
  const [selectedSchedule, setSelectedSchedule] = useState<ScheduleType>(null);
  const [selectedInteraction, setSelectedInteraction] = useState<InteractionType>(null);

  const handleCourseSelect = (type: CourseType) => {
    setSelectedCourseType(type);
    toast.success(`Tipo de curso ${type} selecionado!`);
  };

  const handleGamificationSelect = (type: GamificationType) => {
    setSelectedGamification(type);
    toast.success(`Sistema de ${type} será implementado!`);
  };

  const handleScheduleSelect = (type: ScheduleType) => {
    setSelectedSchedule(type);
    toast.success(`Cronograma ${type} definido!`);
  };

  const handleInteractionSelect = (type: InteractionType) => {
    setSelectedInteraction(type);
    toast.success(`Modo de interação ${type} selecionado!`);
  };

  const handleContinue = () => {
    if (!selectedCourseType || !selectedGamification || !selectedSchedule || !selectedInteraction) {
      toast.error("Por favor, complete todas as opções antes de continuar!");
      return;
    }

    updatePreferences({
      education: {
        courseType: selectedCourseType,
        gamification: selectedGamification,
        schedule: selectedSchedule,
        interaction: selectedInteraction
      }
    });

    navigate("/customize/preview");
  };

  const renderSection = (
    title: string,
    description: string,
    options: { type: string; title: string; desc: string; icon: any }[],
    selectedValue: string | null,
    onSelect: (type: any) => void
  ) => (
    <section className="mb-12">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {options.map((option) => (
          <motion.div
            key={option.type}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Card
              className={cn(
                "p-6 cursor-pointer transition-all duration-300 group relative overflow-hidden",
                selectedValue === option.type && "border-purple-500 border-2"
              )}
              onClick={() => onSelect(option.type)}
            >
              <motion.div
                initial={false}
                animate={{
                  scale: selectedValue === option.type ? 1.1 : 1,
                  opacity: selectedValue === option.type ? 1 : 0.7
                }}
                className="flex flex-col items-center gap-4"
              >
                <option.icon className="w-12 h-12 text-muted-foreground group-hover:text-primary transition-colors" />
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
                  <p className="text-muted-foreground">{option.desc}</p>
                </div>
              </motion.div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-[calc(100vh-5rem)] p-6"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Personalize sua Plataforma Educacional
            </h1>
            <p className="text-xl text-muted-foreground">
              Configure cada aspecto da sua experiência de aprendizado
            </p>
          </motion.div>

          {renderSection(
            "Formato do Conteúdo",
            "Escolha como você prefere consumir o material didático",
            [
              { type: "video", title: "Vídeo Aulas", desc: "Aprenda visualizando explicações detalhadas", icon: BookOpen },
              { type: "podcast", title: "Podcast", desc: "Estude enquanto faz outras atividades", icon: Headphones },
              { type: "text", title: "Material Escrito", desc: "Leitura aprofundada com exercícios", icon: FileText }
            ],
            selectedCourseType,
            handleCourseSelect
          )}

          {renderSection(
            "Sistema de Gamificação",
            "Mantenha-se motivado com elementos de jogos",
            [
              { type: "badges", title: "Conquistas", desc: "Colecione badges por objetivos alcançados", icon: Trophy },
              { type: "quizzes", title: "Desafios", desc: "Teste seu conhecimento regularmente", icon: Brain },
              { type: "leaderboard", title: "Ranking", desc: "Compare seu progresso com outros alunos", icon: Users }
            ],
            selectedGamification,
            handleGamificationSelect
          )}

          {renderSection(
            "Cronograma de Estudos",
            "Defina como você quer organizar seu tempo",
            [
              { type: "flexible", title: "Flexível", desc: "Estude no seu próprio ritmo", icon: Clock },
              { type: "fixed", title: "Estruturado", desc: "Horários predefinidos", icon: Calendar },
              { type: "hybrid", title: "Híbrido", desc: "Combine horários fixos e flexíveis", icon: Calendar }
            ],
            selectedSchedule,
            handleScheduleSelect
          )}

          {renderSection(
            "Modo de Interação",
            "Escolha como você prefere interagir durante o aprendizado",
            [
              { type: "individual", title: "Individual", desc: "Estude no seu próprio ritmo", icon: Users },
              { type: "group", title: "Em Grupo", desc: "Aprenda com outros estudantes", icon: Users },
              { type: "mentored", title: "Com Mentor", desc: "Acompanhamento personalizado", icon: Users }
            ],
            selectedInteraction,
            handleInteractionSelect
          )}

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
              Finalizar Personalização
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default EducationCustomize;