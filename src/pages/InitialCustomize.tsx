import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@/components/theme-provider";
import { toast } from "sonner";
import { useAppSound } from "@/hooks/useAppSound";
import { ThemeSection } from "@/components/customize/ThemeSection";

const InitialCustomize = () => {
  const navigate = useNavigate();
  const { setTheme } = useTheme();
  const { playSuccess } = useAppSound();

  const handleThemeSelect = (newTheme: "light" | "dark" | "neon") => {
    setTheme(newTheme);
  };

  const handleContinue = () => {
    playSuccess();
    navigate("/onboarding");
    toast.success("Ótimo! Agora vamos descobrir mais sobre o app dos seus sonhos.");
  };

  return (
    <Layout highlightThemeSwitcher>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-[calc(100vh-5rem)] p-6 bg-gradient-to-b from-background to-background/80"
      >
        <div className="max-w-4xl mx-auto space-y-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Personalize seu App
            </h1>
            <p className="text-muted-foreground text-lg mb-2">
              Comece escolhendo um tema que combine com seu estilo
            </p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-sm text-purple-500"
            >
              Dica: Você poderá alterar o tema a qualquer momento no ícone acima! 
            </motion.p>
          </motion.div>

          <Card className="p-6">
            <ThemeSection onThemeSelect={handleThemeSelect} />
          </Card>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center pt-8"
          >
            <Button
              size="lg"
              onClick={handleContinue}
              className="text-lg px-8 py-6 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300"
            >
              Continuar Personalizando
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default InitialCustomize;