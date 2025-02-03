/* eslint-disable no-unused-vars */
import React from "react";
import ExpertiseCard from "./ExpertiseCard";
import CardProjectSuccess from "./CardProjectSuccess";
import InformationAbout from "./InformationAbout";

const About = ({ id }) => {
  return (
    <>
      <section
        className="about-container"
        id={id}
        style={{
          margin: "250px 0 0 38px",
        }}
      >
        <p className="head">ABOUT US</p>
        <h4 className="second-head">WHO AM I?</h4>

        <div
          className="about-content"
          style={{
            margin: "120px 0 0 0",
          }}
        >
          <InformationAbout />
          <ExpertiseCard />
          <CardProjectSuccess />
        </div>
      </section>
    </>
  );
};

export default About;
