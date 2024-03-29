import React from "react";
import bell from "../../../assets/Group.svg";
import profile from "../../../assets/profile.jpg";

const Navbar = () => {
  return (
    <header className="px-10 flex items-center sticky h-[7.5vh] max-h-[60px] top-0 shadow-[0px_4px_10px_0px_rgba(79,79,79,0.07)] bg-white z-10 ">
      <div className="w-1/5">
        <h1 className="font-roboto text-[#1875F0] text-2xl font-black">
          TransMonitor
        </h1>
      </div>
      <div className="grow flex items-center gap-x-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
        >
          <path
            d="M11.6573 12L7.66054 8.00325C6.77101 8.80345 5.60422 9.22472 4.40868 9.17734C3.21314 9.12995 2.08334 8.61766 1.25994 7.74958C0.436537 6.8815 -0.0153972 5.72623 0.000400647 4.52986C0.0161985 3.33348 0.49848 2.19056 1.34452 1.34452C2.19056 0.49848 3.33348 0.0161985 4.52986 0.000400647C5.72623 -0.0153972 6.8815 0.436537 7.74958 1.25994C8.61766 2.08334 9.12995 3.21314 9.17734 4.40868C9.22472 5.60422 8.80345 6.77101 8.00325 7.66054L12 11.6573L11.6573 12ZM4.5954 0.492454C3.7833 0.489588 2.98862 0.727783 2.31199 1.17687C1.63536 1.62597 1.10723 2.26575 0.794463 3.01521C0.481699 3.76467 0.398378 4.59008 0.555052 5.38693C0.711726 6.18377 1.10135 6.9162 1.67457 7.49146C2.2478 8.06671 2.97884 8.45892 3.77513 8.61841C4.57142 8.7779 5.39712 8.6975 6.14768 8.38739C6.89824 8.07727 7.53989 7.5514 7.99137 6.87637C8.44285 6.20133 8.68385 5.4075 8.68386 4.5954C8.68259 3.51012 8.2519 2.46945 7.48585 1.70069C6.71981 0.931925 5.68066 0.497555 4.5954 0.492454Z"
            fill="#0E1D25"
          />
        </svg>
        <input
          type="text"
          className="text-[#979797] font-segoe placeholder:font-segoe placeholder:text-sm appearance-none outline-none bg-white w-full h-full"
          placeholder="Search..."
        />
      </div>
      <nav className="w-[27%] min-w-[383px]">
        <ul className="flex items-center gap-x-9 text-[#647787] text-base font-segoe">
          <li className="">Support</li>
          <li className="">FAQ</li>
          <li className="">
            <img src={bell} alt="" />
          </li>
          <li className="flex text-end justify-center items-center gap-x-2.5">
            <div className="">
              <p className="text-[10px] leading-none">Hello</p>
              <p className="leading-none text-base">Oluwaleke Ojo</p>
            </div>
            <img src={profile} alt="" className="rounded-full w-9 h-9" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
