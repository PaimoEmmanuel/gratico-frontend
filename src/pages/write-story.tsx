import { useContext, useState } from 'react'
import styled from 'styled-components'
import BaseNote from '../components/molecules/base-note'
import Navigation from '../components/molecules/nav'
import CoverPhoto from '../components/organisms/cover-photo'
import Footer from '../components/organisms/footer'
import StoryDetails from '../components/organisms/story-details'
import WriterDetails from '../components/organisms/writer-details'
import { StoryContext } from '../contexts/write-story-context'

// FDFAF2
const Content = styled.div`
	background-color: ${({ theme }) => theme.colors.secondary};
	padding-bottom: 38px;
`
const HeadingWrap = styled.div`
	padding: 0 32px;
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
	const [email, setEmail] = useState('')
	const [name, setName] = useState('')
	const [title, setTitle] = useState('')
	const [content, setContent] = useState('')
	const [image, setImage] = useState('')
	const { story, setStory } = useContext(StoryContext)

	const handlePreview = () => {
		const date = new Date().toString().slice(4, 10)
		setStory({ ...story, email, name, title, content, image, date })
	}
	return (
		<div>
			<Navigation />
			<Content>
				<HeadingWrap>
					<Title>Remember, your gratitude story could encourage someone out there.</Title>
					<Text>No long sign up forms! Ready to spread gratitude in the air? Let’s do it!</Text>
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
