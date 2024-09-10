"use client";
import React from "react";
//import { ContainerScroll } from "../ui/container-scroll-animation";
import { ContainerScroll } from "./ui/container-scroll-animation";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import ShinyButton from "./magicui/shiny-button";
// import { motion } from "framer-motion";

export function HeroScroll({ session }) {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              Find Your Perfect Talent, Effortlessly <br />
              <span className="text-2xl md:text-[6rem] font-bold mt-1 leading-none text-gray-600 ">
                Skildesk is your one-stop solution
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/n1.png`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
