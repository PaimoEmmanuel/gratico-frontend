import { useEffect, useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'
import { getAllStories } from '../../services/story'

import StoryCard from '../organisms/story-card'
import { dataFilter } from '../../utils/dataFilter'
import StoryCardSkeleton from './story-card-skeleton'

const Stories = styled.div`
	background-color: #121212;
	margin: 0;
	padding: 0;
	min-height: 40vh;
`

const MoreActions = styled.div`
	margin: 40px auto;
`

const SeeMoreStories = styled.button`
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
	border: none;
`

const spinAnimation = keyframes`
  0% 
  {
    transform: rotate(0);
  }
  
  100% 
  {
    transform: rotate(360deg);
  }
`

const SpinIcon = styled.div`
	width: 20px;
	height: 20px;
	animation-name: ${spinAnimation};
	animation-iteration-count: infinite;
	animation-duration: 2s;
	animation-timing-function: linear;
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
	author?: string
	title: string
	cover_img?: string
	date?: string
	readTime?: number
	likes?: number
	views?: number
}

const storylist: StoryDataProps[] = [
	// {
	// 	id: 0,
	// 	author: '',
	// 	title: '',
	// 	cover_img: '',
	// 	date: '',
	// 	readTime: 6,
	// 	likes: 15,
	// },
]
interface ExploreStoriesProps {
	filterBy?: 'popular' | 'newest' | 'oldest'
}
const ExploreStories: React.FC<ExploreStoriesProps> = ({ filterBy }) => {
	const [stories, setStories] = useState(storylist)
	const [initialLoading, setInitialLoading] = useState(true)
	const [loadingMore, setLoadingMore] = useState(false)
	const [currentPage, setCurrentPage] = useState(1)
	const [noOfPages, setNoOfPages] = useState(1)

	const getStories = async () => {
		getAllStories(currentPage, filterBy)
			.then((res) => {
				const cleanData = dataFilter(res.data.data)
				setNoOfPages(res.data.last_page)

				// if (storylist[0].id == 0) {
				if (stories.length === 0) {
					setStories(cleanData)
					setInitialLoading(false)
				} else {
					setStories(stories.concat(cleanData))
					setLoadingMore(false)
					console.log(stories)
				}
			})
			.catch((error) => {
				console.log('error', error)
			})
	}

	useEffect(() => {
		getStories()
	}, [currentPage, filterBy])

	return (
		<Stories>
			{initialLoading ? (
				<>
					<StoryCardSkeleton />
					<StoryCardSkeleton />
					<StoryCardSkeleton />
				</>
			) : (
				<>
					{stories.map((story) => (
						<StoryCard
							key={story.id}
							id={story.id}
							author={story.author ? story.author : 'Chibs'}
							title={story.title}
							cover_img={story.cover_img}
							date={story.date}
							readTime={story.readTime}
							likes={story.likes}
						/>
					))}
					<MoreActions>
						{loadingMore && (
							<SeeMoreStories>
								<SpinIcon>
									<svg
										width='20'
										height='20'
										viewBox='0 0 20 20'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M3.75005 10.0001C3.75005 10.3458 3.47017 10.6253 3.12488 10.6253H0.625163C0.280328 10.6253 0 10.3458 0 10.0001C0 9.65438 0.279881 9.37493 0.625163 9.37493H3.12488C3.47017 9.37493 3.75005 9.65438 3.75005 10.0001ZM9.9999 16.25C9.65507 16.25 9.37474 16.5294 9.37474 16.8751V19.3748C9.37474 19.7206 9.65462 20 9.9999 20C10.3447 20 10.6251 19.7206 10.6251 19.3748V16.8751C10.6251 16.5294 10.3447 16.25 9.9999 16.25ZM13.9784 15.6405C13.8053 15.341 13.4234 15.2381 13.1248 15.4125C12.8253 15.5843 12.7228 15.9675 12.8959 16.2656L14.1458 18.431C14.3228 18.7349 14.7068 18.8299 14.9994 18.659C15.2989 18.4872 15.4013 18.104 15.2282 17.8058L13.9784 15.6405ZM18.4308 14.1464L16.2655 12.8966C15.966 12.7239 15.5841 12.8264 15.4123 13.1255C15.2397 13.425 15.3421 13.8069 15.6403 13.9791L17.8057 15.2289C18.0987 15.3989 18.4845 15.3026 18.6589 15C18.8324 14.7005 18.7304 14.3186 18.4308 14.1464ZM19.3747 9.3749H16.875C16.5301 9.3749 16.2498 9.65434 16.2498 10.0001C16.2498 10.3458 16.5297 10.6252 16.875 10.6252H19.3747C19.7195 10.6252 19.9998 10.3458 19.9998 10.0001C19.9998 9.65434 19.7195 9.3749 19.3747 9.3749ZM16.2655 7.10397L18.4308 5.85411C18.7303 5.68147 18.8319 5.29913 18.6589 5.00051C18.4862 4.70101 18.1034 4.59812 17.8057 4.77163L15.6403 6.02149C15.3421 6.1937 15.2397 6.57559 15.4123 6.87509C15.5871 7.17807 15.9734 7.27398 16.2655 7.10397ZM14.9999 1.34015C14.7004 1.16751 14.3185 1.26952 14.1463 1.56903L12.8964 3.73393C12.7238 4.03343 12.8263 4.41534 13.1253 4.58753C13.4205 4.75887 13.8059 4.66077 13.9789 4.35865L15.2288 2.19374C15.4019 1.89468 15.299 1.51278 14.9999 1.34015ZM9.9999 0C9.65507 0 9.37474 0.279448 9.37474 0.625165V3.12488C9.37474 3.4706 9.65462 3.75005 9.9999 3.75005C10.3447 3.75005 10.6251 3.4706 10.6251 3.12488V0.625165C10.6251 0.279448 10.3447 0 9.9999 0ZM5.85357 1.56905C5.68093 1.26911 5.29859 1.16709 4.99997 1.34017C4.70047 1.51281 4.59889 1.89515 4.7711 2.19377L6.02096 4.35867C6.19664 4.66166 6.58115 4.75801 6.87455 4.58755C7.17405 4.41491 7.27563 4.03258 7.10343 3.73395L5.85357 1.56905ZM4.35863 6.02151L2.19372 4.77165C1.89422 4.59858 1.51232 4.70147 1.34012 5.00053C1.16748 5.30003 1.26994 5.68194 1.569 5.85413L3.73391 7.10399C4.02818 7.27444 4.41269 7.17767 4.58751 6.87511C4.76015 6.57561 4.65769 6.19371 4.35863 6.02151Z'
											fill='black'
										/>
									</svg>
								</SpinIcon>
							</SeeMoreStories>
						)}
						{1 < noOfPages && noOfPages > currentPage && (
							<SeeMoreStories
								onClick={() => {
									setCurrentPage(currentPage + 1)
									setLoadingMore(true)
								}}
							>
								See more stories
							</SeeMoreStories>
						)}

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
									fillRule='evenodd'
									clipRule='evenodd'
									d='M5.46405 0H6.536V5.31703H6.5359C6.53652 5.48189 6.67001 5.61528 6.83477 5.6159H11.9999V6.53605H6.83477C6.67001 6.53668 6.53651 6.67006 6.5359 6.83482V12H5.46395V6.83482H5.46405C5.46342 6.67006 5.32994 6.53667 5.16518 6.53605H0V5.6159H5.16518C5.32994 5.61527 5.46344 5.48189 5.46405 5.31703V0Z'
									fill='#FFFFF'
								/>
							</svg>
						</ShareStory>
					</MoreActions>
				</>
			)}
		</Stories>
	)
}
export default ExploreStories
