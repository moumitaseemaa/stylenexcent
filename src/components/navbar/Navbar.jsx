import React from "react";
import styled from "styled-components";
import Container from "../common/Container";
import NavLogo from "../../assets/Logo.png";
import NavItems from "./NavItems";
import Img from "../common/Img";

const Navbar = () => {
  return (
    <NavMain>
      <Container>
        <SideBySide>
          <Logo>
            <Img src={NavLogo} alt={NavLogo} />
          </Logo>
          <MenuItem>
            <NavItems />
          </MenuItem>
          <GroupButton>
            <SignUp >Login</SignUp>
            <SignUp $bg>Sign up</SignUp>
          </GroupButton>
        </SideBySide>
      </Container>
    </NavMain>
  );
};

export default Navbar;

const NavMain = styled.nav`
  background: #f5f7fa;
  padding: 22px 0;
`;

const SideBySide = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.div`
  width: 14;
`;

const MenuItem = styled.div`
  width: 66%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GroupButton = styled.div`
  width: 20%;
`;

// const Login = styled.button`
//   padding: 10px 20px;
//   color: #4caf4f;
//   border: none;
//   font-family: "Inter", sans-serif;
//   font-size: 14px;
//   font-weight: 500;
//   margin-right: 14px;
  
//   &:hover {
//     background: #4caf4f;
//     color: white;
//     border-radius: 6px;
//     transition:.4s;
//   }
// `;
const SignUp = styled.button`
  background:${props => props.$bg ?  "#4caf4f" :"#f5f7fa"};
  color: ${props => props.$bg ?  "white" :"black"};
  padding: 10px 20px;
  border: none;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 500;
  border-radius: 6px;

  &:hover {
    background:#f5f7fa ;
    color: #4caf4f ;
    transition:.4s;
  }

`;


