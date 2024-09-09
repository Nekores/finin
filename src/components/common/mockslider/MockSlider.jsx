"use client";
import React, { useState } from "react";
import Image from "next/image";
import mockup from "./../../../../public/img/hero/mock1.png"; // Path to your mobile mockup image

const slides = [
  { id: 1, content: "./../../../../public/img/athelete/clase-money-shot.png" },
  { id: 2, content: "./../../../../public/img/athelete/clase-money-shot.png" },
  { id: 3, content: "./../../../../public/img/athelete/clase-money-shot.png" },
];

const MobileMockupSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div style={{ position: "relative", width: "573px", height: "604px" }}>
      <Image
        src={mockup}
        alt='Mobile Mockup'
        layout='fill'
        objectFit='cover'
        style={{ zIndex: 1 }}
      />
      <div
        style={{
          position: "absolute",
          top: "12%", // Adjust based on your mockup
          left: "8%", // Adjust based on your mockup
          width: "85%", // Adjust to fit inside the mockup screen
          height: "76%", // Adjust to fit inside the mockup screen
          zIndex: 2,
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            transform: `translateX(-${currentSlide * 100}%)`,
            transition: "transform 0.5s ease-in-out",
          }}>
          {slides.map((slide) => (
            <div
              key={slide.id}
              style={{
                minWidth: "100%",
                height: "100%",
                backgroundImage: `url(${slide.content})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}></div>
          ))}
        </div>
      </div>
      <button
        style={{
          position: "absolute",
          top: "50%",
          left: "5%",
          zIndex: 3,
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer",
        }}
        onClick={handlePrevSlide}>
        Prev
      </button>
      <button
        style={{
          position: "absolute",
          top: "50%",
          right: "5%",
          zIndex: 3,
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer",
        }}
        onClick={handleNextSlide}>
        Next
      </button>
    </div>
  );
};

export default MobileMockupSlider;
