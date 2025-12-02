"use client";
import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaLocationDot, FaPhone, FaEnvelope, FaSquareXTwitter, FaInstagram } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0b2c5f] text-white pt-16 relative overflow-hidden">
      {/* Top Section */}
      <div className="container mx-auto px-6 md:px-12">
        {/* Logo & Social Icons */}
        <div className="flex flex-col md:flex-row items-center justify-between border-b border-[#14adac] pb-8">
          <Link href="/" className="flex items-center gap-2 mb-6 md:mb-0">
            <Image
              src="/logo/footerlogo.png"
              alt="Footer Logo"
              width={220}      // increase width
              height={90}      // increase height
              className="w-auto h-auto"
            />
          </Link>

          <div className="flex gap-5">
            {/* Facebook */}
            <Link
              href="https://www.facebook.com/people/Dr-Rajesh-Jain/61581814087397/"
              target="_blank"
              className="bg-white shadow-md p-3 rounded-full transition transform hover:scale-110 hover:shadow-xl"
            >
              <FaFacebookF size={18} className="text-[#1877F2]" />
            </Link>

            {/* Instagram */}
            <Link
              href="https://www.instagram.com/drrajeshjainoncocare/"
              target="_blank"
              className="bg-white shadow-md p-3 rounded-full transition transform hover:scale-110 hover:shadow-xl"
            >
              <FaInstagram
                size={18}
                className="bg-clip-text bg-gradient-to-tr from-[#feda75] text-[#d62976] to-[#962fbf]"
              />
            </Link>

            {/* LinkedIn */}
            <Link
              href="https://www.linkedin.com/company/dr-rajesh-jain/about/"
              target="_blank"
              className="bg-white shadow-md p-3 rounded-full transition transform hover:scale-110 hover:shadow-xl"
            >
              <FaLinkedinIn size={18} className="text-[#0077B5]" />
            </Link>

            <Link
              href="https://www.youtube.com/@drrajeshjainoncologyteam?si=gJie7FHhlCWWOfEm"
              target="_blank"
              className="bg-white shadow-md p-3 rounded-full transition transform hover:scale-110 hover:shadow-xl"
            >
              <FaYoutube size={18} className="text-[#E60023]" />
            </Link>

            {/* Google */}
            <Link
              href="https://maps.app.goo.gl/kyS7v8moezXd7k6N7"
              target="_blank"
              className="bg-white shadow-md p-3 rounded-full transition transform hover:scale-110 hover:shadow-xl"
            >
              <FcGoogle size={20} />
            </Link>
          </div>
        </div>

        {/* Main Footer Section */}
        <div className="mt-10">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-12 justify-between text-left">

              {/* Quick Links */}
              <div>
                <h2 className="text-2xl font-semibold mb-4" style={{ fontFamily: "Roboto Slab, serif" }}>Quick Links</h2>
                <ul className="grid grid-cols-2 gap-x-6 text-sm">
                  <div className="space-y-2">
                    <li><Link href="/" className="flex items-start gap-2 hover:text-[#14adac]"><span>›</span>Home</Link></li>
                    <li><Link href="/about-us" className="flex items-start gap-2 hover:text-[#14adac]"><span>›</span>About Us</Link></li>
                    <li><Link href="/our-team" className="flex items-start gap-2 hover:text-[#14adac]"><span>›</span>Our Team</Link></li>
                    <li><Link href="/contact-us" className="flex items-center gap-2 hover:text-[#14adac]"><span>›</span>Contact Us</Link></li>
                  </div>

                  <div className="space-y-2">
                    <li><Link href="/blogs" className="flex items-start gap-2 hover:text-[#14adac]"><span>›</span>Blogs</Link></li>
                    <li><Link href="/media/gallery" className="flex items-start gap-2 hover:text-[#14adac]"><span>›</span>Gallery</Link></li>
                    <li><Link href="/media/videos" className="flex items-start gap-2 hover:text-[#14adac]"><span>›</span>Videos</Link></li>
                  </div>
                </ul>
              </div>

              {/* Treatments */}
              <div>
                <h2 className="text-2xl font-semibold mb-4" style={{ fontFamily: "Roboto Slab, serif" }}>Treatments</h2>
                <ul className="grid grid-cols-2 gap-x-6 text-sm">
                  <div className="space-y-2">
                    <li><Link href="/our-team/dr-pranjal-kulshreshtha" className="flex items-start gap-2 hover:text-[#14adac]"><span>›</span>Breast Cancer Surgery</Link></li>
                    <li><Link href="/our-team/dr-ishan-mohan" className="flex items-start gap-2 hover:text-[#14adac]"><span>›</span>Head & Neck Cancer Surgery</Link></li>
                    <li><Link href="/treatments/gynaecological" className="flex items-start gap-2 hover:text-[#14adac]"><span>›</span>Gynaecological Cancer Surgery</Link></li>
                    <li><Link href="/our-team/dr-rajesh-jain" className="flex items-start gap-2 hover:text-[#14adac]"><span>›</span>Gastrointestinal Cancer Surgery</Link></li>
                  </div>

                  <div className="space-y-2">
                    <li><Link href="/our-team/dr-rajesh-jain" className="flex items-start gap-2 hover:text-[#14adac]"><span>›</span>Thoracic Cancer Surgery</Link></li>
                    <li><Link href="/our-team/dr-rajesh-jain" className="flex items-start gap-2 hover:text-[#14adac]"><span>›</span>Bone & Soft tissue Cancer Surgery</Link></li>
                    <li><Link href="/our-team/dr-rajesh-jain" className="flex items-start gap-2 hover:text-[#14adac]"><span>›</span>Urological Cancer Surgery</Link></li>
                    <li><Link href="/our-team/dr-himanshu-gupta" className="flex items-start gap-2 hover:text-[#14adac]"><span>›</span>Oncoplastic & Reconstructive Surgery</Link></li>
                  </div>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="text-2xl font-semibold mb-4" style={{ fontFamily: "Roboto Slab, serif" }}>Contact Us</h2>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-3">
                    <FaPhone className="text-[#14adac]" />
                    <Link href="tel:9599206900" className="hover:text-[#14adac]">
                      +91 95992 06900
                    </Link>
                  </li>

                  <li className="flex items-center gap-3">
                    <FaPhone className="text-[#14adac]" />
                    <Link href="tel:9560658828" className="hover:text-[#14adac]">
                      +91 95606 58828
                    </Link>
                  </li>

                  <li className="flex items-center gap-3">
                    <FaEnvelope className="text-[#14adac]" />
                    <Link href="mailto:drrajeshjainonococare@gmail.com" className="hover:text-[#14adac]">
                      drrajeshjainonococare@gmail.com
                    </Link>
                  </li>

                  <li className="flex items-start gap-3">
                    <FaLocationDot className="text-[#14adac] text-lg mt-1" />
                    <Link href="https://maps.app.goo.gl/kyS7v8moezXd7k6N7" target="_blank" className="hover:text-[#14adac]">
                      <p className="">
                        Pusa Rd, Radha Soami Satsang,

                        Rajinder Nagar, <br /> New Delhi, Delhi - 110005
                      </p>
                    </Link>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>


      </div>

      {/* Bottom Bar */}
      <div className="bg-[#14adac] mt-10 py-4 text-center text-sm">
        <p style={{ fontFamily: "Roboto Slab, serif" }}>
          <Link href="https://tekbooster.com/" className="hover:text-gray-200" target="_blank">
            Design & Developed By Tek Booster <br className="block sm:hidden" />
            (Digital Marketing Company)
          </Link>
        </p>
      </div>
    </footer>
  );
}
