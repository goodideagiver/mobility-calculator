import { currencyName } from '../../data/financialConfig';
import { useServiceContext } from '../../store/service-context';
import { Layout, Row } from './SelectedItemsSumStyles';

const SelectedItemsSum = () => {
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
