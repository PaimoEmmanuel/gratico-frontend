import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 24px 6px 20px;
  background-color: ${({ theme }) => theme.colors.primary};
`;
const Menu = styled.div`
  & span {
    height: 3px;
    width: 23.25px;
    display: block;
    background-color: ${({ theme }) => theme.colors.black};
    &:not(:last-child) {
      margin-bottom: 4.5px;
    }
  }
`;

const Navigation: React.FC = () => (
  <Nav>
    <Link to="/">
      <img src="/assets/images/mobile-footer-logo.png" alt="Gratico logo" />
    </Link>

    <Menu>
      <span></span>
      <span></span>
      <span></span>
    </Menu>
  </Nav>
);

export default Navigation;
