import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
    const projects = [1,1,1,1,1,1,1,1,1,]
  return (
    <div>
      <Navbar />
      <div className="relative bg-[url('https://1.bp.blogspot.com/-vHF_bv61ejA/XxFMylooigI/AAAAAAAAG1M/RDUxMo489qYy6QsLQF5uyPdX70JjyEYswCLcBGAsYHQ/s1600/Blur%2BBackground%2B59.jpg')] bg-blend-overlay bg-no-repeat bg-opacity-30 bg-cover">
        <div className="flex flex-col w-full flex-wrap md:px-8 p-4 items-center justify-center z-50">
          <h1 className="text-4xl text-slate-100 font-extrabold">
            Here is a bit of projects, I've worked on!
          </h1>
          <div className="flex flex-col md:flex-row w-full flex-wrap items-center justify-center md:px-8 p-4">
            {projects.map((project, i) => {
                return (
                    <ProjectCard project={project} i={i} key={i} />
                )
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
