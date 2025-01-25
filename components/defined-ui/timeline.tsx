"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { IconType } from "react-icons";

// Type definitions for TimelineItem props
export interface TimelineItemProps {
  date: string;
  title: string;
  description: string;
  icon?: IconType; // IconType is used for react-icons
}

// Type definition for Timeline props
export interface TimelineProps {
  children: ReactNode; // Expects one or more TimelineItem components
}

export const Timeline: React.FC<TimelineProps> = ({ children }) => {
  return <div className="relative border-l-2 border-gray-600">{children}</div>;
};

export const TimelineItem: React.FC<TimelineItemProps> = ({
  date,
  title,
  description,
  icon: Icon,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-10 ml-8"
    >
      <div className="absolute -left-4 w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center">
        {Icon && <Icon className="text-white" size={20} />}
      </div>
      <p className="text-gray-400 text-sm mb-2">{date}</p>
      <h3 className="text-lg font-bold text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
};
