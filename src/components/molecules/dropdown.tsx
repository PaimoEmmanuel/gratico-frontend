import styled from 'styled-components'
import { useEffect, useState } from 'react'

const DropdownWrapper = styled.div<StyleProps>`
	width: 315px;
	margin: 34px auto 0;
	margin-bottom: ${(props) => (props.optionSelected ? '0px' : '20px')};
`

const SelectBoxContainer = styled.div`
	height: 44px;
	border: 1px solid #ffffff;
	background: transparent;
	border-radius: 6px;
	padding: 0;
	color: #ffffff;
	width: 100%;
	margin: 0 auto;
	font-family: Graphik;
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	line-height: 18px;
	vertical-align: middle;
	background: #121212;
	position: relative;
`

const SelectBoxSelectedItem = styled.div`
	height: 100%;
	width: 100%;
	padding: 16px 18px;
	vertical-align: middle;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`

const SelectBoxArrow = styled.div<StyleProps>`
	// width: 16px;
	height: 16px;
	margin: 0;
	padding: 0;
	transform: ${(props) => (props.clicked ? 'rotate(180deg)' : 'rotate(0deg)')};
	transition: all 0.2s ease-in-out;
`

const SelectBoxItems = styled.div<StyleProps>`
	// border: 1px solid #ffffff;
	padding: 24px 0 0;
	display: ${(props) => (props.clicked ? 'flex' : 'none')};
	box-shadow: 4px 6px 30px 6px rgba(0, 0, 0, 0.3);
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	background: #121212;
	z-index: 98;
	position: absolute;
	top: 44px;
	width: 100%;
`

const Item = styled.div`
	padding: 0 34px 34px;
	width: 100%;
`

const SortOption = styled.div<StyleProps>`
	font-family: Graphik;
	font-style: normal;
	font-weight: bold;
	font-size: 24px;
	line-height: 26px;
	letter-spacing: -0.2px;
	color: #ffffff;
	margin-top: 34px;
	display: ${(props) => (props.optionSelected ? 'flex' : 'none')};
`

interface StyleProps {
	clicked?: boolean
	optionSelected?: boolean
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
interface DropdownProps {
	onSelect: (filterBy: string) => void
}
const Dropdown: React.FC<DropdownProps> = ({ onSelect }) => {
	const [state, setState] = useState({
		items: dropdownItems,
		showItems: false,
		selected: false,
		selectedItem: { value: '', id: 0 }, // default value
	})

	const dropDown = () => {
		setState((prevState) => ({
			...prevState,
			showItems: !prevState.showItems,
		}))
	}

	const selectItem = (item: ItemInterface) => {
		setState((prevState) => ({
			...prevState,
			selected: true,
			selectedItem: item,
			showItems: false,
		}))
	}

	return (
		<DropdownWrapper>
			<SelectBoxContainer>
				<SelectBoxSelectedItem onClick={dropDown}>
					Sort stories by
					<SelectBoxArrow clicked={state.showItems}>
						<svg
							width='16'
							height='16'
							viewBox='0 0 16 16'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M13.2802 5.96667L8.93355 10.3133C8.42021 10.8267 7.58021 10.8267 7.06688 10.3133L2.72021 5.96667'
								stroke='white'
								strokeWidth='1.5'
								strokeMiterlimit='10'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					</SelectBoxArrow>
				</SelectBoxSelectedItem>

				<SelectBoxItems clicked={state.showItems}>
					{state.items.map((item) => (
						<Item
							key={item.id}
							onClick={() => {
								selectItem(item)
								onSelect(item.value)
							}}
							className={state.selectedItem === item ? 'selected' : ''}
						>
							{item.value}
						</Item>
					))}
				</SelectBoxItems>
			</SelectBoxContainer>

			<SortOption optionSelected={state.selected}>{state.selectedItem.value}</SortOption>
		</DropdownWrapper>
	)
}

export default Dropdown
