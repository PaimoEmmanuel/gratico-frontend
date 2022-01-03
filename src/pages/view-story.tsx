import { useContext, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import styled from 'styled-components'
import BaseNote from '../components/molecules/base-note'
import Navigation from '../components/molecules/nav'
import Footer from '../components/organisms/footer'
import { StoryContext } from '../contexts/write-story-context'
import { getOneStory } from '../services/story'
import { singleDataFilter } from '../utils/dataFilter'

const LoadingView = styled.div`
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #999;
	font-size: 72px;
	color: #222;
`
// FDFAF2
const Content = styled.div`
	//   background-color: ${({ theme }) => theme.colors.secondary};
	padding-bottom: 40px;
`

const Story = styled.div`
	padding: 40px 0 60px;
	width: 343px;
	margin: 0 auto;
	line-height: 30px;
`
const StoryTitle = styled.h1`
	fint-size: 28px;
	line-height: 30px;
	padding: 0 14px;
`
const Details = styled.div`
	display: flex;
	//   justify-content: center;
	align-items: center;
	margin-top: 14px;
	padding: 0 14px;
`
const Author = styled.p`
	color: #96670d;
	margin-right: 16px;
`
const Span = styled.span`
	height: 4px;
	width: 4px;
	background-color: ${({ theme }) => theme.colors.black};
	display: inline-block;
	margin: 0 4px;
	border-radius: 50%;
`
const Date = styled.p`
	font-size: 14px;
	line-height: 15.4px;
`
const Img = styled.img`
	width: 100%;
	margin: 48px 0 24px 0;
	padding: 0 14px;
`
const Body = styled.p`
	font-size: 14px;
	line-height: 22px;
`

const Stat = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 24px;
	& p {
		display: flex;
		align-items: center;
		font-size: 14px;
		line-height: 15.4px;
	}
`
const Like = styled.button`
	background: none;
	border: none;
	svg {
		margin-right: 10px;
	}
`

interface IStory {
	id: number
	author?: string
	title: string
	content?: string
	cover_img?: string
	date?: string
	readTime?: number
	likes?: number
}

let testStory: IStory = {
	id: 1,
	author: 'Bolatito Akinmurewa',
	title: 'Love',
	content: 'This year was when Jesus taught me to love my neighbours',
	cover_img: '/assets/images/storyImg.png',
	date: 'Jan 1st',
	readTime: 6,
	likes: 15,
}

const ViewStory: React.FC<IStory> = () => {
	const [story, setStory] = useState(testStory)
	// const { id, title, author, date, content, cover_img } = story
	const [loading, setLoading] = useState(true)
	const history = useHistory()

	const { storyID } = useParams<{ storyID: string }>()

	useEffect(() => {
		getOneStory(storyID)
			.then((res) => {
				let cleanData = singleDataFilter(res.data)
				setStory(cleanData)
				console.log(cleanData)
				setLoading(false)
			})
			.catch((err) => {
				console.log('error', err)
			})
	}, [])

	return (
		<>
			<Navigation />
			{loading && <LoadingView>...</LoadingView>}
			{loading === false && (
				<Content>
					<Story key={story.id}>
						<StoryTitle>{story.title}</StoryTitle>
						<Details>
							<Author>{story.author}</Author>
							<Date>{story.date}</Date>
							<Span></Span>
							<Date>6 min read</Date>
						</Details>
						<Img src={story.cover_img} />
						{/* <Body dangerouslySetInnerHTML={{ __html: story.content }}>story.content</Body> */}
						<Body>{story.content}</Body>
						<Stat>
							<p>
								<Like>
									<svg
										width='20'
										height='18'
										viewBox='0 0 20 18'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M10.517 16.3417C10.2337 16.4417 9.76699 16.4417 9.48366 16.3417C7.06699 15.5167 1.66699 12.075 1.66699 6.24171C1.66699 3.66671 3.74199 1.58337 6.30032 1.58337C7.81699 1.58337 9.15866 2.31671 10.0003 3.45004C10.842 2.31671 12.192 1.58337 13.7003 1.58337C16.2587 1.58337 18.3337 3.66671 18.3337 6.24171C18.3337 12.075 12.9337 15.5167 10.517 16.3417Z'
											stroke='#292D32'
											stroke-width='1.5'
											stroke-linecap='round'
											stroke-linejoin='round'
										/>
									</svg>
								</Like>
								0 likes
							</p>
							<p>0 views</p>
						</Stat>
					</Story>
					<BaseNote />
				</Content>
			)}

			<Footer />
		</>
	)
}

export default ViewStory
