import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@/components/theme-provider";
import { toast } from "sonner";
import { Wand2, Layout as LayoutIcon } from "lucide-react";
import { useAppSound } from "@/hooks/useAppSound";
import { useState } from "react";
import { ThemeSection } from "@/components/customize/ThemeSection";
import { PlaygroundSection } from "@/components/customize/PlaygroundSection";
import { UndoButton } from "@/components/customize/UndoButton";

const InitialCustomize = () => {
  const navigate = useNavigate();
  const { setTheme, theme } = useTheme();
  const { playSuccess, playSelect } = useAppSound();
  const [history, setHistory] = useState<Array<{ type: string, value: any }>>([]);
  const [scale, setScale] = useState(1);
  const [rotation, setRotation] = useState(0);

  const handleThemeSelect = (newTheme: "light" | "dark" | "neon") => {
    setHistory(prev => [...prev, { type: 'theme', value: theme }]);
    setTheme(newTheme);
  };

  const handleUndo = () => {
    const lastAction = history[history.length - 1];
    if (lastAction) {
      if (lastAction.type === 'theme') {
        setTheme(lastAction.value);
      } else if (lastAction.type === 'scale') {
        setScale(lastAction.value);
      } else if (lastAction.type === 'rotation') {
        setRotation(lastAction.value);
      }
      setHistory(prev => prev.slice(0, -1));
      toast.info("Última ação desfeita!");
      playSelect();
    }
  };

  const handleScaleChange = (newScale: number) => {
    setHistory(prev => [...prev, { type: 'scale', value: scale }]);
    setScale(newScale);
  };

  const handleRotate = () => {
    setHistory(prev => [...prev, { type: 'rotation', value: rotation }]);
    setRotation(prev => prev + 90);
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
          <div className="flex justify-end">
            <UndoButton historyLength={history.length} onUndo={handleUndo} />
          </div>

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
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Visual do App</h2>
              <ThemeSection onThemeSelect={handleThemeSelect} />
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Playground</h2>
              <PlaygroundSection
                scale={scale}
                rotation={rotation}
                onScaleChange={handleScaleChange}
                onRotate={handleRotate}
              />
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Layout</h2>
              <div className="flex items-center justify-center h-24 bg-muted/50 rounded-lg">
                <p className="text-muted-foreground text-sm">Em breve disponível</p>
              </div>
            </Card>
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