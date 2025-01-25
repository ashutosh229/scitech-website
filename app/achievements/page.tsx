"use client";
// Import necessary libraries and components
import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/defined-ui/header";
import Footer from "@/components/defined-ui/footer";
import imagesPath from "@/data/images";
import { Carousel } from "@/components/ui/carousel";
import { achievements } from "@/data/achievements";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-[#101323] text-white">
      <Header />
      <div className="container mx-auto px-6 py-12">
        {/* Header Section */}
        <motion.div
          className="relative min-h-[50vh] flex items-center justify-center text-center bg-cover bg-center mb-12"
          style={{
            backgroundImage: `url('${imagesPath.aboutUs.heroBg}')`,
            marginTop: "64px",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 5 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold text-blue-950"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 6 }}
          >
            Achievements Of SciTech Council
          </motion.h1>
        </motion.div>

        <motion.div
          className="min-h-screen mt-8 px-4 sm:px-8 md:px-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Carousel className="flex flex-wrap justify-center space-x-6 space-y-6 overflow-hidden">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 text-white rounded-lg p-6 shadow-lg w-full sm:w-[48%] md:w-[30%] hover:scale-105 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <motion.h2
                  className="text-2xl font-semibold text-[#0A66C2] mb-2"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {achievement.title}
                </motion.h2>
                {achievement.details && (
                  <motion.p
                    className="mb-4 text-gray-300"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    {achievement.details}
                  </motion.p>
                )}
                <motion.p
                  className="font-medium"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <span className="font-bold text-blue-600">
                    Participants:{" "}
                  </span>
                  {achievement.participants}
                </motion.p>
              </motion.div>
            ))}
          </Carousel>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
