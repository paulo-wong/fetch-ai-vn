import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import { useEffect } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Solutions from "./pages/Solutions";
import TransformationPods from "./pages/TransformationPods";
import Industries from "./pages/Industries";
import WhyFetch from "./pages/WhyFetch";
import CaseStudies from "./pages/CaseStudies";
import Resources from "./pages/Resources";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AIAdoptionSprint from "./pages/AIAdoptionSprint";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Grants from "./pages/Grants";
import Terms from "./pages/Terms";
import Careers from "./pages/Careers";
function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location]);
  return null;
}

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <>
      <ScrollToTop />
      <Switch>
      <Route path="/" component={Home} />
      <Route path="/solutions" component={Solutions} />
      <Route path="/transformation-pods" component={TransformationPods} />
      <Route path="/industries" component={Industries} />
      <Route path="/why-fetch" component={WhyFetch} />
      <Route path="/case-studies" component={CaseStudies} />
      <Route path="/resources" component={Resources} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/ai-adoption-sprint" component={AIAdoptionSprint} />
      <Route path="/grants" component={Grants} />
      <Route path="/careers" component={Careers} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms" component={Terms} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
