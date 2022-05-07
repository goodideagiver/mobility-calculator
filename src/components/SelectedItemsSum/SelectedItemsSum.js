import styled from 'styled-components';
import { currencyName } from '../../data/financialConfig';
import { useServiceContext } from '../../store/service-context';

const Layout = styled.div`
	display: flex;
	gap: 1rem;
	flex-direction: column;
`;

const Row = styled.div`
	display: flex;
	gap: 1rem;
	padding-bottom: 1rem;
	border-bottom: 1px solid var(--bg);
	justify-content: space-between;
`;

const SelectedItemsSum = (props) => {
	const { state } = useServiceContext();
	const { cost, count } = state;

	const convertedCost = `${currencyName} ${cost.toFixed(2)}`;

	return (
		<div className='inner-panel'>
			<Layout>
				<Row>
					<span>Services selected: </span>
					<span>{count}</span>
				</Row>
				<Row>
					<span>Services cost: </span>
					<span>{convertedCost}</span>
				</Row>
			</Layout>
		</div>
	);
};

export default SelectedItemsSum;
