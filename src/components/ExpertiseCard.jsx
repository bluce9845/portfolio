/* eslint-disable no-unused-vars */
import React from "react";

const ExpertiseCard = () => {
  return (
    <>
      <div className="expertise-card d-flex">
        <div className="card-web-design rounded-2">
          <div className="world-icon">
            <img
              src="../../public/icons/world.png"
              width={"50px"}
              alt="word icon"
              style={{
                margin: "30px 0 0 40px",
              }}
            />
            <p className="wb-design mt-4 ms-5 fw-medium">Web Design</p>
          </div>
        </div>

        <div className="card-frontend rounded-2 ms-4">
          <img
            src="../../public/icons/bulb.png"
            width={"50px"}
            alt="word icon"
            style={{
              margin: "30px 0 0 40px",
            }}
          />
          <p className="frontend mt-4 fw-medium">Frontend Developer</p>
        </div>

        <div className="card-backend rounded-2 ms-4">
          <img
            src="../../public/icons/database.png"
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
