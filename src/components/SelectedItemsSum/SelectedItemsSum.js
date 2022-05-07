import styled from 'styled-components';

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
	return (
		<div className='inner-panel'>
			<Layout>
				<Row>
					<span>Services selected: </span>
					<span>20</span>
				</Row>
				<Row>
					<span>Services cost: </span>
					<span>326.00 zł</span>
				</Row>
			</Layout>
		</div>
	);
};

export default SelectedItemsSum;
