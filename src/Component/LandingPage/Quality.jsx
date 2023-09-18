import React from 'react'
import back from '../../Images/car-back.svg'
import logo from '../../Images/logo (1).svg'
import {BiLogoFacebook} from 'react-icons/bi'
import {AiOutlineInstagram} from 'react-icons/ai'
import {CiYoutube} from 'react-icons/ci'


const Quality = () => {
    return (
        <div className='bg-black text-white lg:pl-[17%] flex flex-col justify-between'>
            <div className='flex pl-6 lg:flex-row flex-col w-full pt-[10%]'>
                <div className='w-[90%] flex flex-col items-start gap-9'>
                    <span className='flex items-center w-[full]'>
                        <h1 className='lg:text-5xl text-2xl w-full lg:leading-[70px] text-left'>Quality means doing it right when no one is looking</h1>
                        <p className='text-[grey] text-[20px] font-bold w-[30%]'>-Henry Ford</p>
                    </span>
                    <p className='lg:w-[75%] lg:text-left w-full text-justify text-xl lg:text-2xl'>Our dealership takes your privacy seriously and is committed to safeguarding your privacy online. Because we do gather certain types of information from you.</p>
                    <div>
                        <button className='w-[274px] bg-[#003478] py-3 text-white hover:opacity-50'>Contact for Queries</button>
                    </div>
                </div>
                <img src={back} alt="" />
            </div>
            <div className='flex items-center flex-col'>
                <div className='w-[70%] border-b-2 border-[gray] justify-between flex lg:flex-row flex-col items-center pb-4'>
                    <img src={logo} alt="" />
                    <div className='flex lg:gap-3 gap-1 lg:flex-row flex-col ' >
                        <a href="">Dealership</a>
                        <a href="">Support</a>
                        <a href="">Experience Ford</a>
                        <a href="">Shopping Tools</a>
                    </div>
                    <div className='text-white flex gap-2'>
                        <a href=""><BiLogoFacebook/></a>
                        <a href=""><AiOutlineInstagram/></a>
                        <a href=""><CiYoutube/></a>
                    </div>
                </div>
                <p className='text-[grey] text-xl mt-3'>Designed by SimsurajDev</p>
            </div>
        </div>
    )
}

export default Quality