import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { getServerSession } from "next-auth/next";
import Head from "next/head";
import { authOptions } from "./api/auth/[...nextauth]/route";
import NewsLetter from "@/components/NewsLetter";
import HomePage from "@/components/HomePage";
export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main>
      <Navbar />
      <NewsLetter />
      <HomePage session={session} />

      {/* <section className="relative flex w-full h-[80vh] lg:h-[73vh] overflow-hidden">
       
        <div
          className="hidden lg:flex w-full h-[100] bg-cover bg-blue-100  bg-center bg-no-repeat relative"
          
        >
          <Container>
            <div className="flex  z-[100]">
              <div className="lg:flex-1  pt-[8rem] ">
                <h1 className="text-5xl text-center lg:text-left font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                  Your Gateway to New Career Opportunities
                </h1>
                <p className="mt-4 text-center text-lg text-white lg:text-blue-950 lg:text-left">
                  Ready for your next career move? Skildesk connects job seekers
                  with top companies across various industries. Find the right
                  job that matches your skills and aspirations easily on our
                  platform.
                </p>
                <div className="flex space-x-2 items-center justify-center lg:justify-start mt-4 mb-20 lg:mb-8">
                  {session?.user ? (
                    <Button className="rounded-md">
                      {session?.user?.role === "VENDOR" ? (
                        <Link href="/vendor">Continue to dashboard</Link>
                      ) : session?.user?.role === "USER" ? (
                        <Link href="/user">Apply for a job</Link>
                      ) : (
                        <Link href="/admin">Continue to dashboard</Link>
                      )}
                    </Button>
                  ) : (
                    <Button className="rounded-md">
                      <Link href="/mid">Get started</Link>
                    </Button>
                  )}

                  <Button variant="outline">
                    <Link href="/about">Learn more</Link>
                  </Button>
                </div>
              </div>
              <div className="hidden lg:flex lg:flex-1 ">
                <Image
                  src="/Team.svg"
                  alt="hero-image"
                  height={100}
                  width={100}
                  className="w-[70rem]"
                />
              </div>
            </div>
          </Container>
        </div>

       
        <div
          className="flex lg:hidden w-full h-[100] bg-cover justify-center items-center  bg-center bg-no-repeat relative"
          style={{
            backgroundImage: "url('/mobile.svg')",
          }}
        >
          <div className=" pt-[8rem] lg:pl-16 xl:pl-[10rem]">
            <h1 className="text-5xl md:text-[4rem] text-center lg:text-left font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              Your Gateway to New Career Opportunities
            </h1>
            <p className="mt-4 text-center text-lg text-white lg:text-blue-950 lg:text-left">
              Ready for your next career move? Skildesk connects job seekers
              with top companies across various industries. Find the right job
              that matches your skills and aspirations easily on our platform.
            </p>
            <div className="flex space-x-2 items-center justify-center lg:justify-start mt-4 mb-20 lg:mb-8">
              {session?.user ? (
                <Button className="rounded-md">
                  {session?.user?.role === "VENDOR" ? (
                    <Link href="/vendor">Continue to dashboard</Link>
                  ) : session?.user?.role === "USER" ? (
                    <Link href="/user">Apply for a job</Link>
                  ) : (
                    <Link href="/admin">Continue to dashboard</Link>
                  )}
                </Button>
              ) : (
                <Button className="rounded-md">
                  <Link href="/register">Start for free</Link>
                </Button>
              )}
              <Button variant="outline">
                <Link href="/about">Learn more</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
     

      <section>
        <Container>
          <div className="flex flex-col lg:flex-row py-16">
            <div className=" flex  items-center justify-center flex-1">
              <Image
                src="/find1.svg"
                alt="account"
                width={100}
                height={100}
                className="w-[470px]"
              />
            </div>
            <div className="flex-1 mt-10 px-4 lg:px-0">
              <h2 className="text-sem  font-bold text-center lg:text-left bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                Join Skildesk today and start your journey towards a rewarding
                career
              </h2>
              <h2 className="text-4xl font-bold mt-4 text-center lg:text-left">
                Let us Save you Time <br />
                and unbearable Cost
              </h2>
              <p className="mt-4 font-light text-center lg:text-left w-[100%] lg:w-[80%]">
                Let us Connect you with top talent that aligns perfectly with
                your company vision and culture.
              </p>

              <div className="flex space-x-2 items-center justify-center lg:justify-start mt-4 mb-20 lg:mb-8">
                {session?.user ? (
                  <Button className="rounded-md">
                    {session?.user?.role === "VENDOR" ? (
                      <Link href="/vendor">Continue to dashboard</Link>
                    ) : session?.user?.role === "USER" ? (
                      <Link href="/user">Apply for a job</Link>
                    ) : (
                      <Link href="/admin">Continue to dashboard</Link>
                    )}
                  </Button>
                ) : (
                  <Button className="rounded-md">
                    <Link href="/register">Start for free</Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="bg-[#F5F8FF] py-10">
        <Container>
          <div className="flex w-full flex-col relative">
           
            <div className="w-[100%] rounded-2xl bg-blue-950 my-3 flex flex-col lg:flex-row justify-evenly items-center px-6">
              <div className="flex-1">
                <Image
                  src="/find2.svg"
                  alt="account"
                  width={100}
                  height={100}
                  className="w-[470px]"
                />
              </div>
              <div className="flex-1">
                <h2 className="  text-2xl w-[60%] mb-6  font-bold   text-white">
                  Say goodbye to high labor costs and hello to streamlined
                  hiring processes
                </h2>
                {session?.user ? (
                  <Button className="rounded-md">
                    {session?.user?.role === "VENDOR" ? (
                      <Link href="/vendor">Continue to dashboard</Link>
                    ) : session?.user?.role === "USER" ? (
                      <Link href="/user">Apply for a job</Link>
                    ) : (
                      <Link href="/admin">Continue to dashboard</Link>
                    )}
                  </Button>
                ) : (
                  <Button className="rounded-md">
                    <Link href="/register">Start for free</Link>
                  </Button>
                )}
              </div>
            </div>
            <div className="w-[100%] grid grid-cols-1 md:grid-cols-2 justify-evenly gap-8 mt-6 ">
              <div className="w-[80%] lg:w-[35rem] bg-white rounded-md hover:shadow-md p-4">
                <div className="flex justify-center items-center w-fill">
                  <Image
                    src="/find3.svg"
                    alt="account"
                    width={100}
                    height={100}
                    className="w-[7rem]"
                  />
                </div>
                <div className="flex justify-center items-center w-fill">
                  <h2 className="  text-sm text-center   font-semibold   lg:text-left bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                    Outsource & Contracts
                  </h2>
                </div>
                <div className="flex justify-center items-center w-fill my-3">
                  <p className="text-md w-[80%] text-center">
                    Streamline your project delivery with Skildesks outsourcing
                    and contract services. Whether you need short-term
                    engagements or a team assembled for a specific project, weve
                    got you covered.
                  </p>
                </div>
              </div>
              <div className="w-[80%] lg:w-[35rem] bg-white rounded-md hover:shadow-md p-4">
                <div className="flex justify-center items-center w-fill">
                  <Image
                    src="/find4.svg"
                    alt="account"
                    width={100}
                    height={100}
                    className="w-[7rem]"
                  />
                </div>
                <div className="flex justify-center items-center w-fill">
                  <h2 className="  text-sm text-center   font-semibold   lg:text-left bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                    Hire Full-time
                  </h2>
                </div>
                <div className="flex justify-center items-center w-fill my-3">
                  <p className="text-md w-[80%] text-center">
                    Discover top-tier full-time talent with Skildesks expert
                    team assembly services. Whether you require short-term
                    engagements or a dedicated team to deliver a project, we
                    have the solution for you.
                  </p>
                </div>
              </div>
            </div>
          </div>
         
        </Container>
      </section>
    
      <section className="mt-4 lg:mt-12 px-3 ">
        <Container>
          <div className="flex flex-col lg:flex-row items-center py-12">
            <div className="flex-1">
              <h2 className="text-2xl lg:mt-[3rem]  font-bold text-center lg:text-left bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                Hire Top Talent Worldwide,
                <br /> Work Remotely Anywhere
              </h2>

              <p className="mt-4 font-light text-center lg:text-left w-[100%] lg:w-[80%]">
                Experience the freedom of hiring top talent from around the
                globe and working from any location with Skildesk. Our platform
                enables seamless recruitment of top-tier professionals
                regardless of their geographical location.
              </p>
            </div>
            <div className="w-[100%] mx-auto flex-1 flex justify-center items-center mt-6">
              <Image
                src="/find5.svg"
                alt="hero-image"
                height={100}
                width={100}
                className="w-[460px]"
              />
            </div>
          </div>
        </Container>
      </section> */}
      <Footer />
    </main>
  );
}
