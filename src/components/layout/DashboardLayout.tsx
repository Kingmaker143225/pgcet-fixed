import React, { useState } from "react";
import { Menu, LogOut } from "lucide-react";
import { Link, useLocation } from "wouter";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface NavItem {
  key: string;
  label: string;
  icon: React.ElementType;
}

interface DashboardLayoutProps {
  title: string;
  role: "student" | "admin";
  navItems: NavItem[];
  active: string;
  onSelect: (key: string) => void;
  children: React.ReactNode;
}

export default function DashboardLayout({ title, role, navItems, active, onSelect, children }: DashboardLayoutProps) {
  const [, setLocation] = useLocation();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleLogout = () => {
    setLocation("/login");
  };

  const NavLinks = ({ mobile = false }: { mobile?: boolean }) => (
    <nav className="space-y-1">
      {navItems.map((item) => {
        const isActive = active === item.key;
        return (
          <button
            key={item.key}
            onClick={() => {
              onSelect(item.key);
              if (mobile) setIsMobileOpen(false);
            }}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium transition-colors ${
              isActive 
                ? "bg-primary/10 text-primary" 
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
          >
            <item.icon className={`w-5 h-5 ${isActive ? "text-primary" : "text-muted-foreground"}`} />
            {item.label}
          </button>
        );
      })}
      <div className="pt-4 mt-4 border-t border-border">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium text-destructive hover:bg-destructive/10 transition-colors"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </div>
    </nav>
  );

  return (
    <div className="min-h-[100dvh] flex flex-col bg-muted/20">
      {/* Top Bar */}
      <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 sm:px-6 shadow-sm">
        <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
          <SheetTrigger asChild>
            <button className="lg:hidden p-2 -ml-2 text-muted-foreground hover:bg-muted rounded-md">
              <Menu className="w-5 h-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72 sm:w-80">
            <div className="flex items-center gap-2 font-serif font-bold text-xl mb-6 text-primary">
              PGCET <span className="text-secondary">Portal</span>
            </div>
            <NavLinks mobile />
          </SheetContent>
        </Sheet>
        
        <div className="flex items-center gap-2 font-serif font-bold text-xl text-primary hidden lg:flex">
          PGCET <span className="text-secondary">Portal</span>
        </div>

        <div className="flex-1 flex justify-between items-center lg:ml-6">
          <h1 className="text-lg font-semibold truncate">{title}</h1>
          <div className="flex items-center gap-4">
            <div className="text-sm text-right hidden sm:block">
              <div className="font-semibold leading-none">{role === "admin" ? "System Admin" : "Rahul Sharma"}</div>
              <div className="text-muted-foreground text-xs">{role === "admin" ? "admin@pgcet.ts" : "PGCET2026001"}</div>
            </div>
            <Avatar className="h-9 w-9 border">
              <AvatarImage src="" />
              <AvatarFallback className="bg-primary/10 text-primary font-bold">
                {role === "admin" ? "AD" : "RS"}
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:flex w-64 flex-col border-r bg-background p-4 h-[calc(100vh-4rem)] sticky top-16">
          <NavLinks />
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}