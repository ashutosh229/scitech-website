"use client";
// Import necessary libraries and components
import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/defined-ui/header";
import Footer from "@/components/defined-ui/footer";
import imagesPath from "@/data/images";
import { AboutCard } from "@/components/defined-ui/aboutCard";
import { MissionCard } from "@/components/defined-ui/missionCard";
import { MissionCardV2 } from "@/components/defined-ui/missionCardv2";
import { useRouter } from "next/navigation";
import { members } from "@/data/members";
import { TeamCarousel } from "@/components/defined-ui/teamCarousel";
import { routes } from "@/data/links";
import { aboutUsInformation } from "@/data/achievements";

const AboutUs = () => {
  const router = useRouter();
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
            About Us
          </motion.h1>
        </motion.div>

        {/* Stort Card */}
        <AboutCard></AboutCard>

        {/* About Cards*/}
        {aboutUsInformation.map((value, index) =>
          index % 2 == 0 ? (
            <MissionCard key={index} params={value}></MissionCard>
          ) : (
            <MissionCardV2 key={index} params={value}></MissionCardV2>
          )
        )}

        {/*History*/}
        <motion.div
          className="mt-24 mb-12 text-center "
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 12 }}
        >
          <h2 className="text-3xl font-bold mb-6">Our History</h2>
          <p className="text-lg leading-relaxed mb-6">
            Established in 2016, the SciTech Council has grown from a small
            group of enthusiasts to a vibrant community dedicated to advancing
            science and technology within our college. Over the years, we’ve
            organized numerous hackathons, workshops, and lectures that have
            left a lasting impact.
          </p>
          <button
            onClick={() => {
              router.push(routes.history);
            }}
            className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition-all"
          >
            Know the History
          </button>
        </motion.div>

        <motion.div
          className="mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 12 }}
        >
          <h2 className="mt-50 text-3xl font-bold mb-8 text-center">
            Meet Our Team
          </h2>
          <TeamCarousel members={members} />
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4">Join Us</h2>
          <p className="text-lg leading-relaxed mb-6">
            Become a part of the SciTech Council and explore your potential in
            science and technology.
          </p>
          <button
            onClick={() => {
              router.push(routes.join);
            }}
            className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition-all"
          >
            Become a Member
          </button>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
