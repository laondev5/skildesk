"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Controller, useForm } from "react-hook-form";

export default function NewsLetter() {
  const [isOpen, setIsOpen] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 10000); // 3 seconds delay

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);
  const onSubmit = async (data) => {
    console.log(data);
    //send data to server
    const response = await fetch("/api/newsletter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data }),
    });
    if (response) {
      setIsOpen(false);
    }
    //const result = await response.json();
  };

  return (
    <>
      {isOpen ? (
        <div className="fixed top-0 left-0 bg-gray-500/5 w-full h-full z-50">
          <div className="flex justify-center items-center w-full h-[100%]">
            <div className="w-[20rem] h-[17rem] rounded-md relative  flex justify-center items-center">
              <div
                onClick={() => setIsOpen(false)}
                className="absolute top-2 right-2 "
              >
                <Button size="icon">
                  <X />
                </Button>
              </div>
              <Card className="w-full max-w-md mx-auto">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">
                    Subscribe to our newsletter
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Be the first to know when a new job is posted
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className=" my-2">
                      <Controller
                        name="email"
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
                              placeholder="Email..."
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                          </div>
                        )}
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Subscribe
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      ) : (
        <div className="hidden"></div>
      )}
    </>
  );
}
