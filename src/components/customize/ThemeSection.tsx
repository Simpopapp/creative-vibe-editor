import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Moon, Sun, Palette } from "lucide-react";
import { toast } from "sonner";
import { useAppSound } from "@/hooks/useAppSound";

interface ThemeSectionProps {
  onThemeSelect: (theme: "light" | "dark" | "neon") => void;
}

export const ThemeSection = ({ onThemeSelect }: ThemeSectionProps) => {
  const { playSelect } = useAppSound();
  const themes = [
    { type: "light", icon: Sun, title: "Claro", desc: "Visual clean e minimalista" },
    { type: "dark", icon: Moon, title: "Escuro", desc: "Confortável para os olhos" },
    { type: "neon", icon: Palette, title: "Neon", desc: "Vibrante e moderno" }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {themes.map((theme) => (
        <motion.div
          key={theme.type}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Card
            className="p-4 cursor-pointer hover:bg-accent transition-colors group relative overflow-hidden"
            onClick={() => {
              playSelect();
              onThemeSelect(theme.type as "light" | "dark" | "neon");
              toast.success(`Tema ${theme.title} selecionado!`);
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex items-center gap-3 relative z-10">
              <theme.icon className="w-5 h-5 group-hover:text-primary transition-colors" />
              <div>
                <h3 className="font-medium">{theme.title}</h3>
                <p className="text-sm text-muted-foreground">{theme.desc}</p>
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};