"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface EventCardProps {
  eventImage: string;
  clubName: string;
  eventName: string;
}

const EventCard: React.FC<EventCardProps> = ({
  eventImage,
  clubName,
  eventName,
}) => {
  return (
    <motion.div
      className="relative w-72 h-96 rounded-lg shadow-lg overflow-hidden cursor-pointer"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      {/* Event Image */}
      <Image
        src={eventImage}
        alt={eventName}
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 w-full h-full"
      />

      {/* Overlay Content */}
      <motion.div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-lg font-bold text-white mb-2">{clubName}</h3>
        <p className="text-sm text-gray-300">{eventName}</p>
      </motion.div>
    </motion.div>
  );
};

export default EventCard;
