import React, { useEffect, useRef, useState } from "react";
import AudioPlayer from "./audioPlayer";
import "./styles/index.css";
import Audioheader from "./audioHeader";

const wave_1 = require("./assets/SVG/wave-1.svg");
const wave_2 = require("./assets/SVG/wave-2.svg");
const wave_3 = require("./assets/SVG/wave-3.svg");
const wave_4 = require("./assets/SVG/wave-4.svg");
const wave_5 = require("./assets/SVG/wave-5.svg");

const Portfolio: React.FC = () => {
  return (
    <div>
      <header id="backgroundImage">
        <img src={wave_1.default} />
        <img src={wave_2.default} />
        <img src={wave_3.default} />
        <img src={wave_4.default} />
        <img src={wave_5.default} id="shape" />
        <h1>JESSE:STRATFORD</h1>
        <h2>creative software engineer.</h2>
      </header>
      {/* <div>
        <a
          href="https://docs.google.com/document/d/e/2PACX-1vSUMn3KuY2ygVrWbwDamJpvU581E3UUv3t-1wySa502mu-PlMbSMquk5yfRN8-QpZ7Ini3xZOiw6Vdt/pub"
          target="_blank"
        >
          View CV PDF
        </a>
      </div> */}
      <div className="component-container">
        <AudioPlayer />
        <Audioheader title={"Audio Player."} />
      </div>
    </div>
  );
};

export default Portfolio;
