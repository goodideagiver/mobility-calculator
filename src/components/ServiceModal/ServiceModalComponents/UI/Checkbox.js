import styled from 'styled-components';

import { StyledLabel } from './StyledLabel';
import { StyledRow } from './StyledRow';

const StyledCheckbox = styled.input`
	opacity: 0;
	cursor: pointer;
`;

const CustomCheckbox = styled.label`
	position: relative;
	cursor: pointer;

	span {
		--size: 2rem;
		border: 2px white solid;
		width: var(--size);
		height: var(--size);
		position: absolute;
		border-radius: 50%;
		cursor: pointer;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	input:checked ~ span {
		background: var(--color-hl);
	}
`;

const Checkbox = ({ label, ...props }) => {
	const checkboxId = label + 'Checkbox';

	return (
		<StyledRow>
			<StyledLabel htmlFor={checkboxId}>{label}</StyledLabel>
			<CustomCheckbox>
				<StyledCheckbox {...props} type={'checkbox'} id={checkboxId} />
				<span />
			</CustomCheckbox>
		</StyledRow>
	);
};

export default Checkbox;
