"use client";

import React from "react";
import Header from "@/components/defined-ui/header";
import Footer from "@/components/defined-ui/footer";
import Image from "next/image";
import { Linkedin, Instagram, Github, Mail } from "lucide-react";

const TeamMemberDetail = () => {
  const memberDetails = {
    name: "Ashutosh Kumar Jha",
    position: "Web Developer, Scitech Council",
    department: "Computer Science and Engineering",
    batch: "2023-2027",
    image: "/path/to/member/image.jpg", // Replace with actual image path
    bio: "Passionate about technology and innovation, with a keen interest in developing solutions to solve real world problems. Currently leading multiple technical projects at Scitech Council.",
    skills: ["Machine Learning", "Web Development", "AI/ML", "App Development"],
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/ashutosh-kumar-jha-601098280/",
      instagram: "https://www.instagram.com/ashutosh_335/",
      github: "https://github.com/ashutosh229",
      email: "ashutoshj@iitbhilai.ac.in",
    },
  };

  return (
    <div className="bg-[#030617] min-h-screen flex flex-col">
      <Header />

      <div className="flex-grow container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Member Image */}
          <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#0A66C2]">
              <Image
                src={memberDetails.image}
                alt={memberDetails.name}
                layout="fill"
                objectFit="cover"
                className="absolute inset-0"
              />
            </div>
          </div>

          {/* Member Details */}
          <div className="text-white space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {memberDetails.name}
            </h2>
            <div className="space-y-3">
              <p className="text-xl text-[#0A66C2]">{memberDetails.position}</p>
              <p>{memberDetails.department}</p>
              <p>Batch: {memberDetails.batch}</p>
            </div>

            <p className="text-gray-300">{memberDetails.bio}</p>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {memberDetails.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-[#0A66C2]/20 text-[#0A66C2] px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              <a
                href={memberDetails.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0A66C2] hover:text-white transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href={memberDetails.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0A66C2] hover:text-white transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href={memberDetails.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0A66C2] hover:text-white transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href={`mailto:${memberDetails.socialLinks.email}`}
                className="text-[#0A66C2] hover:text-white transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TeamMemberDetail;
