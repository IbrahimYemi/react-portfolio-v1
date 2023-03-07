import React from "react";

export default function Home() {
  return (
    <div className="relative flex flex-col w-full h-full mt-8 items-center justify-center p-0 md:p-2">
      <span className="bg-gradient-to-br bg-blue-800 from-neutral-500 to-orange-800 h-40 w-20 absolute rounded-t-full left-14"></span>
      <span className="bg-gradient-to-br bg-blue-800 from-neutral-500 to-orange-800 h-40 w-20 absolute rounded-t-full right-14"></span>
      <div className=" md:w-3/5 mx-auto w-4/5 h-32 bg-gradient-to-br from-gray-600 to-neutral-400 rounded-t-full"></div>
      <div className="relative opacity-50 hover:opacity-100 bg-gradient-to-br from-gray-600 to-neutral-400 container flex flex-col md:h-96 md:w-3/5 mx-auto w-4/5 shadow-md rounded-b-lg p-4 justify-center items-center text-center">
        <span className="bg-gradient-to-br from-neutral-300 to-gray-400 h-20 w-20 absolute rounded-tl-lg rounded-br-lg left-12 top-2"></span>
        <span className="bg-gradient-to-br from-neutral-300 to-gray-400 h-20 w-20 absolute rounded-tl-lg rounded-br-lg right-12 top-2"></span>
        <h1 className="text-2xl w-full text-gray-300 z-10">
          Making an efficient program is not hard,{" "}
          <span className="md:text-5xl text-4xl text-white font-bold block">
            WRITING THE CODE IS!
          </span>
        </h1>
        <p className=" w-full mt-6 text-neutral-300">
          Hi there, I am Yemi, a Nigeria based Fullstack Software Developer who
          have a passion for building effective and efficient softwares for
          businesses and organizations.
        </p>
        <p className="text-sm md:w-full z-10 text-neutral-300">
          With my skills, I am actively interested in contributing to the
          developement of your organization.
        </p>
        <button className="py-2 px-3 rounded-md text-neutral-200 shadow-xl hover:shadow-2xl my-6 bg-gradient-to-br from-purple-500 to-gray-500 items-start md:w-2/12 w-2/4 font-bold absolute bottom-0 md:left-8 z-30">
          Download CV
        </button>
        <span className="bg-gradient-to-br from-neutral-300 to-gray-400 h-20 w-20 absolute rounded-t-full left-1/2 bottom-0"></span>
        <span className="bg-gradient-to-br from-neutral-300 to-gray-400 h-20 w-20 absolute rounded-t-full right-1/2 bottom-0"></span>
      </div>
    </div>
  );
}
