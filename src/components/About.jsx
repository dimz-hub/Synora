import Image from "next/image";
import React from "react";
import CountUp from "@/components/CountUp";

const About = () => {
  return (
    <div id="about">
      <div className="w-[90%] mx-auto mt-[40px] pb-[100px]  ">
        <div className="lg:flex  lg:justify-center items-center gap-[30px]">

        <div className="md:flex-1">
          <Image
            src="/carevia4.png"
            alt="about-image"
            width={1000}
            height={300}
            className="w-[450px] lg:w-[550px] rounded-2xl"
            />
        </div>

        <div className="flex flex-col gap-[25px] md:gap-[25px] md:flex-1">
          <h3 className="font-bold texts-[#43acf3] text-[#0E6BA8] md:text-[35px]  text-[30px] mt-[20px] capitalize">
            Welcome to <br /> Carevia Solutions Limited
          </h3>

          <p className="text-[19px] md:text-[20px]">
            At Carevia Solutions Limited, we are committed to delivering reliable, compassionate, and highly skilled care professionals across England and Wales. We pride ourselves on providing staffing solutions that uphold the highest standards of dignity, safety, and person-centred care.
          </p>

          <div className="text-[19px] md:text-[20px]">
          We supply fully trained and experienced staff to:
          <ul className="list-decimal list-inside">
            <li>Hospitals</li>
            <li>Nursing homes</li>
            <li>Residential care homes</li>
            <li>Supported living services</li>
            <li>Domiciliary care providers</li>
            <li>Escort and care support services</li>
          </ul>
          </div>
        </div>
            </div>

  <p className="text-[19px] mt-[35px] md:text-[20px]">Our care professionals are carefully selected, thoroughly vetted, and trained to meet regulatory standards. They are dedicated to delivering safe, respectful, and high-quality care to individuals with diverse needs.

At Carevia Solutions Limited, we don’t just provide staff, we provide dependable care solutions you can trust.</p>
            
        

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
  <div className="w-[180px] h-36 bg-gradient-to-r from-white to-[#296374]/90 rounded-lg shadow-md p-2 flex flex-col justify-center">
    <p className="text-[45px] w-full text-center font-bold text-[#0C2C55]">
      {number}
    </p>
    <p className="text-center text-[19px] ">
      {label.split(" ").slice(0, -1).join(" ")} <br />
      {label.split(" ").slice(-1)}
    </p>
  </div>
);

export default About;
