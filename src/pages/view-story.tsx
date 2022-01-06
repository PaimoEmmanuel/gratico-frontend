import { useContext, useEffect, useRef, useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import styled from 'styled-components'
import BaseNote from '../components/molecules/base-note'
import Footer from '../components/organisms/footer'
import Navigation from '../components/molecules/nav'
import { StoryContext } from '../contexts/write-story-context'
import { getOneStory, likeStory, postViewCount } from '../services/story'
import { singleDataFilter } from '../utils/dataFilter'
import ViewStoryLoader from '../components/organisms/view-story-loader'

const Container = styled.div`
	width: 100vw;
	min-height: 100vh;
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
	margin: 0 6px;
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
	transition: all 0.6s ease-out;
	svg {
		margin-right: 10px;
	}
`

const Inspired = styled.div`
	font-family: 'Butler';
	font-style: normal;
	font-weight: bold;
	font-size: 34px;
	line-height: 38px;
	text-align: center;
	letter-spacing: -1px;
	color: #000000;
	width: 268px;
	margin: 0 auto 40px;
`

const Explore = styled(Link)`
	font-size: 14px;
	color: #000000;
	padding: 10px;
	border: 1px solid #000000;
	border-radius: 6px;
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

const LikeStory = styled.p``

interface IStory {
	id: number
	author?: string
	title: string
	content?: string
	cover_img?: string
	date?: string
	readTime?: number
	likes?: number
	views?: number
}

let testStory: IStory = {
	id: 1,
	author: '',
	title: '',
	content: '',
	cover_img: '',
	date: '',
	readTime: 0,
	likes: 0,
	views: 0,
}

const ViewStory: React.FC<IStory> = () => {
	const [story, setStory] = useState(testStory)
	const [loading, setLoading] = useState(true)
	const [animationComplete, setAnimationComplete] = useState(false)
	const [likes, setLikes] = useState(0)
	const [myLikes, setMyLikes] = useState(0)
	const history = useHistory()

	const { storyID } = useParams<{ storyID: string }>()

	let likeIcon = document.getElementById('like') as HTMLButtonElement

	useEffect(() => {
		getOneStory(storyID)
			.then((res) => {
				let cleanData = singleDataFilter(res.data)
				setStory(cleanData)

				setLoading(false)

				postViewCount(storyID).then((res) => {
					console.log(res)
				})
				// .catch((err) => console.log('error', err))

				let incomingLikes = cleanData.likes
				setLikes(incomingLikes ? incomingLikes : 0)
			})
			.catch((err) => {
				console.log('error', err)
			})

		setTimeout(() => {
			setAnimationComplete(true)
		}, 5000)

		clearTimeout()
	}, [])

	const updateLike = () => {
		if (myLikes < 50) {
			likeStory(storyID).then((res) => {
				console.log(res)
			})

			setLikes(likes + 1)
			setMyLikes(myLikes + 1)
		} else {
			setLikes(likes)
			setMyLikes(myLikes)
		}
	}

	return (
		<Container>
			{(loading || animationComplete === false) && <ViewStoryLoader />}
			{loading === false && animationComplete && (
				<>
					<Navigation
						logoSrc='/assets/images/mobile-footer-logo.png'
						bgColor='#FEF4DE'
						navColor='#333333'
					/>
					<Content>
						<Story key={story.id}>
							<StoryTitle>{story.title}</StoryTitle>
							<Details>
								<Author>{story.author}</Author>
								<Date>{story.date}</Date>
								<Span></Span>
								<Date>{story.readTime} min read</Date>
							</Details>
							<Img src={story.cover_img} />
							<Body
								dangerouslySetInnerHTML={{ __html: story.content ? story.content : '' }}
							></Body>
							{/* <Body>{story.content}</Body> */}
							<Stat>
								<LikeStory>
									<Like
										onClick={(e) => {
											e.preventDefault()
											// console.log(e)
											updateLike()
											likeIcon.style.transform = 'scale(1.3)'
											setTimeout(() => {
												likeIcon.style.transform = 'scale(1)'
											}, 200)
										}}
										id='like'
									>
										<svg
											width='20'
											height='18'
											viewBox='0 0 20 18'
											fill={myLikes > 0 ? '#F12E43' : 'none'}
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												d='M10.517 16.3417C10.2337 16.4417 9.76699 16.4417 9.48366 16.3417C7.06699 15.5167 1.66699 12.075 1.66699 6.24171C1.66699 3.66671 3.74199 1.58337 6.30032 1.58337C7.81699 1.58337 9.15866 2.31671 10.0003 3.45004C10.842 2.31671 12.192 1.58337 13.7003 1.58337C16.2587 1.58337 18.3337 3.66671 18.3337 6.24171C18.3337 12.075 12.9337 15.5167 10.517 16.3417Z'
												stroke={myLikes > 0 ? '#F12E43' : '#292D32'}
												strokeWidth='1.5'
												strokeLinecap='round'
												strokeLinejoin='round'
											/>
										</svg>
									</Like>
									{likes} likes
								</LikeStory>
								<p>{story.views} views</p>
							</Stat>
						</Story>

						<Inspired>Were you inspired by this story?</Inspired>

						<Write to='/write'>
							Share your story
							<svg
								width='12'
								height='12'
								viewBox='0 0 12 12'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
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
						{/* <BaseNote /> */}
					</Content>
					<Footer />
				</>
			)}
		</Container>
	)
}

export default ViewStory
