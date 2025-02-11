"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Member {
  name: string;
  email: string;
  icon: string;
  position: string;
}

interface MembersCarouselProps {
  members: Member[];
}

export default function MembersCarousel({ members }: MembersCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % members.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [members.length]);

  return (
    <div className="relative flex items-center justify-center h-[400px] overflow-hidden">
      {members.map((member, index) => {
        const distance =
          (index - currentIndex + members.length) % members.length;
        const scale = distance === 0 ? 1.1 : 0.8;
        const opacity = distance === 0 ? 1 : 0.5;

        return (
          <motion.div
            key={member.email}
            className={cn(
              "absolute w-[250px] h-[300px] bg-white bg-opacity-10 backdrop-blur-md rounded-xl shadow-lg flex flex-col items-center justify-center transition-all duration-500",
              {
                "z-10 scale-110": distance === 0,
                "z-0 scale-90": distance !== 0,
              }
            )}
            animate={{ scale, opacity }}
            transition={{ duration: 0.5 }}
            style={{
              transform: `translateX(${distance * 250}px)`,
            }}
          >
            <Image
              src={member.icon}
              alt={member.name}
              width={100}
              height={100}
              className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
            />
            <h3 className="text-xl font-semibold text-white mt-4">
              {member.name}
            </h3>
            <p className="text-sm text-gray-300">{member.position}</p>
          </motion.div>
        );
      })}
    </div>
  );
}
