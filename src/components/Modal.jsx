import React, { useState } from 'react'
import SignUp from './SignUp';
import Signed from './Signed';
import { Toaster } from 'react-hot-toast';

const Modal = () => {
  const [sign, setSign] = useState(true)
  return (
    <>
      {
        sign ? <Signed setSign={setSign} /> : <SignUp setSign={setSign} />
      }
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </>
  )
}

export default Modal;