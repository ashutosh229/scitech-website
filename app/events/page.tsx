"use client";

import React, { useState } from "react";
import Header from "@/components/defined-ui/header";
import Footer from "@/components/defined-ui/footer";
import EventCard from "@/components/defined-ui/eventCard";
import { eventsData } from "@/data/events";
import { motion } from "framer-motion";
import { categories } from "@/data/events";
import imagesPath from "@/data/images";
import { eventDetails } from "@/data/events";

const EventsPage = () => {
  const [filter, setFilter] = useState("All");

  const filteredEvents =
    filter === "All"
      ? eventsData
      : eventsData.filter((event) => event.category === filter);

  const handleFilterChange = (category: string) => {
    setFilter(category);
  };

  return (
    <div className="bg-gradient-to-b from-[#0d1117] to-[#101323] text-white min-h-screen">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      {/* Hero Section */}
      <div
        className="relative py-16 text-center bg-[#1e293b] bg-cover bg-center"
        style={{
          backgroundImage: `url('/path-to-your-background-image.jpg')`,
        }}
      >
        {/* Overlay for better contrast */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <motion.div
          className="relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Foreground Image */}
          <motion.img
            src={imagesPath.events.heroBg}
            alt="Hero Foreground"
            className="mx-auto mb-6 w-32 h-32 rounded-full object-cover shadow-lg"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />

          {/* Text Content */}
          <motion.h1
            className="text-5xl font-bold text-gray-200 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Explore Our Events
          </motion.h1>
          <motion.p
            className="text-gray-400 text-lg"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Stay up-to-date with exciting events hosted by our council.
          </motion.p>
        </motion.div>
      </div>

      {/* Filter Section */}
      <div className="container mx-auto py-8 text-center">
        <div className="flex justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                filter === category
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
              onClick={() => handleFilterChange(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filteredEvents.map((event, index) => (
            <motion.div
              key={index}
              className="flex-none"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <EventCard
                eventImage={event.eventImage}
                eventName={event.eventName}
                eventDate={event.date}
                eventDescription="lorem"
                onRegisterClick={() => {
                  console.log("error");
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* No Events Found */}
        {filteredEvents.length === 0 && (
          <motion.p
            className="text-gray-400 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            No events available in this category.
          </motion.p>
        )}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default EventsPage;
