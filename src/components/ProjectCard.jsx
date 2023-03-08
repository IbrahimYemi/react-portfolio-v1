import React from "react";

export default function ProjectCard({project}) {
  const color = [
    "bg-slate-900",
    "bg-orange-600",
    "bg-lime-500",
    "bg-blue-800",
    "bg-yellow-700",
    "bg-sky-700",
  ];

  return (
    <div className="flex flex-col md:flex-row rounded-lg shadow-slate-400 shadow-2xl w-4/5 md:w-96 md:h-auto h-fit m-1">
      <div className="relative md:w-1/2 w-full cursor-default">
        <img
          className="h-full w-full rounded-l-lg"
          src={project?.image}
          alt="project-pic"
        />
        <span className="hover:opacity-100 opacity-0 bg-opacity-50 bg-black absolute top-0 bottom-0 right-0 left-0 text-xs text-center flex items-center justify-center rounded-lg">
         <span className="text-center text-white font-bold drop-shadow p-2">{project?.note}</span>
        </span>
      </div>
      <div className="relative bg-gray-300 rounded-r-lg p-2 md:w-1/2 w-full md:h-64 pb-4">
        <div className=" drop-shadow-sm cursor-pointer w-24 hover:bg-gray-900 hover:text-white p-1 text-center rounded-md">
          <a href={project?.url} target="_blank" rel="noreferrer">
            <i className="fa-solid fa-eye"></i> view live
          </a>
        </div>
        <div className="text-left text-base text-gray-900 flex flex-col p-4">
          <h3 className="text-gray-800 font-bold text-lg">STACK</h3>
          <div className="flex flex-wrap">
            { project?.stack.map((stack,ix) => {
              return(
                <span
                className={`${color[ix]} px-2 py-1 rounded-md hover:animate-pulse text-xs text-white cursor-move m-1`}
              >
                {stack}
              </span>
              )
            })}
          </div>
        </div>
        <span className="absolute bottom-1 left-1text-sm text-slate-900 underline italic text-left font-semibold cursor-not-allowed">{project.title}</span>
      </div>
    </div>
  );
}
