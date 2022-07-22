import React from 'react'


import Section1 from '../layouts/about/Section1'
import Section2 from '../layouts/about/Section2'
import Section3 from '../layouts/about/Section3'
import Section4 from '../layouts/about/Section4'
import Section5 from '../layouts/about/Section5'

export default function About() {
  return (
    <div className='relative min-h-screen flex flex-col py-5'>
      {/* Section One */}
      {/* <Section1/> */}
      {/* Section Two */}
        <Section2/>
      {/* Section Three */}
        <Section3/>
      {/* Section Four */}
        <Section4/>
      {/* Section Five */}
        <Section5/>

    </div>
  )
}
