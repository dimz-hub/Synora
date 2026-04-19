import Image from "next/image";
import React from "react";
import CountUp from "@/components/CountUp";

const About = () => {
  return (
    <div id="about">
      <div className="w-[90%] mx-auto mt-[40px] pb-[100px]  ">
        <div className="lg:flex  lg:justify-center items-center gap-[30px]">

        <div className="md:flex-1 flex items-center mx-auto md:w-[100%] sm:w-[70%]">
          <Image
            src="/about2.jpg"
            alt="about-image"
            width={1000}
            height={300}
            className="w-[450px] sm:w-[500px] sm:h-[300px] lg:w-[540px] h-[250px] lg:h-[350px] object-cover rounded-2xl"
            />
        </div>

        <div className="flex flex-col gap-[25px] md:gap-[25px] md:flex-1">
          <h3 className="font-bold texts-[#43acf3] text-[#2E8A99] md:text-[35px]  text-[30px] mt-[20px] capitalize">
            Specialist Staffing You Can Trust
          </h3>

          <p className="text-[19px] md:text-[20px]">
        Synora Staffing Solutions is a dedicated provider of healthcare professionals across the health and social care sector.
Every member of our workforce is carefully selected, thoroughly vetted, and trained to meet regulatory and compliance standards. We ensure that our staff are not only qualified but also aligned with the values of dignity, respect, and person-centred care.
          </p>

          <div className="text-[19px] md:text-[20px]">
          
          {/* <ul className="list-decimal list-inside">
            <li>Hospitals</li>
            <li>Nursing homes</li>
            <li>Residential care homes</li>
            <li>Supported living services</li>
            <li>Domiciliary care providers</li>
            <li>Escort and care support services</li>
          </ul> */}
          </div>
        </div>
            </div>

  <p className="text-[19px] mt-[35px] md:text-[20px]">We understand the pressure organisations face in maintaining safe staffing levels while delivering exceptional care. That’s why we provide dependable, qualified, and experienced staff who integrate seamlessly into your service.
Our focus is simple:the right staff, at the right time, delivering the right care. 
            </p>
        

        {/* Stats */} 
        <div className="flex flex-wrap mt-[40px] md:mt-[60px] items-center w-[90%] justify-center mx-auto gap-[20px]">
          
          <StatCard
            number={<CountUp value={365} />}
            label="Days of quality care"
          />

          <StatCard
            number={<CountUp value={100} suffix="%" />}
            label="Service Satisfaction"
          />

          <StatCard
            number={<CountUp value={24} suffix="/7" />}
            label="Care Services"
          />

          {/* <StatCard
            number={<CountUp value={80} suffix="+" />}
            label="Families Supported"
          /> */}
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ number, label }) => (
  <div className="w-[180px] h-36 bg-[#296374] rounded-lg shadow-md p-2 flex flex-col justify-center">
    <p className="text-[45px] w-full text-center font-bold text-white">
      {number}
    </p>
    <p className="text-center text-white text-[19px] ">
      {label.split(" ").slice(0, -1).join(" ")} <br />
      {label.split(" ").slice(-1)}
    </p>
  </div>
);

export default About;
