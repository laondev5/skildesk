import React from "react";
import { UserRouteLink } from "@/lib/routeLink";
import NavItem from "../NavItem";

const UserSideBar = () => {
  return (
    <div className="w-full bg-white p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-blue-600">HuntJobs</h1>
      </div>
      <div className="w-[90%] mx-auto mt-[4rem] lg:mt-[7rem] flex flex-col">
        {UserRouteLink.map((routUrl, i) => (
          <NavItem
            key={i}
            label={routUrl.label}
            routPath={routUrl.path}
            icon={routUrl.icon}
          />
        ))}
      </div>
      {/* <div className="mt-8">
        <div className="flex items-center">
          <img src="/avatar.png" alt="User" className="w-10 h-10 rounded-full mr-4" />
          <span>Alexis Wolen</span>
        </div>
      </div> */}
    </div>
  );
};

export default UserSideBar;
