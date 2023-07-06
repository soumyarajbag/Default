import React, { useContext } from "react";
import { Line } from "react-chartjs-2";
import data2 from "../data/data2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Colors,
  Filler,
  Tooltip,
} from "chart.js";
import SignContext from "../contexts/SignContext";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Colors,
  Tooltip,
  Filler
);

ChartJS.defaults.color = "#fff";
ChartJS.defaults.borderColor = "#fff";
ChartJS.defaults.scales.category.zeroLineColor = "#fff";

const Chart = () => {
  const s = useContext(SignContext);

  const stockInfo = s.stockInfo;

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
        backgroundColor: "#130791",
        borderColor: ["#130791"],
        pointBorderColor: "green",
        tension: 0,
        fill: false,
        pointHoverRadius: 7.5,
        pointBackgroundColor: "green",
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
        max: Math.max(...data2.predicted_prices),
        min: Math.min(...data2.predicted_prices),
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
    <div className="2xl:h-[700px] 2xl:w-[1100px] min-[360px]:w-[320px] min-[360px]:h-[200px]  min-[390px]:w-[340px] min-[400px]:w-[370px] min-[500px]:w-[500px] min-[500px]:h-[280px] md:w-[690px] md:h-[800px] min-[800px]:w-[750px] min-[900px]:w-[840px] lg:w-[950px] min-[1080px]:w-[840px]">
      <Line data={data} options={options}></Line>
    </div>
  );
};

export default Chart;
