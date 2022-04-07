import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, registerables } from "chart.js";

Chart.register(ArcElement, Tooltip, ...registerables);

const option = {
  plugins: {
    legend: { display: false },

    tooltip: {
      yAlign: "bottom",

      callbacks: {
        title: function (e) {
          return e[0].label;
        },

        label(tooltipItems) {
          return `${tooltipItems.formattedValue} %`;
        },
      },
    },
  },
};

const data = {
  labels: [
    "ĐỘI NGŨ",
    "SEED ROUND",
    "PRIVATE ROUND",
    "PUBLIC ROUND",
    "ĐỐI TÁC & CỐ VẤN",
    "MARKETING",
    "TĂNG TRƯỞNG HỆ SINH THÁI",
    "THANH KHOẢN",
    "DỰ TRỮ",
  ],
  datasets: [
    {
      data: [10, 3, 12, 7, 10, 27.2, 20, 0.8, 10],
      backgroundColor: [
        "rgba(255, 99, 132, 0.5)",
        "rgba(54, 162, 235, 0.5)",
        "rgba(255, 206, 86, 0.5)",
        "rgba(75, 192, 192, 0.5)",
        "rgba(153, 102, 255, 0.5)",
        "rgba(255, 159, 64, 0.5)",
        "rgba(175, 142, 64, 0.5)",
        "rgba(238, 172, 64, 0.5)",
        "rgba(111, 222, 64, 0.5)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
        "rgba(175, 142, 64, 1)",
        "rgba(238, 172, 64, 1)",
        "rgba(111, 222, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

function Chartlive() {
  return (
    <div className="row d-flex justify-content-center">
      <div className="col-lg-12">
        <Doughnut options={option} data={data} />
      </div>
    </div>
  );
}
export default Chartlive;
