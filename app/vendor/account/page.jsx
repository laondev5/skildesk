import React from "react";
import { getUserData } from "@/app/action/getUserData";

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import AdminAccount from "@/components/adminComponent/AdminAccount";
//import ImageUpload from "@/components/userComponent/ApplyJob";
const page = async () => {
  const session = await getServerSession(authOptions);
  const userData = await getUserData(session?.user?.id);
  //console.log(userData);

  return (
    <div>
      <AdminAccount userData={userData} />
    </div>
  );
};

export default page;
