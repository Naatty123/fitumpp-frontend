import React from 'react'
import { Fragment } from 'react'
import { Popover,Transition } from '@headlessui/react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/images/logo/Fitsum letter F only logo.png'
import clogo from '../assets/images/logo/F Only Colored Logo.png'
import { 
    MenuIcon,
    HomeIcon,
    ShoppingCartIcon,
    NewspaperIcon,
    UserGroupIcon,
    IdentificationIcon,
    XIcon,
    PhotographIcon
} from '@heroicons/react/outline'
import Home from '../pages/Home'
import ListItems from '../components/ListItems'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
const mobileMenuItems = [
    {
        name: 'Home',
        to: '/',
        icon: HomeIcon,
    }, 
    {
        name: 'Gallery',
        to: '/gallery',
        icon: PhotographIcon,
    },
    {
        name: 'Blog',
        to: '/blog',
        icon: NewspaperIcon,
    },
    {
        name: 'About Us',
        to: '/about',
        icon: UserGroupIcon,
    },
    {
        name: 'Conact Us',
        to: '/contact',
        icon: IdentificationIcon,
    }
]


export default function OwnHeader() {
  return (
    // Whole Menu
   <Popover className="fixed w-full shadow-xl bg-primary-500 border border-gray-300 z-40 font-Sora">
    <div className='max-w-7xl mx-auto px-4 sm:px-6'>
        <div className='flex justify-between items-center border-b-2 border-gray-100 py-3 lg:py-1 md:justify-start md:space-x-10 lg:divide-x'>
            {/* Fitsum Advert Logo */}
            <div className='flex  justify-start  lg:w-auto lg:flex-none'>
                <Link to="/">
                    <span className='sr-only'>Fitsum Advert</span>
                    <img 
                    src={logo} 
                    alt="Fitsum Advert Logo" 
                    className='h-10 w-auto sm:h-[70px]'
                    />
                </Link>
            </div>
           
            {/* Webview Headers */}
            <div className='w-auto lg:flex-none px-5 py-2'>
            <Popover.Group as="nav" className="hidden md:flex items-end h-full space-x-5">
                <ListItems link="/" name="Home" />
                {/* <ListItems link="/product" name="Products" /> */}
                <ListItems link="/gallery" name="Gallery"/>
                <ListItems link="/blog" name="Blog"  />
                <ListItems link="/about" name="About Us"  />
                <ListItems link="/contact" name="Contact Us"  />
            </Popover.Group>
            </div>

             {/* Hambug Menu For Phone */}
             <div className='-mr-2 -my-2 md:hidden'>
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className='sr-only'>Open Menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true"/>
                </Popover.Button>
            </div>
        </div>
    </div>
    {/* Mobile Context Menu */}
    <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {/* Mobile Pop Up Menu */}
        <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
            <div className='rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 bg-gray-50 divide-y-2 divide-gray-50 '>
                <div className='pt-5 pb-6 px-5'>
                    <div className='flex items-center justify-between'>
                        {/* Fitsum Advert Logo */}
                        <div>
                            <img 
                            src={clogo} 
                            alt="Fitsum Advert Logo" 
                            className='h-12 w-auto sm:h-16 '
                            />
                        </div>
                        {/* Close Button */}
                        <div className='-mr-2'>
                            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                <span className='sr-only'>Close Menu</span>
                                <XIcon className='h-6' aria-hidden />
                            </Popover.Button>
                        </div>
                    </div>
                    <div className='mt-6'>
                        <nav className='grid gap-y-8'>
                            {/* Listing mobileMenuItems using map inside the Popover Panel */}
                            {mobileMenuItems.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.to}
                                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 border-b border-gray-50"
                                >
                                    <item.icon className='flex-shrink-0 h-6 w-6 text-primary-500' aria-hidden="true" />
                                    <span className='ml-3 text-base font-medium text-primary-500'>{item.name}</span>
                                <br className='border border-primary-400 text-primary-500 bg-primary-500' />
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
                {/* Under mobileMenuItems */}
                <div className='py-6 px-5 space-y-6'>
                    <div className='grid grid-cols-2 gap-y-4 gap-x-8'>
                        <span className='text-base font-medium text-gray-900 hover:text-gray-700'>Item 1</span>
                        <span className='text-base font-medium text-gray-900 hover:text-gray-700'>Item 2</span>
                        <span className='text-base font-medium text-gray-900 hover:text-gray-700'>Item 3</span>
                        <span className='text-base font-medium text-gray-900 hover:text-gray-700'>Item 4</span>
                    </div>
                    <div>
                        <button className='w-full px-5 py-4 bg-gray-400 rounded-lg shadow-lg'>Signup</button>
                    </div>
                </div>
            </div>
        </Popover.Panel>
        </Transition>
   </Popover>
  )
}
