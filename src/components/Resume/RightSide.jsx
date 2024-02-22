import React from 'react'
import SkillCard from './SkillCard'
import Container from './Container'
import Container2 from './Container2'

function RightSide() {
  return (
    <div className='max-w-[900px] border-2no'>
      <div className="flex border-2no">
          <div className="w-1/2"> <Container /> </div>
          <div className="w-1/2"> <Container2 /> </div>
      </div>
        <SkillCard />
    </div>
  )
}

export default RightSide