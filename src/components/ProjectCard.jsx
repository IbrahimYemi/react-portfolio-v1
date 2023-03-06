import React from "react";

export default function ProjectCard() {
  return (
    <div className="flex flex-col rounded-lg bg-white shadow-lg w-56">
      <img
        className="h-40 w-56 rounded-lg"
        src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg"
        alt="project-pic"
      />
      <div className=" drop-shadow-sm cursor-pointer w-28 hover:bg-gray-900 hover:text-white p-1 text-center mx-1 my-4 rounded-md">
        <a href="d.gdgdg" target='_blank'><i className="fa-solid fa-eye"></i> view live</a>
      </div>
      <div className="text-left text-base text-gray-900">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit, rem voluptatem necessitatibus vero impedit cumque 
      </div>
    </div>
  );
}
