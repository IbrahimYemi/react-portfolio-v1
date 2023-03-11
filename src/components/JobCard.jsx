import React, { useContext } from "react";
import { Link } from "react-router-dom";
import JobContext from "../Context/JobContext";

export default function JobCard({ job }) {
  const { handleJob } = useContext(JobContext);
  const path = job?.name?.split(" ").join("-")

  return (
    <div className="flex p-2 bg-gray-200 shadow-sm md:p-8 w-5/6 md:w-auto m-2 h-60 relative">
      <div className="rounded-sm h-20 w-20 bg-white flex items-center justify-center shadow-md text-5xl text-center">
        {job.avatar}
      </div>
      <div className="flex flex-col items-start px-2 md:w-60 w-60 h-52 relative">
        <h2 className="text-slate-900 font-bold text-lg">{job.name}</h2>
        <small className="text-neutral-500 text-xs italic font-thin font-mono mb-4">
          {job.start} - {job.end}
        </small>
        <p className="text-slate-700 font-medium">
          {job.desc.slice(0, 75) + "..."}
        </p>
        <Link to={`/experiences/${path}`} onClick={() => handleJob(job)} className="underline italic font-medium text-base text-slate-600 absolute bottom-2 left-2">
          {job.type}
        </Link>
      </div>
    </div>
  );
}
