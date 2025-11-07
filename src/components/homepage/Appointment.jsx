"use client";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { ClipLoader } from "react-spinners";
import { FaUser, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { form } from '@/services/user'; // ✅ Make sure this path is correct

export default function Appointment() {
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
        <section className="bg-white px-5 mt-8">
            <div className="bg-[#1e3b70] rounded-xl p-6 md:p-10 max-w-6xl mx-auto shadow-lg">
                <form
                    onSubmit={handleSubmit}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                >
                    {/* Name */}
                    <div className="relative">
                        <input
                            type="text"
                            name="fullname"
                            id="fullname"
                            placeholder="Your Name"
                            value={formData.fullname}
                            onChange={handleChange}
                            className="w-full pl-5 pr-10 py-3 rounded-full bg-white text-gray-700 placeholder-gray-400 outline-none"
                            required
                        />
                        <FaUser className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>

                    {/* Email */}
                    <div className="relative">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full pl-5 pr-10 py-3 rounded-full bg-white text-gray-700 placeholder-gray-400 outline-none"
                            required
                        />
                        <FaEnvelope className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>

                    {/* Phone */}
                    <div className="relative">
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full pl-5 pr-10 py-3 rounded-full bg-white text-gray-700 placeholder-gray-400 outline-none"
                            required
                        />
                        <FaPhoneAlt className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>

                    {/* Location */}
                    <div className="relative">
                        <input
                            type="text"
                            id="location"
                            name="location"
                            placeholder="Your Location"
                            value={formData.location}
                            onChange={handleChange}
                            className="w-full pl-5 pr-10 py-3 rounded-full bg-white text-gray-700 placeholder-gray-400 outline-none"
                            required
                        />
                        <FaMapMarkerAlt className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>

                    {/* Doctor */}
                    <div className="relative">
                        <select
                            id="doctor"
                            name="doctor"
                            value={formData.doctor}
                            onChange={handleChange}
                            className="appearance-none w-full pl-5 pr-10 py-3 rounded-full bg-white text-gray-700 outline-none cursor-pointer"
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
                        <IoIosArrowDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[#00b4d8] hover:bg-[#009ec2] text-white font-semibold py-3 rounded-full transition-all duration-300 flex justify-center items-center"
                    >
                        {loading ? (
                            <ClipLoader color="#fff" size={20} />
                        ) : (
                            "Make Appointment"
                        )}
                    </button>
                </form>
            </div>
        </section>
    );
}
