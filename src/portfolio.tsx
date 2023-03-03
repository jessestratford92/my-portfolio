import React from "react";
import ParticleField from "./ParticleField";
import AudioPlayer from "./audioPlayer";

const Portfolio: React.FC = () => {
  return (
    <div>
      <AudioPlayer/>
      <ParticleField 
        particleCount={1000} 
        particleSize={1} 
        color={"white"} 
      />
    </div>
  );
};

export default Portfolio;