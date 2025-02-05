import React, { useEffect, useState, useMemo } from "react";

import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import CircularProgress from "@mui/joy/CircularProgress";
import { useCountUp } from "use-count-up";
import Slider from "react-slick";

const Skills = ({ id }) => {
  const skillsData = useMemo(
    () => [
      { id: 1, name: "HTML", value: 90, duration: 3, color: "#2c98f0" },
      { id: 2, name: "CSS", value: 90, duration: 3, color: "#ec5453" },
      { id: 3, name: "JavaScript", value: 75, duration: 4, color: "#f9bf3f" },
      { id: 4, name: "React", value: 70, duration: 4, color: "#a84cb8" },
      { id: 5, name: "Node.js", value: 65, duration: 3, color: "#035497" },
      { id: 6, name: "Python", value: 85, duration: 3, color: "#7f1c00" },
      { id: 7, name: "Django", value: 60, duration: 4, color: "#949200" },
      { id: 8, name: "SQL", value: 90, duration: 3, color: "#ecd054" },
      { id: 9, name: "PHP", value: 80, duration: 3, color: "#0079f1" },
      { id: 10, name: "Laravel", value: 75, duration: 4, color: "#d22d00" },
    ],
    []
  );

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    speed: 6000,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    cssEase: "linear",
  };

  return (
    <>
      <section
        className="skills-container"
        id={id}
        style={{
          margin: "260px 0 0 38px",
        }}
      >
        <p className="head" data-aos="fade-right">
          MY SPECIALITY
        </p>
        <h4 className="second-head" data-aos="fade-up">
          MY SKILLS
        </h4>

        <div className="ct-skills-params" data-aos="fade-left">
          <p className="skills-params">
            I specialize in PHP programming and the Laravel framework, building scalable web applications. I&apos;m also experienced with Django and React, combining them for full-stack development. To enhance user experience, I use
            Bootstrap and Swiper.js for modern, responsive designs. Beyond web development, I&apos;ve worked on computer vision projects like finger detection and face recognition, showcasing my ability to solve real-world problems with
            Python. My goal is to continue growing as a skilled full-stack developer.
          </p>
        </div>

        <div
          className="ct-skills-prgs-bar"
          data-aos="zoom-in-up"
          style={{
            margin: "100px 0 0 0",
          }}
        >
          <Stack direction="row" sx={{ alignItems: "center", position: "relative", display: "flex", overflowX: "hidden", zIndex: "300" }}>
            <Slider
              {...settings}
              style={{
                position: "relative",
                maxWidth: "780px",
              }}
            >
              {skillsData.map((skill) => {
                const { value } = useCountUp({
                  isCounting: true,
                  duration: skill.duration,
                  start: 0,
                  end: skill.value,
                });

                return (
                  <Stack key={skill.id} alignItems="center" className="circle-bar text-center">
                    <CircularProgress
                      size="lg"
                      determinate
                      value={value}
                      sx={{
                        "--CircularProgress-progressColor": skill.color,
                        "--CircularProgress-size": "120px",
                        "--CircularProgress-track-thickness": "42px",
                        "--CircularProgress-progress-thickness": "42px",
                        "& circle": {
                          strokeLinecap: "butt",
                        },
                      }}
                    >
                      <Typography className="progress-num-calculate">{Math.round(value)}%</Typography>
                    </CircularProgress>
                    <Typography className="typography ">{skill.name}</Typography>
                  </Stack>
                );
              })}
            </Slider>
          </Stack>
        </div>
      </section>
    </>
  );
};

export default Skills;
