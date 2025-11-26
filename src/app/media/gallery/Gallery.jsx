"use client";
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import Image from "next/image";

// Gallery Data
export const galleryData = [
    { id: 1, path: "img1.png" },
    { id: 2, path: "img2.png" },
    { id: 3, path: "img3.png" },
    { id: 4, path: "img4.png" },
    { id: 5, path: "img5.png" },
    { id: 6, path: "img6.png" },
].sort((a, b) => a.id - b.id);

const Gallery = () => {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const handleNext = () =>
        setSelectedIndex((prev) =>
            prev !== null ? (prev + 1) % galleryData.length : 0
        );

    const handlePrev = () =>
        setSelectedIndex((prev) =>
            prev !== null
                ? (prev - 1 + galleryData.length) % galleryData.length
                : galleryData.length - 1
        );

    const closeModal = () => setSelectedIndex(null);

    return (
        <div className="py-10 bg-gradient-to-br from-[#f7fffb] to-[#e8f9f1]">
            <h2
                className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#1e3b70]"
                style={{ fontFamily: "Roboto Slab, serif" }}
            >
                Our Gallery
            </h2>
            <div className="w-24 h-[4px] bg-[#0b2c5f] mx-auto mb-12 rounded-full"></div>

            {/* Masonry Grid */}
            {/* Uniform Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 lg:px-20">
                {galleryData.map((photo, index) => (
                    <div
                        key={photo.id}
                        className="overflow-hidden rounded-2xl cursor-pointer shadow-md"
                        onClick={() => setSelectedIndex(index)}
                    >
                        <Image
                            src={`/gallery/${photo.path}`}
                            alt={`Photo ${photo.id}`}
                            width={600}
                            height={400}
                            className="w-full h-64 object-cover rounded-2xl" // 👈 fixed height
                        />
                    </div>
                ))}
            </div>


            {/* Modal */}
            {selectedIndex !== null && (
                <div className="fixed inset-0 flex justify-center items-center bg-black/40 backdrop-blur-md z-50">
                    {/* Close Button */}
                    <button
                        onClick={closeModal}
                        className="absolute top-6 right-6 cursor-pointer text-white text-3xl hover:text-gray-300 transition"
                    >
                        <FaTimes />
                    </button>

                    {/* Left Arrow */}
                    <button
                        onClick={handlePrev}
                        className="absolute left-6 bg-white/20 hover:bg-white/40 text-white cursor-pointer p-3 rounded-full text-xl backdrop-blur-md"
                    >
                        <FaChevronLeft />
                    </button>

                    {/* Image */}
                    <img
                        src={`/gallery/${galleryData[selectedIndex].path}`}
                        alt="Selected"
                        className="max-w-[90%] max-h-[85vh] rounded-2xl shadow-2xl border border-white/20"
                    />

                    {/* Right Arrow */}
                    <button
                        onClick={handleNext}
                        className="absolute right-6 bg-white/20 hover:bg-white/40 cursor-pointer text-white p-3 rounded-full text-xl backdrop-blur-md"
                    >
                        <FaChevronRight />
                    </button>
                </div>
            )}
        </div>
    );
};

export default Gallery;
