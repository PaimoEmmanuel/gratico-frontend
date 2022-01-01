import { useEffect, useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'

import Menu from '../molecules/menu'

const Container = styled.div`
	padding: 32px 20px 20px;
	background-color: transparent;
	border-bottom: 1px solid #4b4b4b;

	@media (min-width: 600px) {
		display: none;
	}
`

const Logo = styled(Link)`
	text-decoration: none;
	margin: 0;
	padding: 0;
	height: 44px;
`

const Nav = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
`
const MenuIcon = styled.div<StyleProps>`
	& span {
		height: 3px;
		width: 23.25px;
		display: block;
		border-radius: 10px;
		background-color: ${({ theme }) => theme.colors.white};
		&:not(:last-child) {
			margin-bottom: 4.5px;
		}

		&:nth-child(1) {
			transform: ${(props) =>
				props.clicked ? 'translateY(7px) rotate(45deg)' : 'translateY(0px) rotate(0deg)'};
		}
		&:nth-child(2) {
			display: ${(props) => (props.clicked ? 'none' : 'block')};
		}
		&:nth-child(3) {
			transform: ${(props) =>
				props.clicked ? 'translateY(0px) rotate(-45deg)' : 'translateY(0px) rotate(0deg)'};
		}
	}
`
const Header = styled.header`
	position: relative;
	width: 315px;
	margin: 0 auto;
	margin-top: 46px;
`

const Heading = styled.h1`
	font-family: Butler;
	font-style: normal;
	font-weight: bold;
	font-size: 34px;
	line-height: 41px
	letter-spacing: -1px
  text-align: center;
	color: ${({ theme }) => theme.colors.white};
	display: flex;
	justify-content: flex-start;
	align-items: center;
`

const SubHeading = styled.p`
	font-family: Graphik;
	font-style: normal;
	font-weight: normal;
	font-size: 14px;
	line-height: 24px;
	letter-spacing: -0.2px;
	color: ${({ theme }) => theme.colors.white};
	margin-top: 7px;
`

const emojiAnimation = keyframes`
  0%
  {
    transform: translateY(-5px);
  }
  50%
  {
    transform: translateY(0);
  }
  100%
  {
    transform: translateY(-5px);
  }
`

const Grin = styled.img`
	margin: 0 6px;
	width: 30px;
	height: 30px;
	animation: ${emojiAnimation} 2s infinite;
`

interface StyleProps {
	clicked: boolean
}

const ExploreHeading: React.FC = () => {
	const [state, setState] = useState({ isNavOpen: false })

	const handleNavClick = () => {
		setState((state) => ({ ...state, isNavOpen: !state.isNavOpen }))
	}

	return (
		<Container>
			<Nav>
				<Logo to='/'>
					<img src='/assets/images/gratico-logo-mobile.png' alt='Gratico logo' />
				</Logo>
				<MenuIcon onClick={handleNavClick} clicked={state.isNavOpen}>
					<span></span>
					<span></span>
					<span></span>
				</MenuIcon>
			</Nav>

			{state.isNavOpen ? <Menu /> : <div></div>}

			<Header>
				<Heading>
					Explore Stories <Grin src='/assets/images/grin.png' alt='' />{' '}
				</Heading>
				<SubHeading>Immerse yourself in everyone’s gratitude</SubHeading>
			</Header>
		</Container>
	)
}
export default ExploreHeading
