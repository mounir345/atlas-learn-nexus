
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserPlus, Mail, GithubIcon, LinkedinIcon } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Separator } from '@/components/ui/separator';
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const signupSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters" }),
  agreeTerms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms and conditions",
  }),
});

const Signup = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      agreeTerms: false,
    },
  });

  const onSubmit = async (values: z.infer<typeof signupSchema>) => {
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log("Signup attempt:", values);
      toast({
        title: "Account Created",
        description: "Welcome to ATLAS LEARN! Your free trial has begun.",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Signup Failed",
        description: "Could not create your account. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialSignup = async (provider: string) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log(`Signup with ${provider}`);
      toast({
        title: "Account Created",
        description: `Welcome to ATLAS LEARN via ${provider}! Your free trial has begun.`,
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Signup Failed",
        description: `Could not create an account with ${provider}. Please try again.`,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-atlas-darkblue/10 via-atlas-blue/5 to-atlas-gold/10">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <Link to="/" className="inline-block">
            <img 
              src="/lovable-uploads/51f17e00-6640-4685-83e5-5d1514eb24ab.png"
              alt="ATLAS LEARN Logo"
              className="h-16 mx-auto mb-2"
            />
          </Link>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-atlas-darkblue">
            Start your free trial
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            No credit card required to get started
          </p>
        </div>
        
        <Card className="border-0 shadow-lg">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl flex items-center gap-2">
              <UserPlus className="h-5 w-5" /> Create an account
            </CardTitle>
            <CardDescription>
              Get access to courses, labs, and certification training
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="John Doe" 
                          {...field} 
                          disabled={isLoading}
                          className="bg-gray-50"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="you@example.com" 
                          {...field} 
                          disabled={isLoading}
                          className="bg-gray-50"
                        />
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
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input 
                          type="password" 
                          placeholder="••••••••" 
                          {...field} 
                          disabled={isLoading}
                          className="bg-gray-50"
                        />
                      </FormControl>
                      <FormMessage />
                      <p className="text-xs text-gray-500 mt-1">
                        Must be at least 8 characters with numbers and special characters
                      </p>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="agreeTerms"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-2 space-y-0">
                      <FormControl>
                        <Checkbox 
                          checked={field.value} 
                          onCheckedChange={field.onChange}
                          disabled={isLoading}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-sm">
                          I agree to the{" "}
                          <Link to="/terms" className="text-atlas-blue hover:underline">
                            Terms of Service
                          </Link>
                          {" "}and{" "}
                          <Link to="/privacy" className="text-atlas-blue hover:underline">
                            Privacy Policy
                          </Link>
                        </FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  disabled={isLoading} 
                  className="w-full bg-atlas-gold text-atlas-darkblue hover:bg-atlas-lightgold"
                >
                  {isLoading ? "Creating account..." : "Create account & start trial"}
                </Button>
              </form>
            </Form>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-300"></span>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 text-gray-500 bg-white">Or continue with</span>
              </div>
            </div>
            
            <div className="flex flex-col space-y-3">
              <Button 
                variant="outline" 
                onClick={() => handleSocialSignup("Google")}
                disabled={isLoading}
                className="w-full border-gray-300 hover:bg-gray-50 flex items-center justify-center gap-2"
              >
                <GithubIcon className="h-4 w-4" />
                <span>Sign up with Google</span>
              </Button>
              
              <Button 
                variant="outline" 
                onClick={() => handleSocialSignup("Microsoft")}
                disabled={isLoading}
                className="w-full border-gray-300 hover:bg-gray-50 flex items-center justify-center gap-2"
              >
                <LinkedinIcon className="h-4 w-4" />
                <span>Sign up with Microsoft</span>
              </Button>
              
              <Button 
                variant="outline" 
                onClick={() => handleSocialSignup("Email Magic Link")}
                disabled={isLoading}
                className="w-full border-gray-300 hover:bg-gray-50 flex items-center justify-center gap-2"
              >
                <Mail className="h-4 w-4" />
                <span>Send Magic Link</span>
              </Button>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-atlas-blue hover:text-atlas-darkblue font-medium">
                Sign in
              </Link>
            </p>
          </CardFooter>
        </Card>
        
        <div className="text-center text-sm text-gray-500">
          <p>
            Protected by ATLAS DEFENDERS
            <span className="mx-2">•</span>
            <Link to="/terms" className="hover:underline">
              Terms
            </Link>
            <span className="mx-2">•</span>
            <Link to="/privacy" className="hover:underline">
              Privacy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
