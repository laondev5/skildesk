"use client";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from "framer-motion";
import { useRef, useEffect } from "react";

// const cards = [
//   { id: 1, title: "Card 1", color: "bg-red-400" },
//   { id: 2, title: "Card 2", color: "bg-blue-400" },
//   { id: 3, title: "Card 3", color: "bg-green-400" },
//   { id: 4, title: "Card 4", color: "bg-yellow-400" },
// ];

function Card({ card, index, progress }) {
  const offset = index * 50;
  const y = useTransform(progress, [0, 1], [0, -offset]);
  const scale = useTransform(progress, [0, 1], [1, 0.95]);

  return (
    <motion.div
      style={{ y, scale, backgroundColor: card.color }}
      className={`absolute w-[80%] h-80 rounded-lg shadow-lg ${card.color}`}
    >
      <div className="flex items-center justify-center h-full text-black text-2xl font-bold">
        {card.title}
      </div>
    </motion.div>
  );
}

export default function AnimCard({ data }) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.5 });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    if (isInView) {
      // You can add any additional animations here when the component comes into view
    }
  }, [isInView]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center  p-4">
      <div className="h-screen" /> {/* Spacer to allow scrolling */}
      <div ref={containerRef} className="relative w-full h-[500px] mb-[50vh]">
        {data.map((card, index) => (
          <Card
            key={card.id}
            card={card}
            index={index}
            progress={smoothProgress}
          />
        ))}
      </div>
      <div className="h-screen" /> {/* Spacer to allow scrolling */}
    </div>
  );
}
