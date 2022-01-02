import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import axios from 'axios'

import StoryCard from '../organisms/story-card'

const Stories = styled.div`
	background-color: #121212;
	margin: 0;
	padding: 0;
`

const MoreActions = styled.div`
	margin: 40px auto;
`

const SeeMoreStories = styled.div`
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
	margin-bottom: 16px;
`

const ShareStory = styled(Link)`
	font-size: 14px;
	line-height: 15px;
	text-align: center;
	letter-spacing: -0.2px;
	text-decoration-line: underline;
	color: #ffffff;
	padding: 10px;
	border: 1px solid #ffffff;
	border-radius: 4px;
	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
	width: fit-content;

	& svg {
		width: 12px;
		margin-left: 8px;
	}
`

interface StoryDataProps {
	id: number
	writerName?: string
	title: string
	cover_img?: string
	date?: string
	readTime?: number
	likes?: number
}

const storylist: StoryDataProps[] = [
	{
		id: 1,
		writerName: 'Bolatito Akinmurewa',
		title: 'This year was when Jesus taught me to love my neighbours',
		cover_img: '/assets/images/storyImg.png',
		date: 'Jan 1st',
		readTime: 6,
		likes: 15,
	},
	{
		id: 2,
		writerName: 'Jesulademi Ajimosun',
		title: 'I found the one this year',
		// cover_img: '',
		date: 'Jan 1st',
		readTime: 8,
		likes: 20,
	},
	{
		id: 3,
		writerName: 'Bolatito Akinmurewa',
		title: 'This year was when Jesus taught me to love my neighbours',
		cover_img: '/assets/images/storyImg.png',
		date: 'Jan 1st',
		readTime: 6,
		likes: 15,
	},
]

const ExploreStories: React.FC = () => {
	const [state, setState] = useState({ stories: storylist })

	// use axios
	const getStoriesFetch = async () => {
		fetch('http://api.gratico.xyz/api/stories')
			.then((response) => response.json())
			.then((data) => console.log(data))
	}

	const filterResponse = (data: any) => {
		// should take an array of objects
		// map this array into a new array of new objects
	}

	const getStories = async () => {
		axios.get('http://api.gratico.xyz/api/stories').then((res) => {
			let result = res.data
			let stories = result.data

			setState((state) => ({ ...state, stories: [...state.stories].concat(stories) }))
			console.log(state)
			// setState((state) => ({ ...state, stories: [...state.stories] }))
			// return stories
		})
	}

	useEffect(() => {
		getStories()
		console.log(state)
	}, [])

	return (
		<Stories>
			{state.stories.map((story) => (
				<StoryCard
					key={story.id}
					writerName={story.writerName ? story.writerName : 'Chibs'}
					title={story.title}
					cover_img={story.cover_img}
					date={story.date}
					readTime={story.readTime}
					likes={story.likes}
				/>
			))}

			<MoreActions>
				<SeeMoreStories>See more stories</SeeMoreStories>

				<ShareStory to='/write-story'>
					Share your story
					<svg
						width='12'
						height='12'
						viewBox='0 0 12 12'
						fill='#ffffff'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							fill-rule='evenodd'
							clip-rule='evenodd'
							d='M5.46405 0H6.536V5.31703H6.5359C6.53652 5.48189 6.67001 5.61528 6.83477 5.6159H11.9999V6.53605H6.83477C6.67001 6.53668 6.53651 6.67006 6.5359 6.83482V12H5.46395V6.83482H5.46405C5.46342 6.67006 5.32994 6.53667 5.16518 6.53605H0V5.6159H5.16518C5.32994 5.61527 5.46344 5.48189 5.46405 5.31703V0Z'
							fill='#FFFFF'
						/>
					</svg>
				</ShareStory>
			</MoreActions>
		</Stories>
	)
}
export default ExploreStories
