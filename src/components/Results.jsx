import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

const Results = () => {
  return (
    <div>
         <h1 className='text-center mt-[20px] text-[20px] font-semibold capitalize '>Results you can expect</h1>
        <div>
            <div>
                <DotLottieReact
                src='/animations/Checklist-in-Green.lottie'
                loop
                autoplay
                />
            </div>
            <div>
                <ul>
                    <li></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Results