import React from 'react'
import { IoMdHome } from "react-icons/io";
import { HiSpeakerWave } from "react-icons/hi2";
import { SiGoogledisplayandvideo360 } from "react-icons/si";
import { GiMeditation } from "react-icons/gi";

const LeftNavbar = ({ SetPage }) => {
  return (
    <div className='shadow-2xl  h-240 mt-10 sm:w-60  fixed'>
      <ul className='my-12 mx-2'>

        <a href="#" onClick={(e) => { e.preventDefault(); SetPage("/Home"); }}>
          <li className='flex my-6 text-2xl text-neutral-600 gap-2 cursor-pointer'>
            <IoMdHome className='text-3xl' />
            <span>Home</span>
          </li>
        </a>

        <a href="#" onClick={(e) => { e.preventDefault(); SetPage("/LiveAudio"); }}>
          <li className='flex my-6 text-2xl text-neutral-600 gap-2 cursor-pointer'>
            <HiSpeakerWave className='text-3xl' />
            <span>Live Audio</span>
          </li>
        </a>

        <a href="#" onClick={(e) => { e.preventDefault(); SetPage("/LiveVideo"); }}>
          <li className='flex my-6 text-2xl text-neutral-600 gap-2 cursor-pointer'>
            <SiGoogledisplayandvideo360 className='text-3xl' />
            <span>Live Video</span>
          </li>
        </a>

        <a href="#" onClick={(e) => { e.preventDefault(); SetPage("/DailySandhya"); }}>
          <li className='flex my-6 text-2xl text-neutral-600 gap-2 cursor-pointer'>
            <GiMeditation className='text-3xl' />
            <span>Daily Sandhya</span>
          </li>
        </a>

      </ul>
    </div>
  )
}

export default LeftNavbar
