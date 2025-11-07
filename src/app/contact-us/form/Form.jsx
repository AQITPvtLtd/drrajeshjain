"use client";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { ClipLoader } from "react-spinners";
import { FaUser, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { form } from '@/services/user';

export default function Form() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        phone: "",
        location: "",
        doctor: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formDataToSend = new FormData();
        Object.keys(formData).forEach((key) => {
            formDataToSend.append(key, formData[key]);
        });

        try {
            const response = await form(formDataToSend);
            if (response.success) {
                Swal.fire({
                    title: "Form Submitted Successfully!",
                    text: "We have received your information.",
                    icon: "success",
                });
                setFormData({
                    fullname: "",
                    email: "",
                    phone: "",
                    location: "",
                    doctor: "",
                });
                router.push("/");
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong! Please try again later.",
                });
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Failed to submit the form. Please check your network and try again.",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="py-16 px-6">
            <div className="max-w-3xl bg-[#1e3b70]  mx-auto backdrop-blur-xl rounded-2xl shadow-2xl p-8 md:p-12 border border-white/20">
                <h2 className="text-center text-white text-3xl font-bold mb-8" style={{ fontFamily: "Roboto Slab, serif" }}>
                    Book an Appointment
                </h2>

                <form onSubmit={handleSubmit} className="flex flex-col gap-6">

                    {/* Input Group */}
                    {[
                        { name: "fullname", placeholder: "Your Name", icon: <FaUser /> },
                        { name: "email", placeholder: "Email Address", icon: <FaEnvelope />, type: "email" },
                        { name: "phone", placeholder: "Phone Number", icon: <FaPhoneAlt />, type: "tel" },
                        { name: "location", placeholder: "Your Location", icon: <FaMapMarkerAlt /> },
                    ].map((input, i) => (
                        <div key={i} className="relative group">
                            <input
                                type={input.type || "text"}
                                name={input.name}
                                value={formData[input.name]}
                                onChange={handleChange}
                                className="w-full bg-white/90 text-gray-800 rounded-xl py-4 pl-12 pr-4 focus:ring-4 focus:ring-cyan-400 focus:bg-white transition-all outline-none placeholder-transparent peer"
                                placeholder={input.placeholder}
                                required
                            />
                            <label
                                className="absolute left-12 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-cyan-600"
                            >
                                {input.placeholder}
                            </label>
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-500 text-lg">
                                {input.icon}
                            </div>
                        </div>
                    ))}

                    {/* Doctor Dropdown */}
                    <div className="relative group">
                        <select
                            name="doctor"
                            value={formData.doctor}
                            onChange={handleChange}
                            className="w-full appearance-none bg-white/90 text-gray-800 rounded-xl py-4 pl-12 pr-10 focus:ring-4 focus:ring-cyan-400 focus:bg-white transition-all outline-none"
                            required
                        >
                            <option value="">Choose Doctor</option>
                            <option value="Dr. Rajesh Jain">Dr. Rajesh Jain</option>
                            <option value="Dr. Ishan Mohan">Dr. Ishan Mohan</option>
                            <option value="Dr. Himanshu Gupta">Dr. Himanshu Gupta</option>
                            <option value="Dr. Pranjal Kulshreshtha">Dr. Pranjal Kulshreshtha</option>
                            <option value="Dr. Shruti Bhatia">Dr. Shruti Bhatia</option>
                            <option value="Dr. Shubhi Yadav">Dr. Shubhi Yadav</option>
                        </select>
                        <IoIosArrowDown className="absolute right-4 top-1/2 -translate-y-1/2 text-cyan-500 text-xl pointer-events-none" />
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-500 text-lg">
                            <FaUser />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="mt-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 flex justify-center items-center gap-2 hover:scale-105 active:scale-95"
                    >
                        {loading ? <ClipLoader color="#fff" size={20} /> : "Make Appointment"}
                    </button>
                </form>
            </div>
        </section>
    );
}
