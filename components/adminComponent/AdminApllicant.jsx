"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AdminApplicant({ applicants }) {
  const interviewed = applicants?.filter(
    (item) => item.status === "interviewed"
  );
  const offered = applicants?.filter((item) => item.status === "offered");
  const rejected = applicants?.filter((item) => item.status === "rejected");
  return (
    <div className="flex flex-col min-h-screen bg-muted/40">
      <header className="bg-background px-4 py-6 sm:px-6 border-b">
        <div className="container max-w-6xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold">Applicant Tracking</h1>
          {/* <div className="text-muted-foreground">
            Total Applicants: <span className="font-medium">256</span>
          </div> */}
        </div>
      </header>
      <main className="flex-1 container max-w-6xl mx-auto px-4 py-8 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-gray-200">
            <CardHeader>
              <CardTitle>Total Applicants</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">{applicants?.length}</div>
            </CardContent>
          </Card>
          <Card className="bg-blue-200">
            <CardHeader>
              <CardTitle>Interviewed</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">{interviewed?.length}</div>
            </CardContent>
          </Card>
          <Card className="bg-green-200">
            <CardHeader>
              <CardTitle>Hired</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">{offered?.length}</div>
            </CardContent>
          </Card>
          <Card className="bg-red-200">
            <CardHeader>
              <CardTitle>Rejected</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">{rejected?.length}</div>
            </CardContent>
          </Card>
        </div>
        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Applicants</CardTitle>
              <CardDescription>
                View and manage all applicants for your open positions.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Job Applied</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Applied On</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {applicants.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarFallback>
                              {item?.name?.substring(0, 2)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{item?.name}</div>
                            <div className="text-sm text-muted-foreground">
                              {item?.email}
                            </div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{item?.role}</TableCell>
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
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoveHorizontalIcon className="w-5 h-5" />
                              <span className="sr-only">Actions</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <Link href={`/admin/applicant/${item.id}`}>
                              <DropdownMenuItem>
                                View Applicant
                              </DropdownMenuItem>
                            </Link>

                            <DropdownMenuItem>
                              Schedule Interview
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              Reject Application
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter className="text-xs text-muted-foreground">
              Showing 1-4 of 256 applicants
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  );
}

function MoveHorizontalIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="18 8 22 12 18 16" />
      <polyline points="6 8 2 12 6 16" />
      <line x1="2" x2="22" y1="12" y2="12" />
    </svg>
  );
}
