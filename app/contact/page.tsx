"use client";

import React, { useState } from "react";
import Header from "@/components/defined-ui/header";
import Footer from "@/components/defined-ui/footer";
import { FaLocationDot } from "react-icons/fa6";
import { Mail, Send, Phone } from "lucide-react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { genSecDetails } from "@/data/members";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic
    const worksheet = XLSX.utils.json_to_sheet([formData]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(
      workbook,
      worksheet,
      "Contact Form Submissions"
    );
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    const blob = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    saveAs(
      blob,
      `Contact_Submission_${new Date().toISOString().slice(0, 10)}.xlsx`
    );
    setFormData({
      name: "",
      email: "",
      message: "",
      subject: "",
    });
  };

  return (
    <div className="bg-[#030617] min-h-screen flex flex-col">
      <Header />

      <div className="flex-grow container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Information */}
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
                  className="hover:text-[#0A66C2] transition-colors"
                  onClick={(e) => {
                    // Optional: You can add additional tracking or logging here if needed
                    window.location.href = `mailto:${genSecDetails.email}?subject=Inquiry%20from%20Scitech%20Website`;
                    e.preventDefault(); // Prevent default link behavior
                  }}
                >
                  {genSecDetails.email}
                </a>
              </div>

              <div className="flex items-center space-x-4">
                <Phone className="text-[#0A66C2] text-2xl" />
                <p>+91 {genSecDetails.phone}</p>
              </div>
            </div>

            <a
              href="https://maps.app.goo.gl/gg93jd9WPyVYDwk96"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-[#0A66C2] hover:underline"
            >
              <FaLocationDot />
              <span>View on Google Maps</span>
            </a>
          </div>

          {/* Contact Form */}
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

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-white/30 text-white p-2 focus:outline-none focus:border-[#0A66C2]"
              />

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

              <button
                type="submit"
                className="w-full bg-[#0A66C2] text-white py-3 rounded-md hover:bg-[#0A66C2]/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Sponsorship Section */}
        <div className="mt-16 bg-[#0A66C2]/10 p-8 rounded-xl border border-white/10">
          <h3 className="text-3xl text-white mb-6 text-center font-bold">
            Interested in Sponsorship?
          </h3>
          <p className="text-gray-300 text-center mb-6">
            If you are interested in sponsoring our events and initiatives, we
            would love to hear from you. Connect with our General Secretary
            today!
          </p>
          <div className="flex justify-center">
            <a
              href="mailto:Gensec_Scitech_Gymkhana@iitbhilai.ac.in?subject=Sponsorship%20Inquiry"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0A66C2] text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-[#0A66C2]/90 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;
