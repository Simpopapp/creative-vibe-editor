import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useAppSound } from "@/hooks/useAppSound";
import { ArrowRight, Type } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

type FontType = "modern" | "classic" | "playful";

const FontCustomize = () => {
  const navigate = useNavigate();
  const { playSelect, playSuccess } = useAppSound();
  const [selectedFont, setSelectedFont] = useState<FontType | null>(null);

  const handleFontSelect = (font: FontType) => {
    setSelectedFont(font);
    playSelect();
    toast.success(`Fonte ${font} selecionada!`);
  };

  const handleContinue = () => {
    if (!selectedFont) {
      toast.error("Por favor, escolha uma fonte antes de continuar.");
      return;
    }
    playSuccess();
    navigate("/customize/colors");
  };

  const getFontClass = (font: FontType) => {
    switch (font) {
      case "modern":
        return "font-sans";
      case "classic":
        return "font-serif";
      case "playful":
        return "font-mono";
      default:
        return "font-sans";
    }
  };

  return (
    <Layout>
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
              Escolha sua tipografia favorita
            </h1>
            <p className="text-muted-foreground text-lg">
              Selecione o estilo que melhor combina com seu app
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { type: "modern", title: "Moderna", desc: "Clean e minimalista", sample: "Aa Bb Cc" },
              { type: "classic", title: "Clássica", desc: "Elegante e tradicional", sample: "Aa Bb Cc" },
              { type: "playful", title: "Divertida", desc: "Descontraída e única", sample: "Aa Bb Cc" }
            ].map((font) => (
              <motion.div
                key={font.type}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card
                  className={cn(
                    "p-8 cursor-pointer transition-all duration-300 group relative overflow-hidden",
                    selectedFont === font.type && "border-2 border-primary"
                  )}
                  onClick={() => handleFontSelect(font.type as FontType)}
                >
                  <motion.div
                    initial={false}
                    animate={{
                      scale: selectedFont === font.type ? 1.1 : 1,
                      opacity: selectedFont === font.type ? 1 : 0.7
                    }}
                    className="flex flex-col items-center gap-4"
                  >
                    <Type className="w-12 h-12 text-muted-foreground group-hover:text-primary transition-colors" />
                    <div className="text-center">
                      <h3 className="text-xl font-semibold mb-2">{font.title}</h3>
                      <p className="text-muted-foreground">{font.desc}</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className={cn(
                      "mt-6 p-4 rounded-lg bg-background/50 text-center",
                      getFontClass(font.type as FontType)
                    )}
                    animate={{
                      opacity: selectedFont === font.type ? 1 : 0.5
                    }}
                  >
                    <p className="text-4xl">{font.sample}</p>
                    <p className="mt-2 text-sm">
                      O rápido cachorro marrom pula sobre o preguiçoso cão.
                    </p>
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

export default FontCustomize;