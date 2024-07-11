"use client";
import React, { useState } from "react";
//import BrandSideBar from "../../../components/brandComponents/BrandSidebar";
import BrandSideBar from "@/components/brandComponents/BrandSidebar";
//import BrandNavbar from "../../../components/brandComponents/BrandNavbar";
import BrandNavbar from "@/components/brandComponents/BrandNavbar";
import { ChatBox } from "@/components/ChatBox";
import UserSideBar from "@/components/userComponent/UserSideBar";

// interface MyComponentState {
//   mobileOpen: boolean;
// }
export default function AboutLayout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <html lang="en">
      <body className="w-full bg-gray-50">
        <BrandNavbar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
        <div className="flex relative">
          {/* desktop */}
          <div className=" hidden lg:flex w-[20%] fixed top-0 left-0 h-screen bg-white border border-r-2">
            <UserSideBar />
          </div>
          {/* mobile */}
          <div
            className={
              mobileOpen
                ? "w-[70%] flex lg:hidden fixed top-0 left-0 z-10 h-screen bg-white border border-r-2 transition-all ease-in-out duration-300"
                : "hidden"
            }
          >
            <UserSideBar />
          </div>
          <div className="w-[100%] flex bg-gray-50  ">
            <div className="w-[20%] hidden lg:block"></div>
            <div className="w-[100%] lg:w-[80%] py-4 relative">
              <div className="fixed bottom-6 right-5 rounded-full w-[4rem]  z-50 h-[4rem]">
                <ChatBox />
              </div>
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
