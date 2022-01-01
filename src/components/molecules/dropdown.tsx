import styled from 'styled-components'
import { useEffect, useState } from 'react'

const SelectBoxContainer = styled.div`
	height: 44px;
	border: 1px solid #ffffff;
	background: transparent;
	border-radius: 6px;
	padding: 0;
	color: #ffffff;
	width: 315px;
	margin: 34px auto 0;
	font-family: Graphik;
	font-style: normal;
	font-weight: normal;
	font-size: 14px;
	line-height: 15px;
	letter-spacing: -0.2px;
	vertical-align: middle;
	background: #121212;
	position: relative;
`

const SelectBoxSelectedItem = styled.div`
	height: 100%;
	width: 100%;
	padding: 14px 18px;
	vertical-align: middle;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`

const SelectBoxArrow = styled.img<StyleProps>`
	width: 16px;
	height: 16px;
	margin: 0;
	padding: 0;
	transform: ${(props) => (props.clicked ? 'rotate(180deg)' : 'rotate(0deg)')};
	transition: all 0.2s ease-in-out;
`

const SelectBoxItems = styled.div<StyleProps>`
	border-bottom: 1px solid #ddd;
	border-left: 1px solid #ddd;
	border-right: 1px solid #ddd;
	border: 1px solid #ffffff;
	padding: 10px 0;
	display: ${(props) => (props.clicked ? 'flex' : 'none')};
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	background: #121212;
	z-index: 105;
	position: absolute;
	width: 100%;
`

const Item = styled.div`
	padding: 11px 20px;
	width: 100%;
`

interface StyleProps {
	clicked: boolean
}

interface ItemInterface {
	value: string
	id: number
}

let dropdownItems: ItemInterface[] = [
	{ value: 'Newly uploaded', id: 1 },
	{ value: 'Earlier uploaded', id: 2 },
	{ value: 'Most liked', id: 3 },
]

const Dropdown: React.FC = () => {
	const [state, setState] = useState({
		items: dropdownItems,
		showItems: false,
		selectedItem: { value: 'Sort stories by', id: 0 }, // default value
	})

	const dropDown = () => {
		setState((prevState) => ({ ...prevState, showItems: !prevState.showItems }))
	}

	const selectItem = (item: ItemInterface) => {
		setState((prevState) => ({ ...prevState, selectedItem: item, showItems: false }))
	}

	return (
		<>
			<SelectBoxContainer>
				<SelectBoxSelectedItem onClick={dropDown}>
					{state.selectedItem.value}
					<SelectBoxArrow clicked={state.showItems} src='/assets/icons/arrow-down.svg' />
				</SelectBoxSelectedItem>

				<SelectBoxItems clicked={state.showItems}>
					{state.items.map((item) => (
						<Item
							key={item.id}
							onClick={() => selectItem(item)}
							className={state.selectedItem === item ? 'selected' : ''}
						>
							{item.value}
						</Item>
					))}
				</SelectBoxItems>
			</SelectBoxContainer>
		</>
	)
}

export default Dropdown
