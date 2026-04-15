"use client";

import { heroFont1, heroFont2, heroFont3 } from "@/app/utils/font";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const roles = [
    "24/7 Staffing Support",
    "Fully Vetted & Trained Staff",
    "Fast Response Times",
  ];

  const displayRoles = [...roles, roles[0]];

  const [index, setIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovering) {
        setIndex((prev) => prev + 1);
      }
    }, 2500);

    return () => clearInterval(interval);
  }, [isHovering]);

  useEffect(() => {
    if (index === displayRoles.length - 1) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setIndex(0);
      }, 700); 

      return () => clearTimeout(timeout);
    } else if (index === 0) {
      const timeout = setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [index, displayRoles.length]);

  return (
    <section className="relative w-screen min-h-[80vh] md:h-screen overflow-hidden">
      
      {/* --- MANUAL LOADER START --- */}
      {!imageLoaded && (
        <div className="absolute inset-0 z-[100] flex items-center justify-center bg-white">
          <div className="animate-pulse">
            {/* The centered blinking image */}
            <Image 
              src="/real-logo.png" 
              alt="Loading..." 
              width={140} 
              height={60} 
              priority
              className="opacity-80"
            />
          </div>
        </div>
      )}
      {/* --- MANUAL LOADER END --- */}

      {/* BACKGROUND IMAGE */}
      <Image
        src="/hero7.jpg"
        alt="Carevia hero"
        fill   
        priority
        sizes="100vw"
        onLoadingComplete={() => setImageLoaded(true)}
        className={`
          object-cover transition-opacity duration-700
          ${imageLoaded ? "opacity-100" : "opacity-0"}
        `}
      />

      {/* Desktop background swap */}
      <Image
        src="/hero1.jpg"
        alt="Carevia hero desktop"
        fill
        priority
        sizes="100vw"
        onLoadingComplete={() => setImageLoaded(true)}
        className={`
          hidden md:block object-cover transition-opacity duration-700
          ${imageLoaded ? "opacity-100" : "opacity-0"}
        `}
      />

      {/* OVERLAY */}
      <div className={`absolute inset-0 bg-black/50 z-10 transition-opacity duration-700 ${imageLoaded ? "opacity-100" : "opacity-0"}`} />

      {/* CONTENT */}
      {/* Wrapped in an opacity check to keep it hidden until the image is ready */}
      <div className={`relative z-20 flex flex-col items-center text-center text-white px-4 h-full transition-opacity duration-700 ${imageLoaded ? "opacity-100" : "opacity-0"}`}>
        {/* Tagline */}
        <p
          className={`
            bg-white text-[14.4px]
            ${heroFont3.className}
            md:text-[15px] text-[#04796d]
            lg:mt-[100px] mt-[15px]
            py-[10px] px-[20px]
            font-semibold rounded-[20px]
          `}
        >
          Care Staffing You Can Trust
        </p>

        {/* Headline */}
        <p className="mt-[50px] max-w-xl text-[33px] md:text-[44px] lg:mt-[20px] font-bold">
          Reliable Health & Social Care  <br className="hidden" />
          Staffing You Can Trust
        </p>

        <p className="mt-[47px] md:mt-[30px] text-[20px] md:text-[23px] font-bold">
          Providing skilled and compassionate professionals to hospitals, care homes, supported living services, and private clients across the UK.
        </p>

        {/* Scrolling roles */}
        <div
          className="mt-6 h-[40px] overflow-hidden relative w-full max-w-md"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div
            className="absolute w-full"
            style={{ 
              transform: `translateY(-${index * 40}px)`,
              transition: isTransitioning ? "transform 0.7s ease-in-out" : "none" 
            }}
          >
            {displayRoles.map((role, i) => (
              <div
                key={i}
                className="h-[40px] flex gap-[5px] items-center justify-center text-[25px] md:text-[30px] font-semibold"
              >
                <Image src='/check2.png' alt="check-icon" width={20} height={20}  />
                {role}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-[10px] mt-[10px] pb-[25px]">
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="border border-white   active:bg-[#135969] active:bg-[#135969] p-3 mt-[35px] rounded-[10px] font-semibold text-[19px]"
          >
            Request Staff Now
          </button>

          <Link
            href="/career"
            className="border border-white bg-[#135969] active:bg-transparent hover:bg-transparent p-3 mt-[35px] rounded-[10px] font-semibold text-[19px]"
          >
            Apply for jobs
          </Link>
        </div>
      </div>
    </section>
  );
}