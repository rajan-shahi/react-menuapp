import React, { useState } from "react";
import { AiOutlineAlignLeft } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { TbTruckDelivery } from "react-icons/tb";
import { BiSolidWallet } from "react-icons/bi";
import { AiFillQuestionCircle } from "react-icons/ai";
import { FaProductHunt } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { BsPersonSquare } from "react-icons/bs";

function Navbar() {
  const [nav,setNav] = useState(false)
  return (
    <div className=" max-w-[1640px] mx-auto flex justify-between item-center p-4 ">
      {/* {left side} */}
      <div className=" flex item-center">
        <div onClick={() => setNav(!nav)} className=" cursor-pointer ">
          <AiOutlineAlignLeft size={30} />
        </div>
        <h1 className=" text-2xl sm:text-3xl lg:text-4xl px-2">
          Best <span>Eats</span>{" "}
        </h1>
        <div className=" hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className=" bg-black text-white rounded-full p-2 ">Delivery</p>
          <p>Pickup</p>
        </div>
        loki
        rajan
      </div>
      {/* search */}
      <div className=" bg-gray-200  rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <BiSearch size={25} />
        <input
          className=" bg-transparent p-3 focus:outline-none w-full"
          type="text"
          placeholder="search foods"
        />
      </div>
      {/* card side */}
      <button className=" bg-black text-white hidden md:flex items-center py-2 rounded-full ">
        <FaShoppingCart size={20} className=" mr-1" />
        <span className=" px-2">card</span>
      </button>
      {/* Mobile Menu */}
      {/* overlay */}
      {nav ?  <div className=" bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>  :''}
     
      {/* Side drew menu */}
      <div className={nav ?  ' fixed left-0 top-0  w-[300px] h-screen bg-white z-10 duration-300  ' : ' fixed left-[-100%] top-0  w-[300px] h-screen bg-white z-10 duration-300  '}>
        <GrClose  onClick={()=> setNav(!nav)} size={30} className=" absolute right-4 top-4 cursor-pointer" />
        <h2 className=" text-2xl p-4 ">
          Best <span className=" font-bold">Eats</span>
        </h2>
        <nav>
          <ul className=" flex flex-col p-4 text-gray-800">
            <li className=" text-xl py-4 flex">
              <TbTruckDelivery size={25} className=" mr-4" />
              Orders
            </li>
            <li className=" text-xl py-4 flex">
              <FcLike size={25} className=" mr-4" />
              Favourites
            </li>
            <li className=" text-xl py-4 flex">
              <BiSolidWallet size={25} className=" mr-4" />
              Wallet
            </li>
            <li className=" text-xl py-4 flex">
              <AiFillQuestionCircle size={25} className=" mr-4" />
              Help
            </li>
            <li className=" text-xl py-4 flex">
              <FaProductHunt size={25} className=" mr-4" />
              Promotions
            </li>
            <li className=" text-xl py-4 flex">
              <BsFillArrowDownCircleFill size={25} className=" mr-4" />
              Best One
            </li>
            <li className=" text-xl py-4 flex">
              <BsPersonSquare size={25} className=" mr-4" />
              invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
