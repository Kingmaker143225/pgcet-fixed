import { Link } from "wouter";
import { ArrowRight, HelpCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionTitle from "./SectionTitle";
import { faqs } from "@/data/faqs";

export default function FaqTeaser() {
  const popularFaqs = faqs.flatMap(cat => cat.questions).slice(0, 4);

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center mb-10 flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
            <HelpCircle className="w-6 h-6" />
          </div>
          <SectionTitle title="Frequently Asked Questions" centered />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about the TG ECET application, examination, and admission process.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full bg-card rounded-xl border shadow-sm px-6 py-2">
          {popularFaqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left font-semibold text-[15px] hover:text-primary transition-colors">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-8 flex justify-center">
          <Link href="/faq">
            <div className="flex items-center text-sm font-bold text-secondary bg-secondary/10 hover:bg-secondary/20 transition-colors cursor-pointer px-6 py-3 rounded-full">
              View all FAQs <ArrowRight className="w-4 h-4 ml-2" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}