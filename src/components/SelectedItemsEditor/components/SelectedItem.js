import styled from 'styled-components';

const ItemContainer = styled.li`
	display: grid;
	grid-template-columns: 33.3% 33.3% 33.3%;
	align-items: center;
	border-bottom: var(--bg) solid 0.2rem;
	background-color: var(--bg-panel-lift);
	animation: reveal 0.2s forwards;

	@keyframes reveal {
		from {
			filter: brightness(1.5);
		}
		to {
		}
	}
`;

const ItemDiv = styled.div`
	padding: var(--panel-gap);
	display: flex;
	font-size: 1.2rem;
	gap: 1rem;
`;

const ItemEditButton = styled.button`
	flex: 2;
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

const ItemResetButton = styled.button`
	background: gray;
	color: white;
	cursor: pointer;
	border: 0;
	border-radius: 1rem;
	font-size: 1.2rem;
	font-weight: bold;
	padding: 1rem;
	word-break: break-all;

	&:hover {
		background: black;
	}

	&:active {
		transform: translate(0, 2px);
	}
	flex: 1;
`;

const SelectedItem = ({ name, sum, dispatch, editable, onEdit }) => {
	const resetBtnHandler = () => {
		dispatch({ type: 'ENABLE/DISABLE', name, select: false });
	};

	return (
		<ItemContainer>
			<ItemDiv>{name}</ItemDiv>
			<ItemDiv>{sum}</ItemDiv>
			<ItemDiv>
				{editable === true && (
					<ItemEditButton onClick={onEdit.bind(null, name)}>
						Edit
					</ItemEditButton>
				)}
				<ItemResetButton onClick={resetBtnHandler}>
					Remove
				</ItemResetButton>
			</ItemDiv>
		</ItemContainer>
	);
};

export default SelectedItem;
