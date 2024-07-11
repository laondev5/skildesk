import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import ImageUpload from "@/components/userComponent/ApplyJob";

const page = async ({ params }) => {
  const session = await getServerSession(authOptions);
  console.log(params);
  console.log(session);

  return (
    <div>
      <ImageUpload jobId={params.jobId} user={session?.user?.id} />{" "}
    </div>
  );
};

export default page;
