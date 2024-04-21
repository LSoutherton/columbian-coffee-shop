import React, { useState } from 'react'

const ItemsScroll = ({ data }) => {

  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  }

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  }

  return (
    <div className='flex justify-center items-center w-96 h-80 relative'>
        <div onClick={prevSlide} className='z-10 absolute w-10 h-10 text-4xl text-green-500 left-2 cursor-pointer'>
            Left
        </div>
        {data.map((item, idx) => {
            return <img className={`${slide === idx ? 'opacity-100' : 'opacity-0'} absolute duration-500 w-full h-full`} src={item.src} alt={item.alt} key={idx} />
        })}
        <div onClick={nextSlide} className='absolute w-10 h-10 text-4xl text-green-500 right-2 cursor-pointer'>
            Right
        </div>
        <span className='flex absolute bottom-2'>
            {data.map((_, idx) => {
                return <button className={`${slide === idx ? 'bg-white' : 'bg-gray-700'} h-2 w-2 cursor-pointer rounded-full ml-1 mr-1`} key={idx} onClick={null}></button>
            })}
        </span>
    </div>
  )
}

export default ItemsScroll