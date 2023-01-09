import React from 'react'

function TimeAndLocation() {
  return (
    <div>

        <div className='flex flex-row items-center justify-center'>
        <p className='text-white text-xl font-extralight'>
            Monday, 9 January 2023 | Local Time: 2:30 PM
        </p>
        </div>

        <div className='flex items-center justify-center my-3'>
        <p className='text-white text-3xl font-medium'>
        Chicago, IL
        </p>
        </div>

    </div>
  )
}

export default TimeAndLocation