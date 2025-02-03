import React from "react";

const Experience = ({ id }) => {
  return (
    <>
      <section
        className="experience-container"
        id={id}
        style={{
          margin: "260px 0 0 38px",
        }}
      >
        <p className="head">EXPERIENCE</p>
        <h4 className="second-head">WORK EXPERIENCE</h4>

        <div className="experience-wrap">
          <div className="icons-ex position-absolute rounded-circle">
            <img src="../../public/icons/icons8-pencil-64.png" className="position-absolute img-icn text-center" width={"35"} alt="" />
          </div>
          <div className="position-relative p-3 ms-5 shadow chat-bubble">
            <p className="ct-experience-params">
              As a fresh graduate in Software Engineering, I may not yet have formal work experience, but I am eager to bring my knowledge and enthusiasm to a professional setting. My journey so far has equipped me with a strong foundation
              in programming, particularly in PHP, Laravel, Django, React, and JavaScript, gained through rigorous training programs and hands-on projects. I am committed to continuous learning and self-improvement. While I work on
              real-world projects, I aim to further enhance my technical skills, including mastering frameworks and improving my problem-solving abilities.
              <br />
              <br /> My past experiences, such as participating in the PT. Humatech Technology training program, the DBS Foundation Coding Camp, and an 8-month internship at ARTAVEL, have shown me the value of adaptability, collaboration,
              and creativity in achieving success. I believe in taking on challenges with determination and using every opportunity to grow both personally and professionally. With a solid foundation and a mindset focused on growth, I am
              ready to contribute, learn, and thrive in any team or organization.
            </p>
          </div>
          <div className="triangle"></div>
        </div>
      </section>
    </>
  );
};

export default Experience;
