import styled from 'styled-components'
import LogoUnderline from '../atoms/logo-underline'

const DropdownWrapper = styled.h3`
	font-size: 20px;
	line-height: 38px;
	letter-spacing: -1px;
	text-align: center;
	color: #ffffff;
`
const Dropdown: React.FC = () => (
	<>
		<DropdownWrapper>Sort story by</DropdownWrapper>
	</>
)

export default Dropdown
