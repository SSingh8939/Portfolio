import { Card, CardBody } from "@nextui-org/react";
import React from "react";

const CustomCard = ({ className, children }) => {
  return (
    <Card
      className={`bg-transparent border-1 border-gray-900 rounded-lg shadow-md shadow-gray-800 ${className}`}
    >
      <CardBody>{children}</CardBody>
    </Card>
  );
};

export default CustomCard;
