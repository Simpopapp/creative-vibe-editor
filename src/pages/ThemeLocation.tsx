import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { useAppSound } from "@/hooks/useAppSound";

const ThemeLocation = () => {
  const navigate = useNavigate();
  const { playSuccess } = useAppSound();

  const handleContinue = () => {
    playSuccess();
    toast.success("Ótimo! Vamos para a próxima etapa!");
    navigate("/onboarding");
  };

  return (
    <Layout highlightThemeSwitcher>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-[calc(100vh-5rem)] flex items-center justify-center p-6"
      >
        <div className="max-w-2xl text-center space-y-8">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Ótima Escolha!
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              Você pode alterar o tema do app a qualquer momento usando o botão no canto superior direito
            </p>
            <p className="text-sm text-purple-500">
              Olhe para o ícone destacado acima ☝️
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Button
              size="lg"
              onClick={handleContinue}
              className="text-lg px-8 py-6 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 group"
            >
              Próxima Etapa
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default ThemeLocation;