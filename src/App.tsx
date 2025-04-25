import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CoPilotButton from "@/components/CoPilotButton";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import EcosystemPartnersPage from "./pages/EcosystemPartnersPage";
import PortfolioPage from "./pages/PortfolioPage";
import PortfolioDetailPage from "./pages/PortfolioDetailPage";
import ContactPage from "./pages/ContactPage";
import TeamPage from "./pages/TeamPage";
import Services from "./pages/Services";
import AgentOpsDetail from "./pages/AgentOpsDetail";
import TokenCoreDetail from "./pages/TokenCoreDetail";
import RapidStackDetail from "./pages/RapidStackDetail";

const queryClient = new QueryClient();

// ScrollToTop component to reset scroll position on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <TooltipProvider>
        <ScrollToTop />
        <Toaster />
        <Sonner />
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ecosystem-partners" element={<EcosystemPartnersPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/portfolio/:slug" element={<PortfolioDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/agentops" element={<AgentOpsDetail />} />
          <Route path="/services/rapidstack" element={<RapidStackDetail />} />
          <Route path="/services/tokencore" element={<TokenCoreDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <CoPilotButton />
        <Footer />
      </TooltipProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;