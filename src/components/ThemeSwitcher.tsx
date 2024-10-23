import { Moon, Sun, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/components/theme-provider";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function ThemeSwitcher({ highlight = false }: { highlight?: boolean }) {
  const { setTheme } = useTheme();

  const handleThemeChange = (theme: "light" | "dark" | "neon" | "system") => {
    setTheme(theme);
    toast.success(`Tema ${theme === 'light' ? 'claro' : theme === 'dark' ? 'escuro' : 'neon'} ativado!`);
  };

  return (
    <div className="relative">
      {highlight && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute -left-20 top-1/2 -translate-y-1/2"
        >
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: [0, 1, 1, 1, 0] }}
            transition={{ 
              duration: 3,
              times: [0, 0.1, 0.5, 0.9, 1]
            }}
          >
            <ArrowRight className="w-10 h-10 text-primary" />
          </motion.div>
        </motion.div>
      )}
      
      <motion.div
        animate={highlight ? {
          boxShadow: [
            "0 0 0 0 rgba(147, 51, 234, 0)",
            "0 0 20px 10px rgba(147, 51, 234, 0.3)",
            "0 0 40px 20px rgba(147, 51, 234, 0.2)",
            "0 0 15px 8px rgba(147, 51, 234, 0.4)"
          ]
        } : {}}
        transition={{ 
          duration: 4,
          repeat: 0,
          ease: "easeInOut"
        }}
        className={cn(
          "relative rounded-full",
          highlight && "after:absolute after:inset-0 after:rounded-full after:ring-2 after:ring-purple-500/50 after:animate-pulse"
        )}
      >
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="outline" 
              size="icon" 
              className={cn(
                "rounded-full transition-all duration-300",
                highlight && "ring-2 ring-purple-500 ring-offset-2 ring-offset-background"
              )}
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Alternar tema</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => handleThemeChange("light")}>
              Claro
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleThemeChange("dark")}>
              Escuro
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleThemeChange("neon")}>
              Neon
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </motion.div>
    </div>
  );
}