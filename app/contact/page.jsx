import React from "react";
import ContactForm from "@/components/ContactForm";
import Navbar from "@/components/Navbar";
import ContactUsPage from "@/components/ContactUsPage";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <div>
      <Navbar />
      {/* <ContactForm /> */}
      <ContactUsPage />
      <Footer />
    </div>
  );
};

export default page;
