"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Send,
  Github,
} from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const quickLinks = [
    "About Us",
    "Gallery",
    "Events",
    "Achievements",
    "Clubs",
    "Team",
    "Contact",
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", color: "text-blue-600" },
    { icon: Twitter, href: "#", color: "text-sky-400" },
    { icon: Instagram, href: "#", color: "text-pink-500" },
    { icon: Linkedin, href: "#", color: "text-blue-700" },
    { icon: Github, href: "#", color: "text-gray-400" },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {/* College Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Scitech Council
            </h3>
            <div className="space-y-3 text-gray-300">
              <p>IIT Bhilai</p>
              <p>Permanent Campus, Kutelabhata</p>
              <p>Durg, Chattisgarh - 490020</p>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {quickLinks.map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase().replace(" ", "-")}`}
                  className="text-gray-400 hover:text-white transition-all group flex items-center"
                >
                  <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                  {item}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Stay Connected
            </h3>

            {/* Newsletter Signup */}
            <div className="flex mb-6 border border-white/20 rounded-full overflow-hidden">
              <div className="p-3 bg-white/10">
                <Mail className="text-gray-400" />
              </div>
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent px-3 text-white placeholder-gray-500 focus:outline-none"
              />
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Send className="text-gray-400" />
              </motion.button>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-5 justify-center mb-6">
              {socialLinks.map(({ icon: Icon, href, color }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`${color} hover:opacity-80 transition-all`}
                >
                  <Icon className="h-7 w-7" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-400 space-y-2"
        >
          <p>
            © {new Date().getFullYear()}{" "}
            <Link href={"/"} className="text-blue-700">
              Science and Technology Council, IIT Bhilai
            </Link>
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
