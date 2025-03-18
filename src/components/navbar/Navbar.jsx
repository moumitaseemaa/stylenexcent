import React from "react";
import styled from "styled-components";
import NavLogo from "../../assets/Logo.png";
import NavItems from "./NavItems";
import Img from "../common/Img";

const Navbar = () => {
  return (
    <NavMain>
      <NavContainer>
        <SideBySide>
          <Logo>
            <Img src={NavLogo} alt={NavLogo} />
          </Logo>
          <MenuItem>
            <NavItems />
          </MenuItem>
          <GroupButton>
            <SignUp $mRight>Login</SignUp>
            <SignUp $bg>Sign up</SignUp>
          </GroupButton>
        </SideBySide>
      </NavContainer>
    </NavMain>
  );
};

export default Navbar;

const NavMain = styled.nav`
  background: #f5f7fa;
  padding: 22px 0;
`;
const NavContainer = styled.div`
  max-width: 1215px;
  margin: 0 auto;
`;
const SideBySide = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  width: 14%;
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

const SignUp = styled.button`
  background: ${(props) => (props.$bg ? "#4caf4f" : "#f5f7fa")};
  color: ${(props) => (props.$bg ? "white" : "black")};
  padding: 10px 20px;
  border: none;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 500;
  border-radius: 6px;
  margin-right: ${(props) => (props.$mRight ? "14px" : "0")};

  &:hover {
    background: #f5f7fa;
    color: #4caf4f;
    transition: 0.4s;
  }
`;
