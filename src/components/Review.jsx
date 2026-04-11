"use client";

import { useState, useEffect } from "react";

const reviews = [
  {
    id: 1,
    name: "Samuel Edwards",
    role: "Family Member",
    text: "When my mother was diagnosed with dementia, caring for her became overwhelming for our family. We wanted her to remain at home, but we needed professional support. Carevia Solutions provided a caregiver who was not only highly skilled in dementia care but also kind, patient, and understanding. She quickly built a bond with my mother, helping her feel calm, safe, and respected in her own home.knowing my mother was in compassionate and capable hands gave our family real peace of mind. We’re truly grateful for the care and support we received.",
  },
  {
    id: 2,
    name: "Jasmine Woods",
    role: "Client",
    text: `After my accident, I needed extra support to manage daily life and recover safely. The caregiver provided by  Carevia Solutions was patient, professional, and genuinely caring.With their help, I felt supported, respected, and confident as I worked toward regaining my independence. The care made a real difference during a challenging time.`
  },
  {
    id: 3,
    name: "Mary Johnson",
    role: "Family Member",
    text: "Supporting our loved one with learning disabilities has always been important to us, but we knew we needed professional help to give them the best quality of life.Carevia Solutions provided a caregiver who was patient, understanding, and truly committed. They supported daily routines, encouraged independence, and treated our family member with dignity and respect.Knowing our loved one was in safe and caring hands gave us confidence and peace of mind.",
  },
];

export default function Review() {
  const [index, setIndex] = useState(0);

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto text-center py-10 px-4">
      <h3 className="text-[30px] font-bold text-[#629FAD] md:text-[37px]">Care Stories</h3>
      {/* Card */}
      <div className="w-[90%] mx-auto mt-[20px] lg:w-[95%] bg-gradient-to-r from-white  rounded-xl shadow p-6 transition-all duration-500">
        <p className="text-gray-700 text-lg mb-4">{reviews[index].text}</p>
        <h4 className="font-semibold text-[#0E6BA8] text-xl">{reviews[index].name}</h4>
        <span className="text-gray-500">{reviews[index].role}</span>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 gap-4">
        {reviews.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setIndex(idx)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              idx === index ? "bg-[#296374]" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
