import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NewAbout from "@/components/NewAbout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const AboutUs = () => {
  return (
    <>
      <Navbar />

      {/* <main className="">
        <section
          className="text-center mb-16 bg-cover py-16 bg-no-repeat relative"
          style={{
            backgroundImage: "url('/mobile.svg')",
          }}
        >
          <Container>
            <h1 className="text-4xl font-bold mb-4 text-white">About us</h1>
            <p className="text-lg text-muted-foreground">
              We are dedicated to connecting job seekers with exciting career
              opportunities and helping companies find the perfect candidates to
              fulfill their job positions
            </p>
          </Container>
        </section>
        <section className="mb-16">
          <Container>
            <div className="flex  flex-col lg:flex-row gap-8 items-center px-8 lg:px-0">
              <div className="flex-1 space-y-4">
                <h2 className="text-3xl text-center lg:text-start font-bold mb-4">
                  About Company
                </h2>
                <p className="text-center lg:text-start">
                  At Skildesk, we understand the challenges both job seekers and
                  companies face in the recruitment process. Our mission is to
                  simplify this process by providing a user-friendly interface
                  that streamlines job applications and job postings, making it
                  easier for both parties to find the right match
                </p>
              </div>
              <Image
                src="/work1.jpg"
                alt="Company"
                width={100}
                height={100}
                unOptimized
                className="w-[400px] h-[300px] object-cover rounded-lg"
              />
            </div>
          </Container>
        </section>
        <section className="mb-16 text-center bg-gray-50 py-20 px-8 lg:px-0">
          <Container>
            <h2 className="text-3xl font-bold mb-4">Company Unique Factor</h2>
            <div className="flex justify-center gap-4">
              <Card className="w-1/4">
                <CardContent className="text-center">
                  <ComponentIcon className="w-10 h-10 mx-auto mb-4" />
                  <p>Unique Factor 1</p>
                </CardContent>
              </Card>
              <Card className="w-1/4">
                <CardContent className="text-center">
                  <Link2Icon className="w-10 h-10 mx-auto mb-4" />
                  <p>Unique Factor 2</p>
                </CardContent>
              </Card>
              <Card className="w-1/4">
                <CardContent className="text-center">
                  <Disc3Icon className="w-10 h-10 mx-auto mb-4" />
                  <p>Unique Factor 3</p>
                </CardContent>
              </Card>
              <Card className="w-1/4 bg-primary text-primary-foreground">
                <CardContent className="text-center">
                  <VariableIcon className="w-10 h-10 mx-auto mb-4" />
                  <p>Unique Factor 4</p>
                </CardContent>
              </Card>
            </div>
          </Container>
        </section>
       
        <section className="mb-16">
          <Container>
            <div className="flex  flex-col lg:flex-row gap-8 items-center px-8 lg:px-0">
              <Image
                src="/work1.jpg"
                alt="Company"
                width={100}
                height={100}
                className="w-[400px] h-[300px] object-cover rounded-lg"
              />
              <div className="flex-1 space-y-4">
                <h2 className="text-3xl text-center lg:text-start font-bold mb-4">
                  For Job Seekers
                </h2>
                <p className="text-center lg:text-start">
                  Whether you are a recent graduate looking for your first job
                  or a seasoned professional seeking a new challenge, skildesk
                  is here to support you in your job search journey. we offers a
                  wide range of job listings across various industries, allowing
                  you to explore opportunities that match your skills and career
                  goals. With our easy-to-use application system, applying for
                  jobs has never been more straightforward.
                </p>
              </div>
            </div>
          </Container>
        </section>
        <section className="mb-16">
          <Container>
            <div className="flex flex-col lg:flex-row gap-8 items-center px-8 lg:px-0">
              <div className="flex-1 space-y-4">
                <h2 className="text-3xl text-center lg:text-start font-bold mb-4">
                  For Companies
                </h2>
                <p className="text-center lg:text-start">
                  Finding the right talent for your organization is crucial for
                  success. With skildesk, you can reach a diverse pool of
                  qualified candidates and showcase your job openings to a broad
                  audience. Our team of professionals streamlines the
                  recruitment process, from monitoring job postings to managing
                  applications efficiently. Let us help you find the perfect
                  candidate to join your team and contribute to your companies
                  growth.
                </p>
              </div>
              <img
                src="/work1.jpg"
                alt="Company"
                className="w-[400px] h-[300px] object-cover rounded-lg"
              />
            </div>
          </Container>
        </section>
      </main> */}
      <NewAbout />

      <Footer />
    </>
  );
};

function ComponentIcon(props) {
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
      <path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z" />
      <path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z" />
      <path d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z" />
      <path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z" />
    </svg>
  );
}

function Disc3Icon(props) {
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
      <path d="M6 12c0-1.7.7-3.2 1.8-4.2" />
      <circle cx="12" cy="12" r="2" />
      <path d="M18 12c0 1.7-.7 3.2-1.8 4.2" />
    </svg>
  );
}

function Link2Icon(props) {
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
      <path d="M9 17H7A5 5 0 0 1 7 7h2" />
      <path d="M15 7h2a5 5 0 1 1 0 10h-2" />
      <line x1="8" x2="16" y1="12" y2="12" />
    </svg>
  );
}

function VariableIcon(props) {
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
      <path d="M8 21s-4-3-4-9 4-9 4-9" />
      <path d="M16 3s4 3 4 9-4 9-4 9" />
      <line x1="15" x2="9" y1="9" y2="15" />
      <line x1="9" x2="15" y1="9" y2="15" />
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

export default AboutUs;
