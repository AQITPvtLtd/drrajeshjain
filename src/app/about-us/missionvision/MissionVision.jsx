"use client";
import React from "react";
import Image from "next/image";

export default function MissionVision() {
  return (
    <section className="relative w-full py-5 md:py-10 bg-gradient-to-b from-white to-gray-50 text-gray-800">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">

        {/* ===== Heading ===== */}
        <div className="text-center mb-10">
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-900"
            style={{ fontFamily: "Roboto Slab, serif" }}
          >
            Our <span className="text-[#0b2c5f]">Mission</span> &{" "}
            <span className="text-[#0b2c5f]">Vision</span>
          </h2>
        </div>

        {/* ===== Mission & Vision Cards ===== */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* ===== Mission Card ===== */}
          <div className="relative bg-gradient-to-b from-white to-blue-50 rounded-2xl border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 p-10">

            {/* Curved Top Border */}
            <div className="absolute -top-[2px] left-0 w-full h-[10px] overflow-hidden rounded-t-2xl">
              <div className="w-[98%] mx-auto h-[6px] bg-gradient-to-r from-[#0b2c5f] to-blue-400 rounded-b-full"></div>
            </div>

            {/* Mission Image */}
            <div className="w-28 h-28 mx-auto mb-5">
              <Image
                src="/about/mission.png"
                alt="Mission Icon"
                width={110}
                height={110}
                className="mx-auto"
              />
            </div>


            <h3
              className="text-2xl font-bold text-gray-900 mb-4 text-center"
              style={{ fontFamily: "Roboto Slab, serif" }}
            >
              Our Mission
            </h3>

            <p className="text-gray-700 leading-relaxed text-justify">
              Our mission is to provide safe, advanced, and compassionate cancer
              care through a team of experienced specialists. We work together
              to offer accurate diagnosis, personalized treatment plans, and
              complete emotional support to patients and their families. Every
              member of our team is committed to giving patients comfort,
              clarity, and high-quality care at every stage of their journey.
            </p>
          </div>

          {/* ===== Vision Card ===== */}
          <div className="relative bg-gradient-to-b from-white to-blue-50 rounded-2xl border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 p-10">

            {/* Curved Top Border */}
            <div className="absolute -top-[2px] left-0 w-full h-[10px] overflow-hidden rounded-t-2xl">
              <div className="w-[98%] mx-auto h-[6px] bg-gradient-to-r from-[#0b2c5f] to-blue-400 rounded-b-full"></div>
            </div>

            {/* Vision Image */}
            <div className="w-28 h-28 mx-auto mb-5">
              <Image
                src="/about/vision1.png"
                alt="Vision Icon"
                width={110}
                height={110}
                className="mx-auto"
              />
            </div>


            <h3
              className="text-2xl font-bold text-gray-900 mb-4 text-center"
              style={{ fontFamily: "Roboto Slab, serif" }}
            >
              Our Vision
            </h3>

            <p className="text-gray-700 leading-relaxed text-justify">
              Our vision is to become a trusted centre of excellence in cancer
              care, where expert doctors from different specialities come
              together to improve outcomes, bring hope, and make world-class
              treatment accessible to everyone. We aim to combine technology,
              teamwork, and empathy to help patients live healthier, stronger,
              and longer lives.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
