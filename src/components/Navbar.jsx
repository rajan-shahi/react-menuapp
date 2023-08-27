import React from "react";
import { AiOutlineAlignLeft } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";

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
      <div className=" bg-gray-200  rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <BiSearch  size={25}/>
        <input className=" bg-transparent p-2 focus:outline-none w-full" type="text" placeholder="search foods" />
      </div>
      {/* card side */}
      <button className=" bg-black text-white hidden md:flex items-center py-2 rounded-full ">
        <FaShoppingCart size={20} className=" mr-1"/>
        <span className=" px-2">card</span>
      </button>
    </div>
  );
}

export default Navbar;
