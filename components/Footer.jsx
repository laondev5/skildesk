import React from "react";
import Container from "./Container";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" py-8 md:py-12 bg-[#091736] text-white">
      <div className="container max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="grid gap-2">
          <h3 className="font-semibold">Quick Links</h3>
          <Link
            href="#"
            className="hover:underline hover:underline-offset-4"
            prefetch={false}
          >
            Home
          </Link>
          <Link
            href="#"
            className="hover:underline hover:underline-offset-4"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="#"
            className="hover:underline hover:underline-offset-4"
            prefetch={false}
          >
            Services
          </Link>
          <Link
            href="#"
            className="hover:underline hover:underline-offset-4"
            prefetch={false}
          >
            Contact
          </Link>
        </div>
        <div className="grid gap-2">
          <h3 className="font-semibold">Resources</h3>
          <Link
            href="#"
            className="hover:underline hover:underline-offset-4"
            prefetch={false}
          >
            Blog
          </Link>
          <Link
            href="#"
            className="hover:underline hover:underline-offset-4"
            prefetch={false}
          >
            FAQ
          </Link>
          <Link
            href="#"
            className="hover:underline hover:underline-offset-4"
            prefetch={false}
          >
            Documentation
          </Link>
          <Link
            href="#"
            className="hover:underline hover:underline-offset-4"
            prefetch={false}
          >
            Privacy Policy
          </Link>
        </div>
        <div className="grid gap-2">
          <h3 className="font-semibold">Company</h3>
          <Link
            href="#"
            className="hover:underline hover:underline-offset-4"
            prefetch={false}
          >
            About Us
          </Link>
          <Link
            href="#"
            className="hover:underline hover:underline-offset-4"
            prefetch={false}
          >
            Our Team
          </Link>
          <Link
            href="#"
            className="hover:underline hover:underline-offset-4"
            prefetch={false}
          >
            Careers
          </Link>
          <Link
            href="#"
            className="hover:underline hover:underline-offset-4"
            prefetch={false}
          >
            Press
          </Link>
        </div>
        <div className="grid gap-2">
          <h3 className="font-semibold">Follow Us</h3>
          <div className="flex gap-4">
            <Link
              href="#"
              className="text-muted-foreground hover:text-primary"
              prefetch={false}
            >
              <TwitterIcon className="h-6 w-6" />
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-primary"
              prefetch={false}
            >
              <FacebookIcon className="h-6 w-6" />
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-primary"
              prefetch={false}
            >
              <InstagramIcon className="h-6 w-6" />
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-primary"
              prefetch={false}
            >
              <LinkedinIcon className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
      <div className="container max-w-7xl mt-8 text-center text-xs text-muted-foreground">
        &copy; 2024 Your Company. All rights reserved.
      </div>
    </footer>
  );
};

function FacebookIcon(props) {
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props) {
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon(props) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function TwitterIcon(props) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
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
export default Footer;
