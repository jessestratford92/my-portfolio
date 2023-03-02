import React from "react";
import ParticleField from "./ParticleField";

const Portfolio: React.FC = () => {
  return (
    <div>
      <ParticleField particleCount={100000} particleSize={1} color={"green"} />
    </div>
  );
};

export default Portfolio;