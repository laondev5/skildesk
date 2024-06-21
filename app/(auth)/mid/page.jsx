import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div
      className="w-full h-screen flex justify-center items-center"
      style={{
        backgroundImage: "url('/bg-mid.svg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-[70%] bg-white/90 shadow-sm rounded-md py-4 flex justify-center flex-col items-center">
        <div className="w-[80%] flex justify-center items-center">
          <Image
            src="/mid.svg"
            alt="mid"
            height={100}
            width={100}
            className="w-[30rem]"
          />
        </div>
        <div className="flex space-x-6 items-center py-10">
          <Button variant="outline">
            <Link href="/register-vendor">Sign up as Brand</Link>
          </Button>
          <Button variant="main">
            <Link href="/register">Sign up as User</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default page;
