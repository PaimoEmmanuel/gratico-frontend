import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Menu from './menu'

const Container = styled.div<NavStyleProps>`
	padding: 0;
	// background-color: ${({ theme }) => theme.colors.black};
	background-color: ${(props) => (props.bgColor ? props.bgColor : 'transparent')};
	// width: 100vw;

	@media (min-width: 600px) {
		display: none;
	}
`

const Logo = styled.a`
	text-decoration: none;
	margin: 0;
	padding: 0;
	height: 44px;
`

const NavWrapper = styled.div`
	// width: 100%;
	position: relative;
`

const Nav = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 32px 20px 6px;
`

const styles: { [key: string]: React.CSSProperties } = {
	wrapperScrolled: {
		position: 'fixed',
		top: '58px',
		zIndex: 101,
		// width: '100%',
	},
	navScrolled: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: '20px 20px 6px',
		width: '100%',
		position: 'fixed',
		top: 0,
		left: 0,
		backgroundColor: '#FFFFFF',
		zIndex: 99,
	},
}

const MenuIcon = styled.div<StyleProps>`
	& span {
		height: 3px;
		width: 23.25px;
		display: block;
		border-radius: 10px;
		background-color: ${(props) => (props.sticky ? '#333333' : props.bgColor)};
		transition: transform 0.2s ease-out;
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

interface StyleProps {
	clicked: boolean
	sticky?: boolean
	bgColor?: string
}

interface NavStyleProps {
	bgColor: string
}

interface NavProps {
	logoSrc: string
	bgColor: string
	navColor: string
}

const Navigation: React.FC<NavProps> = ({ logoSrc, bgColor, navColor }) => {
	const [state, setState] = useState({ isNavOpen: false })

	const [scrolled, setScrolled] = useState(false)

	const handleScroll = () => {
		const offset = window.scrollY
		if (offset > 10) {
			setScrolled(true)
		} else {
			setScrolled(false)
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
	})

	const handleNavClick = () => {
		setState((state) => ({ ...state, isNavOpen: !state.isNavOpen }))
	}

	return (
		<Container bgColor={bgColor}>
			{scrolled ? (
				<NavWrapper style={styles.wrapperScrolled} id='nav-wrapper'>
					<Nav style={styles.navScrolled} id='nav'>
						<Logo href='/'>
							<img src='/assets/images/logo-monochrome.png' alt='Gratico logo' />
						</Logo>
						<MenuIcon onClick={handleNavClick} clicked={state.isNavOpen} sticky={true}>
							<span></span>
							<span></span>
							<span></span>
						</MenuIcon>
					</Nav>

					{state.isNavOpen ? (
						<Menu isOpen={state.isNavOpen} scrolled={scrolled} />
					) : (
						<Menu isOpen={state.isNavOpen} />
					)}
				</NavWrapper>
			) : (
				<NavWrapper>
					<Nav>
						<Logo href='/'>
							<img src={logoSrc} alt='Gratico logo' />
						</Logo>
						<MenuIcon onClick={handleNavClick} clicked={state.isNavOpen} bgColor={navColor}>
							<span></span>
							<span></span>
							<span></span>
						</MenuIcon>
					</Nav>

					{state.isNavOpen ? (
						<Menu isOpen={state.isNavOpen} scrolled={scrolled} />
					) : (
						<Menu isOpen={state.isNavOpen} />
					)}
				</NavWrapper>
			)}
		</Container>
	)
}
export default Navigation
