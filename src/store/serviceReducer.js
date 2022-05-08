const serviceReducer = (state, action) => {
	switch (action.type) {
		case 'ENABLE/DISABLE':
			const newItems = [...state.items];
			const indexOfChangedItem = newItems.findIndex(
				(item) => item.name === action.name
			);

			const newItem = newItems[indexOfChangedItem];
			newItem.selected = action.select;

			const newSumItems = newItems.filter((item) => item.selected);

			let newSum = 0;
			let newItemCount = 0;

			if (newSumItems.length) {
				newSumItems.forEach((item) => (newSum += item.sum));
				newItemCount = newSumItems.length;
			}
			return { items: newItems, cost: newSum, count: newItemCount };
		case 'RESET':
			const newItemsReset = [...state.items];
			newItemsReset.forEach((item) => (item.selected = false));
			return { items: newItemsReset, cost: 0, count: 0 };
		default:
			break;
	}
};

export default serviceReducer;
