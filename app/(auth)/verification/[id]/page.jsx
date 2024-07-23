import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import VerificationCode from "@/components/VerificationCode";
import React from "react";

const page = ({ params }) => {
  return (
    <>
      <Navbar />
      <div className="w-full h-[70vh] flex justify-center items-center">
        <VerificationCode userId={params?.id} />
      </div>
      <Footer />
    </>
  );
};

export default page;
