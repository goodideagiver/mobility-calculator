import React from 'react';
import Input from './UI/Input';
import SumPreview from './UI/SumPreview';

const ArrivalAndRepair = () => {
	return (
		<form>
			<Input label='Service time' />
			<Input label='Distance' />
			<Input label='Client vehicle class rate' />
			<SumPreview name='Service cost' />
		</form>
	);
};

export default ArrivalAndRepair;
