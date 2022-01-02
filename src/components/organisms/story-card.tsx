import styled from 'styled-components'

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
	border-bottom: 1px solid #363636;
`

const WriterName = styled.h4`
	font-family: Graphik;
	font-style: normal;
	font-weight: normal;
	font-size: 14px;
	line-height: 15px;
	letter-spacing: -0.2px;
	text-transform: uppercase;
`

const StoryImage = styled.img`
	width: 315px;
	height: 109px;
	border-radius: 8px 8px 0px 0px;
	object-fit: cover;
	margin: 14px 0 16px;
`

StoryImage.defaultProps = {
	src: '/assets/images/explore-1.png',
}

const StoryTitle = styled.h3`
	width: 300px;
	font-family: Butler-Font;
	font-style: normal;
	font-weight: bold;
	font-size: 20px;
	line-height: 28px;
	letter-spacing: -0.2px;
`

const StoryMeta = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	margin: 18px 0 0;
	font-family: Graphik;
`
const StoryMetaLeft = styled.p`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`

const Ellipse = styled.img`
	margin: 0 9px;
`

const StoryMetaRight = styled.p`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`
const HeartIcon = styled.img`
	margin: 0 8px;
`

interface StoryProps {
	id?: number
	writerName?: string
	title: string
	cover_img?: string
	date?: string
	readTime?: number
	likes?: number
}

const StoryCard: React.FC<StoryProps> = ({ writerName, cover_img, title, date, readTime, likes }) => {
	return (
		<Card>
			<WriterName>{writerName}</WriterName>
			<StoryImage src={cover_img} />
			<StoryTitle>{title}</StoryTitle>
			<StoryMeta>
				<StoryMetaLeft>
					{date}
					<Ellipse src='/assets/images/ellipse-separation.svg' />
					{readTime} min read
				</StoryMetaLeft>
				<StoryMetaRight>
					<HeartIcon src='/assets/images/heart.svg' /> {likes} likes
				</StoryMetaRight>
			</StoryMeta>
		</Card>
	)
}
export default StoryCard
