import BrandProfilForm from "@/components/brandComponents/BrandProfilForm";
import Image from "next/image";
import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { Toaster, toast } from "sonner";
const page = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }
  return (
    <div className="w-[95%] mx-auto">
      <Toaster position="bottom-right" expand={false} richColors />
      <div className=" w-[90%] mx-auto bg-white border my-4 rounded-md shadow-sm px-10 py-5">
        <div className="flex space-x-4 items-center">
          <div className="">
            <p className="text-md font-semibold text-gray-400">
              We see you there, peeking at profiles! Unlock your own awesome
              profile and show everyone what makes you tick, We are curious!
            </p>
          </div>
          <div className=" w-[35%] lg:w-[30%]">
            <Image
              src="/completDashboard.svg"
              alt="complete"
              width={100}
              height={100}
              className="w-[7rem]"
            />
          </div>
        </div>
      </div>
      <div className="w-[90%]  mx-auto">
        <BrandProfilForm />
      </div>
    </div>
  );
};

export default page;
