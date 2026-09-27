"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import "./Hero.css";

const slides = [
  {
    image: "/images/hero.jpg",
    eyebrow: "THE ART OF SILVER",
    title: (
      <>
        Silver,
        <br />
        beautifully
        <br />
        timeless.
      </>
    ),
    description:
      "Discover thoughtfully crafted silver jewellery and timeless pieces from Swarna Sangam Jewellers, Khargone.",
  },

  {
    image: "/images/hero.jpg",
    eyebrow: "CRAFTED FOR EVERYDAY",
    title: (
      <>
        Made to
        <br />
        be
        <br />
        remembered.
      </>
    ),
    description:
      "Explore silver pieces designed to become part of your everyday style and special moments.",
  },

  {
    image: "/images/hero.jpg",
    eyebrow: "TIMELESS SILVER",
    title: (
      <>
        A quiet
        <br />
        expression
        <br />
        of elegance.
      </>
    ),
    description:
      "From jewellery to meaningful gifts, discover the world of Swarna Sangam Jewellers.",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const slide = slides[currentSlide];

  const nextSlide = () => {
    setCurrentSlide((current) =>
      current === slides.length - 1 ? 0 : current + 1
    );
  };

  const previousSlide = () => {
    setCurrentSlide((current) =>
      current === 0 ? slides.length - 1 : current - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const handleTouchStart = (event: React.TouchEvent) => {
    touchStartX.current = event.touches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (event: React.TouchEvent) => {
    touchEndX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) {
      return;
    }

    const distance = touchStartX.current - touchEndX.current;

    if (Math.abs(distance) > 50) {
      if (distance > 0) {
        nextSlide();
      } else {
        previousSlide();
      }
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      className="hero"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="hero-slider">
        {slides.map((item, index) => (
          <div
            key={index}
            className={`hero-slide ${
              index === currentSlide ? "hero-slide-active" : ""
            }`}
          >
            <Image
              src={item.image}
              alt="Swarna Sangam silver jewellery"
              fill
              priority={index === 0}
              sizes="100vw"
              className="hero-image"
            />
          </div>
        ))}
      </div>

      <div className="hero-overlay" />

      <div className="hero-content">
        <p className="hero-eyebrow">{slide.eyebrow}</p>

        <h1 className="hero-title">{slide.title}</h1>

        <p className="hero-description">{slide.description}</p>

        <div className="hero-actions">
          <a href="#collection" className="hero-button hero-button-primary">
            SHOP COLLECTION
          </a>

          <a href="#about" className="hero-button hero-button-secondary">
            DISCOVER SWARNA SANGAM
          </a>
        </div>
      </div>

      {/* Desktop arrows */}
      <button
        className="hero-arrow hero-arrow-left"
        onClick={previousSlide}
        aria-label="Previous slide"
      >
        ←
      </button>

      <button
        className="hero-arrow hero-arrow-right"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        →
      </button>

      {/* Slide indicators */}
      <div className="hero-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`hero-dot ${
              index === currentSlide ? "hero-dot-active" : ""
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}