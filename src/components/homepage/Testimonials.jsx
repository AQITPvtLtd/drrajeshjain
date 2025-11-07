"use client";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Dr. Rivanur R. Rafi",
    title: "Cardiologist",
    image: "/images/doctor1.jpg", // replace with your image path
    feedback:
      "Varius sit amet mattis vulputate. Nulla posuere sollicitudin on The aliquam ultrices sagittis orci a. Nunc non blandit massa enim. Fermentum posuere urna nec tincidunt praesent semper feugiat nibh. Dolor magna eget est lorem ipsum dolor sit amet endrerit dolor.",
  },
  {
    id: 2,
    name: "Dr. Rodja Hartmann",
    title: "Cardiologist",
    image: "/images/doctor2.jpg", // replace with your image path
    feedback:
      "Varius sit amet mattis vulputate. Nulla posuere sollicitudin on The aliquam ultrices sagittis orci a. Nunc non blandit massa enim. Fermentum posuere urna nec tincidunt praesent semper feugiat nibh. Dolor magna eget est lorem ipsum dolor sit amet endrerit dolor.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1e3b70] mb-2 mt-2" style={{ fontFamily: "Roboto Slab, serif" }}>
          Our Testimonials
        </h2>
        <div className="w-24 h-[4px] bg-[#0b2c5f] mx-auto mb-12 rounded-full"></div>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="relative bg-white shadow-md rounded-2xl p-6 border border-gray-100 transition-transform hover:-translate-y-1 duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <Image
                src={t.image}
                alt={t.name}
                width={70}
                height={70}
                className="rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold text-[#1e3b70]">
                  {t.name}
                </h3>
                <p className="text-gray-500 text-sm">{t.title}</p>
              </div>
            </div>

            <div className="flex text-[#f5b50a] mb-4">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              “{t.feedback}”
            </p>

            <FaQuoteRight className="absolute text-gray-200 text-6xl top-4 right-6" />
          </div>
        ))}
      </div>
    </section>
  );
}
