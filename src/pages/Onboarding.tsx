import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useAppPreferences, AppType } from "@/hooks/useAppPreferences";

const Onboarding = () => {
  const navigate = useNavigate();
  const { updatePreferences, preferences } = useAppPreferences();

  const handleSelection = (type: AppType) => {
    updatePreferences({ type });
    toast.success("Ótima escolha! Vamos personalizar seu app.");
    navigate(`/customize/${type}`);
  };

  return (
    <Layout highlightThemeSwitcher>
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
          <p className="text-muted-foreground text-lg mb-2">
            Escolha uma categoria para começar sua jornada
          </p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-sm text-purple-500"
          >
            Dica: Você pode alterar o tema do app a qualquer momento no ícone acima! 
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
          {[
            { type: "entertainment", title: "Entretenimento", desc: "Jogos, mídia social, streaming" },
            { type: "education", title: "Educação", desc: "Cursos, tutoriais, aprendizado" },
            { type: "health", title: "Saúde", desc: "Fitness, bem-estar, meditação" }
          ].map((option) => (
            <motion.div
              key={option.type}
              whileHover={{ scale: 1.05 }}
              onClick={() => handleSelection(option.type as AppType)}
            >
              <Card className={`p-6 cursor-pointer ${
                preferences.type === option.type ? "border-purple-500 border-2" : ""
              }`}>
                <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
                <p className="text-muted-foreground">{option.desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Layout>
  );
};

export default Onboarding;