import styled, { keyframes } from 'styled-components'
import { useEffect, useState } from 'react'
import { checkUserByEmail } from '../../services/user'

const Form = styled.form`
	// margin: 48px 0 164px 0;
`
const Label = styled.label<LabelStyleProps>`
	font-weight: 600;
	font-size: 14px;
	color: ${(props) => (props.active ? '#222222' : '#9E9E9E')};
`

interface LabelStyleProps {
	active?: boolean
}
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
const InputNote = styled.p<InputNoteStyleProps>`
	font-size: 12px;
	font-style: italic;
	color: ${(props) => (props.error ? '#D91824' : '#000000')};
`
const Email = styled.div`
	padding: 0 32px 30px 32px;
	border-bottom: 1px solid #efefef;
`

const InputWithValidateIcon = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	position: relative;
`

const ValidateIcon = styled.div`
	position: absolute;
	right: 16px;
`

const spinAnimation = keyframes`
  0% 
  {
    transform: rotate(0);
  }
  
  100% 
  {
    transform: rotate(360deg);
  }
`

const SpinIcon = styled.div`
	width: 20px;
	height: 20px;
	animation-name: ${spinAnimation};
	animation-iteration-count: infinite;
	animation-duration: 2s;
	animation-timing-function: linear;
`

const AuthenticateIcon = styled.div`
	width: 20px;
	height: 20px;
`

const Name = styled.div`
	padding: 30px 32px;
	//   border-bottom: 1px solid #efefef;
`
const Button = styled.button<ButtonStyleProps>`
	height: 50px;
	width: 100%;
	background-color: ${(props) => (props.styleEnabled ? '#2D5093' : '#a6a6a6')};
	border-radius: 8px;
	color: ${({ theme }) => theme.colors.white};
	border: none;
	margin-top: 28px;

	&:disabled {
		background-color: #a6a6a6;
	}
`

interface ButtonStyleProps {
	styleEnabled?: boolean
	theme?: 'theme'
}

interface InputNoteStyleProps {
	error: boolean
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
	const [inputValidationIcon, setInputValidationIcon] = useState('')
	const [labeActive, setLabelActive] = useState(false)
	const [inputNote, setInputNote] = useState({
		error: false,
		note: 'You can edit your stories using this email',
	})

	useEffect(() => {
		if (email !== '' && name !== '') {
			setButtonDisplay(true)
		} else {
			setButtonDisplay(false)
		}
	}, [name, email])

	const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

	const handleClick = () => {
		if (email !== '' && name !== '') {
			if (email.match(mailformat)) {
				onSubmit(1)
				window.scrollTo(0, 0)
			} else {
				setInputNote({ error: true, note: 'Please use a valid email' })
			}
		}
	}

	const handleEmailInputChange = (email: any) => {
		setEmail(email)
		setInputValidationIcon('loading')

		// check email format
		if (email.match(mailformat)) {
			console.log(email)
			setInputNote({ error: false, note: 'You can edit your stories using this email' })

			// send to the backend
			checkUserByEmail(email).then((res) => {
				if (!(Object.keys(res.data).length === 0) && res.data.email === email) {
					setName(res.data.name)
					setLabelActive(true)
				}
				setInputValidationIcon('successful')
			})
		} else {
			setLabelActive(false)
		}
	}

	const checkEmailInput = () => {
		if (email === '' || !email.match(mailformat)) {
			setInputNote({ error: true, note: 'Please use a valid email' })
		} else {
			setInputNote({ error: false, note: 'You can edit your stories using this email' })
		}
	}

	return (
		<Form>
			<Email>
				<Label active={true}>Your email is the key!</Label>
				<InputWithValidateIcon>
					<Input
						type='email'
						placeholder='Input your email address here'
						value={email}
						onChange={(e) => handleEmailInputChange(e.target.value)}
					/>

					<ValidateIcon>
						{inputValidationIcon === 'loading' && (
							<SpinIcon>
								<svg
									width='20'
									height='20'
									viewBox='0 0 20 20'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M3.75005 10.0001C3.75005 10.3458 3.47017 10.6253 3.12488 10.6253H0.625163C0.280328 10.6253 0 10.3458 0 10.0001C0 9.65438 0.279881 9.37493 0.625163 9.37493H3.12488C3.47017 9.37493 3.75005 9.65438 3.75005 10.0001ZM9.9999 16.25C9.65507 16.25 9.37474 16.5294 9.37474 16.8751V19.3748C9.37474 19.7206 9.65462 20 9.9999 20C10.3447 20 10.6251 19.7206 10.6251 19.3748V16.8751C10.6251 16.5294 10.3447 16.25 9.9999 16.25ZM13.9784 15.6405C13.8053 15.341 13.4234 15.2381 13.1248 15.4125C12.8253 15.5843 12.7228 15.9675 12.8959 16.2656L14.1458 18.431C14.3228 18.7349 14.7068 18.8299 14.9994 18.659C15.2989 18.4872 15.4013 18.104 15.2282 17.8058L13.9784 15.6405ZM18.4308 14.1464L16.2655 12.8966C15.966 12.7239 15.5841 12.8264 15.4123 13.1255C15.2397 13.425 15.3421 13.8069 15.6403 13.9791L17.8057 15.2289C18.0987 15.3989 18.4845 15.3026 18.6589 15C18.8324 14.7005 18.7304 14.3186 18.4308 14.1464ZM19.3747 9.3749H16.875C16.5301 9.3749 16.2498 9.65434 16.2498 10.0001C16.2498 10.3458 16.5297 10.6252 16.875 10.6252H19.3747C19.7195 10.6252 19.9998 10.3458 19.9998 10.0001C19.9998 9.65434 19.7195 9.3749 19.3747 9.3749ZM16.2655 7.10397L18.4308 5.85411C18.7303 5.68147 18.8319 5.29913 18.6589 5.00051C18.4862 4.70101 18.1034 4.59812 17.8057 4.77163L15.6403 6.02149C15.3421 6.1937 15.2397 6.57559 15.4123 6.87509C15.5871 7.17807 15.9734 7.27398 16.2655 7.10397ZM14.9999 1.34015C14.7004 1.16751 14.3185 1.26952 14.1463 1.56903L12.8964 3.73393C12.7238 4.03343 12.8263 4.41534 13.1253 4.58753C13.4205 4.75887 13.8059 4.66077 13.9789 4.35865L15.2288 2.19374C15.4019 1.89468 15.299 1.51278 14.9999 1.34015ZM9.9999 0C9.65507 0 9.37474 0.279448 9.37474 0.625165V3.12488C9.37474 3.4706 9.65462 3.75005 9.9999 3.75005C10.3447 3.75005 10.6251 3.4706 10.6251 3.12488V0.625165C10.6251 0.279448 10.3447 0 9.9999 0ZM5.85357 1.56905C5.68093 1.26911 5.29859 1.16709 4.99997 1.34017C4.70047 1.51281 4.59889 1.89515 4.7711 2.19377L6.02096 4.35867C6.19664 4.66166 6.58115 4.75801 6.87455 4.58755C7.17405 4.41491 7.27563 4.03258 7.10343 3.73395L5.85357 1.56905ZM4.35863 6.02151L2.19372 4.77165C1.89422 4.59858 1.51232 4.70147 1.34012 5.00053C1.16748 5.30003 1.26994 5.68194 1.569 5.85413L3.73391 7.10399C4.02818 7.27444 4.41269 7.17767 4.58751 6.87511C4.76015 6.57561 4.65769 6.19371 4.35863 6.02151Z'
										fill='black'
									/>
								</svg>
							</SpinIcon>
						)}

						{inputValidationIcon === 'failed' && (
							<AuthenticateIcon>
								<svg
									width='10'
									height='10'
									viewBox='0 0 10 10'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M6.41409 5L9.70691 8.29286C10.0975 8.68348 10.0975 9.3164 9.70691 9.70703C9.31629 10.0977 8.68338 10.0977 8.29276 9.70703L4.99994 6.41417L1.70712 9.70703C1.3165 10.0977 0.683592 10.0977 0.292965 9.70703C-0.0976611 9.31641 -0.0976492 8.68349 0.292965 8.29286L3.58579 5L0.292965 1.70714C-0.0976492 1.31652 -0.0976492 0.683601 0.292965 0.292969C0.68358 -0.0976624 1.31649 -0.0976504 1.70712 0.292969L4.99994 3.58583L8.29276 0.292969C8.68337 -0.0976504 9.31628 -0.0976504 9.70691 0.292969C10.0975 0.683589 10.0975 1.31651 9.70691 1.70714L6.41409 5Z'
										fill='#D91824'
									/>
								</svg>
							</AuthenticateIcon>
						)}

						{inputValidationIcon === 'successful' && (
							<svg
								width='14'
								height='10'
								viewBox='0 0 14 10'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M12.9584 0.00797641C12.7892 0.0323479 12.633 0.11269 12.5147 0.235888L4.54789 8.2027L1.24839 5.56309H1.24812C1.08904 5.43588 0.88604 5.37697 0.683566 5.39946C0.481092 5.42196 0.295772 5.52399 0.168289 5.68308C-0.0965823 6.01436 -0.0430156 6.49779 0.288271 6.76292L4.12769 9.83453C4.4338 10.0764 4.87219 10.0504 5.14753 9.77454L13.5942 1.32779H13.5945C13.8388 1.09827 13.906 0.73672 13.7606 0.434646C13.6149 0.132551 13.2903 -0.0401945 12.9585 0.00801094L12.9584 0.00797641Z'
									fill='#3B9E32'
								/>
							</svg>
						)}
					</ValidateIcon>
				</InputWithValidateIcon>

				<InputNote error={inputNote.error}>{inputNote.note}</InputNote>
			</Email>
			<Name>
				<Label active={labeActive}>Authors have names, what’s yours?</Label>
				<Input
					type='text'
					maxLength={26}
					placeholder='Input your name or nickname here'
					value={name}
					onFocus={() => checkEmailInput()}
					onChange={(e) => setName(e.target.value)}
				/>

				<Button
					styleEnabled={buttonDisplay}
					onClick={(e) => {
						e.preventDefault()
						handleClick()
					}}
				>
					Next
				</Button>
			</Name>
		</Form>
	)
}
export default WriterDetails
