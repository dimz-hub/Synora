"use client";

import Image from "next/image";
import React, { useState,useEffect } from "react";
import { useRouter } from "next/navigation";



const Career = () => {
  const [bgLoaded, setBgLoaded] = useState(false);
  
    // Preload hero background image
    useEffect(() => {
      const img = new window.Image();
      img.src = "/career2.jpg";
      img.onload = () => setBgLoaded(true);
    }, []);

  const router = useRouter();
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xjgjgqop", {
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

      <h3 className="text-[#006A71] text-center lg:text-[44px] text-[35px] pt-[15px] font-semibold border-b-2 pb-[15px] mx-auto">
        Careers
      </h3>

      <div className="md:flex w-[90%] mx-auto mt-[35px] gap-[20px] items-center">
        <Image
          src="/career2.jpg"
          alt="career"
          width={1000}
          height={300}
          className="w-[500px] md:w-[60vw] md:h-[80vh] rounded-[20px] h-[280px] object-cover"
        />

        <div>
          <p className="text-[28px] text-center md:text-[35px] mt-[20px] text-[#0e6ba8]">
            <span className="font-bold text-[#296374]">Start a Rewarding</span>{" "}
            Journey with Synora
          </p>
          <p className="mt-4 text-[19px]">
           At Synora, we believe that great care begins with valued caregivers. We are a community of dedicated professionals committed to making a real difference in healthcare. By joining our team, you’ll gain access to a supportive environment where your compassion is celebrated, your voice is heard, and your professional growth is our priority.
          </p>
          <p className="text-[19px] mt-[14px]">When you join Synora, you gain access to:</p>
          <div className="text-[19px] w-[90%] mx-auto mt-[10px]">
            <li>A supportive and responsive team</li>
            <li>Flexible working opportunities</li>
            <li>Competitive pay rate</li>
            <li>Ongoing professional development</li>
            <li>A workplace where your skills and contribution are truly valued</li>
          </div>
          
        </div>
      </div>

      {/* FORM */}
      <div>
    <h3 className="text-center mt-[30px] text-[30px] font-semibold">Ready to Get Started?</h3>
    <p className="text-[19px] mt-4 w-[90%] md:w-[85%] mx-auto text-center mb-[30px]">If you are would like to register with Synora Staffing Solutions limited, please complete our short registration form. A member of our team will review your details and contact you to arrange an on boarding meeting. </p>
  </div>
   <form
  onSubmit={handleSubmit}
  className="max-w-3xl w-[90%] mx-auto space-y-6 mt-[10px] text-gray-700"
>
  {/* NAME SECTION */}
  <div>
    <label className="font-semibold">Name *</label>
    <div className="grid grid-cols-2 gap-4 mt-1">
      <input name="firstName" required placeholder="First Name" className="border p-3 rounded w-full focus:outline-none" />
      <input name="lastName" required placeholder="Last Name" className=" border p-3 rounded w-full focus:outline-none" />
    </div>
  </div>

  {/* WORK ROLE - NEW SELECT ENTITY */}
  <div>
    <label className="font-semibold">Work Role Applying For? *</label>
    <select name="workRole" required className="border p-3 rounded w-full mt-1 focus:outline-none bg-white">
      <option value="">Select a role...</option>
      <option value="Social Worker">Social Worker</option>
      <option value="Registered Nurse">Registered Nurse</option>
      <option value="Support Worker">Support Worker</option>
      <option value="Care Assistant">Care Assistant</option>
      <option value="Domestic Staff">Domestic Staff</option>
      <option value="Occupational Therapist">Occupational Therapist</option>
    </select>
  </div>
  

  {/* CONTACT INFO */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <label className="font-semibold">Phone *</label>
      <input name="phone" type="tel" required className="border p-3 focus:outline-none rounded w-full mt-1" />
    </div>
    <div>
      <label className="font-semibold">Email *</label>
      <input name="email" type="email" required className="border p-3 focus:outline-none rounded w-full mt-1" />
    </div>
  </div>

  {/* QUALIFICATIONS SECTION - NVQ, Degree, Diploma */}
  <div className="space-y-4 border-t pt-4">
    <h3 className="font-bold text-[#296374]">Qualifications & Education</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div>
        <label className="text-sm">NVQs (if any)</label>
        <input name="nvq" placeholder="e.g. Level 3" className="border p-3 focus:outline-none rounded w-full mt-1" />
      </div>
      <div>
        <label className="text-sm">Degree</label>
        <input name="degree" placeholder="e.g. BSc Nursing" className="border p-3 focus:outline-none rounded w-full mt-1" />
      </div>
      <div>
        <label className="text-sm">Diploma</label>
        <input name="diploma" placeholder="e.g. Health & Social Care" className="border p-3 focus:outline-none rounded w-full mt-1" />
      </div>
    </div>
  </div>

  {/* REGULATION & DBS */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t pt-4">
    <div>
      <label className="font-semibold">Regulation Body</label>
      <input name="regulationBody" placeholder="e.g. NMC, HCPC, CQC" className="border p-3 focus:outline-none rounded w-full mt-1" />
    </div>
    <div>
      <label className="font-semibold">DBS Status *</label>
      <select name="dbs" required className="border p-3 rounded w-full mt-1 focus:outline-none bg-white">
        <option value="">Select status...</option>
        <option value="Enhanced - On Update Service">Enhanced - On Update Service</option>
        <option value="Enhanced - Standard">Enhanced - Standard</option>
        <option value="Standard">Standard</option>
        <option value="None">None / In Progress</option>
      </select>
    </div>
  </div>

  {/* CARER PROFILE & EXPERIENCE */}
  <div>
    <label className="font-semibold">Carer Profile / About You *</label>
    <textarea 
      name="about" 
      required 
      placeholder="Briefly describe your care philosophy and background..."
      className="border p-3 rounded w-full mt-1 h-32 focus:outline-none" 
    />
  </div>

  {/* FILE UPLOADS - Work History & References */}
  {/* <div className="bg-gray-50 p-4 rounded-lg space-y-4">
    <div>
      <label className="font-semibold">Work History / Experience / References *</label>
      <p className="text-xs text-gray-500 mb-2">Please upload your CV or a document detailing your past roles and references.</p>
      <input 
        type="file" 
        name="workHistoryFile" 
        accept=".pdf,.doc,.docx" 
        required 
        className="block w-full text-sm focus:outline-none text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#629FAD]/10 file:text-[#296374] hover:file:bg-[#629FAD]/20"
      />
    </div>
  </div> */}

  {/* PREVIOUS RADIOS (Location, Experience, etc.) */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6  pt-4">
    <div>
      <label className="font-semibold">Location *</label>
      <input name="location" required className="border p-3 focus:outline-none rounded w-full mt-1" />
    </div>
    <div>
      <label className="font-semibold">Years of Experience *</label>
      <input name="experience" type="number" required className="border focus:outline-none p-3 rounded w-full mt-1" />
    </div>
  </div>

  <button
    type="submit"
    className="w-full md:w-auto bg-[#629FAD] cursor-pointer text-white px-10 py-4 rounded-lg font-bold hover:bg-[#296374] transition-all shadow-md"
  >
    Submit Application
  </button>
</form>
    </div>
  );
};

export default Career;
