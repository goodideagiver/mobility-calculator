import { StyledItem } from './ItemStyles';

const Item = ({ name }) => {
	const itemClickHandler = () => {
		console.log(name);
	};

	return <StyledItem onClick={itemClickHandler}>{name}</StyledItem>;
};

export default Item;
