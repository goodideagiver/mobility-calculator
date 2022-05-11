import { useState } from 'react';
import { limits, towingBackRates } from '../../../data/financialConfig';
import Input from './UI/Input';
import SumPreview from './UI/SumPreview';

const TowingBackToClient = () => {
	const [sum, setSum] = useState(0);
	const [distance, setDistance] = useState('');

	const calculateSum = () => {
		if (isNaN(distance)) {
			setSum(0);
			return;
		}
		if (distance <= 50) {
			setSum(limits.taxi.toFixed(2));
			return;
		} else if (+distance > 50) {
			const euroCourse = 4.5;
			const newSum =
				towingBackRates.rate * distance * euroCourse +
				towingBackRates.handlingFee * euroCourse;
			setSum(newSum.toFixed(2));
		}
	};

	const distanceInputHandler = (ev) => {
		setDistance(ev.target.value);
		calculateSum();
	};

	return (
		<form>
			<Input
				onInput={distanceInputHandler}
				label='Towing back distance'
				type='number'
				step='1'
				min='0'
				value={distance}
			/>
			<SumPreview name='Towing back cost' sum={sum} />
		</form>
	);
};

export default TowingBackToClient;
