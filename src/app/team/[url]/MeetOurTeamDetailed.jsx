"use client";
import { teamdetail } from '@/services/teamdetail';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

const MeetOurTeamDetailed = ({ url }) => {
    const [teamdetaild, setTeamdetaild] = useState(null);
    const [loading, setLoading] = useState(true);
    const [teamdetailds, setTeamdetailds] = useState([]);

    // Fetch team data
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

    // Update browser tab title dynamically
    useEffect(() => {
        if (teamdetaild) {
            document.title = teamdetaild.meta_title || teamdetaild.title || "Team";
        }
    }, [teamdetaild]);

    if (loading) {
        return <p className="text-center py-10 text-black">Loading...</p>;
    }

    if (!teamdetaild) {
        return <p className="text-center py-10 text-black">Team not found.</p>;
    }

    return (
        <>
            {/* SEO Meta Tags */}
            <Head>
                <title>{teamdetaild.meta_title || teamdetaild.title}</title>
            </Head>

            <section className="overflow-hidden pt-10 lg:px-14 px-3 bg-white">
                <div className="container dark:text-black">
                    <div className="flex flex-wrap lg:flex-nowrap -mx-4">
                        {/* Blog Content */}
                        <div className="w-full lg:w-3/4 px-4">
                            <article>
                                <div>
                                    <div className="w-full overflow-hidden rounded mb-6">
                                        <Image
                                            src={teamdetaild.image?.startsWith('http') ? teamdetaild.image : `/team/${teamdetaild.image}`}
                                            alt={teamdetaild.title || "Team image"}
                                            height={200}
                                            width={200}
                                            className="h-60 w-60 rounded-lg object-cover object-center"
                                            priority
                                        />
                                    </div>
                                    <h1 className="mb-5 text-3xl font-bold leading-tight text-black sm:text-4xl sm:leading-tight">
                                        {teamdetaild.title}
                                    </h1>
                                    <div
                                        className="p-5 lg:text-justify"
                                        dangerouslySetInnerHTML={{ __html: teamdetaild.content }}
                                    />
                                </div>
                            </article>
                        </div>

                        {/* Sidebar */}
                        <div className="w-full lg:w-1/4 px-4 mt-10 lg:mt-0 space-y-6">
                            {/* Treatments Links Section */}
                            <div className="bg-[#00D7FF] text-white rounded-md shadow-md overflow-hidden">
                                <h2 className="bg-[#1e3b70] text-center py-3 font-bold">Our Team</h2>
                                <ul className="divide-y divide-blue-500">
                                    {teamdetailds.map((td) => (
                                        <li key={td.id} className="hover:bg-[#00bfe6] transition">
                                            <Link
                                                href={`${td.url}`}
                                                className="block px-4 py-3"
                                            >
                                                {td.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default MeetOurTeamDetailed;
