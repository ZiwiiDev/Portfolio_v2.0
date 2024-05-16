import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/portfolio-v1.0.png"
          title="Portfolio v1.0"
          description="Attractive portfolio with a minimalist style, set in the winter season with artificial snow particles and dark space colors. Adapted to Christmas using simple and intuitive colors..."
        />
        <ProjectCard
          src="/peliculas.png"
          title="Interactive Movie Cards"
          description="JQuery application with cards that reference different movies and its content is changed interactively, as well as its actors, user comments about it and a configuration menu..."
        />
      </div>
    </div>
  );
};

export default Projects;
