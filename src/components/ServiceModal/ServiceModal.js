import { itemNames } from '../../data/itemsInitialState';
import { useServiceContext } from '../../store/service-context';
import Modal from '../UI/Modal/Modal';
import ArrivalAndRepair from './ServiceModalComponents/ArrivalAndRepair';
import Hotel from './ServiceModalComponents/Hotel';
import PlaneTrain from './ServiceModalComponents/PlaneTrain';
import RentalCar from './ServiceModalComponents/RentalCar';
import TaxiOrCarReturn from './ServiceModalComponents/TaxiOrCarReturn';
import Towing from './ServiceModalComponents/Towing';
import TowingBackToClient from './ServiceModalComponents/TowingBackToClient';

const getServiceComponentByName = (name, onSumChange) => {
	switch (name) {
		case itemNames.towing:
			return <Towing updateSum={onSumChange} />;
		case itemNames.rentalCar:
			return <RentalCar updateSum={onSumChange} />;
		case itemNames.towingBack:
			return <TowingBackToClient updateSum={onSumChange} />;
		case itemNames.arrivalAndRepair:
			return <ArrivalAndRepair updateSum={onSumChange} />;
		case itemNames.hotel:
			return <Hotel updateSum={onSumChange} />;
		case itemNames.planeTrain:
			return <PlaneTrain updateSum={onSumChange} />;
		case itemNames.taxi:
			return <TaxiOrCarReturn updateSum={onSumChange} />;

		default:
			return;
	}
};

const ServiceModal = ({ name, onConfirm }) => {
	const { dispatch } = useServiceContext();

	const changeServiceSumHandler = (sum) => {
		dispatch({ type: 'UPDATE_SUM', name, sum });
	};

	const selectedServiceComponent = getServiceComponentByName(
		name,
		changeServiceSumHandler
	);

	return (
		<Modal onConfirm={onConfirm} title={name}>
			{selectedServiceComponent}
		</Modal>
	);
};

export default ServiceModal;
