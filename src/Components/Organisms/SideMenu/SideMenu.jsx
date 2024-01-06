import React from "react";
import { sidemenu } from "../../../lib/lists";

const SideMenu = () => {
  return (
    <div className="w-1/5 py-8">
      <div className="px-8 mb-8">
        <button
          type="button"
          className="px-6 py-2 bg-[#27AE60] rounded-full text-white text-xs font-semibold font-roboto"
        >
          GENERATE INVOICE
        </button>
      </div>
      <div>
        {sidemenu.map((menu, index) => (
          <div className="mb-9 text-[#647787] " key={index}>
            <h6 className="font-segoe text-[11px] ml-10 mb-4">{menu.group}</h6>
            <nav className="font-segoe text-[11px] ">
              {menu.links.map((listitem, index) => (
                <a
                  href="#"
                  className="bg-[#E8F1FD] border-l-4 border-l-[#1875F0] flex pl-10 py-3 gap-x-[14px]"
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
