import React from 'react'
import WebName from '../Components/WebName'
import LeftNavbar from '../Components/LeftNavbar'
import Image from '../Components/Image'

const HomePage = () => {
  return (
    <div>
      <WebName></WebName>
      <div className='flex'>
        <div className=' w-80 py-8 '>
          <LeftNavbar></LeftNavbar>
        </div>
        <div> 
          <Image></Image>
        </div>
      </div>
    </div>
  )
}

export default HomePage
