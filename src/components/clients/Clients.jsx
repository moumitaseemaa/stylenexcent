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
import MemberIcon from "../../assets/memberIcon.png";
import NationalIcon from "../../assets/nationalIcon.png";
import ClubsIcon from "../../assets/clubsIcon.png";

const Clients = () => {
  return (
    <ClientMain>
      <Container>
        <Head>Our Clients</Head>
        <Paragraph $peraSize $peraTop>
          We have been working with some Fortune 500+ clients
        </Paragraph>
        <SideBySide $mTop>
          <Img src={Clients1} alt={Clients1} />
          <Img src={Clients2} alt={Clients2} />
          <Img src={Clients3} alt={Clients3} />
          <Img src={Clients4} alt={Clients4} />
          <Img src={Clients5} alt={Clients5} />
          <Img src={Clients6} alt={Clients6} />
          <Img src={Clients7} alt={Clients7} />
        </SideBySide>
        <Heading $width $top $bottom $size $weight $height>
          Manage your entire community in a single system
        </Heading>
        <Paragraph $peraSize $mgBottom $peraTop>
          Who is Nextcent suitable for?
        </Paragraph>
        <SideBySide>
          <ClientCard>
            <Img src={MemberIcon} alt={MemberIcon} />
            <Heading $bottom>Membership Organisations</Heading>
            <Paragraph $paraWidth $peraHeight>
              Our membership management software provides full automation of
              membership renewals and payments
            </Paragraph>
          </ClientCard>
          <ClientCard>
            <Img src={NationalIcon} alt={NationalIcon} />
            <Heading $bottom>National Associations</Heading>
            <Paragraph $paraWidth $peraHeight>
              Our membership management software provides full automation of
              membership renewals and payments
            </Paragraph>
          </ClientCard>
          <ClientCard>
            <Img src={ClubsIcon} alt={ClubsIcon} />
            <Heading $bottom>Clubs And Groups</Heading>
            <Paragraph $paraWidth $peraHeight>
              Our membership management software provides full automation of
              membership renewals and payments
            </Paragraph>
          </ClientCard>
        </SideBySide>
      </Container>
    </ClientMain>
  );
};

export default Clients;

const ClientMain = styled.div`
  margin: 40px 0 0;
  text-align: center;
`;

const SideBySide = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${(props) => props.$mTop && "46px"};
`;

const Head = styled.h2`
  color: black;
  font-family: "Inter", sans-serif;
  font-size: 36px;
  font-weight: 600;
  line-height: 44px;
`;

const Heading = styled.h2`
  max-width: ${(props) => (props.$width ? "542px" : "192px")};
  color: black;
  font-family: "Inter", sans-serif;
  font-size: ${(props) => (props.$size ? "36px" : "28px")};
  font-weight: ${(props) => (props.$weight ? "600" : "700")};
  line-height: ${(props) => (props.$height ? "44px" : "36px")};
  margin: 0 auto;
  margin-top: ${(props) => (props.$top ? "40px" : "16px")};
  margin-bottom: ${(props) => props.$bottom && "8px"};
`;
const Paragraph = styled.p`
  max-width: ${(props) => (props.$paraWidth ? "251px" : "100%")};
  color: #717171;
  font-family: "Inter", sans-serif;
  font-size: ${(props) => (props.$peraSize ? "16px" : "14px")};
  font-weight: 400;
  margin-top: ${(props) => props.$peraTop && "8px"};
  margin-bottom: ${(props) => props.$mgBottom && "16px"};
  margin-bottom: 76px;
  line-height: ${(props) => props.$peraHeight && "20px"};
  margin: 0 auto;
`;

const ClientCard = styled.div`
  width: 299px;
  height: 280px;
  padding: 24px 16px;
  text-align: center;
`;
