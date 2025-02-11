"use client";

import React, { useState } from "react";
import Header from "@/components/defined-ui/header";
import Footer from "@/components/defined-ui/footer";
import { FaLocationDot } from "react-icons/fa6";
import { Mail, Phone } from "lucide-react";
import { genSecDetails } from "@/data/members";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validateForm = () => {
    let valid = true;
    let newErrors = { name: "", email: "", message: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }
    if (
      !formData.email.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Valid email is required";
      valid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!validateForm()) return;

    const { name, email, subject, message } = formData;
    const mailtoLink = `mailto:${
      genSecDetails.email
    }?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;
    window.location.href = mailtoLink;

    toast.success("Message sent successfully!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="bg-[#030617] min-h-screen flex flex-col">
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex-grow container mx-auto px-4 py-16 md:py-24"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Contact <span className="text-[#0A66C2]">Us</span>
            </h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <FaLocationDot className="text-[#0A66C2] text-2xl" />
                <div>
                  <p>IIT Bhilai, Kutelabhata</p>
                  <p>Bhilai, Durg, Chhattisgarh</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="text-[#0A66C2] text-2xl" />
                <a
                  href={`mailto:${genSecDetails.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0A66C2] transition-colors"
                >
                  {genSecDetails.email}
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="text-[#0A66C2] text-2xl" />
                <p>+91 {genSecDetails.phone}</p>
              </div>
            </div>
          </div>
          <div className="bg-white/5 p-8 rounded-xl border border-white/10">
            <h3 className="text-2xl text-white mb-6 text-center">
              Send us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-white/30 text-white p-2 focus:outline-none focus:border-[#0A66C2]"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-white/30 text-white p-2 focus:outline-none focus:border-[#0A66C2]"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-white/30 text-white p-2 focus:outline-none focus:border-[#0A66C2]"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full bg-transparent border-b border-white/30 text-white p-2 focus:outline-none focus:border-[#0A66C2]"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message}</p>
              )}
              <button
                type="submit"
                className="w-full bg-[#0A66C2] text-white py-3 rounded-md hover:bg-[#0A66C2]/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default ContactUs;
