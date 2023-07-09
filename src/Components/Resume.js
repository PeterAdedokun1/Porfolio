import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import SmallTitle from "../Components/SmallTitle";
import SchoolIcon from "@material-ui/icons/School";
import ResumeItem from "../Components/ResumeItem";

function Resume() {
  const school = <SchoolIcon />;
  return (
    <ResumeStyled>
      <Title title={"Resume"} span={"resume"} />
      <InnerLayout>
        <div className="small-title u-small-title-margin">
          <SmallTitle icon={school} title={"Educational Qualifications"} />
        </div>
        <div className="resume-content ">
          <ResumeItem
            year={"2022 -2025 "}
            title={"B.Sc Petroluem and Gas Engineering "}
            subTitle={"University Of Lagos,Nigeria"}
            text={'Lorem ipsum dolor sit'}
          />
          <ResumeItem
            year={"2019 - 2020"}
            title={"Diploma Certificate"}
            subTitle={"University Of Lagos,Nigeria"}
            // text={'Received a Diploma Certificates from Unilag'}
          />
          <ResumeItem
            year={"2013 - 2019"}
            title={"High School Graduation"}
            subTitle={"Divine Grace Private Schools,Nigeria"}
            // text={' '}
          />
        </div>
        <div className="small-title u-small-title-margin">
          <SmallTitle icon={school} title={"Educational Qualifications"} />
        </div>
        <div className="resume-content ">
          <ResumeItem
            year={"2022 -2025 "}
            title={"B.Sc Petroluem and Gas Engineering "}
            subTitle={"University Of Lagos,Nigeria"}
          />
          <ResumeItem
            year={"2019 - 2020"}
            title={"Diploma Certificate"}
            subTitle={"University Of Lagos,Nigeria"}
          />
          <ResumeItem
            year={"2013 - 2019"}
            title={"High School Graduation"}
            subTitle={"Divine Grace Private Schools,Nigeria"}
          />
        </div>
      </InnerLayout>
    </ResumeStyled>
  );
}

const ResumeStyled = styled.section`
  .small-title {
    padding-bottom: 3rem;
  }
  .u-small-title-margin {
    margin-top: 4rem;
  }

  .resume-content {
    border-left: 2px solid var(--border-color);
  }
`;
export default Resume;
