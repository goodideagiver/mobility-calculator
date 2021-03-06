import { useServiceContext } from '../../store/service-context';
import { ItemsContainer, NoItemsInfoDiv } from './ItemsSelectorStyles';

import Item from './Item';

const ItemsSelector = () => {
	const { state, dispatch } = useServiceContext();
	const items = state.items;
	const selectedItems = items.filter((item) => !item.selected);

	const visibleElement =
		selectedItems.length > 0 ? (
			selectedItems.map((item) => (
				<Item dispatch={dispatch} key={item.name} name={item.name} />
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
