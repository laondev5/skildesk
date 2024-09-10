"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const AnimatedCard = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="w-80 h-48 bg-white rounded-lg shadow-lg overflow-hidden p-4"
    >
      <h2 className="text-xl font-bold">Card Title</h2>
      <p className="text-gray-600">Card description goes here.</p>
    </motion.div>
  );
};

export default AnimatedCard;
