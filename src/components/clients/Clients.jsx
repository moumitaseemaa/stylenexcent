import React from "react";
import styled from "styled-components";
import Container from "../common/Container";
import Img from "../common/Img";
import Clients1 from "../../assets/clients1.png";
import Clients2 from "../../assets/clients2.png";
import Clients3 from "../../assets/clients3.png";
import Clients4 from "../../assets/clients4.png";
import Clients5 from "../../assets/clients5.png";
import Clients6 from "../../assets/clients6.png";
import Clients7 from "../../assets/clients3.png";

const Clients = () => {
  return (
    <ClientMain>
      <Container>
        <Heading>Our Clients</Heading>
        <Paragraph>
          We have been working with some Fortune 500+ clients
        </Paragraph>
        <SideBySide>
          <Img src={Clients1} alt={Clients1} />
          <Img src={Clients2} alt={Clients2} />
          <Img src={Clients3} alt={Clients3} />
          <Img src={Clients4} alt={Clients4} />
          <Img src={Clients5} alt={Clients5} />
          <Img src={Clients6} alt={Clients6} />
          <Img src={Clients7} alt={Clients7} />
        </SideBySide>
        <Heading $width>
        Manage your entire community in a single system
        </Heading>
        <Paragraph $mgbottom>
        Who is Nextcent suitable for?

        </Paragraph>
      </Container>
    </ClientMain>
  );
};

export default Clients;

const ClientMain = styled.div`
  margin: 40px 0;
  text-align: center;
`;

const Heading = styled.h2`
max-width: ${props => props.$width ?  "542px" :"auto"}
  color: black;
  font-family: "Inter", sans-serif;
  font-size: 36px;
  font-weight: 600;
  line-height: 44px;
`;
const Paragraph = styled.p`
  color: #717171;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 400;
  margin-top: 8px;
  margin-bottom: 76px;
  margin-bottom: ${ props => props.$mgbottom && "16px"}
`;

const SideBySide = styled.div`
  display: flex;
  justify-content: space-between;
`;
