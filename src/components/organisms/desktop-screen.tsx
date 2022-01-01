import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Confetti from 'react-confetti'

const Container = styled.div`
	position: relative;
	padding: 0 30px;
	background-color: #090913;
	height: 100vh;
	max-height: 1400px;
	display: flex;
	flex-direction: column-reverse;
	justify-content: space-between;
	align-items: center;

	@media (max-width: 600px) {
		display: none;
	}

	@media (min-width: 1024px) {
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
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
	width: 280px;
	display: flex;
	object-fit: cover;

	@media (min-width: 1024px) {
		width: 340px;
		margin-left: 60px;
		align-self: flex-end;
	}

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
	width: 440px;
	margin: 0 auto;

	@media (min-width: 1024px) {
		align-self: flex-end;
		margin-bottom: 80px;
		width: auto;
	}

	@media (min-width: 1300px) {
		margin-bottom: 160px;
	}
`

const Gratico = styled.h2`
	width: 100%;
	font-family: Butler;
	font-style: normal;
	font-weight: 900;
	font-size: 50px;
	line-height: 54px;
	letter-spacing: -1px;
	color: #ffffff;
	margin-bottom: 10px;

	@media (min-width: 1024px) {
		width: 540px;
		font-size: 68px;
		line-height: 72px;
		margin-bottom: 32px;
	}

	@media (min-width: 1100px) {
		width: 560px;
		font-size: 70px;
		line-height: 74px;
	}

	@media (min-width: 1300px) {
		width: 660px;
		font-size: 72px;
		line-height: 78px;
	}
`

const Instruction = styled.p`
	width: 100%;
	font-family: Graphik;
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	line-height: 30px;
	letter-spacing: -1px;
	color: #ffffff;

	@media (min-width: 1024px) {
		width: 530px;
		font-size: 22px;
		line-height: 30px;
	}
`

const GraticoLink = styled.span`
	color: ${({ theme }) => theme.colors.primary};
	font-style: italic;
`

const DesktopScreen: React.FC = () => {
	const [dimension, setDimension] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
	})

	useEffect(() => {
		window.addEventListener('resize', () => {
			setDimension({ width: window.innerWidth, height: window.innerHeight })
		})
	}, [])

	return (
		<Container>
			<Confetti width={dimension.width} height={dimension.height} recycle={false} />
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
