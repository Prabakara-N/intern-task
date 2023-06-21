import React from "react";
import { HiXMark } from "react-icons/hi2";
import Loader from "../components/Loader";
import { ContextApi } from "../contexts/GlobalContext";
import Modal from "./Modal";

const Jokes = () => {
  const {
    getJokes,
    jokes,
    category,
    isModelOpen,
    setIsModelOpen,
    setSelected,
    isLoading,
    setIsLoading,
  } = ContextApi();

  const { id, value } = jokes;

  const closeModal = () => {
    setSelected("");
    setIsModelOpen(false);
  };

  const handleJokes = () => {
    setIsLoading(true);
    getJokes();
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <>
      <div key={id}>
        <div className="md:hidden">
          <div className={`${isModelOpen ? "open" : "close"}`}>
            <div className="bg-joke w-full mt-8 px-3 py-4 relative">
              <div>
                <HiXMark
                  onClick={closeModal}
                  className="absolute text-white right-3 top-2 font-semibold text-2xl cursor-pointer md:rounded-lg md:shadow-xl"
                />
                <h1 className="text-center font-bold text-white text-2xl capitalize mb-4">
                  {category}
                </h1>
                <div className="p-3 text-center border-solid border-black border-[1px] text-gray-300 font-semibold">
                  {isLoading ? <Loader /> : <p>“ {value} ”</p>}
                  <button
                    onClick={handleJokes}
                    className="bg-blue-700 px-3 py-2 rounded-md mt-4 text-sm md:text-base text-white hover:bg-blue-800 transition-all duration-200"
                  >
                    Next Joke
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <Modal />
        </div>
      </div>
    </>
  );
};

export default Jokes;
