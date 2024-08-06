"use client";
import React from "react";
import { useState } from "react";
import JobInfor from "./JobInfor";
import NewJobDetails from "./NewJobDetails";
import JobApplication from "./JobApplication";
import ImageUpload from "./ApplyJob";

const JobHome = ({ jobData, userData }) => {
  console.log(jobData);
  const [isOpen, setIsOpen] = useState(false);
  const [isApplicationFormOpen, setIsApplicationFormOpen] = useState(false);
  return (
    <div className="w-full flex flex-col lg:flex-row gap-8 items-center">
      <div className="w-[25%] ">
        <JobInfor jobData={jobData} userData={userData} />
      </div>
      <div className="w-[70%] ">
        <div className="flex items-center space-x-4 cursor-pointer">
          <div
            onClick={() => setIsOpen(false)}
            className={
              isOpen
                ? "text-gray-800 py-3 px-6 font-semibold"
                : "text-gray-800 py-3 px-6 font-semibold border border-blue-700"
            }
          >
            Job Details
          </div>
          <div
            onClick={() => setIsOpen(true)}
            className={
              isOpen
                ? "text-gray-800 py-3 px-6 font-semibold border border-b-blue-700"
                : "text-gray-800 py-3 px-6 font-semibold"
            }
          >
            Application form
          </div>
        </div>
        {isOpen ? (
          <div>
            {isApplicationFormOpen ? (
              <ImageUpload />
            ) : (
              <JobApplication
                jobData={jobData}
                userData={userData}
                isApplicationFormOpen={isApplicationFormOpen}
                setIsApplicationFormOpen={setIsApplicationFormOpen}
              />
            )}
          </div>
        ) : (
          <div>
            <NewJobDetails jobData={jobData} setIsOpen={setIsOpen} />
          </div>
        )}
      </div>
    </div>
  );
};

export default JobHome;
