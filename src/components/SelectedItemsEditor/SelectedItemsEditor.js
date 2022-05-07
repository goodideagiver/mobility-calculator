import items from '../../placeholder/items';
import SelectedItem from './components/SelectedItem';
import classes from './SelectedItemsEditor.module.css';

const SelectedItemsEditor = (props) => {
	const selectedItems = items.filter((item) => item.selected);

	return (
		<div className={classes.editorBg}>
			<div className={`${'bg-lift'} ${classes.editor}`}>
				{selectedItems.map((item) => (
					<SelectedItem
						name={item.name}
						sum={item.sum}
						key={item.name}
					/>
				))}
			</div>
		</div>
	);
};

export default SelectedItemsEditor;
