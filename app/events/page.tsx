"use client";

import React, { useState } from "react";
import Header from "@/components/defined-ui/header";
import Footer from "@/components/defined-ui/footer";
import EventCard from "@/components/defined-ui/eventCard";
import { eventsData } from "@/data/events";
import { motion } from "framer-motion";

const EventsPage = () => {
  const [filter, setFilter] = useState("All");

  const categories = [
    "All",
    "Workshops",
    "Competitions",
    "Talks",
    "Social Events",
  ];
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
      <div className="py-16 text-center bg-[#1e293b]">
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
