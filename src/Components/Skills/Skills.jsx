import React from "react";
import SkillCard from "./SkillCard";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiReactjsLine } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { RiJavaLine } from "react-icons/ri";
import { SiSpringboot } from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";

const Skills = ({ className }) => {
  return (
    <section id="Skills" className={`${className}`}>
      <h1
        className="text-center my-5 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r"
        style={{
          backgroundImage: "linear-gradient(80deg,#68f6eb, #f8ae68)",
        }}
      >
        My Skills
      </h1>
      <div className="flex flex-wrap justify-center gap-20 mt-20 ">
        <SkillCard
          icon={<FaHtml5 color="orange" className="h-full w-full" />}
          text="HTML 5"
          className="w-40 h-48"
        />
        <SkillCard
          icon={<FaCss3Alt color="orange" className="h-full w-full" />}
          text="CSS 3"
          className="w-40 h-48"
        />
        <SkillCard
          icon={<IoLogoJavascript color="orange" className="h-full w-full" />}
          text="Javascript"
          className="w-40 h-48"
        />
        <SkillCard
          icon={<FaBootstrap color="orange" className="h-full w-full" />}
          text="Bootstrap"
          className="w-40 h-48"
        />
        <SkillCard
          icon={<RiReactjsLine color="orange" className="h-full w-full" />}
          text="React JS"
          className="w-40 h-48"
        />
        <SkillCard
          icon={<RiJavaLine color="orange" className="h-full w-full" />}
          text="Java"
          className="w-40 h-48"
        />
        <SkillCard
          icon={<SiSpringboot color="orange" className="h-full w-full" />}
          text="Springboot"
          className="w-40 h-48"
        />
        <SkillCard
          icon={<TbBrandMysql color="orange" className="h-full w-full" />}
          text="MySQL"
          className="w-40 h-48"
        />
      </div>
    </section>
  );
};

export default Skills;
