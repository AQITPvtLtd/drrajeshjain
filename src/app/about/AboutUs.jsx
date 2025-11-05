"use client";
import Image from "next/image";
import MissionVision from "./missionvision/MissionVision";
import Faq from "@/components/homepage/Faq";

export default function AboutUs() {
  return (
    <section>
      <section className="relative w-full bg-gradient-to-r from-white via-blue-50/40 to-white py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col-reverse md:flex-row items-center justify-between gap-12">

          {/* ===== Left Content ===== */}
          <div className="w-full md:w-1/2 space-y-5">
            <p className="text-sky-600 font-semibold text-lg border-b-2 border-sky-500 inline-block pb-1">
              Principal Director - Surgical Oncology
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-[#24356E] leading-tight">
              Dr. Rajesh Kumar Jain
            </h1>

            <p className="text-gray-600 leading-relaxed max-w-lg">
              Dr Rajesh Jain is a distinguished surgical oncologist with over 26 years of experience. He is renowned for his pioneering surgical techniques and unwavering commitment to delivering the highest standard of care.
            </p>

            <button className="mt-6 bg-sky-500 text-white font-semibold py-3 px-8 rounded-full hover:bg-sky-600 transition-all">
              Learn More
            </button>
          </div>

          {/* ===== Right Image Section ===== */}
          <div className="w-full md:w-1/2 relative flex justify-center items-center">
            {/* Image */}
            <div className="relative w-[95%] max-w-md md:max-w-lg rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/about/about.jpg" // <-- place your image in /public
                alt="Doctors performing surgery"
                width={700}  // increased width
                height={800} // increased height
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
      <MissionVision />
      <Faq />
    </section>
  );
}
