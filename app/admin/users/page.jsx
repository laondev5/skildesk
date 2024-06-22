import AdminUserTable from "@/components/adminComponent/AdminUserTable";
import React from "react";
import { getAllUsers } from "@/app/action/getAllUsers";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
const page = async () => {
  const users = await getAllUsers();
  const session = await getServerSession(authOptions);
  console.log(users);
  return (
    <div>
      <AdminUserTable users={users} session={session} />
    </div>
  );
};

export default page;
