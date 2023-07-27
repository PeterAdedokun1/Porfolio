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
          I am an outstanding Frontend Developer with extensive knowledge of
          Javascript and browser API as well as significant experience with
          popular frameworks and libraries like React and Redux. Skilled in
          designing, developing and testing multiple web-based applications
          incorporating a range of technologies . Eager to tackle more complex
          problems and continue to find ways to maximize user efficiency.
          Aspiring to combine broad with strong techincal skills to excel as a
          Frontend Developer
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
        <a href="https://drive.google.com/file/d/1mD8helYz4ljtZd_pZd9iRbx6Xi2PrZtW/view?usp=sharing">
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
