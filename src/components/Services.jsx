/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useMemo } from "react";
import NumberCounter from "./NumberCounter";

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const Services = ({ id }) => {
  return (
    <>
      <section
        className="services-container"
        id={id}
        style={{
          margin: "260px 0 0 38px",
        }}
      >
        <p className="head" data-aos="fade-right">
          WHAT I DO?
        </p>
        <h4 className="second-head" data-aos="fade-up">
          Here are some of my <br /> expertise
        </h4>

        <div className="content-services d-flex">
          <div className="wb-dsgn-crd" data-aos="fade-right">
            <div className="ct-img-dsgn position-absolute">
              <img src="../../public/icons/webDesign.png" alt="wb-dsgn" />
            </div>
            <h5
              style={{
                margin: "90px 0 0 78px",
              }}
            >
              WEB DESIGN
            </h5>
            <p className="ct-svrcs-dsgn text-center">
              I started my journey with web design, learning essential principles like composition, typography, and color. Using tools like Figma and Adobe XD, I create attractive, responsive prototypes and mockups. My main focus is on
              delivering a great user experience (UX/UI) that is intuitive and easy to navigate.
            </p>
          </div>
          <div className="wb-fe-crd ms-4" data-aos="fade-up">
            <div className="ct-img-fe position-absolute">
              <img src="../../public/icons/frontend.png" alt="wb-fe" />
            </div>
            <h5>FRONTEND DEVELOPER</h5>
            <p className="ct-svrcs-fe text-center">
              Once the design is ready, I turn it into a functional website using HTML, CSS, and JavaScript. I&apos;m skilled with frameworks like Vue.js and React to build dynamic user interfaces. I also ensure the website is responsive
              across different devices using CSS Grid and Flexbox, and add interactive animations and transitions to enhance the user experience.
            </p>
          </div>
          <div className="wb-be-crd ms-4" data-aos="fade-left">
            <div className="ct-img-be position-absolute">
              <img src="../../public/icons/backend.png" alt="wb-be" />
            </div>
            <h5
              style={{
                margin: "90px 0 0 33px",
              }}
            >
              BACKEND DEVELOPER
            </h5>
            <p className="ct-svrcs-be text-center">
              On the backend side, I work with PHP using Laravel and Django to build robust and efficient applications. I manage databases with MySQL and SQLite, and implement data authentication and security using built-in features like
              Laravel Passport.
            </p>
          </div>
        </div>

        <div className="inf-srvcs" data-aos="fade-left  ">
          <div className="cup-coffe">
            <p className="num">
              <NumberCounter end={402} duration={3000} />
            </p>
            <p className="cup-coffe">
              CUPS OF <br /> COFFE
            </p>
          </div>

          <div className="prjct-done">
            <p className="num d-flex">
              <NumberCounter end={20} duration={15000} />
              <span>+</span>
            </p>
            <p className="projects-done">PROJECTS</p>
          </div>

          <div className="client-count">
            <p className="num">
              <NumberCounter end={0} duration={5000} />
            </p>
            <p className="clients">CLIENTS</p>
          </div>

          <div className="partner-counts">
            <p className="num">
              <NumberCounter end={0} duration={5000} />
            </p>
            <p className="partners">PARTNERS</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
