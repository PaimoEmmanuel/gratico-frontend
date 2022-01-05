import { useContext, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import BaseNote from '../components/molecules/base-note'
import CoverPhoto from '../components/organisms/cover-photo'
import Footer from '../components/organisms/footer'
import Navigation from '../components/molecules/nav'
import StoryDetails from '../components/organisms/story-details'
import WriterDetails from '../components/organisms/writer-details'
import { StoryContext } from '../contexts/write-story-context'

const Content = styled.div`
	background-color: ${({ theme }) => theme.colors.secondary};
	padding-bottom: 38px;
`
const HeadingWrap = styled.div`
	padding: 0 32px;
	border: 1px solid #eaeaea;
`
const Title = styled.h3`
	width: 278px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	position: relative;
	& h3 {
		font-size: 26px;
		line-height: 30px;
		padding-top: 32px;
		width: 270px;
		letter-spacing: -0.5px;
	}
`
const Text = styled.p`
	width: 252px;
	font-size: 16px;
	line-height: 25px;
	margin: 16px 0 24px 0;
`

const emojiAnimation = keyframes`
  0%
  {
    transform: translateY(-5px);
  }
  50%
  {
    transform: translateY(0);
  }
  100%
  {
    transform: translateY(-5px);
  }
`

const Biceps = styled.img`
	width: 28px;
	height: 28px;
	position: absolute;
	bottom: 0;
	right: 0;
	animation: ${emojiAnimation} 2s infinite;
`
const ProgressBar = styled.div`
	padding: 32px;
`

const ProgressSpan = styled.span<{ active?: boolean }>`
	display: inline-block;
	height: 12px;
	width: 12px;
	border: 1px solid #2d5093;
	background-color: ${({ active }) => active && '#2D5093'};
	border-radius: 50%;
	margin-right: 4.8px;
`

const FormScreen = styled.div`
	margin: 0px 0 164px;
`

const WriteStory: React.FC = () => {
	const [activeView, setActiveView] = useState(0)
	const { story, setStory } = useContext(StoryContext)
	const [email, setEmail] = useState(story.email)
	const [name, setName] = useState(story.name)
	const [title, setTitle] = useState(story.title)
	const [content, setContent] = useState(story.content)
	const [image, setImage] = useState(story.image)

	const handlePreview = () => {
		const date = new Date().toString().slice(4, 10)
		setStory({ ...story, email, name, title, content, image, date })
	}
	return (
		<div>
			<Navigation
				logoSrc='/assets/images/mobile-footer-logo.png'
				bgColor='#FEF4DE'
				navColor='#333333'
			/>
			<Content>
				<HeadingWrap>
					{activeView === 0 && (
						<div>
							<Title>
								<h3>We are happy you are doing this, way to go!</h3>
								<Biceps src='/assets/images/flexed-biceps.png' alt='' />
							</Title>
							<Text>No sign up forms required! Gratico is super easy to use!</Text>
						</div>
					)}
					{activeView >= 1  && (
						<div>
							<Title>
								<h3>Remember your story could encourage a reader out there.</h3>
							</Title>
							<Text>Let your words do the magic.</Text>
						</div>
					)}
				</HeadingWrap>

				<ProgressBar>
					<ProgressSpan active={activeView >= 0} />
					<ProgressSpan active={activeView >= 1} />
					<ProgressSpan active={activeView >= 2} />
					<ProgressSpan />
				</ProgressBar>

				<FormScreen>
					{activeView === 0 && (
						<WriterDetails
							email={email}
							setEmail={setEmail}
							name={name}
							setName={setName}
							onSubmit={setActiveView}
						/>
					)}
					{activeView === 1 && (
						<StoryDetails
							title={title}
							setTitle={setTitle}
							onSubmit={setActiveView}
							content={content}
							setContent={setContent}
						/>
					)}
					{activeView === 2 && (
						<CoverPhoto
							onSubmit={setActiveView}
							image={image}
							setImage={setImage}
							handlePreview={handlePreview}
						/>
					)}
				</FormScreen>
				<BaseNote />
			</Content>
			<Footer />
		</div>
	)
}

export default WriteStory
