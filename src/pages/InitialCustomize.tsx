import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@/components/theme-provider";
import { toast } from "sonner";
import { Moon, Sun, Palette, ArrowRight } from "lucide-react";
import { useAppSound } from "@/hooks/useAppSound";

const InitialCustomize = () => {
  const navigate = useNavigate();
  const { setTheme } = useTheme();
  const { playSelect, playSuccess } = useAppSound();

  const handleThemeSelect = (theme: "light" | "dark" | "neon") => {
    setTheme(theme);
    playSelect();
    toast.success(`Tema ${theme} selecionado! Vamos continuar personalizando seu app.`);
  };

  const handleContinue = () => {
    playSuccess();
    navigate("/onboarding");
    toast.success("Ótimo! Agora vamos descobrir mais sobre o app dos seus sonhos.");
  };

  return (
    <Layout>
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
              Como você prefere visualizar seu app?
            </h1>
            <p className="text-muted-foreground text-lg">
              Escolha o tema que mais combina com você
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              { type: "light", icon: Sun, title: "Tema Claro", desc: "Visual clean e minimalista" },
              { type: "dark", icon: Moon, title: "Tema Escuro", desc: "Confortável para os olhos" },
              { type: "neon", icon: Palette, title: "Tema Neon", desc: "Vibrante e moderno" }
            ].map((theme) => (
              <motion.div
                key={theme.type}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card
                  className="p-6 cursor-pointer hover:bg-accent transition-colors group relative overflow-hidden"
                  onClick={() => handleThemeSelect(theme.type as "light" | "dark" | "neon")}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="flex flex-col items-center text-center space-y-4 relative z-10">
                    <theme.icon className="w-12 h-12 group-hover:text-primary transition-colors" />
                    <h3 className="text-xl font-semibold">{theme.title}</h3>
                    <p className="text-muted-foreground">{theme.desc}</p>
                  </div>
                </Card>
              </motion.div>
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
              Continuar Personalizando
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default InitialCustomize;