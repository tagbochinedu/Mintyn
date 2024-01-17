import React from "react";

const CustomCard = ({ style, children }) => {
  return (
    <div className={`rounded border-[#eef8fd] border p-5 ${style}`}>
      {children}
    </div>
  );
};

export default CustomCard;
