import React from "react";
import ParticleField from "./ParticleField";

const Portfolio: React.FC = () => {
  return (
    <div>
      <ParticleField particleCount={1000} particleSize={20} color={"red"} />
    </div>
  );
};

export default Portfolio;