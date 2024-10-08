"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import AnimatedCard from "./AnimatedCard";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowRightIcon, CheckCircle } from "lucide-react";
import Globe from "@/components/magicui/globe";
import ShinyButton from "@/components/magicui/shiny-button";
import { AnimatedShinyTextDemo } from "./AnimatedShinyTextDemo";
import { successData, OtherData } from "@/lib/data";
import Animsection from "./Animsection";
import AnimCard from "./AnimCard";
import { HeroScroll } from "./HomeScroll";
import { MarqueeDemo } from "./ReviewCard";
import TextReveal from "@/components/magicui/text-reveal";
import StreamlineHiringProcess from "./StreamlineHiringProcess";
export default function HomePage({ session }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <div className="c">
      <main className="flex-1">
        {/* <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-blue-100">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-5xl text-center lg:text-left font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                    Find Your Perfect Talent, Effortlessly
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Skildesk is your one-stop solution for all your recruitment
                    and talent management needs. Our cutting-edge platform
                    connects you with the best candidates, streamlines your
                    hiring process, and empowers you to build high-performing
                    teams.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
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
                  <Link
                    href="/about"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <img
                src="/hero1.gif"
                width="650"
                height="410"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section> */}
        <section className="px-4 py-20 text-center relative overflow-hidden bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white">
          <div className="container mx-auto ">
            {/* <div className="z-50 mb-[10rem]">
              <motion.h2
                className="text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.8 }}
              >
                Find Your Perfect Talent, Effortlessly
              </motion.h2>
              <motion.p
                className="text-xl mb-8 "
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Skildesk is your one-stop solution for all your recruitment and
                talent management needs. Our cutting-edge platform connects you
                with the best candidates, streamlines your hiring process, and
                empowers you to build high-performing teams.
              </motion.p>
              <motion.div
                className="z-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
               
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
                  <Link href="/mid">
                    <ShinyButton text="" className="" />
                  </Link>
                )}
              </motion.div>
            </div>
            <Globe className="top-[18rem]" />
            <div className="pointer-events-none absolute inset-0 h-full " /> */}
            <HeroScroll session={session} className="w-[60%]" />
            <motion.div
              className="z-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
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
                <Link href="/mid">
                  <Button
                    size="lg"
                    className="bg-white text-primary hover:bg-gray-100"
                  >
                    Get Started Now
                    <ArrowRightIcon className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              )}
            </motion.div>
          </div>
        </section>
        {/* <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4  text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 text-sm">
                  Beyond Recruitment
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Your Partner in Success
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Skildesk is more than just a recruitment platform. We&apos;re
                  your strategic partner, dedicated to helping you build
                  high-performing teams that drive your business forward.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                src="/hero2.svg"
                width="550"
                height="310"
                alt="Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center w-[20rem] lg:w-[50rem] lg:order-last"
              />
             
              <div className="flex flex-col justify-center space-y-4  w-[23rem] lg:w-full">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Talent Acquisition</h3>
                      <p className="w-[90%]">
                        Leverage our extensive network and advanced search
                        capabilities to find the best-fit candidates for your
                        roles.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Employer Branding</h3>
                      <p className="w-[90%]">
                        Showcase your company&apos;s unique culture and values
                        to attract top talent and build a strong employer brand.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Talent Management</h3>
                      <p className="w-[90%]">
                        Empower your teams with our comprehensive suite of tools
                        for performance management, learning and development,
                        and succession planning.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section> */}
        <section className=" px-4 py-20">
          <div className="container mx-auto flex flex-col items-center justify-center">
            <div className="space-y-2 flex flex-col justify-center items-center my-2">
              <div className="inline-block rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 text-sm">
                Beyond Recruitment
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Your Partner in Success
              </h2>
              <p className="max-w-[600px] text-center text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Skildesk goes beyond recruitment by partnering with businesses
                to build high-performing teams aligned with both immediate needs
                and long-term goals. They focus on finding top talent, fostering
                continuous improvement, and increasing employee engagement to
                ensure success. Skildesk positions itself as a strategic partner
                invested in client success, not just a service provider.
              </p>
            </div>

            <div className="mt-[10vh] mb-[5vh]">
              {successData.map((item, i) => (
                <Animsection key={`p_${i}`} i={i} data={item} />
              ))}
            </div>
          </div>
        </section>
        {/* <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="w-[90%] rounded-[5rem]  text-white flex flex-col justify-center items-center py-8">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-blue-950">
                    Unbeatable Value
                  </div>
                  <TextReveal text="Empower Your Business Today!" />

                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Join the growing number of companies that trust Skildesk to
                    streamline their hiring process and enhance workforce
                    effectiveness. Experience a seamless recruitment journey and
                    watch your team thrive.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <StreamlineHiringProcess session={session} />
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 text-sm">
                  24/7 Support
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  At Your Fingertips
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The demands of hiring and talent management don&apos;t always
                  align with traditional business hours. That’s why our
                  dedicated support team is available around the clock, 24/7, to
                  ensure you have the assistance you need, whenever you need it.
                  Whether you have questions, face challenges, or need guidance
                  on optimizing your recruitment process, our team is just a
                  click or call away.
                </p>
              </div>
            </div>
            <div className="mt-[10vh] mb-[5vh]">
              {OtherData.map((item, i) => (
                <Animsection key={`p_${i}`} i={i} data={item} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
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
