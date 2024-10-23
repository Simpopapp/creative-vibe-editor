import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useAppSound } from "@/hooks/useAppSound";

interface PlaygroundSectionProps {
  scale: number;
  rotation: number;
  onScaleChange: (scale: number) => void;
  onRotate: () => void;
}

export const PlaygroundSection = ({ scale, rotation, onScaleChange, onRotate }: PlaygroundSectionProps) => {
  const { playSelect } = useAppSound();

  return (
    <motion.div
      style={{ 
        transform: `scale(${scale}) rotate(${rotation}deg)`,
        transition: 'transform 0.3s ease'
      }}
      className="flex gap-4"
    >
      <Button
        variant="outline"
        onClick={() => {
          playSelect();
          onScaleChange(scale === 1 ? 0.9 : 1);
        }}
      >
        {scale === 1 ? "Diminuir" : "Restaurar"} Tamanho
      </Button>
      <Button
        variant="outline"
        onClick={() => {
          playSelect();
          onRotate();
        }}
      >
        Girar Card
      </Button>
    </motion.div>
  );
};