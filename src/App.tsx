import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import Home from "./pages/Home";
import InitialCustomize from "./pages/InitialCustomize";
import ThemeLocation from "./pages/ThemeLocation";
import Onboarding from "./pages/Onboarding";
import LayoutCustomize from "./pages/LayoutCustomize";
import FontCustomize from "./pages/FontCustomize";
import ColorPaletteCustomize from "./pages/ColorPaletteCustomize";
import EntertainmentCustomize from "./pages/EntertainmentCustomize";
import EducationCustomize from "./pages/EducationCustomize";
import HealthCustomize from "./pages/HealthCustomize";
import StudyThemesCustomize from "./pages/StudyThemesCustomize";
import ScheduleCustomize from "./pages/ScheduleCustomize";
import WidgetCustomize from "./pages/WidgetCustomize";
import Preview from "./pages/Preview";
import Achievements from "./pages/Achievements";
import PerformanceMonitor from "./pages/PerformanceMonitor";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/customize/initial" element={<InitialCustomize />} />
            <Route path="/customize/theme-location" element={<ThemeLocation />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/customize/layout" element={<LayoutCustomize />} />
            <Route path="/customize/font" element={<FontCustomize />} />
            <Route path="/customize/colors" element={<ColorPaletteCustomize />} />
            <Route path="/customize/entertainment" element={<EntertainmentCustomize />} />
            <Route path="/customize/education" element={<EducationCustomize />} />
            <Route path="/customize/health" element={<HealthCustomize />} />
            <Route path="/customize/schedule" element={<ScheduleCustomize />} />
            <Route path="/customize/study-themes" element={<StudyThemesCustomize />} />
            <Route path="/customize/widgets" element={<WidgetCustomize />} />
            <Route path="/customize/preview" element={<Preview />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/performance" element={<PerformanceMonitor />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;