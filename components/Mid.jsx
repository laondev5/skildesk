"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Mid() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const calculateDistance = (x, y) => {
    const dx = x - mousePosition.x;
    const dy = y - mousePosition.y;
    return Math.sqrt(dx * dx + dy * dy);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-700 via-pink-600 to-orange-500 p-4">
      <div className="relative w-full max-w-4xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Unlock Your Teams Potential
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8">
            Empower your mid-level managers with the skills they need to excel
          </p>
        </motion.div>

        {[
          { top: "10%", left: "5%", label: "Leadership" },
          { top: "20%", right: "5%", label: "Communication" },
          { bottom: "15%", left: "10%", label: "Problem Solving" },
          { bottom: "25%", right: "10%", label: "Time Management" },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="absolute bg-white bg-opacity-20 backdrop-blur-lg rounded-lg p-4 shadow-lg text-white font-semibold"
            style={item}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            {item.label}
          </motion.div>
        ))}

        {[...Array(20)].map((_, index) => {
          const x = Math.random() * 100;
          const y = Math.random() * 100;
          return (
            <motion.div
              key={index}
              className="absolute w-2 h-2 bg-white rounded-full"
              style={{ left: `${x}%`, top: `${y}%` }}
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 2 + 1,
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
          );
        })}

        <div className="flex space-x-6 items-center w-full justify-center mt-[10rem] py-10">
          <Link href="/register-vendor">
            <motion.button
              className="bg-white text-purple-700 px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-opacity-90 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sign up as a recruiter
            </motion.button>
          </Link>
          <Link href="/register">
            <motion.button
              className="bg-white text-purple-700 px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-opacity-90 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sign up as a job seeker
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
}
