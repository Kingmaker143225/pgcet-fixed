import { Link } from "wouter";
import { CreditCard, FileEdit, Printer, Download, Award, GraduationCap, CheckSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const actions = [
  { title: "Pay Fee", desc: "Pay application fee online", icon: CreditCard, href: "/fee-payment" },
  { title: "Fill Application", desc: "Submit your details", icon: FileEdit, href: "/application" },
  { title: "Print Application", desc: "Download submitted form", icon: Printer, href: "/print-application" },
  { title: "Download Hall Ticket", desc: "Get your exam admit card", icon: Download, href: "/hall-ticket" },
  // { title: "Results", desc: "Check your TG ECET score", icon: Award, href: "/results" },
  // { title: "Rank Card", desc: "Download official rank card", icon: GraduationCap, href: "/results" },
  // { title: "Mock Test", desc: "Practice before exam", icon: CheckSquare, href: "/mock-test" },
];

export default function QuickActions() {
  return (
    <section className="py-7 bg-muted/30">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {actions.map((action, i) => (
            <Link key={i} href={action.href}>
              <Card className="h-full cursor-pointer hover:border-primary/50 hover:shadow-md transition-all group bg-card">
                <CardContent className="p-4 flex flex-col items-center text-center h-full justify-between gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground group-hover:scale-110 transition-transform shadow-sm">
                    <action.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm mb-1 leading-tight text-primary">{action.title}</h3>
                    <p className="text-xs text-muted-foreground">{action.desc}</p>
                  </div>
                  <div className="text-xs font-bold text-secondary mt-1 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                    Proceed <span className="text-[10px]">&rarr;</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}