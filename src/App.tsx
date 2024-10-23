import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import Home from "./pages/Home";
import Editor from "./pages/Editor";
import Onboarding from "./pages/Onboarding";
import Customize from "./pages/Customize";
import EntertainmentCustomize from "./pages/EntertainmentCustomize";
import EducationCustomize from "./pages/EducationCustomize";
import HealthCustomize from "./pages/HealthCustomize";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/editor" element={<Editor />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/customize" element={<Customize />} />
            <Route path="/entertainment-customize" element={<EntertainmentCustomize />} />
            <Route path="/education-customize" element={<EducationCustomize />} />
            <Route path="/health-customize" element={<HealthCustomize />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;