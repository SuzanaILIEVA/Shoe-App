import React from 'react'

const Hero = () => {
  return (
    <div className='mt-6 lg:mt-[80px] relative'>
        <div className='absolute text-white-fa max-w-[50%] top-1/2 transform -translate-y-1/2 ps-4 md:ps-6 lg:ps-8 xl:ps-10'>
            <p className='text-gray font-open font-semibold text-[12px] sm:text-[16px] lg:text-[20px] xl:text-[24px]'>Limited time only</p>
            <h1 className=' text-[20px]  sm:text-[36px] lg:text-[54px] xl:text-[74px]'>Get 30% off</h1>
            <p className='text-gray font-open text-[12px]  sm:text-[16px] lg:text-[20px] xl:text-[24px]'>Sneakers made with your comfort in mind so you can put all of your focus into your next session.</p>
        </div>
      <img src="/image 14.png" alt="" />
    </div>
  )
}

export default Hero
