import SiteLayout from "@/components/layout/SiteLayout";
import PageBanner from "@/components/layout/PageBanner";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  subject: z.string().min(5, "Subject is required"),
  message: z.string().min(10, "Message is too short"),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function Contact() {
  const form = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" }
  });

  const onSubmit = (data: ContactForm) => {
    toast.success("Message sent successfully. We will get back to you soon.");
    form.reset();
  };

  return (
    <SiteLayout>
      <PageBanner 
        title="Contact Us" 
        crumbs={[{ label: "Contact" }]} 
      />
      
      <div className="container mx-auto max-w-6xl py-12 px-4">
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { icon: MapPin, title: "Address", desc: "TSCHE Office, Masab Tank, Hyderabad - 500028" },
            { icon: Phone, title: "Phone", desc: "040-23146146\n040-23146147" },
            { icon: Mail, title: "Email", desc: "convener.pgcet@tsche.ac.in" },
            { icon: Clock, title: "Office Hours", desc: "Mon-Sat: 10:00 AM - 5:00 PM\n(Closed on Public Holidays)" }
          ].map((item, i) => (
            <Card key={i} className="bg-card text-center hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground whitespace-pre-line">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Map Placeholder */}
          <div className="relative w-full h-[500px] rounded-xl overflow-hidden border bg-muted/30">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center animate-pulse mb-2">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <span className="font-serif font-bold text-xl text-primary bg-background/80 px-4 py-1 rounded backdrop-blur-sm border">PGCET HQ</span>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-card shadow-lg border-muted">
            <CardContent className="p-8">
              <h2 className="text-2xl font-serif font-bold text-primary mb-6">Send us a message</h2>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl><Input placeholder="John Doe" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl><Input placeholder="john@example.com" type="email" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl><Input placeholder="Query regarding..." {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl><Textarea placeholder="How can we help you?" className="min-h-[120px]" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full h-12 text-base font-bold mt-4">Send Message</Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>

      </div>
    </SiteLayout>
  );
}