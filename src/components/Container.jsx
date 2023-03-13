import  Main  from './Main'
import React from 'react'
import About from './About'
import Contact from './Contact'
import Navbar from './Navbar'

import Projects from './Projects'
import Skills from './Skills'

const Container = () => {
  return (
    < div className='bg-gradient-to-r from-[#3E5151]  to-[#DECBA4]'>
        <Main/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
    </div>
  )
}

export default Container