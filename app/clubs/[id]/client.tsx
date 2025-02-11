"use client";

import { motion } from "framer-motion";
import { Image as typeImage } from "@/types/events";
import Image from "next/image";
import EventCard from "@/components/defined-ui/eventCard";
import BlogCard from "@/components/defined-ui/blogCard";
import MembersCarousel from "@/components/defined-ui/memberCarousel";

export default function ClubTemplate({ club }: { club: typeImage }) {
  return (
    <div className="w-full px-6 py-10 space-y-16">
      {/* Hero Section */}
      <motion.div
        className="flex flex-col items-center space-y-4 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Image
          src={club.src}
          alt={club.alt}
          width={150}
          height={150}
          className="rounded-full shadow-lg"
        />
        <h1 className="text-4xl font-bold text-primary">{club.name}</h1>
        <p className="max-w-2xl text-gray-500">{club.description}</p>
        <div className="flex space-x-4">
          {club.instagram && (
            <a href={club.instagram} target="_blank" className="text-blue-500">
              Instagram
            </a>
          )}
          {club.linkedin && (
            <a href={club.linkedin} target="_blank" className="text-blue-500">
              LinkedIn
            </a>
          )}
          {club.youtube && (
            <a href={club.youtube} target="_blank" className="text-blue-500">
              YouTube
            </a>
          )}
        </div>
      </motion.div>

      {/* Gallery Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {club.gallery.map((img, index) => (
            <motion.div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-md"
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={img}
                alt={`Gallery ${index}`}
                layout="responsive"
                width={300}
                height={200}
                className="object-cover"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Events Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {club.events.map((event, index) => (
            <EventCard
              key={index}
              title={event.title}
              hosting={event.hosting}
              description={event.description}
              date={event.date}
              time={event.time}
              month={event.month}
              year={event.year}
              location={event.location}
              image={event.image}
            />
          ))}
        </div>
      </section>

      {/* Blogs Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Latest Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {club.blogs.map((blog, index) => (
            <BlogCard key={index} blog={blog} />
          ))}
        </div>
      </section>

      {/* Members Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
        <MembersCarousel members={club.members} />
      </section>
    </div>
  );
}
