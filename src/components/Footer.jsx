import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FaEnvelope, FaPhone } from 'react-icons/fa'



const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <div className='bg-[#629FAD] h-auto pb-[40px] overflow-y-hidden'>
        <div>
          <div className='text-white flex items-center pt-[20px] ml-[40px]'>
            <Image  src='/carevia-logo.png' alt='carevia-logo' width={105} height={200} className=''/>
            <div className='flex flex-col'>
                <span className='text-[28px] font-bold'>Carevia</span>
                <span className='mt-[-8px]'>Solutions</span>
            </div>
          </div>
          <div className='pl-[35px] text-white'>
            <h3 className='text-[22px] text-white'>Quick <span className='font-bold'>Contact</span></h3>
             <div className='flex pt-[10px] text-[16px] items-center font-bold gap-[5px] pb-[5px] '><span> <FaPhone size={20}/></span><span>+44 7761 2642 41</span></div>
             <div className='flex text-[16px] items-center gap-[5px] font-bold   pb-[5px] '><span> <FaEnvelope size={20} /></span><span>Sade@careviasolutions.org</span></div>
                      
          </div>
  
          <div className='pl-[35px] mt-[20px]'>
            <h3 className='font-bold text-[22px] text-white'>Our services</h3>
            <Link href='/ourservices' className='flex flex-col gap-[10px] mt-[10px] text-white text-[18px]'>
                <span className='hover:underline cursor-pointer active:underline'>Hospital Staffing Support</span>
                <span className='hover:underline cursor-pointer active:underline'>Home Staffing</span>
                <span className='hover:underline cursor-pointer active:underline'>Nursing Home Staffing</span>
                <span className='hover:underline cursor-pointer active:underline'>Care Provider Packages</span>
                <span className='hover:underline cursor-pointer active:underline'>Appointment Escorts</span>
                <span className='hover:underline cursor-pointer active:underline'>Companionship Services</span>
            </Link>
          </div>
          <div className='w-[90%] mx-auto'>
            <div className='w-full h-[1px] my-[25px] bg-white'></div>
            <div className='flex flex-col items-center gap-[10px] w-full'>

            <div className='flex items-center gap-[5px]'>
                <Image  src= '/united-kingdom.png' alt='uk-logo' width={30} height={30}/>
            <p className='text-white text-[17px] font-semibold'>United Kingdom</p>
            </div>
           
            <div className='flex items-center text-white text-[16px]'>
                Copyright &copy; {currentYear}<div className='bg-white mx-[5px] w-[5px] h-[5px] rounded-[50%]'> </div> Carevia Solutions Limited
            </div>
          </div>
            </div>
        </div>
    </div>
  )
}

export default Footer