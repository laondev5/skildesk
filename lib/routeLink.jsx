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
  Dock,
  SquareUserRound,
  ScanEye,
  FileQuestion,
  Mail,
  MessageCircleMore,
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
  { label: "View user", path: "/admin/users", icon: <SquareUserRound /> },
  { label: "Create job", path: "/admin/jobs", icon: <FilePlus /> },
  { label: "Applicants", path: "/admin/applicant", icon: <Briefcase /> },
  { label: "Create blog", path: "/admin/blog", icon: <NotebookPen /> },
  { label: "View jobs", path: "/admin/view_job", icon: <ScanEye /> },
  { label: "Employees", path: "/admin/employee", icon: <MessageCircleMore /> },
  {
    label: "interview",
    path: "/admin/interview",
    icon: <FileQuestion />,
  },
  {
    label: "Newsletter Email",
    path: "/admin/newsletter",
    icon: <Mail />,
  },
  { label: "Message", path: "/admin/message", icon: <MessageCircleMore /> },
];

export const UserRouteLink = [
  { label: "Dashboard", path: "/user", icon: <LayoutDashboard /> },
  { label: " Find Work", path: "/available_jobs", icon: <FilePlus /> },
  { label: "My Jobs", path: "/user/jobs", icon: <Briefcase /> },
  // { label: "My Activity", path: "/user/activity", icon: <Target /> },
  { label: " Messages", path: "/user/message", icon: <Send /> },
  // { label: "Reports", path: "/user/report", icon: <MessageCircleWarning /> },
];

// export const BrandSupLink = [
//   { label: "Profile", path: "/vendor/account", icon: <SquareUser /> },
//   { label: "Logout", path: signOut, icon: <LogOut /> },
// ];

// export const AdminSupLink = [
//   { label: "Profile", path: "/admin/view_user", icon: <SquareUser /> },
//   { label: "Logout", path: signOut, icon: <LogOut /> },
// ];
