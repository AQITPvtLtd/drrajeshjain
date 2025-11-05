"use client";
import React, { useEffect, useState } from "react";
import { teamdetail } from "@/services/teamdetail";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function OurTeam() {
    const [teamdetails, setTeamdetails] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getResult() {
            try {
                const result = await teamdetail();
                setTeamdetails(result || []);
            } catch (error) {
                console.error("Error fetching team details:", error);
                setTeamdetails([]);
            } finally {
                setLoading(false);
            }
        }
        getResult();
    }, []);

    if (loading) return <p className="text-center text-black">Loading team...</p>;

    return (
        <section className="bg-gradient-to-b from-[#f8fbff] to-white py-16 px-6 md:px-12 lg:px-20">
            {/* Heading */}
            <div className="text-center mb-12">
                <p className="text-[#1e3b70] font-semibold uppercase tracking-wide border-b-2 border-[#1e3b70] inline-block pb-1">
                    Our Special Doctors
                </p>
                <h2 className="text-3xl md:text-5xl font-bold text-[#1e3b70] mt-4 leading-snug">
                    Meet Our Expert <br className="hidden md:block" /> Doctors
                </h2>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                {teamdetails.map((td) => (
                    <div
                        key={td.id || td.title}
                        className="bg-white shadow-lg p-2 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300"
                    >
                        {/* Image */}
                        <div className="relative w-full h-[320px]">
                            <Image
                                src={`/team/${td.image}`}
                                alt={td.title || "team image"}
                                fill
                                className="object-cover rounded-lg"
                            />
                        </div>

                        {/* Text Section */}
                        <div className="p-6 flex justify-between items-center">
                            <div>
                                <h3 className="text-[#1e3b70] font-semibold text-lg md:text-xl">
                                    {td.title || "Untitled"}
                                </h3>
                                <p className="text-gray-500 text-sm mt-1">{td.role || "No role available."}</p>
                            </div>

                            {td.url && (
                                <Link href={`/our-team/${td.url}`}>
                                    <button className="w-10 cursor-pointer h-10 flex items-center justify-center rounded-full bg-[#1e3b70] text-white hover:bg-[#274b90] transition">
                                        <FaArrowRight size={16} />
                                    </button>
                                </Link>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
