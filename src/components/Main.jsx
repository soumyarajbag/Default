import React, { useContext } from "react";

import { FaSearch } from "react-icons/fa";
import Chart from "./Chart";
import SignContext from "../contexts/SignContext";
import Table from "./Table";

const Main = () => {
  const s = useContext(SignContext);
  const modal = s.modal;
  const setModal = s.setModal;

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const options = {
  //       method: 'GET',
  //       url: 'https://yahoo-finance127.p.rapidapi.com/price/eth-usd',
  //       headers: {
  //         'X-RapidAPI-Key': '86cbb185f4mshc406d385be4f8dfp1c104fjsne05fe8b44225',
  //         'X-RapidAPI-Host': 'yahoo-finance127.p.rapidapi.com'
  //       }
  //     };
  //     try {
  //       const response = await axios.request(options);
  //       console.log(response.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <>
      <div>
        {/* <img src={bgPhoto} className="w-[100%] h-[100%] object-cover z-[-1] bg-repeat-y" /> */}
        
        <div className="flex flex-col justify-evenly items-center">
          <h1 className=" min-[280px]:text-base min-[360px]:text-2xl  md:text-4xl font-bold text-center min-[360px]:mb-4 text-white absolute top-[12vh] min-[1080px]:top-[12vh] lg:top-[20vh] xl:top-[20vh] 2xl:top-[12vh]">
            Predict Stock Price for Any Company Now !
          </h1>
          <div className=" w-full  flex flex-row justify-center mt-16 items-center content-center text-center z-10 absolute top-[15vh] min-[1080px]:top-[15vh] lg:top-[22vh] xl:top-[20vh] 2xl:top-[15vh] m-auto">
            <input
              type="text"
              className="text-white text-xl md:text-2xl h-10 min-[280px]:w-[70%] md:pl-4 md:h-14 md:w-[50%] min-[1080px]:w-[60%] xl:w-[50%] bg-transparent border-4 border-blue-400 rounded-lg"
            />
            <button className="ml-4 p-2 md:p-4 border-2 rounded-lg hover:bg-white hover:bg-opacity-40 hover:text-black ">
              <FaSearch  className="text-white min-[360px]:h-[25px] min-[360px]:w-[25px]" />
            </button>
          </div>
        </div>
        <div className="flex flex-col 2xl:flex-row  justify-center items-center 2xl:items-start gap-8 md:gap-14 min-[900px]:gap-20 min-[1080px]:gap-[6vh] xl:gap-9 xl:space-x-10 absolute 2xl:top-[35vh] 2xl:px-[16vh] min-[280px]:top-[35vh] min-[360px]:top-[32vh] min-[360px]:px-[0.90rem] min-[390px]:px-[1.5vh]  min-[400px]:px-[1vh] md:px-7 min-[900px]:top-[28vh] lg:top-[48vh]  min-[1080px]:px-20 min-[1080px]:top-[25vh] xl:top-[40vh] xl:px-[20vh]">
       <div className="flex flex-col">
        <div className="flex flex-col 2xl:flex 2xl:flex-row gap-1 justify-around">
        <h1 className="text-white text-center md:text-2xl 2xl:text-4xl 2xl:mb-10 font-bold">
            Company Name
          </h1>
          <h1 className="text-white text-center md:text-2xl  2xl:text-3xl mb-4 md:mb-7 min-[900px]:mb-9 2xl:mb-10 font-bold ">
             Present Stock Price : $69
          </h1>
        </div>
      
          <div className="text-white rounded-lg flex flex-col items-center   bg-[rgba(22,21,21,0.28)] justify-between border border-white md:p-5 hover:scale-105 ease-in-out duration-100 2xl:w-[1200px] 2xl:h-[700px] min-[360px]:w-[340px]  min-[390px]:w-[360px] min-[400px]:w-[390px] min-[500px]:w-[520px] md:w-[710px] md:h-[500px] min-[800px]:w-[760px] min-[900px]:w-[850px] lg:w-[970px] lg:h-[700px] min-[1080px]:w-[900px] min-[1080px]:h-[550px] ">
          <Chart />
          <h1 className="text-center text-xl md:text-2xl font-bold pb-5">
            Stock Price Predicted on Upcoming 30 Days
          </h1>
        </div>
       </div>
          
          
        
        
        {/* <div className="bg-[rgba(22,21,21,0.28)] border border-white rounded-lg  text-white flex flex-col min-[390px]:w-[340px] ml-1 min-[400px]:ml-4 lg:ml-0  box-content p-5 md:w-[500px] lg:w-[700px] xl:w-[900px] 2xl:w-[500px]">
        
            <h1 className="text-white text-2xl">Company Name</h1>
            <p className="mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
              natus dolore eos hic repudiandae minus ad soluta ut itaque, ex
              saepe id sit ratione, animi consequatur delectus et unde neque!
              Unde, consequuntur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident aspernatur esse dolorum libero sequi quas nobis velit. Beatae soluta mollitia, voluptatibus perferendis minima a sunt maxime optio esse obcaecati, temporibus consectetur dolore?
            </p>
            <h1 className="text-xl font-semibold mt-4">Present Stock Price :  </h1>
          
        </div> */}

        <div className="relative top-[-5vh]">
          
        <Table />
        </div>
        </div> 
      </div>
    </>
  );
};

export default Main;
