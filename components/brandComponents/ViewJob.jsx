"use client";
import Image from "next/image";
import React, { useState } from "react";
import CurrencySymbol from "@/lib/CurrencySymbol";
import { updateJobStatus } from "@/app/action/updateJobStatus";
import { Button } from "../ui/button";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const status = {
  approved: "Approved",
  rejected: "Rejected",
  pending: "Pending",
};
//import getSymbolFromCurrency from "currency-symbol-map";
const ViewJob = ({ jobData }) => {
  console.log(jobData?.id);
  const [amount, setAmount] = useState("");
  const { data: session } = useSession();
  const Router = useRouter();

  const handleApprove = async () => {
    await updateJobStatus(jobData?.id, status.approved);
    Router.push("/admin");
  };
  const handleReject = async () => {
    await updateJobStatus(jobData?.id, status.rejected);
    Router.push("/admin");
  };
  //console.log(jobData);
  //const usdSymbol = getSymbolFromCurrency("USD");
  return (
    <div className="">
      {session?.user?.role === "ADMIN" ? (
        <div className="w-full bg-green-100 flex justify-end items-center">
          <div className="w-full lg:w-[20%] py-4 mb-4 px-2 flex justify-between items-center">
            <Button onClick={handleReject} className="bg-red-700 text-red-50">
              Reject
            </Button>
            <Button
              onClick={handleApprove}
              className="bg-green-700 text-green-50"
            >
              Approve
            </Button>
          </div>
        </div>
      ) : (
        <div className="hidden"></div>
      )}
      <div className="w-full flex flex-col lg:flex-row items-center">
        <div className="w-[90%] lg:w-[20%] flex justify-center items-center mx-auto  border bg-white rounded-md h-screen">
          <div className="w-[95%] mx-auto flex flex-col">
            <div className="w-[8rem] h-[8rem] rounded-full border mb-4 ">
              <Image
                src={jobData?.coverImage}
                alt="job logo"
                width={90}
                height={90}
                className="w-[8rem] h-[8rem] rounded-full"
              />
            </div>
            <div className="w-[90%]  mx-auto flex flex-col ">
              <div className="my-2">
                <p className=" text-sm text-gray-600 ">Brand name :</p>
                <h1 className="font-bold text-2xl text-blue-950">
                  {jobData?.brandName}
                </h1>
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
        <div className="w-[90%] lg:w-[75%] bg-white border rounded-md h-screen overflow-y-auto">
          <div className=" bg-blue-950">
            <div className=" px-4 py-3 text-white text-2xl font-semibold shadow-md">
              Job details
            </div>
          </div>
          <div className="w-[95%] mx-auto flex flex-col">
            {/* <div className="w-[90%] h-[12rem] bg-pink-100 border my-4">
              
            </div> */}

            <div
              className="w-[90%] ProseMirror whitespace-pre-line `"
              dangerouslySetInnerHTML={{ __html: jobData?.Description }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewJob;
