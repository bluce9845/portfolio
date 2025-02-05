import React, { useState, useMemo } from "react";
import { FaGithub, FaShareAlt, FaHeart } from "react-icons/fa";
import ReservationImg from "../../public/project-img/tickt-wbste.png";
import instagramCloneImg from "../../public/project-img/instagram-wbste.png";
import vespaImg from "../../public/project-img/vespa-wbste.png";
import RsImg from "../../public/project-img/rs-wbste.png";

const Work = ({ id }) => {
  const [activeTab, setActiveTab] = useState("Web Project");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const projectData = useMemo(
    () => [
      {
        img: ReservationImg,
        backgroundColor: "#2c98f0",
        titlePj: "Ticket Reservation",
        desPj: "Airline ticket booking website, which I created using Django",
        category: "Web Project",
        aos: "fade-right",
      },
      {
        img: instagramCloneImg,
        backgroundColor: "#ec5453",
        titlePj: "Instagram Clone",
        desPj: "The Instagram clone that I made using Django, has post, like post, follow account features",
        category: "Web Project",
        aos: "fade-left",
      },
      {
        img: vespaImg,
        backgroundColor: "#a84cb8",
        titlePj: "Vespa Website",
        desPj: "Vespa website, I created this website for the purpose of introducing motorbikes from Italian",
        category: "Web Project",
        aos: "fade-up",
      },
      // Data Web Design
      {
        img: RsImg,
        backgroundColor: "#f9a825",
        titlePj: "UI/UX Design",
        desPj: "UI/UX prototype for mobile app using Figma",
        category: "Web Design",
        aos: "fade-right",
      },
    ],
    []
  );

  const filteredProjects = projectData.filter((project) => project.category === activeTab);

  return (
    <section className="work-container" id={id} style={{ margin: "260px 0 0 38px " }}>
      <p className="head" data-aos="fade-right">
        MY WORK
      </p>
      <h4 className="second-head" data-aos="fade-up">
        RECENT WORK
      </h4>

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
          {filteredProjects.map((project, index) => (
            <div className={`project-${index + 1}`} key={index} data-aos={project.aos}>
              <img src={project.img} width={400} height={220} alt={project.titlePj} />
              <div className="second-ct-pj" style={{ backgroundColor: project.backgroundColor }}>
                <p className="title-pj">{project.titlePj}</p>
                <p className="des-pj">{project.desPj}</p>

                <div className="icons-container d-flex" style={{ margin: "40px 0 0 0" }}>
                  <p className="git" style={{ cursor: "pointer" }}>
                    <FaGithub />
                  </p>
                  <p className="share" style={{ cursor: "pointer" }}>
                    <FaShareAlt />
                  </p>
                  <p className="like" style={{ cursor: "pointer" }}>
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
