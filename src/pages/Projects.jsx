import React from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectDetails from "../assets/project";
import Layout from "../components/layout";
import stacks from "../assets/stacks";

export default function Projects() {
  const color = [
    "bg-slate-900",
    "bg-gradient-to-br from-neutral-500 to-slate-800",
    "bg-orange-600",
    "bg-lime-500",
    "bg-gradient-to-br from-pink-500 to-blue-800",
    "bg-blue-800",
    "bg-gradient-to-br from-red-500 to-sky-800",
    "bg-sky-700",
  ];

  return (
    <Layout>
      <div className="relative bg-neutral-200 bg-blend-overlay bg-no-repeat bg-opacity-30 bg-cover">
        <div className="flex flex-col w-full flex-wrap md:px-8 p-4 items-center justify-center z-50">
          <h1 className="text-2xl md:text-4xl text-slate-900 font-extrabold md:w-3/5 text-center mb-4">
            Here are my skills and some projects I've worked on!
          </h1>
          <div className="flex flex-wrap md:w-3/5 my-4 mx-auto rounded-lg bg-white shadow items-center justify-center p-8 ">
            {stacks.map((stack, i) => {
              const random = Math.floor(Math.random() * color.length);
              return (
                <span
                  key={i}
                  className={`${color[random]} p-3 capitalize rounded-md hover:animate-pulse text-xs text-white font-bold text-center cursor-move m-2`}
                >
                  {stack}
                </span>
              );
            })}
          </div>
          <div className="flex flex-col md:flex-row w-full flex-wrap items-center justify-center md:px-8 p-4">
            {ProjectDetails.map((project, i) => {
              return <ProjectCard project={project} key={i} />;
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}
