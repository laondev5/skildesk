"use client";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Tiptap from "../Tiptap";
import { Label } from "../ui/label";
import { Controller, useForm } from "react-hook-form";
import { Toaster, toast } from "sonner";
import { Button } from "../ui/button";
import { InfinitySpin } from "react-loader-spinner";

const CreateTerms = () => {
  const [des, setDes] = useState("");
  const { data: session } = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();

  const handleContent = (input) => {
    setDes(input);
  };

  const createTerms = async (data) => {
    try {
      const response = await fetch("/api/terms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data }),
      });

      const result = await response.json();
      if (response.ok) {
        // console.log("Terms & Condition created successfully:", result);
        toast.success("Terms & Condition created successfully");

        return result;
      } else {
        // console.error("Error creating Terms & Condition", result);
        toast.error("Failed to create Terms & Condition");

        return result;
      }
    } catch (error) {
      // console.error("Error creating Terms & Condition", error);
      toast.error("Failed to create Terms & Condition");
    }
  };
  const onSubmit = async (data) => {
    const content = { ...data, description: des, userId: session?.user?.id };
    //console.log(content);
    setIsLoading(true);
    try {
      const res = await createTerms(content);
      if (!res) {
        // console.log("error");
      }
      setIsLoading(false);
    } catch (error) {
      // console.log(error);
      setIsLoading(false);
    }
  };
  return (
    <>
      <Toaster position="bottom-right" expand={false} richColors />
      {isLoading && (
        <div className="absolute top-0 left-0 w-[100%] h-screen bg-gray-500/5">
          <div className="w-[100%] h-[100%] flex justify-center items-center">
            <div className="flex justify-center items-center w-[10rem] h-[10rem]  rounded-md ">
              <InfinitySpin
                height="100"
                width="100"
                radius="9"
                color="green"
                ariaLabel="loading"
                wrapperStyle
                wrapperClass
              />
            </div>
          </div>
        </div>
      )}
      <div className="flex w-full">
        <div className="flex flex-col justify-center w-full px-6">
          <div className="w-[100%] bg-blue-950 py-3 px-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              Create a new blog post
            </h2>
          </div>
          {/* Create Blog Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 md:grid-cols-2 justify-evenly gap-8 w-[100%]"
          >
            <div className=" my-2">
              <Controller
                name="description"
                control={control}
                defaultValue=""
                render={({ field: { onChange, onBlur, value, name } }) => (
                  <div>
                    <Label
                      htmlFor="message"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Description
                    </Label>
                    <Tiptap
                      des={des}
                      description={name}
                      onChange={(newContent) => handleContent(newContent)}
                    />
                  </div>
                )}
              />
            </div>

            <div className="my-2">
              <Button variant="default" size="lg">
                Create Terms & Condition
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateTerms;
