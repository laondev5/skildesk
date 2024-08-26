import React from "react";
import { getServerSession } from "next-auth/next";
// import { authOptions } from "@/app/api/auth/route";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getApplicant } from "@/app/action/getApplicant";
import MyApplication from "@/components/userComponent/MyApplication";

const page = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    console.log("no user session found");
  } else {
    //console.log(session);
  }
  const applicant = await getApplicant(session.user.id);
  //console.log(applicant);

  return (
    <div>
      <MyApplication applicant={applicant} />
    </div>
  );
};

export default page;
