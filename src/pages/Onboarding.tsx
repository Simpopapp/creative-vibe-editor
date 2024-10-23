import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

type AppType = "entertainment" | "education" | "health" | null;

const Onboarding = () => {
  const [selectedType, setSelectedType] = useState<AppType>(null);
  const navigate = useNavigate();

  const handleSelection = (type: AppType) => {
    setSelectedType(type);
    toast.success("Ótima escolha! Vamos personalizar seu app.");
    setTimeout(() => {
      navigate(`/customize/${type}`);
    }, 1500);
  };

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center p-4"
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Que tipo de app você quer criar?</h1>
          <p className="text-muted-foreground text-lg">
            Escolha uma categoria para começar sua jornada
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
          <motion.div
            whileHover={{ scale: 1.05 }}
            onClick={() => handleSelection("entertainment")}
          >
            <Card className={`p-6 cursor-pointer ${
              selectedType === "entertainment" ? "border-purple-500 border-2" : ""
            }`}>
              <h3 className="text-xl font-semibold mb-2">Entretenimento</h3>
              <p className="text-muted-foreground">
                Jogos, mídia social, streaming
              </p>
            </Card>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            onClick={() => handleSelection("education")}
          >
            <Card className={`p-6 cursor-pointer ${
              selectedType === "education" ? "border-purple-500 border-2" : ""
            }`}>
              <h3 className="text-xl font-semibold mb-2">Educação</h3>
              <p className="text-muted-foreground">
                Cursos, tutoriais, aprendizado
              </p>
            </Card>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            onClick={() => handleSelection("health")}
          >
            <Card className={`p-6 cursor-pointer ${
              selectedType === "health" ? "border-purple-500 border-2" : ""
            }`}>
              <h3 className="text-xl font-semibold mb-2">Saúde</h3>
              <p className="text-muted-foreground">
                Fitness, bem-estar, meditação
              </p>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default Onboarding;