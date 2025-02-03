import React, { useState } from "react";
import { useMemo } from "react";

const Work = ({ id }) => {
  const [activeTab, setActiveTab] = useState("Web Project"); // State untuk menyimpan kategori aktif

  // Fungsi untuk menangani klik pada kategori
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const secondPjDatas = useMemo(
    () => [
      { img: "../../public/project-img/tickt-wbste.png", backgroundColor: "#2c98f0" },
      { img: "../../public/project-img/instagram-wbste.png", backgroundColor: "#ec5453" },
      { img: "../../public/project-img/vespa-wbste.png", backgroundColor: "#f9bf3f" },
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
              <img src={stylingScndpj.img} width={400} alt="" />
              <div
                className="second-ct-pj"
                style={{
                  backgroundColor: stylingScndpj.backgroundColor,
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
