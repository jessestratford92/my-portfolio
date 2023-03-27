import React from "react";
import { ScrollReveal } from "reveal-on-scroll-react";

interface Props {
  title: string;
}

const Audioheader: React.FC<Props> = ({ title }) => {
  return (
    <div>
      <ScrollReveal.h1
        animation="fade-in"
        duration={5}
        className="audio-player-header"
      >
        {title}
      </ScrollReveal.h1>
    </div>
  );
};

export default Audioheader;
