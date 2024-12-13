import React from "react";
import styled from "styled-components";
import ResumeCardList from "./ResumeCardList";
import ResumeCard from "./ResumeCard";

const ExperienceContent = () => {
  return (
    <ExperienceContentContainer>
      <span>Experience</span>
      <ResumeCardList>
        <ResumeCard
          title="Backend Engineer"
          info="Veevo Tech · Part-time"
          year="Sep 2023 - Mar 2024 · 7 months"
          description="Islāmābād, Pakistan · On-site"
        />
        <ResumeCard
          title="Associate Software Engineer"
          info="CyberSoft Vantage - CSV · Full-time"
          year="Jan 2023 - Jan 2024 · 1 year 1 month"
          description="Islāmābād, Pakistan · On-site"
        />
        <ResumeCard
          title="Full Stack Engineer"
          info="Triomatic Solutions · Full-time"
          year="Apr 2021 - Mar 2023 · 2 years"
          description="Islāmābād, Pakistan · Remote"
        />
        <ResumeCard
          title="Engineering Intern"
          info="British Council · Intern"
          year="May 2019 - Sep 2019 · 5 months"
          description="Islāmābād, Pakistan · On-site"
        />
      </ResumeCardList>
    </ExperienceContentContainer>
  );
};

export default ExperienceContent;

const ExperienceContentContainer = styled.div`
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
