import { StyledItem } from './ItemStyles';

const Item = ({ name, dispatch }) => {
	const itemClickHandler = () => {
		dispatch({ type: 'ENABLE/DISABLE', name, select: true });
	};

	return <StyledItem onClick={itemClickHandler}>{name}</StyledItem>;
};

export default Item;
