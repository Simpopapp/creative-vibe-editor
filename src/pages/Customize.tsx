import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import { toast } from "sonner";

const Customize = () => {
  const [progress, setProgress] = useState(25);
  const [selectedLayout, setSelectedLayout] = useState<string | null>(null);

  const handleLayoutSelect = (layout: string) => {
    setSelectedLayout(layout);
    setProgress(50);
    toast.success("Layout selecionado com sucesso!");
  };

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-[calc(100vh-5rem)] p-4"
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
              Escolha o layout que mais combina com seu estilo
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              onClick={() => handleLayoutSelect("modern")}
            >
              <Card className={`cursor-pointer transition-all ${
                selectedLayout === "modern" ? "border-purple-500 border-2" : ""
              }`}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Layout Moderno</h3>
                  <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">Visualização do Layout</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              onClick={() => handleLayoutSelect("minimal")}
            >
              <Card className={`cursor-pointer transition-all ${
                selectedLayout === "minimal" ? "border-purple-500 border-2" : ""
              }`}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Layout Minimalista</h3>
                  <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">Visualização do Layout</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex justify-end gap-4"
          >
            <Button
              variant="outline"
              onClick={() => toast.info("Em breve: mais opções de personalização!")}
            >
              Voltar
            </Button>
            <Button
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
              onClick={() => toast.info("Em breve: próxima etapa de personalização!")}
            >
              Próximo Passo
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default Customize;