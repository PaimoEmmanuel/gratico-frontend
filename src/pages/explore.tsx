import React, { useState } from 'react'
import styled from 'styled-components'

import Dropdown from '../components/molecules/dropdown'
import ExploreHeading from '../components/organisms/explore-heading'
import ExploreStories from '../components/organisms/explore-stories'
import Footer from '../components/organisms/footer'
// import LandingView from '../components/organisms/landing-view'

const Page = styled.div`
	background-color: #121212;
	margin: 0;
`

const Stories = styled.div`
	background-color: #121212;
	margin: 0;
	padding: 40px 0;
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
interface ExploreStoriesProps {
	filterBy?: 'popular' | 'newest' | 'oldest'
}
const Explore: React.FC<{}> = () => {
	const handleFilter = (filterBy: string) => {
		if (filterBy == 'Newly uploaded') setFilterState('newest')
		else if (filterBy == 'Earlier uploaded') setFilterState('oldest')
		else if (filterBy == 'Most liked') setFilterState('popular')
	}
	const [filterState, setFilterState] = useState<ExploreStoriesProps['filterBy']>()
	return (
		<Page>
			<ExploreHeading />
			<Dropdown onSelect={handleFilter} />
			<ExploreStories filterBy={filterState && filterState} />
			<Footer />
		</Page>
	)
}

export default Explore
