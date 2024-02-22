import React from 'react'

function Rating(props) {
    let n = (Number)(props.filled)
    const arr = [];
    for(let i=0; i < n; i++)
        arr.push('fa-solid fa-circle');
    for(let i=0; i < (5-n); i++)
        arr.push('fa-regular fa-circle');
    

  return (
    // <div className='flex m-2 ml-10'>
    <>
        {arr.map((item) => 
            <i className = {`${item} text-xs p-[0.1rem]`}></i>
        )}
    </>
    // </div>
  )
}

export default Rating;