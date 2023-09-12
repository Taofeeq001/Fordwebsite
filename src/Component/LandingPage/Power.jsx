import React from 'react'
import mark from '../../Images/icon.svg'
import eng1 from '../../Images/Eng1.svg'
import eng2 from '../../Images/Eng2.svg'

const Power = () => {
    return (
        <div className='flex flex-col gap-5'>
            <div className='flex bg-black text-white w-full justify-center items-center'>
                <p className='font text-4xl py-3'>POWER DOES MATTER</p>
            </div>
            <div className='flex w-full justify-center'>
                <p className='inter text-2xl w-[68%]'>At the heart of every Mustang is a high-powered engine. Mustang offers four available engines, including the 5.2L supercharged V8.</p>
            </div>
            <div className='container mt-7 flex justify-around w-full'>
                <div className='text-start flex flex-col gap-9 w-[50%]'>
                    <h1 className='text-5xl font-normal'>ExhoBoost®</h1>
                    <p className='w-[57%] font-semibold'>It’s a first Ecoboost® engine powered by Ford Performance and it’s not afraid to prove it. The 2.3L high-performance engine differentiates itself with a slightly larger twin-scroll turbo compressor.</p>
                    <div className='flex flex-col gap-5'>
                        <div className='flex gap-3'>
                            <img src={mark} alt="" />
                            <p>310 horsepower</p>
                        </div>
                        <div className='flex gap-3'>
                            <img src={mark} alt="" />
                            <p>350 lb.-ft. of torque*</p>
                        </div>
                        <div className='flex gap-3'>
                            <img src={mark} alt="" />
                            <p>Turbocharging and direct injection</p>
                        </div>
                        <div className='flex gap-3'>
                            <img src={mark} alt="" />
                            <p>Twin independent variable camshaft timing (Ti-VCT)</p>
                        </div>
                        <div className='flex gap-3'>
                            <img src={mark} alt="" />
                            <p>Twin independent variable camshaft timing (Ti-VCT)</p>
                        </div>
                    </div>
                </div>
                <div className='w-[40%] justify-end'>
                    <img src={eng1} alt="" />
                </div>
            </div>
            <div className='container mt-7 flex lg:gap-[20rem] justify-around w-full'>
                <div className='w-[40%] justify-end'>
                    <img src={eng2} alt="" />
                </div>
                <div className='text-start flex flex-col gap-9 w-[50%]'>
                    <h1 className='text-5xl font-normal'>GT</h1>
                    <div>
                        <p className='w-[57%] font-semibold'>5.0L Ti-VCT V8</p>
                        <p className=' font-semibold'>An engine that comes standard with a hit of adrenaline.</p>   
                    </div>
                    <div className='flex flex-col gap-5'>
                        <div className='flex gap-3'>
                            <img src={mark} alt="" />
                            <p>460 horsepower</p>
                        </div>
                        <div className='flex gap-3'>
                            <img src={mark} alt="" />
                            <p>420 lb.-ft. of tire-squealing torque*</p>
                        </div>
                        <div className='flex gap-3'>
                            <img src={mark} alt="" />
                            <p>Port fuel direct injection</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Power