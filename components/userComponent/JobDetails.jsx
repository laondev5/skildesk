"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const JobDetail = ({ jobs, jobId }) => {
  //console.log(jobId, jobs);
  const defaulfJob = jobs[0];
  const [job, setJob] = useState({});
  const { data: session } = useSession({});
  const Router = useRouter();

  const handleClick = () => {
    if (session?.user?.role === "USER") {
      Router.push(`/user/${jobId}`);
    } else if (session?.user?.role === "ADMIN") {
      Router.push("/admin");
    } else if (session?.user?.role === "VENDOR") {
      Router.push("/vendor");
    } else {
      Router.push("/login");
    }
  };

  useEffect(() => {
    // Find job by id
    const jobDetail = jobs.find((job) => job.id === jobId);
    setJob(jobDetail);
  }, [jobId]);

  //console.log(job);
  return (
    <div className="flex flex-col w-[40%] p-6 bg-white">
      <div className="w=[5rem] h-[5rem] rounded-md">
        {job ? (
          <Image
            src={job.coverImage}
            alt="cover image"
            width={100}
            height={100}
            className="w=[5rem] h-[5rem] rounded-md"
          />
        ) : (
          <Image
            src={defaulfJob.coverImage}
            alt="cover image"
            width={100}
            height={100}
            className="w=[5rem] h-[5rem] rounded-md"
          />
        )}
      </div>
      {job ? (
        <div className="mb-4">
          <h2 className="text-xl font-bold">{job.title}</h2>

          <p className="text-gray-600">{job.brandName}</p>
        </div>
      ) : (
        <div className="mb-4">
          <h2 className="text-xl font-bold">{defaulfJob.title}</h2>

          <p className="text-gray-600">{defaulfJob.brandName}</p>
        </div>
      )}

      <div className="mb-4">
        <h3 className="text-lg font-bold">Job Details</h3>
        <div className="w-[95%] mx-auto flex flex-col">
          {/* <div className="w-[90%] h-[12rem] bg-pink-100 border my-4">
              
            </div> */}
          {job ? (
            <div
              className="w-[90%] ProseMirror whitespace-pre-line "
              dangerouslySetInnerHTML={{ __html: job?.Description }}
            />
          ) : (
            <div
              className="w-[90%] ProseMirror whitespace-pre-line "
              dangerouslySetInnerHTML={{ __html: defaulfJob?.Description }}
            />
          )}
        </div>
      </div>

      <button
        onClick={handleClick}
        className="mt-4 p-2 bg-blue-600 text-white rounded-md"
      >
        Apply Now
      </button>
    </div>
  );
};

export default JobDetail;
// {job ? ():()}
