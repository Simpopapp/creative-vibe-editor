import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useAppPreferences } from "@/hooks/useAppPreferences";
import { TemplateSelector } from "@/components/TemplateSelector";
import { useSound } from 'use-sound';

const Index = () => {
  const navigate = useNavigate();
  const { updatePreferences } = useAppPreferences();
  const [playHover] = useSound('/sounds/select.mp3', { volume: 0.5 });

  const handleStart = () => {
    updatePreferences({ type: null });
    toast.success("Vamos descobrir o app dos seus sonhos! 🚀");
    navigate("/onboarding");
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <Layout>
      <motion.div 
        className="min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center space-y-12 py-12 px-4"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div
          variants={item}
          className="text-center space-y-6"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20 
            }}
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              AKALIBRE FLOW
            </h1>
          </motion.div>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Explore suas ideias e descubra o potencial do seu app ideal
          </p>
        </motion.div>

        <motion.div
          variants={item}
          className="w-full max-w-6xl"
        >
          <h2 className="text-3xl font-semibold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Inspire-se com Nossos Templates
          </h2>
          <TemplateSelector />
        </motion.div>

        <motion.div
          variants={item}
          className="flex flex-col items-center gap-6"
        >
          <Button 
            size="lg" 
            onClick={handleStart}
            onMouseEnter={playHover}
            className="text-lg px-8 py-6 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300"
          >
            Começar Minha Jornada
          </Button>
          <p className="text-muted-foreground text-center max-w-md">
            Em apenas alguns minutos, você vai descobrir o app perfeito para suas necessidades
          </p>
        </motion.div>
      </motion.div>
    </Layout>
  );
};

export default Index;