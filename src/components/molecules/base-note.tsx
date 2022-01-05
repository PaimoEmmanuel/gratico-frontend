import styled from 'styled-components'
import LogoUnderline from '../atoms/logo-underline'

const BaseText = styled.h3`
	font-weight: bold;
	font-size: 36px;
	line-height: 40px;
	text-align: center;
	letter-spacing: -1px;
	padding: 0;
	width: 280px;
	margin: 0 auto;
`
const LineWrap = styled.div`
	text-align: center;
`
const BaseNote: React.FC = () => (
	<>
		<BaseText>Share beautiful experiences for all to read.</BaseText>
		<LineWrap>
			<LogoUnderline />
		</LineWrap>
	</>
)

export default BaseNote
