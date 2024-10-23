import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useState } from "react";

type CourseType = "video" | "podcast" | "text" | null;
type GamificationType = "badges" | "quizzes" | "leaderboard" | null;

const EducationCustomize = () => {
  const [selectedCourseType, setSelectedCourseType] = useState<CourseType>(null);
  const [selectedGamification, setSelectedGamification] = useState<GamificationType>(null);

  const handleCourseSelect = (type: CourseType) => {
    setSelectedCourseType(type);
    toast.success(`Tipo de curso ${type} selecionado!`);
  };

  const handleGamificationSelect = (type: GamificationType) => {
    setSelectedGamification(type);
    toast.success(`Sistema de ${type} será implementado!`);
  };

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-[calc(100vh-5rem)] p-6"
      >
        <h1 className="text-4xl font-bold mb-8">Personalize seu App Educacional</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Modelo de Curso</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { type: "video", title: "Vídeo Aulas", desc: "Conteúdo em formato de vídeo" },
              { type: "podcast", title: "Podcast", desc: "Aprendizado em áudio" },
              { type: "text", title: "Texto", desc: "Material escrito e exercícios" }
            ].map((course) => (
              <motion.div
                key={course.type}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card
                  className={`p-6 cursor-pointer ${
                    selectedCourseType === course.type ? "border-purple-500 border-2" : ""
                  }`}
                  onClick={() => handleCourseSelect(course.type as CourseType)}
                >
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <p className="text-muted-foreground">{course.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Gamificação</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { type: "badges", title: "Badges", desc: "Sistema de conquistas" },
              { type: "quizzes", title: "Quizzes", desc: "Testes interativos" },
              { type: "leaderboard", title: "Ranking", desc: "Tabela de líderes" }
            ].map((gamification) => (
              <motion.div
                key={gamification.type}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card
                  className={`p-6 cursor-pointer ${
                    selectedGamification === gamification.type ? "border-purple-500 border-2" : ""
                  }`}
                  onClick={() => handleGamificationSelect(gamification.type as GamificationType)}
                >
                  <h3 className="text-xl font-semibold mb-2">{gamification.title}</h3>
                  <p className="text-muted-foreground">{gamification.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      </motion.div>
    </Layout>
  );
};

export default EducationCustomize;