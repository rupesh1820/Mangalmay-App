import React, { useState } from 'react';

import WebSiteName from '../Components/WebSiteName'
import LeftNavbar from '../Components/LeftNavbar'
import DailySandhyaPage from '../Pages/DailySandhyaPage'
import DownNavbar from '../Components/DownNavbar'
import LiveVideoPage from '../Pages/LiveVideoPage'
import LiveAudioPage from '../Pages/LiveAudioPage';
import HomePage from '../Pages/HomePage';


const FirstHomePage = () => {

    const [Page, SetPage] = useState("/Home");

  return (
    <div>
      <WebSiteName/>
      <div className='flex'>
        <div className=' w-80 py-8 md:block hidden'>
          <LeftNavbar SetPage={SetPage}></LeftNavbar>
        </div>
        <div>
           {Page === "/Home" && <HomePage/>}
           {Page === "/LiveAudio" && <LiveAudioPage/>}
           {Page === "/LiveVideo" && <LiveVideoPage/>}
           {Page === "/DailySandhya" && <DailySandhyaPage/>}
         
         
        </div>
      </div>
      <div className='md:hidden block'>
        <DownNavbar SetPage={SetPage}/>
      </div>
    </div>
  )
}

export default FirstHomePage
