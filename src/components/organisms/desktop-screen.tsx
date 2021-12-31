import styled from 'styled-components'
import Confetti from 'react-confetti'
import { useWindowSize } from 'usehooks-ts'

const Container = styled.div`
	position: relative;
	padding: 0 30px;
	background-color: #090913;
	height: 100vh;
	max-height: 1400px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	@media (max-width: 1000px) {
		display: none;
	}

	@media (min-width: 1024px) {
	}
`
const Logo = styled.img`
	color: black;
	font-size: 15px;
	margin-bottom: 24px;
	display: block;
	position: absolute;
	top: 30px;
	left: 30px;
`
const PhoneImage = styled.img`
	width: 340px;
	display: flex;
	align-self: flex-end;
	margin-left: 60px;
	object-fit: cover;

	@media (min-width: 1100px) {
		width: 360px;
		margin-left: 80px;
	}

	@media (min-width: 1200px) {
		width: 380px;
		margin-left: 100px;
	}

	@media (min-width: 1300px) {
		width: 440px;
		margin-left: 140px;
	}
`

const GraticoContent = styled.div`
	align-self: flex-end;
	margin-bottom: 80px;

	@media (min-width: 1300px) {
		margin-bottom: 160px;
	}
`

const Gratico = styled.h2`
	width: 540px;
	font-family: Butler;
	font-style: normal;
	font-weight: 900;
	font-size: 68px;
	line-height: 78px;
	letter-spacing: -1px;
	color: #ffffff;
	margin-bottom: 32px;

	@media (min-width: 1100px) {
		width: 560px;
		font-size: 70px;
	}

	@media (min-width: 1300px) {
		width: 660px;
		font-size: 72px;
	}
`

const Instruction = styled.p`
	width: 530px;
	font-family: Graphik;
	font-style: normal;
	font-weight: normal;
	font-size: 22px;
	line-height: 30px;
	letter-spacing: -1px;
	color: #ffffff;
`

const GraticoLink = styled.span`
	color: ${({ theme }) => theme.colors.primary};
	font-style: italic;
`

const DesktopScreen: React.FC = () => {
	const { width, height } = useWindowSize()

	return (
		<Container>
			<Confetti width={width} height={height} recycle={true} />
			<Logo src='/assets/images/logo-desktop.png' alt='Gratico logo' />
			<PhoneImage src='/assets/images/gratico-mobile.png' alt='mobile view' />
			<GraticoContent>
				<Gratico>gratico is currently only available on mobile.</Gratico>
				<Instruction>
					Please, open <GraticoLink>gratico.xyz </GraticoLink> on your phone’s browser to read faith
					based contents.
				</Instruction>
			</GraticoContent>
		</Container>
	)
}
export default DesktopScreen
