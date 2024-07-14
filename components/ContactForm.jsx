import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const ContactForm = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-purple-100">
      <div className="flex flex-col items-center justify-between w-full max-w-6xl gap-8 p-8 md:flex-row">
        <Card className="w-full max-w-md bg-gradient-to-b from-purple-800 to-black text-white rounded-lg shadow-lg p-8">
          <CardHeader>
            <h2 className="text-3xl font-bold text-pink-500">Contact us.</h2>
            <p className="text-lg mt-2">
              We are here to help and answer any questions you might have. We
              will answer your inquiries in a maximum of 48 hours.
            </p>
          </CardHeader>
          <CardContent className="mt-4">
            <h3 className="text-xl font-semibold text-pink-500">
              We can be found at:
            </h3>
            <div className="mt-2">
              <LocateIcon className="inline-block w-5 h-5 mr-2 text-pink-500" />
              <p>71-75 Shelton Street</p>
              <p>London, England</p>
              <p>WC2H 9JQ</p>
              <p>United Kingdom</p>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-pink-500">
              Business Development
            </h3>
            <p className="mt-2">
              For partnership, email us at{" "}
              <a href="#" className="underline">
                partnerships@skildesk.com
              </a>
            </p>
            <p>
              Any other enquiries, email{" "}
              <a href="#" className="underline">
                info@skildesk.com
              </a>
            </p>
            <div className="mt-4">
              <PhoneIcon className="inline-block w-5 h-5 mr-2 text-pink-500" />
              <p>+447396890863</p>
            </div>
          </CardContent>
        </Card>
        <Card className="w-full max-w-lg bg-white rounded-lg shadow-lg p-8">
          {/* <CardHeader></CardHeader> */}
          <CardContent className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first-name">First Name*</Label>
                <Input id="first-name" placeholder="Enter your first name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Last Name*</Label>
                <Input id="last-name" placeholder="Enter your last name" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email*</Label>
              <Input id="email" placeholder="Enter your email" type="email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                placeholder="Enter your phone number"
                type="tel"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message*</Label>
              <Textarea
                id="message"
                placeholder="Write your message here..."
                className="min-h-[100px]"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="ml-auto bg-blue-600 text-white">Submit</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

function LocateIcon(props) {
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
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  );
}

function PhoneIcon(props) {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function XIcon(props) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
export default ContactForm;
