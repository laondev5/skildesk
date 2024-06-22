"use client";
import Image from "next/image";
import React from "react";
//import { useSession } from "next-auth/react";
import { Button } from "./ui/button";
import { updateUserStatus } from "@/app/action/updateUserStatus";
import { useRouter } from "next/navigation";

const verificationStatus = {
  verifird: true,
};
const UserProfile = ({ userData, session }) => {
  //console.log(userData);
  //const { data: session } = useSession();
  //console.log(session?.user);
  const Router = useRouter();
  const handleApprove = async () => {
    await updateUserStatus(userData?.id, verificationStatus.verified);
    Router.push("/admin");
  };
  // const handleReject = async () => {
  //   await updateJobStatus(jobData?.id, status.rejected);
  //   Router.push("/admin");
  // };
  return (
    <div className="w-full relative">
      {session?.user?.role === "ADMIN" ? (
        <div className="w-full  flex justify-end items-center">
          <div className="w-full lg:w-[20%] py-4 mb-4 px-2 flex justify-end items-center">
            {/* <Button onClick={handleReject} className="bg-red-700 text-red-50">
              Reject
            </Button> */}
            <Button
              onClick={handleApprove}
              className="bg-green-700 text-green-50"
            >
              Verify
            </Button>
          </div>
        </div>
      ) : (
        <div className="hidden"></div>
      )}
      <div className="w-full bg-gray-50 flex flex-col lg:flex-row justify-between ">
        <div className="w-[90%] lg:w-[35%] border rounded-sm bg-white shadow-sm">
          <div className="w-[90%] mx-auto flex flex-col ">
            <div className="w-[8rem] h-[8rem] rounded-full border mb-4 ">
              <Image
                src={userData?.image}
                alt="job logo"
                width={90}
                height={90}
                className="w-[8rem] h-[8rem] rounded-full"
              />
            </div>
            {userData?.adminVerified === false ? (
              <div className="w-[3rem ] py-2 bg-red-100 text-white rounded-sm font-semibold pl-4">
                Unverified
              </div>
            ) : (
              <div className="w-[3rem ] py-2 bg-green-100 text-white rounded-sm font-semibold pl-4">
                Verified
              </div>
            )}

            <div className="my-2 pl-4 border ">
              <p className="text-gray-500 text-sm font-semibold my-1">
                {userData?.name}
              </p>
              <p className="text-gray-500 text-sm font-semibold my-1">
                {userData?.email}
              </p>
            </div>
            <div className="my-2 pl-4 border ">
              <p className="text-gray-500 text-sm font-semibold my-1">
                Brand name:{" "}
                <span className="font-semibold text-orange-600">
                  {userData?.industry}
                </span>
              </p>
              <p className="text-gray-500 text-sm font-semibold my-1">
                Industry:{" "}
                <span className="font-semibold text-blue-950">
                  {userData?.industry}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="w-[90%] lg:w-[60%] border rounded-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 justify-evenly gap-8 w-[100%]">
            <div className="w-[3rem ] py-2 bg-gray-100  rounded-sm font-semibold pl-4">
              Verified
            </div>
            <div className="w-[3rem ] py-2 bg-gray-100  rounded-sm font-semibold pl-4">
              Verified
            </div>
            <div className="w-[3rem ] py-2 bg-gray-100  rounded-sm font-semibold pl-4">
              Verified
            </div>
            <div className="w-[3rem ] py-2 bg-gray-100  rounded-sm font-semibold pl-4">
              Verified
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
