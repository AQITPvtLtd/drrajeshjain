"use client";
import { teamdetail } from "@/services/teamdetail";
import React, { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

const MeetOurTeamDetailed = ({ url }) => {
  const [teamdetaild, setTeamdetaild] = useState(null);
  const [loading, setLoading] = useState(true);
  const [teamdetailds, setTeamdetailds] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        const result = await teamdetail();
        const fetched = result.result || result;
        setTeamdetailds(fetched);
        const foundTeamdetaild = fetched.find((teamdetail) => teamdetail.url === url);
        setTeamdetaild(foundTeamdetaild);
      } catch (error) {
        console.error("Error fetching team:", error);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, [url]);

  useEffect(() => {
    if (teamdetaild) {
      document.title = teamdetaild.meta_title || teamdetaild.title || "Team";
    }
  }, [teamdetaild]);

  if (loading) {
    return <p className="text-center py-10 text-gray-700">Loading...</p>;
  }

  if (!teamdetaild) {
    return <p className="text-center py-10 text-gray-700">Team not found.</p>;
  }

  return (
    <>
      <Head>
        <title>{teamdetaild.meta_title || teamdetaild.title}</title>
      </Head>

      <section className="relative bg-gradient-to-br from-gray-50 to-white py-16 lg:px-20 px-5">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {/* ===== Left: Team Details ===== */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
              {/* Image + Title Row */}
              <div className="flex flex-col sm:flex-row gap-8 items-center sm:items-start mb-8">

                {/* IMAGE — FIX ONLY ON LARGE SCREEN */}
                <div className="relative w-full max-w-xs h-64 rounded-2xl overflow-hidden shadow mx-auto
                  lg:w-48 lg:h-48 lg:flex-shrink-0">
                  <Image
                    src={
                      teamdetaild.image?.startsWith("http")
                        ? teamdetaild.image
                        : `/team/${teamdetaild.image}`
                    }
                    alt={teamdetaild.title || "Team Member"}
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>

                {/* TEXT — MAX WIDTH ONLY ON LARGE SCREEN */}
                <div className="space-y-3 lg:max-w-xl">

                  <h1 className="text-3xl md:text-4xl font-bold text-[#1e3b70] leading-tight"
                    style={{ fontFamily: "Roboto Slab, serif" }}>
                    {teamdetaild.title}
                  </h1>

                  {teamdetaild.role && (
                    <p className="text-xl md:text-3xl text-[#345a9d] font-semibold tracking-wide lg:break-words">
                      {teamdetaild.role}
                    </p>
                  )}

                  {teamdetaild.address && (
                    <div className="flex items-center gap-2 text-gray-700 text-lg mt-1">
                      <FaLocationDot className="text-[#1e3b70] text-xl" />
                      <span className="leading-relaxed">{teamdetaild.address}</span>
                    </div>
                  )}

                </div>
              </div>


              {/* Content */}
              <div
                className="prose max-w-none text-gray-700 leading-relaxed lg:text-justify text-sm list-outside"
                dangerouslySetInnerHTML={{ __html: teamdetaild.content }}
              />
            </div>
          </div>

          {/* ===== Right: Sidebar ===== */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-100">
              <h2 className="bg-[#1e3b70] text-white text-center py-4 font-bold text-lg">
                Meet Our Team
              </h2>
              <ul className="divide-y divide-gray-200">
                {teamdetailds.map((td) => (
                  <li key={td.id}>
                    <Link
                      href={`${td.url}`}
                      className={`block px-5 py-3 transition ${td.url === url
                        ? "bg-[#14adac] text-white"
                        : "hover:bg-[#f0f9ff] text-gray-700"
                        }`}
                    >
                      {td.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
};

export default MeetOurTeamDetailed;
