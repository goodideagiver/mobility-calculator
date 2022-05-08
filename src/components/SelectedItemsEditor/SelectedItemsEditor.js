import { useServiceContext } from '../../store/service-context';
import SelectedItem from './components/SelectedItem';
import classes from './SelectedItemsEditor.module.css';

import NoItemsMessage from '../NoItemsMessage/NoItemsMessage';

const SelectedItemsEditor = () => {
	const { state, dispatch } = useServiceContext();
	const items = state.items;
	const selectedItems = items.filter((item) => item.selected);

	const visibleElement =
		selectedItems.length > 0 ? (
			<ul>
				{selectedItems.map((item) => (
					<SelectedItem
						dispatch={dispatch}
						name={item.name}
						sum={item.sum}
						key={item.name}
					/>
				))}
			</ul>
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
