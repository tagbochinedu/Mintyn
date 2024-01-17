import React from "react";
import { sidemenu } from "../../../lib/lists";

const SideMenu = () => {
  return (
    <div className=" py-8 sticky top-[7.5vh] h-[92.5vh]  max-w-[260px]">
      <div className="pl-3 xl:px-8 mb-8 flex items-center">
        <button
          type="button"
          className="px-3 xl:px-6 py-2 bg-[#27AE60] rounded-full text-white text-xs font-semibold font-roboto"
        >
          GENERATE INVOICE
        </button>
      </div>
      <div>
        {sidemenu.map((menu, index) => (
          <div className="mb-9 text-[#647787] " key={index}>
            <h6 className="font-segoe text-[11px] lg:ml-3 xl:ml-10 mb-4">{menu.group}</h6>
            <nav className="font-segoe text-[11px] ">
              {menu.links.map((listitem, index) => (
                <a
                  href="#"
                  className={`border-l-4  flex lg:pl-3 xl:pl-10 py-3 gap-x-[14px] ${
                    listitem.title === "Overview"
                      ? "bg-[#E8F1FD] border-l-[#1875F0]"
                      : ""
                  }`}
                  key={index}
                >
                  <img src={listitem.icon} alt="" />
                  <span>{listitem.title}</span>
                </a>
              ))}
            </nav>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideMenu;
