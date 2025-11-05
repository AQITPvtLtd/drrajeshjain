"use client";
import React from "react";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoTimeOutline } from "react-icons/io5";
import Link from "next/link";

const Top = () => {
  return (
    <div className="bg-[#1e3b70] text-white text-sm w-full">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 py-2 gap-2 md:gap-0 text-center md:text-left">

        {/* ✅ Left Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start sm:space-x-4 space-y-2 sm:space-y-0">
          <p className="leading-tight">
            Dr. Rajesh Jain
          </p>

          {/* Divider (desktop only) */}
          <div className="hidden sm:block w-px h-5 bg-white/30"></div>

          <div className="flex items-center justify-center sm:justify-start space-x-2">
            <IoTimeOutline className="text-sky-400 text-lg" />
            <span>All - Days: 8:00 AM - 4:00 PM</span>
          </div>
        </div>

        {/* ✅ Right Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-end space-y-2 sm:space-y-0 sm:space-x-4 mt-2 sm:mt-0">

          {/* Social Icons */}
          <div className="flex items-center justify-center space-x-3">
            <Link href="#" className="hover:text-sky-400 transition">
              <FaFacebookF />
            </Link>
            <Link href="#" className="hover:text-sky-400 transition">
              <FaSquareXTwitter />
            </Link>
            <Link href="#" className="hover:text-sky-400 transition">
              <FaLinkedinIn />
            </Link>
            <Link href="#" className="hover:text-sky-400 transition">
              <FaYoutube />
            </Link>
          </div>

          {/* Divider (desktop only) */}
          <div className="hidden sm:block w-px h-5 bg-white/30"></div>

          {/* Appointment Button */}
          <Link
            href="/contact"
            className="bg-[#00D7FF] hover:bg-[#00bfe6] text-white font-semibold px-5 py-2 rounded transition inline-block"
          >
            Appointment
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Top;
