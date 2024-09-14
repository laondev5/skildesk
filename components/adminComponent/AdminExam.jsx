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
import { BarChart, Users, FileText } from "lucide-react";

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
//   examsTaken: string[]
//   scores: Record<string, number>
// }

// type Props = {
//   exams: Exam[]
//   candidates: Candidate[]
// }

export default function AdminInterface({ exams, candidates }) {
  const [selectedExam, setSelectedExam] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCandidates = candidates.filter(
    (candidate) =>
      candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      candidate.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const generateReport = () => {
    // In a real application, this would generate and possibly download a report
    console.log("Generating report...");
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
                  {exams.map((exam) => (
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
                  {exams.find((e) => e.id === selectedExam)?.title}
                </CardTitle>
                <CardDescription>
                  Detailed view of the selected exam
                </CardDescription>
              </CardHeader>
              <CardContent>
                {exams
                  .find((e) => e.id === selectedExam)
                  ?.steps.map((step, index) => (
                    <div key={index} className="mb-4">
                      <h3 className="text-lg font-semibold">
                        Step {index + 1}: {step.type}
                      </h3>
                      <p>Pass Score: {step.passScore}%</p>
                      <p>Number of Questions: {step.questions.length}</p>
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
                  placeholder="Search by name or email"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Exams Taken</TableHead>
                    <TableHead>Average Score</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredCandidates.map((candidate) => (
                    <TableRow key={candidate.id}>
                      <TableCell>{candidate.name}</TableCell>
                      <TableCell>{candidate.email}</TableCell>
                      <TableCell>{candidate.examsTaken.length}</TableCell>
                      <TableCell>
                        {Object.values(candidate.scores).length > 0
                          ? (
                              Object.values(candidate.scores).reduce(
                                (a, b) => a + b
                              ) / Object.values(candidate.scores).length
                            ).toFixed(2) + "%"
                          : "N/A"}
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
                  <Select>
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
                  <Select>
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
