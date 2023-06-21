import React, { useEffect, useState } from "react";
import { HiXMark } from "react-icons/hi2";
import Loader from "../components/Loader";
import { ContextApi } from "../contexts/GlobalContext";

const Jokes = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    getJokes,
    jokes,
    category,
    isModelOpen,
    setIsModelOpen,
    setSelected,
  } = ContextApi();
  const { id, value } = jokes;

  // loading animation
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, [category]);

  const handleClick = () => {
    setSelected("");
    setIsModelOpen(false);
  };

  return (
    <>
      {isModelOpen && (
        <div key={id} className="bg-joke w-full mt-6 px-3 py-4 relative">
          <div>
            <HiXMark
              onClick={handleClick}
              className="absolute text-white right-3 top-2 font-semibold text-2xl cursor-pointer md:rounded-lg md:shadow-xl"
            />
            <h1 className="text-center font-bold text-white text-2xl capitalize mb-4">
              {category}
            </h1>
            <div className="p-3 text-center border-solid border-black border-[1px] text-gray-300 font-semibold">
              {isLoading ? <Loader /> : <p>" {value} "</p>}
              <button
                onClick={getJokes}
                className="bg-blue-700 px-3 py-2 rounded-md mt-4 text-sm md:text-base text-white hover:bg-blue-800 transition-all duration-200"
              >
                Next Joke
              </button>
            </div>
          </div>
          <div className="hidden md:block"></div>
        </div>
      )}
    </>
  );
};

export default Jokes;
