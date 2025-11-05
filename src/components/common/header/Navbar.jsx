"use client";
import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="bg-white border-b border-gray-200 w-full">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4 py-3 sm:py-4 gap-4 sm:gap-0">

        {/* ✅ Left: Logo */}
        <div className="flex items-center space-x-2">
          <Image
            src="/logo/jsrlogo.png" // replace with your logo path
            alt="JSR Logo"
            width={55}
            height={55}
            className="object-contain"
          />
        </div>

        {/* ✅ Right: Contact Info */}
        <div className="flex flex-col sm:flex-row items-center sm:space-x-8 text-center sm:text-left">
          {/* Email */}
          <div className="flex items-center space-x-3 mb-3 sm:mb-0">
            <FaEnvelope className="text-[#1e3b70] text-xl min-w-[24px]" />
            <div>
              <Link
                href="mailto:drrajeshjainonococare@gmail.com"
                className="text-[#1e3b70] font-semibold text-sm sm:text-base"
              >
                drrajeshjainonococare@gmail.com
              </Link>
            </div>
          </div>

          {/* Divider (hidden on small screens) */}
          <div className="hidden sm:block w-px h-10 bg-gray-300"></div>

          {/* Address */}
          <div className="flex items-center space-x-3">
            <FaMapMarkerAlt className="text-[#1e3b70] text-xl min-w-[24px]" />
            <div>
              <p className="text-[#1e3b70] font-semibold text-sm sm:text-base">
                <Link href="https://maps.app.goo.gl/wTsZLoGiiEYL7cZv7" target="_blank">
                  Pusa Rd, Radha Soami Satsang,
                  <br />
                  Rajinder Nagar, New Delhi, Delhi, 110005
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
