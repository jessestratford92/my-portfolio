import React from "react";

interface Props {
  title: string;
  paragraph: string;
}

const AboutMe: React.FC<Props> = ({ title, paragraph }) => {
  return (
    <div className="aboutMe">
      <h1>{title}</h1>
      <p>{paragraph}</p>
    </div>
  );
};

export default AboutMe;
