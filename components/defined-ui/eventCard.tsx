"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface EventCardProps {
  eventImage: string;
  eventName: string;
  eventDate: string;
  eventDescription: string;
  onRegisterClick: () => void;
}

const EventCard: React.FC<EventCardProps> = ({
  eventImage,
  eventName,
  eventDate,
  eventDescription,
  onRegisterClick,
}) => {
  return (
    <motion.div
      className="relative w-80 h-96 bg-[#1e293b] p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-between"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      {/* Event Image */}
      <div className="relative w-full h-40 rounded-md overflow-hidden mb-4">
        <Image
          src={eventImage}
          alt={eventName}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>

      {/* Event Details */}
      <div className="text-white flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold mb-2">{eventName}</h3>
          <p className="text-sm text-gray-400 mb-4">{eventDate}</p>
          <p className="text-sm text-gray-300 line-clamp-3">
            {eventDescription}
          </p>
        </div>

        {/* Register Button */}
        <button
          onClick={onRegisterClick}
          className="mt-4 w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300"
        >
          Register Now
        </button>
      </div>
    </motion.div>
  );
};

export default EventCard;
