import React from 'react'

function Container2() {
  return (
    <div className='flex border-2no max-w-[450px]'>
        <div className='border-l-4 min-h-full m-4'></div>
        <div className='m-2'>
            <h1 className='text-white uppercase text-2xl font-bold m-1 border-2no max-w-[450px]'>Projects</h1>

            <div className=''>
                <div className='border border-[var(--main-color)] m-1 mt-4 bg-[var(--main-color)]'>
                    <h1 className='text-[var(--black)] m-1 mt-2 px-2 font-bold uppercase'>Project Number 1</h1>
                    <hr className='mx-3 w-[60%] border-[var(--black)]'/>
                    <div className='flow-root pl-1 mx-2 mb-2 text-[var(--black)] font-medium text-sm'>
                        <h3 className='float-left'>Skill 1 | Skill 2 | Skill 3</h3>
                        <h3 className='float-right'>Nov'23</h3>
                        <h3 className='float-left'></h3>
                    </div>
                </div>
                <li className='text-white mx-2 px-2 text-justify'>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.</li >
                <li className='text-white mx-2 px-2 text-justify'>Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat.</li>
            </div>

            <div className=''>
                <div className='border border-[var(--main-color)] m-1 mt-4 bg-[var(--main-color)]'>
                    <h1 className='text-[var(--black)] m-1 mt-2 px-2 font-bold uppercase'>Project Number 2</h1>
                    <hr className='mx-3 w-[60%] border-[var(--black)]'/>
                    <div className='flow-root pl-1 mx-2 mb-2 text-[var(--black)] font-medium text-sm'>
                        <h3 className='float-left'>Skill 1 | Skill 2 | Skill 3</h3>
                        <h3 className='float-right'>Nov'23</h3>
                        <h3 className='float-left'></h3>
                    </div>
                </div>
                <li className='text-white mx-2 px-2 text-justify'>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.</li >
                <li className='text-white mx-2 px-2 text-justify'>Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat.</li>
            </div>
            
        </div>

        

    </div>
  )
}

export default Container2