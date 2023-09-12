import React from 'react'
import mark from '../../Images/icon.svg'
import eng1 from '../../Images/Eng1.svg'
import eng2 from '../../Images/Eng2.svg'
import eng3 from '../../Images/Eng3.svg'
import eng4 from '../../Images/Eng4.svg'

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
            <div className='container mt-7 flex justify-around w-full'>
                <div className='text-start flex flex-col gap-9 w-[50%]'>
                    <h1 className='text-5xl font-normal'>Mach 1</h1>
                    <div>
                        <p className='font-semibold'>5.0L Tri-VCT V8</p>
                        <p className='w-[57%] font-semibold'>The pinnacle of 5-liter performance, this engine is uniquely tuned andcalibrated for speed, And with the Mach 1 Handling Package.</p>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <div className='flex gap-3'>
                            <img src={mark} alt="" />
                            <p>480 horsepower at 7,000 rpm</p>
                        </div>
                        <div className='flex gap-3'>
                            <img src={mark} alt="" />
                            <p>420 lb.-ft. of torque* at 4,600rpm</p>
                        </div>
                        <div className='flex gap-3'>
                            <img src={mark} alt="" />
                            <p>Two side heat exchanges for track endurance</p>
                        </div>
                        <div className='flex gap-3'>
                            <img src={mark} alt="" />
                            <p>6-speed manual transmission with rev-matching</p>
                        </div>
                    </div>
                </div>
                <div className='w-[40%] justify-end'>
                    <img src={eng3} alt="" />
                </div>
            </div>
            <div className='container mt-7 flex lg:gap-[20rem] justify-around w-full'>
                <div className='w-[40%] justify-end'>
                    <img src={eng4} alt="" />
                </div>
                <div className='text-start flex flex-col gap-9 w-[50%]'>
                    <h1 className='text-5xl font-normal'>Shelby® GT500®</h1>
                    <div>
                        <p className='w-[57%] font-semibold'>5.2L supercharged cross=plane crank V8.</p>
                        <p className=' font-semibold'>Top-of-the-line power that you can feel.</p>   
                    </div>
                    <div className='flex flex-col gap-5'>
                        <div className='flex gap-3'>
                            <img src={mark} alt="" />
                            <p>760 horsepower</p>
                        </div>
                        <div className='flex gap-3'>
                            <img src={mark} alt="" />
                            <p>625 lb.-ft. of torque*</p>
                        </div>
                        <div className='flex gap-3'>
                            <p>Standard on the Shelby GT500</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Power