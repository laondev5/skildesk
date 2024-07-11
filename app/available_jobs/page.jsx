import React from "react";
import { getAllJobs } from "../action/getAllJobs";
import Container from "@/components/Container";
import Link from "next/link";
import AvailableJobs from "@/components/AvailableJobs";
import Navbar from "@/components/Navbar";
import Home from "@/components/userComponent/Home";
const page = async () => {
  const jobs = await getAllJobs();
  //console.log(jobs);
  return (
    <div>
      <Navbar />
      <Container>
        <Home jobs={jobs} />
      </Container>
    </div>
  );
};

export default page;
