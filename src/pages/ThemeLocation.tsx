import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useTheme } from "@/components/theme-provider";
import { PlaygroundSection } from "@/components/customize/PlaygroundSection";
import { UndoButton } from "@/components/customize/UndoButton";
import { SuggestionsPanel } from "@/components/SuggestionsPanel";
import { Sun, Moon, Palette } from "lucide-react";

const ThemeLocation = () => {
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();

  const handleThemeChange = (newTheme: "light" | "dark" | "neon") => {
    setTheme(newTheme);
    toast.success(`Theme ${newTheme} applied to this section!`);
  };

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-[calc(100vh-5rem)] p-6"
      >
        <div className="max-w-6xl mx-auto space-y-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Theme Location Preview
            </h1>
            <p className="text-muted-foreground text-lg">
              See how your theme choices look in different contexts
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { type: "light", icon: Sun, title: "Light Mode", desc: "Clean and bright" },
              { type: "dark", icon: Moon, title: "Dark Mode", desc: "Easy on the eyes" },
              { type: "neon", icon: Palette, title: "Neon Mode", desc: "Vibrant and modern" }
            ].map((themeOption) => (
              <motion.div
                key={themeOption.type}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card
                  className="p-6 cursor-pointer transition-all group relative overflow-hidden"
                  onClick={() => handleThemeChange(themeOption.type as "light" | "dark" | "neon")}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="flex items-center gap-4 relative z-10">
                    <themeOption.icon className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{themeOption.title}</h3>
                      <p className="text-muted-foreground">{themeOption.desc}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Preview Area</h2>
                <PlaygroundSection />
                <div className="mt-4 flex justify-end">
                  <UndoButton />
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Suggestions</h2>
                <SuggestionsPanel />
              </CardContent>
            </Card>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex justify-end gap-4 pt-8"
          >
            <Button
              variant="outline"
              onClick={() => navigate(-1)}
            >
              Back
            </Button>
            <Button
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
              onClick={() => {
                toast.success("Theme settings saved!");
                navigate("/customize/layout");
              }}
            >
              Continue
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default ThemeLocation;