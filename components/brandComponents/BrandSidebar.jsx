"use client";
import Link from "next/link";
import React, { useState } from "react";
import { RouteLink } from "@/lib/routeLink";
import NavItem from "../NavItem";
//import { BrandSupLink } from "@/lib/routeLink";

const BrandSideBar = () => {
  return (
    <div className="relative w-full">
      <div className="w-[90%] mx-auto mt-[4rem] lg:mt-[7rem] flex flex-col">
        {RouteLink.map((routUrl, i) => (
          <NavItem
            key={i}
            label={routUrl.label}
            routPath={routUrl.path}
            icon={routUrl.icon}
          />
        ))}
      </div>
      <div className="absolute bottom-0 left-4">
        <div className="flex flex-col gap-y-2"></div>
      </div>
    </div>
  );
};

export default BrandSideBar;
