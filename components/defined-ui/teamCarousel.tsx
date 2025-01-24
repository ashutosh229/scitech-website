"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Member } from "@/types/member";
import { MemberCard } from "./memberCard";

interface CarouselProps {
  members: Member[];
}

export const TeamCarousel: React.FC<CarouselProps> = ({ members }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically rotate cards
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % members.length);
    }, 3000); // 3 seconds per card
    return () => clearInterval(interval);
  }, [members.length]);

  return (
    <div className="relative w-[24rem] h-[28rem] bg-gray-700 p-6 rounded-lg shadow-lg overflow-hidden mx-auto flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="w-full h-full flex items-center justify-center"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative w-[20rem] h-[24rem] bg-gray-800 p-4 rounded-md shadow-md flex items-center justify-center">
            <MemberCard member={members[currentIndex]} />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
