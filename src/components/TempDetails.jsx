import React from 'react'
// importing icons
import {
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset,
  } from "@iconscout/react-unicons";

function TempDetails() {
  return (
    <div>

        <div className='flex items-center justify-center py-6 text-xl text-white'>
            <p>Cloudy</p>
        </div>

        <div className='flex flex-row items-center justify-between text-white py-2'>
        <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" className="w-20"/>
        <p className='text-5xl'>34°</p>
        <div className='flex flex-col space-y-2'>
            <div className='flex font-light text-sm items-center justify-center'>
                <UilTemperature size={18} className="mr-1"/>
                Feels Like:
                <span className='font-medium ml-1'>34°</span>
            </div>
            <div className='flex font-light text-sm items-center justify-center'>
                <UilTear size={18} className="mr-1"/>
                Humidity:
                <span className='font-medium ml-1'>42%°</span>
            </div>
            <div className='flex font-light text-sm items-center justify-center'>
                <UilWind size={18} className="mr-1"/>
                Wind:
                <span className='font-medium ml-1'>9m/h</span>
            </div>
        </div>
        </div>

        <div className='flex flex-row items-center justify-center space-x-2 text-white text-sm py-3'>
            <UilSun />
            <p className='font-light'>Sunrise: 
            <span className='font-medium ml-1'> 06:00 AM</span>
            </p>
            <p className='font-light'>|</p>

            <UilSunset />
            <p className='font-light'>Sunset: 
            <span className='font-medium ml-1'> 06:50 PM</span>
            </p>
            <p className='font-light'>|</p>

            <UilSun />
            <p className='font-light'>High: 
            <span className='font-medium ml-1'> 44°</span>
            </p>
            <p className='font-light'>|</p>

            <UilSun />
            <p className='font-light'>Low: 
            <span className='font-medium ml-1'> 24°</span>
            </p>
        </div>
    
    </div>
  )
}

export default TempDetails