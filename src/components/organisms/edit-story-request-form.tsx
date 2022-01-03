import { useState } from 'react'
import styled from 'styled-components'

const Form = styled.form`
	margin: 48px auto 164px;
	width: 315px;
`

const Input = styled.input`
	display: block;
	width: 100%;
	height: 50px;
	border: 1px solid #f5f5f5;
	margin: 0 auto;
	padding: 16px;
	font-size: 14px;

	&:placeholder {
		color: #9e9e9e;
	}
	&:focus {
		border: 1px solid ${({ theme }) => theme.colors.blue};
	}
`
const ErrorNote = styled.p<ErrorNoteStyleProps>`
	font-size: 13px;
	line-height: 14px;
	letter-spacing: -0.2px;
	font-style: italic;
	margin-top: 10px;
	color: #f12e43;
	display: ${(props) => (props.show ? 'block' : 'none')};
`
const Email = styled.div`
	padding: 0;
	width: 100%;
	margin-bottom: 24px;
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

interface ErrorNoteStyleProps {
	show: boolean
}

interface EditStoryRequestFormProps {
	onSubmit: any
}
const EditStoryRequestForm: React.FC<EditStoryRequestFormProps> = ({ onSubmit }) => {
	const [state, setstate] = useState({
		buttonEnabled: false,
		emailValue: '',
	})

	const [errorDisplay, setErrorDisplay] = useState({
		show: false,
		errorNote: 'This email isn’t tied to an author',
	})

	const handleChange = (value: any) => {
		let inputValue = value.target.value
		if (inputValue !== '') {
			setstate((prevState) => ({
				...prevState,
				buttonEnabled: true,
				emailValue: inputValue,
			}))
		} else {
			setstate((prevState) => ({
				...prevState,
				buttonEnabled: false,
				emailValue: inputValue,
			}))
		}
	}

	// should be called before sending email to the back...on button click
	const checkEmail = (value: any) => {
		const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

		if (value.match(mailformat)) {
			return true
		}
		return false
	}

	const realSubmit = async (params: any) => {}

	const handleSubmit = (e: any) => {
		e.preventDefault()
		const inputValue = state.emailValue

		if (inputValue !== '') {
			if (checkEmail(inputValue)) {
				setErrorDisplay((prevState) => ({ ...prevState, show: false }))
				onSubmit(inputValue)
				window.scrollTo(0, 0)
			} else {
				setErrorDisplay((prevState) => ({
					...prevState,
					show: true,
					errorNote: 'Please enter a valid email',
				}))
			}
		}
	}

	return (
		<Form>
			<Email>
				<Input
					type='text'
					placeholder='Input your email address here'
					onChange={(e) => {
						e.preventDefault()
						handleChange(e)
					}}
				/>
				<ErrorNote show={errorDisplay.show}>{errorDisplay.errorNote}</ErrorNote>
			</Email>

			<Button
				styleEnabled={state.buttonEnabled}
				onClick={(e) => {
					handleSubmit(e)
				}}
			>
				Send link to edit
			</Button>
		</Form>
	)
}
export default EditStoryRequestForm
