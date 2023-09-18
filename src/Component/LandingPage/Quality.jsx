import React from 'react'
import back from '../../Images/car-back.svg'
import logo from '../../Images/logo (1).svg'
import {BiLogoFacebook} from 'react-icons/bi'
import {AiOutlineInstagram} from 'react-icons/ai'
import {CiYoutube} from 'react-icons/ci'


const Quality = () => {
    return (
        <div className='bg-black text-white lg:pl-[17%] flex flex-col justify-between'>
            <div className='flex'>
                <div className='w-[60%]'>
                    <span className='flex items-center'>
                        <h1 className='text-5xl w-[90%] text-left'>Quality means doing it right when no one is looking</h1>
                        <p className='text-[grey] text-[20px] font-bold'>-Henry Ford</p>
                    </span>
                    <p>Our dealership takes your privacy seriously and is committed to safeguarding your privacy online. Because we do gather certain types of information from you.</p>
                    <div>
                        <button className='w-[274px] bg-[#003478] py-3 text-white hover:opacity-50'>Contact for Queries</button>
                    </div>
                </div>
                <img src={back} alt="" />
            </div>
            <div className='flex items-center justify-center'>
                <div className='w-[70%] border-2 border-b-[grey] justify-between'>
                    <img src={logo} alt="" />
                    <div className='flex gap-3' >
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

            </div>
        </div>
    )
}

export default Quality