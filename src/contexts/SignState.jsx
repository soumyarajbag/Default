import React, { useState } from 'react'
import SignContext from './SignContext'

const SignState = (props) => {
    const [modal , setModal] = useState(false)

    // const handleModal = () =>{
    //     setModal(!modal) ;
    // }
  return (
    <SignContext.Provider value={{modal , setModal}}>
        {props.children}
    </SignContext.Provider>
  )
}

export default SignState