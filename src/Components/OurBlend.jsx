import React, { useEffect, useState, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

const OurBlend = ({ blend }) => {

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
    <div>
      <div ref={blend} className={`${screenSize ? '' : 'grid grid-cols-2 justify-center items-center w-5/6 m-auto'} scroll-mt-36`}>
        <motion.div
          variants={{
            hidden: { opacity: 0, x: 75},
            visable: {opacity: 1, x: 0}
          }}
          initial='hidden'
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.5}}
          ref={ref}
          className={`${screenSize ? 'text-xl' : 'text-4xl'} text-center pl-10 pr-10 pb-2 pt-2`}>We pride ourselves on serving the best coffee around! Our coffee beans are imported directly from <span className='font-bold'>Columbia</span> and go from plant to cup in less than <span className='font-bold'>7 days</span>. You will be hardpressed to find coffee as delicious as ours (<span className='font-bold'>or at least we think so</span>).</motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -75},
            visable: {opacity: 1, x: 0}
          }}
          initial='hidden'
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.5}}
          ref={ref}
          className='w-96 m-auto mt-6'>
          <img className='shadow-2xl' src='./Pictures/blend.jpg' />
        </motion.div>
      </div>
    </div>
  )
}

export default OurBlend