import { useEffect, useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components'
// import Confetti from '../atoms/confetti'
import Confetti from 'react-confetti'
import { Link } from 'react-router-dom'

import Navigation from '../molecules/nav'

const Container = styled.div`
	padding: 0;
	background-color: ${({ theme }) => theme.colors.black};

	@media (min-width: 600px) {
		display: none;
	}
	width: 100vw;
`

const Content = styled.div`
	margin-top: 44px;
	padding: 32px 20px;
	position: relative;
`
const Img = styled.img`
	width: 100%;
`
const Heading = styled.h1`
	font-weight: 700;
	font-size: 36px;
	line-height: 40px;
	letter-spacing: -1px;
	text-align: center;
	color: ${({ theme }) => theme.colors.white};
	margin-top: 54px;
`

const Body = styled.p`
	font-size: 16px;
	line-height: 25px;
	letter-spacing: -0.2px;
	color: ${({ theme }) => theme.colors.white};
	text-align: center;
	margin: 32px auto;
	width: 290px;
`

const Write = styled(Link)`
	font-size: 16px;
	letter-spacing: -0.2px;
	width: 200px;
	height: 50px;
	background-color: ${({ theme }) => theme.colors.primary};
	margin: auto;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 8px;
	text-decoration: none;
	color: black;
	margin-bottom: 24px;
	z-index: 5;
	position: relative;
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
	margin: 0 0 0 4px;
	width: 20px;
	height: 20px;
	animation: ${emojiAnimation} 2s infinite;
`
const Explore = styled(Link)`
	font-size: 16px;
	line-height: 18px;
	width: 161px;
	height: 46px;
	color: white;
	padding: 10px;
	border: 1px solid #ffffff;
	border-radius: 6px;
	margin: auto;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	z-index: 5;
	& svg {
		margin-left: 6px;
	}
`
const Absolute = styled.div`
	position: absolute;
`

const HomeHeading: React.FC = () => {
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

			<Navigation
				logoSrc='/assets/images/gratico-logo-mobile.png'
				bgColor='transparent'
				navColor='#ffffff'
			/>

			<Content>
				<Absolute>
					<svg
						width='354'
						height='908'
						viewBox='0 0 354 908'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M1 1C204.488 114.382 321.325 247.012 302.604 351.133C283.884 455.254 120.923 333.624 30.1204 585.915C-60.6817 838.207 435.076 997.187 341.085 851.322'
							stroke='white'
							strokeOpacity='0.4'
							strokeWidth='0.2'
						/>
					</svg>
				</Absolute>

				<Img src='/assets/images/heading.png' alt='Gratico' />
				<Heading>2021 was sure a rollercoaster!</Heading>
				<Body>
					...what did you learn, accomplish or are grateful for? That might just be what someone
					needs right now.
				</Body>

				<Write to='/write'>
					Share your story <Grin src='/assets/images/grin-with-big-eye.png' alt='grin' />
				</Write>

				<Explore to='/explore'>
					Explore Stories
					<svg
						width='15'
						height='13'
						viewBox='0 0 15 13'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M0.374196 6.4087C0.374196 6.66517 0.471112 6.91103 0.643315 7.09246C0.815519 7.27373 1.04923 7.37558 1.29289 7.37558L11.3675 7.37558L7.63328 11.0404C7.44522 11.2125 7.33164 11.4579 7.31882 11.7201C7.30585 11.9823 7.39492 12.2386 7.5652 12.4303C7.73548 12.622 7.97256 12.7326 8.22183 12.7367C8.47108 12.7409 8.71139 12.638 8.88727 12.4521L14.3275 7.11705C14.5138 6.93426 14.6195 6.67813 14.6195 6.41002C14.6195 6.14191 14.5138 5.88575 14.3275 5.70298L8.88727 0.365385C8.64731 0.129654 8.3061 0.0465244 7.99214 0.147358C7.67817 0.24836 7.43918 0.517817 7.36516 0.854563C7.29115 1.19113 7.39335 1.54372 7.63332 1.77963L11.3675 5.44192L1.29293 5.44192C1.04928 5.44192 0.815546 5.54377 0.64335 5.72503C0.471147 5.90647 0.374231 6.15232 0.374231 6.4088L0.374196 6.4087Z'
							fill='white'
						/>
					</svg>
				</Explore>
			</Content>
		</Container>
	)
}
export default HomeHeading
