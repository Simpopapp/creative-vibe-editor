import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import { toast } from "sonner";
import useSound from "use-sound";
import { cn } from "@/lib/utils";

type Theme = "modern" | "minimal" | "neon" | null;
type ColorScheme = "light" | "dark" | "neon" | null;

const Customize = () => {
  const [progress, setProgress] = useState(25);
  const [selectedTheme, setSelectedTheme] = useState<Theme>(null);
  const [selectedColor, setSelectedColor] = useState<ColorScheme>(null);
  
  // Som de seleção
  const [playSelect] = useSound("/sounds/select.mp3", { volume: 0.5 });
  
  const handleThemeSelect = (theme: Theme) => {
    setSelectedTheme(theme);
    playSelect();
    setProgress((prev) => Math.min(prev + 25, 100));
    toast.success("Tema selecionado com sucesso!");
  };

  const handleColorSelect = (color: ColorScheme) => {
    setSelectedColor(color);
    playSelect();
    setProgress((prev) => Math.min(prev + 25, 100));
    toast.success("Esquema de cores aplicado!");
  };

  // Determina a classe do background baseado nas escolhas
  const getBackgroundClass = () => {
    if (selectedColor === "neon") {
      return "bg-gradient-to-br from-purple-900 via-black to-indigo-900";
    }
    if (selectedColor === "dark") {
      return "bg-gradient-to-br from-gray-900 via-gray-800 to-black";
    }
    return "bg-gradient-to-br from-blue-50 via-white to-purple-50";
  };

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={cn(
          "min-h-[calc(100vh-5rem)] p-4 transition-colors duration-1000",
          getBackgroundClass()
        )}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-4xl font-bold mb-4">Personalize seu App</h1>
            <Progress value={progress} className="h-2" />
            <p className="text-muted-foreground mt-2">
              Escolha o tema e as cores que combinam com seu estilo
            </p>
          </motion.div>

          <div className="space-y-8">
            {/* Seleção de Tema */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Escolha o Tema</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <AnimatePresence>
                  {["modern", "minimal", "neon"].map((theme) => (
                    <motion.div
                      key={theme}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleThemeSelect(theme as Theme)}
                    >
                      <Card className={cn(
                        "cursor-pointer transition-all",
                        selectedTheme === theme ? "border-purple-500 border-2" : ""
                      )}>
                        <CardContent className="p-6">
                          <h3 className="text-xl font-semibold mb-4 capitalize">{theme}</h3>
                          <div className={cn(
                            "aspect-video rounded-lg flex items-center justify-center",
                            theme === "modern" ? "bg-gradient-to-br from-blue-500/20 to-purple-500/20" :
                            theme === "minimal" ? "bg-gradient-to-br from-gray-200 to-gray-100" :
                            "bg-gradient-to-br from-purple-600/30 to-pink-600/30"
                          )}>
                            <p className="text-muted-foreground">Visualização do Tema</p>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </section>

            {/* Seleção de Cores */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Esquema de Cores</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <AnimatePresence>
                  {[
                    { id: "light", label: "Claro", gradient: "from-blue-100 to-purple-100" },
                    { id: "dark", label: "Escuro", gradient: "from-gray-800 to-gray-900" },
                    { id: "neon", label: "Neon", gradient: "from-purple-600 to-pink-600" }
                  ].map((color) => (
                    <motion.div
                      key={color.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleColorSelect(color.id as ColorScheme)}
                    >
                      <Card className={cn(
                        "cursor-pointer transition-all",
                        selectedColor === color.id ? "border-purple-500 border-2" : ""
                      )}>
                        <CardContent className="p-6">
                          <h3 className="text-xl font-semibold mb-4">{color.label}</h3>
                          <div className={cn(
                            "aspect-video rounded-lg bg-gradient-to-br",
                            color.gradient
                          )} />
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </section>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex justify-end gap-4 pt-8"
            >
              <Button
                variant="outline"
                onClick={() => toast.info("Suas alterações foram salvas automaticamente!")}
              >
                Voltar
              </Button>
              <Button
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                onClick={() => toast.success("Configurações salvas! Redirecionando...")}
              >
                Próximo Passo
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default Customize;