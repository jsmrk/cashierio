import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LogInForm from "@/app/auth/forms/LogInForm";
import SignUpForm from "@/app/auth/forms/SignUpForm";

const Auth = () => {
  return (
    <Tabs defaultValue="login" className="w-[30rem]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="login">Log-In</TabsTrigger>
        <TabsTrigger value="signup">Sign-up</TabsTrigger>
      </TabsList>
      <TabsContent value="login">
        <LogInForm />
      </TabsContent>
      <TabsContent value="signup">
        <SignUpForm />
      </TabsContent>
    </Tabs>
  );
};

export default Auth;
