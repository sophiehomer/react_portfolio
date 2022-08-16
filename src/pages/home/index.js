import React from 'react'
import About from '../../components/About'
import Portfolio from '../../components/Portfolio'
import Resume from '../../components/Resume'

const home = () => {
  return (
    <div>
        <About/>
        <Portfolio/>
        <Resume/>
    </div>
  )
}

export default home