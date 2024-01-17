import React from "react";
import { dailyvalues } from "../../../lib/lists";
import CustomCard from "../../Atoms/CustomCard";
import TransactionList from "./TransactionList/TransactionList";
import TransactionChart from "./TransactionChart/TransactionChart";

const Body = () => {
  return (
    <section className="bg-[#F7F8FA] px-10 py-8 grow">
      <div className=" flex gap-x-2.5 justify-between">
        {dailyvalues.map((value, index) => (
          <CustomCard
            style={`flex bg-white grow max-w-[253px] ${
              index === 1 ? "mr-[14px]" : index === 2 ? "ml-14px" : ""
            }`} key={index}
          >
            <div className="">
              <h6 className="text-[#787C90] font-segoe text-xs">
                {value.title}
              </h6>
              <p className="text-[]">{value.value}</p>
            </div>
            <div className="ml-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="38"
                viewBox="0 0 64 38"
                fill="none"
              >
                <path
                  d="M9.85714 20.2551L1 11.1939V38H63V1L50.8797 11.1939L42.4887 7.79592L28.0376 14.9694L9.85714 20.2551Z"
                  fill="url(#paint0_linear_679_3)"
                />
                <path
                  d="M1 11.1939L9.85714 20.2551L28.0376 14.9694L42.4887 7.79592L50.8797 11.1939L63 1"
                  stroke="#0294FF"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_679_3"
                    x1="5.98077"
                    y1="13.257"
                    x2="5.98077"
                    y2="44.3122"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#0294FF" stopOpacity="0.126274" />
                    <stop offset="1" stopColor="white" stopOpacity="0.01" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </CustomCard>
        ))}
      </div>
      <TransactionChart />
      <TransactionList />
    </section>
  );
};

export default Body;
