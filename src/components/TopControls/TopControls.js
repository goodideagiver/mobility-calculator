import { ControlsContainer, MainButton } from './TopControlsStyles';

import { useServiceContext } from '../../store/service-context';

const TopControls = (props) => {
	const { dispatch } = useServiceContext();

	const resetBtnHandler = () => dispatch({ type: 'RESET' });
	return (
		<ControlsContainer className='inner-panel'>
			<MainButton>Copy sum</MainButton>
			<MainButton>Print</MainButton>
			<MainButton>Help</MainButton>
			<MainButton onClick={resetBtnHandler}>Reset</MainButton>
		</ControlsContainer>
	);
};

export default TopControls;
