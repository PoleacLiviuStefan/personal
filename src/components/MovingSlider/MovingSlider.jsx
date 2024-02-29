import React from 'react'

const MovingSlider = ({objectOpacity,rotated}) => {
    const opacity="opacity-["+ objectOpacity.toString()+"]";


  return (

      <div className={`absolute mt-[-2rem] overflow-hidden left-0 flex items-center bg-[#6C33FE] ${opacity}  h-[4rem] w-full text-white lg:text-[24px] font-bold ${rotated ? "rotate-[-5deg] " : "rotate-[5deg] z-20"}  `}>
          <div className='absolute flex justify-between w-[200%]  animate-[infiniteSlider_6s_linear_infinite] text-center'>
            <h4 className='mx-[1rem]'>WEB APP</h4>
            <h4 className='mx-[1rem]'>INTEGRATING APIs</h4>
            <h4 className='mx-[1rem]'>LANDING PAGES</h4>
            <h4 className='mx-[1rem]'>ECOMMERCE STORES</h4>
            <h4 className='mx-[1rem]'>WEB APP</h4>
            <h4 className='mx-[1rem]'>INTEGRATING APIs</h4>
            <h4 className='mx-[1rem]'>LANDING PAGES</h4>
            <h4 className='mx-[1rem]'>ECOMMERCE STORES</h4>
          </div>
      </div>

  )
}

export default MovingSlider