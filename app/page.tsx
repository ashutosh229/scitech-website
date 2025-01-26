"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import CircularImages from "@/components/defined-ui/clubs";
import { ArrowRight } from "lucide-react";
import Header from "@/components/defined-ui/header";
import Footer from "@/components/defined-ui/footer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, A11y } from "swiper/modules";
import Link from "next/link";
import { useRouter } from "next/navigation";
import routes, { clubsRoutes } from "@/data/links";
import clubs from "@/data/clubs";
import imagesPath from "@/data/images";
import { particleMotion } from "@/components/defined-ui/partcileEffect";
import SciTechCarousel from "@/components/defined-ui/scitechCarousel";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-blue-900 via-black to-purple-900"></div>

      {/* Header */}
      <Header></Header>

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
              onClick={() => {
                router.push(routes.about);
              }}
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
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            loop={true} // Enable circular sliding
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="overflow-hidden"
          >
            {clubs.map((club) => (
              <SwiperSlide key={club.name}>
                <motion.div
                  className="relative group overflow-hidden rounded-lg shadow-lg bg-gradient-to-br from-purple-600 to-blue-800"
                  whileHover={{ scale: 1.05 }}
                >
                  <Image
                    src={club.image}
                    alt={club.name}
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0 w-full h-full opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                    onClick={() => {
                      router.push(routes.about);
                    }}
                  />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-500"></div>
                  <h3 className="relative text-xl font-bold text-white text-center p-6">
                    {club.name}
                  </h3>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* SciTech Carousel Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-8">
            Discover SciTech
          </h2>
          <SciTechCarousel />
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
                src={imagesPath.home.achievements}
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
                <Link href={routes.achievements} passHref>
                  <Button className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                    View All Achievements
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
                  </Button>
                </Link>
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
                src={imagesPath.home.history}
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
      <Footer></Footer>
    </div>
  );
}
