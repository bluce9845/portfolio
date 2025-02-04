import React, { useState } from "react";

import ContentSecondPjAs from "./contentSecondPjAs";
import { useMemo } from "react";

import { FaGithub, FaShareAlt, FaHeart } from "react-icons/fa";

const Work = ({ id }) => {
  const [activeTab, setActiveTab] = useState("Web Project"); // State untuk menyimpan kategori aktif

  // Fungsi untuk menangani klik pada kategori
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const secondPjDatas = useMemo(
    () => [
      { img: "../../public/project-img/tickt-wbste.png", backgroundColor: "#2c98f0", titlePj: "Ticket Reservation", desPj: "Airline ticket booking website, which I created using django" },
      { img: "../../public/project-img/instagram-wbste.png", backgroundColor: "#ec5453", titlePj: "Instagram Clone", desPj: "The Instagram clone that I made using Django, has post, like post, follow account features" },
      {
        img: "../../public/project-img/vespa-wbste.png",
        backgroundColor: "#a84cb8",
        titlePj: "Vespa Website",
        desPj: "Vespa website, I created this website for the purpose of introducing motorbikes from Italian",
      },
    ],
    []
  );

  return (
    <section
      className="work-container"
      id={id}
      style={{
        margin: "260px 0 0 38px ",
      }}
    >
      <p className="head">MY WORK</p>
      <h4 className="second-head">RECENT WORK</h4>

      <div className="work-ct-container">
        <div className="nav-work">
          <ul>
            <li>
              <a href="#work" className={activeTab === "Web Project" ? "active" : ""} onClick={() => handleTabClick("Web Project")}>
                Web Project
              </a>
            </li>
            <li>
              <a href="#work" className={`ms-5 ${activeTab === "Web Design" ? "active" : ""}`} onClick={() => handleTabClick("Web Design")}>
                Web Design
              </a>
            </li>
          </ul>
        </div>
        <div className="ct-card-project-img">
          {secondPjDatas.map((stylingScndpj, index) => (
            <div className={`project-${index + 1}`} key={index}>
              <img src={stylingScndpj.img} width={400} height={220} alt="" />
              <div
                className="second-ct-pj"
                style={{
                  backgroundColor: stylingScndpj.backgroundColor,
                }}
              >
                <p className="title-pj">{stylingScndpj.titlePj}</p>
                <p className="des-pj">{stylingScndpj.desPj}</p>

                <div
                  className="icons-container d-flex"
                  style={{
                    margin: "40px 0 0 0",
                  }}
                >
                  <p
                    className="git"
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    <FaGithub />
                  </p>
                  <p
                    className="share"
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    <FaShareAlt />
                  </p>
                  <p
                    className="like"
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    <FaHeart />
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
