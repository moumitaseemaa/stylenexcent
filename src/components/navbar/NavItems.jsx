import React from "react";
import styled from "styled-components";

const NavItems = () => {
  return (
    <div>
      <UnorderList>
        <List>Home</List>
        <List>Service</List>
        <List>Feature</List>
        <List>Product</List>
        <List>Testimonial</List>
        <List>FAQ</List>
      </UnorderList>
    </div>
  );
};

export default NavItems;

const UnorderList = styled.ul`
  display: flex;
  align-items: center;
  column-gap: 50px;
  list-style: none;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 500;
`;

const List = styled.div`
&:hover{
color:#4CAF4F
}
`