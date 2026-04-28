// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { CheckCircle2, ChevronRight, FileEdit, Upload, GraduationCap } from "lucide-react";
// import SiteLayout from "@/components/layout/SiteLayout";
// import PageBanner from "@/components/layout/PageBanner";
// import { Card, CardContent } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import { Button } from "@/components/ui/button";
// import { Label } from "@/components/ui/label";
// import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
// import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
// import { branches } from "@/data/branches";
// import { useLocation } from "wouter";

// const personalSchema = z.object({
//   name: z.string().min(2, "Name is required"),
//   dob: z.string().min(1, "Date of birth is required"),
//   gender: z.string().min(1, "Gender is required"),
//   email: z.string().email("Invalid email"),
//   mobile: z.string().length(10, "Mobile must be 10 digits"),
//   address: z.string().min(10, "Address is too short"),
// });

// const qualificationSchema = z.object({
//   degree: z.string().min(1, "Degree is required"),
//   university: z.string().min(2, "University is required"),
//   year: z.string().length(4, "Invalid year"),
//   percentage: z.string().min(1, "Percentage is required"),
// });

// const courseSchema = z.object({
//   branch: z.string().min(1, "Branch is required"),
//   examCity: z.string().min(1, "Exam city is required"),
// });

// const documentsSchema = z.object({
//   photo: z.any().refine((val) => val, "Photo is required"),
//   signature: z.any().refine((val) => val, "Signature is required"),
//   marksheet: z.any().refine((val) => val, "Marksheet is required"),
// });

// export default function ApplicationForm() {
//   const [step, setStep] = useState(1);
//   const [showSuccess, setShowSuccess] = useState(false);
//   const [appNumber, setAppNumber] = useState("");
//   const [, setLocation] = useLocation();

//   const personalForm = useForm({ resolver: zodResolver(personalSchema), defaultValues: { name: "", dob: "", gender: "", email: "", mobile: "", address: "" } });
//   const qualificationForm = useForm({ resolver: zodResolver(qualificationSchema), defaultValues: { degree: "", university: "", year: "", percentage: "" } });
//   const courseForm = useForm({ resolver: zodResolver(courseSchema), defaultValues: { branch: "", examCity: "" } });
//   const documentsForm = useForm({ resolver: zodResolver(documentsSchema), defaultValues: { photo: "", signature: "", marksheet: "" } });

//   const [formData, setFormData] = useState<any>({});

//   const nextStep = (data: any) => {
//     setFormData((prev: any) => ({ ...prev, ...data }));
//     setStep(s => s + 1);
//   };

//   const handleDocumentsNext = (e: React.FormEvent) => {
//     e.preventDefault();
//     const photo = (document.getElementById('photo') as HTMLInputElement).files?.[0];
//     const signature = (document.getElementById('signature') as HTMLInputElement).files?.[0];
//     const marksheet = (document.getElementById('marksheet') as HTMLInputElement).files?.[0];
    
//     if (photo && signature && marksheet) {
//       setFormData((prev: any) => ({
//         ...prev,
//         photo: photo.name,
//         signature: signature.name,
//         marksheet: marksheet.name
//       }));
//       setStep(5);
//     }
//   };

//   const submitFinal = () => {
//     const random = Math.floor(1000000 + Math.random() * 9000000);
//     setAppNumber(`PGCET2026${random}`);
//     setShowSuccess(true);
//   };

//   const steps = [
//     { id: 1, title: "Personal" },
//     { id: 2, title: "Qualification" },
//     { id: 3, title: "Course" },
//     { id: 4, title: "Documents" },
//     { id: 5, title: "Preview" },
//   ];

//   return (
//     <SiteLayout>
//       <PageBanner title="Application Form" crumbs={[{ label: "Application" }]} />
      
//       <div className="container mx-auto max-w-4xl py-12 px-4">
//         {/* Stepper */}
//         <div className="mb-8">
//           <div className="flex items-center justify-between relative">
//             <div className="absolute left-0 top-1/2 w-full h-1 bg-muted -z-10 -translate-y-1/2"></div>
//             <div className="absolute left-0 top-1/2 h-1 bg-primary -z-10 -translate-y-1/2 transition-all duration-300" style={{ width: `${((step - 1) / (steps.length - 1)) * 100}%` }}></div>
            
//             {steps.map((s) => (
//               <div key={s.id} className="flex flex-col items-center bg-background px-2">
//                 <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm border-2 transition-colors ${
//                   step > s.id ? "bg-primary border-primary text-primary-foreground" :
//                   step === s.id ? "bg-background border-primary text-primary" :
//                   "bg-background border-muted text-muted-foreground"
//                 }`}>
//                   {step > s.id ? <CheckCircle2 className="w-5 h-5" /> : s.id}
//                 </div>
//                 <span className={`text-xs mt-2 font-medium hidden sm:block ${step >= s.id ? "text-foreground" : "text-muted-foreground"}`}>
//                   {s.title}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>

//         <Card className="border-muted shadow-sm">
//           <CardContent className="p-6 sm:p-8">
//             {step === 1 && (
//               <Form {...personalForm}>
//                 <form onSubmit={personalForm.handleSubmit(nextStep)} className="space-y-6">
//                   <h3 className="text-xl font-serif font-bold text-primary border-b pb-2">Personal Details</h3>
//                   <div className="grid sm:grid-cols-2 gap-4">
//                     <FormField control={personalForm.control} name="name" render={({ field }) => (
//                       <FormItem><FormLabel>Full Name (as per SSC)</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
//                     )} />
//                     <FormField control={personalForm.control} name="dob" render={({ field }) => (
//                       <FormItem><FormLabel>Date of Birth</FormLabel><FormControl><Input type="date" {...field} /></FormControl><FormMessage /></FormItem>
//                     )} />
//                     <FormField control={personalForm.control} name="gender" render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Gender</FormLabel>
//                         <Select onValueChange={field.onChange} defaultValue={field.value}>
//                           <FormControl><SelectTrigger><SelectValue placeholder="Select gender" /></SelectTrigger></FormControl>
//                           <SelectContent>
//                             <SelectItem value="Male">Male</SelectItem>
//                             <SelectItem value="Female">Female</SelectItem>
//                             <SelectItem value="Other">Other</SelectItem>
//                           </SelectContent>
//                         </Select>
//                         <FormMessage />
//                       </FormItem>
//                     )} />
//                     <FormField control={personalForm.control} name="mobile" render={({ field }) => (
//                       <FormItem><FormLabel>Mobile Number</FormLabel><FormControl><Input {...field} maxLength={10} /></FormControl><FormMessage /></FormItem>
//                     )} />
//                     <FormField control={personalForm.control} name="email" render={({ field }) => (
//                       <FormItem className="sm:col-span-2"><FormLabel>Email Address</FormLabel><FormControl><Input type="email" {...field} /></FormControl><FormMessage /></FormItem>
//                     )} />
//                     <FormField control={personalForm.control} name="address" render={({ field }) => (
//                       <FormItem className="sm:col-span-2"><FormLabel>Communication Address</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
//                     )} />
//                   </div>
//                   <div className="flex justify-end"><Button type="submit">Next Step <ChevronRight className="w-4 h-4 ml-1" /></Button></div>
//                 </form>
//               </Form>
//             )}

//             {step === 2 && (
//               <Form {...qualificationForm}>
//                 <form onSubmit={qualificationForm.handleSubmit(nextStep)} className="space-y-6">
//                   <h3 className="text-xl font-serif font-bold text-primary border-b pb-2">Qualifying Examination</h3>
//                   <div className="grid sm:grid-cols-2 gap-4">
//                     <FormField control={qualificationForm.control} name="degree" render={({ field }) => (
//                       <FormItem><FormLabel>Degree Name</FormLabel><FormControl><Input placeholder="e.g. B.Tech / B.E" {...field} /></FormControl><FormMessage /></FormItem>
//                     )} />
//                     <FormField control={qualificationForm.control} name="university" render={({ field }) => (
//                       <FormItem><FormLabel>University / Board</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
//                     )} />
//                     <FormField control={qualificationForm.control} name="year" render={({ field }) => (
//                       <FormItem><FormLabel>Year of Passing</FormLabel><FormControl><Input placeholder="YYYY" maxLength={4} {...field} /></FormControl><FormMessage /></FormItem>
//                     )} />
//                     <FormField control={qualificationForm.control} name="percentage" render={({ field }) => (
//                       <FormItem><FormLabel>Percentage / CGPA</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
//                     )} />
//                   </div>
//                   <div className="flex justify-between">
//                     <Button type="button" variant="outline" onClick={() => setStep(1)}>Back</Button>
//                     <Button type="submit">Next Step <ChevronRight className="w-4 h-4 ml-1" /></Button>
//                   </div>
//                 </form>
//               </Form>
//             )}

//             {step === 3 && (
//               <Form {...courseForm}>
//                 <form onSubmit={courseForm.handleSubmit(nextStep)} className="space-y-6">
//                   <h3 className="text-xl font-serif font-bold text-primary border-b pb-2">Course & Exam Center</h3>
//                   <div className="grid sm:grid-cols-2 gap-4">
//                     <FormField control={courseForm.control} name="branch" render={({ field }) => (
//                       <FormItem className="sm:col-span-2">
//                         <FormLabel>Test Paper (Branch)</FormLabel>
//                         <Select onValueChange={field.onChange} defaultValue={field.value}>
//                           <FormControl><SelectTrigger><SelectValue placeholder="Select branch" /></SelectTrigger></FormControl>
//                           <SelectContent>
//                             {branches.map(b => (
//                               <SelectItem key={b.code} value={b.code}>{b.code} - {b.name}</SelectItem>
//                             ))}
//                           </SelectContent>
//                         </Select>
//                         <FormMessage />
//                       </FormItem>
//                     )} />
//                     <FormField control={courseForm.control} name="examCity" render={({ field }) => (
//                       <FormItem className="sm:col-span-2">
//                         <FormLabel>Preferred Exam City</FormLabel>
//                         <Select onValueChange={field.onChange} defaultValue={field.value}>
//                           <FormControl><SelectTrigger><SelectValue placeholder="Select city" /></SelectTrigger></FormControl>
//                           <SelectContent>
//                             <SelectItem value="Hyderabad">Hyderabad</SelectItem>
//                             <SelectItem value="Warangal">Warangal</SelectItem>
//                             <SelectItem value="Karimnagar">Karimnagar</SelectItem>
//                             <SelectItem value="Nizamabad">Nizamabad</SelectItem>
//                             <SelectItem value="Khammam">Khammam</SelectItem>
//                           </SelectContent>
//                         </Select>
//                         <FormMessage />
//                       </FormItem>
//                     )} />
//                   </div>
//                   <div className="flex justify-between">
//                     <Button type="button" variant="outline" onClick={() => setStep(2)}>Back</Button>
//                     <Button type="submit">Next Step <ChevronRight className="w-4 h-4 ml-1" /></Button>
//                   </div>
//                 </form>
//               </Form>
//             )}

//             {step === 4 && (
//               <form onSubmit={handleDocumentsNext} className="space-y-6">
//                 <h3 className="text-xl font-serif font-bold text-primary border-b pb-2">Upload Documents</h3>
//                 <div className="space-y-4">
//                   <div>
//                     <Label htmlFor="photo">Passport Size Photograph (JPG/PNG, max 50KB)</Label>
//                     <Input id="photo" type="file" accept="image/*" required className="cursor-pointer" />
//                   </div>
//                   <div>
//                     <Label htmlFor="signature">Signature (JPG/PNG, max 30KB)</Label>
//                     <Input id="signature" type="file" accept="image/*" required className="cursor-pointer" />
//                   </div>
//                   <div>
//                     <Label htmlFor="marksheet">Qualifying Exam Marksheet (PDF, max 500KB)</Label>
//                     <Input id="marksheet" type="file" accept=".pdf" required className="cursor-pointer" />
//                   </div>
//                 </div>
//                 <div className="flex justify-between">
//                   <Button type="button" variant="outline" onClick={() => setStep(3)}>Back</Button>
//                   <Button type="submit">Preview <ChevronRight className="w-4 h-4 ml-1" /></Button>
//                 </div>
//               </form>
//             )}

//             {step === 5 && (
//               <div className="space-y-6">
//                 <h3 className="text-xl font-serif font-bold text-primary border-b pb-2">Preview Application</h3>
                
//                 <div className="grid md:grid-cols-2 gap-6 bg-muted/20 p-4 rounded-lg border">
//                   <div>
//                     <h4 className="font-bold text-sm text-muted-foreground mb-2 uppercase">Personal Details</h4>
//                     <div className="space-y-1 text-sm">
//                       <p><span className="font-medium">Name:</span> {formData.name}</p>
//                       <p><span className="font-medium">DOB:</span> {formData.dob}</p>
//                       <p><span className="font-medium">Gender:</span> {formData.gender}</p>
//                       <p><span className="font-medium">Email:</span> {formData.email}</p>
//                       <p><span className="font-medium">Mobile:</span> {formData.mobile}</p>
//                       <p><span className="font-medium">Address:</span> {formData.address}</p>
//                     </div>
//                   </div>
//                   <div>
//                     <h4 className="font-bold text-sm text-muted-foreground mb-2 uppercase">Academic & Course</h4>
//                     <div className="space-y-1 text-sm">
//                       <p><span className="font-medium">Degree:</span> {formData.degree}</p>
//                       <p><span className="font-medium">University:</span> {formData.university} ({formData.year})</p>
//                       <p><span className="font-medium">Percentage:</span> {formData.percentage}</p>
//                       <p><span className="font-medium">Test Paper:</span> {formData.branch}</p>
//                       <p><span className="font-medium">Exam City:</span> {formData.examCity}</p>
//                     </div>
//                   </div>
//                   <div className="md:col-span-2">
//                     <h4 className="font-bold text-sm text-muted-foreground mb-2 uppercase">Uploaded Documents</h4>
//                     <div className="flex gap-4 text-sm">
//                       <div className="bg-background px-3 py-1.5 rounded border text-primary flex items-center gap-1"><Upload className="w-3 h-3"/> {formData.photo}</div>
//                       <div className="bg-background px-3 py-1.5 rounded border text-primary flex items-center gap-1"><Upload className="w-3 h-3"/> {formData.signature}</div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-2 bg-secondary/10 p-3 rounded text-sm text-secondary-foreground">
//                   <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
//                   <p>I hereby declare that all the information provided is true to the best of my knowledge. I understand that my application will be rejected if any information is found incorrect.</p>
//                 </div>

//                 <div className="flex justify-between pt-4">
//                   <Button type="button" variant="outline" onClick={() => setStep(4)}>Edit Details</Button>
//                   <Button onClick={submitFinal} className="bg-secondary text-secondary-foreground hover:bg-secondary/90">Final Submit</Button>
//                 </div>
//               </div>
//             )}
//           </CardContent>
//         </Card>
//       </div>

//       <AlertDialog open={showSuccess} onOpenChange={setShowSuccess}>
//         <AlertDialogContent>
//           <AlertDialogHeader>
//             <AlertDialogTitle className="flex items-center gap-2 text-green-600">
//               <CheckCircle2 className="w-6 h-6" /> Application Submitted
//             </AlertDialogTitle>
//             <AlertDialogDescription className="text-base pt-2">
//               Your application has been successfully submitted.
//               <div className="bg-muted p-4 rounded-md mt-4 text-center">
//                 <p className="text-sm mb-1 text-muted-foreground">Application Number</p>
//                 <p className="text-2xl font-mono font-bold text-primary">{appNumber}</p>
//               </div>
//               <p className="mt-4 text-sm">Please save this number for future reference. You can now proceed to pay the application fee.</p>
//             </AlertDialogDescription>
//           </AlertDialogHeader>
//           <AlertDialogFooter>
//             <AlertDialogAction onClick={() => setLocation("/")}>Go to Home</AlertDialogAction>
//           </AlertDialogFooter>
//         </AlertDialogContent>
//       </AlertDialog>

//     </SiteLayout>
//   );
// }








import SiteLayout from "@/components/layout/SiteLayout";
import PageBanner from "@/components/layout/PageBanner";

export default function ApplicationForm() {
  return (
    <SiteLayout>
      <PageBanner
        title="Application Form"
        crumbs={[{ label: "Application Form" }]}
      />

      <div className="container mx-auto max-w-7xl py-12 px-4">
        <PageBox title="TG ECET - 2026 APPLICATION FORM">
          <p className="mb-4">
            <span className="text-red-600 font-bold">NOTE :</span>{" "}
            In case you have not paid the fee yet, please visit this page{" "}
            <span className="text-blue-700">(Click Here)</span> and pay the fee first.
          </p>

          <div className="grid md:grid-cols-4 gap-4">
            <Input
              label="Payment Reference ID *"
              placeholder="Enter Payment Reference ID"
            />

            <Input
              label="Qualifying Examination Hall Ticket No. *"
              placeholder="Enter Qualifying Examination Hall Ticket"
            />

            <Input
              label="Mobile Number *"
              placeholder="Enter Mobile Number"
            />

            <Input
              label="Date of Birth * (dd/mm/yyyy)"
              placeholder="Select Date of Birth"
            />
          </div>

          <div className="text-center mt-6">
            <button className="bg-green-600 text-white px-8 py-3 rounded-md hover:bg-green-700">
              Proceed to Fill Application
            </button>
          </div>

        </PageBox>
      </div>

    </SiteLayout>
  );
}


function PageBox({
  title,
  children
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border border-gray-300 bg-[#f8fbf8] shadow-sm min-h-[260px]">
      <h2 className="bg-[#4b3f8f] text-white font-bold text-xl px-4 py-2">
        {title}
      </h2>

      <div className="p-6">
        {children}
      </div>
    </div>
  );
}


function Input({
  label,
  placeholder
}: {
  label: string;
  placeholder: string;
}) {
  return (
    <div>
      <label className="font-semibold block mb-2">
        {label}
      </label>

      <input
        className="w-full border border-gray-300 rounded-md px-4 py-3"
        placeholder={placeholder}
      />
    </div>
  );
}