"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";



export default function ServiceSlide({cards, color}) {
  const [index, setIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  // Detect screen width
  useEffect(() => {
    const updateSize = () => setIsDesktop(window.innerWidth >= 1024);
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const totalSlides = isDesktop ? Math.ceil(cards.length / 3) : cards.length;

  const prev = () => {
    setIndex(i => i === 0 ? totalSlides - 1 : i - 1);
  };

  const next = () => {
    setIndex(i => i === totalSlides - 1 ? 0 : i + 1);
  };

  // Auto slide
  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [isDesktop]); // re-run if screen size changes

  return (
    <div className="w-full max-w-6xl mx-auto pt-[25px] ">
      {/* Arrows */}
      <div className="flex justify-end gap-3 mb-4 px-4">
        <button onClick={prev} className={`p-2 rounded-full border-2 ${color? 'text-[#006A71] border-[#006A71]' : 'text-[#0e2954] border-[#0E2954]'} `}>
          <ChevronLeft />
        </button>
        <button onClick={next} className={`p-2 rounded-full border-2 ${color? 'text-[#006A71] border-[#006A71]' : 'text-[#0e2954] border-[#0E2954]'} `}>
          <ChevronRight />
        </button>
      </div>

      {/* Viewport */}
      <div className="overflow-hidden">
        {/* Track */}
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${index * (isDesktop ? 100 : 100)}%)`,
          }}
        >
          {cards.map((card, i) => (
            <div
              key={card.id}
              className="
                flex-shrink-0
                w-full
                lg:w-1/3
                flex
                justify-center
              "
            >
              <div className={`w-[90%] lg:w-[95%] bg-gradient-to-r from-white ${color ? 'to-[#006A71]' : 'to-[#1F6E8C]' } h-[330px] md:h-[62vh]  rounded-xl shadow p-6`}>
               
               <div className="relative w-full h-[220px] overflow-hidden rounded-2xl">
  <Image
    src={card.img}
    alt="service-img"
    fill
    className="object-cover"
    sizes="(min-width: 1024px) 33vw, 100vw"
  />
</div>
 <h3 className={`text-[26px] mt-[10px] text-center capitalize font-semibold mb-2 ${color ?'text-[#013437]' : 'text-[#0E2954]' } `} >
                  {card.title}
                </h3>

                <p className="pt-[20px]">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
