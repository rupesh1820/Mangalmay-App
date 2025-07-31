import React from 'react'

const TopProfile = () => {
  return (
    <div>
       <div className="w-24 h-24 sm:w-40 sm:h-40  rounded-full border-4 border-gradient-to-tr from-orange-500 to-green-500 sm:ml-20 p-1 mb-4">
        <img
          src="https://via.placeholder.com/150"
          alt="Guruji"
          className="w-full h-full  rounded-full object-cover"
        />
      </div>
    </div>
  )
}

export default TopProfile
