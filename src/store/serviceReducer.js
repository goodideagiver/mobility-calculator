const serviceReducer = (state, action) => {
	switch (action.type) {
		case 'ENABLE/DISABLE':
			const selectedItem = action.name;
			const isSelected = action.select;

			const newItems = [...state.items];
			const indexOfChangedItem = newItems.findIndex(
				(item) => item.name === selectedItem
			);

			const newItem = newItems[indexOfChangedItem];
			newItem.selected = isSelected;

			const selectedItems = newItems.filter((item) => item.selected);

			let newSum = 0;
			let newItemCount = 0;

			if (selectedItems.length) {
				selectedItems.forEach((item) => (newSum += +item.sum));
				newItemCount = selectedItems.length;
			}
			return { items: newItems, cost: newSum, count: newItemCount };
		case 'RESET':
			const newItemsReset = [...state.items];
			newItemsReset.forEach((item) => (item.selected = false));
			return { items: newItemsReset, cost: 0, count: 0 };
		case 'UPDATE_SUM':
			state.items.find((item) => item.name === action.name).sum =
				action.sum;

			const itemsUpdateSum = state.items;

			const selectedSumItems = itemsUpdateSum.filter(
				(item) => item.selected
			);

			let newSum2 = 0;
			let newItemCount2 = 0;

			if (selectedSumItems.length) {
				selectedSumItems.forEach((item) => (newSum2 += +item.sum));
				newItemCount2 = selectedSumItems.length;
			}

			return { items: state.items, cost: newSum2, count: newItemCount2 };
		default:
			break;
	}
};

export default serviceReducer;
