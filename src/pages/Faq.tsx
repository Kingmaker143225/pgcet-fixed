import SiteLayout from "@/components/layout/SiteLayout";
import PageBanner from "@/components/layout/PageBanner";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/data/faqs";
import { useState } from "react";

export default function Faq() {
  const [search, setSearch] = useState("");

  const filteredFaqs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(q => 
      q.q.toLowerCase().includes(search.toLowerCase()) || 
      q.a.toLowerCase().includes(search.toLowerCase())
    )
  })).filter(c => c.questions.length > 0);

  return (
    <SiteLayout>
      <PageBanner 
        title="Frequently Asked Questions" 
        crumbs={[{ label: "FAQ" }]} 
      />
      
      <div className="container mx-auto max-w-4xl py-12 px-4 space-y-8">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input 
            placeholder="Search for questions or topics..." 
            className="pl-12 h-14 text-lg bg-card shadow-sm border-muted"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {search ? (
          <div className="bg-card rounded-xl border shadow-sm p-6">
            <h3 className="font-semibold mb-4 text-muted-foreground">Search Results</h3>
            {filteredFaqs.length === 0 ? (
              <p className="text-center py-8">No results found.</p>
            ) : (
              <Accordion type="multiple" className="w-full">
                {filteredFaqs.flatMap(c => c.questions).map((faq, i) => (
                  <AccordionItem key={i} value={`search-${i}`}>
                    <AccordionTrigger className="text-left font-semibold text-[15px] hover:text-primary">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            )}
          </div>
        ) : (
          <Tabs defaultValue={faqs[0].category} className="w-full">
            <TabsList className="w-full flex flex-wrap h-auto p-1 bg-muted/50 mb-8 justify-start">
              {faqs.map(cat => (
                <TabsTrigger 
                  key={cat.category} 
                  value={cat.category}
                  className="flex-1 min-w-[120px] data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-2.5"
                >
                  {cat.category}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {faqs.map(cat => (
              <TabsContent key={cat.category} value={cat.category}>
                <Accordion type="single" collapsible className="w-full bg-card rounded-xl border shadow-sm px-6 py-2">
                  {cat.questions.map((faq, i) => (
                    <AccordionItem key={i} value={`item-${i}`}>
                      <AccordionTrigger className="text-left font-semibold text-[15px] hover:text-primary transition-colors">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>
            ))}
          </Tabs>
        )}
      </div>
    </SiteLayout>
  );
}