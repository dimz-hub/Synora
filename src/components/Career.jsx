import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Career = () => {
  return (
    <div>
        <div className="
  w-screen
  min-h-[100vh]
  bg-[#296374]
  to-[#1F6E8C]
pb-[40px]
">
<div className='w-[90%] mx-auto lg:flex md:gap-[30px] lg:gap-[20px]  '>

<div className=' pt-[60px] flex-1'>
    <Image src='/career1.jpg' alt='career-img' width={1000} height={200} className='w-[430px] h-[250px] md:w-[540px] md:h-[350px] rounded-[10px]' />
</div>
<div className='flex-1'>
<div className='mt-[30px] '>

<p className='border-2 uppercase  text-white border-white inline px-[10px] py-[7px]'>  Careers</p>
</div>
<h3 className='text-white mb-[20px] text-[32px] mt-[25px] font-semibold antialiased'>Great Care Needs <br /> Great Personnel</h3>
<p className='text-white text-[20px] mb-[20px]'>
   At Synora, we believe that exceptional care starts with exceptional people. We don't just fill shifts, we build careers. By joining our team, you become part of a network of dedicated professionals providing vital support to hospitals, care homes, and private clients across the UK. Whether you are an experienced nurse or a passionate support worker, we provide the platform for you to thrive, grow, and make a genuine difference in people's lives.

</p>
<p className='text-white text-[20px]'>We provide both part-time and full-time vacancies across The United Kingdom </p>

  <div className='mt-[28px]'>

            <Link href='/career' className='border border-white bg-[#0E6BA8]  p-3 text-white mt-[35px] rounded-[10px] text-[16px] font-semibold antialiased'>Learn More</Link>
              </div>
</div>
</div>
</div>
    </div>
  )
}

export default Career 