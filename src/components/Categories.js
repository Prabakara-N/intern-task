import React from "react";

const Categories = ({ categories, setCategory }) => {
  return (
    <div className="grid gap-4 md:gap-6 grid-cols-4 grid-rows-4 mt-5 md:w-[550px] px-3 md:px-0">
      {categories.map((category, index) => {
        return (
          <div
            key={index}
            onClick={() => setCategory(category)}
            className="bg-white rounded-md py-1 px-2 sm:text-xs md:text-base text-[#011936] font-semibold capitalize hover:scale-105 transition-all duration-300 cursor-pointer shadow-xl text-center"
          >
            {category}
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
