import { Link } from "wouter";
import {
  FileText,
  ScrollText,
  MapPin,
  CalendarDays,
  BookOpen,
  ListChecks,
  AlertCircle,
  Layers,
  UserCheck,
  CreditCard,
  FilePlus2,
  Printer,
  Receipt,
  Hash,
  PlayCircle,
  ChevronRight,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { label } from "framer-motion/client";


// const INFORMATION = [
//   { label: "Notification", href: "/notifications", icon: FileText },
//   { label: "Detailed Notification", href: "/notifications", icon: ScrollText },
//   { label: "Regional Centers", href: "/about", icon: MapPin },
//   { label: "Important Dates", href: "/important-dates", icon: CalendarDays },
//   // { label: "Instruction Booklet", href: "/syllabus", icon: BookOpen },
//   // { label: "Instruction Booklet", href: "public/pdfs/instruction-booklet.pdf", icon: BookOpen },
//   { label: "Instruction Booklet", href: "#instruction-booklet", icon: BookOpen },
//   { label: "Syllabus", href: "/syllabus", icon: ListChecks },
//   { label: "Important Instructions to the Candidates", href: "/faq", icon: AlertCircle },
//   { label: "Pattern of Exam", href: "/syllabus", icon: Layers },
// ];

const INFORMATION = [
  // { label: "Notification", href: "/notifications", icon: FileText },
  // { label: "Detailed Notification", href: "/notifications", icon: ScrollText },
  // { label: "Regional Centers", href: "/about", icon: MapPin },
  {label: "Notification", href: "/pdfs/TG-ECET-2026-Notification.pdf", icon: FileText, isPdf: true},
  { label: "Detailed Notification", href: "/pdfs/TG-ECET-2026-Detailed-Notification.pdf", icon: ScrollText, isPdf: true },
  { label: "Regional Centers", href: "/pdfs/TG-ECET-2026-Regional-Centers.pdf", icon: MapPin, isPdf: true },
  { label: "Important Dates", href: "/important-dates", icon: CalendarDays },

  {
    label: "Instruction Booklet",
    href: "/pdfs/instruction-booklet.pdf",
    icon: BookOpen,
    isPdf: true,
  },

  { label: "Syllabus", href: "/syllabus", icon: ListChecks },

  {
    label: "Important Instructions to the Candidates",
    href: "/pdfs/important_instructions_to_the_candidates.pdf",
    icon: AlertCircle,
    isPdf: true,
  },

  {
    label: "Pattern of Exam",
    href: "/pdfs/pattern_of_Examination.pdf",
    icon: Layers,
    isPdf: true,
  },
];
const APPLICATION = [
  // { label: "User Guide for filling Online Application", href: "/application", icon: UserCheck },
  {
    label: "User Guide for filling Online Application",
    href: "/pdfs/TG-ECET-USER-GUIDE-(1).pdf",
    icon: UserCheck,
    isPdf: true,
  },
  { label: "STEP 1: Application Fee Payment", href: "/fee-payment", icon: CreditCard },
  { label: "STEP 2: Fill The Application Form", href: "/application-form", icon: FilePlus2 },
  { label: "STEP 3: Print Your Filled In Application Form", href: "/print-application", icon: Printer },
  { label: "Know Your Payment Status", href: "payment-status", icon: Receipt },
  { label: "Know Your Registration Number", href: "registration-number", icon: Hash },
  // { label: "Mock Test", href: "/mock-test", icon: PlayCircle },
];

const NEWS = [
  {
    text: "Commencement of Submission of Online Applications without late fee",
    date: "10-05-2026",
    color: "text-emerald-700",
  },
  {
    text: "Application Forms will be accepted only Online",
    date: "",
    color: "text-[#06254D]",
  },
  {
    text: "Payment of Registration Fee through Debit / Credit Card / Net Banking",
    date: "",
    color: "text-[#06254D]",
  },
  {
    text: "Date of Examination",
    date: "08-07-2026 to 12-07-2026",
    color: "text-[#06254D]",
  },
];

const FEE_SCHEDULE = [
  { label: "Last date for Submission of Online Application without late fee", date: "10-06-2026", amount: "" },
  { label: "Last date with late fee of Rs. 250/-", date: "17-06-2026", amount: "Rs. 250/-" },
  { label: "Last date with late fee of Rs. 500/-", date: "24-06-2026", amount: "Rs. 500/-" },
  { label: "Last date with late fee of Rs. 1000/-", date: "30-06-2026", amount: "Rs. 1000/-" },
  { label: "Last date with late fee of Rs. 5000/-", date: "05-07-2026", amount: "Rs. 5000/-" },
];

function ColumnHeader({ title }: { title: string }) {
  return (
    <div className="bg-[#06254D] text-white px-4 py-3 flex items-center gap-2 rounded-t-md">
      <span className="w-1 h-5 bg-secondary rounded-sm" />
      <h3 className="font-serif font-bold text-base tracking-wide uppercase">{title}</h3>
    </div>
  );
}

export default function LatestUpdates() {
  return (
    <section className="py-10 bg-muted/40 relative">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#06254D] tracking-tight inline-block">
            Latest Updates
          </h2>
          <div className="h-1 w-20 bg-secondary mt-3 rounded-full mx-auto" />
          <p className="text-sm text-muted-foreground mt-3 max-w-2xl mx-auto">
            Stay informed with all the latest notifications, application steps, and announcements for TG ECET-2026.
          </p>
        </div>

        {/* Marquee strip */}
        <div className="bg-secondary/20 border border-secondary/40 rounded-md mb-8 overflow-hidden flex items-stretch">
          <div className="bg-[#06254D] text-white text-xs font-bold px-3 flex items-center uppercase tracking-wide shrink-0">
            Notice
          </div>
          <div className="flex-1 overflow-hidden py-2">
            <div className="whitespace-nowrap animate-[scroll-left_40s_linear_infinite] text-sm font-medium text-[#06254D]">
              Online application portal opens 10-05-2026 &nbsp;•&nbsp; Last date without late fee: 10-06-2026 &nbsp;•&nbsp; Late fee Rs. 5000/- valid till 05-07-2026 &nbsp;•&nbsp; Examination dates: 08-07-2026 to 12-07-2026 &nbsp;•&nbsp; Hall ticket download begins: 01-07-2026 &nbsp;•&nbsp; Results announcement: 25-07-2026
            </div>
          </div>
        </div>

        {/* 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Information */}
          <div className="bg-card border border-border rounded-md shadow-sm overflow-hidden flex flex-col">
            <ColumnHeader title="Information" />
            <ul className="divide-y divide-border">
              {/* {INFORMATION.map((item, i) => {
                const Icon = item.icon;
                return (
                  <li key={i} className={i % 2 === 0 ? "bg-white" : "bg-muted/40"}>
                    <Link href={item.href}>
                      <div className="flex items-start gap-3 px-4 py-3 hover:bg-secondary/10 transition-colors group cursor-pointer">
                        <Icon className="w-4 h-4 text-primary shrink-0 mt-0.5 group-hover:text-[#06254D]" />
                        <span className="text-sm text-[#06254D] font-medium leading-snug flex-1">
                          {item.label}
                        </span>
                        <ChevronRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-0.5" />
                      </div>
                    </Link>
                  </li>
                );
              })} */}
              {INFORMATION.map((item, i) => {
  const Icon = item.icon;

  if (item.isPdf) {
    return (
      <li key={i} className={i % 2 === 0 ? "bg-white" : "bg-muted/40"}>
        <Dialog>
          <DialogTrigger asChild>
            <button className="w-full flex items-start gap-3 px-4 py-3 hover:bg-secondary/10 transition-colors group cursor-pointer text-left">
              <Icon className="w-4 h-4 text-primary shrink-0 mt-0.5 group-hover:text-[#06254D]" />
              <span className="text-sm text-[#06254D] font-medium leading-snug flex-1">
                {item.label}
              </span>
              <ChevronRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-0.5" />
            </button>
          </DialogTrigger>

          <DialogContent className="max-w-[95vw] w-[95vw] h-[92vh] p-0 overflow-hidden bg-white">
  {/* Header */}
  <DialogHeader className="h-16 px-6 border-b bg-[#06254D] flex flex-row items-center justify-between">
    <DialogTitle className="text-lg md:text-xl font-bold text-white">
      {item.label}
    </DialogTitle>

    <a
      href={item.href}
      download
      className="mr-10 px-4 py-2 rounded-md bg-secondary text-[#06254D] text-sm font-bold hover:opacity-90"
    >
      Download PDF
    </a>
  </DialogHeader>

  {/* PDF Viewer */}
  <div className="h-[calc(92vh-64px)] bg-gray-100">
    <iframe
      src={item.href}
      title={item.label}
      className="w-full h-full border-0"
    />
  </div>
</DialogContent>
        </Dialog>
      </li>
    );
  }

  return (
    <li key={i} className={i % 2 === 0 ? "bg-white" : "bg-muted/40"}>
      <Link href={item.href}>
        <div className="flex items-start gap-3 px-4 py-3 hover:bg-secondary/10 transition-colors group cursor-pointer">
          <Icon className="w-4 h-4 text-primary shrink-0 mt-0.5 group-hover:text-[#06254D]" />
          <span className="text-sm text-[#06254D] font-medium leading-snug flex-1">
            {item.label}
          </span>
          <ChevronRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-0.5" />
        </div>
      </Link>
    </li>
  );
})}
            </ul>
          </div>

          {/* Application */}
          <div className="bg-card border border-border rounded-md shadow-sm overflow-hidden flex flex-col">
  <ColumnHeader title="Application" />

  <ul className="divide-y divide-border">
    {APPLICATION.map((item, i) => {
      const Icon = item.icon;

      if (item.isPdf) {
        return (
          <li key={i} className={i % 2 === 0 ? "bg-white" : "bg-muted/40"}>
            <Dialog>
              <DialogTrigger asChild>
                <button className="w-full flex items-start gap-3 px-4 py-3 hover:bg-secondary/10 transition-colors group cursor-pointer text-left">
                  <Icon className="w-4 h-4 text-primary shrink-0 mt-0.5 group-hover:text-[#06254D]" />
                  <span className="text-sm text-[#06254D] font-medium leading-snug flex-1">
                    {item.label}
                  </span>
                  <ChevronRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-0.5" />
                </button>
              </DialogTrigger>

              <DialogContent className="max-w-[95vw] w-[95vw] h-[92vh] p-0 overflow-hidden bg-white">
                <DialogHeader className="h-16 px-6 border-b bg-[#06254D] flex flex-row items-center justify-between">
                  <DialogTitle className="text-lg md:text-xl font-bold text-white">
                    {item.label}
                  </DialogTitle>

                  <a
                    href={item.href}
                    download
                    className="mr-10 px-4 py-2 rounded-md bg-secondary text-[#06254D] text-sm font-bold hover:opacity-90"
                  >
                    Download PDF
                  </a>
                </DialogHeader>

                <div className="h-[calc(92vh-64px)] bg-gray-100">
                  <iframe
                    src={item.href}
                    title={item.label}
                    className="w-full h-full border-0"
                  />
                </div>
              </DialogContent>
            </Dialog>
          </li>
        );
      }

      return (
        <li key={i} className={i % 2 === 0 ? "bg-white" : "bg-muted/40"}>
          <Link href={item.href}>
            <div className="flex items-start gap-3 px-4 py-3 hover:bg-secondary/10 transition-colors group cursor-pointer">
              <Icon className="w-4 h-4 text-primary shrink-0 mt-0.5 group-hover:text-[#06254D]" />
              <span className="text-sm text-[#06254D] font-medium leading-snug flex-1">
                {item.label}
              </span>
              <ChevronRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-0.5" />
            </div>
          </Link>
        </li>
      );
    })}
  </ul>
</div>

          {/* Latest News */}
          <div className="bg-card border border-border rounded-md shadow-sm overflow-hidden flex flex-col">
            <ColumnHeader title="Latest News" />
            <div className="p-4 space-y-3 text-sm">
              {NEWS.map((n, i) => (
                <div key={i} className="pb-3 border-b border-dashed border-border last:border-0 last:pb-0">
                  <p className={`font-semibold leading-snug ${n.color}`}>{n.text}</p>
                  {n.date && (
                    <p className="text-xs text-muted-foreground mt-1 font-medium">
                      Date: <span className="text-rose-700 font-semibold">{n.date}</span>
                    </p>
                  )}
                </div>
              ))}

              <div className="pt-2 mt-2 border-t border-border">
                <p className="text-xs font-bold uppercase tracking-wide text-[#06254D] mb-2">
                  Submission Schedule
                </p>
                <ul className="space-y-2">
                  {FEE_SCHEDULE.map((s, i) => (
                    <li key={i} className="text-xs leading-snug">
                      <span className="text-foreground/80">{s.label}</span>{" "}
                      {s.amount && (
                        <span className="text-rose-700 font-semibold">{s.amount} </span>
                      )}
                      <span className="text-emerald-700 font-semibold">{s.date}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes scroll-left {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}} />
    </section>
  );
}
