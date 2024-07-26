import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Otp from "@/components/Otp";
import React from "react";

const page = ({ params }) => {
  return (
    <div>
      <Navbar />
      <div className="w-full h-[70vh] flex justify-center items-center">
        <Otp userId={params.id} />
      </div>
      <Footer />
    </div>
  );
};

export default page;
