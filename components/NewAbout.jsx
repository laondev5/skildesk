"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRightIcon, Rocket, Zap, Target, Sparkles } from "lucide-react";

const MotionCard = motion(Card);

export default function AboutPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-pink-50 to-red-50">
      <motion.header
        className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white py-24 px-4 sm:px-6 lg:px-8"
        initial={{ height: 0 }}
        animate={{ height: "auto" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0 bg-black opacity-20"
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 opacity-75"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </div>
        <div className="relative max-w-3xl mx-auto text-center">
          <motion.h1
            className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4"
            {...fadeIn}
          >
            About Skildesk
          </motion.h1>
          <motion.p className="text-xl" {...fadeIn} transition={{ delay: 0.2 }}>
            Empowering businesses with innovative hiring solutions
          </motion.p>
        </div>
      </motion.header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.section
          className="mb-20"
          initial="initial"
          animate="animate"
          variants={staggerChildren}
        >
          <motion.h2
            className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600"
            variants={fadeIn}
          >
            Our Mission
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto"
            variants={fadeIn}
          >
            At Skildesk, were on a mission to revolutionize the hiring process.
            We believe that finding the right talent should be efficient,
            data-driven, and tailored to each companys unique needs.
          </motion.p>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerChildren}
          >
            {[
              {
                icon: Rocket,
                title: "Accelerate Hiring",
                description: "Streamline your recruitment process",
                gradient: "from-purple-400 to-indigo-500",
              },
              {
                icon: Zap,
                title: "Empower Decisions",
                description: "Data-driven insights for better choices",
                gradient: "from-green-400 to-cyan-500",
              },
              {
                icon: Target,
                title: "Precision Matching",
                description: "Find the perfect fit for your team",
                gradient: "from-yellow-400 to-orange-500",
              },
              {
                icon: Sparkles,
                title: "Innovative Tools",
                description: "Cutting-edge solutions for modern hiring",
                gradient: "from-pink-400 to-red-500",
              },
            ].map((item, index) => (
              <MotionCard
                key={index}
                className={`p-6 text-center hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br ${item.gradient} text-white`}
                variants={fadeIn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <item.icon className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p>{item.description}</p>
              </MotionCard>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          className="text-center"
          initial="initial"
          animate="animate"
          variants={staggerChildren}
        >
          <motion.h2
            className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600"
            variants={fadeIn}
          >
            Join Us in Shaping the Future of Hiring
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto"
            variants={fadeIn}
          >
            Were always looking for passionate individuals to join our team. If
            youre excited about revolutionizing the hiring process, wed love to
            hear from you.
          </motion.p>
          <motion.div variants={fadeIn}>
            <Button
              size="lg"
              className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
            >
              View Open Positions
              <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </motion.section>
      </main>

      <motion.footer
        className="bg-gradient-to-r from-purple-100 to-pink-100 py-12 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-600">© 2024 Skildesk. All rights reserved.</p>
        </div>
      </motion.footer>
    </div>
  );
}
