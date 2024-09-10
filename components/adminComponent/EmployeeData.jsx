"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  UserCircle,
  Briefcase,
  Clock,
  Globe,
  FileSpreadsheet,
  GraduationCap,
} from "lucide-react";

export default function EmployeeData() {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "John Doe",
      role: "Software Engineer",
      type: "Full-time",
      details: "Experienced in React and Node.js",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Designer",
      type: "Part-time",
      details: "Specializes in UI/UX design",
    },
    {
      id: 3,
      name: "Mike Johnson",
      role: "Project Manager",
      type: "Remote",
      details: "Certified PMP with 5 years of experience",
    },
    {
      id: 4,
      name: "Sarah Brown",
      role: "Marketing Specialist",
      type: "Contract",
      details: "Expert in digital marketing campaigns",
    },
    {
      id: 5,
      name: "Tom Wilson",
      role: "Junior Developer",
      type: "Intern",
      details: "Currently pursuing Computer Science degree",
    },
  ]);

  const getTypeIcon = (type) => {
    switch (type) {
      case "Full-time":
        return <Briefcase className="h-4 w-4" />;
      case "Part-time":
        return <Clock className="h-4 w-4" />;
      case "Remote":
        return <Globe className="h-4 w-4" />;
      case "Contract":
        return <FileSpreadsheet className="h-4 w-4" />;
      case "Intern":
        return <GraduationCap className="h-4 w-4" />;
      default:
        return <UserCircle className="h-4 w-4" />;
    }
  };

  const handleTerminate = (id) => {
    setEmployees(employees.filter((employee) => employee.id !== id));
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-5">Employee Management</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {employees.map((employee) => (
            <TableRow key={employee.id}>
              <TableCell>{employee.name}</TableCell>
              <TableCell>{employee.role}</TableCell>
              <TableCell className="flex items-center gap-2">
                {getTypeIcon(employee.type)}
                {employee.type}
              </TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline">View More</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>{employee.name}</DialogTitle>
                      </DialogHeader>
                      <div>
                        <p>
                          <strong>Role:</strong> {employee.role}
                        </p>
                        <p>
                          <strong>Type:</strong> {employee.type}
                        </p>
                        <p>
                          <strong>Details:</strong> {employee.details}
                        </p>
                      </div>
                    </DialogContent>
                  </Dialog>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="destructive">Terminate</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently
                          terminate {employee.name}s employment.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() => handleTerminate(employee.id)}
                        >
                          Terminate
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
