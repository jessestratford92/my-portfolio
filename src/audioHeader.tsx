import React from "react";

interface Props {
  title: string;
}

const Audioheader: React.FC<Props> = ({ title }) => {
  return (
    <div>
      <h1 className="audio-player-header">{title}</h1>
    </div>
  );
};

export default Audioheader;
