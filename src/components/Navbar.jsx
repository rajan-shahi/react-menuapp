import React from "react";
import { AiOutlineAlignLeft } from "react-icons/ai";

function Navbar() {
  return (
    <div className=" max-w-[1640px] mx-auto flex justify-between item-center p-4 ">
      {/* {left side} */}
      <div className=" flex item-center">
        <div className=" cursor-pointer ">
          <AiOutlineAlignLeft size={30} />
        </div>
        <h1 className=" text-2xl sm:text-3xl lg:text-4xl px-2">
          Best <span>Eats</span>{" "}
        </h1>
        <div className=" hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className=" bg-black text-white rounded-full p-2 ">Delivery</p>
          <p>Pickup</p>
        </div>
      </div>
      {/* search */}
    </div>
  );
}

export default Navbar;
