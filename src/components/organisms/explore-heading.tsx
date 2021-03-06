import { useEffect, useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'

import Menu from '../molecules/menu'
import Navigation from '../molecules/nav'

const Container = styled.div`
	// padding: 32px 20px 20px;
	background-color: transparent;
	border-bottom: 1px solid #4b4b4b;

	@media (min-width: 600px) {
		display: none;
	}
`

const Header = styled.header`
	position: relative;
	width: 315px;
	margin: 40px auto 20px;
`

const Heading = styled.h1`
	font-family: Butler;
	font-style: normal;
	font-weight: bold;
	font-size: 36px;
	line-height: 43px;
	letter-spacing: -1px;
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
	font-size: 16px;
	line-height: 25px;
	color: ${({ theme }) => theme.colors.white};
	margin-top: 7px;
	width: 272px;

	& span {
		font-weight: 900;
	}
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
	margin: 0 8px;
	width: 34px;
	height: 34px;
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
			<Navigation
				logoSrc='/assets/images/gratico-logo-mobile.png'
				bgColor='transparent'
				navColor='#ffffff'
			/>

			<Header>
				<Heading>
					Explore Stories <Grin src='/assets/images/grin.png' alt='' />{' '}
				</Heading>
				<SubHeading>
					The motivation you need is in one of these stories! <span>Dig in!</span>
				</SubHeading>
			</Header>
		</Container>
	)
}
export default ExploreHeading
