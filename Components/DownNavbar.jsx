import React from 'react';
import { IoMdHome } from 'react-icons/io';
import { HiSpeakerWave } from 'react-icons/hi2';
import { SiGoogledisplayandvideo360 } from 'react-icons/si';
import { GiMeditation } from 'react-icons/gi';

const DownNavbar = ({ SetPage }) => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t shadow-md z-50">
      <ul className="flex justify-around items-center py-2">

        <a href="#" onClick={(e) => { e.preventDefault(); SetPage("/Home"); }}>
          <li className="flex flex-col items-center text-xs text-teal-700">
            <IoMdHome className="text-2xl" />
            <span>Home</span>
          </li>
        </a>

        <a href="#" onClick={(e) => { e.preventDefault(); SetPage("/LiveAudio"); }}>
          <li className="flex flex-col items-center text-xs text-teal-700">
            <HiSpeakerWave className="text-2xl" />
            <span>Live Audio</span>
          </li>
        </a>

        <a href="#" onClick={(e) => { e.preventDefault(); SetPage("/LiveVideo"); }}>
          <li className="flex flex-col items-center text-xs text-teal-700">
            <SiGoogledisplayandvideo360 className="text-2xl" />
            <span>Live Video</span>
          </li>
        </a>

        <a href="#" onClick={(e) => { e.preventDefault(); SetPage("/DailySandhya"); }}>
          <li className="flex flex-col items-center text-xs text-teal-700">
            <GiMeditation className="text-2xl" />
            <span>Daily Sandhya</span>
          </li>
        </a>

      </ul>
    </div>
  );
};

export default DownNavbar;
