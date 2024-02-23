import React from 'react'

function Timeline() {
  return (
    <div className='flex justify-center'>

        <div>
            <div className='m-1 mt-[2.5rem] bg-[var(--main-color)] w-[10rem]'>
                <h1 className='text-[var(--black)] m-1 mt-2 px-2 font-bold uppercase'>Event</h1>
                <hr className='mx-3 w-[80%] border-[var(--black)]'/>
                <div className='pl-1 mx-2 mb-2 text-[var(--black)] font-medium text-sm'>
                    <h3 className=''>Duration</h3>
                </div>
            </div>

            <div className='m-1 mt-[6.9rem] bg-[var(--main-color)] w-[10rem]'>
                <h1 className='text-[var(--black)] m-1 mt-2 px-2 font-bold uppercase'>Event</h1>
                <hr className='mx-3 w-[80%] border-[var(--black)]'/>
                <div className='pl-1 mx-2 mb-2 text-[var(--black)] font-medium text-sm'>
                    <h3 className=''>Duration</h3>
                </div>
            </div>
        </div>

        <div className='flex flex-col justify-between items-center text-main-color my-2'>
            <div className='border-l-4 h-[50px] border-main-color'></div>
            <div className='lowercase border-2 rounded-full px-2 border-main-color'>o</div>
            <div className='border-l-4 h-[50px] border-main-color'></div>
            <div className='lowercase border-2 rounded-full px-2 border-main-color'>o</div>
            <div className='border-l-4 h-[50px] border-main-color'></div>
            <div className='lowercase border-2 rounded-full px-2 border-main-color'>o</div>
            <div className='border-l-4 h-[50px] border-main-color'></div>
            <div className='lowercase border-2 rounded-full px-2 border-main-color'>o</div>
            <div className='border-l-4 h-[50px] border-main-color'></div>
        </div>

        <div>
            <div className='m-1 mt-[7.5rem] bg-[var(--main-color)] w-[10rem]'>
                <h1 className='text-[var(--black)] m-1 mt-2 px-2 font-bold uppercase'>Event</h1>
                <hr className='mx-3 w-[80%] border-[var(--black)]'/>
                <div className='pl-1 mx-2 mb-2 text-[var(--black)] font-medium text-sm'>
                    <h3 className=''>Duration</h3>
                </div>
            </div>

            <div className='m-1 mt-[6.9rem] bg-[var(--main-color)] w-[10rem]'>
                <h1 className='text-[var(--black)] m-1 mt-2 px-2 font-bold uppercase'>Event</h1>
                <hr className='mx-3 w-[80%] border-[var(--black)]'/>
                <div className='pl-1 mx-2 mb-2 text-[var(--black)] font-medium text-sm'>
                    <h3 className=''>Duration</h3>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Timeline