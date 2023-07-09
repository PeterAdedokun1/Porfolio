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
            year={" feb 2022 - aug 2025 "}
            title={"Frontend Developer Intern "}
            subTitle={"Oly Group, United Kingdom "}
            text={` <p>1. Worked with backend and mobile developers for continuous development and deployment <br/> 2. Assisted in writing well designed, testable, efficient code by using best software development practices. <br/> 3. Optimizing site speed and performance <br/> 4. Assisted in maintaining, expanding, and scaling sites<br/> 5. Optimizing components for maximum performance across a vast array of web-capable devices and browsers <br/> 6. Translating designs and wireframes into high quality code</p>`}
          />
          <ResumeItem
            year={" feb 2022 - aug 2025 "}
            title={"Frontend Developer Intern "}
            subTitle={"Oly Group, United Kingdom "}
            text={` <p>1. Worked with backend and mobile developers for continuous development and deployment <br/> 2. Assisted in writing well designed, testable, efficient code by using best software development practices. <br/> 3. Optimizing site speed and performance <br/> 4. Assisted in maintaining, expanding, and scaling sites<br/> 5. Optimizing components for maximum performance across a vast array of web-capable devices and browsers <br/> 6. Translating designs and wireframes into high quality code</p>`}
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
