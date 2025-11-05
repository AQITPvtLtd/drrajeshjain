"use client";
import React from "react";
// import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
// import Image from "next/image";

// Gallery Data
// export const galleryData = [
//     { id: 1, path: "img1.jpg" },
//     { id: 2, path: "img2.jpg" },
//     { id: 3, path: "img3.jpg" },
//     { id: 4, path: "img4.jpg" },
//     { id: 5, path: "img5.jpg" },
//     { id: 6, path: "img6.jpg" },
// ].sort((a, b) => a.id - b.id);

const Gallery = () => {
    // const [selectedIndex, setSelectedIndex] = useState(null);

    // const handleNext = () =>
    //     setSelectedIndex((prev) =>
    //         prev !== null ? (prev + 1) % galleryData.length : 0
    //     );

    // const handlePrev = () =>
    //     setSelectedIndex((prev) =>
    //         prev !== null
    //             ? (prev - 1 + galleryData.length) % galleryData.length
    //             : galleryData.length - 1
    //     );

    // const closeModal = () => setSelectedIndex(null);

    return (
        <div>
            {/* <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">
                Our Gallery
            </h2>
           
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
                            className="w-full h-64 object-cover rounded-2xl" 
                        />
                    </div>
                ))}
            </div>

            
            {selectedIndex !== null && (
                <div className="fixed inset-0 flex justify-center items-center bg-black/40 backdrop-blur-md z-50">
                 
                    <button
                        onClick={closeModal}
                        className="absolute top-6 right-6 text-white text-3xl hover:text-gray-300 transition"
                    >
                        <FaTimes />
                    </button>

                  
                    <button
                        onClick={handlePrev}
                        className="absolute left-6 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full text-xl backdrop-blur-md"
                    >
                        <FaChevronLeft />
                    </button>

                  
                    <img
                        src={`/gallery/${galleryData[selectedIndex].path}`}
                        alt="Selected"
                        className="max-w-[90%] max-h-[85vh] rounded-2xl shadow-2xl border border-white/20"
                    />

                    
                    <button
                        onClick={handleNext}
                        className="absolute right-6 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full text-xl backdrop-blur-md"
                    >
                        <FaChevronRight />
                    </button>
                </div>
            )} */}
            <div className='text-4xl text-center font-semibold bg-white text-black mt-30 mb-30'>Coming Soon</div>

        </div>
    );
};

export default Gallery;
