import React from 'react'
import { data } from './data'
import { IoIosArrowForward } from 'react-icons/io'

const Getvehicle = () => {
    return (
        <div className='inter flex flex-col gap-10 mt-7 '>
            <div className='bg-[#303231] py-4 text-white font font-bold text-2xl '>
                <h1>Custom Order Your Mustang</h1>
            </div>
            <div className='container flex flex-col items-center'>
                <p className='pt-6 text-[24px] font-semibold'>Get the vehicle you want with an online custom order.</p>
            </div>
            <div className='container grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 pt-[2rem] sm:pl-3 w-full'>
                <div className='flex items-center gap-[30px]'>
                    <div className='w-[90%] lg:h-[35vh] py-5 gap-3 justify-center flex flex-col items-center shadow-xl'>
                        <div>
                            <p className='p-4 flex items-center justify-center rounded-full w-[10px] h-[10px] bg-[#5046C7] text-white'>1</p>
                        </div>
                        <h1 className='font-bold'>Build & Price your Vehicle</h1>
                        <p className='w-[65%] mt-4 text-[20px]'>Choose model, trim & options to create your custom order</p>
                        <div className='flex items-center gap-2 mt-10'>
                            <a className='text-[#FF6645] text-[15px]' href="">Learn more </a>
                            <IoIosArrowForward className='w-[12px]' />
                        </div>
                    </div>
                    <div className='lg:block w-[1px] bg-black h-[70%] hidden'></div>
                </div>
                <div className='flex items-center gap-[30px]'>
                    <div className='w-[90%] lg:h-[35vh] py-5 gap-3 justify-center flex flex-col items-center shadow-xl'>
                        <div>
                            <p className='p-4 flex items-center justify-center rounded-full w-[10px] h-[10px] bg-[#FF6645] text-white'>2</p>
                        </div>
                        <h1 className='font-bold'>Share with your Delear</h1>
                        <p className='w-[65%] mt-4 text-[20px]'>When you’re finished building, submit your vehicle to your local dealer.</p>
                        <div className='flex items-center gap-2 mt-10'>
                            <a className='text-[#FF6645] text-[15px]' href="">Learn more </a>
                            <IoIosArrowForward className='w-[12px]' />
                        </div>
                    </div>
                    <div className='w-[1px] lg:block hidden bg-black h-[70%]'></div>
                </div>
                <div className='w-[90%] lg:h-[35vh] py-5 gap-3 justify-center flex flex-col items-center shadow-xl'>
                    <div>
                        <p className='p-4 flex items-center justify-center rounded-full w-[10px] h-[10px] bg-[#81D9F8] text-white'>3</p>
                    </div>
                    <h1 className='font-bold'>Place Your Order</h1>
                    <p className='w-[70%] mt-4 text-[20px]'>Your dealer will contact you. Answer the questions before placing your order.</p>
                    <div className='flex items-center gap-2 mt-10'>
                        <a className='text-[#FF6645] text-[15px]' href="">Learn more </a>
                        <IoIosArrowForward className='w-[12px]' />
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-center gap-2'>
                <button className='py-2 px-7 bg-[#003478] text-white'>Create your Account</button>
                <u className='text-[#0276B3]'>Custom Order Explained</u>
            </div>
            <div className='container flex lg:flex-row flex-col justify-between mb-10'>
                <div className='font-bold flex flex-col items-center gap-3 shadow-2xl p-8'>
                    <h2>Starting At</h2>
                    <p className='text-4xl'>&#36; 27,205</p>
                </div>
                <div className='font-bold flex flex-col items-center gap-3 shadow-2xl p-8'>
                    <h2>EPA-Est. MPG City/Hwy</h2>
                    <p className='text-4xl'>20/30</p>
                </div>
                <div className='font-bold flex flex-col items-center gap-3 shadow-2xl p-8'>
                    <h2>Seating for</h2>
                    <p className='text-4xl'>4</p>
                </div>
            </div>
        </div>
    )
}

export default Getvehicle