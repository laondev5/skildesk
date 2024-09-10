"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import AnimatedCard from "./AnimatedCard";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { HeroScroll } from "./HomeScroll";

const NewHomeScreen = ({ session }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <div className="flex flex-col min-h-[80dvh] overflow-x-hidden">
      <main className="flex-1">
        <section>
          <HeroScroll />
        </section>
      </main>
    </div>
  );
};

export default NewHomeScreen;
