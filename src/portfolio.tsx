import React, { useEffect, useRef, useState } from "react";
import AudioPlayer from "./audioPlayer";
import "./styles/index.css";
import Audioheader from "./audioHeader";
import AboutMe from "./aboutMe";
import { ScrollReveal } from "reveal-on-scroll-react";

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
        <ScrollReveal.h1 animation="fade-in" duration={10}>
          Jesse Stratford
        </ScrollReveal.h1>
        <ScrollReveal.h2 animation="fade-in" duration={10}>
          Creative Software Engineer
        </ScrollReveal.h2>
        <a
          className="top-left-text"
          href="https://docs.google.com/document/d/e/2PACX-1vSUMn3KuY2ygVrWbwDamJpvU581E3UUv3t-1wySa502mu-PlMbSMquk5yfRN8-QpZ7Ini3xZOiw6Vdt/pub"
          target="_blank"
        >
          CV
        </a>
      </header>
      <div className="component-container">
        <AudioPlayer />
        <Audioheader title={"Audio Player"} />
      </div>
      <div className="aboutMeContainer">
        <AboutMe />
      </div>
    </div>
  );
};

export default Portfolio;
