import React from "react";
import { AiOutlineAlignLeft } from "react-icons/ai";

function Navbar() {
  return (
    <div className=" max-w-[1640px] mx-auto flex justify-between item-center p-4 ">
      {/* {left side} */}
      <div className=" flex item-center">
        <div>
          <AiOutlineAlignLeft size={30} />
        </div>
        <h1>
          Best <span>Eats</span>{" "}
        </h1>
        <div>
          <p>Delivery</p>
          <p>Pickup</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
