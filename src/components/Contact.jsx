import React from "react";

const Contact = ({ id }) => {
  return (
    <>
      <section
        className="contact-container"
        id={id}
        style={{
          margin: "260px 0 0 38px",
        }}
      >
        <p className="head">GET IN TOUCH</p>
        <h4 className="second-head">CONTACT</h4>
      </section>
    </>
  );
};

export default Contact;
