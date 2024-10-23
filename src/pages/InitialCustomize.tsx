import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@/components/theme-provider";
import { toast } from "sonner";
import { Moon, Sun, Palette, Layers, Layout as LayoutIcon, Paintbrush } from "lucide-react";
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

  const customizationOptions = [
    {
      id: "visual",
      title: "Visual do App",
      description: "Comece personalizando as cores e temas",
      icon: Paintbrush,
      themes: [
        { type: "light", icon: Sun, title: "Claro", desc: "Visual clean e minimalista" },
        { type: "dark", icon: Moon, title: "Escuro", desc: "Confortável para os olhos" },
        { type: "neon", icon: Palette, title: "Neon", desc: "Vibrante e moderno" }
      ]
    },
    {
      id: "layout",
      title: "Layout",
      description: "Organize os elementos da sua interface",
      icon: LayoutIcon,
      comingSoon: true
    },
    {
      id: "components",
      title: "Componentes",
      description: "Personalize botões, cards e mais",
      icon: Layers,
      comingSoon: true
    }
  ];

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
              Personalize seu App
            </h1>
            <p className="text-muted-foreground text-lg">
              Comece pelo visual e desbloqueie mais opções conforme avança
            </p>
          </motion.div>

          <div className="grid gap-6">
            {customizationOptions.map((option) => (
              <motion.div
                key={option.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Card className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <option.icon className="w-6 h-6 text-primary" />
                    <div>
                      <h2 className="text-xl font-semibold">{option.title}</h2>
                      <p className="text-muted-foreground">{option.description}</p>
                    </div>
                  </div>

                  {option.themes ? (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {option.themes.map((theme) => (
                        <motion.div
                          key={theme.type}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Card
                            className="p-4 cursor-pointer hover:bg-accent transition-colors group relative overflow-hidden"
                            onClick={() => handleThemeSelect(theme.type as "light" | "dark" | "neon")}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="flex items-center gap-3 relative z-10">
                              <theme.icon className="w-5 h-5 group-hover:text-primary transition-colors" />
                              <div>
                                <h3 className="font-medium">{theme.title}</h3>
                                <p className="text-sm text-muted-foreground">{theme.desc}</p>
                              </div>
                            </div>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-24 bg-muted/50 rounded-lg">
                      <p className="text-muted-foreground text-sm">Em breve disponível</p>
                    </div>
                  )}
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