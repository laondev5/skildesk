"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { FileText, Briefcase, Video, Calendar, X } from "lucide-react";
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
import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import InterviewForm from "./InterviewForm";
import PdfViewer from "../PdfViewer";
//import { download } from "express/lib/response";
//import { Document, Page } from "react-pdf";

export default function AdminViewApplicant({ applicantDetail }) {
  const [isRejected, setIsRejected] = useState(false);
  //console.log(applicantDetail);
  // Mock data for demonstration
  const applicant = {
    name: "Jane Doe",
    email: "jane.doe@example.com",
    jobApplied: "Software Engineer",
    resumeUrl: "/placeholder.svg?height=400&width=300",
    coverLetterUrl: "/placeholder.svg?height=400&width=300",
    videoUrl: "https://example.com/applicant-video.mp4",
  };

  const handleScheduleInterview = () => {
    // Implement interview scheduling logic here
    //console.log("Scheduling interview for", applicant.name);
  };

  const handleRejectApplicant = () => {
    // Implement applicant rejection logic here
    console.log("Rejecting applicant", applicant.name);
    setIsRejected(true);
  };

  return (
    <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Applicant Details</h1>
        <div className="space-x-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button onClick={handleScheduleInterview} disabled={isRejected}>
                <Calendar className="mr-2 h-4 w-4" /> Schedule Interview
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Edit profile</SheetTitle>
                <SheetDescription>
                  Make changes to your profile here. Click save when youre done.
                </SheetDescription>
              </SheetHeader>
              <InterviewForm applicantDetail={applicantDetail} />
              <SheetFooter>
                <SheetClose asChild>
                  <Button type="submit">Save changes</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive" disabled={isRejected}>
                <X className="mr-2 h-4 w-4" /> Reject Applicant
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently reject the
                  applicant and send them a notification.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handleRejectApplicant}>
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>

      {isRejected && (
        <div className="bg-destructive text-destructive-foreground px-4 py-2 rounded mb-6">
          This applicant has been rejected.
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="mr-2" />
              Resume
            </CardTitle>
          </CardHeader>
          <CardContent>
            {/* <iframe
              src={applicantDetail.resume}
              type="application/pdf"
              width="100%"
              height="600px"
            />
            {/* <Document file={applicantDetail.resume}>
              <Page pageIndex={0} />
            </Document> */}
            <PdfViewer pdfData={applicantDetail.resume} />
            <a href={applicantDetail.resume} download={applicantDetail.resume}>
              <Button className="mt-4 w-full">Download Resume</Button>
            </a>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="mr-2" />
              Cover Letter
            </CardTitle>
          </CardHeader>
          <CardContent>
            {/* <embed
              src={applicantDetail.coverLetter}
              type="application/pdf"
              width="100%"
              height="600px"
            /> */}
            {/* <iframe
              src={applicantDetail.coverLetter}
              width="100%"
              height="600px"
              title="Cover Letter"
            ></iframe> */}
            <PdfViewer pdfData={applicantDetail.coverLetter} />
            <a
              href={applicantDetail.coverLetter}
              download={applicantDetail.coverLetter}
            >
              <Button className="mt-4 w-full">Download Cover Letter</Button>
            </a>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Briefcase className="mr-2" />
              Job Application Details
            </CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <dt className="font-medium text-muted-foreground">Name</dt>
                <dd>{applicantDetail.name}</dd>
              </div>
              <div>
                <dt className="font-medium text-muted-foreground">Email</dt>
                <dd>{applicantDetail.email}</dd>
              </div>
              <div>
                <dt className="font-medium text-muted-foreground">
                  Portfolio URL
                </dt>
                {applicantDetail.portfolio ? (
                  <dd>{applicantDetail.portfolio}</dd>
                ) : (
                  <dd>None</dd>
                )}
              </div>
              <div className="sm:col-span-2">
                <dt className="font-medium text-muted-foreground">
                  Job Applied
                </dt>
                <dd>{applicantDetail.role}</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="font-medium text-muted-foreground">Linkedin</dt>
                <Link href={applicantDetail.linkedin}>
                  <dd>{applicantDetail.linkedin}</dd>
                </Link>
              </div>
            </dl>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Video className="mr-2" />
              Applicant Video
            </CardTitle>
          </CardHeader>
          <CardContent>
            <video controls className="w-full aspect-video">
              <source src={applicantDetail.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
