"use client";

import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useRouter } from "next/navigation";
import { LockKeyhole, Mail } from "lucide-react";

const Login = () => {
  const route = useRouter();

  return (
    <Card className="w-[30rem] p-11 mx-auto">
      <CardHeader className="mb-16">
        <CardTitle className="font-extrabold text-5xl text-center">
          Cashierio
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        <div className="flex items-center gap-5">
          <Mail />
          <Input type="email" placeholder="Enter Email"></Input>
        </div>
        <div className="flex items-center gap-5">
          <LockKeyhole />
          <Input type="password" placeholder="Enter Password"></Input>
        </div>
        <Button className="mt-5" onClick={() => route.push("/dashboard")}>
          Log In
        </Button>
      </CardContent>
    </Card>
  );
};

export default Login;
