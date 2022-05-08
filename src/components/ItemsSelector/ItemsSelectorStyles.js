import styled from 'styled-components';

export const ItemsContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	flex: 1;
`;
export const Item = styled.button`
	background: var(--color-hl);
	color: white;
	cursor: pointer;
	border: 0;
	border-radius: 1rem;
	font-size: 1.2rem;
	font-weight: bold;
	padding: 1rem;
	word-break: break-all;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;

	&:hover {
		background: var(--color-hl-hov);
	}

	&:active {
		transform: translate(0, 2px);
	}
`;

export const NoItemsInfoDiv = styled.div`
	display: grid;
	height: 100%;
	width: 100%;
	place-items: center;
	opacity: 0.3;
	font-size: 2rem;
`;
