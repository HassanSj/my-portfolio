import React from "react";
import styled from "styled-components";

const AboutContentTypography = () => {
  return (
    <AboutContentTypographyContainer>
      <span>Who Am I?</span>
      <h3>I'm Hassan Sajjad, a Senior Software Engineer</h3>
      <p>
        As a dedicated freelancer based in Pakistan, I specialize in creating
        cutting-edge websites and AI-driven applications that adhere to the
        latest industry trends. Over the years, I have successfully transformed
        visions and ideas into impactful and functional digital products. My
        expertise lies in blending innovation with usability, ensuring that
        every project aligns seamlessly with client goals and audience needs.
      </p>
      <hr />
    </AboutContentTypographyContainer>
  );
};

export default AboutContentTypography;

const AboutContentTypographyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
  gap: 25px;
  flex: 0.8;

  span {
    color: ${({ theme }) => theme};
    font-size: 24px;
    font-weight: 500;
    line-height: 1.2;
    @media (max-width: 767.98px) {
      font-size: 18px;
    }
    @media (max-width: 479.98px) {
      font-size: 14px;
    }
  }
  h3 {
    color: ${({ theme }) => theme.secondary};
    font-size: 32px;
    font-weight: 700;
    line-height: 1.6;
    @media (max-width: 767.98px) {
      font-size: 24px;
      font-weight: 600;
    }
    @media (max-width: 479.98px) {
      font-size: 18px;
      font-weight: 600;
    }
  }

  p {
    color: ${({ theme }) => theme.secondary};
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.95;
    opacity: 0.7;
    @media (max-width: 767.98px) {
      font-size: 12px;
    }
    @media (max-width: 479.98px) {
      font-size: 10px;
    }
  }
  hr {
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.secondary};
    opacity: 0.3;
    border: none;
  }
`;
