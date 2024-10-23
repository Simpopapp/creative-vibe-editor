import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { useAppPreferences } from "@/hooks/useAppPreferences";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Card, CardContent } from "@/components/ui/card";

const Preview = () => {
  const { preferences } = useAppPreferences();
  const navigate = useNavigate();

  useEffect(() => {
    if (!preferences.type) {
      navigate("/onboarding");
      return;
    }
  }, [preferences.type, navigate]);

  const handleExport = () => {
    toast.success("Iniciando exportação do seu app!");
    // Aqui implementaremos a lógica de exportação posteriormente
  };

  const renderPreviewContent = () => {
    switch (preferences.type) {
      case "entertainment":
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">App de Entretenimento</h3>
            <div className="grid gap-4">
              <p><strong>Layout:</strong> {preferences.entertainment?.layout || "Não definido"}</p>
              <p><strong>Serviço:</strong> {preferences.entertainment?.service || "Não definido"}</p>
              <p><strong>Detalhes:</strong> {preferences.entertainment?.interactionDetails || "Não definido"}</p>
            </div>
          </div>
        );
      case "education":
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">App Educacional</h3>
            <div className="grid gap-4">
              <p><strong>Tipo de Curso:</strong> {preferences.education?.courseType || "Não definido"}</p>
              <p><strong>Gamificação:</strong> {preferences.education?.gamification || "Não definido"}</p>
            </div>
          </div>
        );
      case "health":
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">App de Saúde</h3>
            <div className="grid gap-4">
              <p><strong>Área de Foco:</strong> {preferences.health?.focusArea || "Não definido"}</p>
              <p><strong>Preferências de Tracking:</strong> {preferences.health?.trackingPreference || "Não definido"}</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="min-h-[calc(100vh-5rem)] p-6"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-4xl font-bold mb-8">Preview do seu App</h1>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Suas Escolhas</h2>
                {renderPreviewContent()}
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Visualização</h2>
                <div className="aspect-[9/16] rounded-lg border bg-card flex items-center justify-center bg-gradient-to-br from-background to-muted">
                  <p className="text-muted-foreground">Preview Interativo em Desenvolvimento</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-between items-center">
            <Button 
              variant="outline" 
              onClick={() => navigate(`/customize/${preferences.type}`)}
            >
              Voltar para Edição
            </Button>
            <Button
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
              onClick={handleExport}
            >
              Exportar App
            </Button>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default Preview;