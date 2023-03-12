import React from "react";
import { Link } from "react-router-dom";
import ProjectDetails from "../assets/project";
import stacks from "../assets/stacks";
import Layout from "../components/layout";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
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
      <div className="relative flex flex-col w-full min-h-screen bg-neutral-100 p-0 md:p-2">
        <div className="flex flex-col justify-between md:flex-row md:w-3/5 mx-auto mt-10">
          <div className="relative flex flex-col md:1/2 mx-auto w-4/5 p-4 text-left">
            <h1 className="text-2xl w-full text-gray-900 z-10">
              Making an efficient program is not hard,{" "}
              <span className="md:text-5xl text-4xl text-slate-900 font-bold block">
                WRITING THE CODE IS!
              </span>
            </h1>
            <div className="bg-slate-800 rounded text-xl text-white px-2 py-1 w-fit my-1">
              <span className="hot">
                <i className="fa-solid fa-circle-question"></i>
              </span>{" "}
              I'm an efficient Software Developer!
            </div>
            <p className=" w-full mt-2 text-neutral-900 font-medium text-lg">
              Hi there, I am Yemi, a Nigeria based Fullstack Software Developer
              who have a passion for building effective and efficient softwares
              for businesses and organizations.
              <br />
              With my skills, I am actively interested in contributing to the
              developement of your organization.
            </p>
            <span className="mt-4">
              <a
                href="https://drive.google.com/folderview?id=17hvSDL9nEajCblZ0raJa_T6KxbxsoqMX"
                className="py-2 px-3 rounded-md text-neutral-200 shadow-xl hover:shadow-2xl my-6 bg-gradient-to-br from-purple-500 to-gray-500 items-start w-fit font-bold"
              >
                Download CV
              </a>
              <a
                href="mailto:ibrahimsharafadeen95@gmail.com?Subject=Hello Yemi, Let's work together!"
                className="py-2 px-3 rounded-md text-neutral-200 shadow-xl hover:shadow-2xl my-6 bg-gradient-to-br from-purple-500 to-gray-500 items-start w-fit font-bold ml-2"
              >
                Hire me!
              </a>
            </span>
          </div>
          <div className="flex items-center justify-center md:w-1/2 w-4/5 mx-auto">
            <img
              className="h-auto w-full mx-auto"
              src="https://ibrahimyemiold.netlify.app/images/my-image.png"
              alt="my handsome face"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl md:text-4xl text-slate-900 font-extrabold mt-4">
            My Skills
          </h1>
          <div className="flex flex-wrap md:w-3/5 my-4 mx-auto rounded-lg bg-white shadow items-center justify-center p-8 ">
            {stacks.map((stack, i) => {
              const random = Math.floor(Math.random() * color.length);
              return (
                <span
                  key={i}
                  className={`${color[random]} p-4 capitalize rounded-md hover:animate-pulse text-xs text-white font-bold text-center cursor-move m-2`}
                >
                  {stack}
                </span>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col md:w-4/5 mx-auto">
          <span className="w-full flex justify-between items-center">
            <h1 className="text-xl md:text-2xl text-slate-900 font-extrabold md:mb-4">
              Some of my works
            </h1>
            <div className=" drop-shadow-sm cursor-pointer w-24 hover:bg-gray-900 hover:text-white p-1 text-center rounded-md font-semibold">
              <Link to="/projects">
                <i className="fa-solid fa-eye"></i> view all
              </Link>
            </div>
          </span>
          <div className="flex flex-col md:flex-row w-5/6 mx-auto flex-wrap items-center justify-center md:px-2 p-1">
            <ProjectCard project={ProjectDetails[0]} />
            <ProjectCard project={ProjectDetails[1]} />
            <ProjectCard project={ProjectDetails[5]} />
            <ProjectCard project={ProjectDetails[7]} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
