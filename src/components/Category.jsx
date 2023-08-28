import React from "react";
import { categories } from "../data/Data.jsx";

const Category = () => {
  return (
    <div className=" max-w-[1640px]  px-4 py-12">
      <h1>Top Rated Menu Items</h1>
      {/* categories */}
      <div>
        {categories.map((item, index) => (
          <div key={index}>
            <h2>{item.name}</h2>
            <img src={item.image} alt={item.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
