import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import Home from "./pages/Home";
import Onboarding from "./pages/Onboarding";
import EntertainmentCustomize from "./pages/EntertainmentCustomize";
import EducationCustomize from "./pages/EducationCustomize";
import HealthCustomize from "./pages/HealthCustomize";
import Preview from "./pages/Preview";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/customize/entertainment" element={<EntertainmentCustomize />} />
            <Route path="/customize/education" element={<EducationCustomize />} />
            <Route path="/customize/health" element={<HealthCustomize />} />
            <Route path="/customize/preview" element={<Preview />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;