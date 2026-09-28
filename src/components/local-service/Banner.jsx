import React, { useState } from "react";

const heroContent = [
  {
    id: 1,
    title: "Move With Us Packers & Movers in Mumbai",
    subtitle:
      "Safe, fast, and affordable relocation services across all major areas in Mumbai.",
    bg: "/banner/banner1.jpg", // change to your background image path
  },
  // You can add more objects for dynamic slide/hero change
];

export default function Banner() {
  const [current] = useState(0); // for now static – can be turned into slider

  return (
    <section
      className="w-full h-[50vh] md:h-[60vh] bg-cover bg-center relative flex items-center justify-center"
      style={{ backgroundImage: `url(${heroContent[current].bg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-7xl">
        <h1 className="text-white font-bold text-2xl md:text-4xl lg:text-5xl leading-tight">
          {heroContent[current].title}
        </h1>

        <p className="text-white text-lg md:text-xl mt-4">
          {heroContent[current].subtitle}
        </p>
      </div>
    </section>
  );
}

