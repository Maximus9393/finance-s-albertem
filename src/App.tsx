import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Reality from "./pages/Reality";
import BlogHypoteka from "./pages/BlogHypoteka";
import ServiceLanding from "./pages/ServiceLanding";
import { hypotekyLiberec, pojisteniLiberec, investiceLiberec } from "./content/serviceLandings";
import Auth from "./pages/Auth";
import AdminDashboard from "./pages/AdminDashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/reality" element={<Reality />} />
          <Route path="/blog/jak-se-pripravit-na-hypoteku" element={<BlogHypoteka />} />
          <Route path="/hypoteky-liberec" element={<ServiceLanding content={hypotekyLiberec} />} />
          <Route path="/pojisteni-liberec" element={<ServiceLanding content={pojisteniLiberec} />} />
          <Route path="/investice-liberec" element={<ServiceLanding content={investiceLiberec} />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/admin" element={<AdminDashboard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
