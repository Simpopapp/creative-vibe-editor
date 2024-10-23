import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { useAppPreferences } from "@/hooks/useAppPreferences";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Preview = () => {
  const { preferences } = useAppPreferences();
  const navigate = useNavigate();

  useEffect(() => {
    if (!preferences.type) {
      navigate("/onboarding");
    }
  }, [preferences.type, navigate]);

  const handleExport = () => {
    // Aqui você implementaria a lógica de exportação
    toast.success("Seu app está sendo exportado!");
  };

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-[calc(100vh-5rem)] p-6"
      >
        <h1 className="text-4xl font-bold mb-8">Preview do seu App</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Suas Escolhas</h2>
            <div className="p-4 rounded-lg border bg-card">
              <p><strong>Tipo:</strong> {preferences.type}</p>
              {preferences.entertainment && (
                <>
                  <p><strong>Layout:</strong> {preferences.entertainment.layout}</p>
                  <p><strong>Serviço:</strong> {preferences.entertainment.service}</p>
                  <p><strong>Detalhes:</strong> {preferences.entertainment.interactionDetails}</p>
                </>
              )}
              {/* Adicione visualizações similares para education e health */}
            </div>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Preview</h2>
            <div className="aspect-[9/16] rounded-lg border bg-card flex items-center justify-center">
              <p className="text-muted-foreground">Preview do App</p>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-4 mt-8">
          <Button variant="outline" onClick={() => navigate("/onboarding")}>
            Voltar ao Início
          </Button>
          <Button 
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
            onClick={handleExport}
          >
            Exportar App
          </Button>
        </div>
      </motion.div>
    </Layout>
  );
};

export default Preview;