"use client";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { InfinitySpin } from "react-loader-spinner";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "sonner";

const ResetPassword = ({ userId }) => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const onSubmit = async (data) => {
    setIsLoading(true);
    const passwordData = { ...data, id: userId };
    try {
      const response = await fetch("/api/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ passwordData }),
      });
      const result = await response.json();
      //console.log(result);
      //const id = result.id;
      if (response.ok) {
        toast.success("Password reset successfully");
        router.push(`/login`);
      }
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  return (
    <div className="w-[50%] rounded-md shadow-md py-8 px-12">
      <Toaster position="bottom-right" expand={false} richColors />
      <h2 className="text-2xl font-bold text-blue-950 text-center">
        Please enter your new password here
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" my-2">
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field: { onChange, onBlur, value } }) => (
              <div>
                <Label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Password
                </Label>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  placeholder="Enter your password..."
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            )}
          />
        </div>
        <div className=" my-2">
          <Controller
            name="confirmPassword"
            control={control}
            defaultValue=""
            render={({ field: { onChange, onBlur, value } }) => (
              <div>
                <Label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Confirm Password
                </Label>
                <Input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  placeholder="Confirm Password..."
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            )}
          />
        </div>
        <Button>
          {isLoading ? (
            <InfinitySpin
              height="100"
              width="100"
              radius="9"
              color="green"
              ariaLabel="loading"
              wrapperStyle
              wrapperClass
            />
          ) : (
            "Change password"
          )}
        </Button>
      </form>
    </div>
  );
};

export default ResetPassword;
