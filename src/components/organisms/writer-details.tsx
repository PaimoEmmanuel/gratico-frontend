import styled from 'styled-components'
import { useEffect, useState } from 'react'

const Form = styled.form`
	margin: 48px 0 164px 0;
`
const Label = styled.label`
	font-weight: 600;
	font-size: 14px;
`
const Input = styled.input`
	display: block;
	width: 100%;
	height: 50px;
	border: 1px solid #f5f5f5;
	margin: 16px 0 12px 0;
	padding: 16px;
	font-size: 14px;
	&:placeholder {
		color: #9e9e9e;
	}
	&:focus {
		border: 1px solid ${({ theme }) => theme.colors.blue};
	}
`
const InputNote = styled.p`
	font-size: 12px;
	font-style: italic;
`
const Email = styled.div`
	padding: 0 32px 30px 32px;
	border-bottom: 1px solid #efefef;
`
const Name = styled.div`
	padding: 30px 32px;
	//   border-bottom: 1px solid #efefef;
`
const Button = styled.button<ButtonStyleProps>`
	height: 50px;
	width: 100%;
	background-color: ${(props) => (props.styleEnabled ? props.theme.colors.blue : '#a6a6a6')};
	border-radius: 8px;
	color: ${({ theme }) => theme.colors.white};
	border: none;

	&:disabled {
		background-color: #a6a6a6;
	}
`

interface ButtonStyleProps {
	styleEnabled?: boolean
	theme?: 'theme'
}

interface WriterDetailsProps {
	onSubmit: React.Dispatch<React.SetStateAction<number>>
	email: string
	setEmail: React.Dispatch<React.SetStateAction<string>>
	name: string
	setName: React.Dispatch<React.SetStateAction<string>>
}
const WriterDetails: React.FC<WriterDetailsProps> = ({ email, setEmail, name, setName, onSubmit }) => {
	const [buttonDisplay, setButtonDisplay] = useState(false)

	useEffect(() => {
		if (email !== '' && name !== '') {
			setButtonDisplay(true)
		} else {
			setButtonDisplay(false)
		}
	}, [name, email])

	const handleClick = () => {
		if (email !== '' && name !== '') {
			onSubmit(1)
			window.scrollTo(0, 0)
		}
	}

	return (
		<Form>
			<Email>
				<Label>Let’s start with your email, it’s really useful!</Label>
				<Input
					type='email'
					placeholder='Input your email address here'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<InputNote>You can edit your stories using this email.</InputNote>
			</Email>
			<Name>
				<Label>Ever seen an author without a name?</Label>
				<Input
					type='text'
					placeholder='Input your name or nickname here'
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<Button
					styleEnabled={buttonDisplay}
					onClick={(e) => {
						e.preventDefault()
						handleClick()
						// onSubmit(1)
						// window.scrollTo(0, 0)
					}}
				>
					Next
				</Button>
			</Name>
		</Form>
	)
}
export default WriterDetails
