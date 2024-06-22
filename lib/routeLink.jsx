import { LayoutDashboard, FilePlus, Briefcase } from "lucide-react";
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
];
