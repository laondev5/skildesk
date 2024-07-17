"use client";
import Head from "next/head";
import React from "react";
import SearchFilter from "./SearchFilter";
import JobList from "./JobListing";
import JobDetail from "./JobDetails";
import { useState } from "react";

const Home = ({ jobs }) => {
  // console.log(jobs);
  const [jobId, setJobId] = useState("");
  return (
    <div className="flex w-full bg-gray-50">
      <Head>
        <title>HuntJobs</title>
      </Head>

      <div className="flex flex-col w-full">
        <SearchFilter />
        <div className="flex  overflow-x-scroll lg:overflow-hidden">
          {/* //<JobList /> */}
          <JobList jobs={jobs} setJobId={setJobId} />
          <JobDetail jobs={jobs} jobId={jobId} />
        </div>
      </div>
    </div>
  );
};

export default Home;
