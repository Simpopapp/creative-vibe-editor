import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { templates, Template } from "@/types/templates";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useAppPreferences } from "@/hooks/useAppPreferences";
import { useSound } from 'use-sound';

export const TemplateSelector = () => {
  const navigate = useNavigate();
  const { updatePreferences } = useAppPreferences();
  const [playHover] = useSound('/sounds/select.mp3', { volume: 0.25 });

  const handleTemplateSelect = (template: Template) => {
    updatePreferences({
      type: template.type,
      [template.type]: {
        ...template.presetConfig
      }
    });
    toast.success("✨ Excelente escolha! Vamos personalizar ainda mais?", {
      duration: 3000,
    });
    navigate(`/customize/${template.type}`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
      {templates.map((template) => (
        <motion.div
          key={template.id}
          whileHover={{ scale: 1.03, y: -5 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Card 
            className="overflow-hidden cursor-pointer group relative"
            onMouseEnter={playHover}
          >
            <CardContent className="p-0">
              <div className="aspect-video bg-gradient-to-br from-background via-muted to-accent relative">
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-90 group-hover:opacity-75 transition-opacity" />
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {template.name}
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {template.description}
                  </p>
                </div>
              </div>
              <div className="p-4">
                <div className="flex flex-wrap gap-2 mb-4">
                  {template.presetConfig.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs bg-muted px-3 py-1 rounded-full text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <Button
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transform transition-all duration-300 opacity-90 group-hover:opacity-100"
                  onClick={() => handleTemplateSelect(template)}
                >
                  Explorar Template
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};