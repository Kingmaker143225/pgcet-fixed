import SiteLayout from "@/components/layout/SiteLayout";
import PageBanner from "@/components/layout/PageBanner";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Calendar } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { notifications } from "@/data/notifications";
import { useState } from "react";

const CATEGORIES = ["All", "Application", "Exam", "Result", "Counselling"];

export default function Notifications() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = notifications.filter(n => {
    const matchesSearch = n.title.toLowerCase().includes(search.toLowerCase()) || n.summary.toLowerCase().includes(search.toLowerCase());
    const matchesCat = activeCategory === "All" || n.category === activeCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <SiteLayout>
      <PageBanner 
        title="Notifications & Updates" 
        crumbs={[{ label: "Notifications" }]} 
      />
      
      <div className="container mx-auto max-w-5xl py-12 px-4 space-y-8">
        
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-card p-4 rounded-xl border shadow-sm">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input 
              placeholder="Search notifications..." 
              className="pl-9 bg-muted/50 border-transparent focus-visible:bg-background"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto scrollbar-hide">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  activeCategory === cat 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {filtered.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              No notifications found matching your criteria.
            </div>
          ) : (
            filtered.map(n => (
              <div key={n.id} className="bg-card border rounded-lg p-5 hover:shadow-md transition-shadow flex flex-col sm:flex-row sm:items-center gap-4 group">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Badge variant="outline" className="text-xs bg-muted/50">{n.category}</Badge>
                    <span className="text-xs text-muted-foreground flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {n.date}
                    </span>
                    {n.isNew && (
                      <Badge className="bg-red-500 hover:bg-red-600 text-[10px] px-1.5 py-0">NEW</Badge>
                    )}
                  </div>
                  <h3 className="font-bold text-lg text-primary group-hover:text-secondary transition-colors mb-1">
                    {n.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {n.summary}
                  </p>
                </div>
                <div className="sm:pl-4 sm:border-l border-border mt-4 sm:mt-0 flex-shrink-0">
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="text-sm font-semibold text-secondary hover:text-secondary/80 transition-colors">
                        Read more &rarr;
                      </button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[500px]">
                      <DialogHeader>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline">{n.category}</Badge>
                          <span className="text-xs text-muted-foreground">{n.date}</span>
                        </div>
                        <DialogTitle className="text-xl font-serif text-primary leading-tight">{n.title}</DialogTitle>
                      </DialogHeader>
                      <div className="mt-4 text-sm text-foreground leading-relaxed">
                        {n.body}
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </SiteLayout>
  );
}