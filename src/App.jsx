import { Link, Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster as UI_Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner_Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

import ScrollToTop from "@/components/ScrollToTop";

import FullApplication from "@/pages/FullApplication";

import Home from "@/pages/Home";
import About from "@/pages/About";
import ImportantDates from "@/pages/ImportantDates";
import ApplicationForm from "@/pages/ApplicationForm";
import HallTicket from "@/pages/HallTicket";
import Results from "@/pages/Results";
import Syllabus from "@/pages/Syllabus";
import MockTest from "@/pages/MockTest";
import Notifications from "@/pages/Notifications";
import Contact from "@/pages/Contact";
import Faq from "@/pages/Faq";
import Login from "@/pages/Login";
import StudentDashboard from "@/pages/StudentDashboard";
import AdminDashboard from "@/pages/AdminDashboard";
import NotFound from "@/pages/not-found";
import Courses from "./pages/Courses";
import FeePayment from "@/pages/FeePayment";
// import ApplicationForm from "@/pages/ApplicationForm";
import PrintApplication from "@/pages/PrintApplication";
import PaymentStatus from "@/pages/PaymentStatus";
import RegistrationNumber from "@/pages/RegistrationNumber";


const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      {/* <Route path="/courses" component={Courses} /> */}
      <Route path="/important-dates" component={ImportantDates} />
      <Route path="/application" component={ApplicationForm} />
      <Route path="/hall-ticket" component={HallTicket} />
      <Route path="/results" component={Results} />
      <Route path="/syllabus" component={Syllabus} />
      <Route path="/mock-test" component={MockTest} />
      <Route path="/notifications" component={Notifications} />
      <Route path="/contact" component={Contact} />
      <Route path="/faq" component={Faq} />
      <Route path="/login" component={Login} />
      <Route path="/student-dashboard" component={StudentDashboard} />
      <Route path="/admin-dashboard" component={AdminDashboard} />
      
      <Route path="/courses" component={Courses} />
      <Route path="/fee-payment" component={FeePayment} />
<Route path="/application-form" component={ApplicationForm} />
<Route path="/print-application" component={PrintApplication} />
<Route path="/payment-status" component={PaymentStatus} />
<Route path="/registration-number" component={RegistrationNumber} />

<Route path="/full-application" component={FullApplication} />
<Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <ScrollToTop />
          <Router />
        </WouterRouter>
        <UI_Toaster />
        <Sonner_Toaster richColors position="top-right" />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
