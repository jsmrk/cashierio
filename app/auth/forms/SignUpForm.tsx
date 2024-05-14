"use client";

import React from "react";
import { Button } from "../../../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Input } from "../../../components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../components/ui/form";
import { ThreeDots } from "react-loader-spinner";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "../../../components/ui/use-toast";
import { z } from "zod";
import { signUpWithEmailAndPassword } from "../actions";
import { SignUpSchema } from "../schema";

const SignUpForm = () => {
  type SignUpFormFields = z.infer<typeof SignUpSchema>;

  const form = useForm<SignUpFormFields>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      email: "",
      password: "",
      confirm: "",
    },
  });

  const signup = async (data: SignUpFormFields) => {
    const errorMessage = await signUpWithEmailAndPassword(data);

    if (errorMessage) {
      toast({
        title: "Error!",
        variant: "destructive",
        description: errorMessage,
      });
    } else {
      toast({
        title: "Success!",
        description: "Succesfully Sign Up",
      });
    }
  };

  return (
    <Card className="p-11 mx-auto">
      <CardHeader className="mb-5">
        <CardTitle className="font-extrabold text-5xl text-center">
          Cashierio
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(signup)}
            className="w-full space-y-6"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex gap-3 items-center ">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter email address"
                      {...field}
                      type="email"
                      onChange={field.onChange}
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
                      placeholder="Enter Password"
                      {...field}
                      type="password"
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirm"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Confirm Password"
                      {...field}
                      type="password"
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full flex gap-2 text-white">
              {form.formState.isSubmitting === true ? (
                <div>
                  <ThreeDots
                    visible={true}
                    height="80"
                    width="50"
                    color="#fff"
                    radius="9"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                  />
                </div>
              ) : (
                "Sign Up"
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default SignUpForm;
