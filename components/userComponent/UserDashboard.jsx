"use client";
import React from "react";
import { Card, CardDescription, CardHeader } from "../ui/card";
import UserChart from "./UserChart";

const UserDashboard = ({ applicant }) => {
  const pending = applicant.filter((item) => item.status === "pending");
  const approved = applicant.filter((item) => item.status === "approved");
  const rejected = applicant.filter((item) => item.status === "rejected");
  //console.log(pending, approved);
  return (
    <div className="w-full py-3">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-12 px-8 ">
        <Card>
          <CardHeader>
            <h2 className="text-2xl font-bold text-red-600">
              Job Application Rejected
            </h2>
          </CardHeader>
          <div className=" my-2 p-10 border rounded-full w-8 h-8 flex ml-4 justify-center items-center text-4xl font-semibold text-gray-800">
            {rejected?.length}
          </div>
          <CardDescription className="px-4 py-2">
            View all your applied jobs and track their status.
          </CardDescription>
        </Card>
        <Card>
          <CardHeader>
            <h2 className="text-2xl font-bold text-orange-600">
              Total Pending Jobs
            </h2>
          </CardHeader>
          <div className=" my-2 p-10 border rounded-full w-8 h-8 flex ml-4 justify-center items-center text-4xl font-semibold text-gray-800">
            {pending?.length}
          </div>
          <CardDescription className="px-4 py-2">
            View all your applied jobs and track their status.
          </CardDescription>
        </Card>
        <Card>
          <CardHeader>
            <h2 className="text-2xl font-bold text-green-600">
              Total Approved Jobs
            </h2>
          </CardHeader>
          <div className=" my-2 p-10 border rounded-full w-8 h-8 flex ml-4 justify-center items-center text-4xl font-semibold text-gray-800">
            {approved?.length}
          </div>
          <CardDescription className="px-4 py-2">
            View all your applied jobs and track their status.
          </CardDescription>
        </Card>
      </div>

      <div>
        <UserChart />
      </div>
    </div>
  );
};

export default UserDashboard;
