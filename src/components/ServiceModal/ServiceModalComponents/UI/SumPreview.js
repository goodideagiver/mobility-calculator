import styled from 'styled-components';
import { currencyName } from '../../../../data/financialConfig';
import { StyledLabel } from './StyledLabel';
import { StyledRow } from './StyledRow';

const StyledSpan = styled.span`
	text-align: end;
	padding: 1rem;
`;

const SumPreview = ({ sum = 0, name }) => {
	return (
		<StyledRow>
			<StyledLabel>{name} sum</StyledLabel>
			<StyledSpan>{currencyName + ' ' + sum}</StyledSpan>
		</StyledRow>
	);
};

export default SumPreview;
