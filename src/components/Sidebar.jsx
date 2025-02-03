/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

import "../css/Content.css";

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 160) {
          currentSection = section.getAttribute("id");
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="sidebar-container">
        <div
          className="profile-img  rounded-circle"
          style={{
            margin: "60px 0 0 49px",
          }}
        >
          {/* img-profile */}
        </div>
        <div className="name-profile">
          <p className="nm">Rizki Fiananda</p>
          <p className="detail-profiles">
            <span className="prfs">Frontend Developer/Student</span> IN
            <span
              className="school d-flex"
              style={{
                margin: "3px 0 0 16px",
              }}
            >
              SMK PGRI 2 PONOROGO
            </span>
          </p>
        </div>

        <div className="side-nav">
          <div className="wrap-side">
            <ul className="list-unstyled nv-sd text-center fw-light">
              <li className={activeSection === "home" ? "active" : ""}>
                <a href="#home">HOME</a>
              </li>
              <li className={activeSection === "about" ? "active" : ""}>
                <a href="#about">ABOUT</a>
              </li>
              <li className={activeSection === "services" ? "active" : ""}>
                <a href="#services">SERVICES</a>
              </li>
              <li className={activeSection === "skills" ? "active" : ""}>
                <a href="#skills">SKILLS</a>
              </li>
              <li className={activeSection === "education" ? "active" : ""}>
                <a href="#education">EDUCATION</a>
              </li>
              <li className={activeSection === "experience" ? "active" : ""}>
                <a href="#experience">EXPERIENCE</a>
              </li>
              <li className={activeSection === "work" ? "active" : ""}>
                <a href="#work">WORK</a>
              </li>
              <li className={activeSection === "contact" ? "active" : ""}>
                <a href="#contact">CONTACT</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="copyright-side text-center">
          <p className="cprgt">© Copyright ©2025 All rights reserved | This Website is made with BRAIN by Rizki Fiananda</p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
