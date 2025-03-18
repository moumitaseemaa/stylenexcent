import React from "react";
import Container from "../common/Container";
import styled from "styled-components";
import PixelFrame from "../../assets/PixelFrame.png";
import PanaFrame from "../../assets/mobile-login/pana.png";
import Img from "../common/Img";

const PixelGrade = () => {
  return (
    <PixelGradeMain>
      <Container>
        <SideBySide>
          <Left>
            <Img src={PixelFrame} alt={PixelFrame} />
          </Left>
          <Right>
            <Heading>The unseen of spending three years at Pixelgrade</Heading>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
              Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
              tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
              Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
              elementum pulvinar odio.
            </Paragraph>
            <LearnMore>Learn More</LearnMore>
          </Right>
        </SideBySide>

        <SideBySide>
          <Left>
            <Img src={PanaFrame} alt={PanaFrame} />
          </Left>
          <Right>
            <Heading>How to design your site footer like we did</Heading>
            <Paragraph>
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
              augue nec tincidunt molestie, massa nunc varius arcu, at
              scelerisque elit erat a magna. Donec quis erat at libero ultrices
              mollis. In hac habitasse platea dictumst. Vivamus vehicula leo
              dui, at porta nisi facilisis finibus. In euismod augue vitae nisi
              ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla
              commodo faucibus efficitur quis massa. Praesent felis est, finibus
              et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus
              ipsum id gravida.
            </Paragraph>
            <LearnMore>Learn More</LearnMore>
          </Right>
        </SideBySide>
      </Container>
    </PixelGradeMain>
  );
};

export default PixelGrade;

const PixelGradeMain = styled.div`
  padding: 48px 0;
`;

const SideBySide = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Left = styled.div`
  width: 40%;
`;
const Right = styled.div`
  width: 60%;
`;
const Heading = styled.h2`
  max-width: 601px;
  color: black;
  font-family: "Inter", sans-serif;
  font-size: 36px;
  font-weight: 600;
  line-height: 44px;
`;
const Paragraph = styled.p`
  max-width: 601px;
  color: #717171;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 400;
  margin-top: 16px;
  margin-bottom: 32px;
`;

const LearnMore = styled.button`
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
