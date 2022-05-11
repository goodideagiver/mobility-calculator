import React from 'react';
import Input from './UI/Input';
import SumPreview from './UI/SumPreview';

const RentalCar = () => {
	return (
		<form>
			<Input label='Days' />
			<Input label='Rate' />
			<SumPreview name='Rental car' />
		</form>
	);
};

export default RentalCar;
