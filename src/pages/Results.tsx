import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Printer, Award, Search } from "lucide-react";
import SiteLayout from "@/components/layout/SiteLayout";
import PageBanner from "@/components/layout/PageBanner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

const formSchema = z.object({
  htno: z.string().min(5, "Hall Ticket number is required"),
  dob: z.string().min(1, "Date of birth is required"),
});

export default function Results() {
  const [showResult, setShowResult] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { htno: "", dob: "" }
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    toast.success("Results retrieved successfully.");
    setShowResult(true);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <SiteLayout>
      <PageBanner 
        title="Check Your Results" 
        crumbs={[{ label: "Results" }]} 
      />
      
      <div className="container mx-auto max-w-4xl py-12 px-4">
        
        <div className="no-print mb-12">
          <Card className="max-w-xl mx-auto shadow-md border-muted">
            <CardHeader className="bg-muted/30 border-b">
              <CardTitle className="text-xl font-serif text-primary">Search Results</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="htno"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Hall Ticket Number</FormLabel>
                        <FormControl><Input placeholder="e.g. 261011425" {...field} /></FormControl>
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
                  <Button type="submit" className="w-full mt-2 h-12 text-base font-bold bg-secondary text-secondary-foreground hover:bg-secondary/90">
                    <Search className="w-5 h-5 mr-2" /> View Result
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>

        {showResult && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex justify-end no-print">
              <Button onClick={handlePrint} className="gap-2">
                <Printer className="w-4 h-4" /> Print Rank Card
              </Button>
            </div>
            
            {/* Printable Result Card */}
            <div className="print-area bg-white border border-gray-200 rounded-xl max-w-4xl mx-auto shadow-lg overflow-hidden">
              {/* Header */}
              <div className="bg-primary text-primary-foreground p-6 text-center relative">
                <div className="absolute inset-0 opacity-10 bg-[url('@/assets/pattern.png')] bg-cover mix-blend-overlay"></div>
                <Award className="w-12 h-12 mx-auto mb-2 opacity-90" />
                <h1 className="text-2xl font-serif font-bold uppercase tracking-wider relative z-10">TS PGCET - 2026</h1>
                <h2 className="text-lg font-medium text-primary-foreground/90 relative z-10">RANK CARD</h2>
              </div>

              <div className="p-8">
                {/* Top Info */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-6 border-b pb-6 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">RAHUL SHARMA</h3>
                    <p className="text-gray-600 font-medium">HT No: {form.getValues().htno || '261011425'}</p>
                    <p className="text-gray-500 text-sm mt-1">Test Paper: <span className="font-semibold text-gray-800">CSE - Computer Science & Engineering</span></p>
                  </div>
                  <div className="text-right flex flex-col items-end">
                    <div className="bg-green-100 text-green-800 px-4 py-1 rounded-full font-bold text-sm tracking-widest border border-green-200 mb-2 shadow-sm">
                      QUALIFIED
                    </div>
                    <div className="text-xs text-gray-500">Declared on: 05 Jun 2026</div>
                  </div>
                </div>

                {/* Performance */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="md:col-span-2">
                    <h4 className="font-bold text-sm uppercase text-gray-500 mb-3">Section-wise Marks</h4>
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-gray-50 border-y border-gray-200">
                          <th className="py-2 px-3 text-left font-semibold text-gray-600">Section</th>
                          <th className="py-2 px-3 text-right font-semibold text-gray-600 w-24">Max Marks</th>
                          <th className="py-2 px-3 text-right font-semibold text-gray-600 w-24">Secured</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        <tr>
                          <td className="py-3 px-3">Engineering Mathematics</td>
                          <td className="py-3 px-3 text-right text-gray-500">50</td>
                          <td className="py-3 px-3 text-right font-semibold">40</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-3">Analytical & Reasoning Ability</td>
                          <td className="py-3 px-3 text-right text-gray-500">50</td>
                          <td className="py-3 px-3 text-right font-semibold">38</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-3">Subject Paper (CSE)</td>
                          <td className="py-3 px-3 text-right text-gray-500">100</td>
                          <td className="py-3 px-3 text-right font-semibold">78</td>
                        </tr>
                        <tr className="bg-gray-50/50">
                          <td className="py-3 px-3 font-bold text-gray-900">Total Marks</td>
                          <td className="py-3 px-3 text-right font-bold text-gray-900">200</td>
                          <td className="py-3 px-3 text-right font-bold text-primary text-lg">156</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="flex flex-col gap-4">
                    <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg text-center flex-1 flex flex-col justify-center">
                      <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Percentile</p>
                      <p className="text-3xl font-bold text-gray-900">92.45</p>
                    </div>
                    <div className="bg-secondary/10 border border-secondary/20 p-4 rounded-lg text-center flex-1 flex flex-col justify-center">
                      <p className="text-sm font-semibold text-secondary/80 uppercase tracking-wider mb-1">All-India Rank</p>
                      <p className="text-4xl font-serif font-bold text-secondary">1247</p>
                    </div>
                  </div>
                </div>

                {/* Footer Notes */}
                <div className="border-t pt-4 text-xs text-gray-500 text-center">
                  <p>This is a computer generated document. The official rank card must be verified during counseling.</p>
                  <p className="mt-1">For any discrepancies, contact the TSCHE helpline immediately.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </SiteLayout>
  );
}