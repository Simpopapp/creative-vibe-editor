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

export function ThemeSwitcher() {
  const { setTheme } = useTheme();

  const handleThemeChange = (theme: "light" | "dark" | "neon" | "system") => {
    setTheme(theme);
    toast.success(`Tema ${theme === 'light' ? 'claro' : theme === 'dark' ? 'escuro' : 'neon'} ativado!`);
  };

  return (
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
  );
}