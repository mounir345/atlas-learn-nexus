
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LogIn, Mail, GithubIcon, LinkedinIcon } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Separator } from '@/components/ui/separator';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { useToast } from "@/hooks/use-toast";

const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters" }),
});

const Login = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [showResetDialog, setShowResetDialog] = useState(false);
  const [resetEmail, setResetEmail] = useState("");

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof loginSchema>) => {
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log("Login attempt:", values);
      toast({
        title: "Login Successful",
        description: "Welcome back to ATLAS LEARN!",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Login Failed",
        description: "Invalid email or password. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = async (provider: string) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log(`Login with ${provider}`);
      toast({
        title: "Login Successful",
        description: `Welcome back to ATLAS LEARN via ${provider}!`,
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Login Failed",
        description: `Could not login with ${provider}. Please try again.`,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log("Password reset for:", resetEmail);
      toast({
        title: "Reset Link Sent",
        description: "Please check your email for the password reset link.",
      });
      setShowResetDialog(false);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Reset Failed",
        description: "Could not send reset link. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-atlas-blue/10 to-atlas-gold/10">
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
            Sign in to your account
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Access your courses, labs, and certification progress
          </p>
        </div>
        
        <Card className="border-0 shadow-lg">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl flex items-center gap-2">
              <LogIn className="h-5 w-5" /> Login
            </CardTitle>
            <CardDescription>
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  disabled={isLoading} 
                  className="w-full bg-atlas-blue hover:bg-atlas-darkblue"
                >
                  {isLoading ? "Signing in..." : "Sign in"}
                </Button>
                
                <div className="text-sm text-right">
                  <button 
                    type="button"
                    onClick={() => setShowResetDialog(true)}
                    className="text-atlas-blue hover:underline hover:text-atlas-darkblue transition-all font-medium"
                  >
                    Forgot your password?
                  </button>
                </div>
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
                onClick={() => handleSocialLogin("Google")}
                disabled={isLoading}
                className="w-full border-gray-300 hover:bg-gray-50 flex items-center justify-center gap-2"
              >
                <GithubIcon className="h-4 w-4" />
                <span>Sign in with Google</span>
              </Button>
              
              <Button 
                variant="outline" 
                onClick={() => handleSocialLogin("Microsoft")}
                disabled={isLoading}
                className="w-full border-gray-300 hover:bg-gray-50 flex items-center justify-center gap-2"
              >
                <LinkedinIcon className="h-4 w-4" />
                <span>Sign in with Microsoft</span>
              </Button>
              
              <Button 
                variant="outline" 
                onClick={() => handleSocialLogin("Email Magic Link")}
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
              Don't have an account?{" "}
              <Link to="/signup" className="text-atlas-blue hover:text-atlas-darkblue font-medium">
                Create one now
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
      
      {/* Password Reset Dialog */}
      <Dialog open={showResetDialog} onOpenChange={setShowResetDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Reset your password</DialogTitle>
            <DialogDescription>
              Enter your email address and we'll send you a link to reset your password.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handlePasswordReset} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="resetEmail" className="text-sm font-medium">
                Email address
              </label>
              <Input 
                id="resetEmail" 
                type="email" 
                value={resetEmail}
                onChange={(e) => setResetEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full"
                required
              />
            </div>
            <div className="flex justify-end space-x-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => setShowResetDialog(false)}
                disabled={isLoading}
              >
                Cancel
              </Button>
              <Button 
                type="submit"
                disabled={isLoading || !resetEmail}
              >
                {isLoading ? "Sending..." : "Send Reset Link"}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Login;
