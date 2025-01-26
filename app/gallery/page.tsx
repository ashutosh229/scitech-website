"use client";

import React, { useState } from "react";
import Header from "@/components/defined-ui/header";
import Footer from "@/components/defined-ui/footer";
import { galleryImages, ITEMS_PER_PAGE } from "@/data/galleryImages";
import EventCard from "@/components/defined-ui/galleryCard";
import { motion } from "framer-motion";

const GalleryPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [sliderIndex, setSliderIndex] = useState(0);
  const totalPages = Math.ceil(galleryImages.length / ITEMS_PER_PAGE);

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = galleryImages.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
    setSliderIndex(
      galleryImages.findIndex((item) => item.eventImage === image)
    );
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handleSliderNavigation = (direction: "left" | "right") => {
    const newIndex =
      direction === "left"
        ? (sliderIndex - 1 + galleryImages.length) % galleryImages.length
        : (sliderIndex + 1) % galleryImages.length;
    setSliderIndex(newIndex);
    setSelectedImage(galleryImages[newIndex].eventImage);
  };

  const navigateToImagePage = (index: number) => {
    const newPage = Math.floor(index / ITEMS_PER_PAGE) + 1;
    setCurrentPage(newPage);
    setSliderIndex(index);
    setSelectedImage(galleryImages[index].eventImage);
  };

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
              className="flex-none w-[300px] h-[350px] bg-[#1e293b] p-2 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
              key={index}
              onClick={() => handleImageClick(event.eventImage)}
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

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 flex flex-col justify-center items-center z-50">
          <motion.div
            className="relative w-[90%] max-w-5xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* Enlarged Image */}
            <img
              src={selectedImage}
              alt="Selected Event"
              className="w-full h-[400px] object-cover rounded-lg mb-4"
            />

            {/* Slider */}
            <div className="flex items-center gap-4">
              {/* Left Arrow */}
              <button
                className="text-white text-3xl bg-gray-700 rounded-full p-2 hover:bg-gray-600"
                onClick={() => handleSliderNavigation("left")}
              >
                &#8592;
              </button>

              {/* Thumbnails */}
              <div className="flex overflow-x-auto items-center gap-4">
                {galleryImages
                  .slice(
                    Math.max(sliderIndex - 3, 0),
                    Math.min(sliderIndex + 4, galleryImages.length)
                  )
                  .map((item, index) => {
                    const actualIndex = Math.max(sliderIndex - 3, 0) + index;
                    return (
                      <img
                        key={actualIndex}
                        src={item.eventImage}
                        alt={item.eventName}
                        className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 ${
                          actualIndex === sliderIndex
                            ? "border-blue-500"
                            : "border-transparent"
                        }`}
                        onClick={() => navigateToImagePage(actualIndex)}
                      />
                    );
                  })}
              </div>

              {/* Right Arrow */}
              <button
                className="text-white text-3xl bg-gray-700 rounded-full p-2 hover:bg-gray-600"
                onClick={() => handleSliderNavigation("right")}
              >
                &#8594;
              </button>
            </div>

            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-white text-xl bg-gray-700 rounded-full p-2 hover:bg-gray-600"
            >
              ✕
            </button>
          </motion.div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default GalleryPage;
