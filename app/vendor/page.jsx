import CompleteRegistrationButton from "@/components/brandComponents/CompleteRegistrationButton";
import Card from "@/components/Card";
import Image from "next/image";
import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getUserData } from "@/app/action/getUserData";
import { getJobs } from "@/app/action/getJobs";
import Empty from "@/components/Empty";
import BrandContentTable from "@/components/brandComponents/BrandContentTable";
import BrandDataTable from "@/components/brandComponents/BrandDataTable";
const page = async () => {
  const session = await getServerSession(authOptions);
  //  const session = await getServerSession(authOptions);

  const res = await getUserData(session.user.id);
  //console.log(res?.status);
  const jobs = await getJobs(session.user.id);
  //console.log(jobs);
  return (
    <div className="p-2 ">
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
      {res?.status === "incomplete" ? (
        <CompleteRegistrationButton />
      ) : (
        <div className="hidden"></div>
      )}
      <div className="w-full bg-white rounded-sm">
        {jobs.length === 0 ? <Empty /> : <BrandDataTable jobs={jobs} />}
      </div>
    </div>
  );
};

export default page;
