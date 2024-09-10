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
      className={`sticky top-[10rem] flex justify-center items-center h-[70vh]`}
    >
      <div
        className={`flex flex-col top-[-10px] relative h-[100%] w-[100%] rounded-xl py-10 shadow-md origin-top transform`}
        style={{ backgroundColor: data.color }}
      >
        <h2 className="text-center text-3xl font-extrabold text-white my-6">
          {data.title}
        </h2>

        <div
          className={`flex h-[100%] flex-col lg:flex-row gap-10 mt-10 px-[5rem]`}
        >
          <div className={` top-10 w-[100%] md:w-[40%]`}>
            <p className="font-semibold text-[18px] text-white text-center md:text-start">
              {data.description}
            </p>
          </div>

          <div
            className={`w-[100%] md:w-[60%] h-[100%] overflow-hidden rounded-xl`}
          >
            <motion.div
              className={`w-[100%] h-[100%] overflow-hidden`}
              style={{ scale: imageScale }}
            >
              <Image
                fill
                src={data.image}
                className="object-fill w-[20rem] rounded-md"
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
