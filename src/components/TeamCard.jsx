import React from 'react'

import {BsLinkedin , BsGithub} from "react-icons/bs" ;
import devfolio from '../assets/Devfolio.png';

const TeamCard = (props) => {
  return (
    <>
    <div className='my-4'>
    <div className='flex flex-col  items-center space-y-2 hover:scale-110 bg-[#b09d68] w-[250px] h-[450px] md:w-[300px] md:h-[500px] rounded-lg border-4 border-rose-500 '>
        <div>
          <img src={props.photo} alt=""  className='h-[200px] w-[200px] md:h-[250px] md:w-[250px] rounded-full mt-16' />
        </div>
        <h1 className='text-2xl font-bold'>{props.name}</h1>
        <h2 className='text-xl font-semibold'>{props.role}</h2>
        <div className='flex flex-row items-center content-center justify-evenly space-x-4 pt-6'>
          <BsLinkedin size={25} style={{color:'blue'}} className='hover:scale-110 cursor-pointer' />
          <BsGithub size={25} className='hover:scale-110 cursor-pointer' />
          <img src={devfolio} alt="" className='h-[25px] w-[25px] hover:scale-110 cursor-pointer'/>
        </div>
     </div>
    </div>
    
    </>
  )
}

export default TeamCard