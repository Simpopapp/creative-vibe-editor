import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface OptionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  selected: boolean;
  onClick: () => void;
}

export const OptionCard = ({ icon: Icon, title, description, selected, onClick }: OptionCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Card
        className={cn(
          "p-6 cursor-pointer transition-all duration-300 group relative overflow-hidden",
          selected && "border-2 border-primary"
        )}
        onClick={onClick}
      >
        <div className="flex items-center gap-4">
          <Icon className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
          <div>
            <h3 className="text-xl font-semibold mb-1">{title}</h3>
            <p className="text-muted-foreground text-sm">{description}</p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};