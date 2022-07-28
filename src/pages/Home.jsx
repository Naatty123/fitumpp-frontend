import React from 'react'
import { useEffect } from 'react'


// Sections
import Section1 from '../layouts/home/Section1';
import Section2 from '../layouts/home/Section2';
import Section3 from '../layouts/home/Section3';
import Section4 from '../layouts/home/Section4';
import Section5 from '../layouts/home/Section5';
import Section6 from '../layouts/home/Section6';
import Section7 from '../layouts/home/Section7';
import Section8 from '../layouts/home/Section8';
import Section9 from '../layouts/home/Section9';

export default function Home() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  
  return (
  <div className='bg-gray-50 flex flex-col'>
    {/* Section One */}
      <Section1/>
    {/* Section Three */}
      <Section3/>
    {/* Section Two */}
       <Section2/>
    {/* Section Four */}
      <Section4/>
    {/* Section Five */}
      <Section5/>
    {/* Section Six */}
      {/* <Section6/> */}
    {/* Section Seven */}
      <Section7/>
    {/* Section Eight */}
      <Section8/>
    {/* Section Nine */}
      <Section9/>

    </div>
  )
}
