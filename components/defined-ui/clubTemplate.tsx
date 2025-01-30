import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Controller } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import BlogCard from "./blogCard";
import EventCard from "./eventCard";
import Footer from "./footer";
import { EventType } from "@/types/events";

type ClubMember = {
  name: string;
  position: string;
  email: string;
  icon: string;
};

// export type Event = {
//   title: string;
//   description: string;
//   location: string;
//   date: string;
//   month: string;
//   year: string;
//   image: string;
//   hosting: string;
//   time: string;
// };

type ClubTemplateProps = {
  clubName: string;
  clubLogo: string;
  instagram?: string;
  linkedin?: string;
  twitter?: string;
  youtube?: string;
  github?: string;
  images: string[];
  blogs?: any[];
  events?: EventType[];
  clubMembers: ClubMember[];
  clubAgenda?: string;
  clubDescription: string;
};

const ClubTemplate: React.FC<ClubTemplateProps> = ({
  clubName,
  clubLogo,
  instagram,
  linkedin,
  twitter,
  youtube,
  github,
  images,
  blogs,
  events,
  clubMembers,
  clubAgenda,
  clubDescription,
}) => {
  const swiperRef1 = useRef<any>(null);
  const swiperRef2 = useRef<any>(null);

  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isEnlargedView, setIsEnlargedView] = useState(false);
  const [currentBlog, setCurrentBlog] = useState<any>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const openImage = (index: number) => {
    setSelectedImage(index);
    setIsEnlargedView(true);
  };

  const closeImage = () => {
    setIsEnlargedView(false);
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage !== null) {
      setSelectedImage((prev) => {
        if (prev === null) return 0;
        return direction === "prev"
          ? prev === 0
            ? images.length - 1
            : prev - 1
          : prev === images.length - 1
          ? 0
          : prev + 1;
      });
    }
  };

  const handleSlideChange = (index: number) => {
    if (swiperRef1.current && swiperRef2.current) {
      setActiveSlide(index);
      swiperRef1.current.slideTo(index);
      swiperRef2.current.slideTo(index);
    }
  };

  const onSlideChange = (swiper: any) => {
    setActiveSlide(swiper.activeIndex);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isEnlargedView) {
        if (e.key === "Escape") {
          closeImage();
        } else if (e.key === "ArrowLeft") {
          navigateImage("prev");
        } else if (e.key === "ArrowRight") {
          navigateImage("next");
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isEnlargedView]);

  return (
    <div className="flex h-screen bg-[#101323] text-white">
      {/* Left Sidebar */}
      <div className="hidden w-1/4 sm:flex flex-col p-2 h-full">
        <div className="flex items-center justify-center gap-2">
          <a href="/">
            <img
              src={`/club_logo/${clubLogo}`}
              alt="Logo"
              className="h-8 w-8 sm:h-14 sm:w-14"
            />
          </a>
          <a className="hidden sm:flex" href="/">
            <h1 className="text-sm sm:text-xl font-[poppins]">{clubName}</h1>
          </a>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center relative">
          <Swiper
            allowTouchMove={false}
            style={{ marginLeft: 0 }}
            modules={[Navigation, Controller]}
            spaceBetween={10}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-nex",
              prevEl: ".swiper-button-pre",
            }}
            direction="vertical"
            className="w-32 h-48"
            onSwiper={(swiper) => {
              swiperRef1.current = swiper;
            }}
            controller={{ control: swiperRef2.current }}
            onSlideChange={onSlideChange}
          >
            <SwiperSlide>
              <div className="absolute top-1/2 transform -translate-x-1/4 lg:-translate-x-0 -translate-y-1/2 -rotate-90">
                <h2 className="text-5xl text-[#EEE8F3] font-bold font-[junge]">
                  About
                </h2>
              </div>
            </SwiperSlide>
            {events && events.length > 0 && (
              <SwiperSlide>
                <div className="absolute top-1/2 transform -translate-x-1/4 lg:-translate-x-0 -translate-y-1/2 -rotate-90">
                  <h2 className="text-5xl text-[#EEE8F3] font-bold font-[junge]">
                    Events
                  </h2>
                </div>
              </SwiperSlide>
            )}
            <SwiperSlide>
              <div className="absolute top-1/2 transform -translate-x-1/4 lg:-translate-x-0 -translate-y-1/2 -rotate-90">
                <h2 className="text-5xl text-[#EEE8F3] font-bold font-[junge]">
                  Gallery
                </h2>
              </div>
            </SwiperSlide>
          </Swiper>
          <hr className="absolute border -rotate-90 border-[#EEE8F3] w-full" />
          <div className="absolute right-1/4 flex flex-col items-center space-y-2 mt-4">
            <button className="hover:transform hover:scale-150 text-4xl swiper-button-pre">
              <i className="fas fa-chevron-up"></i>
            </button>
            <button className="hover:transform hover:scale-150 text-4xl swiper-button-nex">
              <i className="fas fa-chevron-down"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col w-full bg-[#030617] h-screen">
        {/* Header */}
        <div className="p-4 flex justify-between sm:justify-end items-center">
          <div className="hidden club-bp:flex space-x-4">
            {instagram && (
              <a
                href={instagram}
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-red-500"
              >
                <i className="fab fa-instagram"></i>
              </a>
            )}
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-blue-500"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            )}
            {twitter && (
              <a
                href={twitter}
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-blue-500"
              >
                <i className="fab fa-twitter"></i>
              </a>
            )}
            {youtube && (
              <a
                href={youtube}
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-red-500"
              >
                <i className="fab fa-youtube"></i>
              </a>
            )}
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-blue-500"
              >
                <i className="fab fa-github"></i>
              </a>
            )}
          </div>
        </div>

        {/* Swiper Section */}
        <Swiper
          allowTouchMove={false}
          modules={[Navigation, Controller]}
          spaceBetween={10}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-nex",
            prevEl: ".swiper-button-pre",
          }}
          direction="vertical"
          onSwiper={(swiper) => {
            swiperRef2.current = swiper;
          }}
          controller={{ control: swiperRef1.current }}
        >
          <SwiperSlide>
            <div className="p-6 overflow-y-scroll h-full">
              <div className="flex gap-8 mb-8 items-center">
                <img
                  src={`/club_logo/${clubLogo}`}
                  className="h-16 w-16"
                  alt="Logo"
                ></img>
                <h2 className="text-4xl font-[600] font-[poppins] text-[#0A66C2]">
                  {clubName}
                </h2>
              </div>
              <div className="flex flex-col gap-4 mb-8">
                <p className="text-[1rem] club-bp:text-xl font-[poppins]">
                  {clubDescription}
                </p>
              </div>
              <div className="flex flex-col gap-4 mb-8">
                <h2 className="text-xl mb:text-2xl md:text-4xl leading-[99px] font-[junge] text-[#0A66C2] mb-4 text-center">
                  THE MINDS BEHIND THE
                </h2>
                <div className="grid grid-cols-2 mb:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                  {clubMembers.map((member, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <img
                        src={member.icon}
                        className="h-24 w-24 rounded-full line-clamp-1"
                        alt={member.name}
                      />
                      <h3 className="text-lg text-center font-[poppins] font-[500]">
                        {member.name}
                      </h3>
                      <p className="text-sm font-[poppins] font-[300]">
                        {member.position}
                      </p>
                      <p className="text-xs text-blue-600 font-[poppins] font-[300]">
                        {member.email}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
          {events && events.length > 0 && (
            <SwiperSlide>
              <div className="overflow-y-scroll h-full text-white px-4">
                <h1 className="text-3xl text-center text-blue-700 font-[poppins] mb-4">
                  {events[0].title}
                </h1>
                <img
                  src={events[0].image}
                  className=" h-72 w-full object-contain rounded-lg"
                  alt="Event"
                ></img>
                <p className="my-4 whitespace-pre-line">
                  {events[0].description}
                </p>
                <p className="text-blue-700 font-semibold font-serif">
                  Venue:{" "}
                  <span className="text-white font-normal italic">
                    {events[0].location}
                  </span>
                </p>
                <p className="text-blue-700 font-semibold font-serif">
                  Date:{" "}
                  <span className="text-white font-normal italic">
                    {events[0].date +
                      " " +
                      events[0].month +
                      ", " +
                      events[0].year}
                  </span>
                </p>
                {events && events.length > 1 && (
                  <h2 className="text-2xl font-bold text-blue-70 font-serif py-4">
                    Explore More
                  </h2>
                )}
                <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-4">
                  {events &&
                    events.map(
                      (event, index) =>
                        index > 0 && <EventCard key={index} event={event} />
                    )}
                </div>
              </div>
            </SwiperSlide>
          )}
          <SwiperSlide>
            <div className="p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-y-scroll h-full">
              {images.map((image, index) => (
                <img
                  key={index}
                  onClick={() => openImage(index)}
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover cursor-pointer rounded-lg"
                />
              ))}
              {/* Add more images as needed */}
            </div>
          </SwiperSlide>
        </Swiper>
        {isEnlargedView && (
          <div className="fixed z-50 w-full inset-0 bg-black bg-opacity-75 flex justify-center items-center">
            <button
              onClick={closeImage}
              className="absolute top-4 right-4 text-white"
            >
              <i className="fas fa-times fa-2x text-red-500"></i>
            </button>
            <button
              onClick={() => navigateImage("prev")}
              className="absolute left-[15%] text-white"
            >
              <i className="fas fa-chevron-left fa-2x  text-blue-800"></i>
            </button>
            <img
              src={
                selectedImage != null && images[selectedImage]
                  ? images[selectedImage]
                  : "fallback-image-path.jpg"
              }
              alt=""
              className="w-2/3 h-2/3 rounded-md object-contain bg-center"
            />
            <button
              onClick={() => navigateImage("next")}
              className="absolute right-[15%] text-white"
            >
              <i className="fas fa-chevron-right fa-2x text-blue-800"></i>
            </button>
          </div>
        )}

        <Footer></Footer>
      </div>
    </div>
  );
};

export default ClubTemplate;
