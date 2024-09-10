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

        <div className={`flex h-[100%]  mt-10 px-[5rem]`}>
          <div className={`relative top-10 w-[40%]`}>
            <p className="font-semibold text-[18px] text-white">
              {data.description}
            </p>

            {/* <span>
              <a href={url} target="_blank">
                See more
              </a>

              <svg
                width="22"
                height="12"
                viewBox="0 0 22 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                  fill="black"
                />
              </svg>
            </span> */}
          </div>

          <div
            className={`relative w-[60%] h-[100%] overflow-hidden rounded-xl`}
          >
            <motion.div
              className={`w-[100%] h-[100%] overflow-hidden`}
              style={{ scale: imageScale }}
            >
              <Image
                fill
                src={data.image}
                className="object-fill w-[20rem] rounded-xl"
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
