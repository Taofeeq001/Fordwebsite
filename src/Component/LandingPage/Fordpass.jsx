import React from 'react'
import front from '../../Images/car-front.svg'
import back from '../../Images/car-back.svg'


const Fordpass = () => {
    return (
        <div className='flex lg:flex-row flex-col lg:gap-0 gap-7 lg:pl-[17%] justify-between items-center py-14'>
            <div className='w-[65%] flex flex-col gap-10 text-left'>
                <h1 className='text-4xl'>FordPass. Built to keep you Moving.®</h1>
                <p className='inter text-[19px] leading-10'>FordPass Connect (optional on select vehicles), the FordPass App; and complimentary Connected Service are required for remote features (see FordPass Terms for details). Connected service and features depend on compatible AT&T network availability. Evolving technology/cellular networks/vehicle capability may limit functionality and prevent operation of connected features. Connected service excludes WiFi hotspot.</p>
                <div>
                    <button className='w-[274px] bg-[#003478] py-3 text-white hover:opacity-50'>Learn More</button>
                </div>
            </div>
            <img src={front} alt="" />
        </div>
    )
}

export default Fordpass