import { motion } from "framer-motion";
import { useSuggestions } from "@/hooks/useSuggestions";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";

export const SuggestionsPanel = () => {
  const { suggestions } = useSuggestions();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4"
    >
      <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
        Sugestões Personalizadas
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {suggestions.map((suggestion) => (
          <motion.div
            key={suggestion.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Card className="overflow-hidden border-none bg-gradient-to-br from-background via-background to-muted">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center justify-between">
                  <span>{suggestion.title}</span>
                  <Badge 
                    variant="secondary"
                    className="bg-primary/10 text-primary"
                  >
                    {suggestion.category}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{suggestion.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Relevância</span>
                    <span>{Math.round(suggestion.confidence * 100)}%</span>
                  </div>
                  <Progress value={suggestion.confidence * 100} className="h-2" />
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {suggestion.features.map((feature) => (
                    <Badge key={feature} variant="outline">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};