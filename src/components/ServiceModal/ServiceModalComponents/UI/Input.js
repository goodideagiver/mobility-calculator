import styled from 'styled-components';
import { StyledLabel } from './StyledLabel';
import { StyledRow } from './StyledRow';

const StyledInput = styled.input`
	border-radius: var(--panel-radius);
	padding: 1rem;
	border: 0;
`;

const Input = ({ label }) => {
	const inputId = label + 'Input';

	return (
		<StyledRow>
			<StyledLabel for={inputId}>{label}</StyledLabel>
			<StyledInput id={inputId} />
		</StyledRow>
	);
};

export default Input;
