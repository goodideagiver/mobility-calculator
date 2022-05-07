import SelectedItemsSum from '../SelectedItemsSum/SelectedItemsSum';
import AppTitle from '../AppTitle/AppTitle';

import classes from './TopPanel.module.css';
import TopControls from '../TopControls/TopControls';

const TopPanel = (props) => {
	return (
		<div className={`${'bg-lift'} ${classes.layout}`}>
			<AppTitle />
			<TopControls />
			<SelectedItemsSum />
		</div>
	);
};

export default TopPanel;
