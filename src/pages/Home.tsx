import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useAppPreferences } from "@/hooks/useAppPreferences";

const Index = () => {
  const navigate = useNavigate();
  const { updatePreferences } = useAppPreferences();

  const handleStart = () => {
    updatePreferences({ type: null }); // Reset preferences when starting new
    toast.success("Bem-vindo à jornada de criação!");
    navigate("/onboarding");
  };

  return (
    <Layout>
      <div className="min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center space-y-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            AKALIBRE FLOWAKA
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl">
            Crie seu app dos sonhos sem precisar programar
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-lg transition-shadow bg-gradient-to-br from-background to-muted"
          >
            <h3 className="text-xl font-semibold mb-2">Explore Temas</h3>
            <p className="text-muted-foreground">
              Personalize cores e estilos para criar a identidade perfeita
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-lg transition-shadow bg-gradient-to-br from-background to-muted"
          >
            <h3 className="text-xl font-semibold mb-2">Design Intuitivo</h3>
            <p className="text-muted-foreground">
              Arraste e solte elementos para criar layouts únicos
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-lg transition-shadow bg-gradient-to-br from-background to-muted"
          >
            <h3 className="text-xl font-semibold mb-2">Funcionalidades</h3>
            <p className="text-muted-foreground">
              Escolha recursos incríveis para seu app
            </p>
          </motion.div>
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
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
          >
            Iniciar Jornada
          </Button>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Index;