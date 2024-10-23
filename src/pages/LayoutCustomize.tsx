import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useAppSound } from "@/hooks/useAppSound";
import { LayoutGrid, List, ArrowRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

type LayoutType = "grid" | "list";

const LayoutCustomize = () => {
  const navigate = useNavigate();
  const { playSelect, playSuccess } = useAppSound();
  const [selectedLayout, setSelectedLayout] = useState<LayoutType | null>(null);

  const handleLayoutSelect = (layout: LayoutType) => {
    setSelectedLayout(layout);
    playSelect();
    toast.success(`Layout ${layout === 'grid' ? 'em grade' : 'em lista'} selecionado!`);
  };

  const handleContinue = () => {
    if (!selectedLayout) {
      toast.error("Por favor, escolha um layout antes de continuar.");
      return;
    }
    playSuccess();
    navigate("/customize/font");
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
              Como você quer visualizar seu conteúdo?
            </h1>
            <p className="text-muted-foreground text-lg">
              Escolha entre uma lista organizada ou uma grade dinâmica
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { type: "list", icon: List, title: "Lista", desc: "Visualização linear e organizada" },
              { type: "grid", icon: LayoutGrid, title: "Grade", desc: "Layout dinâmico em blocos" }
            ].map((layout) => (
              <motion.div
                key={layout.type}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card
                  className={cn(
                    "p-8 cursor-pointer transition-all duration-300 group relative overflow-hidden",
                    selectedLayout === layout.type && "border-2 border-primary"
                  )}
                  onClick={() => handleLayoutSelect(layout.type as LayoutType)}
                >
                  <motion.div
                    initial={false}
                    animate={{
                      scale: selectedLayout === layout.type ? 1.1 : 1,
                      opacity: selectedLayout === layout.type ? 1 : 0.7
                    }}
                    className="flex flex-col items-center gap-4"
                  >
                    <layout.icon className="w-16 h-16 text-muted-foreground group-hover:text-primary transition-colors" />
                    <div className="text-center">
                      <h3 className="text-xl font-semibold mb-2">{layout.title}</h3>
                      <p className="text-muted-foreground">{layout.desc}</p>
                    </div>
                  </motion.div>
                  
                  {/* Preview do Layout */}
                  <motion.div 
                    className="mt-6 border rounded-lg p-4 bg-background/50"
                    animate={{
                      opacity: selectedLayout === layout.type ? 1 : 0.5
                    }}
                  >
                    <div className={cn(
                      "gap-2",
                      layout.type === "grid" ? "grid grid-cols-3" : "flex flex-col"
                    )}>
                      {[1, 2, 3].map((item) => (
                        <div
                          key={item}
                          className={cn(
                            "bg-accent rounded p-2",
                            layout.type === "list" && "flex items-center"
                          )}
                        >
                          <div className="w-4 h-4 bg-muted-foreground/20 rounded" />
                          <div className="h-2 bg-muted-foreground/20 rounded ml-2 flex-1" />
                        </div>
                      ))}
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

export default LayoutCustomize;