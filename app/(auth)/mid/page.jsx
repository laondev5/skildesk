import Footer from "@/components/Footer";
import Mid from "@/components/Mid";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="w-ful">
      <Navbar />
      <Mid />
      <Footer />
    </div>
  );
};

export default page;
