"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { clubLogos } from "@/data/clubs";
import imagesPath from "@/data/images";

const CircularImages: React.FC = () => {
  const centerX = 50; // Center X coordinate (percentage)
  const centerY = 50; // Center Y coordinate (percentage)

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [radius, setRadius] = useState<number>(
    typeof window !== "undefined" && window.innerWidth > 640 ? 40 : 30
  );

  useEffect(() => {
    const handleResize = () => {
      setRadius(window.innerWidth > 640 ? 40 : 30);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="h-full w-full mx-auto">
      <div className="relative h-full w-[100vh] max-w-full mx-auto">
        <img
          src={imagesPath.home.logoCircleGif}
          alt="Center"
          className="absolute w-28 h-28 sm:w-32 sm:h-32 lg:w-44 lg:h-44 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />

        {clubLogos.map((img, index) => {
          const angle = (index / clubLogos.length) * (2 * Math.PI);
          const x = centerX + radius * Math.cos(angle);
          const y = centerY + radius * Math.sin(angle);

          return (
            <Link
              key={index}
              href={img.href}
              className="absolute transition-transform duration-300 ease-in-out overflow-visible"
              style={{
                top: `${y}%`,
                left: `${x}%`,
                transform: `translate(-50%, -50%) scale(${
                  hoveredIndex === index ? 1.5 : 1
                })`,
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-14 h-14 sm:w-16 sm:h-16 lg:w-24 lg:h-24"
              />
              {hoveredIndex === index && (
                <p className="text-[#0A66C2] absolute w-max text-center -bottom-5 left-1/2 transform -translate-x-1/2 z-50">
                  {img.name}
                </p>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CircularImages;
