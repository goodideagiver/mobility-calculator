import ItemsSelector from '../ItemsSelector/ItemsSelector';

import styled from 'styled-components';

const PanelContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

const SidePanel = (props) => {
	return (
		<PanelContainer className='bg-lift'>
			<h2>Select item</h2>
			<ItemsSelector />
		</PanelContainer>
	);
};

export default SidePanel;
