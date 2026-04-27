import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronRight } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/important-dates", label: "Important Dates" },
  { href: "/application", label: "Application" },
  { href: "/syllabus", label: "Syllabus" },
  { href: "/hall-ticket", label: "Hall Ticket" },
  { href: "/results", label: "Results" },
  // { href: "/mock-test", label: "Mock Test" },
  { href: "/notifications", label: "Notifications" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
  { href: "/login", label: "Login", isButton: true }
];

export default function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    // <nav className="bg-primary text-primary-foreground sticky top-0 z-40 shadow-md">
    <nav className="bg-[#2EA6D9] text-white sticky top-0 z-40 shadow-md">
      <div className="container mx-auto max-w-7xl px-4">
        
        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center justify-between h-14">
          <ul className="flex items-center gap-1">
            {NAV_LINKS.filter(l => !l.isButton).map((link) => {
              const isActive = location === link.href;
              return (
                <li key={link.href}>
                  <Link href={link.href}>
                    {/* <div className={`px-3 py-4 text-sm font-medium transition-all border-b-2 hover:bg-primary-foreground/10 cursor-pointer ${isActive ? "border-secondary text-secondary" : "border-transparent"}`}> */}
                    <div className={`px-3 py-4 text-sm font-semibold transition-all border-b-2 hover:bg-white/10 cursor-pointer ${isActive ? "border-[#F4B400] text-[#F4B400]" : "border-transparent text-white"}`}>
                      {link.label}
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
          
          <Link href="/login">
            {/* <div className="bg-primary-foreground text-primary px-4 py-1.5 rounded-sm text-sm font-bold hover:bg-secondary hover:text-secondary-foreground transition-colors cursor-pointer shadow-sm"> */}
            <div className="bg-white text-[#2EA6D9] px-5 py-2 rounded-md text-sm font-bold hover:bg-[#F4B400] hover:text-[#082E5F] transition-colors cursor-pointer shadow-sm">
              Login
            </div>
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="flex lg:hidden items-center justify-between h-14">
          <span className="font-serif font-bold text-lg">Menu</span>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button className="p-2 -mr-2 hover:bg-primary-foreground/10 rounded-md">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-primary border-primary-border p-0 text-primary-foreground">
              <div className="p-4 bg-primary-foreground/5 border-b border-primary-foreground/10 flex justify-between items-center">
                <SheetTitle className="text-primary-foreground font-serif">Navigation</SheetTitle>
                <SheetDescription className="hidden">Menu</SheetDescription>
                <button onClick={() => setIsOpen(false)} className="p-2 rounded-md hover:bg-primary-foreground/10">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="flex flex-col py-2 overflow-y-auto max-h-[calc(100vh-60px)]">
                {NAV_LINKS.map((link) => {
                  const isActive = location === link.href;
                  return (
                    <Link href={link.href} key={link.href} onClick={() => setIsOpen(false)}>
                      <div className={`flex items-center justify-between px-6 py-3 border-b border-primary-foreground/5 text-sm font-medium ${isActive ? "text-secondary bg-primary-foreground/10" : ""}`}>
                        {link.label}
                        <ChevronRight className="h-4 w-4 opacity-50" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </nav>
  );
}