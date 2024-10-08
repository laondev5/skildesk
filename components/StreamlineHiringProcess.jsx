"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, CheckCircleIcon } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function StreamlineHiringProcess({ session }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Empower Your Business Today!
        </h2>
        <p className="text-lg md:text-xl mb-8 text-center">
          Join the growing number of companies that trust Skildesk to
          revolutionize their hiring process and elevate their teams. Our
          platform streamlines recruitment, making it easier and faster for you
          to find the right talent. Empower your business today and watch your
          team thrive with Skildesk by your side
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12">
          <div className="flex items-center">
            <CheckCircleIcon className="w-6 h-6 mr-2" />
            <span>Streamlined Hiring</span>
          </div>
          <div className="flex items-center">
            <CheckCircleIcon className="w-6 h-6 mr-2" />
            <span>Enhanced Effectiveness</span>
          </div>
          <div className="flex items-center">
            <CheckCircleIcon className="w-6 h-6 mr-2" />
            <span>Seamless Experience</span>
          </div>
        </div>
        <div className="text-center">
          <motion.div
            className="z-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
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
              <Link href="/mid">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-gray-100"
                >
                  Get Started Now
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
