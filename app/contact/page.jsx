import React from "react";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import Image from "next/image";
const page = () => {
  return (
    <main>
      <div
        className="hidden lg:flex w-full h-[89vh] bg-cover  bg-center bg-no-repeat relative"
        style={{
          backgroundImage: "url('/contact bg.svg')",
        }}
      >
        <Container>
          <div className="w-[40%] pt-[12rem]">
            <h1 className="text-center lg:text-start text-white text-4xl font-bold">
              Contact Us
            </h1>
            <p className="text-center lg:text-start text-gray-100 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="my-4">
            <Button
              size="sm"
              variant="main"
              className="flex space-x-4 items-center"
            >
              <span>Give us a call</span>
              <span className="ml-2">
                <Phone className="w-4 h-4" />
              </span>
            </Button>
          </div>
        </Container>
      </div>
      <div className="z-[10]">
        <div className="flex flex-col lg:flex-row items-center">
          <div className=" w-[100%] lg:w-[40%] pt-[6rem] flex">
            <div className="w-[80%] mx-auto mt-4   pb-12">
              <h1 className="text-5xl text-center lg:text-left font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                What will <br /> be the next step?
              </h1>
              <p className="mt-4 text-center lg:text-left">
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industrys standard dummy
              </p>

              <div className="mt-4 flex p-4 shadow-md rounded-lg">
                <div className="w-[30%] flex justify-center items-center">
                  <div className="flex items-center justify-center rounded-full w-[2rem] h-[2rem] bg-purple-700 hover:bg-blue-950 shadow-md">
                    <h2 className="text-xl font-bold text-center text-white">
                      1
                    </h2>
                  </div>
                </div>
                <div className="w-[70%]">
                  <p className="mt-4 text-center lg:text-left">
                    is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industrys standard dummy
                  </p>
                </div>
              </div>

              <div className="mt-4 flex  p-4 shadow-md rounded-lg">
                <div className="w-[30%] flex justify-center items-center">
                  <div className="flex items-center justify-center rounded-full w-[2rem] h-[2rem] bg-purple-700 hover:bg-blue-950 shadow-md">
                    <h2 className="text-xl font-bold text-center text-white">
                      2
                    </h2>
                  </div>
                </div>
                <div className="w-[70%]">
                  <p className="mt-4 text-center lg:text-left">
                    is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industrys standard dummy
                  </p>
                </div>
              </div>

              <div className="mt-4 flex  p-4 shadow-md rounded-lg">
                <div className="w-[30%] flex justify-center items-center">
                  <div className="flex items-center justify-center rounded-full w-[2rem] h-[2rem] bg-purple-700 hover:bg-blue-950 shadow-md">
                    <h2 className="text-xl font-bold text-center text-white">
                      3
                    </h2>
                  </div>
                </div>
                <div className="w-[70%]">
                  <p className="mt-4 text-center lg:text-left">
                    is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industrys standard dummy
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[100%] lg:w-[60%] justify-center items-center py-10">
            <div className="w-[80%] lg:w-[50%] mx-auto bg-white rounded-md shadow-lg  lg:absolute lg:top-[27rem] lg:right-[3rem]  pb-12">
              <div className="w-[100%] h-[7rem] bg-gray-50 flex py-3">
                <di className="flex w-[80%] mx-auto py-3">
                  <div className="w-[40%] flex items-center justify-center">
                    <Image
                      src="/contact.svg"
                      alt="contact"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="w-[60%]">
                    <p>
                      simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum
                    </p>
                  </div>
                </di>
              </div>
              <div className="w-[90%] mx-auto">
                <form className="w-[100%]">
                  <h2 className="text-center my-4 text-3xl font-extrabold text-blue-950">
                    Contact us
                  </h2>
                  <div className="my-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="name"
                    >
                      Fullname
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="name"
                      type="text"
                      placeholder="Fullname"
                    />
                  </div>
                  <div className="my-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="my-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="email"
                    >
                      Message
                    </label>
                    <textarea
                      placeholder="Message..."
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    ></textarea>
                  </div>
                  <div className="my-4">
                    <Button className="w-full" variant="main">
                      Send
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
