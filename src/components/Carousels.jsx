import React, { useEffect } from "react";
import Carou1Img from "../../public/profile-img/profile-1.png";
import Carou2Img from "../../public/profile-img/profile-2.png";
import cvFile from "../../public/CV/Rizki_CV.pdf";

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
    <section id={id} className="carousel-section">
      <Carousel controls={false} indicators={false} interval={5000}>
        <Carousel.Item>
          <div className="carousel-content">
            <img src={Carou1Img} alt="first profile" className="carousel-img" />
            <div className="carousel-caption">
              <div className="name-ct" data-aos="fade-up">
                <h3>Hi!</h3>
                <h2>I&apos;m Rizki</h2>
              </div>
              <button
                className="btn-cv"
                data-aos="fade-up"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = cvFile;
                  link.download = "Rizki_CV.pdf";
                  link.click();
                }}
              >
                DOWNLOAD CV <IoDownloadOutline className="icon" />
              </button>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-content">
            <img src={Carou2Img} alt="second profile" className="carousel-img" />
            <div className="carousel-caption">
              <div className="wrap-inf" data-aos="fade-right">
                <h3>I&apos;m a</h3>
                <h2>Frontend Developer</h2>
                <h2 className="stdnt">& Student</h2>
                <p className="school fw-medium">School at SMK PGRI 2 PONOROGO</p>
              </div>
              <button className="btn-porto" data-aos="fade-up">
                VIEW PORTFOLIO <PiBag className="icon" />
              </button>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default Carousels;
