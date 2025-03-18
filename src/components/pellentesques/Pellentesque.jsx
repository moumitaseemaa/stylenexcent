import React from "react";
import styled from "styled-components";
import Container from "../common/Container";
import { FaArrowRight } from "react-icons/fa6";
export const Pellentesque = () => {
  return (
    <PellentesqueMain>
      <Container>
        <Heading>Pellentesque suscipit fringilla libero eu.</Heading>
        <GetDemo>
          Get a Demo <FaArrowRight />
        </GetDemo>
      </Container>
    </PellentesqueMain>
  );
};

export default Pellentesque;

const PellentesqueMain = styled.div`
  padding: 32px 0;
  text-align: center;
`;

const Heading = styled.h2`
  max-width: 877px;
  color: black;
  font-family: "Inter", sans-serif;
  font-size: 64px;
  font-weight: 600;
  line-height: 76px;
  margin: 0 auto 32px;
`;

const GetDemo = styled.button`
  background: #4caf4f;
  padding: 14px 32px;
  color: white;
  border: none;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 400;
  border-radius: 6px;
  display: flex;
  align-items: center;
  column-gap: 8px;
  margin: 0 auto;

  &:hover {
    background: #f5f7fa;
    color: #4caf4f;
    transition: 0.4s;
  }
`;
