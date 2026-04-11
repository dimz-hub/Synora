"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Lock body scroll ONLY when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [menuOpen]);

  const handleContactClick = () => {
    setMenuOpen(false);

    // ✅ HASH navigation (NO layout shift)
    if (pathname === "/") {
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/#contact");
    }
  };

  return (
    <>
      <div className="w-full">
        <div className="flex items-center justify-between w-[93%] mx-auto">
          <Link href="/">
            <Image src="/the-logo.png" alt="logo" width={92} height={40} />
          </Link>

          {/* Desktop */}
          <div className={`hidden lg:flex mx-auto  text-[20px] border-[#0E6BA8$]'} text-center items-center gap-[40px]  py-[12px] px-[40px]   rounded-[10px]  border-gray-5000/30 font-medium`}>
            <Link href="/#about" className="border-b-2 border-[#0E6BA8] hover:border-neutral-50 hover:text-[21px]">About</Link>
            <Link href="/career" className="border-b-2 border-[#2E8A99] hover:border-neutral-50 hover:text-[21px]">Careers</Link>
            <Link href="/ourservices" className="border-b-2 border-[#0E6BA8] hover:border-neutral-50 hover:text-[21px]">Services</Link>
          </div>

          <button
            onClick={handleContactClick}
            className="hidden lg:block bg-[#0E6BA8] text-white px-5 py-2 rounded-lg"
          >
            Contact Now
          </button>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden z-50"
          >
            {menuOpen ? <FiX size={32} className="text-white" /> : <FiMenu size={32} className="text-[#2E8A99]" />}
          </button>
        </div>
      </div>

      {/* Overlay */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 bg-black/70 transition-opacity lg:hidden
        ${menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-[80%] max-w-sm bg-[#0E2A47]
        transition-transform duration-300 lg:hidden
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <nav className="h-full flex flex-col items-center justify-center gap-8 text-white text-xl">
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/ourservices">Services</Link>
          <Link href="/career">Careers</Link>
          <button onClick={handleContactClick}>Contact</button>
        </nav>
      </div>
    </>
  );
}