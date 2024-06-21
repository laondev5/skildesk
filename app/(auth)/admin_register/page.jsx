import React from "react";

import BrandRegisterForm from "@/components/BrandRegisterForm";
import { Toaster, toast } from "sonner";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Toaster position="bottom-right" expand={false} richColors />
      <div className="flex-1 flex justify-center items-center">
        <div className="w-[90%] lg:w-[60%]">
          <BrandRegisterForm role="ADMIN" />
        </div>
      </div>
      {/* <div
        className="flex-1 hidden lg:flex w-full h-[100] bg-cover  bg-center bg-no-repeat relative"
        style={{
          backgroundImage: "url('/register.svg')",
        }}
      ></div> */}
    </div>
  );
};

export default Login;
