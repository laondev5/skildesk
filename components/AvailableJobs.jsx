import Image from "next/image";
import Link from "next/link";
import React from "react";
import CurrencySymbol from "@/lib/CurrencySymbol";
import { Button } from "./ui/button";

const AvailableJobs = ({ jobs }) => {
  console.log(jobs);
  return (
    <div className="w-[90%] mx-auto flex flex-col justify-center items-center">
      {jobs.map((job, i) => (
        <Link
          key={i}
          href={{
            pathname: "/admin/view",
            query: {
              itemId: job.id,
            },
          }}
        >
          <div className="flex  items-center justify-between border shadow-sm rounded-md w-[60rem] p-3 my-3 ">
            <div className="flex gap-x-2 items-center">
              <div className="w-[2rem] h-[2rem] rounded-full">
                <Image
                  src={job?.coverImage}
                  alt="job logo"
                  width={90}
                  height={90}
                  className="w-[2rem] h-[2rem] rounded-full"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-lg font-bold text-blue-950">{job.title}</h2>
                <Link href={job.webUrl}>
                  <p className="text-md">{job.brandName}</p>
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="bg-green-200 p-2 text-md font-semibold text-white flex justify-center items-center rounded-md">
                <CurrencySymbol amount={job.pay} />
              </div>
              <Link
                key={i}
                href={{
                  pathname: "/admin/view",
                  query: {
                    itemId: job.id,
                  },
                }}
              >
                <Button>Apply</Button>
              </Link>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default AvailableJobs;
