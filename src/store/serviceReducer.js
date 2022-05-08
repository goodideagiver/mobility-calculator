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

		default:
			break;
	}
};

export default serviceReducer;
