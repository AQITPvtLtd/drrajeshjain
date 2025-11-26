"use client";
import { FaStar, FaQuoteRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    id: 1,
    feedback:
      "The entire oncology team showed kindness and compassion from day one. They explained the treatment plan and helped us stay calm through the most challenging moments. We couldn’t have asked for better care.",
  },
  {
    id: 2,
    feedback:
      "The doctors used the latest technology and ensured I felt emotionally supported. Their encouragement and clarity kept me strong throughout my treatment journey.",
  },
  {
    id: 3,
    feedback:
      "Every appointment felt comfortable. The doctors listened carefully, explained treatment options, and supported both my family and me. Their dedication shows in everything they do.",
  },
  {
    id: 4,
    feedback:
      "Cancer treatment is scary, but the doctors here made me feel safe every day. Their kind words and gentle approach helped me stay positive.",
  },
  {
    id: 5,
    feedback:
      "Each doctor brought different expertise, and together they created a perfect treatment plan for me. Their teamwork is outstanding.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-10 bg-white px-5">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2
          className="text-3xl md:text-4xl font-bold text-[#1e3b70]"
          style={{ fontFamily: "Roboto Slab, serif" }}
        >
          Our Testimonials
        </h2>
        <div className="w-28 h-[4px] bg-[#0b2c5f] mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Container with perfect spacing */}
      <div className="container mx-auto px-6 md:px-12 relative">

        {/* Navigation Buttons */}
        <button className="swiper-button-prev bg-[#1e3b70] text-white p-3 rounded-full shadow-md hover:bg-[#0b2c5f] transition absolute -left-2 md:-left-8 top-1/2 -translate-y-1/2 z-20">
          <FaChevronLeft className="text-white" size={16} />
        </button>

        <button className="swiper-button-next bg-[#1e3b70] text-white p-3 rounded-full shadow-md hover:bg-[#0b2c5f] transition absolute -right-2 md:-right-8 top-1/2 -translate-y-1/2 z-20">
          <FaChevronRight className="text-white" size={16} />
        </button>


        {/* Swiper */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          speed={800}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id} className="pt-5 pb-5">
              <div
                className="relative bg-white shadow-lg rounded-3xl p-8 pt-12 border border-gray-100
                hover:shadow-xl hover:-translate-y-2 transition-all duration-300 
                min-h-[320px] h-full flex flex-col"
              >
                {/* Quote Icon */}
                <FaQuoteRight className="absolute text-gray-100 text-7xl top-4 right-6 opacity-90" />

                {/* Stars */}
                <div className="flex text-[#f5b50a] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-lg" />
                  ))}
                </div>

                {/* Feedback */}
                <p className="text-gray-700 text-base leading-relaxed italic flex-grow">
                  “{t.feedback}”
                </p>

                {/* Bottom Line */}
                <div className="mt-6 w-20 h-[3px] bg-[#1e3b70] rounded-full"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
