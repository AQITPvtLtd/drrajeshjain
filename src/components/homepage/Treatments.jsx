"use client";
import React from "react";
import Link from "next/link";
import { FaHeart, FaUser, FaVial, FaArrowRight } from "react-icons/fa";
import { GiStomach } from "react-icons/gi";
import { GiLungs } from "react-icons/gi";
import { TbBone } from "react-icons/tb";
import { GiKidneys, GiHeadshot } from "react-icons/gi";
import { LuScissors } from "react-icons/lu";
import { FaRibbon } from "react-icons/fa";
import { FaFemale } from "react-icons/fa";

const services = [
  {
    icon: <GiStomach  className="text-white text-3xl" />,
    title: "Gastrointestinal Cancer Surgery",
    description:
      "",
    href: "/our-team/dr-rajesh-jain",
  },
  {
    icon: <GiLungs className="text-white text-3xl" />,
    title: "Thoracic Cancer Surgery",
    description:
      "",
    href: "/our-team/dr-rajesh-jain",
  },
  {
    icon: <TbBone className="text-white text-3xl" />,
    title: "Bone & Soft tissue Cancer Surgery",
    description:
      "",
    href: "/our-team/dr-rajesh-jain",
  },
  {
    icon: <GiKidneys className="text-white text-3xl" />,
    title: "Urological Cancer Surgery",
    description:
      "",
    href: "/our-team/dr-rajesh-jain",
  },
  {
    icon: <GiHeadshot className="text-white text-3xl" />,
    title: "Head & Neck Cancer Surgery",
    description:
      "",
    href: "/our-team/dr-ishan-mohan",
  },
  {
    icon: <FaRibbon className="text-white text-3xl" />,
    title: "Breast Cancer Surgery",
    description:
      "",
    href: "/our-team/dr-pranjal-kulshreshtha",
  },
  {
    icon: <FaFemale className="text-white text-3xl" />,
    title: "Gynaecological Cancer Surgery",
    description:
      "",
    href: "/treatments/gynaecological",
  },
  {
    icon: <LuScissors className="text-white text-3xl" />,
    title: "Oncoplastic & Reconstructive Surgery",
    description:
      "",
    href: "/our-team/dr-himanshu-gupta",
  },
];

export default function Treatments() {
  // No split — show all services normally
  const mainServices = services;


  return (
    <section className="w-full py-10 bg-white font-poppins">
      {/* Heading */}
      <div className="text-center mb-10 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a2a5b] leading-snug" style={{ fontFamily: "Roboto Slab, serif" }}>
          Services Available
        </h2>
        <div className="w-24 h-[4px] bg-[#0b2c5f] mx-auto mb-12 rounded-full"></div>
      </div>

      {/* Main Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 p-5 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {mainServices.map((service, index) => (
          <div
            key={index}
            className="relative bg-white border-2 border-gray-100 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl"
          >
            <div className="bg-[#14adac] w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-md">
              {service.icon}
            </div>
            <h3 className="text-[#1a2a5b] text-xl font-semibold mb-3">
              {service.title}
            </h3>
            <Link href={service.href}>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                <div className="bg-[#14adac] w-12 h-12 flex items-center justify-center rounded-full cursor-pointer hover:bg-[#0F8A89] transition-all shadow-md">
                  <FaArrowRight className="text-white text-lg" />
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
