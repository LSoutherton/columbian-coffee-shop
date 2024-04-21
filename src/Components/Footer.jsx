import React, { useState, useEffect } from 'react'

const Footer = ({ contact }) => {

  const [screenSize, setScreenSize] = useState(window.innerWidth < 1100);
  
  const updateView = () => {
    setScreenSize(window.innerWidth < 1100);
  }

  useEffect(() => {
    window.addEventListener('resize', updateView);
    return () => window.removeEventListener('resize', updateView);
  });

  return (
    <div ref={contact} className={`${screenSize ? 'mt-10 text-2xl' : 'mt-16 text-3xl'} bg-gray-900 text-gray-100 text-center p-6`}>
        Come and find us at <span className='font-bold'>145 Fleet St, London EC4A 2BP</span>!
        <div className={`${screenSize ? 'w-4/6' : 'w-5/12'} border-t-2 border-gray-100 mt-4 m-auto`}></div>
        <div className={`${screenSize ? 'text-xl' : 'text-2xl'} mt-4 leading-9`}>
          Email: <span className='font-bold'>contact@columbiancoffeeshop.com</span> <br></br>
          Phone: <span className='font-bold'>09876543210</span>
        </div>
        <div className={`${screenSize ? 'w-4/6' : 'w-4/12'} border-t-2 border-gray-100 mt-4 m-auto`}></div>
        <div className='text-gray-100 text-lg m-auto pt-4 pb-2 pl-4'>
          For more information on this page, please contact <span className='text-blue-500 underline'>lsoutherton14@gmail.com</span>.
        </div>
    </div>
  )
}

export default Footer