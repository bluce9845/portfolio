import React from "react";

import WorldIcon from "../../public/icons/world.png";
import bulbIcon from "../../public/icons/bulb.png";
import dbIcon from "../../public/icons/database.png";

const ExpertiseCard = () => {
  return (
    <>
      <div className="expertise-card d-flex">
        <div className="card-web-design rounded-2" data-aos="fade-right">
          <div className="world-icon">
            <img
              src={WorldIcon}
              width={"50px"}
              alt="word icon"
              style={{
                margin: "30px 0 0 40px",
              }}
            />
            <p className="wb-design mt-4 ms-5 fw-medium">Web Design</p>
          </div>
        </div>

        <div className="card-frontend rounded-2 ms-4" data-aos="fade-right">
          <img
            src={bulbIcon}
            width={"50px"}
            alt="word icon"
            style={{
              margin: "30px 0 0 40px",
            }}
          />
          <p className="frontend mt-4 fw-medium">Frontend Developer</p>
        </div>

        <div className="card-backend rounded-2 ms-4" data-aos="fade-right">
          <img
            src={dbIcon}
            width={"50px"}
            alt="word icon"
            style={{
              margin: "30px 0 0 40px",
            }}
          />
          <p className="backend mt-4 fw-medium">Backend Developer</p>
        </div>
      </div>
    </>
  );
};

export default ExpertiseCard;
