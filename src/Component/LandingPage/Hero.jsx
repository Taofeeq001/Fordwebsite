import React from 'react'
import ford from '../../Images/fold.svg'
import play from '../../Images/play.svg'

const Hero = () => {
  return (
    <div className='w-full flex flex-col'>
      <div className='flex flex-col w-full pl-[5rem] py-[5rem] overflow-hidden'>
        <div className='lg:pl-3 top-[15%] flex flex-col gap-[3rem] text-left'>
          <h1 className='text-[#003478] leading-10 text-[92px]'>THE FUTURE OF</h1>
          <span className='text-[#FBAA0C] font-extrabold leading-8 text-[92px]'>EXHILIRATION</span>
        </div>
        <div className='flex items-center gap-0 w-full'>
          <div className='flex relative left-4 lg:top-5 top-3 flex-col gap-2 w-[70%]'>
            <div className='bg-[#303231] lg:py-3 py-2'>
              <h1 className='text-white lg:text-3xl text-xl'>FORD MUSTANG <span className='text-xl'>2021</span></h1>
            </div>
            <div className='bg-[#303231] lg:py-8 py-5'></div>
          </div>
          <div className=''>
            <img className='relative' src={ford} alt="" />
          </div>
        </div>
        <div className='absolute bottom-5 left-[26%] flex gap-3 inter'>
          <button className='bg-[#003478] py-3 px-7 text-white '>Build & Price</button>
          <div className='flex gap-1 items-center'>
            <img src={play} alt="" />
            <p className='text-[#28344A]'>Watch Video</p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Hero