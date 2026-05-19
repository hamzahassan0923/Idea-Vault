"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";

const slides = [
  {
    id: 1,
    title: "Store Powerful Startup Ideas",
    description:
      "Discover creative innovations, save unique concepts, and build the future with IdeaVault.",
    image:
      "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Innovation Starts Inside IdeaVault",
    description:
      "Explore modern startup strategies, technology solutions, and next-generation business ideas.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Turn Creative Ideas Into Reality",
    description:
      "Save, organize, and share innovative startup concepts with the IdeaVault community.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function Banner() {
  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{ clickable: true }}
        className=" overflow-hidden"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative h-120 bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/65"></div>

              {/* Content */}
              <div className="relative z-10 flex items-center h-full px-6 md:px-16">
                <div className="max-w-2xl text-white">
                  <span className="bg-white/10 border border-white/20 px-4 py-2 rounded-full text-sm backdrop-blur-md">
                    Welcome To IdeaVault
                  </span>

                  <h1 className="text-4xl md:text-6xl font-bold leading-tight mt-6 mb-5">
                    {slide.title}
                  </h1>

                  <p className="text-lg md:text-xl text-gray-200 mb-8">
                    {slide.description}
                  </p>

                  <button className="bg-white text-black px-7 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300">
                    <Link href={"/ideas"}> Explore Ideas</Link>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}