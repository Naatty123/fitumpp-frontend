import React from 'react'
import { useEffect } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'


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
  }, []);

  return (
  <div className='bg-gray-50 flex flex-col'>

      <Section1/>
      <Section3/>
       <Section2/>
      <Section4/>
      <Section5/>
      {/* <Section6/> */}
      <Section7/>
      <Section8/>
      <Section9/>

    </div>
  )
}
