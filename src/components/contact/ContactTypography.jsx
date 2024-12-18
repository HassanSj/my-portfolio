import React from "react";
import styled from "styled-components";

const ContactTypography = () => {
  return (
    <ContactTypographyContainer>
      <div>
        <h5>Name</h5>
        <p>Hassan Sajjad</p>
      </div>
      <div>
        <h5>Location</h5>
        <p>Street 7, I-10/3 Islamabad, 44000</p>
      </div>
      <div>
        <h5>Call Me</h5>
        <p>+92 313 1512576</p>
      </div>
      <div>
        <h5>Email Me</h5>
        <p>
          <a
            href="mailto:sajjadhassa389@gmail.com"
            style={{
              opacity: "1",
            }}
          >
            sajjadhassa389@gmail.com
          </a>
        </p>
      </div>
    </ContactTypographyContainer>
  );
};

export default ContactTypography;

const ContactTypographyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  div {
    margin-bottom: 15px;
  }

  h5 {
    font-size: 15px;
    font-weight: 600;
    line-height: 1.2;

    @media (max-width: 1023.98px) {
      font-size: 13px;
      font-weight: 500;
    }
    @media (max-width: 767.98px) {
      font-size: 12px;
      font-weight: 500;
    }
    @media (max-width: 479.98px) {
      font-size: 10px;
      font-weight: 400;
    }
  }
  p a {
    display: block;
    text-decoration: none;
    font-weight: 400;
    opacity: 1;
    color: ${({ theme }) => theme.primary};

    :hover {
      opacity: 0.7;
      transition: all 1.2s ease;
    }
  }
`;
