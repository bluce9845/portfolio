/* eslint-disable no-unused-vars */
import React from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import Container from "react-bootstrap/Container";

import "../css/Content.css";
import Sidebar from "./Sidebar";
import Carousels from "./Carousels";
import About from "./About";
import Services from "./Services";
import Skills from "./Skills";
import Education from "./Education";
import Experience from "./Experince";
import Work from "./Work";
import Contact from "./Contact";

const Content = () => {
  return (
    <>
      <Container className="content-container" fluid>
        <Scrollbars
          style={{
            height: "100vh",
          }}
        >
          <div className="sidebar position-fixed">
            <Sidebar />
          </div>
        </Scrollbars>
        <div className="content">
          <Carousels id="home" />
          <About id="about" />
          <Services id="services" />
          <Skills id="skills" />
          <Education id="education" />
          <Experience id="experience" />
          <Work id="work" />
          <Contact id="contact" />
        </div>
      </Container>
    </>
  );
};

export default Content;
