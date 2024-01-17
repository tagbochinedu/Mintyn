import React, { useState } from "react";

const CustomDropdown = ({ data, dataHandler }) => {
  const [selectValue, setSelectValue] = useState("All");
  const [select, setSelect] = useState(false);

  const dataChangeHandler = (datum) => {
    dataHandler && dataHandler(datum);
    setSelect(false);
    setSelectValue(datum);
  };

  return (
    <>
      <div className=" relative w-[150px]">
        <div
          className="flex justify-end items-center px-3 h-[33px] bg-[#F7F8FA] border border-[#ced0da] rounded-[2px]"
          onClick={() => {
            setSelect(!select);
          }}
        >
          <span className="flex grow text-gray-600 text-[13px]">
            {selectValue}
          </span>
          <svg
            width="7"
            height="4"
            viewBox="0 0 16 11"
            xmlns="http://www.w3.org/2000/svg"
            className={`transition ${
              select ? "rotate-180 fill-[#1875F0]" : "rotate-0 fill-none"
            }`}
          >
            <path
              d="M8 10.5332L0 2.53317L1.86667 0.666504L8 6.79984L14.1333 0.666504L16 2.53317L8 10.5332Z"
              fill="#D2D5DA"
            />
            <path
              d="M8 10.5332L0 2.53317L1.86667 0.666504L8 6.79984L14.1333 0.666504L16 2.53317L8 10.5332Z"
              fill="black"
              fillOpacity="0.2"
            />
            <path
              d="M8 10.5332L0 2.53317L1.86667 0.666504L8 6.79984L14.1333 0.666504L16 2.53317L8 10.5332Z"
              fill="black"
              fillOpacity="0.2"
            />
          </svg>
        </div>

        <div
          className={`bg-white absolute z-10 left-0 right-0  transition-all duration-150 overflow-hidden  shadow-md ${
            select
              ? "h-[165px] border-lghtgry border border-t-transparent rounded-b-[6px]"
              : "border-transparent h-0"
          }`}
        >
          {data.map((datum, index) => (
            <p
              className={`text-[#414042] h-[33px] flex items-center px-[18px] text-[13px]  transition-all duration-100 hover:bg-[#f4f4f4] ${
                selectValue === datum ? "bg-[#f4f4f4]" : ""
              }`}
              key={index}
              onClick={() => {
                dataChangeHandler(datum.value);
              }}
            >
              {datum.title}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default CustomDropdown;
