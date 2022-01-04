import { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import Success from '../components/atoms/success'
import BaseNote from '../components/molecules/base-note'
import Footer from '../components/organisms/footer'
import Navigation from '../components/molecules/nav'
import EditStoryRequestForm from '../components/organisms/edit-story-request-form'
import { getStoriesFromEmail, sendEditStoryLink } from '../services/story'

// FDFAF2
const Content = styled.div`
	background-color: ${({ theme }) => theme.colors.secondary};
	padding-bottom: 38px;
`
const HeadingWrap = styled.div`
	padding: 0;
	width: 314px;
	margin: 0 auto;
`
const SuccessStory = styled.div`
	padding: 88px 48px;
`
const Title = styled.h3`
	font-size: 24px;
	line-height: 30px;
	padding-top: 32px;
	text-align: center;
`
const Text = styled.p`
	font-size: 14px;
	line-height: 20px;
	letter-spacing: -0.2px;
	margin: 12px 0 0;
	width: 266px;
`

const successAnimation = keyframes`
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
const SuccessWrap = styled.div`
	animation: ${successAnimation} 2s infinite;
	svg {
		margin: 0 auto;
		display: block;
	}
`
const EditForm: React.FC = () => {
	const [activeView, setActiveView] = useState(true)
	const [error, setError] = useState('')
	const [success, setSuccess] = useState(false)
	return (
		<div>
			<Navigation
				logoSrc='/assets/images/mobile-footer-logo.png'
				bgColor='#FEF4DE'
				navColor='#333333'
			/>
			<Content>
				{!success && (
					<HeadingWrap>
						<Title>Edit your story</Title>
						<Text>
							To verify it’s really the author, please input the email you used when uploading
							the story to get a link
						</Text>
					</HeadingWrap>
				)}
				{/* <div>{activeView === true && <WriterDetails onSubmit={setActiveView} />}</div> */}
				{success ? (
					<SuccessStory>
						<SuccessWrap>
							<Success />
						</SuccessWrap>
						<Title>Your edit link has been sent to your email!</Title>
					</SuccessStory>
				) : (
					<div>
						{/* {error && <ErrorNote>{error}</ErrorNote>} */}
						{activeView === true && (
							<EditStoryRequestForm
								displayError={error}
								onSubmit={(email: string) => {
									getStoriesFromEmail(email)
										.then((res) => {
											console.log(res.data[0].uuid)
											if (res.data.length == 0)
												setError('This email isn’t tied to an author')
											else {
												sendEditStoryLink(res.data[0].uuid).then((res) => {
													//   console.log(res);
													setSuccess(true)
												})
											}
										})
										.catch((err) => {
											setError('This email isn’t tied to an author')
										})
								}}
							/>
						)}
					</div>
				)}

				<BaseNote />
			</Content>
			<Footer />
		</div>
	)
}

export default EditForm
