import styled from "styled-components";

interface CopyToastStyleProps {
  show: boolean;
}

const Copy = styled.div<CopyToastStyleProps>`
  width: 122px;
//   width: ${(props) => (props.show ? "122px" : "0")};
  height: 45px;
//   height: ${(props) => (props.show ? "45px" : "0")};
  background: rgba(179, 206, 159, 0.8);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-weight: normal;
  // font-size: 14px;
//   font-size: ${(props) => (props.show ? "14px" : "0")};
  line-height: 15px;
  color: #ffffff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: ${(props) => (props.show ? "translate(-50%, -50%)" : "translate(-50%, 0%)")};
  opacity: ${(props) => (props.show ? "1" : "0")};
  transition: all 0.5s ease-out;
`;

const CopyToast: React.FC<CopyToastStyleProps> = ({ children, show }) => (
  <Copy show={show}>{children}</Copy>
);
export default CopyToast;
