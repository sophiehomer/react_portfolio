import React from 'react'
import About from '../../components/About'
import Portfolio from '../../components/Portfolio'
import Resume from '../../components/Resume'
import Contact from '../../components/Contact'

const home = () => {
  return (
    <div>
        <About/>
        <Portfolio/>
        <Resume/>
        <Contact/>
    </div>
  )
}

export default home