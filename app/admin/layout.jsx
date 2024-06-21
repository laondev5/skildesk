"use client";
import React, { useState } from "react";
// import BrandSideBar from "../../../components/brandComponents/BrandSidebar";
// import BrandNavbar from "../../../components/brandComponents/BrandNavbar";
import AdminNavbar from "@/components/adminComponent/AdminNavbar";
import AdminSideBar from "@/components/adminComponent/AdminSidebar";

// interface MyComponentState {
//   mobileOpen: boolean;
// }
export default function AboutLayout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <html lang="en">
      <body className="w-full bg-gray-50">
        <AdminNavbar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
        <div className="flex relative">
          {/* desktop */}
          <div className=" hidden lg:flex w-[20%] fixed top-0 left-0 h-screen bg-gray-950 ">
            <AdminSideBar />
          </div>
          {/* mobile */}
          <div
            className={
              mobileOpen
                ? "w-[70%] flex lg:hidden fixed top-0 left-0 z-10 h-screen bg-gray-950  transition-all ease-in-out duration-300"
                : "hidden"
            }
          >
            <AdminSideBar />
          </div>
          <div className="w-[100%] flex bg-gray-50  ">
            <div className="w-[20%] hidden lg:block"></div>
            <div className="w-[100%] lg:w-[80%] py-4">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
