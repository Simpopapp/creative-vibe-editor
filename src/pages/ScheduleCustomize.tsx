import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppPreferences } from "@/hooks/useAppPreferences";
import { Calendar, Clock, Target, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface StudyGoal {
  id: string;
  title: string;
  hoursPerWeek: number;
  reminder: boolean;
}

const ScheduleCustomize = () => {
  const navigate = useNavigate();
  const { preferences, updatePreferences } = useAppPreferences();
  const [goals, setGoals] = useState<StudyGoal[]>([]);
  const [newGoal, setNewGoal] = useState({ title: "", hoursPerWeek: 1, reminder: true });

  const addGoal = () => {
    if (!newGoal.title) {
      toast.error("Por favor, defina um título para sua meta");
      return;
    }
    
    setGoals(prev => [...prev, { ...newGoal, id: Date.now().toString() }]);
    setNewGoal({ title: "", hoursPerWeek: 1, reminder: true });
    toast.success("Meta adicionada com sucesso!");
  };

  const removeGoal = (id: string) => {
    setGoals(prev => prev.filter(goal => goal.id !== id));
    toast.info("Meta removida");
  };

  const handleContinue = () => {
    if (goals.length === 0) {
      toast.error("Adicione pelo menos uma meta de estudo!");
      return;
    }

    updatePreferences({
      education: {
        ...preferences.education,
        studyGoals: goals,
        schedule: {
          type: "flexible",
          goals: goals
        }
      }
    });

    navigate("/customize/study-themes");
  };

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-[calc(100vh-5rem)] p-6"
      >
        <div className="max-w-4xl mx-auto space-y-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Defina suas Metas de Estudo
            </h1>
            <p className="text-xl text-muted-foreground">
              Estabeleça objetivos claros para seu aprendizado
            </p>
          </motion.div>

          <Card className="p-6">
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="goalTitle">Título da Meta</Label>
                  <Input
                    id="goalTitle"
                    placeholder="Ex: Aprender JavaScript"
                    value={newGoal.title}
                    onChange={e => setNewGoal(prev => ({ ...prev, title: e.target.value }))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="hoursPerWeek">Horas por Semana</Label>
                  <Input
                    id="hoursPerWeek"
                    type="number"
                    min="1"
                    value={newGoal.hoursPerWeek}
                    onChange={e => setNewGoal(prev => ({ ...prev, hoursPerWeek: parseInt(e.target.value) || 1 }))}
                  />
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  id="reminder"
                  checked={newGoal.reminder}
                  onCheckedChange={checked => setNewGoal(prev => ({ ...prev, reminder: checked }))}
                />
                <Label htmlFor="reminder">Ativar lembretes</Label>
              </div>
              <Button onClick={addGoal} className="w-full">Adicionar Meta</Button>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {goals.map((goal) => (
              <Card key={goal.id} className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">{goal.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                      <Clock className="w-4 h-4" />
                      <span>{goal.hoursPerWeek}h por semana</span>
                    </div>
                    {goal.reminder && (
                      <div className="flex items-center gap-2 text-sm text-green-600 mt-1">
                        <Calendar className="w-4 h-4" />
                        <span>Lembretes ativos</span>
                      </div>
                    )}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-red-500 hover:text-red-700"
                    onClick={() => removeGoal(goal.id)}
                  >
                    Remover
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center pt-8"
          >
            <Button
              size="lg"
              onClick={handleContinue}
              className={cn(
                "text-lg px-8 py-6 bg-gradient-to-r from-blue-500 to-purple-600",
                "hover:from-blue-600 hover:to-purple-700 transform hover:scale-105",
                "transition-all duration-300 group"
              )}
            >
              Continuar
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default ScheduleCustomize;