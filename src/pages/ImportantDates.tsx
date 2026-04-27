import SiteLayout from "@/components/layout/SiteLayout";
import PageBanner from "@/components/layout/PageBanner";
import { Badge } from "@/components/ui/badge";
import { importantDates } from "@/data/importantDates";

export default function ImportantDates() {
  return (
    <SiteLayout>
      <PageBanner 
        title="Important Dates" 
        crumbs={[{ label: "Important Dates" }]} 
      />
      
      <div className="container mx-auto max-w-3xl py-16 px-4">
        <div className="relative pl-6 md:pl-8 border-l-2 border-primary/20 space-y-10">
          {importantDates.map((item, i) => {
            const isCompleted = item.status === "completed";
            const isActive = item.status === "active";
            
            return (
              <div key={i} className="relative">
                {/* Dot */}
                <div className={`absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 bg-background ${
                  isCompleted ? "border-muted-foreground bg-muted" :
                  isActive ? "border-secondary bg-secondary shadow-[0_0_0_4px_rgba(var(--secondary),0.2)]" :
                  "border-primary"
                }`} />
                
                <div className={`p-5 rounded-lg border transition-colors ${
                  isActive ? "bg-secondary/5 border-secondary/30 shadow-sm" : "bg-card hover:bg-muted/20"
                }`}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <span className={`font-bold ${isActive ? "text-secondary" : "text-primary"}`}>
                      {item.date}
                    </span>
                    <Badge variant={
                      isCompleted ? "secondary" : 
                      isActive ? "default" : "outline"
                    } className={isActive ? "bg-secondary text-secondary-foreground hover:bg-secondary" : ""}>
                      {item.status.toUpperCase()}
                    </Badge>
                  </div>
                  <h3 className={`text-lg ${isCompleted ? "text-muted-foreground" : "text-foreground font-semibold"}`}>
                    {item.event}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SiteLayout>
  );
}