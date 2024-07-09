import AdminUserTable from "@/components/adminComponent/AdminUserTable";
import React from "react";
import { getAllUsers } from "@/app/action/getAllUsers";

const page = async () => {
  const users = await getAllUsers();

  console.log(users);
  return (
    <div>
      <AdminUserTable users={users} />
    </div>
  );
};

export default page;
