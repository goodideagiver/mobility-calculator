import { useServiceContext } from '../../store/service-context';
import { Item, ItemsContainer } from './ItemsSelectorStyles';

const ItemsSelector = (props) => {
	const { state } = useServiceContext();
	const items = state.items;
	const selectedItems = items.filter((item) => !item.selected);

	const visibleElement =
		selectedItems.length > 0 ? (
			selectedItems.map((item) => (
				<Item key={item.name}>{item.name}</Item>
			))
		) : (
			<div>
				<p>No items</p>
			</div>
		);

	return (
		<ItemsContainer className='inner-panel'>
			{visibleElement}
		</ItemsContainer>
	);
};

export default ItemsSelector;
