import React from 'react'
import WebName from '../Components/WebName'
import LeftNavbar from '../Components/LeftNavbar'
import Image from '../Components/Image'
import DailySandhyaPage from '../Pages/DailySandhyaPage'
import DownNavbar from '../Components/DownNavbar'
import LiveVideoPage from '../Pages/LiveVideoPage'


const HomePage = () => {
  return (
    <div>
      <WebName></WebName>
      <div className='flex'>
        <div className=' w-80 py-8 md:block hidden'>
          <LeftNavbar></LeftNavbar>
        </div>
        <div> 
         {/* <DailySandhyaPage/>*/ }
         <LiveVideoPage/> 
        </div>
      </div>
      <div className='md:hidden block'>
        <DownNavbar/>
      </div>
    </div>
  )
}

export default HomePage
