"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const handleContactClick = () => {
    setMenuOpen(false);
    if (pathname === "/") {
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/#contact");
    }
  };

  // Helper function to determine if a link is active
  const isActive = (path) => pathname === path;

  return (
    <>
      <div 
        className={`w-full fixed top-0 left-0 z-50 bg-white transition-all duration-300 ${
          scrolled ? "shadow-md" : "border-b border-gray-100"
        }`}
      >
        <div className="flex items-center justify-between w-[93%] mx-auto p-[10px]">
          <Link href="/" className=" ">
            <Image src="/real-logo.png" alt="logo" width={120} height={50} />
          </Link>

          {/* Desktop */}
          <div className="hidden lg:flex mx-auto text-[20px] text-center items-center gap-[40px] py-[12px] px-[40px] rounded-[10px] font-medium">
            <Link 
              href="/#about" 
              className={`border-b-2 transition-all ${isActive('/#about') ? 'border-[#0E6BA8] text-[#0E6BA8]' : 'border-transparent hover:border-[#0E6BA8]'}`}
            >
              About
            </Link>
            <Link 
              href="/career" 
              className={`border-b-2 transition-all ${isActive('/career') ? 'border-[#0E6BA8] text-[#0E6BA8]' : 'border-transparent hover:border-[#2E8A99]'}`}
            >
              Careers
            </Link>
            <Link 
              href="/ourservices" 
              className={`border-b-2 transition-all ${isActive('/ourservices') ? 'border-[#0E6BA8] text-[#0E6BA8]' : 'border-transparent hover:border-[#0E6BA8]'}`}
            >
              Services
            </Link>
          </div>

          <button
            onClick={handleContactClick}
            className="hidden lg:block bg-[#0E6BA8] text-white px-5 py-2 rounded-lg hover:bg-[#0a5a8d] transition-colors"
          >
            Contact Now
          </button>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden z-50 p-2"
          >
            {menuOpen ? (
              <FiX size={32} className="text-[#0E6BA8] mr-[-10px]" />
            ) : (
              <FiMenu size={32} className="text-[#448745] mr-[-10px]" />
            )}
          </button>
        </div>
      </div>

      <div className="h-[70px] w-full" />

      {/* Overlay */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 transition-opacity z-30 lg:hidden
        ${menuOpen ? "opacity-100 bg-black/15" : "opacity-0 pointer-events-none"}`}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full bg-white z-40 border-b-2 border-[#0E6BA8]
        transition-all duration-500 ease-in-out lg:hidden
        ${menuOpen ? "translate-y-0 shadow-lg" : "-translate-y-full shadow-none"}`}
      >
        <nav className="flex flex-col font-semibold items-center pt-[80px] pb-[40px] gap-6 text-gray-800 text-xl">
          <Link 
            href="/" 
            onClick={() => setMenuOpen(false)} 
            className={`transition-colors ${isActive('/') ? 'text-[#0E6BA8]' : 'hover:text-[#0E6BA8] active:text-[#0e6ba8]'}`}
          >
            Home
          </Link>
          <Link 
            href="/ourservices" 
            onClick={() => setMenuOpen(false)}
            className={`transition-colors ${isActive('/ourservices') ? 'text-[#0E6BA8]' : 'hover:text-[#0E6BA8] active:text-[#0e6ba8]'}`}
          >
            Services
          </Link>
          <Link 
            href="/career" 
            onClick={() => setMenuOpen(false)} 
            className={`transition-colors ${isActive('/career') ? 'text-[#0E6BA8]' : 'hover:text-[#0E6BA8] active:text-[#0e6ba8]'}`}
          >
            Careers
          </Link>
          <button 
            onClick={handleContactClick}
            className="text-white p-2 rounded bg-[#0e6ba8] font-bold"
          >
            Contact
          </button>
        </nav>
      </div>
    </>
  );
}