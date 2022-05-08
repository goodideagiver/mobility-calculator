import { useServiceContext } from '../../store/service-context';
import { Item, ItemsContainer, NoItemsInfoDiv } from './ItemsSelectorStyles';

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
			<NoItemsInfoDiv>
				<p>No items</p>
			</NoItemsInfoDiv>
		);

	return (
		<ItemsContainer className='inner-panel'>
			{visibleElement}
		</ItemsContainer>
	);
};

export default ItemsSelector;
