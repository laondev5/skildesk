"use client";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { InfinitySpin } from "react-loader-spinner";

const ForgetPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/forget-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data }),
      });
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  return (
    <div className="w-[50%] rounded-md shadow-md py-8 px-12">
      <h2 className="text-2xl font-bold text-blue-950 text-center">
        Please enter you email here
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" my-2">
          <Controller
            name="webUrl"
            control={control}
            defaultValue=""
            render={({ field: { onChange, onBlur, value } }) => (
              <div>
                <Label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  placeholder="Enter you email..."
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
            "Submit Email"
          )}
        </Button>
      </form>
    </div>
  );
};

export default ForgetPassword;
