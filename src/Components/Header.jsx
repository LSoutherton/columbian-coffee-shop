import React, { useState, useEffect } from 'react'

const Header = ({ menu, setMenu, menuRef, about, blend, contact, home }) => {

  const [screenSize, setScreenSize] = useState(window.innerWidth < 1100);
  
  const updateView = () => {
    setScreenSize(window.innerWidth < 1100);
  }

  useEffect(() => {
    window.addEventListener('resize', updateView);
    return () => window.removeEventListener('resize', updateView);
  });

  const scroll = (place) => {
    place.current?.scrollIntoView({
    behavior: 'smooth'
    })
  }
  
  return (
    <>
      {screenSize ? 
        <div className='w-full m-auto bg-stone-200 h-24 sticky top-0 z-50'>
          <img className='w-40 inline-block mt-1 -ml-4' src='./Pictures/logo.png' />
          <div onClick={() => setMenu(prev => !prev)} className='relative w-16 h-full float-right'>
            <span className={`${menu ? 'open-menu-t' : ''} bg-gray-700 w-3/4 h-1 rounded-lg block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 menu-top duration-500`}></span>
            <span className={`${menu ? 'open-menu-m' : ''} bg-gray-700 w-3/4 h-1 rounded-lg block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 duration-500`}></span>
            <span className={`${menu ? 'open-menu-b' : ''} bg-gray-700 w-3/4 h-1 rounded-lg block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 menu-bottom duration-500`}></span>
          </div>
        </div>
    : 
      <div className='w-full m-auto bg-stone-200 h-32 sticky top-0 z-50'>
        <img className='w-48 inline-block mt-1 -ml-4' src='./Pictures/logo.png' />
        <div className='float-right mt-6 mr-8'>
          <div onClick={() => scroll(home)} className='text-gray-900 text-3xl italic pl-6 ml-2 mr-2 hover:text-gray-700 cursor-pointer duration-300 inline-block'>
            Home
          </div>
          <div onClick={() => scroll(menuRef)} className='text-gray-900 text-3xl italic pl-6 ml-2 mr-2 mt-4 hover:text-gray-700 cursor-pointer duration-300 inline-block'>
            From Our Menu
          </div>
          <div onClick={() => scroll(blend)} className='text-gray-900 text-3xl pl-6 mt-4 ml-2 mr-2 italic hover:text-gray-700 cursor-pointer duration-300 inline-block'>
            Our Blend
          </div>
          <div onClick={() => scroll(about)} className='text-gray-900 text-3xl pl-6 mt-4 ml-2 mr-2 italic hover:text-gray-700 cursor-pointer duration-300 inline-block'>
            About Us
          </div>
          <div onClick={() => scroll(contact)} className='text-gray-900 text-3xl pl-6 mt-4 ml-2 mr-2 italic hover:text-gray-700 cursor-pointer duration-300 inline-block'>
            Contact
          </div>
        </div>
      </div>
    }
    </>
  )
}

export default Header