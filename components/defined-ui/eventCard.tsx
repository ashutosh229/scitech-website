import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface EventProps {
  title: string;
  hosting: string;
  description: React.ReactNode;
  date: string;
  month: string;
  year: string;
  time: string;
  location: string;
  image: string;
}

export default function EventCard({
  title,
  hosting,
  description,
  date,
  month,
  year,
  time,
  location,
  image,
}: EventProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5 }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
      className="relative w-[350px] sm:w-[400px] md:w-[450px] bg-white bg-opacity-10 backdrop-blur-md rounded-2xl border border-gray-200 shadow-xl overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Event Image */}
      <div className="relative w-full h-56">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-2xl"
        />
      </div>

      {/* Floating Date Badge */}
      <motion.div
        animate={{ y: isHovered ? -10 : 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="absolute top-4 left-4 bg-black bg-opacity-75 text-white px-3 py-2 rounded-lg shadow-lg"
      >
        <p className="text-lg font-bold">{date}</p>
        <p className="text-sm uppercase">{month}</p>
      </motion.div>

      {/* Event Content */}
      <Card className="p-4">
        <CardContent>
          <h2 className="text-xl font-bold text-white">{title}</h2>
          <p className="text-sm text-gray-300">{hosting}</p>

          {/* Auto-Scrolling Description */}
          <div className="mt-2 max-h-20 overflow-hidden hover:overflow-auto transition-all duration-500 scrollbar-hide">
            <p className="text-sm text-gray-200">{description}</p>
          </div>

          <div className="mt-4 flex justify-between text-gray-300 text-sm">
            <p>📍 {location}</p>
            <p>⏰ {time}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
