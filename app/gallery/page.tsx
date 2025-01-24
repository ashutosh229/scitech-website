"use client";

import React from "react";
import Header from "@/components/defined-ui/header";
import { galleryImages } from "@/data/galleryImages";
import EventCard from "@/components/defined-ui/galleryCard";
import Footer from "@/components/defined-ui/footer";

const GalleryPage = () => {
  return (
    <div className="bg-gradient-to-b from-[#0d1117] to-[#101323] text-white min-h-screen">
      {/* Header */}
      <Header />

      {/* Gallery Content */}
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-200">
          Gallery
        </h1>

        {/* Horizontal scrolling gallery */}
        <div className="flex flex-wrap gap-8 justify-center">
          {galleryImages.map((event, index) => (
            <div
              className="flex-none w-[300px] h-[350px] bg-[#1e293b] p-2 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
              key={index}
            >
              <EventCard
                eventImage={event.eventImage}
                eventName={event.eventName}
                clubName={event.clubName}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default GalleryPage;
