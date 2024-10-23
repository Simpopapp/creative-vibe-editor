import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useAppPreferences } from "@/hooks/useAppPreferences";
import { useEffect } from "react";

const EntertainmentCustomize = () => {
  const navigate = useNavigate();
  const { preferences, updatePreferences } = useAppPreferences();

  useEffect(() => {
    if (preferences.type !== "entertainment") {
      navigate("/onboarding");
    }
  }, [preferences.type, navigate]);

  const handleLayoutSelect = (layout: "social" | "streaming" | "gaming") => {
    updatePreferences({
      entertainment: {
        ...preferences.entertainment,
        layout
      }
    });
    toast.success(`Layout ${layout} selecionado!`);
  };

  const handleServiceSelect = (service: "spotify" | "youtube" | "twitch") => {
    updatePreferences({
      entertainment: {
        ...preferences.entertainment,
        service
      }
    });
    toast.success(`Serviço ${service} será integrado!`);
  };

  const handleDetailsChange = (details: string) => {
    updatePreferences({
      entertainment: {
        ...preferences.entertainment,
        interactionDetails: details
      }
    });
  };

  const handleNext = () => {
    if (!preferences.entertainment?.layout || !preferences.entertainment?.service) {
      toast.error("Por favor, complete todas as escolhas antes de continuar.");
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
        <h1 className="text-4xl font-bold mb-8">Personalize seu App de Entretenimento</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Escolha o Layout</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { type: "social", title: "Mídia Social", desc: "Perfeito para redes sociais" },
              { type: "streaming", title: "Streaming", desc: "Ideal para conteúdo em vídeo" },
              { type: "gaming", title: "Gaming", desc: "Otimizado para jogos" }
            ].map((layout) => (
              <motion.div
                key={layout.type}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card
                  className={`p-6 cursor-pointer ${
                    preferences.layout === layout.type ? "border-purple-500 border-2" : ""
                  }`}
                  onClick={() => handleLayoutSelect(layout.type as LayoutType)}
                >
                  <h3 className="text-xl font-semibold mb-2">{layout.title}</h3>
                  <p className="text-muted-foreground">{layout.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Integração de Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { type: "spotify", title: "Spotify", desc: "Integração com música" },
              { type: "youtube", title: "YouTube", desc: "Compartilhamento de vídeos" },
              { type: "twitch", title: "Twitch", desc: "Streaming ao vivo" }
            ].map((service) => (
              <motion.div
                key={service.type}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card
                  className={`p-6 cursor-pointer ${
                    preferences.service === service.type ? "border-purple-500 border-2" : ""
                  }`}
                  onClick={() => handleServiceSelect(service.type as ServiceType)}
                >
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-12 max-w-2xl">
          <h2 className="text-2xl font-semibold mb-4">Interação com o Conteúdo</h2>
          <p className="text-muted-foreground mb-4">
            Como você gostaria que seus usuários interagissem com esse conteúdo? Conte pra gente!
          </p>
          <Textarea
            placeholder="Descreva aqui como você imagina a interação ideal dos usuários com seu app..."
            value={preferences.interactionDetails}
            onChange={(e) => handleInteractionDetailsChange(e.target.value)}
            className="min-h-[120px] mb-6"
          />
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

export default EntertainmentCustomize;
