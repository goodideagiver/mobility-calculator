import SelectedItemsEditor from '../SelectedItemsEditor/SelectedItemsEditor';
import SidePanel from '../SidePanel/SidePanel';

import classes from './MainSection.module.css'

const MainSection = (props) => {
	return (
		<main className={classes.main}>
			<SidePanel />
			<SelectedItemsEditor />
		</main>
	);
};

export default MainSection;
