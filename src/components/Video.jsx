import React from 'react'
import { Link } from 'react-router-dom'
import BgVideo from '../assets/bgvid.mp4'
import Sign from './Sign'
const Video = () => {
  return (
    <div className='absolute top-0 w-[100%] h-[100vh]'>
      <video src={BgVideo} autoPlay muted loop className='w-[100%] h-[100%] object-cover z-[-1]' />
     <div className='flex flex-col w-[100%]  absolute object-contain h-[100%] top-[40vh] text-center items-center content-center m-auto'>
        <h1 className=' font-bold  text-white text-5xl'>Stock Price Prediction</h1>
        <Link to='/main'><button className='text-white text-2xl p-4 border my-4 font-bold rounded-md hover:bg-white hover:text-black hover:bg-opacity-50'>Get Started</button></Link>
        
     </div>

     <Sign />
    </div>
  )
}

export default Video