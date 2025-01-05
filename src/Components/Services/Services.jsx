import React from "react";
import ServiceCard from "./ServiceCard";
import { FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { RiGlobalLine } from "react-icons/ri";

const Services = ({ className }) => {
  return (
    <section id="Services" className={`${className}`}>
      <h1
        className="text-center my-5 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r"
        style={{
          backgroundImage: "linear-gradient(80deg,#68f6eb, #f8ae68)",
        }}
      >
        My Services
      </h1>
      <div className="flex justify-center gap-10 flex-wrap mt-20">
        <ServiceCard
          logo={<FaReact size={36} color="orange" />}
          serviceName="Web Design"
          desc="I create visually appealing and user-friendly designs that enhance user experience and engagement. My focus is on delivering responsive and modern layouts tailored to your needs."
        />
        <ServiceCard
          logo={<FaJava size={36} color="orange" />}
          serviceName="Web Development"
          desc="Specializing in developing secure, high-performance web applications. My work ensures dynamic user experiences and smooth interactions across platforms."
        />
        <ServiceCard
          logo={<RiGlobalLine size={36} color="orange" />}
          serviceName="Software Development"
          desc="As a dedicated software developer, I specialize in designing, building, and optimizing applications that deliver seamless user experiences and robust functionality. With a strong foundation in programming languages like Java, and JavaScript, coupled with expertise in frameworks such as Spring Boot, ReactJS, I craft scalable and efficient solutions tailored to meet diverse requirements."
        />
      </div>
    </section>
  );
};

export default Services;
