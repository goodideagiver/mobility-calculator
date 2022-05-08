import serviceType from './serviceType';
import { limits } from './financialConfig';

const items = [
	{
		name: 'Towing',
		selected: false,
		sum: 0,
		type: serviceType.beforeRepair,
		editable: true,
	},
	{
		name: 'Rental car',
		selected: false,
		sum: 0,
		type: serviceType.beforeRepair,
		editable: true,
	},
	{
		name: 'Towing back to client',
		selected: false,
		sum: 0,
		distance: 0,
		type: serviceType.afterRepair,
		editable: true,
	},
	{
		name: 'Documentation',
		selected: false,
		sum: 100,
	},
	{
		name: 'On site repair bonus',
		selected: false,
		sum: 100,
	},
	{
		name: 'Plane/train',
		selected: false,
		sum: 0,
		editable: true,
	},
	{
		editable: true,
		name: 'Hotel',
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
		name: 'Arrival, repair on site & return',
		selected: false,
		sum: 0,
		type: serviceType.beforeRepair,
		editable: true,
	},
	{
		name: 'Taxi/Public commute/Car return',
		selected: false,
		sum: 0,
		maxSum: limits['Taxi/Public commute/Car return'],
		type: serviceType.afterRepair,
		editable: true,
	},
];

export default items;
