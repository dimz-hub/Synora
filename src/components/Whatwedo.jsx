import React from 'react'

const Whatwedo = () => {
  return (
    <div>   <div className='flex-1 mx-auto w-[90%]'>
               <p className='text-[38px] mt-[-10px] lg:pt-[20px] flex-1 w-[100%] text-center mx-auto md:text-[39px] capitalize '>
              What <span className='text-[#2E8A99] font-semibold'> We</span> <span className='font-semibold'> </span> <span className='font-semibold text-[#0e6ba8]'>Do</span>
             </p>
             <p className='text-[20px] text-center font-extralight text-gray-600'>Flexible, Reliable, and Fully Compliant Staffing</p>
             <p className='text-[20px] mt-[20px]'>We understand the ongoing pressure organisations face when managing staffing shortages, compliance requirements, and service delivery.
That’s why we provide:</p>
              <ul className="list-decimal list-inside mt-[20px] flex  flex-col text-[19px] lg:text-[22px] gap-[10px]">
            <li>Qualified and experienced care professionals</li>
            <li> Rapid response to urgent staffing needs </li>
            <li>Flexible short-term and long-term cover</li>
            <li> Staff who integrate seamlessly into your service</li>
            
          </ul>
              </div></div>
  )
}

export default Whatwedo