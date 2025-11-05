"use client";
import React from "react";

export default function MissionVision() {
  return (
    <section className="relative w-full py-20 bg-gradient-to-b from-white to-gray-50 text-gray-800">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* ===== Heading ===== */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our <span className="text-blue-600">Mission</span> &{" "}
            <span className="text-blue-600">Vision</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            We turn ideas into reality through excellence, ethics, and
            innovation — shaping a better tomorrow for all.
          </p>
        </div>

        {/* ===== Mission & Vision Cards ===== */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* ===== Mission Card ===== */}
          <div className="relative bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 p-10">
            {/* Curved Top Border */}
            <div className="absolute -top-[2px] left-0 w-full h-[10px] overflow-hidden rounded-t-2xl">
              <div className="w-[98%] mx-auto h-[6px] bg-gradient-to-r from-blue-600 to-blue-400 rounded-b-full"></div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Our mission is to deliver transformative, value-driven solutions
              that empower individuals and organizations to grow, innovate, and
              excel in today’s fast-evolving world. We champion integrity,
              customer satisfaction, and sustainable development in all our
              endeavors.
            </p>
            <div className="mt-6 pt-6 border-t border-gray-200 text-blue-600 italic">
              “Empowering growth through innovation and trust.”
            </div>
          </div>

          {/* ===== Vision Card ===== */}
          <div className="relative bg-gradient-to-b from-white to-blue-50 rounded-2xl border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 p-10">
            {/* Curved Top Border */}
            <div className="absolute -top-[2px] left-0 w-full h-[10px] overflow-hidden rounded-t-2xl">
              <div className="w-[98%] mx-auto h-[6px] bg-gradient-to-r from-blue-600 to-blue-400 rounded-b-full"></div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Our vision is to be a globally trusted leader that shapes a
              brighter, more connected future through innovation, collaboration,
              and ethical leadership — creating meaningful impact across
              businesses and communities worldwide.
            </p>
            <div className="mt-6 pt-6 border-t border-gray-200 text-blue-600 italic">
              “Leading with purpose, inspiring the future.”
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
