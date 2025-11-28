"use client";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaClock } from "react-icons/fa";
import React, { useRef } from "react";
import Link from "next/link";
import Form from "./form/Form";

const Contact = () => {
  const sectionRef = useRef(null);

  return (
    <section className="bg-gradient-to-br from-[#fff8f8] via-[#fefefe] to-[#f9f9f9] relative overflow-hidden">
      {/* Title */}
      <div className="text-center py-12 px-4 lg:px-12">
        <h2
          className="text-3xl sm:text-4xl font-bold text-[#1e3b70] mb-4 tracking-wide" style={{ fontFamily: "Roboto Slab, serif" }}
        >
          Get in Touch
        </h2>
        <div className="w-20 sm:w-24 h-1 bg-[#0b2c5f] mx-auto mb-10 rounded-full"></div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
          {/* Email */}
          <Link
            href="mailto:drrajeshjainonococare@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white shadow-md rounded-2xl py-6 sm:p-8 transition-transform hover:-translate-y-1 hover:shadow-2xl border-t-4 border-[#14adac] block hover:bg-[#f9fafb]"
          >
            <div className="flex justify-center mb-4">
              <FaEnvelope className="text-[#14adac] text-3xl" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
              Email Support
            </h3>
            <p className="text-sm text-gray-600 text-center whitespace-nowrap overflow-x-auto no-scrollbar">
              drrajeshjainonococare@gmail.com
            </p>
          </Link>

          {/* Phone */}
          <Link
            href="tel:9810465644"
            className="bg-white shadow-md rounded-2xl p-6 sm:p-8 transition-transform hover:-translate-y-1 hover:shadow-2xl border-t-4 border-[#14adac] block hover:bg-[#f9fafb]"
          >
            <div className="flex justify-center mb-4">
              <FaPhoneAlt className="text-[#14adac] text-3xl" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
              Let's Talk
            </h3>
            <p className="text-sm text-gray-600 text-center">+91 98104 65644</p>
          </Link>

          {/* Location */}
          <Link
            href="https://maps.app.goo.gl/kyS7v8moezXd7k6N7"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white shadow-md rounded-2xl p-6 sm:p-8 transition-transform hover:-translate-y-1 hover:shadow-2xl border-t-4 border-[#14adac] block hover:bg-[#f9fafb]"
          >
            <div className="flex justify-center mb-4">
              <FaMapMarkerAlt className="text-[#14adac] text-3xl" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
              Location
            </h3>
            <p className="text-sm text-gray-600 text-center leading-relaxed">
              Pusa Rd, Radha Soami Satsang,
              <br />
              Rajinder Nagar, New Delhi, Delhi, 110005
            </p>
          </Link>

          {/* Timing */}
          <div className="bg-white shadow-md rounded-2xl p-6 sm:p-8 transition-transform hover:-translate-y-1 hover:shadow-2xl border-t-4 border-[#14adac] hover:bg-[#f9fafb]">
            <div className="flex justify-center mb-4">
              <FaClock className="text-[#14adac] text-3xl" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3 text-center">
              Timing Schedule
            </h3>
            <p className="text-sm text-gray-600 text-center leading-relaxed">
              <strong>
                Max Hospital <br /> (All - Days)
              </strong>
              <br />
              8:00 AM to 4:00 PM
            </p>
          </div>
        </div>



        {/* Contact Form */}
        <div>
          <Form />
        </div>
      </div>

      {/* Map Section */}
      <div ref={sectionRef} className="relative">
        <h3 className="absolute sm:top-8 left-1/2 -translate-x-1/2 bg-white px-4 sm:px-6 py-1.5 sm:py-2 text-gray-800 text-sm sm:text-lg font-semibold rounded-full shadow-md z-10">
          Find Us on the Map
        </h3>
        <div className="w-full h-[300px] sm:h-[400px] lg:h-[450px] rounded-none lg:rounded-t-3xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112049.068161495!2d77.02674869726563!3d28.643743999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0319d3d31a05%3A0x7f3849c6422b0a20!2sDr.%20Rajesh%20Kumar%20Jain%20%7C%20Best%20Oncologist%20in%20Pusa%20Road%2C%20New%20Delhi%20%7C%20Max%20Hospital!5e0!3m2!1sen!2sin!4v1762171192517!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
