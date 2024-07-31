import React from "react";
//import withAuthRoleRedirect from "@/lib/withAuthRoleRedirect";
import { getAllJobs } from "../action/getAllJobs";
import BrandDataTable from "@/components/brandComponents/BrandDataTable";
import Image from "next/image";
import Card from "@/components/Card";

const page = async () => {
  const jobs = await getAllJobs();
  //console.log(jobs);

  return (
    <div className="py-2">
      <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-3 gap-4">
        <Card>
          <div className="flex flex-col  w-full ">
            <div className="w-[4rem] h-[4rem] border rounded-sm flex justify-center items-center">
              <Image
                src="/approved.png"
                alt="approved"
                height={100}
                width={100}
                className="w-[3rem] h-[3rem]"
              />
            </div>
            <p className="text-md text-gray-300 py-1">
              Total number of approved jobs
            </p>
            <div className="mb-1">
              <h1 className="font-extrabold text-4xl">12345</h1>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex flex-col  w-full ">
            <div className="w-[4rem] h-[4rem] border rounded-sm flex justify-center items-center">
              <Image
                src="/pending.png"
                alt="pending"
                height={100}
                width={100}
                className="w-[3rem] h-[3rem]"
              />
            </div>
            <p className="text-md text-gray-300 py-1">
              Total number of pending jobs
            </p>
            <div className="mb-1">
              <h1 className="font-extrabold text-4xl">12345</h1>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex flex-col  w-full ">
            <div className="w-[4rem] h-[4rem] border rounded-sm flex justify-center items-center">
              <Image
                src="/rejected.png"
                alt="rejected"
                height={100}
                width={100}
                className="w-[3rem] h-[3rem]"
              />
            </div>
            <p className="text-md text-gray-300 py-1">
              Total number of rejected jobs
            </p>
            <div className="mb-1">
              <h1 className="font-extrabold text-4xl">12345</h1>
            </div>
          </div>
        </Card>
      </div>
      {/* <BrandDataTable /> */}
      <BrandDataTable jobs={jobs} />
    </div>
  );
};

export default page;
