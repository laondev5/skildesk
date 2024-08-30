"use client";

import { useState } from "react";
//import { Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
import { CalendarIcon, CheckCircle2Icon, ClockIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

export default function AdminInterview({ interviews }) {
  const [activeTab, setActiveTab] = useState("all");

  const completedInterviews = interviews.filter(
    (interview) => interview.status === "Completed"
  );
  const pendingInterviews = interviews.filter(
    (interview) => interview.status === "Pending"
  );

  const stats = {
    total: interviews.length,
    completed: completedInterviews.length,
    pending: pendingInterviews.length,
  };

  const chartData = {
    labels: ["Phone", "Video", "In-Person"],
    datasets: [
      {
        label: "Interview Types",
        data: [
          interviews.filter((i) => i.type === "Phone").length,
          interviews.filter((i) => i.type === "Video").length,
          interviews.filter((i) => i.type === "In-Person").length,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(75, 192, 192, 0.6)",
        ],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Interview Types Distribution",
      },
    },
  };

  const filteredInterviews =
    activeTab === "all"
      ? interviews
      : activeTab === "completed"
      ? completedInterviews
      : pendingInterviews;

  return (
    <div className="container mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold">Interview Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Interviews
            </CardTitle>
            <CalendarIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.total}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Completed Interviews
            </CardTitle>
            <CheckCircle2Icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.completed}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Pending Interviews
            </CardTitle>
            <ClockIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.pending}</div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList>
          <TabsTrigger value="all" onClick={() => setActiveTab("all")}>
            All Interviews
          </TabsTrigger>
          <TabsTrigger value="pending" onClick={() => setActiveTab("pending")}>
            Pending Interviews
          </TabsTrigger>
          <TabsTrigger
            value="completed"
            onClick={() => setActiveTab("completed")}
          >
            Completed Interviews
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Candidate</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredInterviews.map((interview) => (
              <TableRow key={interview.id}>
                <TableCell>{interview.name}</TableCell>
                <TableCell>{interview.date}</TableCell>
                <TableCell>{interview.time}</TableCell>
                <TableCell>{interview.interviewType}</TableCell>
                <TableCell>{interview.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
