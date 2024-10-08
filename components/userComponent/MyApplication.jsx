"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  CheckCircle2,
  Clock,
  XCircle,
  AlertTriangle,
  ChevronRight,
  Briefcase,
  FileText,
  CalendarDays,
} from "lucide-react";

// Dummy data for job applications
const dummyApplications = [
  {
    id: "1",
    jobTitle: "Frontend Developer",
    company: "TechCorp",
    status: "In Progress",
    appliedDate: "2023-06-01",
    nextStep: "Technical Interview",
    progress: 60,
    exams: [
      { id: "1", title: "JavaScript Basics", score: 85, status: "Passed" },
      { id: "2", title: "React Fundamentals", score: 92, status: "Passed" },
    ],
  },
  {
    id: "2",
    jobTitle: "Backend Developer",
    company: "DataSystems Inc.",
    status: "Pending",
    appliedDate: "2023-06-05",
    nextStep: "Initial Screening",
    progress: 20,
    exams: [
      { id: "3", title: "Python Basics", score: null, status: "Pending" },
    ],
  },
  {
    id: "3",
    jobTitle: "Full Stack Developer",
    company: "WebSolutions",
    status: "Rejected",
    appliedDate: "2023-05-20",
    nextStep: null,
    progress: 100,
    exams: [
      { id: "1", title: "JavaScript Basics", score: 75, status: "Passed" },
      { id: "4", title: "Database Design", score: 60, status: "Failed" },
    ],
  },
  {
    id: "4",
    jobTitle: "UI/UX Designer",
    company: "CreativeTech",
    status: "Offer Received",
    appliedDate: "2023-05-15",
    nextStep: "Offer Acceptance",
    progress: 90,
    exams: [
      { id: "5", title: "Design Principles", score: 95, status: "Passed" },
      { id: "6", title: "Figma Skills", score: 88, status: "Passed" },
    ],
  },
];

// type Application = {
//   id: string
//   jobTitle: string
//   company: string
//   status: 'Pending' | 'In Progress' | 'Rejected' | 'Offer Received'
//   appliedDate: string
//   nextStep: string | null
//   progress: number
//   exams: Array<{
//     id: string
//     title: string
//     score: number | null
//     status: 'Pending' | 'Passed' | 'Failed'
//   }>
// }

export default function MyApplication({ applicant }) {
  const [selectedApplication, setSelectedApplication] = useState(null);

  const getStatusBadge = (status) => {
    switch (status) {
      case "Pending":
        return (
          <Badge variant="secondary">
            <Clock className="mr-1 h-3 w-3" /> Pending
          </Badge>
        );
      case "In Progress":
        return (
          <Badge variant="default">
            <AlertTriangle className="mr-1 h-3 w-3" /> In Progress
          </Badge>
        );
      case "Rejected":
        return (
          <Badge variant="destructive">
            <XCircle className="mr-1 h-3 w-3" /> Rejected
          </Badge>
        );
      case "Offer Received":
        return (
          <Badge variant="success">
            <CheckCircle2 className="mr-1 h-3 w-3" /> Offer Received
          </Badge>
        );
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Job Applications</h1>
      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Applications</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {dummyApplications.map((application) => (
              <Card key={application.id}>
                <CardHeader>
                  <CardTitle>{application.jobTitle}</CardTitle>
                  <CardDescription>{application.company}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-2">
                    {getStatusBadge(application.status)}
                    <span className="text-sm text-gray-500">
                      Applied: {application.appliedDate}
                    </span>
                  </div>
                  <Progress value={application.progress} className="mb-2" />
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">
                      Progress: {application.progress}%
                    </span>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setSelectedApplication(application)}
                        >
                          View Details <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[625px]">
                        <DialogHeader>
                          <DialogTitle>{application.jobTitle}</DialogTitle>
                          <DialogDescription>
                            {application.company}
                          </DialogDescription>
                        </DialogHeader>
                        <Tabs defaultValue="overview" className="w-full">
                          <TabsList className="grid w-full grid-cols-3">
                            <TabsTrigger value="overview">Overview</TabsTrigger>
                            <TabsTrigger value="exams">Exams</TabsTrigger>
                            <TabsTrigger value="timeline">Timeline</TabsTrigger>
                          </TabsList>
                          <TabsContent value="overview">
                            <div className="grid gap-4 py-4">
                              <div className="grid grid-cols-4 items-center gap-4">
                                <Briefcase className="h-4 w-4" />
                                <span className="col-span-3">
                                  {application.jobTitle}
                                </span>
                              </div>
                              <div className="grid grid-cols-4 items-center gap-4">
                                <FileText className="h-4 w-4" />
                                <span className="col-span-3">
                                  {application.status}
                                </span>
                              </div>
                              <div className="grid grid-cols-4 items-center gap-4">
                                <CalendarDays className="h-4 w-4" />
                                <span className="col-span-3">
                                  Applied: {application.appliedDate}
                                </span>
                              </div>
                              {application.nextStep && (
                                <div className="grid grid-cols-4 items-center gap-4">
                                  <ChevronRight className="h-4 w-4" />
                                  <span className="col-span-3">
                                    Next Step: {application.nextStep}
                                  </span>
                                </div>
                              )}
                            </div>
                          </TabsContent>
                          <TabsContent value="exams">
                            <Table>
                              <TableHeader>
                                <TableRow>
                                  <TableHead>Exam</TableHead>
                                  <TableHead>Score</TableHead>
                                  <TableHead>Status</TableHead>
                                </TableRow>
                              </TableHeader>
                              <TableBody>
                                {application.exams.map((exam) => (
                                  <TableRow key={exam.id}>
                                    <TableCell>{exam.title}</TableCell>
                                    <TableCell>
                                      {exam.score !== null
                                        ? `${exam.score}%`
                                        : "N/A"}
                                    </TableCell>
                                    <TableCell>{exam.status}</TableCell>
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </TabsContent>
                          <TabsContent value="timeline">
                            <div className="py-4">
                              <ol className="relative border-l border-gray-200 dark:border-gray-700">
                                <li className="mb-10 ml-4">
                                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                  <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                    {application.appliedDate}
                                  </time>
                                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    Application Submitted
                                  </h3>
                                  <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                    You submitted your application for{" "}
                                    {application.jobTitle} at{" "}
                                    {application.company}.
                                  </p>
                                </li>
                                {application.exams.map((exam, index) => (
                                  <li key={exam.id} className="mb-10 ml-4">
                                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                      Exam {index + 1}
                                    </time>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                      {exam.title}
                                    </h3>
                                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                                      Status: {exam.status}
                                      {exam.score !== null &&
                                        ` | Score: ${exam.score}%`}
                                    </p>
                                  </li>
                                ))}
                                {application.nextStep && (
                                  <li className="ml-4">
                                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                      Next Step
                                    </time>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                      {application.nextStep}
                                    </h3>
                                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                                      Prepare for your next step in the
                                      application process.
                                    </p>
                                  </li>
                                )}
                              </ol>
                            </div>
                          </TabsContent>
                        </Tabs>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="active">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {dummyApplications
              .filter(
                (app) =>
                  app.status === "Pending" || app.status === "In Progress"
              )
              .map((application) => (
                <Card key={application.id}>
                  <CardHeader>
                    <CardTitle>{application.jobTitle}</CardTitle>
                    <CardDescription>{application.company}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center mb-2">
                      {getStatusBadge(application.status)}
                      <span className="text-sm text-gray-500">
                        Applied: {application.appliedDate}
                      </span>
                    </div>
                    <Progress value={application.progress} className="mb-2" />
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">
                        Progress: {application.progress}%
                      </span>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setSelectedApplication(application)}
                          >
                            View Details{" "}
                            <ChevronRight className="ml-2 h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[625px]">
                          <DialogHeader>
                            <DialogTitle>{application.jobTitle}</DialogTitle>
                            <DialogDescription>
                              {application.company}
                            </DialogDescription>
                          </DialogHeader>
                          <Tabs defaultValue="overview" className="w-full">
                            <TabsList className="grid w-full grid-cols-3">
                              <TabsTrigger value="overview">
                                Overview
                              </TabsTrigger>
                              <TabsTrigger value="exams">Exams</TabsTrigger>
                              <TabsTrigger value="timeline">
                                Timeline
                              </TabsTrigger>
                            </TabsList>
                            <TabsContent value="overview">
                              <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-4 items-center gap-4">
                                  <Briefcase className="h-4 w-4" />
                                  <span className="col-span-3">
                                    {application.jobTitle}
                                  </span>
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                  <FileText className="h-4 w-4" />
                                  <span className="col-span-3">
                                    {application.status}
                                  </span>
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                  <CalendarDays className="h-4 w-4" />
                                  <span className="col-span-3">
                                    Applied: {application.appliedDate}
                                  </span>
                                </div>
                                {application.nextStep && (
                                  <div className="grid grid-cols-4 items-center gap-4">
                                    <ChevronRight className="h-4 w-4" />
                                    <span className="col-span-3">
                                      Next Step: {application.nextStep}
                                    </span>
                                  </div>
                                )}
                              </div>
                            </TabsContent>
                            <TabsContent value="exams">
                              <Table>
                                <TableHeader>
                                  <TableRow>
                                    <TableHead>Exam</TableHead>
                                    <TableHead>Score</TableHead>
                                    <TableHead>Status</TableHead>
                                  </TableRow>
                                </TableHeader>
                                <TableBody>
                                  {application.exams.map((exam) => (
                                    <TableRow key={exam.id}>
                                      <TableCell>{exam.title}</TableCell>
                                      <TableCell>
                                        {exam.score !== null
                                          ? `${exam.score}%`
                                          : "N/A"}
                                      </TableCell>
                                      <TableCell>{exam.status}</TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                              </Table>
                            </TabsContent>
                            <TabsContent value="timeline">
                              <div className="py-4">
                                <ol className="relative border-l border-gray-200 dark:border-gray-700">
                                  <li className="mb-10 ml-4">
                                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                      {application.appliedDate}
                                    </time>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                      Application Submitted
                                    </h3>
                                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                      You submitted your application for{" "}
                                      {application.jobTitle} at{" "}
                                      {application.company}.
                                    </p>
                                  </li>
                                  {application.exams.map((exam, index) => (
                                    <li key={exam.id} className="mb-10 ml-4">
                                      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                      <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                        Exam {index + 1}
                                      </time>
                                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                        {exam.title}
                                      </h3>
                                      <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                                        Status: {exam.status}
                                        {exam.score !== null &&
                                          ` | Score: ${exam.score}%`}
                                      </p>
                                    </li>
                                  ))}
                                  {application.nextStep && (
                                    <li className="ml-4">
                                      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                      <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                        Next Step
                                      </time>
                                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                        {application.nextStep}
                                      </h3>
                                      <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                                        Prepare for your next step in the
                                        application process.
                                      </p>
                                    </li>
                                  )}
                                </ol>
                              </div>
                            </TabsContent>
                          </Tabs>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>
        <TabsContent value="completed">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {dummyApplications
              .filter(
                (app) =>
                  app.status === "Rejected" || app.status === "Offer Received"
              )
              .map((application) => (
                <Card key={application.id}>
                  <CardHeader>
                    <CardTitle>{application.jobTitle}</CardTitle>
                    <CardDescription>{application.company}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center mb-2">
                      {getStatusBadge(application.status)}
                      <span className="text-sm text-gray-500">
                        Applied: {application.appliedDate}
                      </span>
                    </div>
                    <Progress value={application.progress} className="mb-2" />
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">
                        Progress: {application.progress}%
                      </span>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setSelectedApplication(application)}
                          >
                            View Details{" "}
                            <ChevronRight className="ml-2 h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[625px]">
                          <DialogHeader>
                            <DialogTitle>{application.jobTitle}</DialogTitle>
                            <DialogDescription>
                              {application.company}
                            </DialogDescription>
                          </DialogHeader>
                          <Tabs defaultValue="overview" className="w-full">
                            <TabsList className="grid w-full grid-cols-3">
                              <TabsTrigger value="overview">
                                Overview
                              </TabsTrigger>
                              <TabsTrigger value="exams">Exams</TabsTrigger>
                              <TabsTrigger value="timeline">
                                Timeline
                              </TabsTrigger>
                            </TabsList>
                            <TabsContent value="overview">
                              <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-4 items-center gap-4">
                                  <Briefcase className="h-4 w-4" />
                                  <span className="col-span-3">
                                    {application.jobTitle}
                                  </span>
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                  <FileText className="h-4 w-4" />
                                  <span className="col-span-3">
                                    {application.status}
                                  </span>
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                  <CalendarDays className="h-4 w-4" />
                                  <span className="col-span-3">
                                    Applied: {application.appliedDate}
                                  </span>
                                </div>
                                {application.nextStep && (
                                  <div className="grid grid-cols-4 items-center gap-4">
                                    <ChevronRight className="h-4 w-4" />
                                    <span className="col-span-3">
                                      Next Step: {application.nextStep}
                                    </span>
                                  </div>
                                )}
                              </div>
                            </TabsContent>
                            <TabsContent value="exams">
                              <Table>
                                <TableHeader>
                                  <TableRow>
                                    <TableHead>Exam</TableHead>
                                    <TableHead>Score</TableHead>
                                    <TableHead>Status</TableHead>
                                  </TableRow>
                                </TableHeader>
                                <TableBody>
                                  {application.exams.map((exam) => (
                                    <TableRow key={exam.id}>
                                      <TableCell>{exam.title}</TableCell>
                                      <TableCell>
                                        {exam.score !== null
                                          ? `${exam.score}%`
                                          : "N/A"}
                                      </TableCell>
                                      <TableCell>{exam.status}</TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                              </Table>
                            </TabsContent>
                            <TabsContent value="timeline">
                              <div className="py-4">
                                <ol className="relative border-l border-gray-200 dark:border-gray-700">
                                  <li className="mb-10 ml-4">
                                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                      {application.appliedDate}
                                    </time>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                      Application Submitted
                                    </h3>
                                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                      You submitted your application for{" "}
                                      {application.jobTitle} at{" "}
                                      {application.company}.
                                    </p>
                                  </li>
                                  {application.exams.map((exam, index) => (
                                    <li key={exam.id} className="mb-10 ml-4">
                                      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                      <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                        Exam {index + 1}
                                      </time>
                                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                        {exam.title}
                                      </h3>
                                      <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                                        Status: {exam.status}
                                        {exam.score !== null &&
                                          ` | Score: ${exam.score}%`}
                                      </p>
                                    </li>
                                  ))}
                                  {application.nextStep && (
                                    <li className="ml-4">
                                      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                      <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                        Next Step
                                      </time>
                                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                        {application.nextStep}
                                      </h3>
                                      <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                                        Prepare for your next step in the
                                        application process.
                                      </p>
                                    </li>
                                  )}
                                </ol>
                              </div>
                            </TabsContent>
                          </Tabs>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
