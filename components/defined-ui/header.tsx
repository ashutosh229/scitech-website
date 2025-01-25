"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import routes from "@/data/links";

const Header = ({ className = "" }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-lg shadow-lg" : "bg-transparent"
      } ${className}`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo and Heading Section */}
        <Link href={routes.home} className="flex items-center space-x-4">
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {/* Enlarged Logo */}
            <div className="w-16 h-16 rounded-full overflow-hidden shadow-lg">
              <Image
                src="scitech-new-logo.jpeg" // Replace with the correct path to your logo
                alt="SciTech Council Logo"
                width={64}
                height={64}
              />
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold gradient-text tracking-tight">
              SciTech Council
            </h1>
          </motion.div>
        </Link>

        {/* Navigation Menu */}
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
              whileHover={{
                scale: 1.1,
                rotate: 2,
                color: "rgb(59,130,246)", // Tailwind Blue-500
              }}
              whileTap={{ scale: 0.95 }}
            >
              {item === "Clubs" ? (
                <Link
                  href="/#clubs"
                  scroll={false} // Prevent default scrolling to allow smooth scrolling
                  className="text-white text-sm font-medium relative group"
                >
                  Clubs
                  <span
                    className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 
                  transition-all duration-500 group-hover:w-full"
                  />
                </Link>
              ) : (
                <Link
                  href={`/${item.toLowerCase().replace(" ", "-")}`}
                  className="text-white text-sm font-medium relative group"
                >
                  {item}
                  {/* Underline Animation */}
                  <span
                    className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 
                transition-all duration-500 group-hover:w-full"
                  />
                </Link>
              )}
            </motion.div>
          ))}
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
