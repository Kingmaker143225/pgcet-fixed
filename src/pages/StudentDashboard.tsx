import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { LayoutDashboard, FileText, CreditCard, Ticket, Award, User, Bell } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const navItems = [
  { key: "overview", label: "Overview", icon: LayoutDashboard },
  { key: "application", label: "Application", icon: FileText },
  { key: "payment", label: "Payment", icon: CreditCard },
  { key: "hallticket", label: "Hall Ticket", icon: Ticket },
  { key: "results", label: "Results", icon: Award },
  { key: "profile", label: "Profile", icon: User },
  { key: "notifications", label: "Notifications", icon: Bell },
];

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Welcome strip */}
      <div className="bg-primary text-primary-foreground rounded-xl p-6 relative overflow-hidden shadow-md">
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 bg-[url('@/assets/pattern.png')] bg-cover mix-blend-overlay"></div>
        <h2 className="text-2xl font-serif font-bold mb-2">Welcome, Rahul Sharma</h2>
        <p className="text-primary-foreground/80">Application No: PGCET2026001 | Branch: CSE</p>
      </div>

      {/* Status Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="border-l-4 border-l-green-500 shadow-sm">
          <CardContent className="p-5">
            <p className="text-sm font-medium text-muted-foreground mb-1">Application</p>
            <div className="flex items-center justify-between">
              <p className="text-xl font-bold">Submitted</p>
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100 border-none">Done</Badge>
            </div>
          </CardContent>
        </Card>
        <Card className="border-l-4 border-l-green-500 shadow-sm">
          <CardContent className="p-5">
            <p className="text-sm font-medium text-muted-foreground mb-1">Payment</p>
            <div className="flex items-center justify-between">
              <p className="text-xl font-bold">Paid ₹1,200</p>
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100 border-none">Done</Badge>
            </div>
          </CardContent>
        </Card>
        <Card className="border-l-4 border-l-secondary shadow-sm">
          <CardContent className="p-5">
            <p className="text-sm font-medium text-muted-foreground mb-1">Hall Ticket</p>
            <div className="flex items-center justify-between">
              <p className="text-xl font-bold">Available</p>
              <Button size="sm" variant="outline" className="h-6 text-xs px-2" onClick={() => setActiveTab('hallticket')}>View</Button>
            </div>
          </CardContent>
        </Card>
        <Card className="border-l-4 border-l-muted shadow-sm bg-muted/20">
          <CardContent className="p-5">
            <p className="text-sm font-medium text-muted-foreground mb-1">Result</p>
            <div className="flex items-center justify-between">
              <p className="text-xl font-bold text-muted-foreground">Pending</p>
              <Badge variant="outline">Awaited</Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Activity Timeline */}
        <Card className="lg:col-span-2 shadow-sm">
          <CardHeader className="border-b bg-muted/20 py-4">
            <CardTitle className="text-lg">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-muted before:to-transparent">
              {[
                { title: "Hall Ticket Generated", date: "10 May 2026, 10:30 AM", status: "success" },
                { title: "Application Approved", date: "15 Mar 2026, 04:15 PM", status: "success" },
                { title: "Payment Received", date: "01 Mar 2026, 11:20 AM", status: "success" },
                { title: "Application Submitted", date: "01 Mar 2026, 11:15 AM", status: "success" },
                { title: "Registration Completed", date: "01 Mar 2026, 10:45 AM", status: "success" },
              ].map((item, i) => (
                <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-secondary text-secondary-foreground shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm z-10">
                    <CheckCircleIcon className="w-4 h-4" />
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-lg border bg-card shadow-sm">
                    <div className="flex items-center justify-between space-x-2 mb-1">
                      <div className="font-bold text-sm text-foreground">{item.title}</div>
                    </div>
                    <div className="text-xs text-muted-foreground">{item.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Exam Slot Card */}
        <Card className="shadow-sm border-secondary/20">
          <CardHeader className="bg-secondary/10 border-b border-secondary/20 py-4">
            <CardTitle className="text-lg text-secondary flex items-center gap-2">
              <Ticket className="w-5 h-5" /> Exam Slot Details
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <div>
              <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider mb-1">Date & Time</p>
              <p className="font-semibold text-lg text-primary">15 May 2026</p>
              <p className="text-sm font-medium">10:00 AM - 1:00 PM</p>
            </div>
            <div className="pt-4 border-t">
              <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider mb-1">Test Center</p>
              <p className="font-semibold text-primary">JNTU Hyderabad - Block A</p>
              <p className="text-sm text-muted-foreground mt-1">Kukatpally, Hyderabad, Telangana 500085</p>
            </div>
            <Button className="w-full mt-4" variant="outline" onClick={() => setActiveTab('hallticket')}>
              View Hall Ticket
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderPlaceholder = (title: string) => (
    <Card className="h-[60vh] flex flex-col items-center justify-center text-center shadow-sm">
      <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
        <FileText className="w-8 h-8 text-muted-foreground" />
      </div>
      <CardTitle className="text-2xl mb-2">{title}</CardTitle>
      <p className="text-muted-foreground max-w-md">
        This section is fully wired in the architecture. It would display the specific module data when connected to the backend API.
      </p>
      <Button className="mt-6" variant="outline" onClick={() => setActiveTab('overview')}>Back to Overview</Button>
    </Card>
  );

  return (
    <DashboardLayout 
      title="Student Portal" 
      role="student" 
      navItems={navItems} 
      active={activeTab} 
      onSelect={setActiveTab}
    >
      {activeTab === 'overview' ? renderOverview() : renderPlaceholder(navItems.find(n => n.key === activeTab)?.label || 'Module')}
    </DashboardLayout>
  );
}

function CheckCircleIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}