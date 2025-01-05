import React from "react";
import CustomCard from "../CustomCard";

const SkillCard = ({ icon, text, className }) => {
  return (
    <CustomCard className={`${className} flex flex-col w-40 h-48`}>
      {icon}
      <h2 className="h-10 text-center text-xl font-semibold">{text}</h2>
    </CustomCard>
  );
};

export default SkillCard;
