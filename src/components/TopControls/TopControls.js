import styled from 'styled-components';

const ControlsContainer = styled.div`
	display: grid;
	gap: 1rem;
	grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
`;

const MainButton = styled.button`
	background: gray;
	color: white;
	cursor: pointer;
	border: 0;
	border-radius: 1rem;
	font-size: 1.2rem;
	font-weight: bold;
	padding: 0.5rem;

	&:hover {
		background: black;
	}

	&:active {
		transform: translate(0, 2px);
	}
`;

const TopControls = (props) => {
	return (
		<ControlsContainer className='inner-panel'>
			<MainButton>Copy sum</MainButton>
			<MainButton>Print</MainButton>
			<MainButton>Help</MainButton>
			<MainButton>Reset</MainButton>
		</ControlsContainer>
	);
};

export default TopControls;
