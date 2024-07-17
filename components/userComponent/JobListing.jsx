import React from "react";
import JobItem from "./JobItem";
import JobDetail from "./JobDetails";

const JobList = ({ jobs, setJobId }) => {
  //console.log(jobs)
  return (
    <div className="flex flex-col w-full p-6 bg-gray-50 overflow-auto">
      <div className="mb-4">
        <h2 className="text-xl font-bold">Jobs For You</h2>
      </div>
      <div className="flex"></div>
      <div>
        {jobs.map((job) => (
          <JobItem key={job.id} job={job} setJobId={setJobId} />
        ))}
      </div>
    </div>
  );
};

export default JobList;
