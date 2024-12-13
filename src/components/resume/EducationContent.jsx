import React from "react";
import styled from "styled-components";
import ResumeCardList from "./ResumeCardList";
import ResumeCard from "./ResumeCard";

const EducationContent = () => {
  return (
    <EducationContentContainer>
      <span>Education</span>
      <ResumeCardList>
      <ResumeCard
          title="Bachelor of Science in Software Engineering"
          info="Foundation University Islamabad"
          year="2018-2022"
          description="4 Years Bachelor Degree in Software Engineering"
        />
        <ResumeCard
          title="Computer Science"
          info="FG Sir Syed College The Mall Rawalpindi Cantt"
          year="2016-2018"
          description="Intermediate in Computer Science"
        />
      </ResumeCardList>
    </EducationContentContainer>
  );
};

export default EducationContent;

const EducationContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  span {
    font-weight: 500;
    font-size: 26px;
    line-height: 1.2;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.secondary};

    @media (max-width: 767.98px) {
      font-size: 20px;
    }
    @media (max-width: 479.98px) {
      font-size: 18px;
    }
  }
`;
