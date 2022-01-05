import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const CardWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	border-bottom: 1px solid #363636;
`
const Card = styled.div`
	width: 315px;
	margin: 0 auto;
	padding: 20px 0;
	background-color: transparent;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	color: #ffffff;
`

const Author = styled.h4`
	font-family: Graphik;
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	line-height: 17.8px;
	text-transform: uppercase;
`

const TopDiv = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: flex-start;
	margin-bottom: 14px;
	position: relative;
`

const OptionIcon = styled.div`
	position: relative;
`

const OptionMenu = styled.div<OptionMenuStyleProps>`
	// width: 162px;
	width: ${(props) => (props.show ? '162px' : '0')};
	// height: 45px;
	height: ${(props) => (props.show ? '45px' : '0')};
	background: #121212;
	border: 0.2px solid #555;
	box-sizing: border-box;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
	border-radius: 4px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	font-style: normal;
	font-weight: normal;
	font-size: ${(props) => (props.show ? '15px' : '0')};
	line-height: 17px;
	color: #ffffff;
	transition: all 0.2s ease-out;

	position: absolute;
	right: 0;
	top: 14px;
	z-index: 10;
`

const CopyToast = styled.div<CopyToastStyleProps>`
	// width: 122px;
	width: ${(props) => (props.show ? '122px' : '0')};
	// height: 45px;
	height: ${(props) => (props.show ? '45px' : '0')};
	background: rgba(179, 206, 159, 0.8);
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
	border-radius: 4px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-style: normal;
	font-weight: normal;
	// font-size: 14px;
	font-size: ${(props) => (props.show ? '14px' : '0')};
	line-height: 15px;
	color: #ffffff;
	position: absolute;
	top: 16px;
	left: 50%;
	transform: translateX(-50%);
	transition: all 0.15s ease-out;
`

const ViewStoryRoute = styled(Link)`
	text-decoration: none;
	color: #ffffff;
`

const StoryImage = styled.img`
	width: 315px;
	height: 114px;
	border-radius: 8px 8px 0px 0px;
	object-fit: cover;
	margin: 0 0 16px;
`

StoryImage.defaultProps = {
	src: '/assets/images/explore-1.png',
}

const StoryTitle = styled.h3`
	width: 315px;
	font-family: Butler-Font;
	font-style: normal;
	font-weight: bold;
	font-size: 22px;
	line-height: 30px;
	letter-spacing: -0.2px;
`

const StoryMeta = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	margin: 23px 0 0;
	font-family: Graphik;
	font-weight: 300;
	font-size: 13px;
	line-height: 14.3px;
`
const StoryMetaLeft = styled.p`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	font-style: normal;
	font-weight: 300;
	font-size: 13px;
	line-height: 14.3px;
`

const Ellipse = styled.img`
	width: 4px;
	height: 4px;
	// vertical-align: middle;
	margin: 0 6px;
`

const StoryMetaRight = styled.p`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	font-style: normal;
	font-weight: 300;
	font-size: 13px;
	line-height: 14.3px;
`
const HeartIcon = styled.div`
	margin: 0 8px;
`

interface StoryProps {
	id: number
	author: string
	title: string
	cover_img?: string
	date?: string
	readTime?: number
	likes?: number
	views?: number
}

interface OptionMenuStyleProps {
	show: boolean
}

interface CopyToastStyleProps {
	show: boolean
}

const StoryCard: React.FC<StoryProps> = ({ id, author, cover_img, title, date, readTime, likes }) => {
	const [optionShow, setOptionShow] = useState(false)
	const [isCopied, setIsCopied] = useState(false)

	const handleOptionClick = () => {
		setOptionShow(!optionShow)
	}

	async function copyTextToClipboard(text: string) {
		if ('clipboard' in navigator) {
			return await navigator.clipboard.writeText(text)
		} else {
			return document.execCommand('copy', true, text)
		}
	}

	const handleCopyClick = () => {
		copyTextToClipboard(`https://gratico.xyz/story/${id}`)
			.then(() => {
				setIsCopied(true)
				setTimeout(() => {
					setIsCopied(false)
				}, 2000)

				clearTimeout()
			})
			.catch((err) => {
				console.log(err)
			})
	}

	useEffect(() => {
		document.addEventListener('mouseup', function (e) {
			let container = document.getElementById('copy-link') as HTMLDivElement
			if (e.target instanceof Element) {
				if (!container.contains(e.target)) {
					// console.log('works')
					setOptionShow(false)
				}
			}
		})

		document.removeEventListener('mouseup', function (e) {
			let container = document.getElementById('copy-link') as HTMLDivElement
			if (e.target instanceof Element) {
				if (!container.contains(e.target)) {
					setOptionShow(false)
				}
			}
		})
	}, [])

	return (
		<CardWrapper>
			<Card>
				<TopDiv>
					<Author>{author}</Author>

					<OptionIcon onClick={() => handleOptionClick()}>
						<svg
							aria-hidden='true'
							role='img'
							width='30'
							height='20'
							preserveAspectRatio='xMidYMid meet'
							viewBox='0 0 1 30'
						>
							<circle cx='16' cy='8' r='2' fill='currentColor' />
							<circle cx='16' cy='16' r='2' fill='currentColor' />
							<circle cx='16' cy='24' r='2' fill='currentColor' />
						</svg>

						<OptionMenu show={optionShow} onClick={() => handleCopyClick()} id='copy-link'>
							Copy link to story
						</OptionMenu>
					</OptionIcon>

					<CopyToast show={isCopied}>Link copied!</CopyToast>
				</TopDiv>

				<ViewStoryRoute to={`/story/${id}`}>
					<StoryImage
						src={
							cover_img !== ''
								? cover_img
								: 'https://gratico-uploads.s3.us-east-2.amazonaws.com/images/RPQjDQRWpeT3VZj9PIFGPCMAwnNDfbLwkxWThCO3.jpg'
						}
					/>

					<StoryTitle>{title}</StoryTitle>

					<StoryMeta>
						<StoryMetaLeft>
							{date}
							<Ellipse src='/assets/images/ellipse-separation.svg' />
							{readTime} min read
						</StoryMetaLeft>

						<StoryMetaRight>
							<HeartIcon>
								<svg
									width='20'
									height='20'
									viewBox='0 0 20 20'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M9.465 15.6075C9.21 15.6975 8.79 15.6975 8.535 15.6075C6.36 14.865 1.5 11.7675 1.5 6.51753C1.5 4.20003 3.3675 2.32503 5.67 2.32503C7.035 2.32503 8.2425 2.98503 9 4.00503C9.7575 2.98503 10.9725 2.32503 12.33 2.32503C14.6325 2.32503 16.5 4.20003 16.5 6.51753C16.5 11.7675 11.64 14.865 9.465 15.6075Z'
										stroke='white'
										stroke-width='1'
										stroke-linecap='round'
										stroke-linejoin='round'
									/>
								</svg>
							</HeartIcon>
							{likes} likes
						</StoryMetaRight>
					</StoryMeta>
				</ViewStoryRoute>
			</Card>
		</CardWrapper>
	)
}
export default StoryCard
