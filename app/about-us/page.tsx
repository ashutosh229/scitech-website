// AboutUs.tsx - Using the Updated TeamCarousel
"use client";

import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/defined-ui/header";
import Footer from "@/components/defined-ui/footer";
import imagesPath from "@/data/images";
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
        <motion.div
          className="relative min-h-[50vh] flex items-center justify-center text-center bg-cover bg-center mb-12"
          style={{ backgroundImage: `url('${imagesPath.aboutUs.heroBg}')` }}
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
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
