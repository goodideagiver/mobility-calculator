import React from 'react';
import Checkbox from './UI/Checkbox';
import Input from './UI/Input';

const Towing = () => {
	return (
		<div>
			<Input label='Distance (KM)' />
			<Checkbox label='Above 4t' />
		</div>
	);
};

export default Towing;
