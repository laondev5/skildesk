import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { RadioGroup } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";

export default function AdminExams() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-40 border-b bg-background px-4 py-3 shadow-sm sm:px-6 md:px-8">
        <div className="flex items-center justify-between">
          <Link
            href="#"
            className="flex items-center gap-2 font-bold"
            prefetch={false}
          >
            <ClipboardListIcon className="h-6 w-6" />
            <span>Interview Exam</span>
          </Link>
          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <img
                    src="/placeholder.svg"
                    width={32}
                    height={32}
                    alt="User avatar"
                    className="rounded-full"
                    style={{ aspectRatio: "32/32", objectFit: "cover" }}
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Signed in as John Doe</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
      <main className="flex-1 px-4 py-6 sm:px-6 md:px-8">
        <Tabs defaultValue="admin">
          <TabsList>
            <TabsTrigger value="admin">Admin</TabsTrigger>
            <TabsTrigger value="candidate">Candidate</TabsTrigger>
          </TabsList>
          <TabsContent value="admin">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Create New Interview Exam</CardTitle>
                  <CardDescription>
                    Set up the details for a new interview exam.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="grid gap-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="exam-name">Exam Name</Label>
                        <Input id="exam-name" placeholder="Enter exam name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="time-limit">Time Limit</Label>
                        <Input
                          id="time-limit"
                          type="number"
                          placeholder="Enter time limit (minutes)"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        placeholder="Enter exam description"
                        className="min-h-[100px]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="questions">Questions</Label>
                      <div className="grid gap-4">
                        <div className="flex items-center justify-between gap-4">
                          <Input
                            id="questions"
                            placeholder="Enter question"
                            className="flex-1"
                          />
                          <Button variant="outline" size="icon">
                            <PlusIcon className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="flex items-center justify-between gap-4">
                          <Input
                            id="questions"
                            placeholder="Enter question"
                            className="flex-1"
                          />
                          <Button variant="outline" size="icon">
                            <PlusIcon className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="flex items-center justify-between gap-4">
                          <Input
                            id="questions"
                            placeholder="Enter question"
                            className="flex-1"
                          />
                          <Button variant="outline" size="icon">
                            <PlusIcon className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <Button type="submit">Create Exam</Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Scheduled Interviews</CardTitle>
                  <CardDescription>
                    Review and manage upcoming interview exams.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Exam Name</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Time Limit</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Frontend Developer Exam</TableCell>
                        <TableCell>2023-06-15</TableCell>
                        <TableCell>60 minutes</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm">
                              Edit
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              color="destructive"
                            >
                              Delete
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Backend Developer Exam</TableCell>
                        <TableCell>2023-06-30</TableCell>
                        <TableCell>90 minutes</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm">
                              Edit
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              color="destructive"
                            >
                              Delete
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Full-Stack Developer Exam</TableCell>
                        <TableCell>2023-07-15</TableCell>
                        <TableCell>120 minutes</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm">
                              Edit
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              color="destructive"
                            >
                              Delete
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="candidate">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Interviews</CardTitle>
                  <CardDescription>
                    Review and prepare for your scheduled interview exams.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Exam Name</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Time Limit</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Frontend Developer Exam</TableCell>
                        <TableCell>2023-06-15</TableCell>
                        <TableCell>60 minutes</TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm">
                            Take Exam
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Backend Developer Exam</TableCell>
                        <TableCell>2023-06-30</TableCell>
                        <TableCell>90 minutes</TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm">
                            Take Exam
                          </Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Exam in Progress</CardTitle>
                  <CardDescription>
                    Complete the interview exam to the best of your ability.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-medium">
                          Frontend Developer Exam
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Time Remaining: 45 minutes
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        Submit Exam
                      </Button>
                    </div>
                    <div className="grid gap-4">
                      <div>
                        <h4 className="text-base font-medium">Question 1</h4>
                        <p>
                          What is the purpose of the useState hook in React?
                        </p>
                        <div className="mt-2 grid gap-2">
                          <RadioGroup>
                            <div>To manage state in functional components</div>
                            <div>To create a new component in React</div>
                            <div>To handle side effects in React</div>
                            <div>
                              To improve performance in React applications
                            </div>
                          </RadioGroup>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-base font-medium">Question 2</h4>
                        <p>
                          What is the purpose of the useEffect hook in React?
                        </p>
                        <div className="mt-2 grid gap-2">
                          <RadioGroup>
                            <div>To manage state in functional components</div>
                            <div>To create a new component in React</div>
                            <div>To handle side effects in React</div>
                            <div>
                              To improve performance in React applications
                            </div>
                          </RadioGroup>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Exam Results</CardTitle>
                  <CardDescription>
                    Review your performance on the completed interview exam.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-medium">
                          Frontend Developer Exam
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Exam Date: 2023-06-15
                        </p>
                      </div>
                      <div className="text-2xl font-bold">85%</div>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="text-base font-medium">Feedback</h4>
                      <p className="text-muted-foreground">
                        Great job on the exam! You demonstrated a strong
                        understanding of React concepts. Keep up the good work.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
      <footer className="bg-muted px-4 py-6 text-center text-muted-foreground sm:px-6 md:px-8">
        <p>&copy; 2023 Interview Exam. All rights reserved.</p>
      </footer>
    </div>
  );
}

function ClipboardListIcon(props) {
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
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="M12 11h4" />
      <path d="M12 16h4" />
      <path d="M8 11h.01" />
      <path d="M8 16h.01" />
    </svg>
  );
}

function PlusIcon(props) {
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
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}
