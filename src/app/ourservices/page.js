"use client";

import Footer from "@/components/Footer";
import ServiceSlide from "@/components/ServiceSlide";
import React, { useState } from "react";
import Image from "next/image";

const Service = () => {
  const [heroReady, setHeroReady] = useState(false);

  const staffCards = [
    { id: 1, title: "Hospitals", img: "/hos1.jpg", desc: "" },
    { id: 2, title: "Care Homes", img: "/care3.jpg", desc: "" },
    { id: 3, title: "Supported Living Services", img: "/support1.jpg", desc: "" },
    { id: 4, title: "Private Clients", img: "/private1.jpg", desc: "" },
  ];

  return (
    <div>
      {/* HERO SECTION - Background handled safely */}
      {/* <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden bg-gray-100">
        <Image
          src="/career1.png" 
          alt="Built for care"
          fill
          priority
          className={`object-cover transition-opacity duration-700 ${
            heroReady ? "opacity-100" : "opacity-0"
          }`}
          onLoadingComplete={() => setHeroReady(true)}
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 text-white">
          <h1 className="text-[29.4px] md:text-[50px] font-bold">
            Built for care. Delivered with precision.
          </h1>
          <p className="text-[20px] mt-[15px] md:text-[24px]">
            We don’t just supply staff, We support care.
          </p>
        </div>
      </section> */}

      {/* INTRO SECTION */}
      <div className="bg-gradient-to-r from-white to-[#0e6ba8]/20">
        <div className="w-[90%] mx-auto pb-[40px]">
          <h2 className="text-[#006A71] border-b text-[35px] md:text-[40px] font-semibold text-center pt-[20px] mb-[21px]">
            Our Services
          </h2>
          <p className="text-[20px] md:text-[22px] mb-[15px]">
            At <span className="text-[#006A71] font-semibold">Synora Staffing Solutions</span>, we bridge the gap between healthcare providers and high-quality professionals. We understand that in the care sector, consistency and compassion are just as important as qualifications. Whether you need a last-minute shift cover or a long-term staffing partner, we provide vetted experts who are ready to make a difference.
          </p>
          <p className="text-[20px] md:text-[22px]">
            We offer a wide range of staffing solutions <span className="font-semibold">for:</span>
          </p>
        </div>

        {/* STAFF SLIDE */}
        <div className="pb-[40px] mt-[-20px]">
          <ServiceSlide cards={staffCards} color={true} />
        </div>
      </div>

      {/* ROLES & FLEXIBILITY LISTS */}
      <div className="w-[90%] mx-auto py-10 space-y-12">
        
        {/* Professional Roles */}
        <div>
          <p className="md:text-[22px] text-[20px] text-center mb-8">
            We provide a diverse team of fully trained and qualified healthcare <span className="text-[#006A71] font-semibold">professionals,</span> including:
          </p>
          <div className="mx-auto w-fit">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
              {[
                "Social Workers",
                "Registered Nurses",
                "Support Workers",
                "Care Assistants",
                "Domestic Staff",
                "Occupational Therapists",
              ].map((role) => (
                <li key={role} className="flex items-center gap-3 text-gray-700 font-medium text-[20px]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#006A71]"></span>
                  {role}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Flexible Options */}
        <div>
          <p className="md:text-[22px] text-[20px] text-center mb-8">
            With <span className="text-[#006A71] font-semibold">Flexible</span> Staffing Options such as:
          </p>
          <div className="mx-auto w-fit">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
              {[
                "Temporary Cover",
                "Emergency Staffing",
                "Long-Term Placements",
                "Contract Staffing"
              ].map((option) => (
                <li key={option} className="flex items-center gap-3 text-gray-700 font-medium text-[20px]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#006A71]"></span>
                  {option}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* TESTIMONIAL - Using the updated style you liked */}
      <div className="w-[90%] md:w-[70%] mx-auto my-[60px]">
        <div className="bg-[#84A7A1]/20 p-8 md:p-12 rounded-2xl border-l-8 border-[#006A71]">
          <p className="italic text-[20px] md:text-[22px] text-gray-800 leading-relaxed">
            "I underestimated how hard it was to find the right support for my adult son. Synora Staffing Solutions changed everything, they provided the perfect care he needed and the peace of mind we were looking for."
          </p>
          <p className="mt-6 font-bold text-[#296374] text-lg uppercase tracking-wider">
            – MARGARET R, PRIVATE CLIENT
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Service;