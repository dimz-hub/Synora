import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Career = () => {
  return (
    <div>
        <div className="
  w-screen
  min-h-[100vh]
  bg-gradient-to-bl
  from-[#296374]/80
  from-[73%]
  to-[#1F6E8C]
pb-[40px]
">
<div className='w-[90%] mx-auto lg:flex md:gap-[30px] lg:gap-[20px]  '>

<div className=' pt-[60px] flex-1'>
    <Image src='/carevia3.png' alt='career-img' width={1000} height={200} className='w-[430px] h-[250px] md:w-[540px] md:h-[350px] rounded-[10px]' />
</div>
<div className='flex-1'>
<div className='mt-[30px] '>

<p className='border-2 uppercase  text-white border-white inline px-[10px] py-[7px]'>  Careers</p>
</div>
<h3 className='text-white mb-[20px] text-[32px] mt-[25px] font-semibold antialiased'>Great Care Needs <br /> Great Personnel</h3>
<p className='text-white text-[20px] mb-[20px]'>
    At Carevia Solutions, we know that caring is a challenging and rewarding career. Our aim is to provide a compassionate,
    caring service to our clients, and a fulfilling supportive work environment for our staff.

</p>
<p className='text-white text-[20px]'>We provide both part-time and full-time vacancies across England and Wales </p>

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