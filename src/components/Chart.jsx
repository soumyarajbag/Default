import React, {useContext, useState} from "react";
import { Line } from "react-chartjs-2";
import { days, predicted_prices } from "../data/data2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Colors,
  Filler,
} from "chart.js";
import SignContext from "../contexts/SignContext";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Colors,
  Filler
);

ChartJS.defaults.color = "#fff";
ChartJS.defaults.borderColor = "#fff";
ChartJS.defaults.scales.category.zeroLineColor = "#fff";

const Chart = () => {

  const s = useContext(SignContext);
  
  const stockInfo = s.stockInfo;
  // console.log("The days are", stockInfo.days);
  // console.log("The predicted prices are", stockInfo.predicted_prices);

  const data = {
    labels: stockInfo.days,
    datasets: [
      {
        label: "Stock Price v/s Days",
        data: stockInfo.predicted_prices,
        // backgroundColor: (context) => {
        //   // const bgColor = [
        //   //   "rgba(255 , 26 , 104 , 0.2)",
        //   //   "rgba(54 , 162 , 235 , 0.2)",
        //   //   "rgba(255 , 206 , 86 , 0.2 )",
        //   //   "rgba(75 , 192 , 192 , 0.2 )",
        //   //   "rgba(153 , 102 , 255 ,0.2)",
        //   //   "rgba(255 , 159 , 64 , 0.2 )",
        //   //   "rgba(0,0,0,0.2)",
        //   // ];

        //   if (!context.chart.chartArea) {
        //     return;
        //   }
        //   console.log(context.chart.chartArea);
        //   const {
        //     ctx,
        //     data,
        //     chartArea: { top, bottom },
        //   } = context.chart;
        //   const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);

        //   gradientBg.addColorStop(0, bgColor[0]);
        //   gradientBg.addColorStop(0.5, bgColor[1]);
        //   gradientBg.addColorStop(1, bgColor[2]);
        //   return gradientBg;
        // },
        borderColor: [
          "#fff",
          
        ],
        pointBorderColor: "white",
        tension: 0,
        fill: true,
        pointHoverRadius: 7.5,
        
        pointBackgroundColor: "yellow",
      },
    ],
  };

  const options = {
    plugins: {
      legend: true,
    },

    elements: {
      point: {
        pointStyle: "circle",
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
          color: "rgba(255,0,0,0.1)",
          borderColor: "red",
        },
      },
      y: {
        ticks: {
          maxTicksLimit: 100,
          
        },
        max: Math.max(...stockInfo.predicted_prices),
        min: Math.min(...stockInfo.predicted_prices) ,
        grid: {
          display: false,
          color: "rgba(0,255,0,0.9)",
          borderColor: "green",
          zeroLineColor: "#fff",
        },
      },
    },
  };
  return (
    <div className="min-[280px]:h-[150px] min-[280px]:w-[250px] min-[360px]:h-[250px]  min-[360px]:w-[350px] min-[390px]:w-[370px] md:h-[1000px] md:w-[1000px]">
      <Line data={data} options={options}></Line>
    </div>
  );
};

export default Chart;
