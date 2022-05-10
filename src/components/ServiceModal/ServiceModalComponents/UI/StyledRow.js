import styled from 'styled-components';

export const StyledRow = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	width: 100%;
	background-color: var(--bg-panel-lift);
	overflow: hidden;
	border-radius: var(--panel-radius);
	margin-bottom: 2rem;

	* {
		flex: 1;
	}
`;
