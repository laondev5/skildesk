import Container from "@/components/Container";
import { Button } from "@/components/ui/button";

import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="flex w-full h-[80vh] lg:h-[73vh]">
        <div className="flex-1 bg-blue-50 pt-[8rem] lg:pl-16">
          <h1 className="text-5xl text-center lg:text-left font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            Find the right <br /> Person for the job
          </h1>
          <p className="mt-4 text-center lg:text-left">
            Get started by editing <code>pages/index.js</code>
          </p>
          <div className="flex space-x-2 items-center justify-center lg:justify-start mt-4 mb-20 lg:mb-8">
            <Button variant="main" className="rounded-md">
              Start for free
            </Button>
            <Button variant="outline">Learn more</Button>
          </div>
        </div>
        <div className="hidden lg:flex flex-1 bg-blue-500">
          <Image
            src="/hero.svg"
            alt="hero-image"
            height={100}
            width={100}
            className="w-[500px] lg:absolute top-[10rem] right-[15rem]"
          />
        </div>
      </section>
      <section>
        <Container>
          <div className="flex flex-col lg:flex-row py-16">
            <div className=" flex  items-center justify-center flex-1">
              <Image
                src="/account.svg"
                alt="account"
                width={100}
                height={100}
                className="w-[470px]"
              />
            </div>
            <div className="flex-1 mt-10 px-4 lg:px-0">
              <h2 className="text-sem  font-bold text-center lg:text-left bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                Find the right Person for the job
              </h2>
              <h2 className="text-4xl font-bold mt-4 text-center lg:text-left">
                We Help Your <br /> Company To Grow
              </h2>
              <p className="mt-4 font-light text-center lg:text-left w-[100%] lg:w-[80%]">
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industrys standard dummy
              </p>
              <p className="mt-2 font-light text-center lg:text-left w-[100%] lg:w-[80%] ">
                Ipsum has been the industrys standard dummy
              </p>
              <div className="flex space-x-2 items-center justify-center lg:justify-start mt-4 mb-20 lg:mb-8">
                <Button variant="main" className="rounded-md">
                  Start for free
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
