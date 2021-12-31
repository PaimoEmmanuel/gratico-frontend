import styled from "styled-components";

const Container = styled.div`
  padding: 35px 30px;
  background-color: ${({ theme }) => theme.colors.primary};
  & img {
    margin-bottom: 16px;
  }
`;
const Link = styled.a`
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
    <img src="/assets/images/mobile-footer-logo.png" alt="Gratico logo" />
    <Link href="">Give feedback</Link>
    <Link href="">About us</Link>
    <Footnote>© 2021 The GratiCo. All Rights Reserved.</Footnote>
  </Container>
);
export default Footer;
