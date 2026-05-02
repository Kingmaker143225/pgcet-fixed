// import SectionTitle from "./SectionTitle";
// import PersonCard from "./PersonCard";

// export default function AboutSection() {
//   return (
//     <section className="py-20 bg-background relative overflow-hidden">
//       <div className="container mx-auto max-w-7xl px-4">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
          
//           <div className="space-y-6">
//             <SectionTitle title="About TG ECET-2026" />
//             <div className="prose prose-lg prose-slate text-muted-foreground leading-relaxed">
//               <p>
//                 Telangana Engineering Common Entrance Test for Diploma Holders of Engineering/Technology/Pharmacy and for B.Sc.(Mathematics) Degree Holders in short form as TG ECET [FDH & B.Sc.(Mathematics)] - 2026 is being conducted by Osmania University Hyderabad on behalf of the Telangana Council of Higher Education (TGCHE) for the academic year 2026-2027. This examination is the prerequisite for lateral entry admission into 2nd year regular B.E./B.Tech/B.Pharm. courses in both University and Un-Aided Private Professional Institutions (Minority & Non-Minority).

// Osmania University Hyderabad, Telangana is a place of Academic Excellence. Bringing the spark of knowledge to young minds and instilling a new confidence and vigor to face the world, it is providing quality Technical Education for 100 plus years. Telangana Council of Higher Education (TGCHE) has delegated the task to Osmania University for conducting the most prestigious Telangana Engineering Common Entrance Test (TG ECET-2026) for this year 2026.  .

// The TG ECET - 2026 is being conducted through ONLINE mode only. state-level examination conducted by the Telangana State Council of Higher Education (TSCHE).
//               </p>
//               <p>
//                 It serves as the singular gateway for admissions into regular postgraduate programs including <strong>M.Tech, M.Pharm, MBA, and MCA</strong> offered by universities and their affiliated colleges across the state.
//               </p>
//               <p>
//                 Candidates who hold a valid qualifying degree with the requisite percentage are eligible to appear. The examination is conducted in a secure, Computer Based Test (CBT) format to ensure transparency and rapid processing of results.
//               </p>
//             </div>
//           </div>

//           <div className="grid sm:grid-cols-2 gap-6 relative">
//             <div className="absolute inset-0 bg-primary/5 rounded-3xl -m-6 -z-10" />
//             <PersonCard 
//               name="Prof. Dr. Ramesh Kumar" 
//               role="CONVENER, PGCET" 
//               contact="Osmania University, Hyderabad" 
//               imageSrc="/src/assets/convener.png" 
//             />
//             <PersonCard 
//               name="Prof. Dr. Anitha Reddy" 
//               role="CO-COORDINATOR" 
//               contact="JNTU, Hyderabad" 
//               imageSrc="/src/assets/coordinator.png" 
//             />
//           </div>
          
//         </div>
//       </div>
//     </section>
//   );
// }











import SectionTitle from "./SectionTitle";
import PersonCard from "./PersonCard";

export default function AboutSection() {
  return (
    <section className="py-10 bg-background relative overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4">
        
        {/* 3 Column Layout */}
        <div className="grid lg:grid-cols-3 gap-10 items-center">
          
          {/* LEFT PROFILE */}
          {/* <div className="flex justify-center lg:justify-start">
            <PersonCard 
              name="Prof. Kumar Molugaram
Chairman, TG ECET 2026 &" 
              role="Vice-Chancellor, Osmania University" 
              contact="Hyderabad-500007
Telangana, India." 
              imageSrc="/src/assets/convener.png" 
            />
          </div> */}
          <div className="flex justify-center lg:justify-start">
  <PersonCard 
  name="Prof. Kumar Molugaram"

  role={`Chairman, TG ECET (WP)-2026 &`}
  role2={`Vice-Chancellor, Osmania University`}
    
  contact={`Hyderabad-500007
Telangana, India.`}

  imageSrc="/convener.png"
  imageSize="w-44 h-44"
/>
</div>

          {/* CENTER CONTENT */}
          <div className="space-y-6 text-center lg:text-left">
            <SectionTitle title="About TG ECET (WP)-2026" />

            <div className="prose prose-lg prose-slate text-muted-foreground leading-relaxed">
              <p>
                Telangana Engineering Common Entrance Test (TG ECET-2026) is conducted by Osmania University on behalf of TGCHE for lateral entry admissions into engineering and pharmacy programs.
              </p>

              <p>
                It enables diploma and B.Sc. Mathematics students to directly enter the second year of professional courses across Telangana.
              </p>

              <p>
                The exam is conducted in online mode (CBT) ensuring transparency, speed, and efficiency in evaluation.
              </p>
            </div>
          </div>

          {/* RIGHT PROFILE */}
          {/* <div className="flex justify-center lg:justify-end">
            <PersonCard 
              name="Prof. P. Chandra Sekhar
Convener, TGECET-2026 &" 
              role="Principal, University College of Engineering(Autonomous)" 
              contact="Osmania University, Hyderabad-500007
Telangana, India." 
              imageSrc="/src/assets/coordinator.png" 
            />
          </div> */}

          <div className="flex justify-center lg:justify-end">
  <PersonCard 
  name="Prof. P. Chandra Sekhar"

  role={`Convener, TG ECET (WP)-2026 &
Principal, University College of Engineering (Autonomous)`}
    
  contact={`Osmania University, Hyderabad-500007
Telangana, India.`}

  imageSrc="/coordinator.png"
  imageSize="w-44 h-44"
/>
</div>

        </div>

      </div>
    </section>
  );
}