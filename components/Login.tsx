import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

const Login = () => {
  return (
    <Card className="w-[35rem] p-11 mx-auto">
      <CardHeader className="mb-5">
        <CardTitle>Log In</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        <Label>Email</Label>
        <Input></Input>
        <Label>Password</Label>
        <Input></Input>
        <Button className="mt-10">Log In</Button>
      </CardContent>
    </Card>
  );
};

export default Login;
