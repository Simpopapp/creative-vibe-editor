import { Moon, Sun } from "lucide-react";
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
    <motion.div
      animate={highlight ? {
        scale: [1, 1.1, 1],
        boxShadow: [
          "0 0 0 0 rgba(147, 51, 234, 0)",
          "0 0 0 10px rgba(147, 51, 234, 0.3)",
          "0 0 0 0 rgba(147, 51, 234, 0)"
        ]
      } : {}}
      transition={{ 
        duration: 2,
        repeat: 3,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
      className={cn(
        "relative rounded-full",
        highlight && "after:absolute after:inset-0 after:rounded-full after:ring-2 after:ring-purple-500/50"
      )}
    >
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon" className="rounded-full">
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
  );
}