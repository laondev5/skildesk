"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormSchema, RegistrationFormValues } from "@/lib/FormSchema";
import { useForm } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import Link from "next/link";
import { Circles } from "react-loader-spinner";
//import { useToast } from "@/components/ui/use-toast";
import { Toaster, toast } from "sonner";
import { useSession } from "next-auth/react";

const BrandRegisterForm = ({ role }) => {
  const [isChecked, setIsChecked] = useState(false);
  const Router = useRouter();
  const [status, setStatus] = useState("waiting");
  const [isLoading, setIsLoading] = useState(false);
  const { data: session } = useSession();
  // const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      fullname: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (values) => {
    if (isChecked == false) {
      toast.error("You must agree to the terms and conditions");
      return;
    }
    setIsLoading(true);
    values.role = role;
    //console.log(values);
    const response = await fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullname: values.fullname,
        email: values.email,
        status: status,
        password: values.password,
        role: role,
        status: "incomplete",
      }),
    });

    // const info = await response.json();
    // console.log(info);
    if (response.ok) {
      setIsLoading(false);
      toast.success("Registration successful");
      if (session?.user) {
        Router.push("/admin");
      }
      Router.push("/login");
    } else {
      setIsLoading(false);
      toast.error("Failed to Register user");
    }
  };
  return (
    <div className="w-[80%] shadow-md rounded-lg h-[33rem] p-6">
      <Toaster position="bottom-right" expand={false} richColors />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {role === "USER"
              ? "Create Job seeker Account"
              : "Create Recruiter Account"}
          </h2>
          <div className="space-y-2">
            <FormField
              control={form.control}
              name="fullname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>fullname</FormLabel>
                  <FormControl>
                    <Input placeholder="john doe" {...field} />
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
                    <Input placeholder="mail@example.com" {...field} />
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
                      placeholder="Enter your password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Re-Enter your password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Re-Enter your password"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {session?.user ? (
            <div className="hidden"></div>
          ) : (
            <div className=" pt-4 flex justify-between items-center z-50">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  type="checkbox"
                  onChange={() => setIsChecked(true)}
                />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Accept terms and conditions{" "}
                  <span className="text-blue-700 text-lg underline">
                    <Link href="/terms">Read</Link>
                  </span>
                </label>
              </div>
              <p className="text-center text-sm text-gray-600 mt-2">
                If you don&apos;t have an account, please&nbsp;
                <Link className="text-blue-500 hover:underline" href="/login">
                  Sign in
                </Link>
              </p>
            </div>
          )}
          <Button className="w-full mt-6" type="submit">
            {isLoading ? (
              <div>
                <Circles
                  visible={true}
                  height="80"
                  width="80"
                  color="#ffffff"
                  ariaLabel="progress-bar-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                />
              </div>
            ) : (
              <h2> Sign up</h2>
            )}
          </Button>
        </form>

        {/* <GoogleSignInButton>Sign up with Google</GoogleSignInButton> */}
      </Form>
    </div>
  );
};

export default BrandRegisterForm;
