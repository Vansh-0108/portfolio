import React from 'react'

function Container() {
  return (
    <div className='flex border-2no max-w-[450px]'>
        <div className='border-l-4 min-h-full m-4'></div>
        <div className='m-2'>
            <h1 className='text-white uppercase text-2xl font-bold m-1 border-2no max-w-[450px]'>Education</h1>

            <div className=''>
                <div className='border border-[var(--main-color)] m-1 mt-4 bg-[var(--main-color)]'>
                    <h1 className='text-[var(--black)] m-1 mt-2 px-2 font-bold uppercase'>The LNM Institute of Information Technology, <span className='capitalize'>Jaipur</span></h1>
                    <hr className='mx-3 w-[60%] border-[var(--black)]'/>
                    <div className='flow-root pl-1 mx-2 mb-2 text-[var(--black)] font-medium text-sm'>
                        <h3 className='float-left'>Bachelors in Technology</h3>
                        <h3 className='float-right pt-2'>2024</h3>
                        <h3 className='float-left'>(Computer Science and Engineering)</h3>
                    </div>
                </div>
            </div>

            <div className='h-10'></div>

            <h1 className='text-white uppercase text-2xl font-bold m-1 border-2no max-w-[450px]'>Work Experience</h1>
            <div className=''>
                <div className='border border-[var(--main-color)] m-1 mt-4 bg-[var(--main-color)]'>
                    <h1 className='text-[var(--black)] mx-1 mt-2 px-2 font-bold uppercase'>Deloitte</h1>
                    <hr className='mx-3 w-[60%] border-[var(--black)]'/>
                    <div className='flow-root pl-1 mx-2 mb-2 text-[var(--black)] font-medium text-sm'>
                        <h3 className='float-left'>Software Developer Intern</h3>
                        {/* <h3 className='text-white text-sm float-right'>Jan, 24 - Present</h3> */}
                        <br />
                        <h3 className='float-left'>May'23 - July'23 & Jan'24 - Present</h3>
                    </div>
                </div>
                <li className='text-white mx-2 px-2 text-justify'>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.</li >
                <li className='text-white mx-2 px-2 text-justify'>Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat.</li>
                <li className='text-white mx-2 px-2 text-justify'>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.</li >
            </div>
        </div>
    </div>
  )
}

export default Container