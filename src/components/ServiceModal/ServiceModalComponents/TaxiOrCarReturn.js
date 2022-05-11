import Input from './UI/Input';
import SumPreview from './UI/SumPreview';

const TaxiOrCarReturn = () => {
	return (
		<form>
			<Input label='Service cost' />
			<SumPreview name='Service cost' />
		</form>
	);
};

export default TaxiOrCarReturn;
