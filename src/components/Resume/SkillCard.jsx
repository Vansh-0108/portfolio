import React from 'react'
import Rating from './Rating'

function SkillCard() {
  return (
    <div className='bg-[#d3ad7f] m-4 rounded'>
        <div className='flex'>
            <div className='m-5 border-2no'>
                <h1 className='uppercase text-2xl font-bold m-1 text-[var(--black)]'>Software Skills</h1>
                <div className='flex mt-5'>
                    <div className='grid justify-items-center p-2 border-2no m-1 rounded'>
                        {/* <img className='h-10 w-10' src="https://iconape.com/wp-content/png_logo_vector/cib-cplusplus.png" alt="C++" /> */}
                        <img className='h-10 w-10' src="https://cdn-icons-png.flaticon.com/512/6132/6132222.png" alt="C++" />
                        <div className='text-[var(--black)]'>
                            <Rating filled='3'/>
                        </div>
                    </div>
                    <div className='grid justify-items-center p-2 border-2no m-1 rounded'>
                        {/* <img className='h-10 w-10 rounded-xl' src="https://cdn.icon-icons.com/icons2/2389/PNG/512/js_logo_icon_145146.png" alt="" /> */}
                        <img className='h-10 w-10 rounded-xl' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" alt="JavaScript" />
                        <div className='text-[var(--black)]'>
                            <Rating filled='4'/>
                        </div>
                    </div>
                    <div className='grid justify-items-center p-2 border-2no m-1 rounded'>
                        {/* <img className='h-10 w-max rounded ' src="https://static-00.iconduck.com/assets.00/react-icon-2048x1822-iy7h2x8y.png" alt="" /> */}
                        <img className='h-10 object-cover rounded-full bg-white ' src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-1024.png" alt="React" />
                        <div className='text-[var(--black)]'>
                            <Rating filled='2'/>
                        </div>
                    </div>
                    <div className='grid justify-items-center p-2 border-2no m-1 rounded'>
                        <img className='h-10 w-10 rounded-full' src="https://pbs.twimg.com/profile_images/1657034126732525569/OLzES7Lj_400x400.jpg" alt="AWS" />
                        {/* <i className='fa-brands fa-aws text-2xl bg-black rounded-full text-white p-2'></i> */}
                        <div className='text-[var(--black)]'>
                            <Rating filled='5'/>
                        </div>
                    </div>
                </div>
                <div className='flex mt-1'>
                    <div className='grid justify-items-center p-2 border-2no m-1 rounded'>
                        <img className='h-10 w-10' src="https://cdn-icons-png.flaticon.com/512/732/732212.png" alt="HTML" />
                        <div className='text-[var(--black)]'>
                            <Rating filled='3'/>
                        </div>
                    </div>
                    <div className='grid justify-items-center p-2 border-2no m-1 rounded'>
                        <img className='h-10 w-10 rounded-xl' src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/2101px-Adobe_Illustrator_CC_icon.svg.png" alt="Illustrator" />
                        <div className='text-[var(--black)]'>
                            <Rating filled='4'/>
                        </div>
                    </div>
                    <div className='grid justify-items-center p-2 border-2no m-1 rounded'>
                        <img className='h-10 w-max rounded ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Adobe_Premiere_Pro_CC_icon.svg/1051px-Adobe_Premiere_Pro_CC_icon.svg.png" alt="Premier Pro" />
                        <div className='text-[var(--black)]'>
                            <Rating filled='2'/>
                        </div>
                    </div>
                    <div className='grid justify-items-center p-2 border-2no m-1 rounded'>
                        <img className='h-10 w-10' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png" alt="Python" />
                        <div className='text-[var(--black)]'>
                            <Rating filled='5'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border-l-4 h-[260px] mx-4 border-black mt-4'></div>

            <div className='m-5 border-2no max-w-[40%]'>
                <h1 className='uppercase text-2xl font-bold m-1 text-[var(--black)]'>Achievements</h1>
                <div className='p-2'>
                    <span className='font-bold'>Special Jury Award</span> <br /> V-Guard Big Idea Tech Competetion
                </div>
                <div className='p-2'>
                    <span className='font-bold'>Runner-Up</span> <br /> Hack-The-Waste by RSPCB
                </div>
                <div className='p-2'>
                    <span className='font-bold'>Consolation Prize (All India Top-15)</span> <br />IEEE | MNIT, Jaipur 24Hr Hackathon
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