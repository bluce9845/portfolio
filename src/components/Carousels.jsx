import React, { useEffect } from "react";
import Carou1Img from "../../public/profile-img/profile-1.png";
import Carou2Img from "../../public/profile-img/profile-2.png";
import CvFile from "../../public/CV/Rizki_CV.pdf";

import Carousel from "react-bootstrap/Carousel";
import { IoDownloadOutline } from "react-icons/io5";
import { PiBag } from "react-icons/pi";

import AOS from "aos";
import "aos/dist/aos.css";

import "../css/Content.css";

const Carousels = ({ id }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 0,
      once: false,
    });

    setTimeout(() => {
      AOS.refreshHard();
    }, 100);
  }, []);

  return (
    <>
      <section id={id}>
        <Carousel
          controls={false}
          indicators={false}
          slide={false}
          interval={5000}
          style={{
            margin: "0 0 0 0",
          }}
        >
          <Carousel.Item>
            <img
              src={Carou1Img}
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
              <div className="name-ct aos-init aos-animate">
                <h3>Hi!</h3>
                <h2>I&apos;m Rizki</h2>
              </div>
              <button
                className="btn-cv"
                data-aos="fade-up"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = CvFile;
                  link.download = "Rizki_CV.pdf";
                  link.click();
                }}
              >
                DOWNLOAD CV
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
              src={Carou2Img}
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
              <div className="wrap-inf" data-aos="fade-right">
                <h3>I&apos;m a</h3>
                <h2>Frontend Developer</h2>
                <h2 className="stdnt">& Student</h2>
                <p className="school fw-medium">School at SMK PGRI 2 PONOROGO</p>
              </div>
              <button className="btn-porto" data-aos="fade-up">
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
