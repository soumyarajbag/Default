import React, { useContext } from 'react'
import TeamCard from './TeamCard'
import {team} from '../data/data' ; 
import SignContext from '../contexts/SignContext';
import Signed from './Signed';
const Team = () => {
  const s = useContext(SignContext) ;
   const modal = s.modal ;
  return (
    <>
    <div className='flex flex-col items-center'>
        <h1 className='text-3xl text-center text-white absolute top-[15vh] font-bold  '>Meet Our Team</h1>
        <h1 className='text-2xl text-center text-gray-400 font-semibold top-[22vh] absolute'>DataDynamos</h1>
    <div className='absolute top-[30vh] flex-col flex-wrap flex md:flex-row  justify-center text-center items-center md:gap-x-10 2xl:space-x-10'>
        
        {
            team.map(( member)=>{
                return(
                    <TeamCard key={member.id} name={member.name} photo={member.photo} role={member.role} />
                )
            })
         }
            
    
    </div>
    </div>
    { modal===true?<Signed /> : null  }
    
    </>
  )
}

export default Team