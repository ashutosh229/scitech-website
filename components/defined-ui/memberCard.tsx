// MemberCard.tsx - Enhanced 3D Tilt Effect
"use client";

import React from "react";
import { animated, useSpring } from "@react-spring/web";
import Image from "next/image";
import { Member } from "@/types/member";

interface MemberCardProps {
  member: Member;
}

export const MemberCard: React.FC<MemberCardProps> = ({ member }) => {
  const [springProps, setSpringProps] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 1, tension: 350, friction: 40 },
  }));

  const calc = (x: number, y: number, rect: DOMRect) => [
    -(y - rect.top - rect.height / 2) / 10,
    (x - rect.left - rect.width / 2) / 10,
    1.1, // Increased scaling for a more prominent effect
  ];

  return (
    <animated.div
      className="relative w-[20rem] h-[24rem] bg-white/10 backdrop-blur-lg rounded-xl shadow-lg overflow-hidden flex flex-col items-center justify-center border border-white/20 cursor-pointer"
      style={{
        transform: springProps.xys.to(
          (x, y, s) =>
            `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
        ),
      }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setSpringProps.start({ xys: calc(e.clientX, e.clientY, rect) });
      }}
      onMouseLeave={() => setSpringProps.start({ xys: [0, 0, 1] })}
    >
      <Image
        src={member.photo}
        alt={member.name}
        width={120}
        height={120}
        className="rounded-full object-cover mb-4 border-4 border-white/30"
      />
      <h3 className="text-xl font-bold text-white">{member.name}</h3>
      <p className="text-sm text-blue-400">{member.position}</p>
      <p className="text-sm text-black">{member.phone}</p>
      <p className="text-sm text-blue-400">{member.position}</p>
    </animated.div>
  );
};
