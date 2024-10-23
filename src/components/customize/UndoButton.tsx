import { Button } from "@/components/ui/button";
import { RotateCcw } from "lucide-react";

interface UndoButtonProps {
  historyLength: number;
  onUndo: () => void;
}

export const UndoButton = ({ historyLength, onUndo }: UndoButtonProps) => {
  return (
    <Button
      variant="outline"
      size="icon"
      onClick={onUndo}
      disabled={historyLength === 0}
      className="relative group"
    >
      <RotateCcw className="w-4 h-4" />
      <span className="sr-only">Desfazer última ação</span>
      {historyLength > 0 && (
        <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground w-4 h-4 rounded-full text-xs flex items-center justify-center">
          {historyLength}
        </span>
      )}
    </Button>
  );
};