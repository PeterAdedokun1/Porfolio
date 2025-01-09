import React from "react";
import styled from "styled-components";
import resume from "../img/peter1.JPG";
import PrimaryButton from "./PrimaryButton";

function ImageSection() {
  return (
    <ImageSectionStyled>
      <div className="left-content">
        <img src={resume} alt="" />
      </div>
      <div className="right-content">
        <h4>
          I am <span>Adedokun Peter</span>
        </h4>
        <p className="paragraph">
          I am a skilled and results-driven Frontend Developer with extensive expertise in JavaScript and browser APIs, along with significant
          experience working with popular frameworks and libraries such as React, Redux, and Node.js. Proficient in designing, developing, and testing diverse web-based applications using a wide range of modern technologies.
          I am passionate about solving complex problems and continually optimizing user experiences to maximize efficiency. With a strong
          technical foundation and a broad background, I aim to excel as a Frontend Developer, contributing to innovative and impactful
          projects
        </p>
        <div className="about-info">
          <div className="info-title">
            <p>Full Name</p>

            <p>Languages </p>
            <p>Location</p>
            <p>Service</p>
          </div>
          <div className="info">
            <p>: Adedokun Peter Opeyemi</p>

            <p>: English </p>
            <p>: Lagos, Nigeria</p>
            <p>: Freelance,Web Development</p>
          </div>
        </div>
        <a href="https://drive.google.com/file/d/1yQ7BKa9Gr5GE8dBAevrxmsv-Y6efHJd8/view">
          <PrimaryButton title={"Download Cv"} />
        </a>
      </div>
    </ImageSectionStyled>
  );
}

const ImageSectionStyled = styled.div`
  margin-top: 5rem;
  display: flex;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    .left-content {
      margin-bottom: 2rem;
    }
  }
  .left-content {
    width: 100%;
    img {
      width: 95%;
      object-fit: cover;
    }
  }
  .right-content {
    width: 100%;
    h4 {
      font-size: 2rem;
      color: var(--white-color);
      span {
        font-size: 2rem;
      }
    }
    .paragraph {
      padding: 1rem 0;
    }
    .about-info {
      display: flex;
      padding-bottom: 1.4rem;
      .info-title {
        padding-right: 3rem;
        p {
          font-weight: 600;
        }
      }
      .info-title,
      .info {
        p {
          padding: 0.3rem 0;
        }
      }
    }
  }
`;
export default ImageSection;
