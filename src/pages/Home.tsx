import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useAppPreferences } from "@/hooks/useAppPreferences";
import { TemplateSelector } from "@/components/TemplateSelector";

const Index = () => {
  const navigate = useNavigate();
  const { updatePreferences } = useAppPreferences();

  const handleStart = () => {
    updatePreferences({ type: null });
    toast.success("Bem-vindo à jornada de criação!");
    navigate("/onboarding");
  };

  return (
    <Layout>
      <div className="min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center space-y-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center space-y-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            AKALIBRE FLOW
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl">
            Crie seu app dos sonhos sem precisar programar
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="w-full max-w-6xl px-4"
        >
          <h2 className="text-2xl font-semibold mb-6 text-center">Templates Populares</h2>
          <TemplateSelector />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex gap-4"
        >
          <Button 
            size="lg" 
            onClick={handleStart}
            variant="outline"
          >
            Começar do Zero
          </Button>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Index;