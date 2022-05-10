import { useState } from 'react';

import { useServiceContext } from '../../store/service-context';
import SelectedItem from './components/SelectedItem';
import classes from './SelectedItemsEditor.module.css';

import NoItemsMessage from '../NoItemsMessage/NoItemsMessage';
import ServiceModal from '../ServiceModal/ServiceModal';

const SelectedItemsEditor = () => {
	const { state, dispatch } = useServiceContext();
	const items = state.items;
	const selectedItems = items.filter((item) => item.selected);

	const [modalVisible, setModalVisible] = useState(false);
	const [selectedServiceModalName, setSelectedServiceModalName] =
		useState('');

	const editBtnHandler = (name) => {
		setSelectedServiceModalName(name);
		setModalVisible(true);
	};

	const modalClose = () => {
		setSelectedServiceModalName('');
		setModalVisible(false);
	};

	const visibleElement =
		selectedItems.length > 0 ? (
			<ul>
				{selectedItems.map((item) => (
					<SelectedItem
						dispatch={dispatch}
						name={item.name}
						sum={item.sum}
						key={item.name}
						editable={item.editable}
						onEdit={editBtnHandler}
					/>
				))}
			</ul>
		) : (
			<NoItemsMessage>
				<p>No selected items</p>
			</NoItemsMessage>
		);

	return (
		<>
			<div className={classes.editorBg}>
				<div className={`${'bg-lift'} ${classes.editor}`}>
					{visibleElement}
				</div>
			</div>
			{modalVisible && (
				<ServiceModal
					onConfirm={modalClose}
					name={selectedServiceModalName}
				/>
			)}
		</>
	);
};

export default SelectedItemsEditor;
