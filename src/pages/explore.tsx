import React from 'react'
import styled from 'styled-components'

import Dropdown from '../components/molecules/dropdown'
import Footer from '../components/organisms/footer'
import StoryCard from '../components/organisms/story-card'
// import LandingView from '../components/organisms/landing-view'

const Page = styled.div`
	background-color: #121212;
`

interface StoryProps {
	writerName: string
	title: string
	image?: string
	date: string
	readTime: number
	likes: number
}

const story1: StoryProps = {
	writerName: 'Bolatito Akinmurewa',
	title: 'This year was when Jesus taught me to love my neighbours',
	image: '/assets/images/storyImg.png',
	date: 'Jan 1st',
	readTime: 6,
	likes: 15,
}
const story2: StoryProps = {
	writerName: 'Jesulademi Ajimosun',
	title: 'I found the one this year',
	// image: '',
	date: 'Jan 1st',
	readTime: 8,
	likes: 20,
}

const Explore: React.FC<{}> = () => (
	<Page>
		{/* <LandingView /> */}
		<Dropdown />

		<StoryCard
			writerName={story1.writerName}
			title={story1.title}
			image={story1.image}
			date={story1.date}
			readTime={story1.readTime}
			likes={story1.likes}
		/>

		<StoryCard
			writerName={story2.writerName}
			title={story2.title}
			image={story2.image}
			date={story2.date}
			readTime={story2.readTime}
			likes={story2.likes}
		/>

		<StoryCard
			writerName={story1.writerName}
			title={story1.title}
			image={story1.image}
			date={story1.date}
			readTime={story1.readTime}
			likes={story1.likes}
		/>
		<Footer />
	</Page>
)

export default Explore
