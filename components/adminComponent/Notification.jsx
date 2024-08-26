notification;

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/thKPJNuguYg
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function Notification() {
  return (
    <div className="flex flex-col h-full">
      <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="#" prefetch={false}>
            <LogInIcon className="h-6 w-6" />
            <span className="sr-only">Interview Scheduler</span>
          </Link>
          <nav className="hidden md:flex items-center gap-4">
            <Link
              href="#"
              className="font-medium hover:underline"
              prefetch={false}
            >
              Schedule
            </Link>
            <Link
              href="#"
              className="font-medium hover:underline"
              prefetch={false}
            >
              Interviews
            </Link>
            <Link
              href="#"
              className="font-medium hover:underline"
              prefetch={false}
            >
              Feedback
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="rounded-full">
            <img
              src="/placeholder.svg"
              width="32"
              height="32"
              className="rounded-full"
              alt="Avatar"
              style={{ aspectRatio: "32/32", objectFit: "cover" }}
            />
            <span className="sr-only">Toggle user menu</span>
          </Button>
          <Button variant="secondary">
            <PlusIcon className="h-4 w-4 mr-2" />
            New Interview
          </Button>
        </div>
      </header>
      <main className="flex-1 bg-background p-6 md:p-10">
        <div className="grid gap-8">
          <section>
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Upcoming Interviews</h2>
              <Link
                href="#"
                className="text-primary hover:underline"
                prefetch={false}
              >
                View all
              </Link>
            </div>
            <div className="grid gap-4 mt-4">
              <Card>
                <CardContent className="grid grid-cols-[1fr_auto] items-center gap-4">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage
                        src="/placeholder-user.jpg"
                        alt="Candidate"
                      />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">John Doe</div>
                      <div className="text-sm text-muted-foreground">
                        Software Engineer
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="h-5 w-5 text-muted-foreground" />
                    <div className="text-sm text-muted-foreground">
                      May 15, 2023 - 10:00 AM
                    </div>
                  </div>
                  <div className="col-span-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ClockIcon className="h-5 w-5 text-muted-foreground" />
                      <div className="text-sm text-muted-foreground">
                        60 minutes
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <ClipboardIcon className="h-5 w-5 text-muted-foreground" />
                      <div className="text-sm text-muted-foreground">
                        Technical Interview
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="grid grid-cols-[1fr_auto] items-center gap-4">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage
                        src="/placeholder-user.jpg"
                        alt="Candidate"
                      />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">Jane Smith</div>
                      <div className="text-sm text-muted-foreground">
                        Product Manager
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="h-5 w-5 text-muted-foreground" />
                    <div className="text-sm text-muted-foreground">
                      May 20, 2023 - 2:00 PM
                    </div>
                  </div>
                  <div className="col-span-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ClockIcon className="h-5 w-5 text-muted-foreground" />
                      <div className="text-sm text-muted-foreground">
                        45 minutes
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <ClipboardIcon className="h-5 w-5 text-muted-foreground" />
                      <div className="text-sm text-muted-foreground">
                        Behavioral Interview
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
          <section>
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Recent Interviews</h2>
              <Link
                href="#"
                className="text-primary hover:underline"
                prefetch={false}
              >
                View all
              </Link>
            </div>
            <div className="grid gap-4 mt-4">
              <Card>
                <CardContent className="grid grid-cols-[1fr_auto] items-center gap-4">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage
                        src="/placeholder-user.jpg"
                        alt="Candidate"
                      />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">Alex Johnson</div>
                      <div className="text-sm text-muted-foreground">
                        Frontend Developer
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="h-5 w-5 text-muted-foreground" />
                    <div className="text-sm text-muted-foreground">
                      May 10, 2023 - 3:00 PM
                    </div>
                  </div>
                  <div className="col-span-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ClockIcon className="h-5 w-5 text-muted-foreground" />
                      <div className="text-sm text-muted-foreground">
                        60 minutes
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <ClipboardIcon className="h-5 w-5 text-muted-foreground" />
                      <div className="text-sm text-muted-foreground">
                        Technical Interview
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="grid grid-cols-[1fr_auto] items-center gap-4">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage
                        src="/placeholder-user.jpg"
                        alt="Candidate"
                      />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">Sarah Lee</div>
                      <div className="text-sm text-muted-foreground">
                        Product Designer
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="h-5 w-5 text-muted-foreground" />
                    <div className="text-sm text-muted-foreground">
                      May 5, 2023 - 10:00 AM
                    </div>
                  </div>
                  <div className="col-span-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ClockIcon className="h-5 w-5 text-muted-foreground" />
                      <div className="text-sm text-muted-foreground">
                        45 minutes
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <ClipboardIcon className="h-5 w-5 text-muted-foreground" />
                      <div className="text-sm text-muted-foreground">
                        Design Interview
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </main>
      <footer className="bg-muted text-muted-foreground py-4 px-6 flex items-center justify-between">
        <div className="text-sm">
          &copy; 2024 Interview Scheduler. All rights reserved.
        </div>
        <div className="flex items-center gap-4">
          <Link href="#" className="text-sm hover:underline" prefetch={false}>
            Privacy
          </Link>
          <Link href="#" className="text-sm hover:underline" prefetch={false}>
            Terms
          </Link>
        </div>
      </footer>
    </div>
  );
}

function CalendarIcon(props) {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function ClipboardIcon(props) {
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
    </svg>
  );
}

function ClockIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function LogInIcon(props) {
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
      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
      <polyline points="10 17 15 12 10 7" />
      <line x1="15" x2="3" y1="12" y2="12" />
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
