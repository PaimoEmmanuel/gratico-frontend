import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  padding: 35px 30px;
  background-color: ${({ theme }) => theme.colors.primary};
  & img {
    margin-bottom: 16px;
  }

  @media (min-width: 600px) {
    display: none;
  }
`;

const Logo = styled(Link)`
  text-decoration: none;
  margin: 0;
  padding: 0;
  height: 44px;
`;

const NavLink = styled.a`
  color: black;
  font-size: 15px;
  margin-bottom: 24px;
  display: block;
`;
const Footnote = styled.p`
  font-size: 15px;
  line-height: 16.5px;
  margin-top: 40px;
`;

const Footer: React.FC = () => (
  <Container>
    <Logo to="/">
      <img src="/assets/images/mobile-footer-logo.png" alt="Gratico logo" />
    </Logo>
    <NavLink target="_blank" href="https://forms.gle/9qcA39xMXnpBVmLaA">
      Leave a feedback
    </NavLink>
    {/* <NavLink href=''>About us</NavLink> */}
    <Footnote>© 2021 The GratiCo. All Rights Reserved.</Footnote>
  </Container>
);
export default Footer;
