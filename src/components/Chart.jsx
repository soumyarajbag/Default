import React from "react";
import { Line } from "react-chartjs-2";
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
  const data = {
    labels: [7, 14, 21, 28],
    datasets: [
      {
        label: "Stock Price v/s Days",
        data: [3, 6, 2, 2],
        backgroundColor: (context) => {
          const bgColor = [
            "rgba(255 , 26 , 104 , 0.2)",
            "rgba(54 , 162 , 235 , 0.2)",
            "rgba(255 , 206 , 86 , 0.2 )",
            "rgba(75 , 192 , 192 , 0.2 )",
            "rgba(153 , 102 , 255 ,0.2)",
            "rgba(255 , 159 , 64 , 0.2 )",
            "rgba(0,0,0,0.2)",
          ];
          if (!context.chart.chartArea) {
            return;
          }
          console.log(context.chart.chartArea);
          const {
            ctx,
            data,
            chartArea: { top, bottom },
          } = context.chart;
          const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);

          gradientBg.addColorStop(0, bgColor[0]);
          gradientBg.addColorStop(0.5, bgColor[1]);
          gradientBg.addColorStop(1, bgColor[2]);
          return gradientBg;
        },
        borderColor: [
          "rgba(255 , 26 , 104 , 0.2)",
          "rgba(54 , 162 , 235 , 0.2)",
          "rgba(255 , 206 , 86 , 0.2 )",
          "rgba(75 , 192 , 192 , 0.2 )",
          "rgba(153 , 102 , 255 ,0.2)",
          "rgba(255 , 159 , 64 , 0.2 )",
          "rgba(0,0,0,0.2)",
        ],
        pointBorderColor: "white",
        tension: 0.3,
        fill: true,
        pointHoverRadius: 7.5,

        pointBackgroundColor: ["red", "green", "blue", "yellow", "purple"],
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
        max: 10,
        min: 0,

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
    <div className="min-[280px]:h-[150px] min-[280px]:w-[250px] min-[360px]:h-[250px]  min-[360px]:w-[350px] min-[390px]:w-[370px] md:h-[400px] md:w-[700px]">
      <Line data={data} options={options}></Line>
    </div>
  );
};

export default Chart;
