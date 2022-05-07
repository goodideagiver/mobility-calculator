import styled from 'styled-components';

import items from '../../placeholder/items';

const ItemsContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	flex: 1;
`;

const Item = styled.button`
	background: var(--color-hl);
	color: white;
	cursor: pointer;
	border: 0;
	border-radius: 1rem;
	font-size: 1.2rem;
	font-weight: bold;
	padding: 1rem;
	word-break: break-all;

	&:hover {
		background: var(--color-hl-hov);
	}

	&:active {
		transform: translate(0, 2px);
	}
`;

const ItemsSelector = (props) => {
	return (
		<ItemsContainer className='inner-panel'>
			{items
				.filter((item) => !item.selected)
				.map((item) => (
					<Item key={item.name}>{item.name}</Item>
				))}
		</ItemsContainer>
	);
};

export default ItemsSelector;
