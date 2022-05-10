import { itemNames } from '../../data/itemsInitialState';
import Modal from '../UI/Modal/Modal';

const getServiceComponentByName = (name) => {
	switch (name) {
		case itemNames.towing:
			break;
		case itemNames.rentalCar:
			break;
		case itemNames.towingBack:
			break;
		case itemNames.arrivalAndRepair:
			break;
		case itemNames.hotel:
			break;
		case itemNames.planeTrain:
			break;
		case itemNames.taxi:
			break;

		default:
			return;
	}
};

const ServiceModal = ({ name, dispatch }) => {
	const changeServiceSumHandler = (sum) => {
		dispatch({ type: 'UPDATE_SUM', name, sum });
	};

	const selectedServiceComponent = getServiceComponentByName(name);

	return <Modal>{selectedServiceComponent}</Modal>;
};

export default ServiceModal;
