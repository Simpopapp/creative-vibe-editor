import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
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
            Experimente o futuro do fluxo digital
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl"
        >
          <Card className="p-6 hover:shadow-lg transition-shadow bg-gradient-to-br from-background to-muted">
            <h3 className="text-xl font-semibold mb-2">Temas Personalizáveis</h3>
            <p className="text-muted-foreground">
              Escolha entre temas claro, escuro e neon para combinar com seu estilo
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow bg-gradient-to-br from-background to-muted">
            <h3 className="text-xl font-semibold mb-2">Design Responsivo</h3>
            <p className="text-muted-foreground">
              Perfeitamente adaptado para todos os tamanhos de tela
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow bg-gradient-to-br from-background to-muted">
            <h3 className="text-xl font-semibold mb-2">Interface Moderna</h3>
            <p className="text-muted-foreground">
              Interface elegante e intuitiva com animações suaves
            </p>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex gap-4"
        >
          <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
            Começar Agora
          </Button>
          <Button size="lg" variant="outline">
            Saiba Mais
          </Button>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Index;