"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { HeroBannerDetails } from "@/utils";

interface HeroSlide {
  id: string;
  url: string;
  title: string;
  description: string;
  ctaButton: string;
  ctaLink: string;
}

export default function HeroSlider() {
  const [slides, setSlides] = useState<HeroSlide[]>([]);
  useEffect(() => {
    fetchHeroBanner();
  }, []);
  const fetchHeroBanner = async () => {
    try {
      const heroData: HeroSlide[] = await HeroBannerDetails();
      setSlides(heroData);
    } catch (err) {
      setSlides([]);
    }
  };

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  useEffect(() => {
    // const interval = setInterval(() => {
    //   nextSlide()
    // }, 5000)
    // return () => clearInterval(interval)
  }, [nextSlide]);

  return (
    <section className="relative h-screen pt-20 ">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide
              ? "opacity-100"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="absolute inset-0 z-0">
            {slide.url &&
              (/\.(jpg|jpeg|png|gif|webp|svg)$/i.test(
                slide.url.split("?")[0]
              ) ? (
                <Image
                  src={slide.url}
                  alt={slide.title}
                  fill
                  className="object-cover brightness-75"
                  priority={index === 0}
                />
              ) : (
                <video
                  src={slide.url}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="object-cover brightness-75 h-full w-full"
                />
              ))}
          </div>
          <div className="relative container z-10 flex flex-col justify-end h-full pb-16 px-4 text-white">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {slide.title}
              </h2>
              <p className="text-xs mb-6 md:text-lg">{slide.description}</p>
              <Link
                href={"/" + slide.ctaLink || "/contact"}
                className="inline-flex items-center px-10 py-3 bg-white text-gray-800 rounded-full font-medium"
              >
                {slide.ctaButton || "Contact Now"}{" "}
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="absolute bottom-10 left-10 z-20 flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full ${
                    index === currentSlide
                      ? "bg-white px-6"
                      : "border border-white"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      {/* <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-20 p-2 bg-black/30 rounded-full text-white hover:bg-black/50 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-20 p-2 bg-black/30 rounded-full text-white hover:bg-black/50 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button> */}

      {/* Dots navigation */}

      <div className="absolute w-full h-[300px] p-4 bottom-0 left-0 flex items-end bg-gradient-to-b from-black/0 to-[#2d3c2d]"></div>
    </section>
  );
}
