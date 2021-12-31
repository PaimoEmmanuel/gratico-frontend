import styled from 'styled-components'

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
const Button = styled.button`
	height: 50px;
	width: 100%;
	background-color: ${({ theme }) => theme.colors.blue};
	margin-top: 50px;
	border-radius: 8px;
	color: ${({ theme }) => theme.colors.white};
	border: none;
`
const WriterDetails: React.FC = () => {
	return (
		<Form>
			<Email>
				<Label htmlFor=''>Let’s start with your email, it’s really useful!</Label>
				<Input type='text' placeholder='Input your email address here' />
				<InputNote>You can edit your stories using this email.</InputNote>
			</Email>
			<Name>
				<Label htmlFor=''>Ever seen an author without a name?</Label>
				<Input type='text' placeholder='Input your name or nickname here' />
				<Button>Next</Button>
			</Name>
		</Form>
	)
}
export default WriterDetails
