"use client";

import { heroFont1, heroFont2, heroFont3 } from "@/app/utils/font";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const roles = [
    "Registered Nurses",
    "Support Workers",
    "Healthcare Assistants",
    "Cleaners & Domestic Staff",
  ];

  const [index, setIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovering) {
        setIndex((prev) => (prev + 1) % roles.length);
      }
    }, 2500);

    return () => clearInterval(interval);
  }, [isHovering]);

  return (
    <section className="relative w-screen min-h-[80vh] md:h-screen overflow-hidden">
      {/* SKELETON (shows until image loads) */}
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse z-0" />
      )}

      {/* BACKGROUND IMAGE */}
      <Image
        src="/carevia1.png"
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
        src="/carevia3a.png"
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
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* CONTENT (only shows after image loads) */}
      {imageLoaded && (
        <div className="relative z-20 flex flex-col items-center text-center text-white px-4 h-full">
          {/* Tagline */}
          <p
            className={`
              bg-white text-[14.4px]
              ${heroFont3.className}
              md:text-[15px] text-blue-800
              lg:mt-[100px] mt-[15px]
              py-[10px] px-[20px]
              font-semibold rounded-[20px]
            `}
          >
            Redefining Care Staffing across UK
          </p>

          {/* Headline */}
          <p className="mt-[50px] max-w-xl text-[33px] md:text-[44px] lg:mt-[20px] font-bold">
            Trusted care,
            <br className="hidden" />
            when and where you need it
          </p>

          <p className="mt-[47px] md:mt-[30px] text-[19px] md:text-[23px] font-bold">
            Your trusted team for every care you need
          </p>

          {/* Scrolling roles */}
          <div
            className="mt-6 h-[40px] overflow-hidden relative w-full max-w-md"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div
              className="absolute w-full transition-transform duration-700 ease-in-out"
              style={{ transform: `translateY(-${index * 40}px)` }}
            >
              {roles.map((role, i) => (
                <div
                  key={i}
                  className="h-[40px] flex items-center justify-center text-[25px] md:text-[30px] font-semibold"
                >
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
              className="border border-white bg-[#0E6BA8] p-3 mt-[35px] rounded-[10px] font-semibold text-[19px]"
            >
              Contact Now
            </button>

            <Link
              href="/career"
              className="border border-white bg-[#629FAD] p-3 mt-[35px] rounded-[10px] font-semibold text-[19px]"
            >
              Career in Care
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}