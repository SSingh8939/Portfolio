import React from "react";

const About = ({ className }) => {
  return (
    <section id="About" className={`${className}`}>
      <h1
        className="text-center my-5 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r"
        style={{
          backgroundImage: "linear-gradient(80deg,#68f6eb, #f8ae68)",
        }}
      >
        About Me
      </h1>
      <div className="flex gap-5">
        <div className="image hidden sm:w-1/4 lg:flex justify-center items-center px-6 ">
          <img
            src="2.png"
            alt="loading..."
            className="h-[240px] w-[240px] rounded-full shadow-lg shadow-gray-400"
          />
        </div>
        <div className="px-6 sm:flex-1">
          <p className="leading-relaxed">
            Hello, I’m{" "}
            <span className="font-semibold text-orange-400"> Suraj Singh </span>
            , a passionate
            <span className="font-semibold"> Full-Stack Developer </span> with
            expertise in
            <span className="font-semibold"> ReactJS </span> and
            <span className="font-semibold"> Java Spring Boot </span>. With a
            strong foundation in web development, I bring a seamless blend of
            creativity and logic to the table, crafting intuitive user
            interfaces and robust backend systems.
          </p>
          <p className="mt-4 leading-relaxed">
            During my six-month{" "}
            <span className=" font-semibold">
              {" "}
              internship as a Software Developer{" "}
            </span>
            , I gained hands-on experience building dynamic, scalable web
            applications. I collaborated closely with cross-functional teams,
            contributing to real-world projects and honing my problem-solving
            skills in fast-paced environments.
          </p>
          <p className="mt-4 leading-relaxed">
            I take pride in writing clean, efficient, and maintainable code
            while staying up-to-date with the latest industry trends. Whether
            it's creating responsive front-end designs or optimizing backend
            APIs, I’m always driven to deliver high-quality solutions.
          </p>
          <p className="mt-4  leading-relaxed">
            When I’m not coding, I enjoy exploring new technologies,
            contributing to open-source projects, and continuously expanding my
            technical skill set.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
