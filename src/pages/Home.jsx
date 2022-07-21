import React, { useState } from 'react'

// Sections
import Section1 from '../layouts/home/Section1';
import Section2 from '../layouts/home/Section2';
import Section3 from '../layouts/home/Section3';
import Section4 from '../layouts/home/Section4';
import Section5 from '../layouts/home/Section5';
import Section6 from '../layouts/home/Section6';
import Section7 from '../layouts/home/Section7';
import Section8 from '../layouts/home/Section8';

export default function Home() {
  
  return (
  <div className='bg-gray-50 flex flex-col'>
    {/* Section One */}
      <Section1/>
    {/* Section Two */}
      <Section2/>
    {/* Third Content */}
      <Section3/>
    {/* Fourth Content */}
      <Section4/>
    {/* Fifth Content */}
      <Section5/>
    {/* Sixth Content */}
      <Section6/>
    {/* Seventh Content */}
      <Section7/>
    {/* Eigth Content */}
      <Section8/>
    </div>
  )
}
