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

export default function NewsLetter() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 10000); // 3 seconds delay

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return (
    <>
      {isOpen ? (
        <div className="fixed top-0 left-0 bg-gray-500/5 w-full h-full z-50">
          <div className="flex justify-center items-center w-full h-[100%]">
            <div className="w-[55%] h-[30rem] relative  flex justify-center items-center">
              <div
                onClick={() => setIsOpen(false)}
                className="absolute top-[6rem] right-2  lg:top-[8rem] lg:right-[10rem]"
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
                    Stay up to date with the latest news, updates, and exclusive
                    offers.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <Label htmlFor="email" className="sr-only">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="w-full"
                        required
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
