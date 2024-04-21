import React, { useEffect, useState, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

const AboutUs = ({ about }) => {

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
    <div ref={about} className={`${screenSize ? '' : 'grid grid-cols-2 justify-center items-center w-5/6 m-auto'} scroll-mt-32`}>
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
        <img className='shadow-2xl' src='./Pictures/dog.jpg' />
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
        className={`${screenSize ? 'text-xl' : 'text-4xl'} text-center pl-10 pr-10 pb-2 pt-2`}>
        We are a family run business located in <span className='font-bold'>central London</span>. As you can see above, we love <span className='font-bold'>Columbian coffee beans</span> and put them at the forefront of our image.
        We also believe that everyone should be included, therefore we <span className='font-bold'>welcome all dogs</span> from big to small.
      </motion.div>
    </div>
  )
}

export default AboutUs