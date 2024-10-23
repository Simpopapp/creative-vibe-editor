import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useAppSound } from "@/hooks/useAppSound";
import { Palette, ArrowRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

type ColorScheme = "modern" | "nature" | "vibrant" | null;

interface ColorPalette {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
}

const colorSchemes: Record<NonNullable<ColorScheme>, ColorPalette> = {
  modern: {
    primary: "from-blue-500 to-purple-600",
    secondary: "from-purple-500 to-pink-500",
    accent: "from-indigo-500 to-cyan-500",
    background: "from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800"
  },
  nature: {
    primary: "from-green-500 to-emerald-600",
    secondary: "from-teal-500 to-green-500",
    accent: "from-yellow-500 to-amber-500",
    background: "from-stone-50 to-stone-100 dark:from-stone-900 dark:to-stone-800"
  },
  vibrant: {
    primary: "from-pink-500 to-rose-600",
    secondary: "from-violet-500 to-purple-500",
    accent: "from-yellow-400 to-orange-500",
    background: "from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800"
  }
};

const ColorPaletteCustomize = () => {
  const navigate = useNavigate();
  const { playSelect, playSuccess } = useAppSound();
  const [selectedScheme, setSelectedScheme] = useState<ColorScheme>(null);

  const handleSchemeSelect = (scheme: ColorScheme) => {
    setSelectedScheme(scheme);
    playSelect();
    toast.success(`Paleta ${scheme} selecionada!`);
  };

  const handleContinue = () => {
    if (!selectedScheme) {
      toast.error("Por favor, escolha uma paleta de cores antes de continuar.");
      return;
    }
    playSuccess();
    navigate("/customize/widgets");
  };

  return (
    <Layout highlightThemeSwitcher>
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
              Escolha sua Paleta de Cores
            </h1>
            <p className="text-muted-foreground text-lg">
              Selecione as cores que melhor representam seu app
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(Object.keys(colorSchemes) as ColorScheme[]).map((scheme) => (
              <motion.div
                key={scheme}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card
                  className={cn(
                    "p-8 cursor-pointer transition-all duration-300 group relative overflow-hidden",
                    selectedScheme === scheme && "border-2 border-primary"
                  )}
                  onClick={() => handleSchemeSelect(scheme)}
                >
                  <motion.div
                    initial={false}
                    animate={{
                      scale: selectedScheme === scheme ? 1.1 : 1,
                      opacity: selectedScheme === scheme ? 1 : 0.7
                    }}
                    className="flex flex-col items-center gap-4"
                  >
                    <Palette className="w-12 h-12 text-muted-foreground group-hover:text-primary transition-colors" />
                    <div className="text-center">
                      <h3 className="text-xl font-semibold mb-2 capitalize">{scheme}</h3>
                      <div className="space-y-2">
                        {Object.entries(colorSchemes[scheme]).map(([key, value]) => (
                          <div
                            key={key}
                            className={cn(
                              "h-6 rounded-full bg-gradient-to-r",
                              value
                            )}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
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
              Continuar
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default ColorPaletteCustomize;