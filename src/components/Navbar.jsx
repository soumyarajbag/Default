import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";
import SignContext from "../contexts/SignContext";
import SignState from "../contexts/SignState";
const Navbar = () => {
  const s = useContext(SignContext);
  const modal = s.modal;
  const setModal = s.setModal;
  const handleModal = () => {
    setModal(!modal) ;
    console.log(modal);
  }

  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  // onClick={()=>setmodal(!modal)}
  return (
    <>
      <div className="absolute  flex flex-row justify-between  md:justify-around items-center h-24 w-full  px-4 text-white p-[1rem] z-10">
        <Link to="/">
          <h1 className="text-white font-bold text-4xl md:text-5xl w-full">
            LOGO
          </h1>
        </Link>
        <ul className="hidden md:flex flex-row justify-between space-x-10 font-normal text-2xl items-center">
          <li className="p-4">
            <Link to="/">
              <h1 className="hover:border-b border-spacing-4 hover:border-b-white">
                Home
              </h1>
            </Link>
          </li>
          <li className="p-4">
            <Link to="/about">
              <h1 className="hover:border-b border-spacing-4 hover:border-b-white">
                About Us
              </h1>
            </Link>
          </li>
          <li className="p-4">
            <Link to="/">
              <h1 className="hover:border-b border-spacing-4 hover:border-b-white">
                Guide
              </h1>
            </Link>
          </li>
          <li className="p-4">
            <Link to="/">
              <button onClick={handleModal} className="border p-4">Sign Up/Sign In</button>
            </Link>
          </li>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
          {!nav ? <FaBars size={25} /> : <FaTimes size={25} />}
        </div>
        <ul
          className={
            nav
              ? "fixed left-0 top-0 w-[50%] h-full border-r border-r-gray-900 bg-[#000] ease-in-out duration-500"
              : "ease-in-out duration-500 fixed left-[-100%]"
          }
        >
          <h1 className="w-full text-3xl font-bold text-white m-4 pb-4 mt-5">
            LOGO
          </h1>
          <Link to="/">
            <li className="p-4 border-b border-gray-600">Home</li>
          </Link>
          <Link to="/about">
            <li className="p-4 border-b border-gray-600">About Us</li>
          </Link>
          <li className="p-4 border-b border-gray-600">Guide</li>

          <li className="p-4">
            <button
              onClick={() => setModal(!modal)}
              className="text-white md:text-2xl p-2 md:p-4 border my-4 font-semibold rounded-md hover:bg-white hover:text-black hover:bg-opacity-50"
            >
              Sign Up/Sign In
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
