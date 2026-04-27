import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Printer, Download, Search } from "lucide-react";
import SiteLayout from "@/components/layout/SiteLayout";
import PageBanner from "@/components/layout/PageBanner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";

const formSchema = z.object({
  regno: z.string().min(5, "Registration number is required"),
  dob: z.string().min(1, "Date of birth is required"),
  mobile: z.string().length(10, "Mobile must be 10 digits"),
});

export default function HallTicket() {
  const [showTicket, setShowTicket] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { regno: "", dob: "", mobile: "" }
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    toast.success("Hall Ticket retrieved successfully.");
    setShowTicket(true);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <SiteLayout>
      <PageBanner 
        title="Download Hall Ticket" 
        crumbs={[{ label: "Hall Ticket" }]} 
      />
      
      <div className="container mx-auto max-w-4xl py-12 px-4">
        
        <div className="no-print mb-12">
          <Card className="max-w-xl mx-auto shadow-md border-muted">
            <CardHeader className="bg-muted/30 border-b">
              <CardTitle className="text-xl font-serif text-primary">Search Hall Ticket</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="regno"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Registration Number</FormLabel>
                        <FormControl><Input placeholder="e.g. PGCET20261234" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="dob"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Date of Birth</FormLabel>
                        <FormControl><Input type="date" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="mobile"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mobile Number</FormLabel>
                        <FormControl><Input placeholder="10 digit mobile number" maxLength={10} {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full mt-2 h-12 text-base font-bold bg-secondary text-secondary-foreground hover:bg-secondary/90">
                    <Search className="w-5 h-5 mr-2" /> Get Hall Ticket
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>

        {showTicket && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex justify-end gap-4 no-print">
              <Button onClick={handlePrint} variant="outline" className="gap-2">
                <Printer className="w-4 h-4" /> Print Ticket
              </Button>
              <Button onClick={handlePrint} className="gap-2">
                <Download className="w-4 h-4" /> Download PDF
              </Button>
            </div>
            
            {/* Printable Hall Ticket Card */}
            <div className="print-area bg-white border-2 border-gray-300 p-8 max-w-4xl mx-auto shadow-xl">
              {/* Header */}
              <div className="text-center border-b-2 border-primary pb-4 mb-6">
                <h1 className="text-2xl font-serif font-bold text-primary uppercase tracking-wider">TS PGCET - 2026</h1>
                <h2 className="text-xl font-bold mt-1">HALL TICKET</h2>
                <p className="text-sm text-muted-foreground mt-1">Telangana State Council of Higher Education</p>
              </div>

              <div className="flex flex-col md:flex-row gap-8">
                {/* Left Col - Details */}
                <div className="flex-1 space-y-6">
                  <div>
                    <h3 className="font-bold text-sm text-primary uppercase border-b pb-1 mb-3">Candidate Details</h3>
                    <div className="grid grid-cols-3 gap-2 text-sm">
                      <div className="font-semibold text-muted-foreground">Candidate Name:</div>
                      <div className="col-span-2 font-bold">RAHUL SHARMA</div>
                      
                      <div className="font-semibold text-muted-foreground">Registration No:</div>
                      <div className="col-span-2">{form.getValues().regno.toUpperCase() || 'PGCET20261234'}</div>
                      
                      <div className="font-semibold text-muted-foreground">Date of Birth:</div>
                      <div className="col-span-2">{form.getValues().dob || '15-08-2002'}</div>
                      
                      <div className="font-semibold text-muted-foreground">Category:</div>
                      <div className="col-span-2">BC-B</div>
                      
                      <div className="font-semibold text-muted-foreground">Gender:</div>
                      <div className="col-span-2">Male</div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-sm text-primary uppercase border-b pb-1 mb-3">Examination Details</h3>
                    <div className="grid grid-cols-3 gap-2 text-sm">
                      <div className="font-semibold text-muted-foreground">Test Paper:</div>
                      <div className="col-span-2 font-bold text-secondary">CSE - Computer Science & Engineering</div>
                      
                      <div className="font-semibold text-muted-foreground">Date & Time:</div>
                      <div className="col-span-2 font-bold">15 May 2026 — 10:00 AM to 1:00 PM</div>
                      
                      <div className="font-semibold text-muted-foreground">Test Center:</div>
                      <div className="col-span-2">
                        <p className="font-bold">JNTU Hyderabad - Block A</p>
                        <p className="text-xs text-muted-foreground mt-1">Kukatpally, Hyderabad, Telangana 500085</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Col - Photo & Sig */}
                <div className="w-48 flex flex-col gap-4 flex-shrink-0 items-center">
                  <div className="w-32 h-40 border-2 border-gray-300 bg-gray-50 flex items-center justify-center text-gray-400 text-sm">
                    Photo
                  </div>
                  <div className="w-40 h-12 border-2 border-gray-300 bg-gray-50 flex items-center justify-center text-gray-400 text-xs">
                    Candidate Signature
                  </div>
                  <div className="w-40 h-12 border-2 border-gray-300 bg-gray-50 flex items-center justify-center text-gray-400 text-xs mt-6">
                    Invigilator Signature
                  </div>
                </div>
              </div>

              {/* Instructions */}
              <div className="mt-8 border-t-2 border-gray-200 pt-6">
                <h3 className="font-bold text-sm uppercase mb-3 text-red-700">Important Instructions to the Candidate</h3>
                <ul className="text-xs space-y-2 list-disc pl-5 text-gray-700">
                  <li>The candidate must carry a printed copy of this Hall Ticket along with a valid original Photo ID proof (Aadhar/PAN/Voter ID) to the examination center.</li>
                  <li>Candidates should report to the examination center at least 90 minutes before the commencement of the exam.</li>
                  <li>No candidate will be allowed to enter the examination hall after the commencement of the exam (10:00 AM).</li>
                  <li>Electronic devices, calculators, smartwatches, and study materials are strictly prohibited inside the examination hall.</li>
                  <li>The candidate must preserve this Hall Ticket carefully for future counseling and admission processes.</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </SiteLayout>
  );
}