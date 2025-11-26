"use client";
import { useState } from "react";
import Image from "next/image";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  { id: 1, question: "What is Surgical Oncology?", answer: "Surgical oncology is the branch of medicine focused on diagnosing, staging, and treating cancer through surgery, including removal of tumors and cancerous tissues." },
  { id: 2, question: "When is surgery recommended for cancer?", answer: "Surgery is recommended when the tumor is localized and can be safely removed to help cure the cancer, control its growth, or reduce its size for better treatment outcomes." },
  { id: 3, question: "Can surgery cure cancer completely?", answer: "Yes, in many early-stage cancers surgery can be curative. However, it may also be combined with chemotherapy, radiation, or immunotherapy for best results." },
  { id: 4, question: "What cancers are commonly treated with surgery?", answer: "Breast cancer, lung cancer, colon cancer, pancreatic cancer, liver tumors, sarcomas, stomach cancer, ovarian cancer, oral cancers, and many more." },
  { id: 5, question: "What is Robotic Cancer Surgery?", answer: "Robotic surgery allows extremely precise tumor removal using robotic technology, improving outcomes, especially in prostate, gastrointestinal, and gynecologic cancers." },
  { id: 6, question: "How long does it take to recover after cancer surgery?", answer: "Recovery time varies based on the procedure and patient health. Most patients recover within a few weeks to a few months with proper medical care and support." },
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(faqs[0].id); // 🔹 No question open by default
  const toggleFaq = (id) => setActiveIndex(activeIndex === id ? null : id);

  return (
    <section className="py-16 bg-white px-5 md:px-10">
      <div className="container mx-auto px-4 relative">
        <div className="lg:pr-[520px]">
          <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-10">
            {/* Left Side - FAQ */}
            <div className="flex-1 w-full">
              <p className="text-[#00b4d8] font-semibold uppercase text-center lg:text-left">
                Faq & Answers
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e3b70] mt-2 mb-8 text-center lg:text-left" style={{ fontFamily: "Roboto Slab, serif" }}>
                Frequently Asked <br className="hidden md:block" /> Questions
              </h2>

              <div className="space-y-4">
                {faqs.map((faq) => (
                  <div key={faq.id} className="bg-white shadow-md rounded-xl border border-gray-100 transition-all duration-300">
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full flex justify-between items-center text-left px-6 py-4 font-semibold text-[#1e3b70] focus:outline-none"
                    >
                      {faq.question}
                      <span className={`w-8 h-8 flex items-center justify-center rounded-md transition-all ${activeIndex === faq.id ? "bg-[#00b4d8] text-white" : "bg-[#1e3b70] text-white"}`}>
                        {activeIndex === faq.id ? <FaMinus /> : <FaPlus />}
                      </span>
                    </button>

                    {activeIndex === faq.id && (
                      <div className="px-6 pb-4 text-gray-600 text-sm md:text-base border-t border-gray-100">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Image for small screens */}
            {/* <div className="lg:hidden flex-1 w-full flex justify-center items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-[#1e3b70] rounded-3xl w-[85%] h-[90%] top-5 left-5 -z-10"></div>
                <Image src="/about/faq.png" alt="Doctor" width={420} height={480} className="rounded-2xl object-contain" />
              </div>
            </div> */}
          </div>
        </div>

        {/* Right Side Image (absolute for lg+) */}
        <div className="hidden lg:block">
          <div className="absolute top-1/2 right-6 transform -translate-y-1/2 w-[420px]">
            <div className="relative rounded-3xl overflow-hidden bg-[#1e3b70]">
              <Image
                src="/about/faq.png"
                alt="Doctor"
                width={400}
                height={500}
                className="rounded-3xl object-cover w-full h-full opacity-90"
              />
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
