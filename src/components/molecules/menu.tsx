import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
	width: 90%;
	// height: 352px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding: 20px 10px;
	border-radius: 0 0 8px 8px;
	background-color: ${({ theme }) => theme.colors.primary};
	position: absolute;
	margin: 10px auto;
	left: 50%;
	transform: translateX(-50%);
	z-index: 100;
	transition: all 5s ease; //fix
`

const MenuList = styled.ul`
	list-style-type: none;
	margin: 0;
	margin-bottom: 30px;
	padding: 0;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	width: 100%;
`

const MenuListItem = styled.li`
	font-family: Graphik;
	font-style: normal;
	font-weight: normal;
	font-size: 22px;
	line-height: 24px;
	letter-spacing: -0.005em;
	color: #090913;
	margin: 15px;

	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`

const ItemLink = styled(Link)`
	text-decoration: none;
	color: #090913;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`

const MenuListItemIcon = styled.img`
	margin: 0 8px;
`

const MenuFoot = styled.p`
	width: 182px;
	font-family: Graphik;
	font-style: normal;
	font-weight: normal;
	font-size: 15px;
	line-height: 20px;
	text-align: center;
	color: #000000;
	vertical-align: middle;
`

const RedHeartImg = styled.img`
	width: 14px;
	height: 14px;
	text-align: center;
	margin: auto;
	object-fit: cover;
`

const Menu: React.FC = () => (
	<Container>
		<MenuList>
			<MenuListItem>
				<ItemLink to='/write-story'>
					upload your story <MenuListItemIcon src='/assets/icons/document-upload.svg' />
				</ItemLink>
			</MenuListItem>

			<MenuListItem>
				<ItemLink to='/explore'>
					explore stories <MenuListItemIcon src='/assets/icons/discover.svg' />
				</ItemLink>
			</MenuListItem>

			<MenuListItem>
				<ItemLink to='/edit-story'>
					edit your story <MenuListItemIcon src='/assets/icons/edit.svg' />
				</ItemLink>
			</MenuListItem>

			<MenuListItem>give feedback</MenuListItem>
		</MenuList>
		<MenuFoot>
			Share faith-based content for all to read <RedHeartImg src='/assets/images/red-heart.png' />
		</MenuFoot>
	</Container>
)

export default Menu
