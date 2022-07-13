import { Navbar } from 'flowbite-react'
import React from 'react'
import logo from '../img/logo.jpg'
import {Link} from 'react-router-dom'

// import { NavbarLink } from 'flowbite-react/lib/esm/components/Navbar/NavbarLink'
// import { Navbar } from 'flowbite-react'

export default function Header() {
  return (
    <header className='border border-gray fixed w-full shadow-lg z-40'>
    <Navbar className='bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800'
    >
        <Navbar.Brand href="https://flowbite.com/"> 
            <img
            src={logo}
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                   Fitsum Advert     
            </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
            <button className='text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800'>
            Get started
            </button>
            <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
            {/* <Navbar.Link
            href="/"
            active={false}
            >
            Home
            </Navbar.Link> */}
            <Link to="/">Main</Link>
            <Link to="/about">Bout</Link>
            <Navbar.Link 
            href="/about"
            active={true}>
            About
            </Navbar.Link>
            <Navbar.Link href="/navbars">
            Services
            </Navbar.Link>
            <Navbar.Link href="/navbars">
            Pricing
            </Navbar.Link>
            <Navbar.Link href="/navbars">
            Contact
            </Navbar.Link>
        </Navbar.Collapse>
    </Navbar>
    </header>
  )
}
