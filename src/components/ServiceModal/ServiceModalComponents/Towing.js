import { useCallback, useEffect, useState } from 'react';
import { towingRates } from '../../../data/financialConfig';
import Checkbox from './UI/Checkbox';
import Input from './UI/Input';

const Towing = ({ updateSum }) => {
	const [isValid, setIsValid] = useState(false);
	const [distance, setDistance] = useState('');
	const [higherTonnage, setHigherTonnage] = useState(false);

	const countSum = () => {
		const { handlingFee, rate } =
			towingRates[higherTonnage ? 'heavy' : 'light'];

		return (handlingFee + rate * distance).toFixed(2);
	};

	const validateAndUpdateSum = useCallback(() => {
		if (!isNaN(distance) && distance.length) {
			setIsValid(true);
			updateSum(countSum());
		} else {
			setIsValid(false);
		}
	}, [distance, higherTonnage]);

	const distanceInputHandler = (event) => {
		setDistance(event.target.value);
		validateAndUpdateSum();
	};

	const checkboxHandler = (event) => {
		setHigherTonnage(event.target.checked);
	};

	useEffect(() => {
		validateAndUpdateSum();
	}, [higherTonnage, distance]);

	return (
		<form>
			<Input
				value={distance}
				onInput={distanceInputHandler}
				label='Distance'
				type='number'
				step='1'
				min='0'
			/>
			<Checkbox
				value={higherTonnage}
				onInput={checkboxHandler}
				label='Above 4t'
			/>
		</form>
	);
};

export default Towing;
