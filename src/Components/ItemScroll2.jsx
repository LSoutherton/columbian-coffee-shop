import React from 'react'

const ItemScroll2 = () => {
  return (
    <div className=''>
        <div>
            From Our Menu
        </div>
        <div className='relative w-full overflow-hidden p-16 h-screen'>
            <div className='flex animate absolute left-0'>
                <div className='flex w-1/2 justify-around'>
                    <img className='h-96 inline' src='./pictures/croissants.jpg' />
                    <img className='h-96 inline' src='./pictures/egg.jpg' />
                    <img className='h-96 inline' src='./pictures/creamCoffee.jpg' />
                </div>
                <div className='flex w-1/2 justify-around'>
                    <img className='h-96 inline' src='./pictures/croissants.jpg' />
                    <img className='h-96 inline' src='./pictures/egg.jpg' />
                    <img className='h-96 inline' src='./pictures/creamCoffee.jpg' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ItemScroll2