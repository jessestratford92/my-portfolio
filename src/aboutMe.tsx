import React from "react";
import { ScrollReveal } from "reveal-on-scroll-react";

const AboutMe: React.FC = () => {
  return (
    <div className="aboutMe">
      <ScrollReveal.h1 animation="fade-in" duration={5}>
        About Me
      </ScrollReveal.h1>
      <ScrollReveal.ul animation="fade-in" duration={3}>
        <p>
          As a Software Engineer, I have come to understand the true potential
          of my technical abilities, as well as my interpersonal skills and
          team-oriented approach. This has solidified my value as a developer
          within the technology industry.
        </p>
        <p>
          I bring authenticity and a strong work ethic to the table,
          consistently striving to build meaningful and productive relationships
          with my colleagues. I believe that the most successful projects are
          born from environments that foster growth and support, and I actively
          seek out these kinds of team dynamics.
        </p>
        <p>
          My diverse range of interests, including design, fashion, electronic
          music production, contemporary dance and web development, merge
          seamlessly into my work as a developer. I am constantly inspired by my
          passion for experimenting with new sounds and incorporating
          cutting-edge design elements into my projects.
        </p>
        <p>
          I am eager to take on new challenges and continue my growth as a
          developer. My goal is to use my unique skill set to create modern and
          interactive web applications that push the boundaries of what is
          possible. I am excited for what the future holds and am eager to take
          bold steps in my career, always striving to better myself and my
          skills.
        </p>
      </ScrollReveal.ul>
      {/* <div>
        <a
          href="https://docs.google.com/document/d/e/2PACX-1vSUMn3KuY2ygVrWbwDamJpvU581E3UUv3t-1wySa502mu-PlMbSMquk5yfRN8-QpZ7Ini3xZOiw6Vdt/pub"
          target="_blank"
        >
          View CV PDF
        </a>
      </div> */}
    </div>
  );
};

export default AboutMe;
