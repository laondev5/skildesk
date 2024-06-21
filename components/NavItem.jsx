import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, FilePlus } from "lucide-react";

const NavItem = ({ label, routPath, icon }) => {
  const pathname = usePathname();
  //   const isActive = pathname === routPath;
  console.log(pathname, routPath);
  return (
    <div
      key={1}
      className={`my-2 text-gray-400 font-normal flex space-x-3 items-start rounded-md p-2 hover:bg-gray-200 hover:text-white text-md ${
        pathname === routPath && "bg-gray-400 shadow-sm text-white"
      }`}
    >
      {icon}
      <Link href={routPath}>
        <h1>{label}</h1>
      </Link>
    </div>
  );
};

export default NavItem;
