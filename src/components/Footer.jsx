import React from "react";
import {BsLinkedin} from 'react-icons/bs'
 const Footer = () => {
  return (
    <>
      <div className="bg-black absolute top-[110vh] gap-28 mx-10 text-white  flex flex-row justify-around">
        <div className="">
          <h1 className="text-white mb-5 font-bold text-3xl md:text-5xl w-full">
            LOGO
          </h1>
          <p className="box-content w-[500px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
            corporis fuga rerum, perferendis natus voluptas, cum sequi ratione
            dolore minima facilis doloremque laborum rem facere soluta? Harum
            necessitatibus at tempora. Perferendis, sapiente?
          </p>
        </div>
       <div>
        <div className="absolute right-[0] flex flex-col justify-between content-center text-center space-y-4 items-center">
            <h1 className="">Contact Us Now :</h1>
            <div className="flex justify-between items-center space-x-5">
            <BsLinkedin size={30} className='hover:text-[#00df9a]'/>
            <BsLinkedin size={30} className='hover:text-[#00df9a]'/>
            <BsLinkedin size={30} className='hover:text-[#00df9a]'/>
            <BsLinkedin size={30} className='hover:text-[#00df9a]'/>
            </div>
        </div>
       </div>
        
      </div>
    </>
  );
};

export default Footer;
