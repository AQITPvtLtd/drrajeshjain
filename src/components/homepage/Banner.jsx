"use client";
import Image from "next/image";
import React from "react";

export default function Banner() {
  return (
    <section className="relative w-full overflow-hidden m-0 p-0">
      {/* Hero Section */}
      <div className="relative w-full flex items-center justify-start min-h-[65vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-[90vh] mt-0 pt-0">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/banner/banner.png"
            alt="Doctors"
            fill
            priority
            className="object-cover md:object-cover md:object-right object-center w-full h-full"
            sizes="100vw"
          />
        </div>

        {/* Content Section */}
        <div className="relative z-20 px-5 sm:px-10 md:px-16 lg:px-28 xl:px-36 max-w-3xl">
          <p className="text-sky-600 font-semibold mb-2 text-sm sm:text-lg">
            Quality Therapy Starts From Here
          </p>

          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#24356E] leading-tight mb-4">
            We Always Put <br className="hidden sm:block" /> The Patients First
          </h1>

          <button className="bg-sky-500 text-white font-semibold py-2.5 px-6 sm:py-3 sm:px-8 rounded-full hover:bg-sky-600 transition-all duration-300 text-xs sm:text-base shadow-md">
            Explore Our Treatments
          </button>
        </div>
      </div>
    </section>
  );
}
