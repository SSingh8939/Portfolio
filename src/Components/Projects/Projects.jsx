import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = ({ className }) => {
  return (
    <section id="Projects" className={`${className}`}>
      <h1
        className="text-center my-5 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r"
        style={{
          backgroundImage: "linear-gradient(80deg,#68f6eb, #f8ae68)",
        }}
      >
        My Projects
      </h1>
      <div className="flex justify-center gap-10 flex-wrap mt-20">
        <ProjectCard
          imageUrl="2.png"
          title="Task Management App (Todo List)"
          desc="ssdjf sdfjlsdk sdfjdk sdfjd sdfjkds jsdf sdfjjd  df dfjd dfj f ds fjdsfj sd fkj sdfhkdf "
        />
        <ProjectCard
          imageUrl="2.png"
          title="Task Management App (Todo List)"
          desc="ssdjf sdfjlsdk sdfjdk sdfjd sdfjkds jsdf sdfjjd  df dfjd dfj f ds fjdsfj sd fkj sdfhkdf "
        />
        <ProjectCard
          imageUrl="2.png"
          title="Task Management App (Todo List)"
          desc="ssdjf sdfjlsdk sdfjdk sdfjd sdfjkds jsdf sdfjjd  df dfjd dfj f ds fjdsfj sd fkj sdfhkdf "
        />
      </div>
    </section>
  );
};

export default Projects;
