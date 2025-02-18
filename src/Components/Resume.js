import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import SmallTitle from "../Components/SmallTitle";
import SchoolIcon from "@material-ui/icons/School";
import ResumeItem from "../Components/ResumeItem";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
function Resume() {
  const school = <SchoolIcon />;
  const briefcase = <BusinessCenterIcon />;
  return (
    <ResumeStyled>
      <Title title={"Resume"} span={"resume"} />
      <InnerLayout>
        <div className="small-title">
          <SmallTitle icon={briefcase} title={"Working Experience"} />
        </div>
        <div className="resume-content ">
          <ResumeItem
            year={"Aug 2024 - Present"}
            title={"Frontend Developer  "}
            subTitle={"EventPadi, Lagos , Nigeria"}
          />
          <ResumeItem
            year={"Feb 2023 - Nov 2024"}
            title={"Frontend Developer  "}
            subTitle={"Edssistance, Lagos , Nigeria"}
          />
          <ResumeItem
            year={" Feb 2023 - May 2023"}
            title={"Frontend Developer  "}
            subTitle={"Primal International Journals, Ondo State, Nigeria"}
          />
          <ResumeItem
            year={" Sep 2022 - Dec 2022"}
            title={"Frontend Engineer Intern "}
            subTitle={"KawanBantu ,Jagakarsa, Indonesia"}
            text=""
          />
          <ResumeItem
            year={" Jun 2022 - Sep 2022 "}
            title={"Frontend Developer Intern "}
            subTitle={"CYBERINITIATION , Delhi, India"}
          />
          <ResumeItem
            year={" May 2022 - Jul 2022 "}
            title={"Frontend Developer Intern "}
            subTitle={"Zuri Team, Inc, Nigeria"}
          />
          <ResumeItem
            year={" Nov 2021 - May 2022"}
            title={"Frontend Developer Intern "}
            subTitle={"Stranerd, Lagos, Nigeria "}
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
