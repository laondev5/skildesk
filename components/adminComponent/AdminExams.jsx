"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { BarChart, Users, FileText, Info } from "lucide-react";

// Dummy data for exams
const dummyExams = [
  {
    id: "1",
    title: "Web Development Fundamentals",
    steps: [
      {
        type: "multiple-choice",
        questions: [{ text: "What is HTML?" }, { text: "What is CSS?" }],
        passScore: 70,
      },
      {
        type: "coding",
        questions: [{ text: "Create a simple HTML page" }],
        passScore: 80,
      },
    ],
  },
  {
    id: "2",
    title: "JavaScript Basics",
    steps: [
      {
        type: "multiple-choice",
        questions: [
          { text: "What is a variable?" },
          { text: "What is a function?" },
        ],
        passScore: 75,
      },
      {
        type: "coding",
        questions: [{ text: "Write a function to calculate factorial" }],
        passScore: 85,
      },
    ],
  },
  {
    id: "3",
    title: "Data Structures and Algorithms",
    steps: [
      {
        type: "multiple-choice",
        questions: [
          { text: "What is an array?" },
          { text: "What is a linked list?" },
        ],
        passScore: 80,
      },
      {
        type: "coding",
        questions: [{ text: "Implement a binary search algorithm" }],
        passScore: 90,
      },
    ],
  },
];

// Dummy data for candidates
const dummyCandidates = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    job: "Frontend Developer",
    examsTaken: ["1", "2"],
    scores: { 1: 85, 2: 92 },
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    job: "Backend Developer",
    examsTaken: ["1", "3"],
    scores: { 1: 78, 3: 88 },
  },
  {
    id: "3",
    name: "Bob Johnson",
    email: "bob@example.com",
    job: "Full Stack Developer",
    examsTaken: ["2"],
    scores: { 2: 95 },
  },
  {
    id: "4",
    name: "Alice Brown",
    email: "alice@example.com",
    job: "Data Scientist",
    examsTaken: ["1", "2", "3"],
    scores: { 1: 90, 2: 88, 3: 93 },
  },
];

// type Exam = {
//   id: string
//   title: string
//   steps: {
//     type: 'multiple-choice' | 'coding' | 'essay'
//     questions: { text: string }[]
//     passScore: number
//   }[]
// }

// type Candidate = {
//   id: string
//   name: string
//   email: string
//   job: string
//   examsTaken: string[]
//   scores: Record<string, number>
// }

export default function AdminInterface() {
  const [selectedExam, setSelectedExam] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [reportType, setReportType] = useState("");
  const [dateRange, setDateRange] = useState("");
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  const filteredCandidates = dummyCandidates.filter(
    (candidate) =>
      candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      candidate.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      candidate.job.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const generateReport = () => {
    console.log(`Generating ${reportType} report for ${dateRange}`);
    // In a real application, this would generate and possibly download a report
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <Tabs defaultValue="exams">
        <TabsList className="grid w-full grid-cols-3 mb-4">
          <TabsTrigger value="exams">
            <FileText className="mr-2" />
            Exams
          </TabsTrigger>
          <TabsTrigger value="candidates">
            <Users className="mr-2" />
            Candidates
          </TabsTrigger>
          <TabsTrigger value="reports">
            <BarChart className="mr-2" />
            Reports
          </TabsTrigger>
        </TabsList>
        <TabsContent value="exams">
          <Card>
            <CardHeader>
              <CardTitle>Exams Overview</CardTitle>
              <CardDescription>
                View and manage all exams in the system
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Exam Title</TableHead>
                    <TableHead>Number of Steps</TableHead>
                    <TableHead>Total Questions</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {dummyExams.map((exam) => (
                    <TableRow key={exam.id}>
                      <TableCell>{exam.title}</TableCell>
                      <TableCell>{exam.steps.length}</TableCell>
                      <TableCell>
                        {exam.steps.reduce(
                          (total, step) => total + step.questions.length,
                          0
                        )}
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setSelectedExam(exam.id)}
                        >
                          View Details
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          {selectedExam && (
            <Card className="mt-4">
              <CardHeader>
                <CardTitle>
                  {dummyExams.find((e) => e.id === selectedExam)?.title}
                </CardTitle>
                <CardDescription>
                  Detailed view of the selected exam
                </CardDescription>
              </CardHeader>
              <CardContent>
                {dummyExams
                  .find((e) => e.id === selectedExam)
                  ?.steps.map((step, index) => (
                    <div key={index} className="mb-4">
                      <h3 className="text-lg font-semibold">
                        Step {index + 1}: {step.type}
                      </h3>
                      <p>Pass Score: {step.passScore}%</p>
                      <p>Number of Questions: {step.questions.length}</p>
                      <ul className="list-disc list-inside mt-2">
                        {step.questions.map((question, qIndex) => (
                          <li key={qIndex}>{question.text}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
              </CardContent>
            </Card>
          )}
        </TabsContent>
        <TabsContent value="candidates">
          <Card>
            <CardHeader>
              <CardTitle>Candidates Overview</CardTitle>
              <CardDescription>
                View and manage all candidates in the system
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <Label htmlFor="search">Search Candidates</Label>
                <Input
                  id="search"
                  placeholder="Search by name, email, or job"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Job Applied</TableHead>
                    <TableHead>Exams Taken</TableHead>
                    <TableHead>Average Score</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredCandidates.map((candidate) => (
                    <TableRow key={candidate.id}>
                      <TableCell>{candidate.name}</TableCell>
                      <TableCell>{candidate.email}</TableCell>
                      <TableCell>{candidate.job}</TableCell>
                      <TableCell>
                        {candidate.examsTaken
                          .map(
                            (id) => dummyExams.find((e) => e.id === id)?.title
                          )
                          .join(", ")}
                      </TableCell>
                      <TableCell>
                        {Object.values(candidate.scores).length > 0
                          ? (
                              Object.values(candidate.scores).reduce(
                                (a, b) => a + b
                              ) / Object.values(candidate.scores).length
                            ).toFixed(2) + "%"
                          : "N/A"}
                      </TableCell>
                      <TableCell>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => setSelectedCandidate(candidate)}
                            >
                              <Info className="mr-2 h-4 w-4" />
                              Details
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                              <DialogTitle>{candidate.name}</DialogTitle>
                              <DialogDescription>
                                Detailed candidate information
                              </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                              <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                  Name
                                </Label>
                                <Input
                                  id="name"
                                  value={candidate.name}
                                  className="col-span-3"
                                  readOnly
                                />
                              </div>
                              <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="email" className="text-right">
                                  Email
                                </Label>
                                <Input
                                  id="email"
                                  value={candidate.email}
                                  className="col-span-3"
                                  readOnly
                                />
                              </div>
                              <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="job" className="text-right">
                                  Job Applied
                                </Label>
                                <Input
                                  id="job"
                                  value={candidate.job}
                                  className="col-span-3"
                                  readOnly
                                />
                              </div>
                              <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="exams" className="text-right">
                                  Exams Taken
                                </Label>
                                <div id="exams" className="col-span-3">
                                  {candidate.examsTaken.map((id) => (
                                    <div key={id}>
                                      {
                                        dummyExams.find((e) => e.id === id)
                                          ?.title
                                      }
                                      : {candidate.scores[id]}%
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="reports">
          <Card>
            <CardHeader>
              <CardTitle>Generate Reports</CardTitle>
              <CardDescription>
                Create custom reports based on exam and candidate data
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="report-type">Report Type</Label>
                  <Select value={reportType} onValueChange={setReportType}>
                    <SelectTrigger id="report-type">
                      <SelectValue placeholder="Select report type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="exam-performance">
                        Exam Performance
                      </SelectItem>
                      <SelectItem value="candidate-progress">
                        Candidate Progress
                      </SelectItem>
                      <SelectItem value="overall-statistics">
                        Overall Statistics
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="date-range">Date Range</Label>
                  <Select value={dateRange} onValueChange={setDateRange}>
                    <SelectTrigger id="date-range">
                      <SelectValue placeholder="Select date range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="last-week">Last Week</SelectItem>
                      <SelectItem value="last-month">Last Month</SelectItem>
                      <SelectItem value="last-quarter">Last Quarter</SelectItem>
                      <SelectItem value="last-year">Last Year</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button onClick={generateReport}>Generate Report</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
