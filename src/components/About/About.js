import React from "react";
import "./about.css";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import Team from "./Team";

const About = () => {
  return (
    <>
      <div className="mb-3 container">
        <SectionOne />
      </div>
      <div className="mb-4 container-fluid">
        <SectionTwo embedId="rokGy0huYEA" />
      </div>
      <div className="mb-3 container">
        <Team />
      </div>
    </>
  );
};

export default About;
