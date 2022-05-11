import Input from './UI/Input';
import SumPreview from './UI/SumPreview';

const Hotel = () => {
	return (
		<form>
			<Input label='Hotel cost' type='number' step='0.01' min='0' />
			<Input label='People' type='number' step='1' min='0' />
			<SumPreview name='Hotel cost' />
		</form>
	);
};

export default Hotel;
