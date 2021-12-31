import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Confetti from 'react-confetti'
import { useWindowSize } from 'usehooks-ts'

import BaseNote from '../molecules/base-note'

const Container = styled.div`
	margin-bottom: 50px;

	@media (min-width: 1000px) {
		display: none;
	}
`
const Heading = styled.h3`
	font-size: 34px;
	line-height: 40px;
	letter-spacing: -1px;
	padding: 34px 40px 40px 40px;
	text-align: center;
`
const Title = styled.p`
    font-weight: 600;
    line-height: 17.6px
    letter-spacing: -0.2px;
    text-align: center;
    margin-top: 44px;
`
const Text = styled.p`
	font-size: 15px;
	letter-spacing: -0.2px;
	line-height: 24px;
	text-align: center;
	padding: 14px 40px 24px;
`
const Explore = styled(Link)`
	font-size: 14px;
	color: #000000;
	padding: 10px;
	border: 1px solid #000000;
	margin: 0 auto 64px auto;
	display: flex;
	justify-content: center;
	align-items: center;
	width: fit-content;
	& svg {
		margin-left: 6px;
	}
`
const Write = styled(Link)`
	font-size: 15px;
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
	& svg {
		margin-left: 5px;
	}
`
const ImgWrap = styled.div`
	padding: 0 40px;
	display: flex;
	overflow: hidden;
`
const Img = styled.img`
	width: 70%;
	margin-left: 15%;
	transition: all 0.3s;
`
const HomeExplore: React.FC = () => {
	const { width, height } = useWindowSize()

	const InitialStories = [
		{
			image: '/assets/images/explore-1.png',
			title: 'Met the one!',
			transform: 'rotate(0deg) scale(1)',
		},
		{
			image: '/assets/images/explore-2.png',
			title: 'Met the two!',
			transform: 'rotate(8deg) scale(0.9)',
		},
		// {
		//   image: "/assets/images/explore-3.png",
		//   title: "Met the three!",
		//   transform: "rotate(8deg) scale(0.9)",
		// },
		// {
		//   image: "/assets/images/explore-4.png",
		//   title: "Met the four!",
		//   transform: "rotate(8deg) scale(0.9)",
		// },
	]
	const [stories, setStories] = useState(InitialStories)
	const [activeStory, setActiveStory] = useState(0)

	const switchStory = (activeStory: number) => {
		let newArr = stories
		stories.forEach((story, index) => {
			if (activeStory === index) {
				if (index === 0) {
					newArr[index] = { ...story, transform: 'translateX(00%)' }
				} else {
					newArr[index] = { ...story, transform: 'translateX(-100%)' }
				}
			} else if (activeStory < index) {
				newArr[index] = { ...story, transform: 'rotate(8deg) scale(0.9)' }
			} else {
				newArr[index] = {
					...story,
					transform: `rotate(-8deg) scale(0.9) translateX(-${(index + 1) * 100}%)`,
				}
			}
		})
		setStories(newArr)
	}
	useEffect(() => {
		console.log(stories)
	}, [activeStory, stories])
	return (
		<Container>
			<Confetti width={width} height={height} recycle={false} />
			<Heading>It’s really easy to not remember what you are grateful for...</Heading>
			<ImgWrap>
				{stories.map((story, index) => (
					<Img
						key={story.image}
						src={story.image}
						style={{ transform: story.transform }}
						alt={story.title}
						onClick={() => {
							setActiveStory(index)
							switchStory(index)
						}}
					/>
				))}
				{/* <Img src="/assets/images/explore-1.png" alt="" /> */}
			</ImgWrap>
			<Title>{stories[activeStory].title}</Title>
			<Text>
				did you meet someone special or some set of people that switched things up for good this year?
			</Text>
			{/* <div>progress bar</div> */}
			<Write to='/write-story'>
				Share your story
				<svg
					width='12'
					height='12'
					viewBox='0 0 12 12'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						fill-rule='evenodd'
						clip-rule='evenodd'
						d='M5.46405 0H6.536V5.31703H6.5359C6.53652 5.48189 6.67001 5.61528 6.83477 5.6159H11.9999V6.53605H6.83477C6.67001 6.53668 6.53651 6.67006 6.5359 6.83482V12H5.46395V6.83482H5.46405C5.46342 6.67006 5.32994 6.53667 5.16518 6.53605H0V5.6159H5.16518C5.32994 5.61527 5.46344 5.48189 5.46405 5.31703V0Z'
						fill='black'
					/>
				</svg>
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
						fill='black'
					/>
				</svg>
			</Explore>
			<BaseNote />
		</Container>
	)
}
export default HomeExplore
