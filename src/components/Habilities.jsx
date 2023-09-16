import React from "react";
import { habilitiesData } from "../Constants";
import Progress from "./Progress";

const Habilities = ({ title }) => {
  return (
    <div className="block-container">
      <h2>{title}</h2>
      <div className="habilities-container">
        {habilitiesData.map(({ title, value }, index) => (
          <Progress title={title} value={value} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Habilities;
