import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Trophy, Star, Users, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";
import { Achievement } from "@/types/achievements";

const mockAchievements: Achievement[] = [
  {
    id: "1",
    title: "First Steps",
    description: "Complete your first learning module",
    icon: "📚",
    category: "learning",
    progress: 1,
    maxProgress: 1,
    completed: true,
    unlockedAt: new Date()
  },
  {
    id: "2",
    title: "Knowledge Seeker",
    description: "Study for 10 hours total",
    icon: "🎯",
    category: "milestone",
    progress: 5,
    maxProgress: 10,
    completed: false
  },
  {
    id: "3",
    title: "Social Learner",
    description: "Join 3 study groups",
    icon: "👥",
    category: "engagement",
    progress: 1,
    maxProgress: 3,
    completed: false
  }
];

const AchievementCard = ({ achievement }: { achievement: Achievement }) => {
  const progressPercentage = (achievement.progress / achievement.maxProgress) * 100;

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Card className={cn(
        "relative overflow-hidden transition-colors",
        achievement.completed ? "bg-gradient-to-br from-yellow-500/10 to-amber-500/10" : ""
      )}>
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg flex items-center gap-2">
              <span className="text-2xl">{achievement.icon}</span>
              {achievement.title}
            </CardTitle>
            {achievement.completed && (
              <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-600">
                <Trophy className="w-3 h-3 mr-1" />
                Completed
              </Badge>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">{achievement.description}</p>
          <div className="space-y-2">
            <Progress value={progressPercentage} className="h-2" />
            <p className="text-sm text-muted-foreground">
              Progress: {achievement.progress}/{achievement.maxProgress}
            </p>
          </div>
          {achievement.unlockedAt && (
            <p className="text-xs text-muted-foreground mt-4">
              Unlocked on {achievement.unlockedAt.toLocaleDateString()}
            </p>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Achievements = () => {
  const categories = [
    { id: "learning", title: "Learning", icon: BookOpen, count: 5 },
    { id: "engagement", title: "Engagement", icon: Users, count: 3 },
    { id: "milestone", title: "Milestones", icon: Star, count: 4 }
  ];

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
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-amber-600 bg-clip-text text-transparent">
              Your Achievements
            </h1>
            <p className="text-muted-foreground text-lg">
              Track your progress and unlock rewards as you learn
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {categories.map((category) => (
              <Card key={category.id} className="bg-gradient-to-br from-background to-muted">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <category.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{category.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {category.count} achievements
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mockAchievements.map((achievement) => (
              <AchievementCard key={achievement.id} achievement={achievement} />
            ))}
          </div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default Achievements;