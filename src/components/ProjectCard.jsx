import React from "react";

export default function ProjectCard({project, i}) {
  const color = [
    "bg-slate-900",
    "bg-orange-600",
    "bg-lime-500",
    "bg-blue-800",
    "bg-yellow-700",
    "bg-sky-700",
  ];

  return (
    <div className="flex flex-col md:flex-row rounded-lg shadow-slate-400 shadow-2xl w-4/5 md:w-96 md:h-60 h-fit m-1">
      <div className="relative md:w-1/2 w-full cursor-default">
        <img
          className="h-full w-full rounded-l-lg"
          src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg"
          alt="project-pic"
        />
        <span className="hover:opacity-100 opacity-0 bg-opacity-50 bg-black absolute top-0 bottom-0 right-0 left-0 text-xs text-center flex items-center justify-center rounded-lg">
         <span className="text-center text-white font-bold drop-shadow p-2">With my skills, I am actively interested in contributing to the
          developement of your organization.</span>
        </span>
      </div>
      <div className="bg-gray-300 rounded-r-lg p-2 md:w-1/2 w-full">
        <div className=" drop-shadow-sm cursor-pointer w-24 hover:bg-gray-900 hover:text-white p-1 text-center mb-4 rounded-md">
          <a href="d.gdgdg" target="_blank">
            <i className="fa-solid fa-eye"></i> view live
          </a>
        </div>
        <div className="text-left text-base text-gray-900 flex flex-col p-4">
          <h3 className="text-gray-800 font-bold text-lg">STACK</h3>
          <div className="flex flex-wrap">
            <span
              className={`${color[1]} px-2 py-1 rounded-md hover:animate-pulse text-xs text-white cursor-move m-1`}
            >
              button
            </span>
            <span
              className={`${color[2]} px-2 py-1 rounded-md hover:animate-pulse text-xs text-white cursor-move m-1`}
            >
              button
            </span>
            <span
              className={`${color[3]} px-2 py-1 rounded-md hover:animate-pulse text-xs text-white cursor-move m-1`}
            >
              button
            </span>
            <span
              className={`${color[4]} px-2 py-1 rounded-md hover:animate-pulse text-xs text-white cursor-move m-1`}
            >
              button
            </span>
            <span
              className={`${color[0]} px-2 py-1 rounded-md hover:animate-pulse text-xs text-white cursor-move m-1`}
            >
              button
            </span>
            <span
              className={`${color[5]} px-2 py-1 rounded-md hover:animate-pulse text-xs text-white cursor-move m-1`}
            >
              button
            </span>
          </div>
        </div>
        <span className="text-sm text-slate-900 underline italic text-left font-semibold cursor-not-allowed">My website</span>
      </div>
    </div>
  );
}
