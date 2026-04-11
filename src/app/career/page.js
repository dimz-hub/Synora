"use client";

import Image from "next/image";
import React, { useState,useEffect } from "react";
import { useRouter } from "next/navigation";



const Career = () => {
  const [bgLoaded, setBgLoaded] = useState(false);
  
    // Preload hero background image
    useEffect(() => {
      const img = new window.Image();
      img.src = "/carevia5.png";
      img.onload = () => setBgLoaded(true);
    }, []);

  const router = useRouter();
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xeelzzgl", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        form.reset();
        setShowSuccess(true);

        window.scrollTo({ top: 0, behavior: "smooth" });


        setTimeout(() => {
          setShowSuccess(false);
          // router.push("/");
        }, 3000);
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      alert("Something went wrong.");
    }
  };

   if (!bgLoaded) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
        <div className="flex flex-col items-center gap-4">
          <div className="h-10 w-10 rounded-full border-4 border-[#296374] border-t-transparent animate-spin" />
          <p className="text-[#296374] font-semibold text-lg">
            Loading career…
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative pb-[30px]">
      {/* SUCCESS POPUP */}
      {showSuccess && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 bg-[#629FAD] z-50  text-white px-6 py-4 rounded-xl shadow-lg animate-fadeIn">
          <p className="font-semibold text-lg">
            ✅ Form submitted successfully
          </p>
        </div>
      )}

      <h3 className="text-[#0E6BA8] text-center lg:text-[44px] text-[35px] pt-[15px] font-semibold border-b-2 pb-[15px] mx-auto">
        Careers
      </h3>

      <div className="md:flex w-[90%] mx-auto mt-[35px] gap-[20px] items-center">
        <Image
          src="/endoflife.JPG"
          alt="career"
          width={1000}
          height={300}
          className="w-[500px] md:w-[60vw] md:h-[80vh] rounded-[20px]"
        />

        <div>
          <p className="text-[28px] text-center md:text-[35px] mt-[20px] text-blue-300">
            <span className="font-bold text-[#296374]">Make a Difference</span>{" "}
            With a Career in Care
          </p>
          <p className="mt-4 text-[19px]">
            At Carevia Solutions, we know that caring is a challenging and rewarding career. Our aim is to provide compassionate and caring service our clients and a fulfilling, supportive work environment for or staff.
          </p>
          <p className="text-[19px] mt-4">If you would like to register with our agency, kindly fill out this short form and you will be contact to schedule a meeting.</p>
        </div>
      </div>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl w-[90%] mx-auto space-y-6 mt-[40px]"
      >
        <div>
          <label>Name *</label>
          <div className="grid grid-cols-2 gap-4">
            <input name="firstName" required placeholder="First Name" className="border p-3 rounded w-full" />
            <input name="lastName" required placeholder="Last Name" className="border p-3 rounded w-full" />
          </div>
        </div>

        <div>
          <label>Phone *</label>
          <input name="phone" type="tel" required className="border p-3 rounded w-full" />
        </div>

        <div>
          <label>Email</label>
          <input name="email" type="email" className="border p-3 rounded w-full" />
        </div>

        <div>
          <label>Location *</label>
          <input name="location" required className="border p-3 rounded w-full" />
        </div>

        <div>
          <label>Work Type *</label>
          <div className="flex gap-6">
            <label><input type="radio" name="workType" value="Live-in" required /> Live-in</label>
            <label><input type="radio" name="workType" value="Live-out" /> Live-out</label>
            <label><input type="radio" name="workType" value="Either" /> Either</label>
          </div>
        </div>

        <div>
          <label>Years of Experience *</label>
          <input name="experience" type="number" required className="border p-3 rounded w-full" />
        </div>

        <div>
          <label>Certificates *</label>
          <div className="grid grid-cols-2 gap-3">
            {["HHA", "CNA", "PCA", "LPN", "Other"].map((cert) => (
              <label key={cert}>
                <input type="checkbox" name="certificates[]" value={cert} /> {cert}
              </label>
            ))}
          </div>
        </div>

        <div>
          <label>Driver’s License *</label>
          <div className="flex flex-col gap-2">
            <label><input type="radio" name="driver" value="Own car" required /> Yes, own car</label>
            <label><input type="radio" name="driver" value="No car" /> Yes, no car</label>
            <label><input type="radio" name="driver" value="No" /> No</label>
          </div>
        </div>

        <div>
          <label>Worked with agency before? *</label>
          <div className="flex gap-6">
            <label><input type="radio" name="agencyExperience" value="Yes" required /> Yes</label>
            <label><input type="radio" name="agencyExperience" value="No" /> No</label>
          </div>
        </div>

        <div>
          <label>About You *</label>
          <textarea name="about" required className="border p-3 rounded w-full" />
        </div>

        <button
          type="submit"
          className="bg-[#629FAD] text-white px-6 py-3 rounded font-semibold hover:opacity-90 transition"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default Career;
