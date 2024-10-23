import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { useAppPreferences } from "@/hooks/useAppPreferences";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Card, CardContent } from "@/components/ui/card";
import { useAppSound } from "@/hooks/useAppSound";
import { Download, ArrowLeft } from "lucide-react";
import { SuggestionsPanel } from "@/components/SuggestionsPanel";

const Preview = () => {
  const { preferences } = useAppPreferences();
  const navigate = useNavigate();
  const { playSuccess, playSelect } = useAppSound();

  useEffect(() => {
    if (!preferences.type) {
      navigate("/onboarding");
      return;
    }
  }, [preferences.type, navigate]);

  const handleExport = () => {
    playSuccess();
    toast.success("Iniciando exportação do seu app!");
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
        className="min-h-[calc(100vh-5rem)] p-6 space-y-8"
      >
        <div className="max-w-6xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Seu App Está Quase Pronto!
            </h1>
            <p className="text-muted-foreground text-lg">
              Confira as sugestões personalizadas baseadas nas suas escolhas
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card className="overflow-hidden border-none bg-gradient-to-br from-background via-background to-muted">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                  Suas Escolhas
                </h2>
                {renderPreviewContent()}
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-none bg-gradient-to-br from-background via-background to-muted">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                  Visualização
                </h2>
                <div className="aspect-[9/16] rounded-lg border bg-card flex items-center justify-center bg-gradient-to-br from-background to-muted">
                  <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-center p-4"
                  >
                    <p className="text-muted-foreground mb-4">Preview Interativo em Desenvolvimento</p>
                    <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-purple-500 to-pink-500 animate-pulse" />
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </div>

          <SuggestionsPanel />

          <div className="flex justify-between items-center pt-8">
            <Button 
              variant="outline" 
              onClick={() => {
                playSelect();
                navigate(`/customize/${preferences.type}`);
              }}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar para Edição
            </Button>
            <Button
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 flex items-center gap-2"
              onClick={handleExport}
            >
              <Download className="w-4 h-4" />
              Exportar App
            </Button>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default Preview;