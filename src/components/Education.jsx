import React, { useState, useEffect, useMemo } from "react";
import Accordion from "react-bootstrap/Accordion";
import { FaPlus, FaMinus } from "react-icons/fa";



const Education = ({ id }) => {
  const [activeKey, setActiveKey] = useState(null);

  const handleToggle = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };

  return (
    <>
      <section
        className="education-container"
        id={id}
        style={{
          margin: "260px 0 0 38px",
        }}
      >
        <p className="head">EDUCATION</p>
        <h4 className="second-head">EDUCATION</h4>

        <div className="ct-education">
          <Accordion
            className="accordion-container"
            defaultActiveKey={0}
            activeKey={activeKey}
            flush
            style={{
              margin: "140px 0 0 0",
            }}
          >
            <Accordion.Item eventKey="0" className="accd-itm">
              <Accordion.Header
                onClick={() => handleToggle("0")}
                className="accd-head"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span>TRAINING PROGRAM IN PT. Humatech Technology</span>
                {activeKey === "0" ? <FaMinus className="iconMinus" /> : <FaPlus className="iconPlus" />}
              </Accordion.Header>
              <Accordion.Body className="accd-bdy">
                <p>
                  {" "}
                  I had the privilege of participating in a training program organized by PT. Humatech Technology, where I focused on learning the Laravel framework. This program provided me with in-depth knowledge of backend development
                  and taught me how to build scalable and dynamic web applications. The experience significantly improved my understanding of modern PHP development practices and prepared me for real-world projects.
                </p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1" className="accd-itm">
              <Accordion.Header
                onClick={() => handleToggle("1")}
                className="accd-head"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  maxWidth: "810px",
                }}
              >
                <span>DBS Foundation Coding Camp</span>
                {activeKey === "1" ? <FaMinus className="iconMinus" /> : <FaPlus className="iconPlus" />}
              </Accordion.Header>
              <Accordion.Body className="accd-bdy">
                <p>
                  {" "}
                  Another key milestone in my educational journey was joining the DBS Foundation Coding Camp. Here, I gained hands-on experience with JavaScript, exploring its capabilities to create interactive and user-friendly web
                  applications. This program strengthened my frontend development skills and deepened my understanding of how JavaScript can enhance user experiences.
                </p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2" className="accd-itm">
              <Accordion.Header
                onClick={() => handleToggle("2")}
                className="accd-head"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  maxWidth: "810px",
                }}
              >
                <span>HAVE INTERNSHIP EXPERIENCE IN ARTAVEL</span>
                {activeKey === "2" ? <FaMinus className="iconMinus" /> : <FaPlus className="iconPlus" />}
              </Accordion.Header>
              <Accordion.Body className="accd-bdy">
                <p>
                  {" "}
                  I completed an 8-month internship at Artavel, where I worked with various technologies, including Laravel, Django, React, and PHP. This immersive experience allowed me to apply my skills in real-world projects,
                  strengthening my full-stack development expertise and providing me with valuable insights into the tech industry.
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </section>
    </>
  );
};

export default Education;
