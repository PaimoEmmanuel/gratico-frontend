import styled from "styled-components";
import LogoUnderline from "../atoms/logo-underline";

const BaseText = styled.h3`
  font-size: 34px;
  line-height: 38px;
  letter-spacing: -1px;
//   padding: 64px 30px 0 30px;
  text-align: center;
`;
const LineWrap = styled.div`
  text-align: center;
`;
const BaseNote: React.FC = () => (
  <>
    <BaseText>
      building a heart full of gratitude, one story at a time.
    </BaseText>
    <LineWrap>
      <LogoUnderline />
    </LineWrap>
  </>
);

export default BaseNote;
