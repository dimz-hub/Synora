"use client";

import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import ServiceSlide from "@/components/ServiceSlide";
import React, { useEffect, useState } from "react";



const Service = () => {
  const [bgLoaded, setBgLoaded] = useState(false);

  // Preload hero background image
  useEffect(() => {
    const img = new window.Image();
    img.src = "/carevia5.png";
    img.onload = () => setBgLoaded(true);
  }, []);

  const cards = [
    {
      id: 1,
      title: "Hospitals",
      img: "/domicare1.webp",
      desc:
        "Our home care staff provide compassionate, one-to-one support in the comfort of your own home. From personal care and daily assistance to companionship and mobility support, we help individuals remain safe, independent, and dignified.",
    },
    {
      id: 2,
      title: "Domiciliary Care",
      img: "/homecare1.webp",
      desc:
        "We supply skilled domiciliary care professionals to support individuals with day-to-day tasks in their own homes, helping maintain independence and quality of life.",
    },
    {
      id: 3,
      title: "Dementia Care",
      img: "/dementia1.jpg",
      desc:
        "Our dementia care staff are specially trained to provide patient, compassionate support focused on safety, consistency, and meaningful engagement.",
    },
    {
      id: 4,
      title: "Learning Difficulty Care",
      img: "/learn.webp",
      desc:
        "We support individuals with learning disabilities to live fulfilling, independent lives through person-centred care.",
    },
    {
      id: 5,
      title: "End of Life Care",
      img: "/endlife.webp",
      desc:
        "Our end of life care staff provide compassionate, respectful support focused on comfort, dignity, and emotional reassurance.",
    },
    {
      id: 6,
      title: "Respite Care",
      img: "/respitecare.webp",
      desc:
        "We offer trusted respite care staff to give family carers a well-deserved break while ensuring continuity of care.",
    },
  ];

  const staffCards = [
    { id: 1, title: "Hospitals", img: "/hos1.jpg", desc: "" },
    { id: 2, title: "Care Homes", img: "/care3.jpg", desc: "" },
    { id: 3, title: "Supported Living Services", img: "/support1.jpg", desc: "" },
    { id: 4, title: "Private Clients", img: "/private1.jpg", desc: "" },
  ];

  
  if (!bgLoaded) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
        <div className="flex flex-col items-center gap-4">
          <div className="h-10 w-10 rounded-full border-4 border-[#296374] border-t-transparent animate-spin" />
          <p className="text-[#296374] font-semibold text-lg">
            Loading services…
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* HERO SECTION */}
      <div className="bg-gradient-to-r from-white to-[#0e6ba8]/30">
        {/* <section className="relative w-screen h-[80vh] md:h-screen">
          <div className="absolute inset-0 w-full h-full">
            <div
              className="
                w-full h-full
                bg-[url('/carevia5.png')]
                bg-cover
                bg-center
              "
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>

          <div className="relative z-10 flex flex-col items-center text-center text-white px-4 h-full">
            <h3 className="mt-[150px] text-[29.4px] md:text-[44px] font-semibold">
              Built for care. Delivered with precision.
            </h3>
            <p className="text-[20px] mt-[20px] md:text-[24px]">
              We don’t just supply staff, We support care.
            </p>
            <p className="text-[18px] mt-[20px] md:text-[20px]">
              Our experienced professionals integrate seamlessly into your
              service, giving you reliable support exactly when you need it.
            </p>
          </div>
        </section> */}

        {/* INTRO */}
        <div className="w-[90%] mx-auto pb-[40px]">
          <h3 className="text-[#006A71] border-b text-[35px] md:text-[40px] font-semibold text-center pt-[20px] mb-[21px]">
            Our Services
          </h3>
          <p className="text-[20px] md:text-[22px] mb-[15px]">
            At <span className=" text-[#006A71] font-semibold">Synora Staffing Solutions</span>, we bridge the gap between healthcare providers and high-quality professionals. We understand that in the care sector, consistency and compassion are just as important as qualifications. Whether you need a last-minute shift cover or a long-term staffing partner, we provide vetted experts who are ready to make a difference.
          </p>
          <p className="text-[20px] md:text-[22px]">
            We offer a wide range of staffing solutions {" "}
            <span className="font-semibold">for</span>
          </p>
        </div>

        {/* STAFF SLIDE */}
        <div className="pb-[40px] mt-[-20px]">
          <ServiceSlide cards={staffCards} color={true} />
        </div>
      </div>

      {/* SERVICE CARDS */}
      <p className="mt-[20px] w-[90%] mx-auto md:text-[22px] text-[20px] text-center">
       We provide a diverse team of fully trained and qualified healthcare <span className="text-[#006A71] font-semibold">professionals,</span> including:
      </p>

      <div className="mt-[30px] mx-auto w-[80%]">
          <ul className="space-y-4">
        {[
          "Social Workers",
          "Registered Nurses",
          "Support Workers",
          "Care Assistants",
          "Domestic Staff",
          "Occupational Therapists",
        ].map((role) => (
          <li key={role} className="flex items-center gap-3 text-gray-700 font-medium text-lg text-[20px]">
            <span className="w-2 h-2 rounded-full bg-[#006A71] "></span>
            {role}
          </li>
        ))}
      </ul>
      </div>
       <p className="mt-[20px] w-[100%] mx-auto md:text-[22px] text-[20px] text-center">
       With  <span className="text-[#006A71] font-semibold">Flexible</span>  Staffing Options such as 
      </p>
      <div className="mt-[30px] mx-auto w-[80%]">
          <ul className="space-y-4">
        {[
          "Temporary Cover",
          "Emergency Staffing",
          "Long-Term Placements",
           "Contract Staffing"
        ].map((role) => (
          <li key={role} className="flex items-center gap-3 text-[20px] text-gray-700 font-medium text-lg">
            <span className="w-2 h-2 rounded-full bg-[#006A71]"></span>
            {role}
          </li>
        ))}
      </ul>
      </div>

      {/* TESTIMONIAL */}
      <div className="h-[40vh] flex flex-col mt-[40px] gap-[10px] items-center justify-center bg-[#84A7A1]/70">
        <p className="w-[87%] text-center text-[19px] mx-auto">
          "I underestimated how hard it was to find the right support for my adult son. Synora Staffing Solutions changed everything, they provided the perfect care he needed and the peace of mind we were looking for"
        </p>
        <p className="text-center text-[18px] font-semibold text-white">
          – MARGARET R, PRIVATE CLIENT
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default Service;