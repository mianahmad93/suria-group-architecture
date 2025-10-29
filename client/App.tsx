import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Career from "./pages/Career";
import News from "./pages/News";
import LeadForm from "./pages/LeadForm";
import SuiraTechnologies from "./pages/Companies/SuiraTechnologies";
import SuiraConstructions from "./pages/Companies/SuiraConstructions";
import SuiraFoods from "./pages/Companies/SuiraFoods";
import SuiraLogistics from "./pages/Companies/SuiraLogistics";
import SuiraTextiles from "./pages/Companies/SuiraTextiles";
import Ventures from "./pages/Ventures";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/career" element={<Career />} />
          <Route path="/news" element={<News />} />
          <Route path="/lead-form" element={<LeadForm />} />

          {/* Company Routes */}
          <Route
            path="/companies/technologies"
            element={<SuiraTechnologies />}
          />
          <Route
            path="/companies/constructions"
            element={<SuiraConstructions />}
          />
          <Route path="/companies/foods" element={<SuiraFoods />} />
          <Route path="/companies/logistics" element={<SuiraLogistics />} />
          <Route path="/companies/textiles" element={<SuiraTextiles />} />

          {/* Ventures Routes */}
          <Route path="/ventures" element={<Ventures />} />
          <Route path="/ventures/:type" element={<Ventures />} />

          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
