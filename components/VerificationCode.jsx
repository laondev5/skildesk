"use client";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "sonner";
import { InfinitySpin } from "react-loader-spinner";

const VerificationCode = ({ userId }) => {
  const [isLoading, setIsLoading] = useState(false);
  //console.log(userId);
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
    //console.log(data);
    if (!watch("otp")) {
      toast.error("Please enter the OTP");
      return;
    }
    const otpData = { ...data, id: userId };
    //console.log(otpData);
    try {
      const response = await fetch(`/api/verify-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ otpData }),
      });
      const result = await response.json();
      if (response.ok) {
        //console.log("OTP verified successfully:", result);
        setIsLoading(false);
        toast.success("OTP verified successfully");
        router.push(`/reset-password/${userId}`);
        return result;
      } else {
        console.error("Error verifying OTP:", result);
        toast.error("Failed to verify OTP");
        return result;
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      toast.error("Failed to verify OTP");
    }
  };

  return (
    <div className="w-[90%] lg:w-[40%] py-8 px-12 rounded-md shadow-md flex flex-col items-center gap-4">
      <h2 className="text-center text-2xl text-blue-950 font-bold">
        Please insert the OTP sent to you email
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex gap-4 items-center flex-col"
      >
        <div>
          <Controller
            name="otp"
            control={control}
            defaultValue=""
            render={({ field: { onChange, onBlur, value } }) => (
              <div>
                <InputOTP
                  type="text"
                  id="otp"
                  name="otp"
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  maxLength={6}
                >
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                  </InputOTPGroup>
                  {/* <InputOTPSeparator /> */}
                  <InputOTPGroup>
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
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
            "Verify and Continue"
          )}
        </Button>
      </form>
    </div>
  );
};

export default VerificationCode;
