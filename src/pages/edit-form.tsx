import { useState } from 'react'
import styled from 'styled-components'
import BaseNote from '../components/molecules/base-note'
import Navigation from '../components/molecules/nav'
import Footer from '../components/organisms/footer'
import WriterDetails from '../components/organisms/writer-details'
import EditStoryRequestForm from '../components/organisms/edit-story-request-form'

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
	margin: 12px 0 0;
	width: 266px;
`

const EditForm: React.FC = () => {
	const [activeView, setActiveView] = useState(true)
	return (
		<div>
			<Navigation />
			<Content>
				<HeadingWrap>
					<Title>Edit your story</Title>
					<Text>
						To verify it’s really the author, please input the email you used when uploading the
						story to get a link
					</Text>
				</HeadingWrap>
				{/* <div>{activeView === true && <WriterDetails onSubmit={setActiveView} />}</div> */}
				<div>{activeView === true && <EditStoryRequestForm onSubmit={setActiveView} />}</div>
				<BaseNote />
			</Content>
			<Footer />
		</div>
	)
}

export default EditForm