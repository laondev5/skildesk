import { Button } from "@/components/ui/button";
import React from "react";

const page = () => {
  return (
    <div className="flex h-screen">
      <div className="flex-1 flex justify-center items-center">
        <div className="w-[80%]">
          <form className="w-[90%]">
            <h1 className="text-center text-3xl font-extrabold">Sign up</h1>
            <div className="my-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Fullname
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Enter Fullname..."
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
                placeholder="Enter Email....."
              />
            </div>
            <div className="my-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="my-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Confirm Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Confirm Password"
              />
            </div>
            <div className="my-4">
              <Button size="lg" variant="main" className="w-full">
                Sign up
              </Button>
            </div>
          </form>
        </div>
      </div>
      <div
        className="flex-1 hidden lg:flex w-full h-[100] bg-cover  bg-center bg-no-repeat relative"
        style={{
          backgroundImage: "url('/register.svg')",
        }}
      ></div>
    </div>
  );
};

export default page;
