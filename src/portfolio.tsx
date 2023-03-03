import React from "react";
import ParticleField from "./ParticleField";
import AudioPlayer from "./audioPlayer";
import './styles/index.css';
import './styles/audioPlayer.css'

const Portfolio: React.FC = () => {
  return (
    <div>
      <h1>ADAGIO</h1>
      <AudioPlayer />
    </div>
  );
};

export default Portfolio;