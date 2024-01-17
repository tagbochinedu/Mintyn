import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
  Filler,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
  Filler
);

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Dataset 1",
      data: [420, 330, 520, 460, 690, 240],
      borderColor: "rgba(2, 148, 255, 0.45)",
      borderWidth: 0.5,
      pointRadius: 0,
      fill: "start",
      backgroundColor: (context) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 90, 15, 300);
        gradient.addColorStop(0, "rgba(2, 148, 255, 0.45)");
        gradient.addColorStop(1, "#fff");
        return gradient;
      },
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      display: false,
      grid: {
        display: false,
      },
    },

    x: {
      position: "top",
      ticks: {
        beginAtZero: true,
        font: {
          size: 14,
          weight: "bold",
          color: "black",
        },
      },
      grid: {
        offset: true,
        color: "#CFE8FB",
      },
      border: {
        width: 0,
      },
    },
  },
};

const TransactionChart = () => {
  return (
    <div>
      <div className="my-12 flex items-stretch gap-x-1 border border-[#eef8fd]">
        <div className="w-3/5 bg-white pl-[34px] pt-[26px]">
          <div className="pb-16 flex justify-between items-center pr-[30px]">
            <p className="text-[#4F4F4F] text-[18px] font-bold font-segoe">
              Today: 5, Aug 2018
            </p>
            <div className="flex gap-x-10 items-center">
              <div className="flex items-center gap-x-5 rounded-[4px] border border-[#cccfda] px-[11px] py-2.5">
                <p className="text-[#7f8fa4] text-xs">1 Jan - 1 Jun</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="4"
                  viewBox="0 0 6 4"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.82714 1.1676L3.59977 3.7481C3.40479 3.97367 2.76545 4.20514 2.30836 3.6872L0.16649 1.20594C-0.0554965 0.948797 -0.0554965 0.532059 0.16649 0.275476C0.387976 0.0183277 0.747953 0.0183277 0.969439 0.275476L2.94832 2.56725L4.99169 0.200474C5.22217 -0.0668244 5.59665 -0.0668244 5.82714 0.200474C6.05762 0.467208 6.05762 0.900863 5.82714 1.1676Z"
                    fill="#CCCFD4"
                  />
                </svg>
              </div>
              <div className="flex gap-x-3">
                <button className="bg-gradient-to-r border-[#ced0da] border from-[#F2F4F7] to-white w-[32px] h-[27px] flex items-center justify-center rounded-[4px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="10"
                    viewBox="0 0 6 4"
                    fill="none"
                    className=" rotate-90"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.82714 1.1676L3.59977 3.7481C3.40479 3.97367 2.76545 4.20514 2.30836 3.6872L0.16649 1.20594C-0.0554965 0.948797 -0.0554965 0.532059 0.16649 0.275476C0.387976 0.0183277 0.747953 0.0183277 0.969439 0.275476L2.94832 2.56725L4.99169 0.200474C5.22217 -0.0668244 5.59665 -0.0668244 5.82714 0.200474C6.05762 0.467208 6.05762 0.900863 5.82714 1.1676Z"
                      fill="#CCCFD4"
                    />
                  </svg>
                </button>
                <button className="bg-gradient-to-r border-[#ced0da] border from-[#F2F4F7] to-white w-[32px] h-[27px] flex items-center justify-center rounded-[4px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="10"
                    viewBox="0 0 6 4"
                    fill="none"
                    className=" -rotate-90"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.82714 1.1676L3.59977 3.7481C3.40479 3.97367 2.76545 4.20514 2.30836 3.6872L0.16649 1.20594C-0.0554965 0.948797 -0.0554965 0.532059 0.16649 0.275476C0.387976 0.0183277 0.747953 0.0183277 0.969439 0.275476L2.94832 2.56725L4.99169 0.200474C5.22217 -0.0668244 5.59665 -0.0668244 5.82714 0.200474C6.05762 0.467208 6.05762 0.900863 5.82714 1.1676Z"
                      fill="#CCCFD4"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <Line data={data} options={options}></Line>
        </div>
        <div className="w-2/5 flex flex-col gap-y-1 ">
          <div className="bg-white p-6 border h-1/2">
            <p className="font-bold text-[#262626] text-sm">Orders</p>
            <div className="flex w-full py-4">
              <span className="bg-[#27AE60] p-1 w-4/5 rounded-l-lg"></span>
              <span className="bg-[#FDC203] p-1 w-1/5 rounded-r-lg"></span>
            </div>
            <p className="font-normal text-[#262626] font-segoe">
              Pending Orders:{" "}
              <span className="text-[#EBC315] font-bold"> 20</span>
            </p>
            <p className="py-3 font-normal text-[#262626] font-segoe">
              Reconcilled Orders:{" "}
              <span className="text-[#27AE60] font-bold"> 80</span>
            </p>
            <p className="font-normal text-[#262626] font-segoe">
              Total Orders:{" "}
              <span className="text-[#1860EC] font-bold"> 100</span>
            </p>
          </div>
          <div className="bg-white p-6 border h-1/2">
            <p className="font-bold text-[#262626] text-sm">Payments</p>
            <div className="flex w-full py-4">
              <span className="bg-[#27AE60] p-1 w-4/5 rounded-l-lg"></span>
              <span className="bg-[#FDC203] p-1 w-1/5 rounded-r-lg"></span>
            </div>
            <p className="font-normal text-[#262626] font-segoe">
              Un-reconcilled Payments:{" "}
              <span className="text-[#EBC315] font-bold"> 20</span>
            </p>
            <p className="py-3 font-normal text-[#262626] font-segoe">
              Reconcilled Payments:{" "}
              <span className="text-[#27AE60] font-bold"> 80</span>
            </p>
            <p className="font-normal text-[#262626] font-segoe">
              Total Payments:{" "}
              <span className="text-[#1860EC] font-bold"> 100</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionChart;
