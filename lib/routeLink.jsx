import {
  LayoutDashboard,
  FilePlus,
  Briefcase,
  LogOut,
  SquareUser,
  NotebookPen,
  Send,
  Target,
  MessageCircleWarning,
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
  { label: "Applicants", path: "/admin/applicant", icon: <Briefcase /> },
  { label: "Create blog", path: "/admin/blog", icon: <NotebookPen /> },
  {
    label: "Newsletter Email",
    path: "/admin/newsletter",
    icon: <NotebookPen />,
  },
];

export const UserRouteLink = [
  { label: "Dashboard", path: "/user", icon: <LayoutDashboard /> },
  { label: " Find Work", path: "/user/work", icon: <FilePlus /> },
  { label: "My Jobs", path: "/user/jobs", icon: <Briefcase /> },
  { label: "My Activity", path: "/user/activity", icon: <Target /> },
  { label: " Messages", path: "/user/message", icon: <Send /> },
  { label: "Reports", path: "/user/report", icon: <MessageCircleWarning /> },
];

// export const BrandSupLink = [
//   { label: "Profile", path: "/vendor/account", icon: <SquareUser /> },
//   { label: "Logout", path: signOut, icon: <LogOut /> },
// ];

// export const AdminSupLink = [
//   { label: "Profile", path: "/admin/view_user", icon: <SquareUser /> },
//   { label: "Logout", path: signOut, icon: <LogOut /> },
// ];
