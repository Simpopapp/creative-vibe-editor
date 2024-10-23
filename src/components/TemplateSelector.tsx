import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { templates, Template } from "@/types/templates";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useAppPreferences } from "@/hooks/useAppPreferences";

export const TemplateSelector = () => {
  const navigate = useNavigate();
  const { updatePreferences } = useAppPreferences();

  const handleTemplateSelect = (template: Template) => {
    updatePreferences({
      type: template.type,
      [template.type]: {
        ...template.presetConfig
      }
    });
    toast.success("Template selecionado! Personalize-o como desejar.");
    navigate(`/customize/${template.type}`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto">
      {templates.map((template) => (
        <motion.div
          key={template.id}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Card className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <div className="aspect-video bg-muted relative">
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-semibold mb-2">{template.name}</h3>
                  <p className="text-sm text-muted-foreground">{template.description}</p>
                </div>
              </div>
              <div className="p-4">
                <div className="flex flex-wrap gap-2 mb-4">
                  {template.presetConfig.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs bg-muted px-2 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <Button
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                  onClick={() => handleTemplateSelect(template)}
                >
                  Usar Template
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};