import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NewAbout from "@/components/NewAbout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const AboutUs = () => {
  return (
    <>
      <Navbar />

      <NewAbout />

      <Footer />
    </>
  );
};

export default AboutUs;
