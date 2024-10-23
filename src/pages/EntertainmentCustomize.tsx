import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useState } from "react";

type LayoutType = "social" | "streaming" | "gaming" | null;
type ServiceType = "spotify" | "youtube" | "twitch" | null;

const EntertainmentCustomize = () => {
  const [selectedLayout, setSelectedLayout] = useState<LayoutType>(null);
  const [selectedService, setSelectedService] = useState<ServiceType>(null);

  const handleLayoutSelect = (layout: LayoutType) => {
    setSelectedLayout(layout);
    toast.success(`Layout ${layout} selecionado!`);
  };

  const handleServiceSelect = (service: ServiceType) => {
    setSelectedService(service);
    toast.success(`Serviço ${service} será integrado!`);
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
                    selectedLayout === layout.type ? "border-purple-500 border-2" : ""
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

        <section>
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
                    selectedService === service.type ? "border-purple-500 border-2" : ""
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
      </motion.div>
    </Layout>
  );
};

export default EntertainmentCustomize;