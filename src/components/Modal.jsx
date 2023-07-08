import React, { useState } from 'react'
import SignUp from './SignUp';
import Signed from './Signed';

const Modal = () => {
    const [ sign , setSign ] = useState(true)
  return (
    <>
    {
        sign ? <Signed  setSign={setSign}  /> : <SignUp  setSign={setSign} />
    }
    </>
  )
}

export default Modal ;