import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Menu from "./menu";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 24px 6px 20px;
  background-color: ${({ theme }) => theme.colors.primary};
`;
interface StyleProps {
  clicked: boolean;
}

const MenuIcon = styled.div<StyleProps>`
  & span {
    height: 3px;
    width: 23.25px;
    display: block;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.black};
    &:not(:last-child) {
      margin-bottom: 4.5px;
    }

    &:nth-child(1) {
      transform: ${(props) =>
        props.clicked
          ? "translateY(7px) rotate(45deg)"
          : "translateY(0px) rotate(0deg)"};
    }
    &:nth-child(2) {
      display: ${(props) => (props.clicked ? "none" : "block")};
    }
    &:nth-child(3) {
      transform: ${(props) =>
        props.clicked
          ? "translateY(0px) rotate(-45deg)"
          : "translateY(0px) rotate(0deg)"};
    }
  }
`;

const Navigation: React.FC = () => {
  const [state, setState] = useState({ isNavOpen: false });

  const handleNavClick = () => {
    setState((state) => ({ ...state, isNavOpen: !state.isNavOpen }));
  };
  return (
    <Nav>
      <Link to="/">
        <img src="/assets/images/mobile-footer-logo.png" alt="Gratico logo" />
      </Link>
      {state.isNavOpen && (
        <div style={{ marginTop: "35px" }}>
          <Menu />
        </div>
      )}

      <MenuIcon onClick={handleNavClick} clicked={state.isNavOpen}>
        <span></span>
        <span></span>
        <span></span>
      </MenuIcon>
    </Nav>
  );
};

export default Navigation;
