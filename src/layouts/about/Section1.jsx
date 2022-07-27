import React from 'react'

import fullLogo from '../../assets/images/logo/Fitsum Colred Logo_Own Color.png'

// css
import '../../assets/styles/global.css'
export default function Section1() {
  return (
    <div className='flex flex-col gap-10'>
      <div className='relative'>
        <div class="custom-shape-divider-top-1658479017 drop-shadow-xl">
          {/* <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
          </svg> */}
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1240 320" preserveAspectRatio='none'>
            <path fill="#0099ff" fillOpacity="1" d="M0,192L24,186.7C48,181,96,171,144,186.7C192,203,240,245,288,240C336,235,384,181,432,144C480,107,528,85,576,101.3C624,117,672,171,720,181.3C768,192,816,160,864,133.3C912,107,960,85,1008,117.3C1056,149,1104,235,1152,266.7C1200,299,1248,277,1296,229.3C1344,181,1392,107,1416,69.3L1440,32L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z" className="shape-fill"></path>
          </svg>
          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio='none'>
            <path fill="#0099ff" fill-opacity="1" d="M0,96L24,133.3C48,171,96,245,144,240C192,235,240,149,288,106.7C336,64,384,64,432,58.7C480,53,528,43,576,74.7C624,107,672,181,720,208C768,235,816,213,864,197.3C912,181,960,171,1008,186.7C1056,203,1104,245,1152,224C1200,203,1248,117,1296,122.7C1344,128,1392,224,1416,272L1440,320L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z" className='shape-fill'></path>
          </svg> */}
        </div>
      </div>
      <div className='flex justify-center'>
        <img
          src={fullLogo}
          alt="Fitsum Advert Logo"
          className='w-full md:w-[40%] '
        />
      </div>
    </div>
  )
}
