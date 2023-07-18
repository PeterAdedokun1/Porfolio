import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import ProgressBar from "./ProgressBar";
import { FaHtml5 } from "react-icons/fa";

function Skills() {
  return (
    <SkillsStyled>
      <Title title={"My Skills"} span={"my skills"} />
      <InnerLayout>
        <div className="skills">
          <ProgressBar title={"HTML5"} />
          <ProgressBar title={"CSS3"} />
          <ProgressBar title={"BOOTSTRAP"} />
          <ProgressBar title={"TAILWINDCSS"} />
          <ProgressBar title={"SASS"} />
          <ProgressBar title={"JAVASCRIPT"} />
          <ProgressBar title={"REACTJS"} />
          <ProgressBar title={"REACT NATIVE"} />
          <ProgressBar title={"CHAKRA UI"} />
          <ProgressBar title={"NEXTJS"} />
          <ProgressBar title={"REDUX"} />
          <ProgressBar title={"FIREBASE"} />
          <ProgressBar title={"GIT"} />
          <ProgressBar title={"GITHUB"} />
        </div>
      </InnerLayout>
    </SkillsStyled>
  );
}

const SkillsStyled = styled.section`
  .skills {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 2rem;
    grid-column-gap: 3rem;
    @media screen and (max-width: 700px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default Skills;
