"use client";

import React, { useState } from "react";
import Header from "@/components/defined-ui/header";
import { galleryImages } from "@/data/galleryImages";
import EventCard from "@/components/defined-ui/galleryCard";
import Footer from "@/components/defined-ui/footer";
import { ITEMS_PER_PAGE } from "@/data/galleryImages";

const GalleryPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(galleryImages.length / ITEMS_PER_PAGE);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = galleryImages.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

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
          {currentItems.map((event, index) => (
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

        {/* Pagination Controls */}
        <div className="flex justify-center items-center mt-8">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className={`px-4 py-2 mr-4 rounded-lg text-sm font-semibold transition-colors ${
              currentPage === 1
                ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            Previous
          </button>
          <span className="text-gray-300 text-sm">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 ml-4 rounded-lg text-sm font-semibold transition-colors ${
              currentPage === totalPages
                ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            Next
          </button>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default GalleryPage;
