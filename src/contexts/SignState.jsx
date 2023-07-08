import React, { useState, useEffect } from 'react'
import SignContext from './SignContext'
import data2 from '../data/data2';
import axios from 'axios';


const SignState = (props) => {
  const [modal, setModal] = useState(false)

  const [stockInfo, setStockInfo] = useState(data2);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [user, setUser] = useState([]);


  useEffect(() => {

    axios.get('http://127.0.0.1:8000/api/auth/isauth/')
      .then(response => {
        const userdata = response.data;
        console.log(userdata);
        if (userdata.authenticated) {
          setIsAuthenticated(true);
          // setUser(userdata);
          console.log("our local auth state is", isAuthenticated);
        }
      })
      .catch(error => {
        console.log(error);
      });

  }, [])


  const handleModal = () => {
    setModal(true);
  }

  const handleClose = (e) => {
    if (e.target.id === 'container' || e.target.id === 'close') {
      setModal(false);
    }
  }

  return (
    <SignContext.Provider value={{ modal, setModal, handleModal, handleClose, stockInfo, setStockInfo, isAuthenticated, setIsAuthenticated, user, setUser }}>
      {props.children}
    </SignContext.Provider>
  )
}

export default SignState