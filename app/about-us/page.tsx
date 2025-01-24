"use client";
// Import necessary libraries and components
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Header from "@/components/defined-ui/header";
import Footer from "@/components/defined-ui/footer";
import { url } from "node:inspector";
import imagesPath from "@/data/images";
import { AboutCard } from "@/components/defined-ui/aboutCard";
import { MissionCard } from "@/components/defined-ui/missionCard";
import { MissionCardV2 } from "@/components/defined-ui/missionCardv2";
import { useRouter } from "next/navigation";

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

        {/* Mission Statements */}
        <AboutCard></AboutCard>
        <MissionCard></MissionCard>
        <MissionCardV2></MissionCardV2>
        <MissionCard></MissionCard>

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
            Established in [Year], the SciTech Council has grown from a small
            group of enthusiasts to a vibrant community dedicated to advancing
            science and technology within our college. Over the years, we’ve
            organized numerous hackathons, workshops, and lectures that have
            left a lasting impact.
          </p>
          <button
            onClick={() => {
              router.push("/history");
            }}
            className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition-all"
          >
            Know the History
          </button>
        </motion.div>

        {/* Team Section */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((member) => (
              <motion.div
                key={member}
                className="bg-gray-800 rounded-lg p-6 shadow-lg hover:scale-105 transition-transform"
                whileHover={{ scale: 1.1 }}
              >
                <Image
                  src={`/team/member-${member}.jpg`}
                  alt={`Team Member ${member}`}
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-center">
                  Member {member}
                </h3>
                <p className="text-center">Role {member}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        {/* Activities Section */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4">What We Do</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Organize hackathons and coding competitions</li>
            <li>Host workshops and seminars on cutting-edge technology</li>
            <li>Collaborate with industry leaders and alumni</li>
            <li>Foster innovation through project-based learning</li>
          </ul>
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
          <button className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition-all">
            Become a Member
          </button>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
