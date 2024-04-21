import React, { useEffect, useState, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

const Welcome = ({ home }) => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visable');
    }
  }, [isInView])

  const [screenSize, setScreenSize] = useState(window.innerWidth < 1100);
  
  const updateView = () => {
    setScreenSize(window.innerWidth < 1100);
  }

  useEffect(() => {
    window.addEventListener('resize', updateView);
    return () => window.removeEventListener('resize', updateView);
  });

  return (
    <div ref={home} className={`${screenSize ? 'w-full' : 'w-5/6 grid grid-cols-2 justify-center items-center m-auto'} scroll-mt-32`}>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -75},
          visable: {opacity: 1, x: 0}
        }}
        initial='hidden'
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.5}}
        ref={ref}>
        <img className='w-3/4 m-auto shadow-2xl' src='./Pictures/two-coffees.jpg' />
      </motion.div>
      <motion.div 
        variants={{
          hidden: { opacity: 0, x: 75},
          visable: {opacity: 1, x: 0}
        }}
        initial='hidden'
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.5}}
        ref={ref}
        className={`${screenSize ? 'text-xl' : 'text-4xl'} text-center p-8`}>
        Welcome to <span className='font-bold'>The Columbian Coffee Shop</span>! We serve high quality coffee directly from Columbia which we believe is the greatest in the world! You can also enjoy a bite to eat from our carefully selected menu of cafe classics.
      </motion.div>
    </div>
  )
}

export default Welcome