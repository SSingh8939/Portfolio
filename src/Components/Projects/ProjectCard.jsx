import React from "react";
import CustomCard from "../CustomCard";

const ProjectCard = ({ className, imageUrl, title, desc }) => {
  return (
    <CustomCard className={`h-96 w-80  ${className}`}>
      <img src={imageUrl} alt="No image" className="w-full h-1/2" />
      <h3 className="text-2xl font-semibold py-2">{title}</h3>
      <p className="opacity-60">{desc}</p>
    </CustomCard>
  );
};

export default ProjectCard;
