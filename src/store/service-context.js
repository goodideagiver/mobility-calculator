import React, { useContext, useReducer } from 'react';
import items from '../data/itemsInitialState';
import serviceReducer from './serviceReducer';

const ServiceContext = React.createContext();

const ServiceContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(serviceReducer, {
		items,
		cost: 0,
		count: 0,
	});
	const value = { state, dispatch };

	return (
		<ServiceContext.Provider value={value}>
			{children}
		</ServiceContext.Provider>
	);
};

export default ServiceContextProvider;

//custom context consumer hook
export const useServiceContext = () => {
	const ctx = useContext(ServiceContext);
	if (ctx === undefined) {
		throw new Error(
			'useServiceContext has to be used within ServiceContextProvider'
		);
	}
	return ctx;
};
