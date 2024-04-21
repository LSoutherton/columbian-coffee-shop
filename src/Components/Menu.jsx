import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView, useAnimation, AnimatePresence } from 'framer-motion'

const Menu = ({ setMenu, menu, menuRef, about, blend, contact, home }) => {

  const ref = useRef(null);

  const mainControls = useAnimation();

  useEffect(() => {
    if (menu) {
      mainControls.start('visable');
    }
  }, [menu])

  const scroll = (place) => {
    place.current?.scrollIntoView({
    behavior: 'smooth'
    })
    setMenu(prev => !prev)
  }

  const [screenSize, setScreenSize] = useState(window.innerWidth < 1100);
  
  const updateView = () => {
    setScreenSize(window.innerWidth < 1100);
  }

  useEffect(() => {
    window.addEventListener('resize', updateView);
    return () => window.removeEventListener('resize', updateView);
  });

  return (
    <>
        <AnimatePresence>
            {menu ? <motion.div
                variants={{
                    hidden: { opacity: 0, x: 75},
                    visable: {opacity: 1, x: 0}
                }}
                initial='hidden'
                animate={mainControls}
                exit={{ opacity: 0, x: 75}}
                transition={{ duration: 0.5, delay: 0.2}}
                ref={ref}
                className={`${screenSize ? 'w-2/3' : 'w-1/4'} h-full fixed top-24 right-0 z-50 bg-stone-200`}>
                    <div className='w-full mb-4 border-t-2 border-gray-900 m-auto'></div>
                    <div onClick={() => scroll(home)} className='text-gray-900 text-3xl italic pl-6 hover:text-gray-700 cursor-pointer duration-300'>
                        Home
                    </div>
                    <div onClick={() => scroll(menuRef)} className='text-gray-900 text-3xl italic pl-6 mt-4 hover:text-gray-700 cursor-pointer duration-300'>
                        From Our Menu
                    </div>
                    <div onClick={() => scroll(blend)} className='text-gray-900 text-3xl pl-6 mt-4 italic hover:text-gray-700 cursor-pointer duration-300'>
                        Our Blend
                    </div>
                    <div onClick={() => scroll(about)} className='text-gray-900 text-3xl pl-6 mt-4 italic hover:text-gray-700 cursor-pointer duration-300'>
                        About Us
                    </div>
                    <div onClick={() => scroll(contact)} className='text-gray-900 text-3xl pl-6 mt-4 italic hover:text-gray-700 cursor-pointer duration-300'>
                        Contact
                    </div>
            </motion.div> : ''}
        </AnimatePresence>
    </>
  )
}

export default Menu