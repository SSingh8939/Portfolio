import { Tab, Tabs } from "@nextui-org/react";
import React, { useState } from "react";
import { IoSchoolOutline } from "react-icons/io5";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import ExperienceCard from "./ExperienceCard";

const Experience = ({ className }) => {
  const [selectedKey, setSelectedKey] = useState("education");
  return (
    <section id="Experience" className={`${className}`}>
      <h1
        className="text-center my-5 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r"
        style={{
          backgroundImage: "linear-gradient(80deg,#68f6eb, #f8ae68)",
        }}
      >
        Experience
      </h1>
      <div className="mt-20 pb-5 px-10">
        <Tabs aria-label="Options" fullWidth color="default" variant="bordered">
          <Tab
            key="education"
            title={
              <div className="flex items-center space-x-2">
                <IoSchoolOutline />
                <span className="hidden sm:inline">Educational Experience</span>
                <span className="sm:hidden">Education</span>
              </div>
            }
          >
            <ExperienceCard
              courseName="Master of Computer Applications (MCA)"
              year="2024"
              collegeName="Guru Ghasidas Central University,Bilaspur (C.G.)"
              marks="8.45 CGPA"
              desc=""
            />
            <ExperienceCard
              courseName="Bachelor of Computer Applications (BCA)"
              year="2021"
              collegeName="Deen Dayal Upadhyay Gorakhpur University,Gorakpur (U.P)"
              marks="68.40%"
              desc=""
            />
            <ExperienceCard
              courseName={
                <span>
                  Intermediate (12<sup>th</sup>)
                </span>
              }
              year="2018"
              collegeName="Pawanagar Mahaveer Inter College Fazilnagar,Kushinagar (U.P)"
              marks="79.20%"
              desc=""
            />
            <ExperienceCard
              courseName={
                <span>
                  High School (10<sup>th</sup>)
                </span>
              }
              year="2016"
              collegeName="Inter College Gazipur Tamkuhi,Kushinagar (U.P)"
              marks="81.33%"
              desc=""
            />
          </Tab>
          <Tab
            key="work"
            title={
              <div className="flex items-center space-x-2">
                <LiaLaptopCodeSolid />
                <span className="hidden sm:inline">Work Experience</span>
                <span className="sm:hidden">Work</span>
              </div>
            }
          >
            <ExperienceCard
              courseName="Software Developer Intern"
              year="Duration : 6 Months"
              collegeName="Zionit Softwares Pvt. Ltd. Pune, Maharashtra"
              marks=""
              desc={
                <ul className="p-5 list-none opacity-70">
                  <li className="before:content-['➔'] before:pr-2 pb-1">
                    Contributed to the development of web applications using
                    ReactJS and Java Spring Boot, ensuring robust and scalable
                    solutions.
                  </li>
                  <li className="before:content-['➔'] before:pr-2  pb-1">
                    Designed and implemented reusable components in ReactJS to
                    enhance code maintainability and efficiency.
                  </li>
                  <li className="before:content-['➔'] before:pr-2  pb-1">
                    Developed RESTful APIs with Spring Boot, enabling seamless
                    data exchange between the frontend and backend.
                  </li>
                  <li className="before:content-['➔'] before:pr-2  pb-1">
                    Collaborated with cross-functional teams to analyze
                    requirements, troubleshoot issues, and deliver high-quality
                    software solutions.
                  </li>
                  <li className="before:content-['➔'] before:pr-2  pb-1">
                    Gained hands-on experience in version control using Git and
                    agile methodologies.
                  </li>
                </ul>
              }
            />
          </Tab>
        </Tabs>
      </div>
    </section>
  );
};

export default Experience;
