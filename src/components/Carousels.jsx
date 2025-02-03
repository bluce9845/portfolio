import Carousel from "react-bootstrap/Carousel";
import { IoDownloadOutline } from "react-icons/io5";
import { PiBag } from "react-icons/pi";

import "../css/Content.css";

const Carousels = ({ id }) => {
  return (
    <>
      <section id={id}>
        <Carousel
          controls={false}
          indicators={false}
          slide={false}
          interval={11000}
          style={{
            margin: "0 0 0 0",
          }}
        >
          <Carousel.Item>
            <img
              src="../../public/profile-img/profile-1.png"
              alt="first profile"
              style={{
                margin: "48px 0 0 300px",
              }}
            />
            <div
              className="carousel-caption caption"
              style={{
                margin: "0 0 0 -70px",
              }}
            >
              <h3>Hi!</h3>
              <h2>I&apos;m Rizki</h2>
              <button className="btn-cv">
                DOWNLOAD CV{" "}
                <span>
                  <IoDownloadOutline
                    style={{
                      margin: "-7px 0 0 0",
                    }}
                  />
                </span>
              </button>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="../../public/profile-img/profile-2.png"
              alt=""
              style={{
                margin: "48px 0 0 360px",
              }}
            />
            <Carousel.Caption
              className="caption-2 text-dark"
              style={{
                margin: "0 0 0 -70px",
              }}
            >
              <h3>I&apos;m a</h3>
              <h2>Frontend Developer</h2>
              <h2 className="stdnt">& Student</h2>
              <p className="school fw-medium">School at SMK PGRI 2 PONOROGO</p>
              <button className="btn-porto">
                VIEW PORTFOLIO{" "}
                <span
                  style={{
                    margin: "-12px 0 0 4px",
                  }}
                >
                  <PiBag />
                </span>{" "}
              </button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
    </>
  );
};

export default Carousels;
