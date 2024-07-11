import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useState, useEffect } from 'react';

const JobDetail = ({jobs, jobId}) => {
    console.log(jobId, jobs)

    const [job, setJob] = useState(null);

  useEffect(() => {
    // Find job by id
    const jobDetail = jobs.find((job) => job.id === jobId);
    setJob(jobDetail);
  }, [jobId]);

   console.log(job) 
  return (
    <div className="flex flex-col w-[40%] p-6 bg-white">
         <div  className="w=[5rem] h-[5rem] rounded-md">
            <Image src={job.coverImage} alt="cover image" width={100} height={100}  className="w=[5rem] h-[5rem] rounded-md" />
        </div>
      <div className="mb-4">
        <h2 className="text-xl font-bold">{job.title}</h2>
        <Link href={job.webUrl}>
         <p className="text-gray-600">{job.brandName}</p>
        </Link>
       
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-bold">Job Details</h3>
        <div className="w-[95%] mx-auto flex flex-col">
            {/* <div className="w-[90%] h-[12rem] bg-pink-100 border my-4">
              
            </div> */}

            <div
              className="w-[90%] ProseMirror whitespace-pre-line "
              dangerouslySetInnerHTML={{ __html: job?.Description }}
            />
          </div>
      </div>
      
      <button className="mt-4 p-2 bg-blue-600 text-white rounded-md">Apply Now</button>
    </div>
  );
};

export default JobDetail;
