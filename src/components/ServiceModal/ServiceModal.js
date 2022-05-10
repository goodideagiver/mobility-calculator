import Modal from '../UI/Modal/Modal';

const getServiceComponentByName = (name) => {
	switch (name) {
		case 'Towing':
			break;
		case 'Rental car':
			break;
		case 'Towing back to client':
			break;
		case 'Arrival, repair on site & return':
			break;
		case 'Plane/train':
			break;
		case 'Hotel':
			break;
		case 'Taxi/Public commute/Car return':
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
