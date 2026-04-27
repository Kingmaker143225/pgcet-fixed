import { useState } from "react";
import { useLocation } from "wouter";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LogIn } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const loginSchema = z.object({
  username: z.string().min(3, "Username is required"),
  password: z.string().min(4, "Password is required"),
});

type LoginForm = z.infer<typeof loginSchema>;

export default function Login() {
  const [, setLocation] = useLocation();
  const [activeTab, setActiveTab] = useState("student");

  const form = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: { username: "", password: "" },
  });

  const onSubmit = (data: LoginForm) => {
    // In a real app, we'd authenticate here.
    if (activeTab === "student") {
      setLocation("/student-dashboard");
    } else {
      setLocation("/admin-dashboard");
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-muted/30 p-4 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-[40vh] bg-primary skew-y-[-5deg] origin-top-left -z-10 opacity-90 shadow-xl"></div>
      
      <div className="w-full max-w-md">
        <div className="text-center mb-8 text-white">
          <h1 className="text-4xl font-serif font-bold drop-shadow-md mb-2">TG ECET-2026</h1>
          <p className="text-white/80 font-medium">Official Examination Portal</p>
        </div>

        <Card className="shadow-2xl border-none overflow-hidden">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="bg-muted px-6 pt-6">
              <TabsList className="grid w-full grid-cols-2 mb-0 rounded-b-none h-12 bg-background/50">
                <TabsTrigger value="student" className="data-[state=active]:bg-background data-[state=active]:shadow-sm rounded-b-none">Student Login</TabsTrigger>
                <TabsTrigger value="admin" className="data-[state=active]:bg-background data-[state=active]:shadow-sm rounded-b-none">Admin Login</TabsTrigger>
              </TabsList>
            </div>
            
            <CardContent className="p-8 pt-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <div className="text-center mb-6">
                    <h2 className="text-xl font-bold text-primary">
                      {activeTab === "student" ? "Welcome Back" : "System Administration"}
                    </h2>
                    <p className="text-sm text-muted-foreground mt-1">
                      {activeTab === "student" ? "Sign in to access your application and hall ticket" : "Sign in to manage portal settings and data"}
                    </p>
                  </div>

                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{activeTab === "student" ? "Registration No. / Email" : "Admin ID"}</FormLabel>
                        <FormControl>
                          <Input placeholder={activeTab === "student" ? "e.g. PGCET2026..." : "admin@pgcet.ts"} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex items-center justify-between">
                          <FormLabel>Password</FormLabel>
                          <a href="#" onClick={(e) => e.preventDefault()} className="text-xs font-semibold text-secondary hover:underline">
                            Forgot password?
                          </a>
                        </div>
                        <FormControl>
                          <Input type="password" placeholder="••••••••" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full h-12 text-base font-bold mt-2 gap-2">
                    <LogIn className="w-5 h-5" /> Sign In
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Tabs>
        </Card>
        
        <div className="text-center mt-8 text-sm text-muted-foreground">
          <p>© 2026 Telangana State Council of Higher Education.</p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}