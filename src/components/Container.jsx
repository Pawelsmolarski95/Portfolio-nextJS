import React from 'react'
import About from './About'
import Contact from './Contact'
import Navbar from './Navbar'

import Projects from './Projects'
import Skills from './Skills'

const Container = () => {
  return (
    <>
        <Navbar />
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
    </>
  )
}

export default Container