import React, { useEffect, useRef } from "react";
import AudioPlayer from "./audioPlayer";
import "./styles/index.css";

const wave_1 = require("./assets/SVG/wave-1.svg");
const wave_2 = require("./assets/SVG/wave-2.svg");
const wave_3 = require("./assets/SVG/wave-3.svg");
const wave_4 = require("./assets/SVG/wave-4.svg");
const wave_5 = require("./assets/SVG/wave-5.svg");

const Portfolio: React.FC = () => {
  return (
    <div>
      <header>
        <img src={wave_1.default} />
        <img src={wave_2.default} />
        <img src={wave_3.default} />
        <img src={wave_4.default} />
        <img src={wave_5.default} id="shape" />
        <h1>Jesse Stratford</h1>
        <h2>Creative Software Engineer</h2>
      </header>
      <div id="audioPlayer">
        <AudioPlayer />
      </div>
    </div>
  );
};

export default Portfolio;
