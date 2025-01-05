import React from "react";
import CustomCard from "../CustomCard";
const ExperienceCard = ({ courseName, year, collegeName, marks, desc }) => {
  return (
    <div className="flex gap-5 py-2">
      <div className="bg-blue-400 w-[1px] rounded-xl mt-1"></div>
      <CustomCard className="flex-1">
        <div className="flex justify-between p-2 items-center">
          <h1 className="text-xl font-semibold text-sky-200">{courseName}</h1>
          <h1 className="text-sky-200">{year}</h1>
        </div>
        <div className="flex justify-between p-2 items-center">
          <h3 className="opacity-75">{collegeName}</h3>
          <h3 className="opacity-75">{marks}</h3>
        </div>
        {desc}
      </CustomCard>
    </div>
  );
};

export default ExperienceCard;
