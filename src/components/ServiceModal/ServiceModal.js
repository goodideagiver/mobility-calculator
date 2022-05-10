import { itemNames } from '../../data/itemsInitialState';
import Modal from '../UI/Modal/Modal';
import ArrivalAndRepair from './ServiceModalComponents/ArrivalAndRepair';
import Hotel from './ServiceModalComponents/Hotel';
import PlaneTrain from './ServiceModalComponents/PlaneTrain';
import RentalCar from './ServiceModalComponents/RentalCar';
import TaxiOrCarReturn from './ServiceModalComponents/TaxiOrCarReturn';
import Towing from './ServiceModalComponents/Towing';
import TowingBackToClient from './ServiceModalComponents/TowingBackToClient';

const getServiceComponentByName = (name) => {
	switch (name) {
		case itemNames.towing:
			return <Towing />;
		case itemNames.rentalCar:
			return <RentalCar />;
		case itemNames.towingBack:
			return <TowingBackToClient />;
		case itemNames.arrivalAndRepair:
			return <ArrivalAndRepair />;
		case itemNames.hotel:
			return <Hotel />;
		case itemNames.planeTrain:
			return <PlaneTrain />;
		case itemNames.taxi:
			return <TaxiOrCarReturn />;

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
