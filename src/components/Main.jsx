import React, { useContext, useState } from "react";

import { FaSearch } from "react-icons/fa";
import Chart from './Chart';
import Sign from "./Sign";
import SignState from "../contexts/SignState";
import SignContext from "../contexts/SignContext";

import axios from 'axios';

const Main = () => {
  const s = useContext(SignContext);
  const modal = s.modal;
  const setModal = s.setModal;

  const [stockSymbol, setStockSymbol] = useState("");
  const stockInfo = s.stockInfo;
  const setStockInfo = s.setStockInfo;

  const fetchData = async (stockSymbol) => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/predict/?symbol=${stockSymbol}`);
      console.log(response.data);
      setStockInfo(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (

    <>
      <div>

        {/* <img src={bgPhoto} className="w-[100%] h-[100%] object-cover z-[-1] bg-repeat-y" /> */}
        <div className="flex flex-col justify-evenly items-center ">
          <h1 className="text-2xl  md:text-4xl font-bold text-center mb-4 text-white absolute top-[12vh] lg:top-[20vh] xl:top-[12vh]">
            Predict Stock Price for Any Company Now !
          </h1>
          <div className=" w-full  flex flex-row justify-center mt-12 items-center content-center text-center z-10 absolute top-[15vh] lg:top-[22vh] xl:top-[15vh] m-auto">
            <input
              type="text"
              className="text-white text-xl md:text-2xl h-10 w-[70%] md:pl-4 md:h-14 md:w-[50%] bg-transparent border-4 border-blue-400 rounded-lg" value={stockSymbol} onChange={(e) => setStockSymbol(e.target.value)}
            />
            <button className="ml-4 p-2 md:p-4 border-2 rounded-lg hover:bg-white hover:bg-opacity-40 hover:text-black" type="submit" onClick={() => { fetchData(stockSymbol) }}>
              <FaSearch size={25} className="text-white" />
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between">

          <div className="text-white hover:shadow-lg box-content cursor-pointer hover:scale-105 duration-100 bg-[rgba(22,21,21,0.28)] absolute top-[30vh] lg:top-[50vh] xl:top-[30vh] mr-2 ml-2 md:left-[10%] border-white  md:w-[500px]  border rounded-lg ">
            <div className=" flex flex-col justify-center p-4 ">
              <h1 className="text-white text-2xl">Company Name</h1>
              <p className="mt-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
                natus dolore eos hic repudiandae minus ad soluta ut itaque, ex
                saepe id sit ratione, animi consequatur delectus et unde neque!
                Unde, consequuntur.
              </p>
              <h1 className="text-xl font-semibold mt-4">Present Stock Price : $105 </h1>
            </div>

          </div>

          <div className="absolute top-[70vh] w-[1000px] h-[1500px]">
            <Chart />

          </div>


        </div>


      </div>
    </>
  );
};

export default Main;

