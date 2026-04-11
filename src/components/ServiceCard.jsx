import Image from "next/image";
import React from "react";

const ServiceCard = ({ card }) => {
  return (
    <div className="bg-[#296374]/80 rounded-xl shadow-2xl p-6 text-white">
      <h3 className="text-[26px] capitalize font-semibold mb-2">
        {card.title}
      </h3>

      <Image
        src={card.img}
        alt="service-img"
        width={1000}
        height={400}
        className="w-full h-[200px] lg:h-auto rounded-2xl"
      />

      <p className="pt-[20px] text-[20px]">
        {card.desc}
      </p>
    </div>
  );
};

export default ServiceCard;
