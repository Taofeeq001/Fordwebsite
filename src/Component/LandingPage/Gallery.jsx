import React, { useState } from 'react';
import car from '../../Images/car.svg'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { gallery } from './data';

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(0)
  const [click, setClick] = useState(0)
  
  
  
  const handleforward = ()=>{
    if(currentImage >= 0 && currentImage<6){
      setCurrentImage(currentImage + 1)
    }
    else(setCurrentImage(0))
  }
  const handleback = ()=>{
    if(currentImage <= 0 && currentImage <6){
    setCurrentImage(gallery.length -1)
    }
    else(setCurrentImage(currentImage - 1))
  }
  return (
    <div className='bg-[#303231] font flex flex-col gap-9'>
      <h1 className='text-4xl mt-3 text-white'>PHOTO GALLERY</h1>
      <div className='relative w-full items-center justify-center flex flex-col'>
        <img className='w-full h-[60vh]' src={gallery[currentImage].image} alt="" />
        <div>
          <div onClick={handleforward} className='absolute cursor-pointer top-[30%] right-[10%] text-white text-3xl rounded-[50%] border-2 border-white p-3'>
            <IoIosArrowForward />
          </div>
          <div onClick={handleback} className=' absolute cursor-pointer top-[30%] left-[10%] text-white text-3xl rounded-[50%] border-2 border-white p-3'>
            <IoIosArrowBack />
          </div>
        </div>
      </div>
      <div className='container lg:flex gap-3 hidden'>
          {
            gallery.map((d, index)=>{
              return(
                <img key={index} 
                className={`w-[200px] h-[200px] ${currentImage===index ? "border-2 border-yellow-300 rounded-lg":""}`} 
                src={d.image} alt=''/>
              )
            })
          }
        </div>

    </div>
  )
}

export default Gallery