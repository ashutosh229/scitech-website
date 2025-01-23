"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import CircularImages from "@/components/defined-ui/clubs";

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
  const [hoveredClub, setHoveredClub] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white/90 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo and Heading */}
          <motion.div
            className="flex items-center space-x-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg animate-float">
              <span className="text-white font-bold text-xl">SC</span>
            </div>
            <h1 className="text-4xl font-bold gradient-text tracking-tight">
              Scitech Council
            </h1>
          </motion.div>

          {/* Navigation Tabs */}
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
      <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
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

      {/* Clubs Carousel */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12 gradient-text"
          >
            Our Clubs
          </motion.h2>
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {clubs.map((club) => (
                <CarouselItem key={club.name} className="md:basis-1/3">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative h-64 rounded-lg overflow-hidden shadow-xl"
                    onMouseEnter={() => setHoveredClub(club.name)}
                    onMouseLeave={() => setHoveredClub(null)}
                  >
                    <Image
                      src={club.image}
                      alt={club.name}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <AnimatePresence>
                      {hoveredClub === club.name && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex items-center justify-center"
                        >
                          <h3 className="text-white text-2xl font-bold">
                            {club.name}
                          </h3>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      <section
        id="clubs"
        className="section-2 text-white py-8 relative h-screen overflow-visible mb:mb-8"
      >
        <div className="h-full">
          <h2 className="px-8 home-heading font-bold font-[junge] text-[#0A66C2] text-6xl">
            Clubs
          </h2>
          {/* <ConcentricCircles /> */}
          <CircularImages />
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4"
                alt="Achievements"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold gradient-text">
                Our Achievements
              </h2>
              <p className="text-gray-600 text-lg">
                From groundbreaking research to innovative projects, our
                students have consistently pushed the boundaries of science and
                technology. Discover our remarkable journey of achievements and
                milestones.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                  View All Achievements
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold gradient-text">Our History</h2>
              <p className="text-gray-600 text-lg">
                Since its inception, the Science and Technology Council at IIT
                Bhilai has been at the forefront of technological innovation and
                scientific discovery. Our journey began with a vision to create
                a platform where students could explore their passion for
                science and technology.
              </p>
              <p className="text-gray-600 text-lg">
                Over the years, we have grown into a vibrant community of
                innovators, researchers, and problem-solvers. Through our
                various clubs and initiatives, we continue to foster a culture
                of scientific thinking and technological advancement.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1532094349884-543bc11b234d"
                alt="History"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4 gradient-text">
                Scitech Council
              </h3>
              <p className="text-gray-400">
                IIT Bhilai
                <br />
                GEC Campus, Sejbahar
                <br />
                Raipur, Chhattisgarh
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-xl font-bold mb-4 gradient-text">
                Quick Links
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "About Us",
                  "Gallery",
                  "Events",
                  "Achievements",
                  "Clubs",
                  "Team",
                  "Contact",
                ].map((item) => (
                  <Link
                    key={item}
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-xl font-bold mb-4 gradient-text">
                Connect With Us
              </h3>
              <div className="flex space-x-4 mb-6">
                {[
                  { icon: Facebook, href: "#" },
                  { icon: Twitter, href: "#" },
                  { icon: Instagram, href: "#" },
                  { icon: Linkedin, href: "#" },
                ].map(({ icon: Icon, href }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="hover:text-primary transition-colors"
                  >
                    <Icon className="h-6 w-6" />
                  </motion.a>
                ))}
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  className="w-full border-white/20 hover:bg-white/10 backdrop-blur-sm"
                >
                  Contact Us
                </Button>
              </motion.div>
            </motion.div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              © {new Date().getFullYear()} Science and Technology Council, IIT
              Bhilai. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
