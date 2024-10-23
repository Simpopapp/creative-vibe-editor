import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppPreferences } from "@/hooks/useAppPreferences";

const HealthCustomize = () => {
  const navigate = useNavigate();
  const { preferences, updatePreferences } = useAppPreferences();
  const [selectedFocus, setSelectedFocus] = useState<"fitness" | "meditation" | "nutrition" | null>(null);

  const handleFocusSelect = (focus: "fitness" | "meditation" | "nutrition") => {
    setSelectedFocus(focus);
    updatePreferences({
      health: {
        ...preferences.health,
        focusArea: focus
      }
    });
    toast.success(`Foco em ${focus} selecionado!`);
  };

  const handleNext = () => {
    if (!selectedFocus) {
      toast.error("Por favor, selecione uma área de foco antes de continuar.");
      return;
    }
    navigate("/customize/preview");
  };

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-[calc(100vh-5rem)] p-6"
      >
        <h1 className="text-4xl font-bold mb-8">Personalize seu App de Saúde</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Escolha o Foco Principal</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { type: "fitness", title: "Fitness", desc: "Exercícios e treinos" },
              { type: "meditation", title: "Meditação", desc: "Bem-estar mental" },
              { type: "nutrition", title: "Nutrição", desc: "Alimentação saudável" }
            ].map((focus) => (
              <motion.div
                key={focus.type}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card
                  className={`p-6 cursor-pointer ${
                    selectedFocus === focus.type ? "border-purple-500 border-2" : ""
                  }`}
                  onClick={() => handleFocusSelect(focus.type as "fitness" | "meditation" | "nutrition")}
                >
                  <h3 className="text-xl font-semibold mb-2">{focus.title}</h3>
                  <p className="text-muted-foreground">{focus.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex justify-end gap-4 pt-8"
        >
          <Button
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
            onClick={handleNext}
          >
            Próximo Passo
          </Button>
        </motion.div>
      </motion.div>
    </Layout>
  );
};

export default HealthCustomize;