"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Member } from "@/types/member";

interface MemberCardProps {
  member: Member;
}

const MemberCard: React.FC<MemberCardProps> = ({ member }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className="relative w-[20rem] h-[24rem] bg-transparent"
      onClick={handleFlip}
      style={{ perspective: "1000px" }} // Adds depth for 3D effect
    >
      <motion.div
        className="relative w-full h-full rounded-lg shadow-lg"
        animate={{ rotateY: isFlipped ? 180 : 0 }} // Controls flip animation
        transition={{ duration: 0.8 }} // Duration of the flip
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Front Side */}
        <div
          className="absolute w-full h-full bg-gray-800 rounded-lg flex flex-col items-center justify-center"
          style={{
            backfaceVisibility: "hidden",
          }}
        >
          <Image
            src={member.photo}
            alt={member.name}
            width={120}
            height={120}
            className="rounded-full object-cover mb-4"
          />
          <h3 className="text-xl font-bold text-white">{member.name}</h3>
        </div>

        {/* Back Side */}
        <div
          className="absolute w-full h-full bg-gray-900 rounded-lg flex flex-col justify-center items-center px-6"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <h4 className="text-lg font-semibold text-blue-400 mb-2">
            {member.position}
          </h4>
          <p className="text-sm text-gray-400 mb-2">Email: {member.email}</p>
          <p className="text-sm text-gray-400 mb-4">Phone: {member.phone}</p>
          <p className="text-sm text-white text-center">{member.note}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default MemberCard;
