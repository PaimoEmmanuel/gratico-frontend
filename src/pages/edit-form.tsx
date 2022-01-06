import { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import Success from '../components/atoms/success'
import BaseNote from '../components/molecules/base-note'
import Footer from '../components/organisms/footer'
import Navigation from '../components/molecules/nav'
import EditStoryRequestForm from '../components/organisms/edit-story-request-form'
import { getStoriesFromEmail, sendEditStoryLink } from '../services/story'
import { Link } from 'react-router-dom'

// FDFAF2
const Content = styled.div<{ success: boolean }>`
	background-color: ${({ theme, success }) => !success && theme.colors.secondary};
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
	margin: 20px 0 28px;
	width: 266px;
	text-align: center;
`

const successAnimation = keyframes`
  0%
  {
    transform: translate(-10px, -10px);
  }
  50%
  {
    transform: translate(0, 0);
  }
  100%
  {
    transform: translate(-10px, -10px);
  }
`
const SuccessWrap = styled.div`
	animation: ${successAnimation} 2s infinite;
	svg {
		margin: 0 auto;
		display: block;
	}
`
const Explore = styled(Link)`
	height: 50px;
	width: 100%;
	background-color: ${({ theme }) => theme.colors.blue};
	margin: 50px auto 24px auto;
	border-radius: 8px;
	color: ${({ theme }) => theme.colors.white};
	border: none;
	padding: 0 16px;
	width: 85%;
	font-size: 14px;
	display: flex;
	justify-content: center;
	align-items: center;
	text-decoration: none;
`
const Back = styled.a`
	display: block;
	margin-bottom: 144px;
	text-align: center;
	color: black;
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
			<Content success={success}>
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
							<svg
								width='224'
								height='145'
								viewBox='0 0 224 145'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M143.729 56.0593L153.227 85.1093C153.382 85.5868 153.652 86.0191 154.013 86.3686C154.374 86.7181 154.815 86.9742 155.297 87.1146C155.779 87.2551 156.289 87.2756 156.781 87.1745C157.273 87.0734 157.733 86.8536 158.12 86.5344L186.481 63.1143C186.481 63.1143 156.343 51.3691 156.343 52.0033C156.343 52.6376 143.729 56.0593 143.729 56.0593Z'
									fill='#B5D1DB'
								/>
								<path
									d='M218.569 0.230238C200.043 7.55928 140.252 32.099 117.623 41.3386C116.965 41.6075 116.406 42.0727 116.023 42.6708C115.639 43.2689 115.45 43.9707 115.48 44.6805C115.51 45.3903 115.758 46.0737 116.19 46.6373C116.623 47.2009 117.219 47.6173 117.897 47.8298L143.736 56.0593L153.203 85.031C153.378 85.569 153.695 86.0497 154.121 86.4219C154.547 86.7942 155.066 87.0441 155.623 87.1451C156.492 87.3096 157.776 63.6938 157.776 63.6938C157.776 63.6938 184.939 83.8408 197.819 93.3545C198.55 93.8915 199.404 94.2349 200.303 94.3528C201.202 94.4706 202.116 94.359 202.96 94.0284C203.804 93.6978 204.551 93.1589 205.131 92.4619C205.711 91.7649 206.105 90.9325 206.276 90.0423L222.985 3.91042C223.1 3.33335 223.057 2.73606 222.861 2.18141C222.665 1.62676 222.322 1.13526 221.87 0.758615C221.418 0.381973 220.873 0.13412 220.292 0.0411364C219.711 -0.0518467 219.116 0.0134783 218.569 0.230238Z'
									fill='#FEF4DE'
								/>
								<path
									d='M155.615 87.1372C156.484 87.3017 157.768 63.6859 157.768 63.6859L202.4 21.771C202.466 21.7137 202.508 21.6335 202.517 21.5466C202.526 21.4597 202.501 21.3726 202.449 21.3029C202.396 21.2333 202.319 21.1863 202.233 21.1714C202.147 21.1565 202.058 21.1749 201.985 21.2229L143.729 56.0593L153.195 85.0309C153.371 85.5675 153.689 86.0466 154.115 86.4174C154.541 86.7881 155.059 87.0369 155.615 87.1372Z'
									fill='#E5D4B1'
								/>
								<path
									d='M1 144C31.6473 143.906 72.3955 126.625 80.5702 93.4406C83.8745 80.0431 80.9382 65.6983 70.3205 55.9262C56.9074 43.5702 42.1789 54.8613 45.8042 72.0955C51.7552 100.417 86.3488 121.426 112.635 121.684C127.833 121.856 142.084 114.574 147.549 99.6812'
									stroke='#2D5093'
									strokeWidth='2'
									strokeMiterlimit='10'
									strokeDasharray='5 5'
								/>
							</svg>
						</SuccessWrap>
						<Title>The link has been sent to your mail</Title>
						<Text>Click the link sent to your mail to edit your story.</Text>
						<Explore to='/explore'>Explore stories</Explore>
						<Back href='/'>Back home</Back>
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
