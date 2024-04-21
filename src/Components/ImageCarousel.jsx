import React, { useEffect, useState, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import EastIcon from '@mui/icons-material/East';

const ImageCarousel = ({ data, menu }) => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    const mainControls = useAnimation();
  
    useEffect(() => {
      if (isInView) {
        mainControls.start('visable');
      }
    }, [isInView])

    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
      setSlide(slide === data.length - 1 ? 0 : slide + 1);
    }
  
    const prevSlide = () => {
      setSlide(slide === 0 ? data.length - 1 : slide - 1);
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlide()
        }, 5000)
        return () => clearInterval(intervalId)
    })

    const [screenSize, setScreenSize] = useState(window.innerWidth < 1100);
  
    const updateView = () => {
      setScreenSize(window.innerWidth < 1100);
    }
  
    useEffect(() => {
      window.addEventListener('resize', updateView);
      return () => window.removeEventListener('resize', updateView);
    });
  
    return (
        <div ref={menu} className='scroll-mt-36'>
            <motion.div 
                variants={{
                    hidden: { opacity: 0, y: -75},
                    visable: {opacity: 1, y: 0}
                }}
                initial='hidden'
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.5}}
                ref={ref}
                className={`${screenSize ? 'text-xl' : 'text-4xl pl-60 pr-60'} text-center pl-10 pr-10 pb-6`}>Enjoy a great selection of food and drink from our varied menu, perfect for breakfast or lunch!</motion.div>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75},
                    visable: {opacity: 1, y: 0}
                }}
                initial='hidden'
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.5}}
                ref={ref}
                className={`${screenSize ? 'w-96 h-custom' : 'w-6/12 h-custom-large'} flex justify-center items-center relative m-auto z-10`}>
                <div onClick={nextSlide} className='absolute bg-gray-100 rotate-180 border-2 text-gray-700 w-12 h-12 arrow-padding rounded-full z-20 top-1/2 left-2 -translate-y-1/2 cursor-pointer'>
                    <EastIcon fontSize='large' />
                </div>
                {data.map((item, idx) => {
                    return <img className={`${slide === idx ? 'opacity-100' : 'opacity-0'} absolute duration-500 w-full h-full z-10 shadow-2xl`} src={item.src} alt={item.alt} key={idx} />
                })}
                <div onClick={nextSlide} className='absolute bg-gray-100 border-2 text-gray-700 w-12 h-12 arrow-padding rounded-full z-10 top-1/2 right-2 -translate-y-1/2 cursor-pointer'>
                    <EastIcon fontSize='large' />
                </div>
                <span className='flex absolute bottom-2 z-10'>
                    {data.map((_, idx) => {
                        return <button className={`${slide === idx ? 'bg-white' : 'bg-gray-700'} h-2 w-2 cursor-pointer rounded-full ml-1 mr-1`} key={idx} onClick={prevSlide}></button>
                    })}
                </span>
            </motion.div>
        </div>
    )
}

export default ImageCarousel