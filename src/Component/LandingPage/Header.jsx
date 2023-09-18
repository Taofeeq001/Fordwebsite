import React, { useState } from 'react'
import logo from '../../Images/logo (1).svg'
import { RxHamburgerMenu } from 'react-icons/rx'

const Header = () => {
    const [toggle, setToggle] = useState(false)
    const [active, setActiveLink] = useState('')

    // ================Function to handle Click funtion ======================//
    const handleLink = (link) =>{
        setActiveLink(link)
    }
    return (

        <div className='container w-full flex justify-between lg:flex-row inter items-center mt-3'>
            <a href="/" className='w-[20%]'>
                <img src={logo} alt="" />
            </a>
            <div className='hidden lg:flex w-[60%] justify-between gap-5 items-center'>
                <div className='flex flex-row w-[70%] justify-between'>
                    <a href="/home"
                        className={active === "home" ? "font-underline" : ""}
                        onClick={()=> handleLink("home")}
                    >
                        Home
                    </a>
                    <a href="/suv">SUVS</a>
                    <a href="/trucks">TRUCKS</a>
                    <a href="/electrified">ELECTRIFIED</a>
                    <a href="/all-vehicles">ALL VEHICLES</a>
                </div>
                <div className='flex w-[30%] items-center justify-end ml-5 gap-5'>
                    <a href="/sign-in">Sign In</a>
                    <button className='p-4 border-2 border-[#003478]'><a href="/sign-up">Sign Up</a></button>
                </div>
            </div>
            <div onClick={() => setToggle(!toggle)} className='block lg:hidden'>
                <RxHamburgerMenu />
            </div>
            <div className={toggle ? "flex flex-col gap-9 absolute top-[10%] left-0 w-full h-[40%] justify-center ease-in duration-300 overflow-hidden bg-blue-500 items-center" : 'lg:hidden flex flex-col ease-in duration-300 h-0 overflow-hidden gap-9 absolute top-[10%] left-0 w-full bg-blue-500 items-center'}>
                <a href="/home">Home</a>
                <a href="/suv">SUVS</a>
                <a href="/trucks">TRUCKS</a>
                <a href="/electrified">ELECTRIFIED</a>
                <a href="/all-vehicles">ALL VEHICLES</a>
            </div>
        </div>
    )
}

export default Header