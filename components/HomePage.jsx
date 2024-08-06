import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export default function HomePage({ session }) {
  return (
    <div className="flex flex-col min-h-[80dvh] overflow-x-hidden">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-blue-100">
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
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
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
              {/* <Image src="/hero4.png" alt="hero2" width={100} height={100} /> */}
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
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="w-[90%] lg:w-[60%] rounded-[5rem] bg-blue-950 text-white flex flex-col justify-center items-center py-8">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-blue-950">
                    Unbeatable Value
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Empower Your Business Today!
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Join the growing number of companies that trust Skildesk to
                    streamline their hiring process and enhance workforce
                    effectiveness. Experience a seamless recruitment journey and
                    watch your team thrive.
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="mx-auto grid  max-w-3xl lg:max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12 overflow-hidden">
              <div className="flex flex-col justify-center space-y-4 w-[23rem]">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold ">
                        Transparent Pricing
                      </h3>
                      <p className="  w-[90%]">
                        Our pricing is straightforward and easy to understand,
                        with no hidden fees or surprises.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Flexible Plans</h3>
                      <p className="w-[90%]">
                        Choose from a range of plans that fit your budget and
                        hiring needs, whether you&apos;re a small business or a
                        large enterprise.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Dedicated Support</h3>
                      <p className=" w-[90%]">
                        Our team of experts is always here to assist you and
                        ensure you get the most out of our platform.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <img
                src="/placeholder.svg"
                width="550"
                height="310"
                alt="Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div> */}
          </div>
        </section>
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
                  We understand that your hiring needs don&apos;t always fit
                  neatly into business hours. That&apos;s why our dedicated
                  support team is available 24/7 to assist you with any
                  questions or concerns you may have.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4 w-[23rem] lg:w-full">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Worldwide Reach</h3>
                      <p className="w-[90%]">
                        Our extensive network spans multiple continents,
                        allowing us to source top-tier talent from diverse
                        markets. This means you can access a global pool of
                        skilled candidates ready to contribute to your success.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Beyond Recruitment</h3>
                      <p className="w-[90%]">
                        Our commitment doesn’t end with hiring. Skildesk is
                        dedicated to helping you manage and enhance the
                        effectiveness of your workforce. We provide ongoing
                        support and tools to monitor performance, ensuring that
                        your team not only meets expectations but exceeds them.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        Tailored Management Strategies
                      </h3>
                      <p className="w-[90%]">
                        We believe that effective management is key to
                        maximizing productivity. Our experts work with you to
                        implement strategies that foster collaboration,
                        engagement, and continuous improvement
                        among your employees.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <img
                src="/hero3.gif"
                width="550"
                height="310"
                alt="Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full order-first lg:order-first"
              />
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
