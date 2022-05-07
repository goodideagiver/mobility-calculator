import MainSection from './components/MainSection/MainSection';
import TopPanel from './components/TopPanel/TopPanel';
import ServiceContextProvider from './store/service-context';

const App = () => {
	return (
		<ServiceContextProvider>
			<div className='vievport-vertical-fill'>
				<TopPanel />
				<MainSection />
			</div>
		</ServiceContextProvider>
	);
};

export default App;
