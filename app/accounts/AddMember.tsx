"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React from "react";
import { useForm } from "react-hook-form";
import { ThreeDots } from "react-loader-spinner";
import { SignUpSchema } from "../auth/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectValue,
  SelectTrigger,
} from "@/components/ui/select";
import { MemberFormSchema } from "./memberSchema";
import { createMember } from "./actions";
import { toast } from "@/components/ui/use-toast";

const SignUpMember = () => {
  type SignUpMemberFormFields = z.infer<typeof MemberFormSchema>;
  const roles = ["admin", "user"];
  const status = ["active", "resigned"];

  const form = useForm<SignUpMemberFormFields>({
    resolver: zodResolver(MemberFormSchema),
    defaultValues: {
      name: "",
      role: "user",
      status: "active",
      email: "",
    },
  });

  const onSubmit = async (data: SignUpMemberFormFields) => {
    const errorMessage = await createMember(data);

    document.getElementById("create-trigger")?.click();

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
      form.reset();
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add a Member</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[30rem]">
        <DialogHeader className="mb-5">
          <DialogTitle>Add a member</DialogTitle>
          <DialogDescription>
            This user will not have access to admin functionalities
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-6"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="email@gmail.com"
                      type="email"
                      {...field}
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
                      placeholder="******"
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
                      placeholder="******"
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
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Complete Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Jess Mark Baguio The Great"
                      type="text"
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-2 gap-5">
              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Role</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a role" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {roles.map((role, index) => {
                          return (
                            <SelectItem value={role} key={index}>
                              {role}
                            </SelectItem>
                          );
                        })}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Status</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select user status" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {status.map((status, index) => {
                          return (
                            <SelectItem value={status} key={index}>
                              {status}
                            </SelectItem>
                          );
                        })}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit" className="ml-auto flex gap-2 text-white">
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
                "Sign Up this Member"
              )}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default SignUpMember;
