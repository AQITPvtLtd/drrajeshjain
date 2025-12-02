"use client";
import Image from "next/image";
import MissionVision from "./missionvision/MissionVision";
import Faq from "@/components/homepage/Faq";
import Testimonials from "@/components/homepage/Testimonials";

export default function AboutUs() {
  return (
    <section className="mt-10">
      {/* ===== About Us Heading ===== */}
      <h2
        className="text-3xl md:text-4xl font-bold text-center text-[#24356E] relative"
        style={{ fontFamily: "Roboto Slab, serif" }}
      >
        About Us
        <span
          className="absolute left-1/2 -bottom-3 transform -translate-x-1/2 w-24 h-[3px] bg-[#0b2c5f] rounded-full"
        ></span>
      </h2>

      {/* ===== About Section Content ===== */}
      <section className="relative w-full py-5 md:py-10 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col-reverse md:flex-row items-center justify-between gap-12">

          {/* ===== Left Content ===== */}
          <div className="w-full md:w-1/2 space-y-5">
            <p className="text-sky-600 font-semibold text-lg border-b-2 border-sky-500 inline-block pb-1">
              Principal Director - Surgical Oncology
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-[#24356E] leading-tight" style={{ fontFamily: "Roboto Slab, serif" }}>
              Dr. Rajesh Kumar Jain
            </h1>

            <p className="text-gray-600 leading-relaxed max-w-lg text-justify">
              We provide expert medical care with compassion, guiding every patient with personalized attention, advanced techniques, and support, ensuring a confident, informed, and comfortable healthcare experience at every step.
            </p>
          </div>

          {/* ===== Right Image Section ===== */}
          <div className="w-full md:w-1/2 relative flex justify-center items-center">
            <div className="relative w-[95%] max-w-md md:max-w-lg rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/about/about.png"
                alt="Doctors performing surgery"
                width={700}
                height={800}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      <MissionVision />
      <Testimonials />
      <Faq />
    </section>
  );
}
