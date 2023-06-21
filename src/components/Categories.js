import React from "react";
import { ContextApi } from "../contexts/GlobalContext";

const Categories = () => {
  const {
    categories,
    setCategory,
    setIsModelOpen,
    selected,
    setSelected,
    setIsLoading,
  } = ContextApi();

  return (
    <div className="grid gap-4 md:gap-8 lg:gap-10 grid-cols-4 grid-rows-4 md:grid-cols-2 md:grid-rows-8 lg:grid-cols-4 lg:grid-rows-4 mt-5 px-3 md:px-0 md:place-items-center">
      {categories.map((category, index) => {
        return (
          <div
            key={index}
            onClick={() => {
              setSelected(category);
              setCategory(category);
              setIsModelOpen(true);
              setIsLoading(true);
              setTimeout(() => {
                setIsLoading(false);
              }, 1000);
            }}
            className={`${
              selected === category
                ? "bg-slate-400 text-white"
                : "bg-white text-[#011936]"
            } rounded-md py-1 px-2 sm:text-xs md:text-xl lg:text-2xl font-semibold capitalize hover:scale-105 transition-all duration-300 cursor-pointer shadow-xl text-center md:w-[220px] md:h-[130px] lg:w-[200px] lg:h-[120px] xl:w-[230px] xl:h-[130px] md:flex flex-col items-center justify-center`}
          >
            {category}
            <p className="hidden md:block text-[12px] font-light text-violet-800">
              Unlimited Jokes On {category}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
