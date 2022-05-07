import { useServiceContext } from '../../store/service-context';
import SelectedItem from './components/SelectedItem';
import classes from './SelectedItemsEditor.module.css';

import NoItemsMessage from '../NoItemsMessage/NoItemsMessage';

const SelectedItemsEditor = (props) => {
	const { state } = useServiceContext();
	const items = state.items;
	const selectedItems = items.filter((item) => item.selected);

	const visibleElement =
		selectedItems.length > 0 ? (
			selectedItems.map((item) => (
				<SelectedItem name={item.name} sum={item.sum} key={item.name} />
			))
		) : (
			<NoItemsMessage>
				<p>No selected items</p>
			</NoItemsMessage>
		);

	return (
		<div className={classes.editorBg}>
			<div className={`${'bg-lift'} ${classes.editor}`}>
				{visibleElement}
			</div>
		</div>
	);
};

export default SelectedItemsEditor;
