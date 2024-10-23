import { motion } from "framer-motion";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { useTheme } from "./theme-provider";

export const Layout = ({ children, highlightThemeSwitcher = false }: { 
  children: React.ReactNode;
  highlightThemeSwitcher?: boolean;
}) => {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen bg-background relative">
      {theme === 'neon' && (
        <div className="fixed inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-transparent pointer-events-none" />
      )}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <motion.h1 
            className={`text-2xl font-bold ${
              theme === 'neon' 
                ? 'bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]'
                : 'bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent'
            }`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Akalibre Flow
          </motion.h1>
          <ThemeSwitcher highlight={highlightThemeSwitcher} />
        </div>
      </nav>
      <main className="container mx-auto px-4 pt-20">
        {children}
      </main>
    </div>
  );
};