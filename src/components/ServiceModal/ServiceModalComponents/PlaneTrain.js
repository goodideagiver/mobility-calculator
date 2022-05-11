import React from 'react';
import Input from './UI/Input';
import SumPreview from './UI/SumPreview';

const PlaneTrain = () => {
	return (
		<form>
			<Input label='Tickets cost' />
			<SumPreview name='Service cost' />
		</form>
	);
};

export default PlaneTrain;
