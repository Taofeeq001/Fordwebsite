import React, { useState } from 'react';
import car from '../../Images/car.svg'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { gallery } from './data';

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(0)
  
  
  
  const handleforward = ()=>{
    
  }
  const handleback = ()=>{

  }
  return (
    <div className='bg-[#303231] font flex flex-col gap-9'>
      <h1 className='text-white'>PHOTO GALLERY</h1>
      <div className='relative w-full items-center justify-center flex flex-col'>
        <img className='w-full h-[60vh]' src={gallery[currentImage].image} alt="" />
        <div>
          <div onClick={handleforward} className='absolute top-[30%] right-[10%] text-white text-3xl rounded-[50%] border-2 border-white p-3'>
            <IoIosArrowForward />
          </div>
          <div onClick={handleback} className=' absolute top-[30%] left-[10%] text-white text-3xl rounded-[50%] border-2 border-white p-3'>
            <IoIosArrowBack />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Gallery