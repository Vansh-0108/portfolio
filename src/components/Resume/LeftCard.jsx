import React from 'react'
import heroImage from '../../assets/3d-illustration-boy-with-camera-his-hand.jpg';
import { Link } from 'react-router-dom';


function LeftCard() {
  return (
    <div className='h-full max-w-[500px] border-2no'>
        {/* Div for Image, Name and Domain  */}
        <div className='flex p-4 border-2no items-center'> 
            <img className='h-40 rounded-full' src={heroImage} alt="" />
            <div className='pl-10'>
                <h1 className = 'text-[#d3ad7f] uppercase text-5xl border-2no'>Vansh</h1>
                <h1 className = 'text-white font-bold uppercase text-5xl border-2no'>Mahajan</h1>
                <hr className = 'mt-2 border-[2px]'/>
                <h1 className = 'text-white uppercase pt-1 border-2no text-xl'>Software Developer</h1>
            </div>
        </div>
        {/* Div for About Me */}
        <div className='flex p-2 border-2no'>
            <div className='border-l-4 h-[240px] mt-10 ml-10'></div>
            <div className=' m-10 border-2no'>
                <h1 className = 'text-[#d3ad7f] text-3xl uppercase'>About Me</h1>
                <p className = 'text-white text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
        </div>
        {/* Div for Contact */}
        <div className='border-2no p-10'>
            <h1 className = 'text-[#d3ad7f] text-3xl uppercase font-bold pl-2 border-2no'>Contact Me</h1>
            <div className='pl-8 pt-2 border-2no'>
                <Link to='https://maps.app.goo.gl/tns6YXWookPHqD5f7' className='flex items-center border-2no'>
                    <div className='text-white fa-solid fa-map-pin m-1 text-2xl'></div>
                    <div className='text-white pl-6 m-1 '>Bangalore, Karnataka</div>
                </Link>
                <Link to='https://wa.me/+918958035895' className='flex items-center border-2no'>
                    <div className='text-white fa-solid fa-phone m-1 text-2xl'></div>
                    <div className='text-white pl-4 m-1 '>+91 8958035895</div>
                </Link>
                <Link to='mailto:vanshmahajan2001@gmail.com' className='flex items-center border-2no'>
                    <div className='text-white fa-regular fa-envelope m-1 text-2xl'></div>
                    <div className='text-white pl-4 lowercase m-1 '>vanshmahajan2001@gmail.com</div>
                </Link>
            </div>
        </div>
        {/* Div for Socials */}
        <div className='border-2no p-10'>
            <h1 className = 'text-[#d3ad7f] text-3xl uppercase font-bold pl-2 border-2no'>Social</h1>
            <div className='pl-8 pt-2 border-2no'>
                <Link to='https://www.google.com' className='flex items-center border-2no'>
                    <div className='text-white fa-brands fa-linkedin m-1 text-2xl'></div>
                    <div className='text-white pl-4 lowercase m-1 '>/vanshmahajan2001</div>
                </Link>
                <Link to='https://www.google.com' className='flex items-center border-2no'>
                    <div className='text-white fa-brands fa-instagram m-1 text-2xl'></div>
                    <div className='text-white pl-4 lowercase m-1 '>@_its_vansh_</div>
                </Link>
                <Link to='https://www.google.com' className='flex items-center border-2no'>
                    <div className='text-white fa-solid fa-code m-1 text-xl'></div>
                    <div className='text-white pl-4 m-1 '>LeetCode: vansh0108</div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default LeftCard