import React, { useState } from 'react'
import SignContext from './SignContext'
import data2 from '../data/data2'

const SignState = (props) => {
  const [modal, setModal] = useState(false)

  const [stockInfo, setStockInfo] = useState(data2);

  // const handleModal = () =>{
  //     setModal(!modal) ;
  // }
  return (
    <SignContext.Provider value={{ modal, setModal, stockInfo, setStockInfo }}>
      {props.children}
    </SignContext.Provider>
  )
}

export default SignState