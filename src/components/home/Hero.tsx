// import { Link } from "wouter";
// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";

// export default function Hero() {
//   return (
//     <div className="relative w-full h-[600px] overflow-hidden flex items-center justify-center">
//       <div 
//         className="absolute inset-0 bg-cover bg-center z-0"
//         style={{ backgroundImage: "url('/src/assets/campus-hero.png')" }}
//       />
//       <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-[#5c1c24]/80 z-10" />
      
//       <motion.div 
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="relative z-20 text-center px-4 max-w-4xl mx-auto"
//       >
//         <span className="inline-block text-secondary font-bold tracking-wider uppercase mb-4 text-sm md:text-base border border-secondary/30 px-4 py-1 rounded-full bg-secondary/10">
//           Government of Telangana
//         </span>
//         <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
//           Telangana Common Entrance Test 2026
//         </h1>
//         <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-medium">
//           Gateway to pursuing M.Tech, M.Pharm, MBA, and MCA across participating universities and affiliated colleges in Telangana.
//         </p>
//         <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
//           <Link href="/application">
//             <Button size="lg" className="w-full sm:w-auto bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold px-8 h-12 text-base shadow-lg">
//               Fill Application
//             </Button>
//           </Link>
//           <Link href="/hall-ticket">
//             <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white font-bold px-8 h-12 text-base backdrop-blur-sm">
//               Download Hall Ticket
//             </Button>
//           </Link>
//         </div>
//       </motion.div>
//     </div>
//   );
// }






import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="relative w-full h-[600px] overflow-hidden flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/src/assets/campus-hero.png')" }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#2EA6D9]/85 via-[#082E5F]/45 to-[#7C2D3B]/75 z-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 text-center px-4 max-w-4xl mx-auto"
      >
        <span className="inline-block text-[#F4B400] font-bold tracking-wider uppercase mb-4 text-sm md:text-base border border-[#F4B400]/40 px-5 py-1 rounded-full bg-[#F4B400]/10">
          Government of Telangana
        </span>

        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
          Telangana Common Entrance Test 2026
        </h1>

        <p className="text-lg md:text-xl text-white mb-10 max-w-2xl mx-auto font-medium">
          Gateway to pursuing M.Tech, M.Pharm, MBA, and MCA across participating universities and affiliated colleges in Telangana.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/application">
            <Button className="w-full sm:w-auto bg-[#F4B400] text-[#082E5F] hover:bg-[#F4B400]/90 font-bold px-10 h-12 text-base shadow-lg">
              Fill Application
            </Button>
          </Link>

          <Link href="/hall-ticket">
            <Button className="w-full sm:w-auto bg-transparent border border-white/35 text-white hover:bg-white/10 font-bold px-10 h-12 text-base backdrop-blur-sm">
              Download Hall Ticket
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}