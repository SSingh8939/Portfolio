import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { Button, Link } from "@nextui-org/react";
const Home = ({ className }) => {
  return (
    <section
      id="Home"
      className={`flex flex-col justify-center sm:items-center sm:flex-row gap-2 ${className} `}
    >
      <div className="textbox sm:w-1/2 px-6">
        <div className="">
          <p className="text-xl">Hello! I'm</p>
          <p className="text-3xl font-semibold text-orange-400">Suraj Singh</p>
          <p className="text-xl font-semibold text-sky-200 pt-1">
            Software Developer
          </p>
        </div>
        <div className=" text-lg pt-5">
          <p>
            I am an MCA graduate with a strong passion for software development,
            specializing in creating dynamic and user-friendly web applications.
            With expertise in technologies like ReactJS, Java, Spring Boot, and
            Tailwind CSS
          </p>
        </div>
        <div className="mt-5 flex items-center gap-8">
          <a
            href="https://www.instagram.com/codewizsuraj/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram color="skyblue" size={27} />
          </a>
          <a
            href="https://wa.me/8858161856"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp color="skyblue" size={27} />
          </a>
          <a
            href="https://github.com/SSingh8939"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub color="skyblue" size={27} />
          </a>
          <a
            href="https://www.linkedin.com/in/suraj-singh-3ab77417b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CiLinkedin color="skyblue" size={28} />
          </a>
        </div>
        <div className="mt-5 flex gap-8">
          <Button
            as={Link}
            href="#Contact"
            variant="bordered"
            className="hover:bg-[#232323] transition-colors duration-1000"
          >
            Hire me
          </Button>
        </div>
      </div>
      <div className="image sm:w-1/2 flex justify-center px-6">
        <img
          src="1.png"
          alt="loading..."
          className="h-[380px] w-[380px] sm:h-[240px] sm:w-[240px] md:h-[320px] md:w-[320px]  lg:h-[380px] lg:w-[380px] rounded-full shadow-lg shadow-white"
        />
      </div>
    </section>
  );
};

export default Home;
