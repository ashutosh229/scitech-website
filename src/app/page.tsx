'use client';

import { CircuitBoard } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper/modules';
import CircularImages from '@/components/clubs';
import CircularLogoSection from '@/components/clubs';
import AchievementsSection from '@/components/achievements';

const carouselImages = [
  {
    url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    title: 'Robotics Lab',
  },
  {
    url: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    title: 'AI Research',
  },
  {
    url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    title: 'Innovation Hub',
  },
  {
    url: 'https://images.unsplash.com/photo-1581091226825-c6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    title: 'Electronics Workshop',
  },
];

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    setIsVisible(true);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main>
      {/* Header */}
      <header
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md shadow-md'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo and Title */}
            <div className="flex items-center space-x-3 group">
              <CircuitBoard className="h-10 w-10 text-blue-600 transition-transform duration-300 group-hover:rotate-180" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900 transition-colors hover:text-blue-600">
                  Science & Technology Council
                </h1>
                <p className="text-sm text-gray-600">IIT Bhilai</p>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              {[
                'Home',
                'About Us',
                'Events',
                'Gallery',
                'Achievements',
                'Clubs',
              ].map((item, index) => (
                <Link
                  key={item}
                  href={
                    item === 'Home'
                      ? '/'
                      : `/${item.toLowerCase().replace(' ', '-')}`
                  }
                  className="relative text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 group"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1517976547714-720226b864c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Technology Background"
            className="w-full h-full object-cover transform scale-105 animate-float"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 animate-gradient"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex flex-col justify-center h-full text-white">
            <div
              className="space-y-2"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.8s ease, transform 0.8s ease',
              }}
            >
              <h2 className="text-6xl font-bold tracking-tight animate-slide-up">
                Welcome to the
              </h2>
              <h2 className="text-7xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 text-transparent bg-clip-text animate-gradient animate-glow">
                SciTech Council
              </h2>
            </div>
            <p
              className="text-xl max-w-2xl mt-8 mb-8 animate-slide-up"
              style={{ animationDelay: '200ms' }}
            >
              Where brilliant minds converge, ideas flourish, and innovation
              shapes tomorrow. Join us in pushing the boundaries of science and
              technology at IIT Bhilai.
            </p>
            <div
              className="flex space-x-4"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.8s ease, transform 0.8s ease',
                transitionDelay: '400ms',
              }}
            >
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30">
                Explore Events
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-medium backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/20">
                Join a Club
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Image Carousel Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-[90%] mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12 animate-slide-up">
            Glimpses of Innovation
          </h2>
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            spaceBetween={20}
            slidesPerView={3}
            className="carousel-container"
          >
            {carouselImages.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="relative group w-full h-[300px]">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <h3 className="text-white text-xl font-bold">
                      {image.title}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

    </main>
  );
}
