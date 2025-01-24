"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const clubs = [
  {
    name: "Robotics Club",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
  },
  {
    name: "Coding Club",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
  },
  {
    name: "Electronics Club",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661",
  },
  {
    name: "Science Club",
    image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31",
  },
  {
    name: "Astronomy Club",
    image: "https://images.unsplash.com/photo-1543722530-d2c3201371e7",
  },
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const particlesInit = async (main: any) => {
    await loadFull(main);
  };
  const particleOptions = {
    background: {
      color: {
        value: "#000000", // Background color
      },
    },
    fpsLimit: 120, // Limits FPS
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          area: 800, // Particle density
        },
      },
      color: {
        value: ["#ffffff", "#00ccff", "#ff66cc"],
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.8,
        random: true,
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 0.3,
          sync: false,
        },
      },
      size: {
        value: 4,
        random: true,
        animation: {
          enable: true,
          speed: 10,
          minimumValue: 0.1,
          sync: false,
        },
      },
      move: {
        enable: true,
        speed: 2,
        direction: undefined, // Random movement
        random: false,
        straight: false,
        outModes: {
          default: "out",
        },
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
        onClick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4,
        },
        push: {
          quantity: 4,
        },
      },
    },
    detectRetina: true,
  };

  return (
    <div className="min-h-screen">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-blue-900 via-black to-purple-900">
        {/* <Particles
          id="tsparticles"
          options={particleOptions} // Updated options structure
          init={particlesInit} // Initialize particles
          className="absolute inset-0"
        /> */}
      </div>

      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-black/80 backdrop-blur-lg shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <motion.div
            className="flex items-center space-x-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">SC</span>
            </div>
            <h1 className="text-4xl font-bold gradient-text tracking-tight">
              Scitech Council
            </h1>
          </motion.div>
          <nav className="hidden md:flex items-center space-x-6">
            {[
              "About Us",
              "Gallery",
              "Events",
              "Achievements",
              "Clubs",
              "Team",
              "Contact",
            ].map((item) => (
              <motion.div
                key={item}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={`/${item.toLowerCase().replace(" ", "-")}`}
                  className="text-sm font-medium hover:text-primary transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                </Link>
              </motion.div>
            ))}
          </nav>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80"></div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative text-center space-y-8 max-w-4xl mx-auto px-4"
        >
          <h1 className="text-6xl md:text-7xl font-bold hero-gradient-text leading-tight">
            Council of Science and Technology
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-200"
          >
            Innovating Today for a Better Tomorrow
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Button
              size="lg"
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/30 shadow-xl"
            >
              Explore Our Vision
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Clubs Section */}
      <section className="py-20 bg-black/80">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-8">
            Explore Our Clubs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {clubs.map((club) => (
              <motion.div
                key={club.name}
                className="relative group overflow-hidden rounded-lg shadow-lg bg-gradient-to-br from-purple-600 to-blue-800"
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={club.image}
                  alt={club.name}
                  layout="fill"
                  objectFit="cover"
                  className="absolute inset-0 w-full h-full opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-500"></div>
                <h3 className="relative text-xl font-bold text-white text-center p-6">
                  {club.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
