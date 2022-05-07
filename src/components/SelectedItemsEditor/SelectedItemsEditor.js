import classes from './SelectedItemsEditor.module.css';

const SelectedItemsEditor = (props) => {
	return (
		<div className={classes.editorBg}>
			<div className={`${'bg-lift'} ${classes.editor}`}>
				selected items
			</div>
		</div>
	);
};

export default SelectedItemsEditor;
