"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AdminRouteLink } from "@/lib/routeLink";
import NavItem from "../NavItem";

const AdminSideBar = () => {
  return (
    <div className="relative w-full">
      <div className="w-[90%] mx-auto mt-[4rem] lg:mt-[7rem] flex flex-col">
        {AdminRouteLink.map((routUrl, i) => (
          <NavItem
            key={i}
            label={routUrl.label}
            routPath={routUrl.path}
            icon={routUrl.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default AdminSideBar;
