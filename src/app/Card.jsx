import React from 'react'
import {HiArrowTrendingUp} from "react-icons/hi2";

const Card = ({text, date, mainHeading, description}) => {
  return (
    <div className='border-gray-600 px-4 py-8 rounded-xl bg-white/10 backdrop-blur-sm
    flex flex-col gap-2 transition delay-200 ease-out hover:scale-105 cursor-pointer'>
        <p className='text-gray-400'>{text}</p>
        <p className='text-gray-400'>{date}</p>
        <HiArrowTrendingUp  className='text-white w-[5rem] h-[5rem]'/>
        <h1 className='text-white-new text-2xl'>{mainHeading}</h1>
        <p className='text-gray-300'>{description}</p>
    </div>
  )
}

export default Card