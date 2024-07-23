import Footer from "@/components/Footer";
import ForgetPassword from "@/components/ForgetPassword";
import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full flex justify-center items-center h-screen">
        <ForgetPassword />
      </div>
      <Footer />
    </div>
  );
};

export default page;
