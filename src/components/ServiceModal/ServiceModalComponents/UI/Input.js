import styled from 'styled-components';

const StyledInput = styled.input`
	border-radius: var(--panel-radius);
	padding: 1rem;
	border: 0;
`;

const StyledRow = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	width: 100%;
	background-color: var(--bg-panel-lift);
	overflow: hidden;
	border-radius: var(--panel-radius);

	* {
		flex: 1;
	}
`;

const StyledLabel = styled.label`
	padding: 1rem;
`;

const Input = ({ label }) => {
	return (
		<StyledRow>
			<StyledLabel>{label}</StyledLabel>
			<StyledInput />
		</StyledRow>
	);
};

export default Input;
