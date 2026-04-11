"use client";

import About from "@/components/About";
import Career from "@/components/Career";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("scrollTo") === "contact") {
      // Delay ensures layout + navbar are stable
      setTimeout(() => {
        document.getElementById("contact")?.scrollIntoView({
          behavior: "smooth",
        });
      }, 200);
    }
  }, [searchParams]);

  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Career />

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}