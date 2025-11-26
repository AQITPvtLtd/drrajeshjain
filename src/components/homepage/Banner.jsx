"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Banner() {
  return (
    <section className="relative w-full overflow-hidden m-0 p-0 bg-white leading-none">
      {/* ✅ Desktop version: image + overlayed content */}
      <div className="hidden lg:block relative w-full">
        <Image
          src="/banner/asdf.png"
          alt="Doctors - large"
          width={1600}
          height={800}
          priority
          className="object-contain w-full h-auto"
          sizes="100vw"
        />

        {/* Overlay content (desktop only) */}
        <div className="absolute inset-0 flex flex-col justify-center items-start px-12 text-left">

          <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold text-[#24356E] leading-tight mb-6" style={{ fontFamily: "Roboto Slab, serif" }}>
            Expert Care You Can Trust
          </h1>

          <p className="text-black font-semibold text-base tracking-wide pb-5">
            From diagnosis to treatment, we provide clear guidance, <br /> emotional support, and world-class expertise.
          </p>

          <Link
            href="/contact-us"
            className="bg-sky-500 text-white font-semibold py-4 px-12 rounded-full hover:bg-sky-600 hover:shadow-xl hover:scale-105 transition-all duration-300 shadow-lg inline-block text-center"
          >
            Book Your Consultation
          </Link>
        </div>
      </div>

      {/* ✅ Mobile version: image first, then content below */}
      <div className="block lg:hidden w-full relative flex flex-col items-center text-center">
        <Image
          src="/banner/asdfsmall.png"
          alt="Doctors - small"
          width={1000}
          height={800}
          priority
          className="object-contain w-full h-auto"
          sizes="100vw"
        />

        {/* Content below image (mobile only) */}
        <div className="mt-6 px-5">

          <h1 className="text-2xl sm:text-3xl font-bold text-[#24356E] leading-tight mb-4">
            Expert Care You Can Trust
          </h1>

          <button className="bg-sky-500 text-white font-semibold py-3 px-8 rounded-full hover:bg-sky-600 hover:shadow-xl hover:scale-105 transition-all duration-300 text-sm sm:text-base shadow-lg">
            Explore Our Treatments
          </button>
        </div>
      </div>
    </section>
  );
}
