import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import ContactForm from "./ContactForm";

const Contact = ({ className }) => {
  return (
    <section id="Contact" className={`${className}`}>
      <h1
        className="text-center my-5 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r"
        style={{
          backgroundImage: "linear-gradient(80deg,#68f6eb, #f8ae68)",
        }}
      >
        Contact Me
      </h1>
      <div className="flex flex-col px-10 sm:px-2 md:px-10  gap-5 sm:flex-row items-center mt-20">
        <div className="sm:w-1/2">
          <h3
            className="text-3xl font-semibold py-5 text-transparent bg-clip-text bg-gradient-to-r"
            style={{
              backgroundImage: "linear-gradient(80deg,#68f6eb, #f8ae68)",
            }}
          >
            Let's work together
          </h3>
          <p className="py-2 ">
            I’m always excited to collaborate on innovative projects and bring
            creative ideas to life. Whether you’re looking for a dedicated
            developer to build your next application, enhance your website, or
            solve complex problems, I’m here to help. Let’s join forces and
            create something impactful! Feel free to reach out to discuss your
            project, share your vision, or simply connect. Together, we can turn
            your ideas into reality.
          </p>
          <div className="flex gap-4 items-center py-2">
            <MdOutlineMailOutline color="skyblue" size={24} />
            <a
              href="mailto:singhsuraj8939@gmail.com"
              className="hover:underline"
            >
              singhsuraj8939@gmail.com
            </a>
          </div>
          <div className="flex gap-4 items-center">
            <MdOutlinePhoneInTalk color="skyblue" size={24} />
            <p>8858161856</p>
          </div>
        </div>
        <ContactForm className="sm:w-1/2 p-5" />
      </div>
    </section>
  );
};

export default Contact;
