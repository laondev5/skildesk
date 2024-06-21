import React from "react";

const Card = ({ children }) => {
  return (
    <div className="shadow-md rounded-md py-4 px-8 w-[24rem] bg-white">
      {children}
    </div>
  );
};

export default Card;
