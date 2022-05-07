import { ControlsContainer, MainButton } from './TopControlsStyles';

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
