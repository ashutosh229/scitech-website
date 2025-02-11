"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";

interface Blog {
  title: string;
  author: string;
  time: string;
  content: string;
}

const BlogCard = ({ blog }: { blog: Blog }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Mouse movement tracking for 3D tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [15, -15]);
  const rotateY = useTransform(x, [-50, 50], [-15, 15]);

  return (
    <motion.div
      className="relative bg-white dark:bg-gray-900 shadow-xl rounded-2xl p-6 border border-gray-200 dark:border-gray-800 max-w-md transition-all duration-300 overflow-hidden"
      style={{
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - rect.left - rect.width / 2);
        y.set(e.clientY - rect.top - rect.height / 2);
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        x.set(0);
        y.set(0);
      }}
    >
      {/* Animated Glowing Background */}
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 opacity-20 blur-lg"
        animate={{ opacity: isHovered ? 0.6 : 0.2 }}
        transition={{ duration: 0.4 }}
      />

      {/* Card Content */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative z-10 p-4 bg-white dark:bg-gray-900 rounded-2xl shadow-md"
      >
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          {blog.title}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
          {blog.author} • {blog.time}
        </p>
        <p className="text-gray-700 dark:text-gray-300 mt-4 line-clamp-3">
          {blog.content}
        </p>

        {/* Read More Button with Hover Effect */}
        <motion.button
          className="mt-4 bg-blue-600 dark:bg-blue-500 text-white px-4 py-2 rounded-lg transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Read More
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default BlogCard;
