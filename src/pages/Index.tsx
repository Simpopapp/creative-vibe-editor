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
            Experience the future of digital flow
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl"
        >
          <Card className="p-6 hover:shadow-lg transition-shadow bg-gradient-to-br from-background to-muted">
            <h3 className="text-xl font-semibold mb-2">Customizable Themes</h3>
            <p className="text-muted-foreground">
              Choose between light, dark, and neon themes to match your style
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow bg-gradient-to-br from-background to-muted">
            <h3 className="text-xl font-semibold mb-2">Responsive Design</h3>
            <p className="text-muted-foreground">
              Perfectly adapted for all screen sizes
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow bg-gradient-to-br from-background to-muted">
            <h3 className="text-xl font-semibold mb-2">Modern UI</h3>
            <p className="text-muted-foreground">
              Sleek and intuitive user interface with smooth animations
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
            Get Started
          </Button>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Index;