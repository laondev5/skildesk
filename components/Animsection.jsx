"use client";
import { useTransform, useScroll, motion } from "framer-motion";

import { useRef } from "react";
import Image from "next/image";

// import styles from "./style.module.scss";
import styles from "./Card/style.module.scss";
import React from "react";

const Animsection = ({ data, i }) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  return (
    <div
      ref={container}
      className={`sticky top-[10rem] flex justify-center items-center h-[80vh]`}
    >
      <div
        className={`flex flex-col top-[-10px] h-[60%] lg:h-[90%] w-[75%] rounded-[2rem] py-10 shadow-md origin-top transform bg-gradient-to-br ${data.color}`}
        // style={{ backgroundColor: data.color }}
      >
        <h2 className="text-center text-2xl lg:text-3xl font-extrabold text-black my-6">
          {data.title}
        </h2>

        <div
          className={`flex h-[100%] w-[100%] flex-col lg:flex-row gap-10 items-center justify-center px-5 lg:px-[5rem]`}
        >
          <div className={` top-10 w-[100%] lg:flex-1`}>
            <p className="font-semibold w-[100%] text-[18px] lg:text-[20px] text-black text-center md:text-start">
              {data.description}
            </p>
          </div>

          <div
            className={`hidden w-[100%] flex-1 lg:flex justify-center items-center h-[80%] overflow-hidden rounded-[2rem]`}
          >
            <motion.div
              className={`w-[100%] h-[100%] overflow-hidden rounded-[2rem]`}
              style={{ scale: imageScale }}
            >
              <Image
                src={data.image}
                width={100}
                height={150}
                className="object-cover w-[100%] rounded-[2rem]"
                alt="image"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Animsection;
