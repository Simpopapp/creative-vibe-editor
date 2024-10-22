import { motion } from "framer-motion";
import { ThemeSwitcher } from "./ThemeSwitcher";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <motion.h1 
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Akalibre Flow
          </motion.h1>
          <ThemeSwitcher />
        </div>
      </nav>
      <main className="container mx-auto px-4 pt-20">
        {children}
      </main>
    </div>
  );
};