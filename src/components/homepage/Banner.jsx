"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Banner() {
  return (
    <section className="relative w-full overflow-hidden m-0 p-0">
      {/* Hero Section container with min-heights */}
      <div className="relative w-full flex flex-col items-start justify-start
                      min-h-[50vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-[90vh] mt-0 pt-0">
        {/* ---------- Large background image (absolute, shown on lg and up) ---------- */}
        <div className="absolute inset-0 lg:block hidden">
          <Image
            src="/banner/asdf.png"
            alt="Doctors - large"
            fill
            priority
            className="object-contain object-top w-full h-full"
            sizes="100vw"
          />
          {/* Optional overlay for text readability on large screens */}
          <div className="absolute inset-0" />
        </div>

        {/* ---------- Small image (in-flow, shown below lg) ---------- */}
        <div className="w-full lg:hidden block">
          {/* using explicit width/height so the image stays in document flow and pushes content below */}
          <Image
            src="/banner/asdfsmall.png"
            alt="Doctors - small"
            width={1400}
            height={700}
            priority
            className="object-contain object-top w-full h-auto"
            sizes="100vw"
          />
        </div>

        {/* ---------- Content ---------- */}
        {/* On small: relative, centered and below the small image.
            On large: absolutely placed over the large background image on the left. */}
        <div
          className={`
            relative z-20 px-5 sm:px-2
            mt-6 lg:mt-0
            mx-auto text-center
            max-w-xl
            lg:mx-0 lg:text-left
            lg:absolute lg:top-28 lg:left-12 lg:max-w-lg
          `}
        >
          <p className="text-sky-600 font-semibold text-sm sm:text-base tracking-wide">
            Quality Therapy Starts From Here
          </p>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#24356E] leading-tight mb-6">
            We Always Put The Patients First
          </h1>

          <button className="bg-sky-500 text-white font-semibold py-3 px-8 sm:py-3.5 sm:px-10 md:py-4 md:px-12 rounded-full hover:bg-sky-600 hover:shadow-xl hover:scale-105 transition-all duration-300 text-sm sm:text-base  shadow-lg">
            Explore Our Treatments
          </button>
        </div>
      </div>
    </section>
  );
}
