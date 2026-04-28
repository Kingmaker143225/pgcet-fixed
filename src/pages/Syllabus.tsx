// import SiteLayout from "@/components/layout/SiteLayout";
// import PageBanner from "@/components/layout/PageBanner";
// import { Card, CardContent } from "@/components/ui/card";
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";
// import { FileText, Download } from "lucide-react";
// import { branches } from "@/data/branches";
// import { toast } from "sonner";

// export default function Syllabus() {
//   const handleDownload = (branchName: string) => {
//     toast.success(`Downloading syllabus for ${branchName}...`);
//   };

//   return (
//     <SiteLayout>
//       <PageBanner 
//         title="Examination Syllabus" 
//         crumbs={[{ label: "Syllabus" }]} 
//       />
      
//       <div className="container mx-auto max-w-6xl py-16 px-4">
//         <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10 text-lg">
//           Select your branch to view the detailed syllabus and topics covered in the entrance examination.
//         </p>

//         <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//           {branches.map((branch, i) => (
//             <Dialog key={i}>
//               <DialogTrigger asChild>
//                 <Card className="cursor-pointer hover:border-primary/50 hover:shadow-md transition-all group bg-card h-full">
//                   <CardContent className="p-6 flex flex-col items-center text-center h-full">
//                     <div className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center text-primary mb-4 group-hover:scale-110 group-hover:bg-primary/10 transition-all">
//                       <FileText className="w-7 h-7" />
//                     </div>
//                     <h3 className="font-bold text-lg mb-1">{branch.code}</h3>
//                     <p className="text-xs text-muted-foreground line-clamp-2 mb-3 flex-grow">{branch.name}</p>
//                     <span className="text-[10px] uppercase font-bold tracking-wider text-secondary bg-secondary/10 px-2 py-1 rounded">
//                       {branch.units.length > 0 ? `${branch.units.length} Units` : 'Syllabus Soon'}
//                     </span>
//                   </CardContent>
//                 </Card>
//               </DialogTrigger>
//               <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
//                 <DialogHeader>
//                   <div className="flex items-center justify-between mb-4">
//                     <div>
//                       <span className="text-sm font-bold text-secondary bg-secondary/10 px-2 py-1 rounded mb-2 inline-block">{branch.code}</span>
//                       <DialogTitle className="text-2xl font-serif text-primary">{branch.name}</DialogTitle>
//                     </div>
//                   </div>
//                 </DialogHeader>
                
//                 {branch.units.length > 0 ? (
//                   <div className="space-y-6 mt-4">
//                     {branch.units.map((unit, idx) => (
//                       <div key={idx} className="border-b pb-4 last:border-0">
//                         <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
//                           <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-sm flex items-center justify-center flex-shrink-0">
//                             {idx + 1}
//                           </span>
//                           {unit.title}
//                         </h4>
//                         <ul className="grid sm:grid-cols-2 gap-2 pl-8 text-sm text-muted-foreground">
//                           {unit.topics.map((topic, tIdx) => (
//                             <li key={tIdx} className="flex items-start gap-2">
//                               <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 flex-shrink-0" />
//                               <span>{topic}</span>
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     ))}
//                     <div className="pt-4 flex justify-end sticky bottom-0 bg-background/95 backdrop-blur py-4 border-t mt-4">
//                       <Button onClick={() => handleDownload(branch.name)} className="gap-2">
//                         <Download className="w-4 h-4" /> Download PDF
//                       </Button>
//                     </div>
//                   </div>
//                 ) : (
//                   <div className="py-12 text-center text-muted-foreground">
//                     Detailed syllabus for this branch will be updated soon.
//                   </div>
//                 )}
//               </DialogContent>
//             </Dialog>
//           ))}
//         </div>
//       </div>
//     </SiteLayout>
//   );
// }








import SiteLayout from "@/components/layout/SiteLayout";
import PageBanner from "@/components/layout/PageBanner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { BookOpen, Download } from "lucide-react";

const syllabusItems = [
  { name: "B.Sc. (MATHEMATICS)", pdf: "/pdfs/syllabus/bsc-mathematics.pdf" },
  { name: "CHEMICAL ENGINEERING", pdf: "/pdfs/syllabus/chemical-engineering.pdf" },
  { name: "COMPUTER SCIENCE AND ENGINEERING", pdf: "/pdfs/syllabus/computer-science-engineering.pdf" },
  { name: "ELECTRONICS AND COMMUNICATION ENGINEERING", pdf: "/pdfs/syllabus/electronics-communication-engineering.pdf" },
  { name: "ELECTRICAL AND ELECTRONICS ENGINEERING", pdf: "/pdfs/syllabus/electrical-electronics-engineering.pdf" },
  { name: "ELECTRONICS AND INSTRUMENTATION ENGINEERING", pdf: "/pdfs/syllabus/electronics-instrumentation-engineering.pdf" },
  { name: "MECHANICAL ENGINEERING", pdf: "/pdfs/syllabus/mechanical-engineering.pdf" },
  { name: "METALLURGICAL ENGINEERING", pdf: "/pdfs/syllabus/metallurgical-engineering.pdf" },
  { name: "MINING ENGINEERING", pdf: "/pdfs/syllabus/mining-engineering.pdf" },
  { name: "CIVIL ENGINEERING", pdf: "/pdfs/syllabus/civil-engineering.pdf" },
  { name: "PHARMACY", pdf: "/pdfs/syllabus/pharmacy.pdf" },
];

export default function Syllabus() {
  return (
    <SiteLayout>
      <PageBanner
        title="Syllabus"
        crumbs={[{ label: "Syllabus" }]}
      />

      <div className="container mx-auto max-w-7xl py-12 px-4">
        <h2 className="text-2xl font-bold text-[#003b8f] mb-4">
          Syllabus
        </h2>

        <div className="bg-white border border-gray-300 rounded-sm shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {syllabusItems.map((item, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <button
                    className={`
                      flex items-center gap-2 px-4 py-4 text-left text-lg font-medium
                      border-b border-gray-300 hover:bg-blue-50 transition
                      ${index % 4 === 0 || index % 4 === 1 ? "bg-gray-100" : "bg-white"}
                      ${index % 2 === 0 ? "md:border-r" : ""}
                    `}
                  >
                    <BookOpen className="w-5 h-5 text-black shrink-0" />
                    <span className="text-black">{item.name}</span>
                  </button>
                </DialogTrigger>

                <DialogContent className="max-w-[95vw] w-[95vw] h-[92vh] p-0 overflow-hidden bg-white">
                  <DialogHeader className="h-16 px-6 border-b bg-[#06254D] flex flex-row items-center justify-between">
                    <DialogTitle className="text-lg md:text-xl font-bold text-white">
                      {item.name} Syllabus
                    </DialogTitle>

                    <a
                      href={item.pdf}
                      download
                      className="mr-10 flex items-center gap-2 px-4 py-2 rounded-md bg-yellow-400 text-[#06254D] text-sm font-bold hover:bg-yellow-300"
                    >
                      <Download className="w-4 h-4" />
                      Download PDF
                    </a>
                  </DialogHeader>

                  <div className="h-[calc(92vh-64px)] bg-gray-100">
                    <iframe
                      src={item.pdf}
                      title={`${item.name} Syllabus`}
                      className="w-full h-full border-0"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}