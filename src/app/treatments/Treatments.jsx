"use client";
import React from "react";
import Link from "next/link";
import { FaHeart, FaUser, FaVial, FaArrowRight } from "react-icons/fa";
import { MdMedicalServices } from "react-icons/md";
import { FaBandAid } from "react-icons/fa";
import { FaRibbon } from "react-icons/fa";
import { FaFemale } from "react-icons/fa";

const services = [
  {
    icon: <FaHeart className="text-white text-3xl" />,
    title: "Surgical Oncology",
    description:
      "",
    href: "/our-team/dr-rajesh-jain",
  },
  {
    icon: <MdMedicalServices className="text-white text-3xl" />,
    title: "Head & Neck Oncosurgery",
    description:
      "",
    href: "/our-team/dr-ishan-mohan",
  },
  {
    icon: <FaBandAid className="text-white text-3xl" />,
    title: "Plastic & Onco Reconstructive Surgery",
    description:
      "",
    href: "/our-team/dr-himanshu-gupta",
  },
  {
    icon: <FaRibbon className="text-white text-3xl" />,
    title: "Breast Oncological Surgery",
    description:
      "",
    href: "/our-team/dr-pranjal-kulshreshtha",
  },
  {
    icon: <FaFemale className="text-white text-3xl" />,
    title: "Gynaecological Surgical Oncology",
    description:
      "",
    href: "/treatments/gynaecological",
  },
];

export default function Treatments() {
  // Use splice to separate last card
  const mainServices = services.slice(0, services.length - 1);
  const lastService = services.slice(-1)[0];

  return (
    <section className="w-full py-10 bg-white font-poppins">
      {/* Heading */}
      <div className="text-center mb-10 px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a2a5b] leading-snug" style={{ fontFamily: "Roboto Slab, serif" }}>
          Treatments
        </h2>
        <div className="w-24 h-[4px] bg-[#0b2c5f] mx-auto mb-12 rounded-full"></div>
      </div>

      {/* Main Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 p-5 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {mainServices.map((service, index) => (
          <div
            key={index}
            className="relative bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl"
          >
            <div className="bg-sky-400 w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-md">
              {service.icon}
            </div>
            <h3 className="text-[#1a2a5b] text-xl font-semibold mb-3">
              {service.title}
            </h3>
            <Link href={service.href}>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                <div className="bg-sky-400 w-12 h-12 flex items-center justify-center rounded-full cursor-pointer hover:bg-sky-500 transition-all shadow-md">
                  <FaArrowRight className="text-white text-lg" />
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Centered Last Card */}
      <div className="max-w-7xl mx-auto flex justify-center mt-8 px-4">
        <div className="relative bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl w-full sm:w-[80%] md:w-[50%] lg:w-[25%]">
          <div className="bg-sky-400 w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-md">
            {lastService.icon}
          </div>
          <h3 className="text-[#1a2a5b] text-xl font-semibold mb-3">
            {lastService.title}
          </h3>
          <Link href={lastService.href}>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
              <div className="bg-sky-400 w-12 h-12 flex items-center justify-center rounded-full cursor-pointer hover:bg-sky-500 transition-all shadow-md">
                <FaArrowRight className="text-white text-lg" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
