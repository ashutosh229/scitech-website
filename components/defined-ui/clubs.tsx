"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

interface Image {
  src: string;
  alt: string;
  name: string;
  href: string;
}

const CircularImages: React.FC = () => {
  const images: Image[] = [
    {
      src: "club_logo/GDSC.png",
      alt: "GDSC Club",
      name: "GDSC",
      href: "/club/gdsc",
    },
    {
      src: "club_logo/SES Logo.png",
      alt: "SES Logo",
      name: "SES",
      href: "/club/ses",
    },
    {
      src: "club_logo/BIB.png",
      alt: "BIB Logo",
      name: "BlockChain",
      href: "/club/blockchain",
    },
    {
      src: "club_logo/OPENLAKE.png",
      alt: "OPENLAKE Club",
      name: "Openlake",
      href: "/club/openlake",
    },
    {
      src: "club_logo/Motorsports.png",
      alt: "Motorsports Club",
      name: "Motorsports",
      href: "/club/motorsports",
    },
    {
      src: "club_logo/epsilon_logo_new.png",
      alt: "Epsilon Logo",
      name: "Epsilon",
      href: "/club/epsilon",
    },
    {
      src: "club_logo/ING.png",
      alt: "ING Logo",
      name: "Ingenuity",
      href: "/club/ingenuity",
    },
    {
      src: "club_logo/DSAI.png",
      alt: "DSAI Logo",
      name: "DSAI",
      href: "/club/dsai",
    },
    {
      src: "club_logo/Electromos.png",
      alt: "Electromos Logo",
      name: "Electromos",
      href: "/club/electromos",
    },
    {
      src: "club_logo/DSAI.png",
      alt: "Spectra Logo",
      name: "Spectra",
      href: "/club/spectra",
    },
  ];

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
          src="scitechgif.gif"
          alt="Center"
          className="absolute w-28 h-28 sm:w-32 sm:h-32 lg:w-44 lg:h-44 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />

        {images.map((img, index) => {
          const angle = (index / images.length) * (2 * Math.PI);
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
