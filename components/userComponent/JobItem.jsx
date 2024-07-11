import Image from 'next/image';
import React from 'react';

const JobItem = ({ job, setJobId }) => {
    console.log(job)
  return (
    <div onClick={()=>setJobId(job.id)} className="flex justify-between items-center p-4 mb-4 bg-white rounded-md shadow hover:shadow-md">
        <div  className="w=[5rem] h-[5rem] rounded-md">
            <Image src={job.coverImage} alt="cover image" width={100} height={100}  className="w=[5rem] h-[5rem] rounded-md" />
        </div>
      <div>
        <h3 className="text-lg font-bold">{job.title}</h3>
        <p>{job.brandName}</p>
        <p className="text-gray-600">{job.city}</p>
        <p className="text-gray-600">{job.country} • {job.jobType} • {job.status} </p>
      </div>
      <div>
        <p className="text-blue-600 font-bold">{job.pay}</p>
      </div>
    </div>
  );
};

export default JobItem;
