import { useContext, useState } from 'react'
import styled from 'styled-components'
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
`
const Title = styled.h3`
	width: 273px;
	font-size: 24px;
	line-height: 30px;
	padding-top: 32px;
`
const Text = styled.p`
	width: 252px;
	font-size: 14px;
	line-height: 20px;
	letter-spacing: -0.2px;
	margin: 16px 0 24px 0;
`
const ProgressBar = styled.div``

const ProgressSpan = styled.span<{ active?: boolean }>`
	display: inline-block;
	height: 12px;
	width: 12px;
	border: 1px solid ${({ theme }) => theme.colors.black};
	background-color: ${({ active, theme }) => active && theme.colors.black};
	border-radius: 50%;
	margin-right: 4.8px;
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
					<Title>We are happy you are doing this, way to go! </Title>
					<Text>No sign up forms required! Gratico is super easy to use!</Text>
					<ProgressBar>
						<ProgressSpan active={activeView >= 0} />
						<ProgressSpan active={activeView >= 1} />
						<ProgressSpan active={activeView >= 2} />
						<ProgressSpan />
					</ProgressBar>
				</HeadingWrap>
				<div>
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
				</div>
				<BaseNote />
			</Content>
			<Footer />
		</div>
	)
}

export default WriteStory
