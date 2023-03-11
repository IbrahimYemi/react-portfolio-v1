import React, { useContext } from "react";
import JobContext from "../Context/JobContext";
import Layout from "./layout";

export default function JobDesc() {
  const { job } = useContext(JobContext);

  return (
    <Layout>
      <div className="flex flex-col p-4 md:px-8 bg-slate-400 min-h-screen">
        <div className="rounded-sm h-40 w-40 md:h-80 md:w-80 bg-white flex items-center justify-center shadow-md text-9xl text-center font-extrabold drop-shadow-lg">
          {job?.avatar}
        </div>
        <div className="flex flex-col bg-white my-4 rounded-md p-2">
          <h1 className="text-slate-900 text-xl md:text-2xl capitalize font-extrabold">
            {job?.name}
          </h1>
          <small className="text-neutral-500 text-sm mt-2 italic font-thin font-mono mb-0">
            {job?.start} - {job?.end}
          </small>
          <small className="text-neutral-500 text-sm mt-2 font-medium font-serif mb-4 capitalize">
            Location: {job?.location}
          </small>
          <div className="my-4">
            <h3 className="text-3xl font-bold text-slate-900 mb-2">INTRODUCTION</h3>
            <p className="text-slate-700 font-medium">{job?.intro}</p>
          </div>
          <div className="my-4">
            <h3 className="text-3xl font-bold text-slate-900">STACK</h3>
            <div className="flex flex-wrap">
              {job?.stacks?.map((stack, i) => {
                return (
                  <span
                    key={i}
                    className={`bg-gradient-to-br from-neutral-500 to-slate-800 p-3 capitalize rounded-md hover:animate-pulse text-xs text-white font-bold text-center cursor-move m-2`}
                  >
                    {stack}
                  </span>
                );
              })}
            </div>
          </div>
          <div className="my-4">
            <h3 className="text-3xl font-bold text-slate-900 mb-2">
              MY RESPONSIBILITIES
            </h3>
            <p className="text-slate-700 font-medium">{job?.desc}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
