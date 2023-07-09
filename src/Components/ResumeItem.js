import React from "react";
import styled from "styled-components";

function ResumeItem({ year, title, subTitle, text }) {
  return (
    <ResumeItemStyled>
      <div className="left-content">
        <p>{year}</p>
      </div>
      <div className="right-content">
        <h5>{title}</h5>
        <h6>{subTitle}</h6>
        <div dangerouslySetInnerHTML={{ __html: text }} />
      </div>
    </ResumeItemStyled>
  );
}

const ResumeItemStyled = styled.div`
  display: flex;
  @media screen and (max-width: 500px) {
    flex-direction: column;
    .left-content {
      width: 100%;
      max-width: 275px;
      margin: 0 auto;
      p {
        width: 100%;
      }
    }
  }
  @media screen and (max-width: 400px) {
    flex-direction: column;
    .left-content {
      width: 100%;
      max-width: 220px;
      margin: 0 auto;
      p {
        width: 100%;
      }
    }
  }
  @media screen and (max-width: 350px) {
    flex-direction: column;
    .left-content {
      width: 100%;
      max-width: 165px;
      margin: 0 auto;
      p {
        width: 100%;
      }
    }
  }

  @media screen and (max-width: 421px) {
    p,
    h5,
    h6 {
      font-size: 80%;
    }
  }
  &:not(:last-child) {
    padding-bottom: 3rem;
  }
  .left-content {
    width: 20%;
    padding-left: 20px;
    position: relative;
    @media screen and (max-width: 500px) {
      width: 100%;
    }
    &::before {
      content: "";
      position: absolute;
      height: 15px;
      border-radius: 50%;
      border: 2px solid var(--border-color);
      background-color: var(--background-dark-color);
    }
    p {
      display: inline-block;
    }
  }
  .right-content {
    padding-left: 5rem;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 15px;
      height: 2px;
      width: 3rem;
      background-color: var(--border-color);
    }
    h5 {
      color: var(--primary-color);
      font-size: 1.5rem;
      padding-bottom: 0.4rem;
    }
    h6 {
      padding-bottom: 0.6rem;
      font-size: 1rem;
    }
    p {
      font-size: 0.9rem;
    }
  }
`;
export default ResumeItem;
