import {
  LayoutDashboard,
  FilePlus,
  Briefcase,
  LogOut,
  SquareUser,
  NotebookPen,
} from "lucide-react";
//import { signOut } from "next-auth/react";
// interface BrandNavInterface {
//   label: string;
//   path: string;
//   icon: React.ReactNode;
// }
export const RouteLink = [
  { label: "Dashboard", path: "/vendor", icon: <LayoutDashboard /> },
  { label: "Add Job", path: "/vendor/createTask", icon: <FilePlus /> },
  { label: "Jobs", path: "/vendor/jobs", icon: <Briefcase /> },
];

export const AdminRouteLink = [
  { label: "Dashboard", path: "/admin", icon: <LayoutDashboard /> },
  { label: "View user", path: "/admin/users", icon: <FilePlus /> },
  { label: "Jobs", path: "/admin/jobs", icon: <Briefcase /> },
  { label: "Creat blog", path: "/admin/blog", icon: <NotebookPen /> },
];

// export const BrandSupLink = [
//   { label: "Profile", path: "/vendor/account", icon: <SquareUser /> },
//   { label: "Logout", path: signOut, icon: <LogOut /> },
// ];

// export const AdminSupLink = [
//   { label: "Profile", path: "/admin/view_user", icon: <SquareUser /> },
//   { label: "Logout", path: signOut, icon: <LogOut /> },
// ];
