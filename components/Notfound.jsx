import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Notfound = () => {
  return (
    <div className="w-ful h-screen flex items-center justify-center">
      <div className="w-[70%] self-center">
        <div className="w-[80%]">
          <Image
            src="/404.svg"
            alt="mid"
            height={100}
            width={100}
            className="w-[30rem]"
          />
        </div>
        <div>
          <p className="mt-2 font-light text-center lg:text-left w-[100%] lg:w-[80%] ">
            Page not found
          </p>
        </div>
        <div className="flex space-x-6 items-center py-10">
          <Button variant="outline">
            <Link href="/">Go back to the home screen</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Notfound;
