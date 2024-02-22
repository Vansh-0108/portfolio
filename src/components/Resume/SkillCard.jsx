import React from 'react'
import Rating from './Rating'

function SkillCard() {
  return (
    <div className='bg-[#d3ad7f] m-4 rounded'>
        <div className='flex'>
            <div className='m-5 border-2no'>
                <h1 className='uppercase text-2xl font-bold m-1 text-[var(--black)]'>Software Skills</h1>
                <div className='flex mt-7'>
                    <div className='grid justify-items-center p-2 border-2no m-1 rounded'>
                        <img className='h-10 w-10' src="https://iconape.com/wp-content/png_logo_vector/cib-cplusplus.png" alt="" />
                        <div className='text-[var(--black)]'>
                            <Rating filled='3'/>
                        </div>
                    </div>
                    <div className='grid justify-items-center p-2 border-2no m-1 rounded'>
                        <img className='h-10 w-10 rounded-xl' src="https://cdn.icon-icons.com/icons2/2389/PNG/512/js_logo_icon_145146.png" alt="" />
                        <div className='text-[var(--black)]'>
                            <Rating filled='4'/>
                        </div>
                    </div>
                    <div className='grid justify-items-center p-2 border-2no m-1 rounded'>
                        <img className='h-10 w-max rounded ' src="https://static-00.iconduck.com/assets.00/react-icon-2048x1822-iy7h2x8y.png" alt="" />
                        <div className='text-[var(--black)]'>
                            <Rating filled='2'/>
                        </div>
                    </div>
                    <div className='grid justify-items-center p-2 border-2no m-1 rounded'>
                        <img className='h-10 w-10' src="https://iconape.com/wp-content/png_logo_vector/cib-cplusplus.png" alt="" />
                        <div className='text-[var(--black)]'>
                            <Rating filled='5'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border-l-4 h-[225px] mx-4 border-black mt-4'></div>
            <div className='m-5 border-2no'>
                <h1 className='uppercase text-2xl font-bold m-1 text-[var(--black)]'>Languages</h1>
                <div className='flex '>
                    <div className='flex justify-between items-center border-2no m-1 rounded'>
                        <h2 className='m-2 text-[var(--black)]'>English</h2>
                        <div className='flex m-2 ml-10'>
                            <Rating filled='3'/>
                        </div>
                    </div>
                </div>
                <div className='flex '>
                    <div className='flex justify-between items-center border-2no m-1 rounded'>
                        <h2 className='m-2 text-[var(--black)]'>English</h2>
                        <div className='flex m-2 ml-10'>
                            <Rating filled='5'/>
                        </div>
                    </div>
                </div>
                <div className='flex '>
                    <div className='flex justify-between items-center border-2no m-1 rounded'>
                        <h2 className='m-2 text-[var(--black)]'>English</h2>
                        <div className='flex m-2 ml-10'>
                            <Rating filled='2'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr className='mx-4 border-[1px] border-black ' />
        <div className='flex items-center mx-5 justify-between border-2no'>
            <h1 className='uppercase text-2xl p-3 font-bold text-[var(--black)]'>Interests</h1>
            <div className='w-40 grid justify-items-center p-2 border-2no m-1 rounded text-[var(--black)]'>
                <i className="fa-solid fa-camera text-2xl"></i>
                <h2 className='text-sm'>Photography</h2>
            </div>
            <div className='w-40 grid justify-items-center p-2 border-2no m-1 rounded text-[var(--black)]'>
                <i className="fa-solid fa-pen text-2xl"></i>
                <h2 className='text-sm '>Graphic Designing</h2>
            </div>
            <div className='w-40 grid justify-items-center p-2 border-2no m-1 rounded text-[var(--black)]'>
                <i class="fa-solid fa-table-tennis-paddle-ball text-2xl"></i>
                <h2 className='text-sm '>Badminton</h2>
            </div>
        </div>
    </div>
  )
}

export default SkillCard