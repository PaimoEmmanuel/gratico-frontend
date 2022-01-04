import { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import BaseNote from '../components/molecules/base-note'
import Navigation from '../components/molecules/nav'
import Footer from '../components/organisms/footer'
import { TokenContext } from '../contexts/edit-token-context'
import { StoryContext } from '../contexts/write-story-context'
import { ImageFileContext } from '../contexts/image-file-context'
import { postStory } from '../services/story'

// FDFAF2
const Content = styled.div`
	//   background-color: ${({ theme }) => theme.colors.secondary};
	padding-bottom: 38px;
`
const HeadingWrap = styled.div`
	padding: 0 32px;
	border-bottom: 1px solid #e6e6e6;
`
const Title = styled.h3`
	font-size: 24px;
	line-height: 30px;
	padding-top: 32px;
`
const Text = styled.p`
	font-size: 14px;
	line-height: 20px;
	letter-spacing: -0.2px;
	margin: 16px 0;
`
const Story = styled.div`
	padding: 90px 16px 135px 16px;
	fint-size: 28px;
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
const Button = styled.button`
	height: 50px;
	width: 100%;
	background-color: ${({ theme }) => theme.colors.blue};
	margin-top: 50px;
	border-radius: 8px;
	color: ${({ theme }) => theme.colors.white};
	border: none;
	padding: 0 16px;
`
const Back = styled.button`
	border: none;
	background: none;
	text-decoration: underline;
	font-size: 15px;
	color: ${({ theme }) => theme.colors.blue};
	text-align: center;
	display: block;
	margin: 0 auto;
	margin-top: 24px;
`
const Stat = styled.div`
	color: #a6a6a6;
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

const Preview: React.FC = () => {
	const { story } = useContext(StoryContext)
	const { title, name, date, content, image, email } = story
	const { imageFile, setImageFile } = useContext(ImageFileContext)
	const [loading, setLoading] = useState(true)
	const history = useHistory()
	const { token } = useContext(TokenContext)
	var bodyFormData = new FormData()
	// bodyFormData.append('image', imageFile);
	useEffect(() => {
		console.log('imageFile', imageFile)
	})
	return (
		<div>
			<Navigation
				logoSrc='/assets/images/mobile-footer-logo.png'
				bgColor='#FEF4DE'
				navColor='#333333'
			/>
			<Content>
				<HeadingWrap>
					<Title>Preview story</Title>
					<Text>Any final edits? You can read through before uploading.</Text>
				</HeadingWrap>
				<Story>
					<StoryTitle>{title}</StoryTitle>
					<Details>
						<Author>{name}</Author>
						<Date>{date}</Date>
						<Span></Span>
						<Date>6 min read</Date>
					</Details>
					<Img src={image} />
					<Body dangerouslySetInnerHTML={{ __html: content }}></Body>
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
										stroke='#A6A6A6'
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
					<Button
						onClick={(e) => {
							e.preventDefault()
							window.scrollTo(0, 0)
							console.log('clicked')

							postStory({
								name,
								email,
								title,
								body: content,
								image: imageFile,
							}).then((res) => {
								console.log(res.data)
								history.push(`/share/${res.data.uuid}`)
							})
						}}
					>
						Upload story
					</Button>
					<Back
						onClick={(e) => {
							e.preventDefault()
							if (token) {
								history.push(`/edit/${token}`)
							} else {
								history.push('/write')
							}
							window.scrollTo(0, 0)
						}}
					>
						Back to editing
					</Back>
				</Story>
				<BaseNote />
			</Content>
			<Footer />
		</div>
	)
}

export default Preview
