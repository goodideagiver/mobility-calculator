import serviceType from './serviceType';
import { limits } from './financialConfig';

export const itemNames = {
	towing: 'Towing',
	rentalCar: 'Rental car',
	towingBack: 'Towing back to client',
	documentation: 'Documentation',
	repairBonus: 'On site repair bonus',
	planeTrain: 'Plane/train',
	hotel: 'Hotel',
	arrivalAndRepair: 'Arrival, repair on site & return',
	taxi: 'Taxi/Public commute/Car return',
};

const items = [
	{
		name: itemNames.towing,
		selected: false,
		sum: 0,
		type: serviceType.beforeRepair,
		editable: true,
	},
	{
		name: itemNames.rentalCar,
		selected: false,
		sum: 0,
		type: serviceType.beforeRepair,
		editable: true,
	},
	{
		name: itemNames.towingBack,
		selected: false,
		sum: 0,
		distance: 0,
		type: serviceType.afterRepair,
		editable: true,
	},
	{
		name: itemNames.documentation,
		selected: false,
		sum: 100,
	},
	{
		name: itemNames.repairBonus,
		selected: false,
		sum: 100,
	},
	{
		name: itemNames.planeTrain,
		selected: false,
		sum: 0,
		editable: true,
	},
	{
		editable: true,
		name: itemNames.hotel,
		selected: false,
		sum: 0,
		numberOfPeople: 1,
		get maxSum() {
			return (
				this.numberOfPeople *
				limits.hotel.costPerDay *
				limits.hotel.daysLimit
			);
		},
	},
	{
		name: itemNames.arrivalAndRepair,
		selected: false,
		sum: 0,
		type: serviceType.beforeRepair,
		editable: true,
	},
	{
		name: itemNames.taxi,
		selected: false,
		sum: 0,
		maxSum: limits.taxi,
		type: serviceType.afterRepair,
		editable: true,
	},
];

export default items;
