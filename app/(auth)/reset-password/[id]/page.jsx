import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ResetPassword from "@/components/ResetPassword";
import React from "react";

const page = ({ params }) => {
  return (
    <div>
      <Navbar />
      <div className="w-full h-[70vh] flex justify-center items-center">
        <ResetPassword userId={params?.id} />
      </div>
      <Footer />
    </div>
  );
};

export default page;
