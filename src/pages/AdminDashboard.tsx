import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { LayoutDashboard, Users, MapPin, Bell, BarChart3, Settings, Search } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";
import { branches } from "@/data/branches";
import { recentApplicants } from "@/data/recentApplicants";

const navItems = [
  { key: "overview", label: "Overview", icon: LayoutDashboard },
  { key: "applicants", label: "Applicants", icon: Users },
  { key: "centers", label: "Exam Centers", icon: MapPin },
  { key: "notifications", label: "Notifications", icon: Bell },
  { key: "reports", label: "Reports", icon: BarChart3 },
  { key: "settings", label: "Settings", icon: Settings },
];

const mockBranchData = branches.map(b => ({
  name: b.code,
  applications: Math.floor(Math.random() * 5000) + 1000
})).filter(b => b.name !== "MBA" && b.name !== "MCA");

const mockTrendData = Array.from({ length: 14 }).map((_, i) => {
  const d = new Date();
  d.setDate(d.getDate() - (13 - i));
  return {
    date: `${d.getDate()} ${d.toLocaleString('default', { month: 'short' })}`,
    applications: Math.floor(Math.random() * 2000) + 500
  };
});

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [search, setSearch] = useState("");
  const [branchFilter, setBranchFilter] = useState("all");

  const filteredApplicants = recentApplicants.filter(a => {
    const matchesSearch = a.name.toLowerCase().includes(search.toLowerCase()) || a.regno.toLowerCase().includes(search.toLowerCase());
    const matchesBranch = branchFilter === "all" || a.branch === branchFilter;
    return matchesSearch && matchesBranch;
  });

  const renderOverview = () => (
    <div className="space-y-6">
      
      {/* Stat Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { title: "Total Applicants", value: "24,832", desc: "+12% from yesterday", color: "text-blue-600" },
          { title: "Fee Collected", value: "₹2.97 Cr", desc: "Updated 5 mins ago", color: "text-green-600" },
          { title: "Exam Centers", value: "48", desc: "Across 12 districts", color: "text-purple-600" },
          { title: "Results Published", value: "22,164", desc: "92% completion", color: "text-primary" }
        ].map((stat, i) => (
          <Card key={i} className="shadow-sm">
            <CardContent className="p-5">
              <p className="text-sm font-medium text-muted-foreground mb-1">{stat.title}</p>
              <h3 className={`text-2xl font-bold mb-1 ${stat.color}`}>{stat.value}</h3>
              <p className="text-xs text-muted-foreground">{stat.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="shadow-sm">
          <CardHeader className="border-b bg-muted/20 py-4">
            <CardTitle className="text-base font-semibold">Applications by Engineering Branch</CardTitle>
          </CardHeader>
          <CardContent className="p-6 h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={mockBranchData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                <Tooltip cursor={{ fill: 'transparent' }} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Bar dataKey="applications" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} maxBarSize={50} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardHeader className="border-b bg-muted/20 py-4">
            <CardTitle className="text-base font-semibold">Application Trend (Last 14 Days)</CardTitle>
          </CardHeader>
          <CardContent className="p-6 h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mockTrendData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Line type="monotone" dataKey="applications" stroke="hsl(var(--secondary))" strokeWidth={3} dot={false} activeDot={{ r: 6, fill: "hsl(var(--secondary))", stroke: "#fff", strokeWidth: 2 }} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Recent Applicants Table */}
      <Card className="shadow-sm">
        <CardHeader className="border-b bg-muted/20 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <CardTitle className="text-base font-semibold">Recent Applicants</CardTitle>
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input 
                placeholder="Search name or HT no..." 
                className="pl-9 h-9 text-sm"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <Select value={branchFilter} onValueChange={setBranchFilter}>
              <SelectTrigger className="w-full sm:w-[140px] h-9">
                <SelectValue placeholder="All Branches" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Branches</SelectItem>
                {branches.map(b => (
                  <SelectItem key={b.code} value={b.code}>{b.code}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-muted text-muted-foreground uppercase text-xs font-bold border-b">
              <tr>
                <th className="px-6 py-4">Reg No</th>
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Branch</th>
                <th className="px-6 py-4">Center</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {filteredApplicants.length > 0 ? (
                filteredApplicants.map((app) => (
                  <tr key={app.id} className="hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-3 font-medium text-foreground">{app.regno}</td>
                    <td className="px-6 py-3">{app.name}</td>
                    <td className="px-6 py-3"><Badge variant="outline">{app.branch}</Badge></td>
                    <td className="px-6 py-3 text-muted-foreground">{app.center}</td>
                    <td className="px-6 py-3 text-muted-foreground">{app.appliedOn}</td>
                    <td className="px-6 py-3 text-right">
                      <Badge className={
                        app.status === 'Submitted' ? 'bg-green-100 text-green-800 hover:bg-green-100' :
                        app.status === 'Draft' ? 'bg-gray-100 text-gray-800 hover:bg-gray-100' :
                        'bg-yellow-100 text-yellow-800 hover:bg-yellow-100'
                      } variant="outline">
                        {app.status}
                      </Badge>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="px-6 py-8 text-center text-muted-foreground">
                    No applicants found matching the filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Card>
      
    </div>
  );

  const renderPlaceholder = (title: string) => (
    <Card className="h-[60vh] flex flex-col items-center justify-center text-center shadow-sm">
      <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
        <Settings className="w-8 h-8 text-muted-foreground" />
      </div>
      <CardTitle className="text-2xl mb-2">{title} Management</CardTitle>
      <p className="text-muted-foreground max-w-md">
        Administrative module for managing {title.toLowerCase()}. Connect to backend API to view and edit records.
      </p>
    </Card>
  );

  return (
    <DashboardLayout 
      title="Admin Control Panel" 
      role="admin" 
      navItems={navItems} 
      active={activeTab} 
      onSelect={setActiveTab}
    >
      {activeTab === 'overview' ? renderOverview() : renderPlaceholder(navItems.find(n => n.key === activeTab)?.label || 'Module')}
    </DashboardLayout>
  );
}