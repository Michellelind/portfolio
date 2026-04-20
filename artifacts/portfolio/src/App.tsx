import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Index from "@/pages/Index";
import WesternDigital from "@/pages/WesternDigital";
import Sima from "@/pages/Sima";
import AtlasPro from "@/pages/AtlasPro";
import ServiceNow from "@/pages/ServiceNow";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Index} />
      <Route path="/work/western-digital" component={WesternDigital} />
      <Route path="/work/sima" component={Sima} />
      <Route path="/work/atlaspro" component={AtlasPro} />
      <Route path="/work/servicenow" component={ServiceNow} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
