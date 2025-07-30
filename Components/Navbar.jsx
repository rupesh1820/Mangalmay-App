import React from 'react'
import { IoMdHome } from "react-icons/io";
import { HiSpeakerWave } from "react-icons/hi2";

import { SiGoogledisplayandvideo360 } from "react-icons/si";

import { GiMeditation } from "react-icons/gi";
                                  


const LeftNavbar = () => {
  return (
    <div >
      <ul>
        <a href=""> <li> <IoMdHome/> <span>Home</span> </li></a>
        <a href=""> <li> <HiSpeakerWave/> <span>Live Audio</span> </li></a>
        <a href=""> <li> < SiGoogledisplayandvideo360/>  <span> Live Video</span> </li></a>
        <a href=""> <li> <GiMeditation /> <span> daily Sandhya</span></li></a>
      </ul>
    </div>
  )
}

export default LeftNavbar
