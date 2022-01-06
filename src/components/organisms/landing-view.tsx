import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import styled from 'styled-components'
import LandingLogo from '../atoms/landing-logo'
import LogoUnderline from '../atoms/logo-underline'

const Container = styled.div`
	height: 100vh;
	width: 100vw;
	min-height: 375px;
	background-color: ${({ theme }) => theme.colors.primary};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	text-align: center;
	position: relative;
	// z-index: 105;
	// top: 0;
	// right: 0;
`
const Text = styled.p`
	margin-top: 16px;
	font-size: 18px;
	line-height: 22px;
	& span {
		display: inline-block;
		overflow: hidden;
		opacity: 1;
		// width: auto;
		&:first-child {
			width: 49px;
		}
		&:nth-child(2) {
			width: 74px;
		}
		&:nth-child(3) {
			width: 106px;
		}
		&:nth-child(4) {
			width: 24px;
		}
		&:nth-child(5) {
			width: 24px;
		}
		&:nth-child(6) {
			width: 20px;
		}
		&:nth-child(7) {
			width: 18px;
		}
		&:nth-child(8) {
			width: 40px;
		}
	}
`
const LogoWrap = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`
const LineWrap = styled.div`
	margin-top: -10px;
	position: relative;
`
const LineWrapAfter = styled.div`
	position: absolute;
	right: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background-color: ${({ theme }) => theme.colors.primary};
`

const LandingView: React.FC<{}> = () => {
	const underlineAfterRef = useRef(null)
	const logoWrapRef = useRef(null)
	const containerRef = useRef(null)
	useEffect(() => {
		const span = document.querySelectorAll('span')
		gsap.timeline()
			.from(logoWrapRef.current, {
				duration: 1,
				ease: 'power2',
				y: 50,
				opacity: 0,
			})
			.to(underlineAfterRef.current, { duration: 1, width: '0' })
			.from(span[0], {
				duration: 1,
				ease: 'power2',
				width: 0,
				opacity: 0,
			})
			.from(span[1], {
				duration: 1,
				ease: 'power2',
				width: 0,
				opacity: 0,
			})
			.from(span[2], {
				duration: 1,
				ease: 'power2',
				width: 0,
				opacity: 0,
			})
			.from(span[3], {
				duration: 1,
				ease: 'power2',
				width: 0,
				opacity: 0,
			})
			.from(span[4], {
				duration: 1,
				ease: 'power2',
				width: 0,
				opacity: 0,
			})
			.from(span[5], {
				duration: 1,
				ease: 'power2',
				width: 0,
				opacity: 0,
			})
			.from(span[6], {
				duration: 1,
				ease: 'power2',
				width: 0,
				opacity: 0,
			})
			.to(containerRef.current, {
				duration: 0.1,
				ease: 'power2',
				position: 'relative',
			})
			.to(containerRef.current, {
				duration: 0.7,
				ease: 'power2',
				// opacity: 0,
				minHeight: 0,
				height: 0,
			})
	}, [])
	return (
		<Container ref={containerRef}>
			<LogoWrap ref={logoWrapRef} className='container'>
				<LandingLogo />
				<LineWrap>
					<LogoUnderline />
					<LineWrapAfter ref={underlineAfterRef} />
				</LineWrap>
			</LogoWrap>
			<Text>
				<span>Share</span> <span>beautiful</span> <span>experiences</span>
				<br />
				<span> for</span> <span>all</span> <span>to</span> <span>read.</span>
			</Text>
		</Container>
	)
}

export default LandingView
