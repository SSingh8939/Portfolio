import React from "react";
import CustomCard from "../CustomCard";

const ServiceCard = ({ logo, serviceName = "Title", desc }) => {
  return (
    <CustomCard className="h-96 w-80 p-5">
      {logo}
      <h2 className="text-2xl font-semibold mt-3">{serviceName}</h2>
      <p className="text-white opacity-60 mt-3">{desc}</p>
    </CustomCard>
  );
};

export default ServiceCard;
