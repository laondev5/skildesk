import CurrencySymbol from "@/lib/CurrencySymbol";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const JobInfor = ({ jobData, userData }) => {
  //console.log(jobData);
  //console.log(userData);
  return (
    <div className="w-full flex flex-col lg:flex-row items-center">
      <div className="w-[90%] lg:w-[100%] flex justify-center items-center mx-auto  rounded-md h-screen relative">
        {/* <div className="absolute top-0 right-0">
          {userData?.adminVerified === false ? (
            <div className="bg-red-400 text-white py-1 px-2">Not Verified</div>
          ) : (
            <div className="bg-green-400 text-white py-1 px-2">Verified</div>
          )}
        </div> */}

        <div className="w-[95%] mx-auto flex flex-col">
          <div className="w-[8rem] h-[8rem] rounded-lg border mb-4 relative">
            <Image
              src={jobData?.coverImage}
              alt="job logo"
              width={90}
              height={90}
              className="w-[8rem] h-[8rem] rounded-lg"
            />
          </div>
          <div className="w-[90%]  mx-auto flex flex-col ">
            <div className="my-2">
              <p className=" text-sm text-gray-600 ">Brand name :</p>
              <Link href={jobData?.webUrl ?? ""}>
                <h1 className="font-bold text-2xl text-blue-950">
                  {jobData?.brandName}
                </h1>
              </Link>
            </div>
            <div className="my-2">
              <p className=" text-sm text-gray-600 ">Job title :</p>
              <p className="font-semibold text-md text-gray-600 my-2">
                {jobData?.title}
              </p>
            </div>
            <div className="my-2">
              <p className=" text-sm text-gray-600 ">Industry :</p>
              <p className="font-semibold text-md text-gray-600 my-2">
                {jobData?.industry}
              </p>
            </div>
            <div className="my-2">
              <p className=" text-sm text-gray-600 ">Job type :</p>
              <p className="font-semibold text-md bg-orange-300 rounded-md text-white py-2 px-2  my-2">
                {jobData?.jobType}
              </p>
            </div>

            <div className="my-2">
              <p className=" text-sm text-gray-600 ">Country :</p>
              <p className="font-semibold text-md text-gray-600 my-2">
                {jobData?.country}
              </p>
            </div>

            <div className="my-2">
              <p className=" text-sm text-gray-600 ">Pay :</p>
              <p className="font-semibold text-md  my-2 p-2 bg-green-300 rounded-md text-white">
                <CurrencySymbol amount={jobData?.pay} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobInfor;
