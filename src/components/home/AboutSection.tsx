import SectionTitle from "./SectionTitle";
import PersonCard from "./PersonCard";

export default function AboutSection() {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-6">
            <SectionTitle title="About TG ECET-2026" />
            <div className="prose prose-lg prose-slate text-muted-foreground leading-relaxed">
              <p>
                The Telangana State Post-Graduate Common Entrance Test (PGCET) is a state-level examination conducted by the Telangana State Council of Higher Education (TSCHE).
              </p>
              <p>
                It serves as the singular gateway for admissions into regular postgraduate programs including <strong>M.Tech, M.Pharm, MBA, and MCA</strong> offered by universities and their affiliated colleges across the state.
              </p>
              <p>
                Candidates who hold a valid qualifying degree with the requisite percentage are eligible to appear. The examination is conducted in a secure, Computer Based Test (CBT) format to ensure transparency and rapid processing of results.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 relative">
            <div className="absolute inset-0 bg-primary/5 rounded-3xl -m-6 -z-10" />
            <PersonCard 
              name="Prof. Dr. Ramesh Kumar" 
              role="CONVENER, PGCET" 
              contact="Osmania University, Hyderabad" 
              imageSrc="/src/assets/convener.png" 
            />
            <PersonCard 
              name="Prof. Dr. Anitha Reddy" 
              role="CO-COORDINATOR" 
              contact="JNTU, Hyderabad" 
              imageSrc="/src/assets/coordinator.png" 
            />
          </div>
          
        </div>
      </div>
    </section>
  );
}