import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useAppSound } from "@/hooks/useAppSound";
import { ArrowRight } from "lucide-react";

const Home = () => {
  const navigate = useNavigate();
  const { playSelect, playSuccess } = useAppSound();

  const handleStart = () => {
    playSuccess();
    toast.success("Vamos começar a personalizar seu app! 🎨");
    navigate("/customize/initial");
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
        className="min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center space-y-12 py-12 px-4 bg-gradient-to-b from-background to-background/80"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div
          variants={item}
          className="text-center space-y-6 max-w-3xl"
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
              CREATIVE FLOW
            </h1>
          </motion.div>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Transforme suas ideias em realidade com nossa plataforma intuitiva de criação de apps
          </p>
        </motion.div>

        <motion.div
          variants={item}
          className="flex flex-col items-center gap-6"
        >
          <Button 
            size="lg" 
            onClick={handleStart}
            onMouseEnter={playSelect}
            className="text-lg px-8 py-6 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 group"
          >
            Começar Minha Jornada
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <p className="text-muted-foreground text-center max-w-md">
            Em apenas alguns minutos, você vai descobrir o app perfeito para suas necessidades
          </p>
        </motion.div>
      </motion.div>
    </Layout>
  );
};

export default Home;