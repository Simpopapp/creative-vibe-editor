import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppPreferences } from "@/hooks/useAppPreferences";
import { BookOpen, Users, ArrowRight } from "lucide-react";
import { OptionCard } from "@/components/customize/OptionCard";

type CourseType = "self-paced" | "mentored" | null;

const EducationCustomize = () => {
  const navigate = useNavigate();
  const { updatePreferences } = useAppPreferences();
  const [selectedType, setSelectedType] = useState<CourseType>(null);

  const handleTypeSelect = (type: CourseType) => {
    setSelectedType(type);
    toast.success(`Modo ${type === 'self-paced' ? 'autodidata' : 'mentoria'} selecionado!`);
  };

  const handleContinue = () => {
    if (!selectedType) {
      toast.error("Por favor, escolha um modo de estudo antes de continuar!");
      return;
    }

    updatePreferences({
      education: {
        courseType: selectedType,
        gamification: "badges", // Default values for simplified flow
        schedule: "flexible",
        interaction: selectedType === "mentored" ? "mentored" : "individual"
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
        <div className="max-w-2xl mx-auto space-y-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Como você prefere estudar?
            </h1>
            <p className="text-xl text-muted-foreground">
              Escolha o modo que melhor se adapta ao seu estilo de aprendizado
            </p>
          </motion.div>

          <div className="grid gap-4">
            <OptionCard
              icon={BookOpen}
              title="Modo Autodidata"
              description="Estude no seu próprio ritmo, com material organizado e exercícios práticos"
              selected={selectedType === "self-paced"}
              onClick={() => handleTypeSelect("self-paced")}
            />
            
            <OptionCard
              icon={Users}
              title="Modo Mentoria"
              description="Aprenda com acompanhamento personalizado de mentores especializados"
              selected={selectedType === "mentored"}
              onClick={() => handleTypeSelect("mentored")}
            />
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

export default EducationCustomize;