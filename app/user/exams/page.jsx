import React from "react";
//import { getSession } from "next-auth/react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import ApplicantExams from "@/components/userComponent/ApplicantExams";
import { getApplicantExams } from "@/app/action/getApplicantExams";
import { getApplicant } from "@/app/action/getApplicant";
import Empty from "@/components/Empty";

const page = async () => {
  //const session = getSession();
  const session = await getServerSession(authOptions);

  //console.log("user", session?.user?.id);
  const applicant = await getApplicant(session?.user?.id);
  const applicantId = applicant[0]?.id;
  //console.log("applicant_id", applicantId);
  const exams = await getApplicantExams(applicantId);
  //console.log(exams);

  return (
    <div>
      {exams ? (
        <ApplicantExams exams={exams} userId={session?.user?.id} />
      ) : (
        <div>
          <div className="w-full py-5 flex items-center justify-center">
            <h1 className="text-xl text-center font-bold">
              You have yet to be scheduled for an exam please check back later
            </h1>
          </div>
          <Empty />
        </div>
      )}
    </div>
  );
};

export default page;
