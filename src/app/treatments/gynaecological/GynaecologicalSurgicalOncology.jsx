// pages/team/gynaecological-surgical-oncology.js
"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function GynaecologicalSurgicalOncology() {
  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-[#1e3b70] mb-2 text-center" style={{ fontFamily: "Roboto Slab, serif" }}>
        Gynaecological Cancer Surgery
      </h1>
      <div className="w-24 h-[4px] bg-[#0b2c5f] mx-auto mb-12 rounded-full"></div>

      <div className="grid sm:grid-cols-2 gap-8">
        {/* Dr. Shruti Bhatia */}
        <Link
          href="/our-team/dr-shruti-bhatia"
          className="block bg-sky-50 rounded-xl shadow hover:shadow-lg hover:bg-sky-100 transition overflow-hidden"
        >
          <div className="flex flex-col items-center text-center p-6">
            <div className="w-40 h-40 mb-4 rounded-full overflow-hidden">
              <Image
                src="/team/docimg4.1.png"
                alt="Dr. Shruti Bhatia"
                width={160}
                height={160}
                className="object-cover w-full h-full"
              />
            </div>
            <h2 className="font-semibold text-lg text-[#1a2a5b]">
              Dr. Shruti Bhatia
            </h2>
            <p className="text-black mt-2 text-sm">
              Director - Gynaecological Surgical Oncology
            </p>
          </div>
        </Link>

        {/* Dr. Shubhi Yadav */}
        <Link
          href="/our-team/dr-shubhi-yadav"
          className="block bg-sky-50 rounded-xl shadow hover:shadow-lg hover:bg-sky-100 transition overflow-hidden"
        >
          <div className="flex flex-col items-center text-center p-6">
            <div className="w-40 h-40 mb-4 rounded-full overflow-hidden">
              <Image
                src="/team/docimg5.1.png"
                alt="Dr. Shubhi Yadav"
                width={160}
                height={160}
                className="object-cover w-full h-full"
              />
            </div>
            <h2 className="font-semibold text-lg text-[#1a2a5b]">
              Dr. Shubhi Yadav
            </h2>
            <p className="text-black mt-2 text-sm">
              Senior Consultant - Gynaecological Surgical Oncology
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
