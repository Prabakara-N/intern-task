import React from "react";
import { HiXMark } from "react-icons/hi2";
import { ContextApi } from "../contexts/GlobalContext";
import Loader from "./Loader";

const Modal = () => {
  const {
    isModelOpen,
    setIsModelOpen,
    jokes,
    getJokes,
    isLoading,
    category,
    setSelected,
    setIsLoading,
  } = ContextApi();

  const { value } = jokes;

  const handleClose = () => {
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
      {isModelOpen && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-2xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-joke outline-none focus:outline-none">
                {/*header*/}
                <div className="relative text-center p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold text-center text-white capitalize">
                    {category}
                  </h3>
                  <button
                    className="absolute top-3 right-3 p-1 ml-auto bg-transparent border-0 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setIsModelOpen(false)}
                  >
                    <HiXMark
                      onClick={handleClose}
                      className="text-white text-3xl"
                    />
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto w-[42rem]">
                  {isLoading ? (
                    <Loader />
                  ) : (
                    <p className="text-white md:text-xl lg:text-2xl text-center">
                      “ {value} ”
                    </p>
                  )}
                </div>
                {/*footer*/}
                <div className="text-center p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="bg-blue-600 text-white active:bg-blue-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleJokes}
                  >
                    Next Joke
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </>
  );
};

export default Modal;
