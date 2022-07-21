import React from 'react'


export default function Section1Hero(props) {
  return (
        <section className="mt-44 md:mt-0 text-gray-600 body-font">
                {/* Full Section */}
            <div className="container mx-auto flex md:pl-5  py-24 md:mr-0 md:flex-row flex-col items-center md:items-start">
                {/* Word Section */}
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    
                </div>
                {/* Image Section */}
                <div className="lg:max-w-xl relative md:-pr-5 lg:w-full md:w-1/2 w-full px-3 md:px-0 shadow-xl">
                    <img className="object-cover object-center rounded " alt="hero" src={props.image}/>
                </div>
            </div>
        </section>
  )
}