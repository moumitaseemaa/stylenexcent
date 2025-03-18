import React from "react";
import Container from "../common/Container";
import styled from "styled-components";
import BannerImg from "../../assets/BannerImg.png";
import Img from "../common/Img";

const Banner = () => {
  return (
    <BannerMain>
      <Container>
        <SideBySide>
          <LeftSide>
            <Heading>
              Lessons and insights <InnerHeading>from 8 years</InnerHeading>
            </Heading>
            <Paragraph>
              Where to grow your business as a photographer: site or social
              media?
            </Paragraph>
            <Register>Register</Register>
          </LeftSide>
          <RightSide>
            <Img src={BannerImg} alt={BannerImg} />
          </RightSide>
        </SideBySide>
      </Container>
    </BannerMain>
  );
};

export default Banner;

const BannerMain = styled.nav`
  background: #f5f7fa;
  padding: 96px 0;
`;

const SideBySide = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeftSide = styled.div`
  width: 60%;
`;
const RightSide = styled.div`
  width: 40%;
`;

const Heading = styled.h1`
  max-width: 657px;
  color: black;
  font-family: "Inter", sans-serif;
  font-size: 64px;
  font-weight: 600;
  line-height: 76px;
`;

const InnerHeading = styled.span`
  color: #4caf4f;
`;
const Paragraph = styled.p`
  color: #717171;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 400;
  margin-top: 16px;
  margin-bottom: 32px;
`;

const Register = styled.button`
  background: #4caf4f;
  padding: 14px 32px;
  color: white;
  border: none;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 400;
  border-radius: 6px;

  &:hover {
    background: #f5f7fa;
    color: #4caf4f;
    transition: 0.4s;
  }
`;
