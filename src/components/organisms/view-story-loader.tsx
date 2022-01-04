import { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'

const Container = styled.div`
	padding: 20px;
	background-color: #202020;
	width: 100vw;
	height: 100vh;
	color: red;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`
const spinAnimation = keyframes`
  0% 
  {
    transform: rotate(0);
    border-left-color:  rgba(250, 215, 130, 0.4);
  }
  50%
  {
    border-top-color:  rgba(250, 215, 130, 0.4);
  }
  100% 
  {
    transform: rotate(360deg);
  }
`

const Spinner = styled.div`
	width: 224px;
	height: 224px;
	border: 1px solid rgba(250, 215, 130, 0.4);
	border-left-color: #ffffff;
	border-top-color: #ffffff;
	border-radius: 50%;
	background: transparent;
	animation-name: ${spinAnimation};
	animation-iteration-count: infinite;
	animation-duration: 2s;
	animation-timing-function: linear;
	position: absolute;
	transition: all 2s ease-out;
`

const imgAnimation = keyframes`
  0% 
  {
    opacity: 1;
  }
  50%
  {
    opacity: 0.4;
  }
  100% 
  {
    opacity: 1;
  }
`

const Img = styled.img`
	transition: all 3s ease-in;
	animation: ${imgAnimation} 3s linear infinite;
`

const ViewStoryLoader: React.FC = () => {
	const [imgSrc, setImgSrc] = useState('/assets/images/grin-with-big-eye.png')

	useEffect(() => {
		setTimeout(() => {
			setImgSrc('/assets/images/logo-desktop.png')
		}, 3000)

		clearTimeout()
	}, [])

	return (
		<Container>
			<Img src={imgSrc} alt='' />
			<Spinner />
		</Container>
	)
}
export default ViewStoryLoader
