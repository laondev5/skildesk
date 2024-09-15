"use client";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  CartesianGrid,
  XAxis,
  Bar,
  BarChart,
  Pie,
  PieChart,
  Line,
  LineChart,
} from "recharts";
import {
  ChartTooltipContent,
  ChartTooltip,
  ChartContainer,
} from "@/components/ui/chart";
import Image from "next/image";

export default function AdminHome({ jobs, applicants }) {
  //const totalApplicants = applicants.length;
  const interviewed = applicants.filter(
    (item) => item.status === "interviewed"
  );
  const offered = applicants.filter((item) => item.status === "offered");
  const rejected = applicants.filter((item) => item.status === "rejected");
  const availableJobs = jobs.filter((item) => item.interview === "pending");
  //console.log(jobs);
  return (
    <div className="flex flex-col min-h-screen bg-muted/40">
      {/* <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
        <Breadcrumb className="hidden md:flex">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="#" prefetch={false}>
                  Dashboard
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Interview Analytics</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="relative ml-auto flex-1 md:grow-0">
          <div className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
          />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="overflow-hidden rounded-full"
            >
              <Image
                src="/placeholder.svg"
                width={36}
                height={36}
                alt="Avatar"
                className="overflow-hidden rounded-full"
                style={{ aspectRatio: "36/36", objectFit: "cover" }}
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header> */}
      <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
        <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
          <Card className="">
            <CardHeader>
              <CardTitle>Candidate Pipeline</CardTitle>
              <CardDescription>
                A breakdown of your current candidate pipeline, including
                applications, interviews, and offers.
              </CardDescription>
            </CardHeader>
            <CardContent className="">
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4 ">
                <div className="bg-primary/10 rounded-lg p-4 text-center">
                  <div className="text-4xl font-bold text-primary">
                    {applicants?.length}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Applications
                  </div>
                </div>
                <div className="bg-accent/10 rounded-lg p-4 text-center bg-orange-200">
                  <div className="text-4xl font-bold text-accent">
                    {interviewed?.length}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Interviews
                  </div>
                </div>
                <div className="bg-success/10 rounded-lg p-4 text-center bg-green-200">
                  <div className="text-4xl font-bold text-success">
                    {offered?.length}
                  </div>
                  <div className="text-sm text-muted-foreground">Offers</div>
                </div>
                <div className="bg-warning/10 rounded-lg p-4 text-center bg-red-200">
                  <div className="text-4xl font-bold text-warning">
                    {rejected?.length}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Rejections
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="">
            <Card className="">
              <CardHeader>
                <CardTitle>Interview Performance</CardTitle>
                <CardDescription>
                  A breakdown of the interview performance, including success
                  rate and average duration.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <BarchartChart className="aspect-[2/1]" />
              </CardContent>
            </Card>
            {/* <Card>
              <CardHeader>
                <CardTitle>Feedback Analysis</CardTitle>
                <CardDescription>
                  A breakdown of candidate feedback, including positive and
                  negative sentiment.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <PiechartcustomChart className="aspect-square" />
              </CardContent>
            </Card> */}
          </div>
          <Card className="">
            <CardHeader>
              <CardTitle>Recent Job Allocations</CardTitle>
              <CardDescription>
                A table of recent job allocations, including the candidate,
                role, and interview status.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Candidate</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {applicants.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.role}</TableCell>
                      {item.status === "pending" ? (
                        <TableCell>
                          <Badge variant="secondary" className="bg-orange-200">
                            Pending
                          </Badge>
                        </TableCell>
                      ) : item.status === "scheduled" ? (
                        <TableCell>
                          <Badge variant="secondary" className="bg-blue-200">
                            Scheduled
                          </Badge>
                        </TableCell>
                      ) : item.status === "interviewed" ? (
                        <TableCell>
                          <Badge variant="secondary" className="bg-green-200">
                            Interviewed
                          </Badge>
                        </TableCell>
                      ) : (
                        <TableCell>
                          <Badge variant="secondary" className="bg-red-200">
                            Rejected
                          </Badge>
                        </TableCell>
                      )}

                      <TableCell>
                        {" "}
                        {new Date(item.createdAt).toLocaleDateString()}
                      </TableCell>
                      <TableCell>
                        <Link href={`/admin/applicant/${item.id}`}>
                          <Button>View</Button>
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
        <div className="">
          <Card>
            <CardHeader>
              <CardTitle>Total Job Opening</CardTitle>
              <CardDescription>
                A breakdown of the total job opening on the platform
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
                <div className="bg-primary/10 rounded-lg p-4 text-center">
                  <div className="text-4xl font-bold text-primary">
                    {jobs?.length}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Total Jobs
                  </div>
                </div>
                <div className="bg-accent/10 rounded-lg p-4 text-center">
                  <div className="text-4xl font-bold text-primary">
                    {availableJobs?.length}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Available Jobs
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

function BarchartChart(props) {
  return (
    <div {...props}>
      <ChartContainer
        config={{
          Applicant: {
            label: "Applicant",
            color: "hsl(var(--chart-1))",
          },
        }}
        className="min-h-[300px] w-[95%] "
      >
        <BarChart
          accessibilityLayer
          data={[
            { month: "January", Applicant: 186 },
            { month: "February", Applicant: 305 },
            { month: "March", Applicant: 237 },
            { month: "April", Applicant: 73 },
            { month: "May", Applicant: 209 },
            { month: "June", Applicant: 214 },
          ]}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Bar dataKey="Applicant" fill="var(--color-desktop)" radius={8} />
        </BarChart>
      </ChartContainer>
    </div>
  );
}

function LinechartChart(props) {
  return (
    <div {...props}>
      <ChartContainer
        config={{
          desktop: {
            label: "Desktop",
            color: "hsl(var(--chart-1))",
          },
        }}
      >
        {/* <LineChart
          accessibilityLayer
          data={[
            { month: "January", desktop: 186 },
            { month: "February", desktop: 305 },
            { month: "March", desktop: 237 },
            { month: "April", desktop: 73 },
            { month: "May", desktop: 209 },
            { month: "June", desktop: 214 },
          ]}
          margin={{
            left: 12,
            right: 12,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Line
            dataKey="desktop"
            type="natural"
            stroke="var(--color-desktop)"
            strokeWidth={2}
            dot={false}
          />
        </LineChart> */}
      </ChartContainer>
    </div>
  );
}

function PiechartcustomChart(props) {
  return (
    <div {...props}>
      <ChartContainer
        config={{
          visitors: {
            label: "Visitors",
          },
          chrome: {
            label: "Chrome",
            color: "hsl(var(--chart-1))",
          },
          safari: {
            label: "Safari",
            color: "hsl(var(--chart-2))",
          },
          firefox: {
            label: "Firefox",
            color: "hsl(var(--chart-3))",
          },
          edge: {
            label: "Edge",
            color: "hsl(var(--chart-4))",
          },
          other: {
            label: "Other",
            color: "hsl(var(--chart-5))",
          },
        }}
      >
        {/* <PieChart>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Pie
            data={[
              { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
              { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
              {
                browser: "firefox",
                visitors: 187,
                fill: "var(--color-firefox)",
              },
              { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
              { browser: "other", visitors: 90, fill: "var(--color-other)" },
            ]}
            dataKey="visitors"
            nameKey="browser"
          />
        </PieChart> */}
      </ChartContainer>
    </div>
  );
}
