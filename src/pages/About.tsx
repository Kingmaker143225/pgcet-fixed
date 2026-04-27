import SiteLayout from "@/components/layout/SiteLayout";
import PageBanner from "@/components/layout/PageBanner";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Building } from "lucide-react";
import { participatingInstitutes } from "@/data/participatingInstitutes";

export default function About() {
  return (
    <SiteLayout>
      <PageBanner 
        title="About TG ECET-2026" 
        crumbs={[{ label: "About" }]} 
      />
      
      <div className="container mx-auto max-w-5xl py-12 px-4 space-y-12">
        <section className="prose prose-slate max-w-none">
          <h2 className="text-3xl font-serif font-bold text-primary mb-6">Introduction</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Telangana Engineering Common Entrance Test for Diploma Holders of Engineering/Technology/Pharmacy and for B.Sc.(Mathematics) Degree Holders in short form as TG ECET [FDH & B.Sc.(Mathematics)] - 2026 is being conducted by Osmania University Hyderabad on behalf of the Telangana Council of Higher Education (TGCHE) for the academic year 2026-2027. This examination is the prerequisite for lateral entry admission into 2nd year regular B.E./B.Tech/B.Pharm. courses in both University and Un-Aided Private Professional Institutions (Minority & Non-Minority).

Osmania University Hyderabad, Telangana is a place of Academic Excellence. Bringing the spark of knowledge to young minds and instilling a new confidence and vigor to face the world, it is providing quality Technical Education for 100 plus years. Telangana Council of Higher Education (TGCHE) has delegated the task to Osmania University for conducting the most prestigious Telangana Engineering Common Entrance Test (TG ECET-2026) for this year 2026.  .

The TG ECET - 2026 is being conducted through ONLINE mode only. state-level examination conducted by the Telangana State Council of Higher Education (TSCHE). It serves as the singular gateway for admissions into regular postgraduate programs including M.Tech, M.Pharm, MBA, and MCA offered by universities and their affiliated colleges across the state.
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-muted/30 border-none shadow-sm">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <CheckCircle2 className="text-secondary w-5 h-5" />
                Objectives
              </h3>
              <ul className="space-y-3">
                {[
                  "To conduct a centralized, transparent entrance test for PG courses.",
                  "To standardize the admission process across all state universities.",
                  "To ensure merit-based seat allocation.",
                  "To provide a single-window application system for students."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-muted/30 border-none shadow-sm">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <CheckCircle2 className="text-secondary w-5 h-5" />
                Eligibility
              </h3>
              <ul className="space-y-3">
                {[
                  "Must be an Indian National.",
                  "Must hold a valid Bachelor's degree (B.E/B.Tech/B.Pharm/BA/BSc/BCom) from a recognized university.",
                  "Must have secured a minimum of 50% marks (45% for reserved categories) in the qualifying examination.",
                  "Final year students are also eligible to apply provisionally."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <section>
          <h2 className="text-2xl font-serif font-bold text-primary mb-6">Exam Pattern</h2>
          <div className="overflow-x-auto rounded-lg border">
            <table className="w-full text-sm text-left">
              <thead className="bg-muted text-muted-foreground uppercase text-xs font-bold">
                <tr>
                  <th className="px-6 py-4">Section / Branch</th>
                  <th className="px-6 py-4 text-center">Questions</th>
                  <th className="px-6 py-4 text-center">Marks</th>
                  <th className="px-6 py-4 text-right">Duration</th>
                </tr>
              </thead>
              <tbody className="divide-y bg-card">
                <tr className="hover:bg-muted/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-foreground">Engineering Mathematics</td>
                  <td className="px-6 py-4 text-center">50</td>
                  <td className="px-6 py-4 text-center">50</td>
                  <td className="px-6 py-4 text-right align-top" rowSpan={3}>
                    <div className="flex h-full items-center justify-end font-bold text-primary">
                      120 Mins
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-muted/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-foreground">Subject Paper</td>
                  <td className="px-6 py-4 text-center">50</td>
                  <td className="px-6 py-4 text-center">50</td>
                </tr>
                <tr className="bg-primary/5 font-bold">
                  <td className="px-6 py-4 text-primary">Total</td>
                  <td className="px-6 py-4 text-center text-primary">100</td>
                  <td className="px-6 py-4 text-center text-primary">100</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-6">
            <Building className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-serif font-bold text-primary">Participating Institutes</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {participatingInstitutes.map((inst, i) => (
              <div key={i} className="flex items-center gap-3 p-4 rounded-lg border bg-card hover:border-primary/30 hover:shadow-sm transition-all">
                <div className="w-10 h-10 rounded bg-primary/10 text-primary font-bold flex items-center justify-center flex-shrink-0">
                  {inst.charAt(0)}
                </div>
                <span className="text-sm font-medium leading-tight">{inst}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}