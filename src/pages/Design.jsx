import React from "react";
import { Link } from "react-router-dom";

export default function Design({ handleTheme, theme, weather, handleWeather }) {
  return (
    <div
      className={` ${
        weather
          ? "bg-gradient-to-br from-sky-800 to-neutral-400"
          : "bg-gradient-to-br w-full from-gray-800 to-slate-400"
      } h-screen overflow-hidden`}
    >
      <div className="relative flex flex-col w-screen h-screen mt-8 items-center justify-center p-0 md:p-2 ">
        {/* sun or moon */}
        <div
          className={
            weather
              ? "absolute top-3 left-8  bg-transparent"
              : "absolute top-3 right-8 bg-transparent"
          }
        >
          {weather ? (
            <i className="fa-solid fa-sun text-orange-400 shadow-orange-300 font-extrabold text-5xl bg-transparent p-4"></i>
          ) : (
            <i className="fa-solid fa-moon text-gray-300 shadow-gray-300 font-extrabold text-5xl bg-transparent p-4"></i>
          )}
        </div>

        {/* flying dove */}
        <div className="absolute top-4 w-full">
          <i className="animate-wiggle absolute top-4 fa-solid fa-dove text-gray-300 shadow-gray-300 font-extrabold text-5xl bg-transparent p-4"></i>
          <i className="animate-wiggle2 absolute top-8 fa-solid fa-dove text-blue-500 shadow-gray-300 font-extrabold text-5xl bg-transparent p-4"></i>
          <i className="animate-wiggle3 absolute top-20 fa-solid fa-dove text-lime-600 shadow-gray-300 font-extrabold text-5xl bg-transparent p-4"></i>
          <i className="animate-wiggle absolute top-44 fa-solid fa-dove text-gray-200 shadow-gray-300 font-extrabold text-5xl bg-transparent p-4"></i>
        </div>
        <div className="relative container flex h-full w-4/5 mx-auto justify-center items-center md:items-end">
          {/* pillar */}
          <div className="bg-gradient-to-br from-neutral-500 to-orange-800 hidden md:inline h-5/6 md:w-10 w-1/12 rounded-t-lg "></div>

          {/* building */}
          <div className="flex flex-col md:w-auto w-11/12">
            {/* top ceiling */}
            <div
              className={`relative mx-auto h-auto p-8 md:p-0 md:h-24 w-full ${
                !weather
                  ? "bg-gradient-to-br from-slate-600 to-orange-800"
                  : "bg-gradient-to-br from-gray-400 to-slate-900"
              } rounded-t-full flex flex-col items-center justify-center`}
            >
              <Link
                to="/get-lost"
                className="text-white font-bold text-xl items-center justify-center"
                title="check 404"
              >
                <i className="fa-solid fa-laptop"></i> Yemi{" "}
                <i className="fa-solid fa-code"></i>
              </Link>
              <span className="hidden md:block text-neutral-400 text-xs text-center w-3/5">
                Hi there, I am Yemi, a Nigeria based Fullstack Software
                Developer who have a passion for building effective and
                efficient softwares for businesses and organizations.
              </span>
              <div onClick={handleWeather} className="cursor-pointer">
                {weather ? (
                  <i
                    class={`fa-regular fa-clock absolute top-4 right-14 text-xl md:text-3xl text-slate-900`}
                  ></i>
                ) : (
                  <i class="fa-solid fa-clock absolute top-4 right-14 text-xl md:text-3xl text-slate-300"></i>
                )}
              </div>
            </div>

            {/* floor */}
            <div className="w-full md:h-36 h-28 bg-slate-500 flex justify-between items-end px-4 relative">
              {/* bulb light */}
              <div className="flex flex-col items-center justify-center absolute top-0 right-4 cursor-pointer">
                <span
                  className={`${
                    weather ? "bg-slate-300" : "bg-orange-600"
                  } block h-4 w-2 shadow-md`}
                ></span>
                <span
                  className={`${
                    weather ? "bg-slate-300" : "bg-orange-600"
                  } block h-4 w-6 rounded-full -mt-2 shadow-2xl shadow-white`}
                ></span>
              </div>
              <div className="flex flex-col items-center justify-center absolute top-0 left-4 cursor-pointer">
                <span
                  className={`${
                    weather ? "bg-slate-300" : "bg-orange-600"
                  } block h-4 w-2 shadow-md`}
                ></span>
                <span
                  className={`${
                    weather ? "bg-slate-300" : "bg-orange-600"
                  } block h-4 w-6 rounded-full -mt-2 shadow-2xl shadow-white`}
                ></span>
              </div>

              <Link
                to="/projects"
                className={`relative bg-gradient-to-br flex items-start justify-between p-2 from-neutral-500 to-slate-800 h-3/5 w-1/5 border-x-8 border-slate-900 rounded-t-lg cursor-pointer`}
              >
                <h1 className="absolute bottom-0 text-center text-white text-lg w-full">
                  {" "}
                  <i className=" text-orange-600 fa-solid fa-briefcase"></i>{" "}
                  <span className="hidden md:inline">Work</span>
                </h1>
                <div
                  className={`rounded-sm shadow-xl cursor-pointer h-2/5 w-2/5 ${
                    theme ? "bg-slate-900" : "bg-neutral-300"
                  } flex flex-col items-center justify-center`}
                ></div>
                <div
                  className={`rounded-sm shadow-xl  cursor-pointer h-2/5 w-2/5 ${
                    theme ? "bg-slate-900" : "bg-neutral-300"
                  } flex flex-col items-center justify-center`}
                ></div>
              </Link>

              <Link
                to="/stack"
                className={`relative bg-gradient-to-br flex items-start justify-between p-2 from-neutral-500 to-slate-800 h-3/5 w-1/5 border-x-8 border-slate-900 rounded-t-lg cursor-pointer`}
              >
                <h1 className="absolute bottom-0 text-center text-white text-lg w-full">
                  {" "}
                  <i className=" text-orange-600 fa-solid fa-file"></i>{" "}
                  <span className="hidden md:inline">Experiences</span>
                </h1>
                <div
                  className={`rounded-sm shadow-xl top-8 left-2 cursor-pointer h-2/5 w-2/5 ${
                    theme ? "bg-slate-900" : "bg-neutral-300"
                  } flex flex-col items-center justify-center`}
                ></div>
                <div
                  className={`rounded-sm shadow-xl top-8 right-2 cursor-pointer h-2/5 w-2/5 ${
                    theme ? "bg-slate-900" : "bg-neutral-300"
                  } flex flex-col items-center justify-center`}
                ></div>
              </Link>

              <Link
                to="/about"
                className={`relative bg-gradient-to-br flex items-start justify-between p-2 from-neutral-500 to-slate-800 h-3/5 w-1/5 border-x-8 border-slate-900 rounded-t-lg cursor-pointer`}
              >
                <h1 className="absolute bottom-0 w-full text-center text-white text-lg">
                  {" "}
                  <i className=" text-orange-600 fa-solid fa-user"></i>{" "}
                  <span className="hidden md:inline">About Me</span>
                </h1>
                <div
                  className={`rounded-sm shadow-xl cursor-pointer h-2/5 w-2/5 ${
                    theme ? "bg-slate-900" : "bg-neutral-300"
                  } flex flex-col items-center justify-center`}
                ></div>
                <div
                  className={`rounded-sm shadow-xl  cursor-pointer h-2/5 w-2/5 ${
                    theme ? "bg-slate-900" : "bg-neutral-300"
                  } flex flex-col items-center justify-center`}
                ></div>
              </Link>
            </div>

            {/* ceiling */}
            <div className="w-full h-16 bg-slate-900 text-center flex justify-center items-center">
              <h1 className="text-xs md:text-lg text-slate-300 text-center">
                Making an efficient program is not hard,{" "}
                <span className="md:text-4xl text-lg text-white font-bold block ">
                  WRITING THE CODE IS!
                </span>
              </h1>
            </div>

            {/* ground floor */}
            <div className="w-full h-52 bg-slate-500 flex items-center justify-between relative">
              {/* bulb light */}
              <div className="flex flex-col items-center justify-center absolute top-0 right-4 cursor-pointer">
                <span
                  className={`${
                    weather ? "bg-slate-300" : "bg-orange-600"
                  } block h-4 w-2 shadow-md`}
                ></span>
                <span
                  className={`${
                    weather ? "bg-slate-300" : "bg-orange-600"
                  } block h-4 w-6 rounded-full -mt-2 shadow-2xl shadow-white`}
                ></span>
              </div>
              <div className="flex flex-col items-center justify-center absolute top-0 left-4 cursor-pointer">
                <span
                  className={`${
                    weather ? "bg-slate-300" : "bg-orange-600"
                  } block h-4 w-2 shadow-md`}
                ></span>
                <span
                  className={`${
                    weather ? "bg-slate-300" : "bg-orange-600"
                  } block h-4 w-6 rounded-full -mt-2 shadow-2xl shadow-white`}
                ></span>
              </div>

              <div
                className={`mx-2 rounded-lg shadow-xl h-24 w-1/6 md:w-20 ${
                  theme ? "bg-slate-900" : "bg-neutral-300"
                } flex flex-col items-center justify-center`}
              >
                <span className="rounded-sm shadow-xl h-1 w-4/5 bg-orange-900 mb-4 block"></span>
                <span className="rounded-sm shadow-xl h-1 w-4/5 bg-orange-900 my-0"></span>
                <span className="rounded-sm shadow-xl h-1 w-4/5 bg-orange-900 my-4 block"></span>
                <span className="rounded-sm shadow-xl h-1 w-4/5 bg-orange-900 my-0"></span>
              </div>

              {/* enterance */}
              <div className="relative mx-5 ml-10 bg-gradient-to-br from-neutral-500 to-slate-800 h-4/5 md:w-72 w-2/6 border-x-8 border-slate-900 rounded-t-lg">
                {/* small tv */}
                <div className="absolute rounded-sm shadow-xl top-4 left-3 md:top-8 md:left-8 md:h-10 md:w-14 h-4 w-8 bg-slate-900">
                  {/* switch light */}
                  <div
                    className="w-6 h-4 rounded cursor-pointer bg-slate-500 shadow-inner shadow-gray-400 text-xs text-gray-700 text-center"
                    onClick={handleTheme}
                  >
                    {!theme ? (
                      <i className="fa-solid fa-eye"></i>
                    ) : (
                      <i className="fa-solid fa-eye-slash"></i>
                    )}
                  </div>
                </div>

                {/* door */}
                <div className="absolute cursor-pointer rounded-tl-lg shadow-xl bottom-0 right-0 h-20 w-12 md:h-40 md:w-24 bg-orange-900">
                  {/* knob */}
                  <span className="absolute rounded-sm shadow-xl top-4 left-4 h-1 w-3 bg-slate-900"></span>
                  <span className="absolute rounded-sm shadow-xl top-12 left-4 h-4 w-1 bg-slate-900"></span>
                  <span className="absolute shadow-xl bottom-2 left-2 p-1 bg-slate-900 text-white text-xs rounded-full animate-bounce">
                    <i className="fa-solid fa-arrow-down"></i>
                  </span>
                </div>
              </div>

              {/* windows right */}
              <div className="flex items-center w-2/6 md:w-60 justify-between">
                <div
                  className={`relative rounded-lg shadow-xl h-24 mx-4 w-1/3 ${
                    theme ? "bg-slate-900" : "bg-neutral-300"
                  } flex flex-col items-center justify-center`}
                >
                  <span className="rounded-sm shadow-xl h-1 w-4/5 bg-orange-900 mb-4 block"></span>
                  <span className="rounded-sm shadow-xl h-1 w-4/5 bg-orange-900 my-0"></span>
                  <span className="rounded-sm shadow-xl h-1 w-4/5 bg-orange-900 my-4 block"></span>
                  <span className="rounded-sm shadow-xl h-1 w-4/5 bg-orange-900 my-0"></span>
                </div>
                <div
                  className={`relative rounded-lg shadow-xl  h-24 mx-4 w-1/3 ${
                    theme ? "bg-slate-900" : "bg-neutral-300"
                  } flex flex-col items-center justify-center`}
                >
                  <span className="rounded-sm shadow-xl h-1 w-4/5 bg-orange-900 mb-4 block"></span>
                  <span className="rounded-sm shadow-xl h-1 w-4/5 bg-orange-900 my-0"></span>
                  <span className="rounded-sm shadow-xl h-1 w-4/5 bg-orange-900 my-4 block"></span>
                  <span className="rounded-sm shadow-xl h-1 w-4/5 bg-orange-900 my-0"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
