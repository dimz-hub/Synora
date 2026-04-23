import Image from 'next/image'
import React from 'react'
import ServiceSlide from './ServiceSlide'
import Link from 'next/link';

const Services = () => {
  const cards = [
    { id: 2, title: "Domiciliary Care", img: '/homecare1.webp', desc: 'We supply skilled domiciliary care professionals to support individuals with day-to-day tasks in their own homes.'   },
    { id: 5, title: "End Of Life Care", img: '/endlife.webp', desc: 'Our end of life care staff provide compassionate, respectful support during life’s most sensitive moments.'   },
    { id: 6, title: "Respite Care", img: '/respitecare.webp', desc: 'We offer trusted respite care staff to give family carers a well-deserved break while ensuring continuity of high-quality care.'  },
    { id: 1, title: "Home Care", img: '/domicare1.webp', desc: 'Our home care staff provide compassionate, one-to-one support in the comfort of your own home.'   },
    { id: 3, title: "Dementia Care", img: '/dementia1.jpg', desc: 'Our dementia care staff are specially trained to provide patient, compassionate support for individuals living with memory loss.'   },
    { id: 4, title: "Learning Difficulty Care", img: '/learn.webp', desc: 'We provide dedicated care professionals who support individuals with learning disabilities to live fulfilling, independent lives.'   },
  ];
  return (
    <div>
        <div>
            <div className='w-[90%] mx-auto lg:w-[85%] mt-[65px] mb-[30px] flex flex-col lg:flex-row items-center lg:gap-[25px] gap-[0px] '>
              {/* <div className=' mt-[30px] flex-1'>
                <Image src='/partner1.png' width={1000} height={300} alt='partner-with-us-img' className='rounded-[20px] w-[500px] lg:h-[376px] h-[260px] sm:h-[300px]' />
              </div> */}
              <div className='flex-1 '>
               <p className='text-[28px] mt-[-10px] lg:pt-[20px] flex-1 w-[100%] text-center mx-auto md:text-[39px] capitalize '>
              Why <span className='text-[#2E8A99] font-semibold'>Choose</span> <span className='font-semibold'> </span> <span className='font-semibold text-[#0e6ba8]'>Us</span>
             </p>
               <p className='text-[20px] text-center font-extralight text-gray-600'>A Staffing Partner You Can Depend On</p>
              <div className=" mt-[20px] flex  flex-col text-[19px] lg:text-[22px] gap-[10px] mx-auto w-[90%] md:w-[90%]">
            <li><span className='font-semibold text-[21px]'>Quality Assured Staff: </span>All staff are fully vetted, trained, and compliant with industry regulations.</li>
            <li><span className='font-semibold text-[21px]'>Reliability You Can Trust: </span> We provide dependable professionals who arrive ready to deliver. </li>
            <li><span className='font-semibold text-[21px]'>Sector Expertise: </span> Deep understanding of health and social care environments.</li>
            <li><span className='font-semibold text-[21px]'>Seamless Integration: </span>Staff who adapt quickly to your organisation’s culture and standards.</li>
            <li><span className='font-semibold text-[21px]'> Flexible & Tailored Solutions: </span> We adapt to your needs whether it’s last-minute cover or long-term staffing support.</li>
            <li><span className='font-semibold text-[21px]'>Responsive Service: </span> Fast turnaround when you need cover most.</li>
            {/* <li><span className='font-semibold text-[21px]'>Cost-Effective Staffing: </span> Reduce agency stress and maintain quality without overspending.</li> */}
          </div>
              </div>
             </div>
          
           <div className='w-[90%] md:-[85%] mx-auto pty-[15px]'>
            <p className='text-[28px] mt-[-10px] lg:pt-[20px] flex-1 w-[100%] font-semibold text-center mx-auto md:text-[39px] capitalize text-[#0e6ba8] '>
              Our Commitment
             </p>
             <p className='text-[20px] py-[15px]'>We are committed to supporting providers in delivering safe, effective, and compassionate care. Our focus is simple: to ensure continuity of care through reliable, high-quality staffing solutions.</p>

           </div>

            <div className='bg-gradient-to-r pb-[80px] md:mt-[-25px]  w-full h-auto'>
             
             <h3 className='text-[36px] md:text-[44px] text-[#2E8A99] pt-[50px]  font-bold justify-center flex w-[100%]'>
                Our  Services
             </h3>
             <div className='lg:flex lg:gap-[25px] lg:w-[80%] lg:mx-auto lg:justify-center'>

             <div className='w-full mt-[30px] flex-1'>

             <Image src='/homecare1.webp' alt='about-image' width={1000} height={300} className='w-full sm:h-[300px] md:hidden  h-[280px] object-cover'/>
             <Image src='/endlife.webp' alt='about-image' width={1000} height={300} className='w-[500px]  rounded-[25px] hidden md:block'/>
            </div>
            <div className='flex-1 w-[90%] mx-auto'>

             <p className='text-[26px] md:text-[29px] pt-[30px] lg:pt-[80px] flex-1 w-[90%] mx-auto md:text-[39px] capitalize '>
              <span className='text-[#2E8A99]'>we</span> supply <span className='font-semibold text-[#0e6ba8]'>experienced:</span>
             </p>
              <div className=" list-inside mt-[20px] text-[19px] lg:text-[22px]">
            <li>Registered Nurses</li>
            <li>Social Workers</li>
            <li>Support Workers</li>
            <li> Care Assistants</li>
            <li>Domestic Staff</li>
            <li>Occupational Therapists</li>
          </div>
            </div>
                            </div>
                            <div className='w-[90%] mx-auto lg:w-[80%]'>
                              <p className='text-[18px] mt-[25px]' >We are dedicated to providing high-quality staffing solutions across a diverse range of healthcare settings, including hospitals, care homes, supported living services, and bespoke care for private clients.</p>
                            </div>
              {/* <div className='lg:w-[80%] w-[90%] mx-auto' >
                <p className='text-[#0E6BA8] text-[22px] text-center mb-[8px] mt-[20px]'>Staffing Solutions in Your Area</p>
                <p Qualified className='text-[18px]'>Our dedicated team proudly serves wide range of locations, delivering reliable and high-quality Service whenever you need us. Qualified healthcare staff for hospitals, nursing homes, residential home, and care providers, reliable, professional and ready to support you. </p>
              </div> */}
              <div className='flex items-center justify-center'>

            <Link href='/ourservices' className='border border-white bg-[#629FAD] p-3 text-white mt-[35px] rounded-[10px] text-[16px] font-semibold antialiased'>Learn More</Link>
              </div>

               {/* <h3 className='text-[36px] md:text-[44px] text-[#0E6BA8] pt-[50px]  font-bold justify-center flex w-[100%]'>
                Why Partner With Us?
             </h3> */}

           
            </div>
        </div>
    </div>
  )
}

export default Services