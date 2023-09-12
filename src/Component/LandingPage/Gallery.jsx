import React from 'react';
import car from '../../Images/car.svg'

const Gallery = () => {
  return (
    <div className='bg-[#303231] font flex flex-col gap-9'>
        <h1 className='text-white'>PHOTO GALLERY</h1>
        <div>
            <img src={car} alt="" />
        </div>
        
    </div>
  )
}

export default Gallery