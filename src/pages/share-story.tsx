import { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import Success from '../components/atoms/success'
import BaseNote from '../components/molecules/base-note'
import Navigation from '../components/molecules/nav'
import Footer from '../components/organisms/footer'
import { TokenContext } from '../contexts/edit-token-context'
import { StoryContext } from '../contexts/write-story-context'

// FDFAF2
const Content = styled.div`
	padding: 115px 26px 38px 26px;
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
const Title = styled.h3`
	font-size: 24px;
	line-height: 30px;
	padding-top: 32px;
	text-align: center;
	margin: 0 53px;
`
const Text = styled.p`
	font-size: 14px;
	line-height: 20px;
	letter-spacing: -0.2px;
	margin: 16px 37px;
	text-align: center;
`
const LinkBox = styled.div`
	background-color: #fefaf1;
	border: 1px solid #ededed;
	padding: 14px 24px;
	font-size: 15px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 55px;
`
const Explore = styled.button`
	height: 50px;
	width: 100%;
	background-color: ${({ theme }) => theme.colors.blue};
	margin: 50px auto 144px auto;
	border-radius: 8px;
	color: ${({ theme }) => theme.colors.white};
	border: none;
	padding: 0 16px;
	width: 85%;
	font-size: 14px;
	display: block;
`
const Share = styled.p`
	position: relative;
	text-transform: uppercase;
	text-align: center;
	color: #bababa;
	&::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		transform: translateY(-50%);
		width: 100%;
		height: 1px;
		background-color: #dcdcdc;
	}
`
const ShareStory: React.FC = () => {
	const { story } = useContext(StoryContext)
	const { title, name, date, content, image } = story
	const [loading, setLoading] = useState(true)
	const history = useHistory()
	const { token } = useContext(TokenContext)

	return (
		<div>
			<Navigation
				logoSrc='/assets/images/mobile-footer-logo.png'
				bgColor='#FEF4DE'
				navColor='#333333'
			/>
			<Content>
				<div>
					<SuccessWrap>
						<Success />
					</SuccessWrap>
					<Title>Your story has been uploaded!</Title>
					<Text>Copy &amp; paste the link below anywhere to get people to read your story!</Text>
					<LinkBox>
						<p>gratico.xyz/alexis312</p>
						<svg
							width='20'
							height='20'
							viewBox='0 0 20 20'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M13.3332 10.75V14.25C13.3332 17.1667 12.1665 18.3333 9.24984 18.3333H5.74984C2.83317 18.3333 1.6665 17.1667 1.6665 14.25V10.75C1.6665 7.83333 2.83317 6.66667 5.74984 6.66667H9.24984C12.1665 6.66667 13.3332 7.83333 13.3332 10.75Z'
								stroke='#292D32'
								stroke-width='1.5'
								stroke-linecap='round'
								stroke-linejoin='round'
							/>
							<path
								d='M18.3332 5.75V9.25C18.3332 12.1667 17.1665 13.3333 14.2498 13.3333H13.3332V10.75C13.3332 7.83333 12.1665 6.66667 9.24984 6.66667H6.6665V5.75C6.6665 2.83333 7.83317 1.66667 10.7498 1.66667H14.2498C17.1665 1.66667 18.3332 2.83333 18.3332 5.75Z'
								stroke='#292D32'
								stroke-width='1.5'
								stroke-linecap='round'
								stroke-linejoin='round'
							/>
						</svg>
					</LinkBox>
					<Share>Share to</Share>
					<Explore
						onClick={() => {
							history.push('/explore')
						}}
					>
						Explore people stories
					</Explore>
				</div>
				<BaseNote />
			</Content>
			<Footer />
		</div>
	)
}

export default ShareStory
