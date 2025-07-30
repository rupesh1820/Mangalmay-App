import React from 'react'
import { IoMdHome } from "react-icons/io";
import { HiSpeakerWave } from "react-icons/hi2";

import { SiGoogledisplayandvideo360 } from "react-icons/si";

import { GiMeditation } from "react-icons/gi";
                                  


const LeftNavbar = () => {
  return (
    <div className='shadow-2xl h-240 mt-10 sm:w-80 lg:w-100 fixed'>
      <ul className='my-12 mx-2'>
        <a href=""> <li  className='flex my-6 text-2xl text-neutral-600 gap-2'> <IoMdHome className='mt- text-3xl'/> <span>Home</span> </li></a>
        <a  href=""> <li   className='flex my-6 text-2xl text-neutral-600 gap-2'> <HiSpeakerWave className='mt- text-3xl'/> <span>Live Audio</span> </li></a>
        <a href=""> <li   className='flex my-6 text-2xl text-neutral-600 gap-2'> <SiGoogledisplayandvideo360  className='mt- text-3xl'/>  <span> Live Video</span> </li></a>
        <a href=""> <li   className='flex my-6 text-2xl text-neutral-600 gap-2'> <GiMeditation className='mt- text-3xl'/> <span> Daily Sandhya</span></li></a>
      </ul>
    </div>
  )
}

export default LeftNavbar
